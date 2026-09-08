import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, ShieldCheck, Truck, RefreshCw, Headphones, ArrowRight, Heart } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { newsletterAPI } from '../../services/api';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { showToast } = useToast();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    try {
      const res = await newsletterAPI.subscribe(newsletterEmail);
      showToast(res.data.message || 'Subscribed! Check your inbox for your 10% welcome coupon.', 'success');
      setNewsletterEmail('');
    } catch (err) {
      showToast(err.message || 'Failed to subscribe', 'error');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Value Propositions / Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-14 border-b border-slate-800 text-slate-300">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Free Express Shipping</h4>
              <p className="text-xs text-slate-400 mt-0.5">On all orders above ₹999</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Secure Payment</h4>
              <p className="text-xs text-slate-400 mt-0.5">256-bit SSL encryption</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">30-Day Free Returns</h4>
              <p className="text-xs text-slate-400 mt-0.5">Hassle-free guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">24/7 Dedicated Support</h4>
              <p className="text-xs text-slate-400 mt-0.5">Live chat & phone support</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-md">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight font-display text-white">
                Shop<span className="text-indigo-400">Ease</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Experience modern, reliable online shopping with curated collections, lightning-fast dispatch, and state-of-the-art security.
            </p>
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Subscribe to our newsletter</p>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-slate-800/80 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 flex-1"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center gap-1.5 shrink-0"
                >
                  Join <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Shop Categories</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/products?category=electronics" className="hover:text-indigo-400 transition-colors">Electronics & Tech</Link></li>
              <li><Link to="/products?category=fashion-apparel" className="hover:text-indigo-400 transition-colors">Fashion & Apparel</Link></li>
              <li><Link to="/products?category=home-living" className="hover:text-indigo-400 transition-colors">Home & Living</Link></li>
              <li><Link to="/products?category=beauty-care" className="hover:text-indigo-400 transition-colors">Beauty & Personal Care</Link></li>
              <li><Link to="/products?category=sports-outdoors" className="hover:text-indigo-400 transition-colors">Sports & Outdoors</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Customer Care</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/orders" className="hover:text-indigo-400 transition-colors">Track Order</Link></li>
              <li><Link to="/profile" className="hover:text-indigo-400 transition-colors">Account Settings</Link></li>
              <li><Link to="/wishlist" className="hover:text-indigo-400 transition-colors">My Wishlist</Link></li>
              <li><a href="#help" onClick={(e) => { e.preventDefault(); showToast('Support is available 24/7 at support@shopease.com', 'info'); }} className="hover:text-indigo-400 transition-colors">Help & FAQ</a></li>
              <li><a href="#shipping" onClick={(e) => { e.preventDefault(); showToast('Free express 24-48h delivery on orders over ₹999', 'info'); }} className="hover:text-indigo-400 transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">ShopEase</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/admin" className="hover:text-indigo-400 transition-colors text-indigo-300 font-medium">Admin Portal</Link></li>
              <li><a href="http://localhost:5000/api-docs" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">Swagger API Docs</a></li>
              <li><span className="text-slate-500">Privacy Policy</span></li>
              <li><span className="text-slate-500">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ShopEase Inc. All rights reserved. Full-Stack E-Commerce Platform.</p>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for high performance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
