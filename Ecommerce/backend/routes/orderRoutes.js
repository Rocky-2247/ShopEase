import express from 'express';
import {
  createOrder,
  getUserOrders,
  getOrderById,
  cancelOrder,
  downloadInvoice,
  getAllOrdersAdmin,
  updateOrderStatus
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
import { adminOnly } from '../middleware/adminMiddleware.js';

const router = express.Router();

router.use(protect);

router.route('/')
  .post(createOrder)
  .get(getUserOrders);

// Admin-only order list
router.get('/admin/all', adminOnly, getAllOrdersAdmin);

router.route('/:id')
  .get(getOrderById);

router.put('/:id/cancel', cancelOrder);
router.get('/:id/invoice', downloadInvoice);
router.put('/:id/status', adminOnly, updateOrderStatus);

export default router;
