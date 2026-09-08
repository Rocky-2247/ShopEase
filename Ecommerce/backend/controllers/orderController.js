import { Order, OrderItem, Product, ProductVariant, CartItem, User, Coupon } from '../models/index.js';
import { createInvoicePDF } from '../utils/invoiceGenerator.js';
import { sendOrderConfirmationEmail } from '../services/emailService.js';

// Helper to generate unique order number
const generateOrderNumber = () => {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `SE-${dateStr}-${randomStr}`;
};

// @desc    Create new order with variant support, loyalty points redemption, and transactional email
// @route   POST /api/orders
export const createOrder = async (req, res) => {
  try {
    const {
      items,
      shipping_address,
      payment_method = 'COD',
      coupon_code,
      payment_id,
      redeem_points = 0
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, message: 'Order items are required' });
    }

    if (!shipping_address || !shipping_address.street || !shipping_address.city) {
      return res.status(400).json({ success: false, message: 'Shipping address is incomplete' });
    }

    // Verify stock and compute subtotal
    let subtotal = 0;
    const validatedItems = [];

    for (const it of items) {
      const product = await Product.findByPk(it.product_id);
      if (!product) {
        return res.status(404).json({ success: false, message: `Product ID ${it.product_id} no longer exists` });
      }

      let variant = null;
      if (it.variant_id) {
        variant = await ProductVariant.findByPk(it.variant_id);
      }

      const availableStock = variant ? variant.stock : product.stock;
      if (availableStock < it.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for "${variant ? `${product.name} (${variant.name})` : product.name}". Available: ${availableStock}, requested: ${it.quantity}`
        });
      }

      let unitPrice;
      if (variant) {
        unitPrice = variant.discount_price ? variant.discount_price : variant.price;
      } else {
        unitPrice = product.discount_price ? product.discount_price : product.price;
      }

      subtotal += unitPrice * it.quantity;

      validatedItems.push({
        product,
        variant,
        quantity: it.quantity,
        price: unitPrice,
        product_name_snapshot: variant ? `${product.name} - ${variant.name}` : product.name,
        product_image_snapshot: (variant && variant.image_url) ? variant.image_url : product.image_url
      });
    }

    // Coupon discount logic
    let discountAmount = 0;
    if (coupon_code) {
      const coupon = await Coupon.findOne({ where: { code: coupon_code.toUpperCase(), is_active: true } });
      if (coupon && subtotal >= coupon.min_order_value) {
        let calcDiscount = (subtotal * coupon.discount_percentage) / 100;
        if (coupon.max_discount && calcDiscount > coupon.max_discount) {
          calcDiscount = coupon.max_discount;
        }
        discountAmount = parseFloat(calcDiscount.toFixed(2));
      }
    }

    // Points Redemption: 100 points = $10 discount
    const userRecord = await User.findByPk(req.user.id);
    let pointsDiscount = 0;
    const pointsToUse = parseInt(redeem_points, 10) || 0;

    if (pointsToUse > 0 && userRecord && userRecord.points_balance >= pointsToUse) {
      pointsDiscount = parseFloat((pointsToUse / 10).toFixed(2));
      if (pointsDiscount > (subtotal - discountAmount)) {
        pointsDiscount = subtotal - discountAmount;
      }
      // Deduct points
      await userRecord.decrement('points_balance', { by: pointsToUse });
    }

    // Shipping calculation: Free over $100, else $10
    const netSubtotal = subtotal - discountAmount - pointsDiscount;
    const shippingCharge = netSubtotal >= 100 ? 0 : 10;
    const finalAmount = Math.max(0, parseFloat((netSubtotal + shippingCharge).toFixed(2)));

    const orderNumber = generateOrderNumber();

    // Create Order Record
    const order = await Order.create({
      order_number: orderNumber,
      user_id: req.user.id,
      total_amount: parseFloat(subtotal.toFixed(2)),
      discount_amount: parseFloat((discountAmount + pointsDiscount).toFixed(2)),
      shipping_charge: shippingCharge,
      final_amount: finalAmount,
      coupon_code: coupon_code ? coupon_code.toUpperCase() : null,
      payment_method,
      payment_status: (payment_method === 'COD') ? 'Pending' : 'Paid',
      order_status: 'Confirmed',
      shipping_address_snapshot: shipping_address,
      razorpay_payment_id: payment_id || null,
      delivery_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    });

    // Create Order Items and adjust stock
    for (const vItem of validatedItems) {
      await OrderItem.create({
        order_id: order.id,
        product_id: vItem.product.id,
        variant_id: vItem.variant ? vItem.variant.id : null,
        quantity: vItem.quantity,
        price: vItem.price,
        product_name_snapshot: vItem.product_name_snapshot,
        product_image_snapshot: vItem.product_image_snapshot
      });

      // Decrement stock
      if (vItem.variant) {
        await vItem.variant.decrement('stock', { by: vItem.quantity });
        await vItem.product.decrement('stock', { by: vItem.quantity });
      } else {
        await vItem.product.decrement('stock', { by: vItem.quantity });
      }
    }

    // Reward Loyalty Points (1 point per dollar spent)
    const earnedPoints = Math.floor(finalAmount);
    if (earnedPoints > 0) {
      await userRecord.increment('points_balance', { by: earnedPoints });
    }

    // Clear cart items for this user
    await CartItem.destroy({ where: { user_id: req.user.id } });

    const createdOrder = await Order.findByPk(order.id, {
      include: [
        { model: OrderItem, as: 'items' },
        { model: User, as: 'user', attributes: ['id', 'name', 'email', 'phone', 'points_balance'] }
      ]
    });

    // Send asynchronous transactional confirmation email
    sendOrderConfirmationEmail(createdOrder, createdOrder.user);

    return res.status(201).json({
      success: true,
      data: createdOrder,
      earned_points: earnedPoints,
      message: `Order #${orderNumber} placed successfully! You earned ${earnedPoints} ShopPoints.`
    });
  } catch (error) {
    console.error('Order creation error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get logged in user orders
// @route   GET /api/orders
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { user_id: req.user.id },
      include: [{ model: OrderItem, as: 'items' }],
      order: [['createdAt', 'DESC']]
    });

    return res.json({ success: true, data: orders });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get order details by ID
