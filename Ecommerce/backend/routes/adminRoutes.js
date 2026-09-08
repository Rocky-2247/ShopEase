import express from 'express';
import {
  getDashboardStats,
  getUsersList,
  toggleBlockUser,
  toggleUserRole,
  getCouponsList,
  createCoupon,
  updateCoupon,
  deleteCoupon,
  toggleCouponStatus
} from '../controllers/adminController.js';
import { protect } from '../middleware/authMiddleware.js';
import { adminOnly } from '../middleware/adminMiddleware.js';

const router = express.Router();

router.use(protect, adminOnly);

router.get('/dashboard', getDashboardStats);
router.get('/users', getUsersList);
router.put('/users/:id/toggle-block', toggleBlockUser);
router.put('/users/:id/toggle-role', toggleUserRole);

// Coupons Management
router.route('/coupons')
  .get(getCouponsList)
  .post(createCoupon);

router.route('/coupons/:id')
  .put(updateCoupon)
  .delete(deleteCoupon);

router.put('/coupons/:id/toggle', toggleCouponStatus);

export default router;
