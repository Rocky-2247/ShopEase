import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  ArrowRight,
  Copy,
  Check,
  Award,
  Laptop,
  Smartphone,
  Flame,
  Tag,
  ShoppingBag
} from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { productsAPI } from '../../services/api';
import { formatPrice } from '../../utils/currency';

export const BrandSpotlightAd = () => {
  const [brands, setBrands] = useState([]);
  const [activeBrandSlug, setActiveBrandSlug] = useState('apple');
  const [brandProducts, setBrandProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  // 1. Fetch all brands dynamically from backend API
  useEffect(() => {
    let isMounted = true;
    const loadBrands = async () => {
      try {
        const res = await productsAPI.getBrands();
        if (res.data.success && isMounted) {
          setBrands(res.data.data);
          if (res.data.data.length > 0 && !activeBrandSlug) {
            setActiveBrandSlug(res.data.data[0].slug);
          }
        }
      } catch (err) {
        console.error('Failed to load brands:', err);
      }
    };
    loadBrands();
    return () => { isMounted = false; };
  }, []);

  // 2. Find currently selected brand object
  const currentBrand = brands.find((b) => b.slug === activeBrandSlug) || brands[0] || {
    name: 'Apple',
    slug: 'apple',
    keyword: 'Apple',
    storeName: 'Apple Official Store',
    logo: '🍎',
    tagline: 'Apple Intelligence Ecosystem. Supercharged by Apple Silicon.',
    description: 'Explore authentic Apple devices with official warranty and AppleCare+ privileges.',
    coupon: 'APPLE20',
    couponText: 'Extra 20% OFF',
    color: 'from-slate-700 to-slate-900',
    perks: [
      { title: 'Up to 25%', subtitle: 'Instant Trade-In Value' },
      { title: '2 Years', subtitle: 'Official Care Privilege' },
      { title: '0% APR', subtitle: 'No-Cost Monthly Installments' }
    ]
  };

  // 3. Fetch real products for the active brand dynamically from the database
  useEffect(() => {
    let isMounted = true;
    const fetchBrandProducts = async () => {
      if (!currentBrand) return;
      try {
        setLoading(true);
        const searchKeyword = currentBrand.keyword || currentBrand.name;
        const res = await productsAPI.getAll({ keyword: searchKeyword, limit: 4 });
        if (res.data.success && isMounted) {
          setBrandProducts(res.data.data.products || []);
        }
      } catch (err) {
        console.error(`Failed to load products for brand ${currentBrand.name}:`, err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchBrandProducts();
    return () => { isMounted = false; };
  }, [activeBrandSlug, currentBrand?.name]);

  const copyBrandCoupon = (code) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    showToast(`Brand coupon "${code}" copied! Apply during checkout.`, 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const heroProduct = brandProducts.length > 0 ? brandProducts[0] : null;
  const secondaryProducts = brandProducts.slice(1, 3);
  const brandStoreLink = `/products?keyword=${encodeURIComponent(currentBrand.keyword || currentBrand.name)}`;

  // Default perks if missing from brand object
  const perks = currentBrand.perks && currentBrand.perks.length > 0 ? currentBrand.perks : [
    { title: currentBrand.discount || 'Special Offer', subtitle: 'Official Store Launch Privilege' },
    { title: '2 Years', subtitle: 'Manufacturer Extended Warranty' },
    { title: '0% EMI', subtitle: 'No-Cost Monthly Installments' }
  ];

  // Featured top brands for tab selection
  const spotlightTabs = brands.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl text-white">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>

        {/* Top Header: Brand Spotlight Navigation Tabs */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none max-w-full">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 shrink-0">
              Partner Hub:
            </span>
            {spotlightTabs.map((b) => (
              <button
                key={b.slug}
                onClick={() => setActiveBrandSlug(b.slug)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all shrink-0 cursor-pointer ${
                  activeBrandSlug === b.slug
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                <span>{b.logo || '✨'}</span>
                <span>{b.name}</span>
              </button>
            ))}
          </div>

          <Link
            to={brandStoreLink}
            className="text-xs font-bold text-indigo-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Browse Full {currentBrand.name} Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Hero Pitch & Coupon */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Sponsor Header Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase shadow-md shadow-blue-500/20">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span>{currentBrand.badge || 'Official Brand Partner'}</span>
              </div>

              <div className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>{currentBrand.discount || 'Special Showcase Deal'}</span>
              </div>
            </div>

            {/* Brand Title & Headline */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-white font-display">
                  {currentBrand.name}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-2.5 py-0.5 rounded border border-blue-800/60">
                  {currentBrand.storeName || `${currentBrand.name} Store`}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-100 leading-snug">
                {currentBrand.tagline}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {currentBrand.description}
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              {perks.map((perk, idx) => (
                <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 text-center">
                  <p className="text-base sm:text-lg font-black text-indigo-300">
                    {perk.title}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                    {perk.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Coupon Box & Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {currentBrand.coupon && (
                <button
                  onClick={() => copyBrandCoupon(currentBrand.coupon)}
                  className="bg-gradient-to-r from-slate-900 to-indigo-950 hover:from-slate-800 hover:to-indigo-900 border-2 border-indigo-500/50 hover:border-indigo-400 px-5 py-3.5 rounded-2xl flex items-center justify-between gap-3 text-left transition-all shadow-lg group active:scale-95 cursor-pointer"
                >
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-black tracking-wider text-indigo-300">
                      <Tag className="w-3 h-3" />
                      <span>Exclusive Coupon</span>
                    </div>
                    <span className="text-base font-black text-white tracking-wider">
                      {copied ? 'COPIED!' : currentBrand.coupon}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-indigo-600/30 text-indigo-300 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </div>
                </button>
              )}

              <Link
                to={brandStoreLink}
                className="px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-blue-500/25 transition-all text-center flex items-center justify-center gap-2 group shrink-0"
              >
                <span>Shop {currentBrand.name} Store</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Right Column: Dynamic Live Catalog Showcase */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {loading ? (
              <div className="sm:col-span-2 bg-slate-900/50 border border-slate-800 rounded-3xl p-12 text-center text-slate-400">
                <Sparkles className="w-8 h-8 mx-auto animate-spin text-indigo-400 mb-2" />
                <p className="text-sm">Loading live {currentBrand.name} catalog...</p>
              </div>
            ) : heroProduct ? (
              <>
                {/* Hero Product Card */}
                <div className="sm:col-span-2 relative bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-indigo-500/50 rounded-3xl p-4 sm:p-5 transition-all shadow-xl group flex flex-col sm:flex-row items-center gap-5">
                  <div className="w-full sm:w-40 aspect-square rounded-2xl overflow-hidden bg-slate-950 shrink-0 border border-slate-800">
                    <img
                      src={heroProduct.image_url}
                      alt={heroProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 space-y-2 text-left w-full">
                    <div className="inline-flex items-center gap-1.5 bg-blue-950/80 text-blue-300 border border-blue-800/50 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                      <Laptop className="w-3 h-3" />
                      <span>{heroProduct.category?.name || 'Flagship Model'}</span>
                    </div>
                    <Link to={`/products/${heroProduct.id || heroProduct.slug}`}>
                      <h4 className="text-sm sm:text-base font-extrabold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                        {heroProduct.name}
                      </h4>
                    </Link>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {heroProduct.description}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-sm font-black text-white">
                          {formatPrice(heroProduct.discount_price || heroProduct.price)}
                        </span>
                        {heroProduct.discount_price && (
                          <span className="text-xs text-slate-500 line-through ml-2">
                            {formatPrice(heroProduct.price)}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/products/${heroProduct.id || heroProduct.slug}`}
                        className="text-xs font-bold text-blue-400 hover:text-white flex items-center gap-1"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Secondary Product Cards */}
                {secondaryProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="relative bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-indigo-500/50 rounded-3xl p-4 transition-all shadow-xl group flex flex-col justify-between"
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 mb-3 border border-slate-800">
                      <img
                        src={prod.image_url}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {prod.discount_price && (
                        <span className="absolute top-2 right-2 bg-emerald-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow">
                          Save {formatPrice(prod.price - prod.discount_price)}
                        </span>
                      )}
                    </div>
                    <div className="space-y-1 text-left">
                      <div className="flex items-center gap-1 text-[10px] font-bold text-blue-400 uppercase">
                        <Smartphone className="w-3 h-3" />
                        <span>{prod.category?.name || 'Product'}</span>
                      </div>
                      <Link to={`/products/${prod.id || prod.slug}`}>
                        <h5 className="text-xs font-bold text-white group-hover:text-blue-300 line-clamp-1">
                          {prod.name}
                        </h5>
                      </Link>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-black text-white">
                          {formatPrice(prod.discount_price || prod.price)}
                        </span>
                        <Link to={`/products/${prod.id || prod.slug}`} className="text-[11px] font-bold text-blue-400 hover:text-white">
                          Explore &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="sm:col-span-2 bg-slate-900/50 border border-slate-800 rounded-3xl p-12 text-center text-slate-400">
                <ShoppingBag className="w-8 h-8 mx-auto text-slate-600 mb-2" />
                <p className="text-sm">Explore official {currentBrand.name} products in our store catalog.</p>
                <Link to={brandStoreLink} className="mt-3 inline-block text-xs font-bold text-indigo-400 hover:underline">
                  Browse {currentBrand.name} Store &rarr;
                </Link>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandSpotlightAd;
