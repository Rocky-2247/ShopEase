import { CartItem, Product, ProductVariant, Category } from '../models/index.js';

// Helper to determine active cart identifier (User ID or Guest Session ID)
const getCartWhere = (req) => {
  if (req.user && req.user.id) {
    return { user_id: req.user.id };
  }
  const sessionId = req.headers['x-session-id'] || req.query.session_id || req.body?.session_id;
  if (sessionId) {
    return { session_id: String(sessionId) };
  }
  return null;
};

// Helper to compute and format full cart directly from Database
export const fetchFormattedCart = async (whereClause) => {
  if (!whereClause) {
    return { items: [], subtotal: 0, count: 0 };
  }

  const items = await CartItem.findAll({
    where: whereClause,
    include: [
      {
        model: Product,
        as: 'product',
        include: [{ model: Category, as: 'category' }]
      },
      {
        model: ProductVariant,
        as: 'variant'
      }
    ],
    order: [['createdAt', 'DESC']]
  });

  let subtotal = 0;
  const formattedItems = items.map((item) => {
    const p = item.product;
    const v = item.variant;

    if (!p) {
      return {
        id: item.id,
        product_id: item.product_id,
        variant_id: item.variant_id || null,
        quantity: item.quantity,
        product: null,
        item_total: 0
      };
    }

    const unitPrice = v
      ? (v.discount_price || v.price)
      : (p.discount_price ? p.discount_price : p.price);
    const itemTotal = unitPrice * item.quantity;
    subtotal += itemTotal;

    const productJson = p.toJSON();
    if (v) {
      productJson.name = `${p.name} (${v.name})`;
      productJson.price = v.price;
      productJson.discount_price = v.discount_price;
      productJson.stock = v.stock;
      if (v.image_url) productJson.image_url = v.image_url;
    }

    return {
      id: item.id,
      product_id: item.product_id,
      variant_id: item.variant_id || null,
      quantity: item.quantity,
      product: productJson,
      item_total: parseFloat(itemTotal.toFixed(2))
    };
  }).filter((item) => item.product !== null);

  return {
    items: formattedItems,
    subtotal: parseFloat(subtotal.toFixed(2)),
    count: formattedItems.reduce((acc, curr) => acc + curr.quantity, 0)
  };
};

