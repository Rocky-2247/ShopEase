import express from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  forgotPassword,
  resetPassword,
  getUserAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
  subscribeNewsletter
} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/reset-password/:token', resetPassword);
router.post('/newsletter', subscribeNewsletter);

router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route('/addresses')
  .get(protect, getUserAddresses)
  .post(protect, addAddress);

router.route('/addresses/:id')
  .put(protect, updateAddress)
  .delete(protect, deleteAddress);

export default router;
