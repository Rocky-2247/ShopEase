import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Sparkles,
  Tag,
  Truck,
  ShieldCheck,
  Check
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';

export const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    discountAmount,
    shippingCharge,
    finalAmount,
    coupon,
    applyCoupon,
    removeCoupon
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [applyingCoupon, setApplyingCoupon] = useState(false);

  const handleApplyCoupon = async (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    try {
      setApplyingCoupon(true);
      await applyCoupon(couponInput.trim());
      setCouponInput('');
    } catch (e) {
      // Handled in context toast
    } finally {
      setApplyingCoupon(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Your Cart is Empty</h2>
        <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
          Explore our trending catalog to discover gadgets, fashion, and everyday essentials!
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/25 transition-all"
        >
          <span>Start Shopping</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Shopping Bag</h1>
        <p className="text-sm text-slate-500 mt-1">Review your selected items and apply coupons before checkout.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">
              {cartItems.map((item) => {
                const p = item.product || {};
                const unitPrice = p.discount_price || p.price || 0;
                return (
                  <div key={item.id || item.product_id} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center">
                    <img
                      src={p.image_url || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200'}
                      alt={p.name}
                      className="w-24 h-24 object-cover rounded-2xl bg-slate-50 shrink-0"
                    />

                    <div className="flex-1 space-y-1">
                      <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
                        {p.category?.name || 'Department'}
                      </span>
                      <Link
                        to={`/products/${p.id || p.slug}`}
                        className="block text-sm font-bold text-slate-800 hover:text-indigo-600 transition-colors"
                      >
                        {p.name}
                      </Link>
                      <div className="flex items-baseline gap-2 pt-1">
                        <span className="text-sm font-extrabold text-slate-900">{formatPrice(unitPrice)}</span>
                        {p.discount_price && p.discount_price < p.price && (
                          <span className="text-xs text-slate-400 line-through">{formatPrice(p.price)}</span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Selector & Item Total */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-50">
                      <div className="flex items-center border border-slate-200 rounded-2xl bg-slate-50 px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id || item.product_id, item.quantity - 1)}
                          className="p-1 text-slate-500 hover:text-indigo-600"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-extrabold text-slate-800 px-3 min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id || item.product_id, item.quantity + 1)}
                          className="p-1 text-slate-500 hover:text-indigo-600"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-right min-w-[80px]">
                        <p className="text-base font-extrabold text-slate-900">
                          {formatPrice(unitPrice * item.quantity)}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id || item.product_id)}
                        className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
              <Link to="/products" className="text-xs font-bold text-indigo-600 hover:underline">
                ← Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="text-xs font-bold text-rose-600 hover:underline flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear Cart
              </button>
            </div>
          </div>
        </div>

        {/* Right: Coupon & Order Summary */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Coupon Code Section */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-3">
            <h3 className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
              <Tag className="w-4 h-4 text-indigo-600" />
              Promotional Voucher
            </h3>

            {coupon ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <div>
                    <span className="text-xs font-bold text-emerald-900 uppercase">{coupon.code}</span>
                    <p className="text-[11px] text-emerald-700 font-medium">Saved {formatPrice(discountAmount)}</p>
                  </div>
                </div>
                <button
                  onClick={removeCoupon}
                  className="text-xs font-bold text-rose-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. WELCOME20, SAVE10"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs uppercase font-bold text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-600"
                />
                <button
                  type="submit"
                  disabled={applyingCoupon || !couponInput.trim()}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl disabled:opacity-40 transition-colors"
                >
                  {applyingCoupon ? '...' : 'Apply'}
                </button>
              </form>
            )}

            {/* Popular Coupons Hint */}
            <div className="pt-2 text-[11px] text-slate-400 flex flex-wrap gap-2">
              <span>Try:</span>
              <button
                onClick={() => applyCoupon('WELCOME20')}
                className="font-bold text-indigo-600 hover:underline bg-indigo-50 px-2 py-0.5 rounded"
              >
                WELCOME20 (20% OFF)
              </button>
              <button
                onClick={() => applyCoupon('SAVE10')}
                className="font-bold text-indigo-600 hover:underline bg-indigo-50 px-2 py-0.5 rounded"
              >
                SAVE10 (10% OFF)
              </button>
            </div>
          </div>

          {/* Order Summary Box */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100">
              Order Summary
            </h3>

            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-bold text-slate-800">{formatPrice(subtotal)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Coupon Discount</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated Delivery</span>
                <span className="font-bold text-slate-800">
                  {shippingCharge === 0 ? <strong className="text-emerald-600">FREE</strong> : formatPrice(shippingCharge)}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-extrabold text-slate-900">Total</span>
              <span className="text-2xl font-black text-indigo-600">{formatPrice(finalAmount)}</span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Assurance Badges */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Secure Checkout
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-indigo-600" /> Fast Delivery
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