// @desc    Get current user or guest cart
// @route   GET /api/cart
export const getCart = async (req, res) => {
  try {
    const whereClause = getCartWhere(req);
    const cartData = await fetchFormattedCart(whereClause);
    return res.json({
      success: true,
      data: cartData
    });
  } catch (error) {
    console.error('getCart error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Add item to cart (Persists immediately to database)
// @route   POST /api/cart/add
export const addToCart = async (req, res) => {
  try {
    const whereClause = getCartWhere(req);
    if (!whereClause) {
      return res.status(400).json({
        success: false,
        message: 'Cart identifier (user or session ID) is required'
      });
    }

    const { product_id, variant_id = null, quantity = 1 } = req.body;
    const qty = Math.max(1, parseInt(quantity, 10) || 1);

    const product = await Product.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    let variant = null;
    if (variant_id) {
      variant = await ProductVariant.findByPk(variant_id);
    }

    const availableStock = variant ? variant.stock : product.stock;
    if (availableStock < qty) {
      return res.status(400).json({
        success: false,
        message: `Only ${availableStock} items remaining in stock`
      });
    }

    const findCondition = {
      ...whereClause,
      product_id,
      ...(variant_id ? { variant_id } : { variant_id: null })
    };

    let cartItem = await CartItem.findOne({ where: findCondition });

    if (cartItem) {
      const newQty = cartItem.quantity + qty;
      if (availableStock < newQty) {
        return res.status(400).json({
          success: false,
          message: `Cannot add more. Max stock available: ${availableStock}`
        });
      }
      cartItem.quantity = newQty;
      await cartItem.save();
    } else {
      cartItem = await CartItem.create({
        user_id: whereClause.user_id || null,
        session_id: whereClause.session_id || null,
        product_id,
        variant_id: variant_id || null,
        quantity: qty
      });
    }

    const cartData = await fetchFormattedCart(whereClause);
    return res.json({
      success: true,
      message: 'Item added to database cart successfully',
      data: cartData
    });
  } catch (error) {
    console.error('addToCart error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update cart item quantity in database
// @route   PUT /api/cart/update
export const updateCartItem = async (req, res) => {
  try {
    const whereClause = getCartWhere(req);
    if (!whereClause) {
      return res.status(400).json({ success: false, message: 'Cart identifier required' });
    }

    const { product_id, id, quantity } = req.body;
    const qty = parseInt(quantity, 10);

    let cartItem = null;
    if (id) {
      cartItem = await CartItem.findOne({
        where: { ...whereClause, id }
      });
    }
    if (!cartItem && product_id) {
      cartItem = await CartItem.findOne({
        where: { ...whereClause, product_id }
      });
    }

    if (!cartItem) {
      return res.status(404).json({ success: false, message: 'Item not found in cart' });
    }

    if (qty <= 0) {
      await cartItem.destroy();
      const cartData = await fetchFormattedCart(whereClause);
      return res.json({
        success: true,
        message: 'Item removed from cart',
        data: cartData
      });
    }

    // Check stock
    let availableStock = 999;
    if (cartItem.variant_id) {
      const v = await ProductVariant.findByPk(cartItem.variant_id);
      if (v) availableStock = v.stock;
    } else {
      const p = await Product.findByPk(cartItem.product_id);
      if (p) availableStock = p.stock;
    }

    if (availableStock < qty) {
      return res.status(400).json({
        success: false,
        message: `Only ${availableStock} units available in stock`
      });
    }

    cartItem.quantity = qty;
    await cartItem.save();

    const cartData = await fetchFormattedCart(whereClause);
    return res.json({
      success: true,
      message: 'Cart updated successfully in database',
      data: cartData
    });
  } catch (error) {
    console.error('updateCartItem error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Remove item from database cart
// @route   DELETE /api/cart/remove/:id
export const removeFromCart = async (req, res) => {
  try {
    const whereClause = getCartWhere(req);
    if (!whereClause) {
      return res.status(400).json({ success: false, message: 'Cart identifier required' });
    }

    const target = req.params.id;
    let item = await CartItem.findOne({
      where: { ...whereClause, id: target }
    });

    if (!item) {
      item = await CartItem.findOne({
        where: { ...whereClause, product_id: target }
      });
    }

    if (!item) {
      return res.status(404).json({ success: false, message: 'Cart item not found' });
    }

    await item.destroy();
    const cartData = await fetchFormattedCart(whereClause);
    return res.json({
      success: true,
      message: 'Item removed from database cart',
      data: cartData
    });
  } catch (error) {
    console.error('removeFromCart error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Clear entire cart from database
// @route   DELETE /api/cart/clear
export const clearCart = async (req, res) => {
  try {
    const whereClause = getCartWhere(req);
    if (whereClause) {
      await CartItem.destroy({ where: whereClause });
    }
    return res.json({
      success: true,
      message: 'Cart cleared successfully from database',
      data: { items: [], subtotal: 0, count: 0 }
    });
  } catch (error) {
    console.error('clearCart error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Merge guest cart into user account upon login/register
// @route   POST /api/cart/merge
export const mergeGuestCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { session_id, items = [] } = req.body;

    // 1. Merge items from session_id if provided
    if (session_id) {
      const guestItems = await CartItem.findAll({
        where: { session_id: String(session_id) }
      });

      for (const gItem of guestItems) {
        const existing = await CartItem.findOne({
          where: {
            user_id: userId,
            product_id: gItem.product_id,
            variant_id: gItem.variant_id || null
          }
        });

        if (existing) {
          existing.quantity += gItem.quantity;
          await existing.save();
          await gItem.destroy();
        } else {
          gItem.user_id = userId;
          gItem.session_id = null;
          await gItem.save();
        }
      }
    }

    // 2. Also merge any manual items payload
    if (Array.isArray(items) && items.length > 0) {
      for (const item of items) {
        const pId = item.product_id || item.product?.id;
        if (!pId) continue;
        const vId = item.variant_id || null;
        const qty = item.quantity || 1;

        const existing = await CartItem.findOne({
          where: {
            user_id: userId,
            product_id: pId,
            variant_id: vId
          }
        });

        if (existing) {
          existing.quantity += qty;
          await existing.save();
        } else {
          await CartItem.create({
            user_id: userId,
            product_id: pId,
            variant_id: vId,
            quantity: qty
          });
        }
      }
    }

    const cartData = await fetchFormattedCart({ user_id: userId });
    return res.json({
      success: true,
      message: 'Cart merged successfully into your account',
      data: cartData
    });
  } catch (error) {
    console.error('mergeGuestCart error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
