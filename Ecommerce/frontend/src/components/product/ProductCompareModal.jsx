import React, { useState, useEffect, createContext, useContext } from 'react';
import { X, Check, ArrowRight, Sparkles, Scale, Trash2, ShoppingBag, Star, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { formatPrice } from '../../utils/currency';

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareItems, setCompareItems] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Load from session storage
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('shopease_compare_items');
      if (saved) setCompareItems(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  const saveItems = (items) => {
    setCompareItems(items);
    try {
      sessionStorage.setItem('shopease_compare_items', JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const addToCompare = (product) => {
    if (!product || !product.id) return false;
    if (compareItems.some((item) => item.id === product.id)) {
      return false; // already added
    }
    if (compareItems.length >= 4) {
      return 'MAX_REACHED';
    }
    saveItems([...compareItems, product]);
    return true;
  };

  const removeFromCompare = (productId) => {
    saveItems(compareItems.filter((item) => item.id !== productId));
  };

  const clearCompare = () => {
    saveItems([]);
  };

  const isInCompare = (productId) => {
    return compareItems.some((item) => item.id === productId);
  };

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        isCompareOpen,
        setIsCompareOpen
      }}
    >
      {children}
      <ProductCompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        items={compareItems}
        onRemove={removeFromCompare}
        onClear={clearCompare}
      />
      <CompareFloatingBar
        items={compareItems}
        onOpen={() => setIsCompareOpen(true)}
        onRemove={removeFromCompare}
        onClear={clearCompare}
      />
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);

// Floating Dock on Bottom of Screen
export const CompareFloatingBar = ({ items, onOpen, onRemove, onClear }) => {
  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur-xl text-white rounded-2xl shadow-2xl border border-slate-700/60 px-5 py-3.5 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-300">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-sm">
          <Scale className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-black tracking-wide uppercase text-indigo-300">
            Product Compare ({items.length}/4)
          </div>
          <div className="text-[11px] text-slate-300 hidden sm:block">
            Side-by-side spec comparison
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex items-center gap-2">
        {items.map((item) => (
          <div key={item.id} className="relative group/thumb">
            <img
              src={item.image_url || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80'}
              alt={item.name}
              className="w-10 h-10 rounded-xl object-cover border border-slate-700 bg-slate-800"
            />
            <button
              onClick={() => onRemove(item.id)}
              className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px] opacity-0 group-hover/thumb:opacity-100 transition-opacity"
              title="Remove"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 border-l border-slate-700 pl-3">
        <button
          onClick={onOpen}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/30 flex items-center gap-1.5"
        >
          Compare Now
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={onClear}
          className="p-2 text-slate-400 hover:text-slate-200 transition-colors"
          title="Clear all"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Full Screen / Modal Comparison Table
export const ProductCompareModal = ({ isOpen, onClose, items, onRemove, onClear }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  if (!isOpen || items.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-100 text-indigo-600">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900">Side-by-Side Product Comparison</h2>
              <p className="text-xs text-slate-500">
                Comparing {items.length} of max 4 selected products
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClear}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Content */}
        <div className="overflow-x-auto p-6 flex-1">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <tbody>
              {/* Product Header Row */}
              <tr>
                <td className="w-44 py-4 pr-4 font-bold text-xs text-slate-400 uppercase tracking-wider align-top">
                  Product
                </td>
                {items.map((product) => (
                  <td key={product.id} className="p-4 align-top w-1/4 min-w-[200px]">
                    <div className="relative group">
                      <button
                        onClick={() => onRemove(product.id)}
                        className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full bg-slate-900/60 text-white hover:bg-rose-600 flex items-center justify-center text-xs transition-colors"
                        title="Remove product"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                      <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 mb-3">
                        <img
                          src={product.image_url || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300'}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Link
                        to={`/products/${product.slug || product.id}`}
                        onClick={onClose}
                        className="text-sm font-bold text-slate-900 line-clamp-2 hover:text-indigo-600 transition-colors"
                      >
                        {product.name}
                      </Link>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Price Row */}
              <tr className="border-t border-slate-100 bg-slate-50/50">
                <td className="py-4 pr-4 font-bold text-xs text-slate-400 uppercase tracking-wider">
                  Price
                </td>
                {items.map((product) => (
                  <td key={product.id} className="p-4">
                    <div className="text-lg font-black text-indigo-600">
                      {formatPrice(product.discount_price || product.price)}
                    </div>
                    {product.discount_price && product.discount_price < product.price && (
                      <div className="text-xs text-slate-400 line-through">
                        {formatPrice(product.price)}
                      </div>
                    )}
                  </td>
                ))}
              </tr>

              {/* Rating Row */}
              <tr className="border-t border-slate-100">
                <td className="py-4 pr-4 font-bold text-xs text-slate-400 uppercase tracking-wider">
                  Rating
                </td>
                {items.map((product) => (
                  <td key={product.id} className="p-4">
                    <div className="flex items-center gap-1.5 font-bold text-sm text-slate-800">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{Number(product.rating || 0).toFixed(1)}</span>
                      <span className="text-xs font-normal text-slate-400">
                        ({product.review_count || 0} reviews)
                      </span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Brand Row */}
              <tr className="border-t border-slate-100 bg-slate-50/50">
                <td className="py-4 pr-4 font-bold text-xs text-slate-400 uppercase tracking-wider">
                  Brand
                </td>
                {items.map((product) => (
                  <td key={product.id} className="p-4 text-sm font-bold text-slate-700">
                    {product.brand || 'ShopEase Generic'}
                  </td>
                ))}
              </tr>

              {/* Category Row */}
              <tr className="border-t border-slate-100">
                <td className="py-4 pr-4 font-bold text-xs text-slate-400 uppercase tracking-wider">
                  Category
                </td>
                {items.map((product) => (
                  <td key={product.id} className="p-4 text-xs font-semibold text-slate-600">
                    {typeof product.category === 'object' ? product.category?.name : (product.category || 'General')}
                  </td>
                ))}
              </tr>

              {/* Stock Status Row */}
              <tr className="border-t border-slate-100 bg-slate-50/50">
                <td className="py-4 pr-4 font-bold text-xs text-slate-400 uppercase tracking-wider">
                  Availability
                </td>
                {items.map((product) => (
                  <td key={product.id} className="p-4">
                    {(product.stock > 0) ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                        <Check className="w-3.5 h-3.5" />
                        In Stock ({product.stock} units)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Out of Stock
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Description Snippet */}
              <tr className="border-t border-slate-100">
                <td className="py-4 pr-4 font-bold text-xs text-slate-400 uppercase tracking-wider align-top">
                  Description
                </td>
                {items.map((product) => (
                  <td key={product.id} className="p-4 text-xs text-slate-600 line-clamp-4 leading-relaxed">
                    {product.description || 'Premium high-grade product from the ShopEase collection.'}
                  </td>
                ))}
              </tr>

              {/* Action Button Row */}
              <tr className="border-t border-slate-200">
                <td className="py-4 pr-4 font-bold text-xs text-slate-400 uppercase tracking-wider">
                  Action
                </td>
                {items.map((product) => (
                  <td key={product.id} className="p-4">
                    <button
                      onClick={async () => {
                        try {
                          await addToCart(product.id, 1);
                          showToast(`Added ${product.name} to cart!`, 'success');
                        } catch (err) {
                          showToast(err.message || 'Could not add to cart', 'error');
                        }
                      }}
                      disabled={product.stock <= 0}
                      className="w-full py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/20"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
