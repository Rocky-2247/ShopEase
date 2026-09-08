import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ShoppingBag, ArrowRight, Trash2, Plus, Minus, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/currency';

export const CartDrawer = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    FREE_SHIPPING_THRESHOLD
  } = useCart();

  if (!isDrawerOpen) return null;

  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const remainingForFreeShip = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-slide-left">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-extrabold text-slate-900">Your Shopping Bag</h2>
              <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-indigo-50/70 px-6 py-3 border-b border-indigo-100/60">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 mb-1.5">
              <Truck className="w-4 h-4 text-indigo-600 shrink-0" />
              {remainingForFreeShip === 0 ? (
                <span className="text-emerald-700">🎉 Congratulations! You unlocked Free Delivery!</span>
              ) : (
                <span>
                  Add <strong className="text-indigo-700">{formatPrice(remainingForFreeShip)}</strong> more for Free Delivery
                </span>
              )}
            </div>
            <div className="w-full h-1.5 bg-indigo-200/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-slate-100">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">Your bag is empty</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    Explore our products to find something you love.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    navigate('/products');
                  }}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => {
                const p = item.product || {};
                const unitPrice = p.discount_price ? p.discount_price : p.price ? p.price : 0;
                return (
                  <div key={item.id} className="py-4 flex gap-4">
                    <img
                      src={p.image_url || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200'}
                      alt={p.name}
                      className="w-20 h-20 rounded-2xl object-cover bg-slate-50 border border-slate-100 shrink-0"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{p.name}</h4>
                          <span className="text-[11px] text-slate-400">{p.category?.name || 'Item'}</span>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-rose-500 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Buttons */}
                        <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white rounded-lg text-slate-600 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-slate-800 px-2 min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white rounded-lg text-slate-600 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-black text-slate-900">
                          {formatPrice(unitPrice * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Total & Actions */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-600">Subtotal</span>
                <span className="font-black text-slate-900 text-lg">{formatPrice(subtotal)}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    navigate('/cart');
                  }}
                  className="w-full py-3 px-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold text-xs rounded-2xl transition-colors text-center"
                >
                  View Full Cart
                </button>

                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    navigate('/checkout');
                  }}
                  className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-2xl shadow-lg shadow-indigo-600/25 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
