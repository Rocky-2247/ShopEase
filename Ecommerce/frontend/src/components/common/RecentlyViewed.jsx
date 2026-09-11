import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, ShoppingBag, Star, Trash2, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { formatPrice } from '../../utils/currency';

export const RECENTLY_VIEWED_KEY = 'shopease_recently_viewed_items';

export const addRecentlyViewed = (product) => {
  if (!product || !product.id) return;
  try {
    const raw = localStorage.getItem(RECENTLY_VIEWED_KEY);
    let items = raw ? JSON.parse(raw) : [];
    // Remove if already exists to push to top
    items = items.filter((item) => item.id !== product.id);
    // Add current product at beginning
    items.unshift({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      discount_price: product.discount_price,
      image_url: product.image_url,
      rating: product.rating,
      review_count: product.review_count,
      category: product.category,
      brand: product.brand,
      stock: product.stock,
      viewedAt: Date.now()
    });
    // Keep max 10 items
    if (items.length > 10) items = items.slice(0, 10);
    localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('recently_viewed_updated'));
  } catch (e) {
    console.warn('Unable to record recently viewed product', e);
  }
};

export const RecentlyViewed = ({ currentProductId = null, title = "Recently Viewed Products" }) => {
  const [items, setItems] = useState([]);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const loadItems = () => {
    try {
      const raw = localStorage.getItem(RECENTLY_VIEWED_KEY);
      let parsed = raw ? JSON.parse(raw) : [];
      if (currentProductId) {
        parsed = parsed.filter((item) => Number(item.id) !== Number(currentProductId));
      }
      setItems(parsed);
    } catch {
      setItems([]);
    }
  };

  useEffect(() => {
    loadItems();
    const handleUpdate = () => loadItems();
    window.addEventListener('recently_viewed_updated', handleUpdate);
    return () => window.removeEventListener('recently_viewed_updated', handleUpdate);
  }, [currentProductId]);

  const handleClearHistory = () => {
    try {
      localStorage.removeItem(RECENTLY_VIEWED_KEY);
      setItems([]);
      showToast('Browsing history cleared', 'info');
    } catch {
      // ignore
    }
  };

  if (items.length === 0) return null;

  return (
    <section className="mt-14 pt-10 border-t border-slate-200/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Clock className="w-3.5 h-3.5" />
            Your Browsing History
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            {title}
            <span className="text-xs font-bold text-slate-400 font-mono bg-slate-100 px-2.5 py-0.5 rounded-full">
              {items.length}
            </span>
          </h2>
        </div>

        <button
          onClick={handleClearHistory}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-rose-600 transition-colors self-start sm:self-auto"
          title="Clear browsing history"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Clear History
        </button>
      </div>

      {/* Horizontal Carousel */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.slice(0, 5).map((product) => {
          const discountPercent =
            product.discount_price && product.discount_price < product.price
              ? Math.round(((product.price - product.discount_price) / product.price) * 100)
              : 0;

          return (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl border border-slate-200/70 p-3 flex flex-col justify-between hover:shadow-xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-50 mb-3">
                  <img
                    src={product.image_url || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {discountPercent > 0 && (
                    <span className="absolute top-2 left-2 bg-gradient-to-r from-rose-500 to-red-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-md shadow-sm">
                      -{discountPercent}%
                    </span>
                  )}
                  {product.brand && (
                    <span className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
                      {product.brand}
                    </span>
                  )}
                </div>

                {/* Rating */}
                {Number(product.rating) > 0 && (
                  <div className="flex items-center gap-1 mb-1 text-[11px] font-bold text-amber-500">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{Number(product.rating).toFixed(1)}</span>
                    <span className="text-slate-400 text-[10px]">({product.review_count || 0})</span>
                  </div>
                )}

                {/* Title */}
                <Link
                  to={`/products/${product.slug || product.id}`}
                  className="block text-xs font-bold text-slate-800 line-clamp-2 group-hover:text-indigo-600 transition-colors leading-snug"
                >
                  {product.name}
                </Link>
              </div>

              {/* Price & Action */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-black text-slate-900">
                    {formatPrice(product.discount_price || product.price)}
                  </div>
                  {product.discount_price && product.discount_price < product.price && (
                    <div className="text-[10px] text-slate-400 line-through">
                      {formatPrice(product.price)}
                    </div>
                  )}
                </div>

                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    try {
                      await addToCart(product.id, 1);
                      showToast(`Added ${product.name} to cart!`, 'success');
                    } catch (err) {
                      showToast(err.message || 'Could not add to cart', 'error');
                    }
                  }}
                  className="p-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm hover:shadow"
                  title="Add to cart"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
