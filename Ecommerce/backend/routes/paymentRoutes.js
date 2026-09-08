import express from 'express';
import {
  createRazorpayOrder,
  verifyRazorpayPayment,
  validateCoupon
} from '../controllers/paymentController.js';
import { protect, optionalAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create-order', protect, createRazorpayOrder);
router.post('/verify', protect, verifyRazorpayPayment);
router.post('/validate-coupon', optionalAuth, validateCoupon);

export default router;
