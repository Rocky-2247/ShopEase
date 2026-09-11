import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Filter,
  SlidersHorizontal,
  X,
  Search,
  ChevronLeft,
  ChevronRight,
  Star,
  RotateCcw,
  Sparkles,
  Zap,
  Flame,
  Clock,
  Percent,
  Copy,
  Check,
  ShieldCheck,
  Truck,
  Gift,
  Tag,
  Award,
  ArrowRight
} from 'lucide-react';
import { productsAPI, categoriesAPI } from '../services/api';
import { ProductCard } from '../components/product/ProductCard';
import { ProductCardSkeleton } from '../components/common/Loader';
import { BrandMarquee } from '../components/common/BrandMarquee';
import { Pagination } from '../components/common/Pagination';
import { useToast } from '../context/ToastContext';
import { getDepartmentMeta } from '../utils/departmentData';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { showToast } = useToast();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 });
  const [loading, setLoading] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [copiedCoupon, setCopiedCoupon] = useState(null);

  // Live Flash Sale Countdown Timer (Synchronized to daily campaign window)
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    const diff = Math.max(0, Math.floor((endOfDay.getTime() - now.getTime()) / 1000));
    return {
      hours: Math.floor(diff / 3600),
      minutes: Math.floor((diff % 3600) / 60),
      seconds: diff % 60
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyCouponCode = (code, desc) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    showToast(`Coupon "${code}" copied! ${desc}`, 'success');
    setTimeout(() => setCopiedCoupon(null), 3000);
  };

  // Filters State from URL params
  const keyword = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || '';
  const brand = searchParams.get('brand') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';
  const rating = searchParams.get('rating') || '';
  const inStock = searchParams.get('inStock') === 'true';
  const sort = searchParams.get('sort') || 'newest';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '12', 10);

  // Fetch Categories & Brands once
  useEffect(() => {
    Promise.all([
      categoriesAPI.getAll(),
      productsAPI.getBrands()
    ])
      .then(([catsRes, brandsRes]) => {
        if (catsRes.data.success) setCategories(catsRes.data.data);
        if (brandsRes.data.success) setBrands(brandsRes.data.data);
      })
      .catch((err) => console.error('Categories/Brands load error:', err));
  }, []);

  // Fetch Products based on searchParams
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const params = {
        keyword,
        category,
        brand,
        minPrice,
        maxPrice,
        rating,
        inStock: inStock ? 'true' : undefined,
        sort,
        page,
        limit
      };

      const res = await productsAPI.getAll(params);
      if (res.data.success) {
        setProducts(res.data.data.products);
        setPagination(res.data.data.pagination);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  }, [keyword, category, brand, minPrice, maxPrice, rating, inStock, sort, page, limit]);

  useEffect(() => {
    fetchProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [fetchProducts]);

  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === '' || value === null || value === undefined) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    newParams.set('page', '1'); // Reset to page 1 on filter update
    setSearchParams(newParams);
  };

  const handlePageChange = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', newPage.toString());
    setSearchParams(newParams);
  };

  const handleLimitChange = (newLimit) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('limit', newLimit.toString());
    newParams.set('page', '1');
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const hasActiveFilters = !!(keyword || category || brand || minPrice || maxPrice || rating || inStock);

  return (
    <div className="space-y-6 pb-12">
      {/* 1. Scrolling Brand Partner Deals Marquee */}
      <BrandMarquee />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. Top Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {brand
                ? `${brand.toUpperCase()} OFFICIAL STORE`
                : category
                ? `${category.replace(/-/g, ' ').toUpperCase()}`
                : keyword
                ? `Search: "${keyword}"`
                : 'All Products Catalog'}
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Showing <strong className="text-slate-800">{pagination.total}</strong> verified products
            </p>
          </div>

          {/* Controls: Mobile Filter Toggle & Sort Dropdown */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-700 shadow-sm"
            >
              <Filter className="w-4 h-4 text-indigo-600" />
              Filters {hasActiveFilters && '•'}
            </button>

            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-3 py-1.5 shadow-sm">
              <span className="text-xs font-bold text-slate-400">Sort by:</span>
              <select
                value={sort}
                onChange={(e) => updateParam('sort', e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-800 outline-none cursor-pointer"
              >
                <option value="newest">Newest Arrivals</option>
                <option value="popularity">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* 3. Real E-Commerce Flash Sale & Interactive Coupons Showcase */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 rounded-3xl p-5 sm:p-7 text-white shadow-xl border border-indigo-500/20 mb-8 relative overflow-hidden">
          {/* Ambient glow backgrounds */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Left Flash Deals Title & Countdown */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 text-rose-400 fill-rose-400 animate-pulse" />
                  Special Brand Festival
                </span>
                <span className="text-xs text-indigo-300 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Verified Partner Offers
                </span>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Live Brand Deals & Promo Vouchers
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-normal">
                Click to copy exclusive coupon vouchers for instant discounts at checkout. 100% authentic products with manufacturer warranties.
              </p>

              {/* Flash Timer */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> Deals Expire In:
                </span>
                <div className="flex items-center gap-1.5 font-mono text-xs font-black text-amber-300">
                  <span className="bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded-lg">{String(timeLeft.hours).padStart(2, '0')}h</span>
                  <span>:</span>
                  <span className="bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded-lg">{String(timeLeft.minutes).padStart(2, '0')}m</span>
                  <span>:</span>
                  <span className="bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded-lg">{String(timeLeft.seconds).padStart(2, '0')}s</span>
                </div>
              </div>
            </div>

            {/* Right Coupon Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0">
              {/* Coupon 1 */}
              <div className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/40 rounded-2xl p-3 flex flex-col justify-between transition-all group shadow-sm">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-black text-amber-400 flex items-center gap-1">
                    <Percent className="w-3 h-3" /> FLAT 10% OFF
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 bg-slate-700/60 px-1.5 py-0.5 rounded">All Orders</span>
                </div>
                <p className="text-[11px] text-slate-300 font-medium mb-2">Min spend ₹999 across store</p>
                <button
                  onClick={() => copyCouponCode('SAVE10', '10% Flat Discount applied!')}
                  className="w-full py-1.5 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all bg-indigo-600/30 hover:bg-indigo-600 border border-indigo-500/40 text-indigo-200 hover:text-white cursor-pointer"
                >
                  {copiedCoupon === 'SAVE10' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>SAVE10</span>
                    </>
                  )}
                </button>
              </div>

              {/* Coupon 2 */}
              <div className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/40 rounded-2xl p-3 flex flex-col justify-between transition-all group shadow-sm">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-black text-emerald-400 flex items-center gap-1">
                    <Zap className="w-3 h-3" /> EXTRA 20%
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 bg-slate-700/60 px-1.5 py-0.5 rounded">Electronics</span>
                </div>
                <p className="text-[11px] text-slate-300 font-medium mb-2">On laptops, audio & tech</p>
                <button
                  onClick={() => copyCouponCode('TECH20', '20% Electronics Discount applied!')}
                  className="w-full py-1.5 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all bg-indigo-600/30 hover:bg-indigo-600 border border-indigo-500/40 text-indigo-200 hover:text-white cursor-pointer"
                >
                  {copiedCoupon === 'TECH20' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>TECH20</span>
                    </>
                  )}
                </button>
              </div>

              {/* Coupon 3 */}
              <div className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/40 rounded-2xl p-3 flex flex-col justify-between transition-all group shadow-sm">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-black text-sky-400 flex items-center gap-1">
                    <Truck className="w-3 h-3" /> FREE SHIPPING
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 bg-slate-700/60 px-1.5 py-0.5 rounded">Express 24h</span>
                </div>
                <p className="text-[11px] text-slate-300 font-medium mb-2">No minimum spend required</p>
                <button
                  onClick={() => copyCouponCode('FREESHIP', 'Free Express Shipping voucher applied!')}
                  className="w-full py-1.5 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all bg-indigo-600/30 hover:bg-indigo-600 border border-indigo-500/40 text-indigo-200 hover:text-white cursor-pointer"
                >
                  {copiedCoupon === 'FREESHIP' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>FREESHIP</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Trust & Bank Offers Bar */}
          <div className="mt-5 pt-4 border-t border-slate-800/90 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Genuine Direct from Brand
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Truck className="w-4 h-4 text-indigo-400" /> Express 24-Hour Dispatch
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Gift className="w-4 h-4 text-pink-400" /> Reward Cashback on every order
              </span>
            </div>

            <div className="flex items-center gap-2 font-semibold text-indigo-300">
              <span>💳 Instant 10% Discount on HDFC & ICICI Cards • 0% No-Cost EMI</span>
            </div>
          </div>
        </div>

        {/* 4. Top Brand Filter Pills Ribbon */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          <button
            onClick={() => updateParam('brand', '')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
              !brand
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Brands
          </button>
          {brands.map((b) => (
            <button
              key={b.name}
              onClick={() => updateParam('brand', brand === b.name ? '' : b.name)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all flex items-center gap-1.5 border ${
                brand === b.name
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              <span>{b.logo}</span>
              <span>{b.name}</span>
            </button>
          ))}
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Desktop Sidebar Filter */}
        <aside className="hidden lg:block bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6 sticky top-28">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2 font-extrabold text-slate-900 text-sm">
              <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
              <span>Filters</span>
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Categories ({categories.length})</h4>
            <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
              <button
                onClick={() => updateParam('category', '')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                  !category ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span>All Categories</span>
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => updateParam('category', cat.slug)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                    category === cat.slug ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="truncate pr-2">{cat.name}</span>
                  <span className="text-[10px] text-slate-400 font-bold shrink-0">({cat.item_count || 0})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Official Brands ({brands.length})</h4>
            <div className="space-y-1 max-h-[220px] overflow-y-auto pr-1">
              <button
                onClick={() => updateParam('brand', '')}
                className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                  !brand ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span>All Brands</span>
              </button>
              {brands.map((b) => (
                <button
                  key={b.name}
                  onClick={() => updateParam('brand', brand === b.name ? '' : b.name)}
                  className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                    brand === b.name ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <span>{b.logo}</span>
                    <span className="truncate">{b.name}</span>
                  </div>
                  <span className="text-[9px] text-amber-600 bg-amber-50 px-1 py-0.2 rounded font-bold shrink-0">
                    {b.discount}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Max Price: {maxPrice ? `₹${Number(maxPrice).toLocaleString('en-IN')}` : '₹2,00,000'}
            </h4>
            <input
              type="range"
              min="100"
              max="200000"
              step="500"
              value={maxPrice || 200000}
              onChange={(e) => updateParam('maxPrice', e.target.value)}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-bold text-slate-400 mt-1">
              <span>₹100</span>
              <span>₹2,00,000</span>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Customer Rating</h4>
            <div className="space-y-1">
              {[4, 3, 2].map((starNum) => (
                <button
                  key={starNum}
                  onClick={() => updateParam('rating', rating === starNum.toString() ? '' : starNum.toString())}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 ${
                    rating === starNum.toString() ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex text-amber-400">
                    {Array(starNum).fill(0).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span>{starNum}★ & Above</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stock Filter */}
          <div className="pt-4 border-t border-slate-100">
            <label className="flex items-center gap-2.5 cursor-pointer text-xs font-bold text-slate-700">
              <input
                type="checkbox"
                checked={inStock}
                onChange={(e) => updateParam('inStock', e.target.checked ? 'true' : '')}
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>In Stock Items Only</span>
            </label>
          </div>
        </aside>

        {/* Main Product Grid & Pagination */}
        <div className="lg:col-span-3 space-y-6">
          {/* Active Category Department Banner */}
          {category && (() => {
            const activeCatObj = categories.find(c => c.slug === category);
            const deptMeta = getDepartmentMeta(category);
            const deptBanner = activeCatObj?.imageUrl || activeCatObj?.image_url || deptMeta.banner;
            const deptName = activeCatObj?.name || deptMeta.name;
            const deptDesc = activeCatObj?.description || deptMeta.tagline;

            return (
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl text-white">
                <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                  <img
                    src={deptBanner}
                    alt={deptName}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600/90 backdrop-blur-md text-white font-black text-xs uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" /> Commercial Department
                      </span>
                      <button
                        onClick={() => updateParam('category', '')}
                        className="px-3 py-1 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full text-xs font-bold border border-slate-700 backdrop-blur-sm transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" /> All Categories
                      </button>
                    </div>

                    <div className="space-y-1.5">
                      <h2 className="text-2xl sm:text-3xl font-black text-white">{deptName}</h2>
                      <p className="text-xs sm:text-sm text-slate-200 max-w-2xl line-clamp-2">
                        {deptDesc}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider mr-1">
                          Inside:
                        </span>
                        {(deptMeta.insideHighlights || []).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-2 py-0.5 rounded-full transition-colors"
                          >
                            • {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">No products match your criteria</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm">
                Try adjusting your keyword, expanding price limits, or clearing applied filters.
              </p>
              <button
                onClick={clearAllFilters}
                className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-6 py-3 rounded-2xl transition-all shadow-md shadow-indigo-600/20"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Modern Smart Pagination */}
          <Pagination
            currentPage={pagination.page}
            totalPages={pagination.pages}
            totalItems={pagination.total}
            itemsPerPage={limit}
            onPageChange={handlePageChange}
            onLimitChange={handleLimitChange}
            showLimitSelector={true}
            showQuickJump={true}
            showSummary={true}
          />
        </div>

      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div
            onClick={() => setMobileFilterOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="font-extrabold text-slate-900 text-base">Filter Products</h3>
                  <button onClick={() => setMobileFilterOpen(false)}>
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Category</h4>
                  <div className="space-y-1 max-h-[160px] overflow-y-auto pr-1">
                    <button
                      onClick={() => { updateParam('category', ''); setMobileFilterOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs ${!category ? 'bg-indigo-50 font-bold text-indigo-700' : 'text-slate-600'}`}
                    >
                      All Categories
                    </button>
                    {categories.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => { updateParam('category', c.slug); setMobileFilterOpen(false); }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs ${category === c.slug ? 'bg-indigo-50 font-bold text-indigo-700' : 'text-slate-600'}`}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Official Brands</h4>
                  <div className="space-y-1 max-h-[160px] overflow-y-auto pr-1">
                    <button
                      onClick={() => { updateParam('brand', ''); setMobileFilterOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs ${!brand ? 'bg-indigo-50 font-bold text-indigo-700' : 'text-slate-600'}`}
                    >
                      All Brands
                    </button>
                    {brands.map((b) => (
                      <button
                        key={b.name}
                        onClick={() => { updateParam('brand', b.name); setMobileFilterOpen(false); }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between ${brand === b.name ? 'bg-indigo-50 font-bold text-indigo-700' : 'text-slate-600'}`}
                      >
                        <span className="truncate">{b.logo} {b.name}</span>
                        <span className="text-[9px] text-amber-600 font-bold">{b.discount}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Max Price */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Max Price: {maxPrice ? `₹${Number(maxPrice).toLocaleString('en-IN')}` : '₹2,00,000'}
                  </h4>
                  <input
                    type="range"
                    min="100"
                    max="200000"
                    step="500"
                    value={maxPrice || 200000}
                    onChange={(e) => updateParam('maxPrice', e.target.value)}
                    className="w-full accent-indigo-600"
                  />
                  <div className="flex justify-between text-[11px] font-bold text-slate-400 mt-1">
                    <span>₹100</span>
                    <span>₹2,00,000</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex gap-3">
                <button
                  onClick={() => { clearAllFilters(); setMobileFilterOpen(false); }}
                  className="flex-1 py-3 bg-slate-100 font-bold text-xs rounded-xl"
                >
                  Reset
                </button>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="flex-1 py-3 bg-indigo-600 text-white font-bold text-xs rounded-xl shadow-md"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};
