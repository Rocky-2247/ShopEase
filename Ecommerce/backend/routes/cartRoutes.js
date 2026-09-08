import express from 'express';
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  mergeGuestCart
} from '../controllers/cartController.js';
import { optionalAuth, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Allow both logged-in and guest sessions to interact with database cart
router.use(optionalAuth);

router.route('/')
  .get(getCart);

router.post('/add', addToCart);
router.put('/update', updateCartItem);
router.delete('/remove/:id', removeFromCart);
router.delete('/clear', clearCart);
router.post('/merge', protect, mergeGuestCart);

export default router;
