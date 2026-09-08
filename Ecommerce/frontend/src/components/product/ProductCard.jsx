import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Tag, Zap, Truck, Video, Layers } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { StarRating } from '../common/StarRating';
import { formatPrice } from '../../utils/currency';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  if (!product) return null;

  const wishlisted = isWishlisted(product.id);
  const currentPrice = product.discount_price || product.price;
  const originalPrice = product.price;
  const hasDiscount = product.discount_price && product.discount_price < originalPrice;
  const discountAmount = hasDiscount ? originalPrice - product.discount_price : 0;
  const discountPercent = hasDiscount
    ? Math.round(((originalPrice - product.discount_price) / originalPrice) * 100)
    : null;

  const imageCount = Array.isArray(product.images) && product.images.length > 0
    ? product.images.length
    : (product.image_url ? 1 : 0);
  const hasMediaBadge = imageCount > 1 || !!product.video_url;

  return (
    <div className="group relative bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col justify-between">
      
      {/* Product Image & Badges */}
      <div className="relative w-full aspect-square bg-slate-50 rounded-2xl overflow-hidden mb-3">
        <Link to={`/products/${product.id || product.slug}`} className="block w-full h-full">
          <img
            src={product.image_url || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600'}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>

        {/* Discount Badge */}
        {discountPercent && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-md shadow-rose-500/25 flex items-center gap-1">
            <Zap className="w-3 h-3 fill-white" />
            <span>{discountPercent}% OFF</span>
          </div>
        )}

        {/* Low Stock Warning */}
        {product.stock > 0 && product.stock <= 5 && (
          <div className="absolute bottom-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow">
            Only {product.stock} left!
          </div>
        )}

        {/* Out of Stock Pill */}
        {product.stock <= 0 && (
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center">
            <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full border border-slate-700">
              Out of Stock
            </span>
          </div>
        )}

        {/* Dynamic Media Badge (renders only when extra views or video clip actually exist) */}
        {hasMediaBadge && (
          <div className="absolute bottom-2.5 right-2.5 bg-slate-950/75 backdrop-blur-md text-white text-[10px] font-black px-2 py-0.5 rounded-lg flex items-center gap-1.5 border border-white/10 shadow-sm pointer-events-none">
            {imageCount > 1 && (
              <span className="flex items-center gap-1 text-indigo-300">
                <Layers className="w-2.5 h-2.5" /> {imageCount} Views
              </span>
            )}
            {imageCount > 1 && product.video_url && (
              <span className="text-slate-500">•</span>
            )}
            {product.video_url && (
              <span className="flex items-center gap-1 text-rose-300">
                <Video className="w-2.5 h-2.5" /> Clip
              </span>
            )}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(product)}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md shadow-sm transition-all duration-200 cursor-pointer ${
            wishlisted
              ? 'bg-rose-50 text-rose-500 shadow-rose-200'
              : 'bg-white/85 text-slate-400 hover:text-rose-500 hover:bg-white'
          }`}
          title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>
      </div>

      {/* Product Information */}
      <div className="space-y-2 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-1">
            {product.category && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                {product.category.name}
              </span>
            )}
            {hasDiscount && (
              <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                Save {formatPrice(discountAmount)}
              </span>
            )}
          </div>

          <Link to={`/products/${product.id || product.slug}`}>
            <h3 className="text-sm font-bold text-slate-800 line-clamp-2 hover:text-indigo-600 transition-colors mt-1.5 leading-snug">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Rating and Price Section */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1 mb-2">
            <StarRating rating={product.rating || 0} size="sm" />
            <span className="text-[11px] text-slate-400 font-medium ml-1">
              ({product.num_reviews || 0})
            </span>
          </div>

          {/* Pricing & Add To Cart Button */}
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-black text-slate-900">
                  {formatPrice(currentPrice)}
                </span>
                {hasDiscount && (
                  <span className="text-xs text-slate-400 line-through font-medium">
                    {formatPrice(originalPrice)}
                  </span>
                )}
              </div>
              {hasDiscount && (
                <p className="text-[10px] font-bold text-emerald-600">
                  {discountPercent}% Instant Discount Applied
                </p>
              )}
            </div>

            {/* Quick Add To Cart Button */}
            <button
              disabled={product.stock <= 0}
              onClick={() => addToCart(product, 1)}
              className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200 shadow-sm active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              title="Add to cart"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>

          {/* Offer Highlight Strip */}
          {(hasDiscount || product.is_featured || product.is_trending) && (
            <div className="mt-2.5 pt-2 border-t border-dashed border-slate-200/80 flex flex-col gap-1 text-[10px]">
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center gap-1 font-semibold text-indigo-700 bg-indigo-50/80 px-1.5 py-0.5 rounded">
                  <Tag className="w-3 h-3 text-indigo-600" /> Code <strong>SAVE10</strong>
                </span>
                <span className="font-bold text-emerald-600">
                  {discountPercent ? `${discountPercent}% OFF` : 'Special Offer'}
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-400 font-medium pt-0.5">
                <span className="flex items-center gap-1"><Truck className="w-3 h-3 text-slate-400" /> Free Express Delivery</span>
                {product.is_trending ? (
                  <span className="text-amber-600 font-semibold">⚡ Top Trending</span>
                ) : (
                  <span className="text-indigo-600 font-semibold">★ Top Quality</span>
                )}
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default ProductCard;
