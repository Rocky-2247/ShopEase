import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { formatPrice } from '../utils/currency';

export const Wishlist = () => {
  const { wishlist, removeFromWishlist, moveToCart } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-6">
          <Heart className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Your Wishlist is Empty</h2>
        <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
          Save your favorite products here so you can easily purchase them later!
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/25 transition-all"
        >
          <span>Explore Products</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">My Wishlist</h1>
        <p className="text-sm text-slate-500 mt-1">
          You have <strong className="text-slate-800">{wishlist.length}</strong> items saved.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => {
          const isOutOfStock = product.stock <= 0;
          return (
            <div
              key={product.id}
              className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-3">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 rounded-full text-slate-400 hover:text-rose-600 shadow-sm transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <span className="text-[10px] font-bold uppercase text-indigo-600">
                  {product.category?.name || 'Department'}
                </span>
                <Link to={`/products/${product.id || product.slug}`}>
                  <h3 className="text-sm font-bold text-slate-800 hover:text-indigo-600 transition-colors line-clamp-2 mt-0.5">
                    {product.name}
                  </h3>
                </Link>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-sm font-extrabold text-slate-900">
                      {formatPrice(product.discount_price || product.price || 0)}
                    </span>
                    {product.discount_price && product.discount_price < product.price && (
                      <span className="text-xs text-slate-400 line-through">
                        {formatPrice(product.price)}
                      </span>
                    )}
                  </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-50">
                <button
                  disabled={isOutOfStock}
                  onClick={() => moveToCart(product)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    isOutOfStock
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  {isOutOfStock ? 'Out of Stock' : 'Move to Cart'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
