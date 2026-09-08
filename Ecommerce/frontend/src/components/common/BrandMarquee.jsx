import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { productsAPI } from '../../services/api';

export const BrandMarquee = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchBrands = async () => {
      try {
        const res = await productsAPI.getBrands();
        if (res.data.success && isMounted) {
          setBrands(res.data.data);
        }
      } catch (err) {
        console.error('Failed to load marquee brands:', err);
      }
    };
    fetchBrands();
    return () => { isMounted = false; };
  }, []);

  const marqueeList = brands.length > 0 ? brands : [];

  return (
    <section className="relative overflow-hidden py-4 bg-slate-900 border-y border-slate-800 shadow-inner">
      {/* Subtle side fading gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      {/* Top Header Tag */}
      <div className="max-w-7xl mx-auto px-4 mb-2 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-extrabold uppercase tracking-widest text-[11px] text-slate-300">
            Official Brand Partner Deals & Sponsored Highlights
          </span>
        </div>
        <span className="hidden sm:inline text-[11px] text-slate-500 font-medium">
          Hover to pause ticker • Click any brand to browse
        </span>
      </div>

      {/* Marquee Track (Repeated twice for seamless loop) */}
      <div className="flex overflow-hidden group select-none">
        <div className="animate-marquee flex items-center gap-4 py-2">
          {[...marqueeList, ...marqueeList].map((brand, idx) => (
            <Link
              key={`${brand.name || brand.slug}-${idx}`}
              to={`/products?brand=${encodeURIComponent(brand.slug || brand.name)}`}
              className="flex items-center gap-3 bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/70 hover:border-indigo-500/50 rounded-2xl px-4 py-2.5 transition-all duration-200 shadow-md hover:shadow-indigo-500/10 hover:scale-105 shrink-0 group/item"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-lg shadow-inner">
                {brand.logo || brand.icon || '🛍️'}
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-white group-hover/item:text-indigo-400 transition-colors">
                    {brand.name}
                  </span>
                  <span className="text-[9px] font-bold text-amber-300 bg-amber-950/80 px-1.5 py-0.2 rounded border border-amber-800/60 uppercase tracking-tight">
                    {brand.badge || 'Partner'}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] text-slate-400 font-medium truncate max-w-[130px]">
                    {brand.tagline || brand.category}
                  </span>
                  {brand.discount && (
                    <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                      {brand.discount}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
