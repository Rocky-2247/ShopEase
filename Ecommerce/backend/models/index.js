import { sequelize } from '../config/db.js';
import User from './User.js';
import Category from './Category.js';
import Product from './Product.js';
import ProductVariant from './ProductVariant.js';
import CartItem from './CartItem.js';
import WishlistItem from './WishlistItem.js';
import Address from './Address.js';
import Order from './Order.js';
import OrderItem from './OrderItem.js';
import Review from './Review.js';
import Coupon from './Coupon.js';

// Category <-> Product
Category.hasMany(Product, { foreignKey: 'category_id', as: 'products', onDelete: 'CASCADE' });
Product.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });

// Product <-> ProductVariant
Product.hasMany(ProductVariant, { foreignKey: 'product_id', as: 'variants', onDelete: 'CASCADE' });
ProductVariant.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });

// User <-> CartItem
User.hasMany(CartItem, { foreignKey: 'user_id', as: 'cart_items', onDelete: 'CASCADE' });
CartItem.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// Product <-> CartItem
Product.hasMany(CartItem, { foreignKey: 'product_id', as: 'in_carts', onDelete: 'CASCADE' });
CartItem.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });
CartItem.belongsTo(ProductVariant, { foreignKey: 'variant_id', as: 'variant' });

// User <-> WishlistItem
User.hasMany(WishlistItem, { foreignKey: 'user_id', as: 'wishlist_items', onDelete: 'CASCADE' });
WishlistItem.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// Product <-> WishlistItem
Product.hasMany(WishlistItem, { foreignKey: 'product_id', as: 'in_wishlists', onDelete: 'CASCADE' });
WishlistItem.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });

// User <-> Address
User.hasMany(Address, { foreignKey: 'user_id', as: 'addresses', onDelete: 'CASCADE' });
Address.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// User <-> Order
User.hasMany(Order, { foreignKey: 'user_id', as: 'orders', onDelete: 'CASCADE' });
Order.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// Order <-> OrderItem
Order.hasMany(OrderItem, { foreignKey: 'order_id', as: 'items', onDelete: 'CASCADE' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id', as: 'order' });

// Product <-> OrderItem
Product.hasMany(OrderItem, { foreignKey: 'product_id', as: 'order_items', onDelete: 'SET NULL' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });
OrderItem.belongsTo(ProductVariant, { foreignKey: 'variant_id', as: 'variant' });

// Product <-> Review
Product.hasMany(Review, { foreignKey: 'product_id', as: 'reviews', onDelete: 'CASCADE' });
Review.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });

// User <-> Review
User.hasMany(Review, { foreignKey: 'user_id', as: 'user_reviews', onDelete: 'CASCADE' });
Review.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

export {
  sequelize,
  User,
  Category,
  Product,
  ProductVariant,
  CartItem,
  WishlistItem,
  Address,
  Order,
  OrderItem,
  Review,
  Coupon
};
