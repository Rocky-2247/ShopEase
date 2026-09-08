import crypto from 'crypto';
import { Order, User, Product, ProductVariant } from '../models/index.js';
import { sendOrderConfirmationEmail } from '../services/emailService.js';

// @desc    Handle Razorpay / Stripe Webhook Events
// @route   POST /api/webhooks/payment
export const handlePaymentWebhook = async (req, res) => {
  try {
    const signature = req.headers['x-razorpay-signature'] || req.headers['stripe-signature'];
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET || process.env.STRIPE_WEBHOOK_SECRET || 'shopease_webhook_secret_key';

    // Verify signature if secret provided
    if (signature && process.env.RAZORPAY_WEBHOOK_SECRET) {
      const shasum = crypto.createHmac('sha256', secret);
      shasum.update(JSON.stringify(req.body));
      const digest = shasum.digest('hex');

      if (digest !== signature) {
        return res.status(400).json({ success: false, message: 'Invalid webhook signature' });
      }
    }

    const event = req.body.event || req.body.type || 'payment.captured';
    const payload = req.body.payload || req.body.data?.object || req.body;

    console.log(`🔔 Webhook received event: ${event}`);

    if (event === 'payment.captured' || event === 'order.paid' || event === 'payment_intent.succeeded') {
      const orderNumber = payload.order_id || payload.notes?.order_number || payload.metadata?.order_number;
      
      if (orderNumber) {
        const order = await Order.findOne({
          where: { order_number: orderNumber },
          include: [{ model: User, as: 'user' }]
        });

        if (order && order.payment_status !== 'Paid') {
          order.payment_status = 'Paid';
          order.order_status = 'Confirmed';
          order.razorpay_payment_id = payload.payment_id || payload.id || `pay_wh_${Date.now()}`;
          await order.save();

          console.log(`✅ Order #${order.order_number} confirmed via webhook payment capture.`);
          sendOrderConfirmationEmail(order, order.user);
        }
      }
    } else if (event === 'refund.processed' || event === 'charge.refunded') {
      const orderNumber = payload.notes?.order_number;
      if (orderNumber) {
        const order = await Order.findOne({ where: { order_number: orderNumber } });
        if (order) {
          order.order_status = 'Cancelled';
          order.payment_status = 'Refunded';
          await order.save();
          console.log(`↩️ Refund processed for Order #${order.order_number}`);
        }
      }
    }

    return res.status(200).json({ status: 'ok', received: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