// @route   GET /api/orders/:id
export const getOrderById = async (req, res) => {
  try {
    const isNum = !isNaN(req.params.id);
    const where = isNum ? { id: req.params.id } : { order_number: req.params.id };

    const order = await Order.findOne({
      where,
      include: [
        { model: OrderItem, as: 'items' },
        { model: User, as: 'user', attributes: ['id', 'name', 'email', 'phone', 'points_balance'] }
      ]
    });

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    if (order.user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Not authorized to view this order' });
    }

    return res.json({ success: true, data: order });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Cancel an order
// @route   PUT /api/orders/:id/cancel
export const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [{ model: OrderItem, as: 'items' }]
    });

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    if (order.user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    if (order.order_status === 'Shipped' || order.order_status === 'Delivered') {
      return res.status(400).json({
        success: false,
        message: `Order cannot be cancelled because it is already ${order.order_status}.`
      });
    }

    if (order.order_status === 'Cancelled') {
      return res.status(400).json({ success: false, message: 'Order is already cancelled' });
    }

    // Restock items
    for (const item of order.items) {
      if (item.product_id) {
        await Product.increment('stock', { by: item.quantity, where: { id: item.product_id } });
      }
      if (item.variant_id) {
        await ProductVariant.increment('stock', { by: item.quantity, where: { id: item.variant_id } });
      }
    }

    order.order_status = 'Cancelled';
    await order.save();

    return res.json({ success: true, message: 'Order cancelled successfully', data: order });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Download order invoice as PDF
// @desc    Download official order tax invoice PDF
// @route   GET /api/orders/:id/invoice
export const downloadInvoice = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Not authorized, please sign in' });
    }

    const isNum = !isNaN(req.params.id);
    const where = isNum ? { id: parseInt(req.params.id, 10) } : { order_number: req.params.id };

    const order = await Order.findOne({
      where,
      include: [
        { model: OrderItem, as: 'items' },
        { model: User, as: 'user', attributes: ['id', 'name', 'email', 'phone'] }
      ]
    });

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    if (order.user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Not authorized to download this invoice' });
    }

    const orderNumber = order.order_number || order.id || 'ORDER';
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=Invoice-${orderNumber}.pdf`);

    createInvoicePDF(
      order,
      (chunk) => {
        if (!res.writableEnded) res.write(chunk);
      },
      (err) => {
        if (err) {
          console.error('Invoice PDF stream error:', err);
          if (!res.headersSent) {
            return res.status(500).json({ success: false, message: 'Failed to generate PDF invoice' });
          }
          return res.end();
        }
        if (!res.writableEnded) res.end();
      }
    );
  } catch (error) {
    console.error('Invoice generation error:', error);
    if (!res.headersSent) {
      return res.status(500).json({ success: false, message: error.message || 'Internal Server Error' });
    }
    return res.end();
  }
};

// @desc    Admin: Get all orders
// @route   GET /api/orders/admin/all
export const getAllOrdersAdmin = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const pageNum = Math.max(1, parseInt(page, 10));
    const pageSize = Math.max(1, parseInt(limit, 10));
    const offset = (pageNum - 1) * pageSize;

    const where = {};
    if (status && status !== 'all') {
      where.order_status = status;
    }

    const { count, rows: orders } = await Order.findAndCountAll({
      where,
      include: [
        { model: OrderItem, as: 'items' },
        { model: User, as: 'user', attributes: ['id', 'name', 'email', 'phone'] }
      ],
      order: [['createdAt', 'DESC']],
      limit: pageSize,
      offset
    });

    return res.json({
      success: true,
      data: {
        orders,
        pagination: {
          total: count,
          page: pageNum,
          pages: Math.ceil(count / pageSize),
          limit: pageSize
        }
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Admin: Update order status
// @route   PUT /api/orders/:id/status
export const updateOrderStatus = async (req, res) => {
  try {
    const { status, payment_status } = req.body;
    const order = await Order.findByPk(req.params.id, {
      include: [{ model: OrderItem, as: 'items' }, { model: User, as: 'user' }]
    });

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    if (status) {
      if (status === 'Cancelled' && order.order_status !== 'Cancelled') {
        for (const item of order.items) {
          if (item.product_id) {
            await Product.increment('stock', { by: item.quantity, where: { id: item.product_id } });
          }
          if (item.variant_id) {
            await ProductVariant.increment('stock', { by: item.quantity, where: { id: item.variant_id } });
          }
        }
      }
      order.order_status = status;
    }

    if (payment_status) {
      order.payment_status = payment_status;
    }

    await order.save();

    return res.json({ success: true, message: `Order status updated to "${order.order_status}"`, data: order });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
