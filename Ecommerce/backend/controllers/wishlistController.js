import { WishlistItem, Product, Category, CartItem } from '../models/index.js';

// @desc    Get user's wishlist
// @route   GET /api/wishlist
export const getWishlist = async (req, res) => {
  try {
    const items = await WishlistItem.findAll({
      where: { user_id: req.user.id },
      include: [
        {
          model: Product,
          as: 'product',
          include: [{ model: Category, as: 'category' }]
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    return res.json({
      success: true,
      data: items.map(item => item.product).filter(Boolean)
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Add or toggle product in wishlist
// @route   POST /api/wishlist/toggle
export const toggleWishlist = async (req, res) => {
  try {
    const { product_id } = req.body;

    const existing = await WishlistItem.findOne({
      where: { user_id: req.user.id, product_id }
    });

    if (existing) {
      await existing.destroy();
      return res.json({ success: true, is_wishlisted: false, message: 'Removed from wishlist' });
    } else {
      await WishlistItem.create({
        user_id: req.user.id,
        product_id
      });
      return res.json({ success: true, is_wishlisted: true, message: 'Added to wishlist' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Remove from wishlist
// @route   DELETE /api/wishlist/remove/:id
export const removeFromWishlist = async (req, res) => {
  try {
    const target = req.params.id;
    await WishlistItem.destroy({
      where: {
        user_id: req.user.id,
        product_id: target
      }
    });

    return res.json({ success: true, message: 'Removed from wishlist' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Move item from wishlist to cart
// @route   POST /api/wishlist/move-to-cart
export const moveToCart = async (req, res) => {
  try {
    const { product_id } = req.body;

    // Check product stock
    const product = await Product.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    if (product.stock <= 0) {
      return res.status(400).json({ success: false, message: 'Product is currently out of stock' });
    }

    // Add to cart
    let cartItem = await CartItem.findOne({
      where: { user_id: req.user.id, product_id }
    });

    if (cartItem) {
      cartItem.quantity += 1;
      await cartItem.save();
    } else {
      await CartItem.create({
        user_id: req.user.id,
        product_id,
        quantity: 1
      });
    }

    // Remove from wishlist
    await WishlistItem.destroy({
      where: { user_id: req.user.id, product_id }
    });

    return res.json({ success: true, message: 'Moved item to shopping cart' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
