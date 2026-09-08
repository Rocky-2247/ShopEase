import express from 'express';
import {
  getProductReviews,
  addProductReview
} from '../controllers/reviewController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/product/:id')
  .get(getProductReviews)
  .post(protect, addProductReview);

export default router;
