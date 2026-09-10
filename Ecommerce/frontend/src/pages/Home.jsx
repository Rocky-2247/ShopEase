import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Award,
  ShieldCheck,
  Truck,
  Copy,
  Check,
  Clock,
  Coins,
  Gift,
  Laptop,
  Shirt,
  Home as HomeIcon,
  Sparkles as SparklesIcon,
  Activity,
  BookOpen,
  Gamepad2,
  Watch,
  HeartPulse,
  Coffee,
  ShoppingBag,
  ChevronRight,
  Flame,
  Layers
} from 'lucide-react';
import { productsAPI, categoriesAPI } from '../services/api';
import { ProductCard } from '../components/product/ProductCard';
import { ProductCardSkeleton } from '../components/common/Loader';
import { DepartmentShowcase } from '../components/home/DepartmentShowcase';
import { BrandMarquee } from '../components/common/BrandMarquee';
import { BrandSpotlightAd } from '../components/common/BrandSpotlightAd';
import { AllBrandsShowcase } from '../components/common/AllBrandsShowcase';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/currency';

const getCategoryIcon = (slug) => {
  switch (slug) {
    case 'electronics': return <Laptop className="w-5 h-5 text-indigo-600" />;
    case 'fashion-apparel': return <Shirt className="w-5 h-5 text-pink-600" />;
    case 'home-living': return <HomeIcon className="w-5 h-5 text-amber-600" />;
    case 'beauty-care': return <SparklesIcon className="w-5 h-5 text-rose-600" />;
    case 'sports-outdoors': return <Activity className="w-5 h-5 text-emerald-600" />;
    case 'books-stationery': return <BookOpen className="w-5 h-5 text-sky-600" />;
    case 'gaming-consoles': return <Gamepad2 className="w-5 h-5 text-purple-600" />;
    case 'watches-jewelry': return <Watch className="w-5 h-5 text-amber-500" />;
    case 'health-wellness': return <HeartPulse className="w-5 h-5 text-teal-600" />;
    case 'groceries-gourmet': return <Coffee className="w-5 h-5 text-orange-600" />;
    default: return <ShoppingBag className="w-5 h-5 text-indigo-600" />;
  }
};

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedCoupon, setCopiedCoupon] = useState(false);
  const [activeCategoryTab, setActiveCategoryTab] = useState('all');
  const { showToast } = useToast();

  // Live Flash Sale Countdown Timer (Synchronized to today's campaign window)
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [catsRes, featRes, trendRes] = await Promise.all([
          categoriesAPI.getAll(),
          productsAPI.getFeatured(),
          productsAPI.getTrending()
        ]);

        if (catsRes.data.success) setCategories(catsRes.data.data);
        if (featRes.data.success) setFeaturedProducts(featRes.data.data);
        if (trendRes.data.success) setTrendingProducts(trendRes.data.data);
      } catch (err) {
        console.error('Home data load error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const copyCouponCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(true);
    showToast(`Coupon code "${code}" copied to clipboard!`, 'success');
    setTimeout(() => setCopiedCoupon(false), 3000);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-slate-50 pt-10 pb-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-100/80 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Next-Gen E-Commerce 2026 Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Elevate Your Lifestyle with{' '}
                <span className="text-gradient">Premium Curated</span> Essentials.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Discover flagship tech, timeless designer fashion, and minimalist home aesthetics with express delivery, loyalty rewards, and guaranteed quality.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/products"
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all duration-200 shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 group"
                >
                  <span>Explore All Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/products?sort=popularity"
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-2xl border border-slate-200 shadow-sm transition-all text-center"
                >
                  Trending Catalog
                </Link>
              </div>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">10k+</p>
                  <p className="text-xs text-slate-500 font-medium">Happy Shoppers</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">4.9/5</p>
                  <p className="text-xs text-slate-500 font-medium">Customer Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">24h</p>
                  <p className="text-xs text-slate-500 font-medium">Fast Dispatch</p>
                </div>
              </div>
            </div>

            {/* Right Hero Image Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80"
                  alt="ShopEase Flagship"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Glassmorphic Badge 1 */}
                <div className="absolute top-6 right-6 glass p-3.5 rounded-2xl shadow-xl border border-white/60 flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-500">Special Launch</p>
                    <p className="text-xs font-extrabold text-slate-900">Save up to 40%</p>
                  </div>
                </div>

                {/* Floating Glassmorphic Badge 2 */}
                <div className="absolute bottom-6 left-6 glass p-3.5 rounded-2xl shadow-xl border border-white/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-500">Verified Seller</p>
                    <p className="text-xs font-extrabold text-slate-900">100% Authentic</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Infinite Scrolling Brand Partner Ad Marquee */}
      <BrandMarquee />

      {/* 3. Live Flash Sale Countdown Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-pink-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
              <span>Limited Hour Flash Deals</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Special 24-Hour Flash Sale</h3>
            <p className="text-xs sm:text-sm text-amber-100 max-w-lg">
              Grab premium electronics, luxury apparel, and home essentials with up to 50% discount before timer runs out!
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-3 text-center min-w-[64px]">
              <span className="text-2xl font-black block leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[10px] uppercase font-bold text-amber-200">Hours</span>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-3 text-center min-w-[64px]">
              <span className="text-2xl font-black block leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-[10px] uppercase font-bold text-amber-200">Mins</span>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-3 text-center min-w-[64px]">
              <span className="text-2xl font-black block leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-[10px] uppercase font-bold text-amber-200">Secs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dedicated Brand Partner Spotlight Showcase (Samsung Galaxy AI) */}
      <BrandSpotlightAd />

      {/* 5. Comprehensive 10-Department Category Showcase with Photo Previews */}
      <DepartmentShowcase categories={categories} getCategoryIcon={getCategoryIcon} />

      {/* Category Spotlight Dual-Banner with Inside Product Teasers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 flex items-center justify-between shadow-xl border border-slate-800 group">
            <div className="space-y-2.5 max-w-xs z-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300 bg-indigo-900/80 px-2.5 py-1 rounded-full border border-indigo-700/60 inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-indigo-400" /> Flagship Tech Department
              </span>
              <h4 className="text-xl sm:text-2xl font-black">Next-Gen Audio & Laptops</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Featuring Samsung S24 Ultra, iPhone 16 Pro Max, Sony WH-1000XM5, and M3 Max silicon with express dispatch.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <Link
                  to="/products?category=electronics"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-600/30"
                >
                  <span>Explore Tech Inside</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="w-28 sm:w-36 aspect-square rounded-2xl overflow-hidden shrink-0 shadow-xl border-2 border-white/20 group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80"
                alt="Electronics Department"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-pink-950 via-rose-900 to-purple-950 text-white p-6 sm:p-8 flex items-center justify-between shadow-xl border border-rose-800/40 group">
            <div className="space-y-2.5 max-w-xs z-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-rose-300 bg-rose-950/80 px-2.5 py-1 rounded-full border border-rose-700/60 inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-rose-400" /> Designer Apparel Department
              </span>
              <h4 className="text-xl sm:text-2xl font-black">Curated Designer Wardrobe</h4>
              <p className="text-xs text-rose-100 leading-relaxed">
                Handcrafted Tuscan leather bags, 100% Merino knitwear, Japanese denim, and Italian leather sneakers.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <Link
                  to="/products?category=fashion-apparel"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-rose-600/30"
                >
                  <span>Explore Fashion Inside</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="w-28 sm:w-36 aspect-square rounded-2xl overflow-hidden shrink-0 shadow-xl border-2 border-white/20 group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80"
                alt="Fashion Department"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Handpicked For You</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Featured Products
            </h2>
          </div>
          <Link
            to="/products?featured=true"
            className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5 group"
          >
            <span>See more featured</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            Array(4).fill(0).map((_, i) => <ProductCardSkeleton key={i} />)
          ) : (
            featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>

      {/* 5. All Brands Showcase */}
      <AllBrandsShowcase />

      {/* 6. ShopPoints Loyalty Program Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30 shadow-lg shadow-amber-500/10">
              <Coins className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-900/60">
                Customer Loyalty Program
              </span>
              <h3 className="text-2xl font-black">Earn 1 ShopPoint on Every ₹10 Spent</h3>
              <p className="text-xs text-slate-400 max-w-md">
                Every purchase automatically deposits reward points into your account. Redeem 100 points for an instant ₹100 discount during checkout!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/register"
              className="py-3.5 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs rounded-2xl transition-all shadow-md shadow-amber-500/20 flex items-center gap-2"
            >
              <Gift className="w-4 h-4" />
              <span>Claim 100 Welcome Points</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Promotional Banner with Coupon Code */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white p-8 sm:p-12 shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-block bg-indigo-500/30 border border-indigo-400/40 text-amber-300 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Limited Time Voucher
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Get 20% Instant Discount on Orders Over ₹999
            </h2>
            <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
              Use code <strong className="text-white">WELCOME20</strong> at checkout and enjoy immediate price deductions along with free priority delivery.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => copyCouponCode('WELCOME20')}
                className="bg-white hover:bg-slate-100 text-indigo-900 font-extrabold text-sm px-6 py-3 rounded-2xl flex items-center gap-2 shadow-md transition-transform active:scale-95"
              >
                <span>{copiedCoupon ? 'Copied!' : 'WELCOME20'}</span>
                {copiedCoupon ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-indigo-600" />}
              </button>

              <Link
                to="/products"
                className="border border-indigo-300/40 hover:bg-indigo-700/50 text-white font-bold text-sm px-6 py-3 rounded-2xl transition-colors"
              >
                Shop Qualifying Items
              </Link>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
            <Sparkles className="w-96 h-96 text-white" />
          </div>
        </div>
      </section>

      {/* 7. Trending Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
              <TrendingUp className="w-4 h-4" />
              <span>Community Favorites</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Trending & Best Sellers
            </h2>
          </div>
          <Link
            to="/products?sort=popularity"
            className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5 group"
          >
            <span>Explore all trending</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            Array(4).fill(0).map((_, i) => <ProductCardSkeleton key={i} />)
          ) : (
            trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>

    </div>
  );
};
