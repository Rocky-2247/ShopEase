import { Review, Product, User } from '../models/index.js';

// @desc    Get reviews for a product
// @route   GET /api/reviews/product/:id
export const getProductReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { product_id: req.params.id },
      include: [{ model: User, as: 'user', attributes: ['id', 'name'] }],
      order: [['createdAt', 'DESC']]
    });
    return res.json({ success: true, data: reviews });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Add review to product
// @route   POST /api/reviews/product/:id
export const addProductReview = async (req, res) => {
  try {
    const { rating, comment, image_url } = req.body;
    const productId = req.params.id;

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    if (!rating || !comment) {
      return res.status(400).json({ success: false, message: 'Rating and comment are required' });
    }

    // Check if user already reviewed
    const existingReview = await Review.findOne({
      where: { user_id: req.user.id, product_id: productId }
    });

    if (existingReview) {
      existingReview.rating = parseFloat(rating);
      existingReview.comment = comment;
      existingReview.image_url = image_url || existingReview.image_url;
      existingReview.user_name = req.user.name;
      await existingReview.save();
    } else {
      await Review.create({
        user_id: req.user.id,
        product_id: productId,
        user_name: req.user.name,
        rating: parseFloat(rating),
        comment,
        image_url: image_url || null,
        is_verified_buyer: true
      });
    }

    // Recalculate average rating
    const allReviews = await Review.findAll({ where: { product_id: productId } });
    const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;

    product.rating = parseFloat(avgRating.toFixed(1));
    product.num_reviews = allReviews.length;
    await product.save();

    return res.status(201).json({
      success: true,
      message: existingReview ? 'Review updated successfully' : 'Review posted successfully',
      data: {
        rating: product.rating,
        num_reviews: product.num_reviews
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
