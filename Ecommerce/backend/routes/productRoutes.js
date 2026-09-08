import express from 'express';
import {
  getProducts,
  getProductById,
  getFeaturedProducts,
  getTrendingProducts,
  getBrands,
  getRelatedProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';
import { adminOnly } from '../middleware/adminMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(protect, adminOnly, createProduct);

router.get('/featured', getFeaturedProducts);
router.get('/trending', getTrendingProducts);
router.get('/brands', getBrands);
router.get('/:id/related', getRelatedProducts);

router.route('/:id')
  .get(getProductById)
  .put(protect, adminOnly, updateProduct)
  .delete(protect, adminOnly, deleteProduct);

export default router;
