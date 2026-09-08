import express from 'express';
import { upload } from '../middleware/uploadMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';
import { adminOnly } from '../middleware/adminMiddleware.js';

const router = express.Router();

// Upload single product image
router.post('/', protect, adminOnly, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  // Construct URL
  const imageUrl = `/uploads/${req.file.filename}`;
  return res.json({
    success: true,
    message: 'Image uploaded successfully',
    url: imageUrl
  });
});

// Upload multiple product images
router.post('/multiple', protect, adminOnly, upload.array('images', 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ success: false, message: 'No files uploaded' });
  }

  const urls = req.files.map(file => `/uploads/${file.filename}`);
  return res.json({
    success: true,
    message: 'Images uploaded successfully',
    urls
  });
});

export default router;
