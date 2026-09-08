import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Home,
  ArrowLeft,
  Search,
  Compass,
  Sparkles,
  Zap,
  Tag
} from 'lucide-react';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        
        {/* Animated 404 Illustration Badge */}
        <div className="relative inline-block">
          <div className="text-[120px] sm:text-[160px] font-black text-slate-100 tracking-tighter select-none leading-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-2xl shadow-indigo-500/40 animate-bounce-subtle">
              <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
          </div>
        </div>

        {/* Heading & Details */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Oops! Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto leading-relaxed">
            The page you're searching for might have been moved, renamed, or temporarily unavailable. Let's get you back on track!
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3.5 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>

          <Link
            to="/"
            className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/products"
            className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Explore All Products</span>
          </Link>
        </div>

        {/* Popular Quick Navigation Shortcuts */}
        <div className="pt-8 border-t border-slate-100 max-w-lg mx-auto">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            Popular Destinations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
            <Link
              to="/products?sort=popularity"
              className="p-3 rounded-2xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-100 hover:border-indigo-200 transition-all group"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600">
                  Trending Deals
                </span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Best selling items</p>
            </Link>

            <Link
              to="/products?featured=true"
              className="p-3 rounded-2xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-100 hover:border-indigo-200 transition-all group"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600">
                  Featured Picks
                </span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Curated electronics</p>
            </Link>

            <Link
              to="/cart"
              className="p-3 rounded-2xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-100 hover:border-indigo-200 transition-all group col-span-2 sm:col-span-1"
            >
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600">
                  Shopping Bag
                </span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Review your cart</p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
