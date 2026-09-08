import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import { productsAPI } from '../../services/api';

export const AllBrandsShowcase = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchBrands = async () => {
      try {
        setLoading(true);
        const res = await productsAPI.getBrands();
        if (res.data.success && isMounted) {
          setBrands(res.data.data);
        }
      } catch (err) {
        console.error('Failed to load brands showcase:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchBrands();
    return () => { isMounted = false; };
  }, []);

  const displayBrands = brands.slice(0, 12);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
            <Award className="w-4 h-4" />
            <span>Authorized Official Brand Stores</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Shop by Global Brands
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse verified flagship stores with 100% brand warranty and authentic launch perks
          </p>
        </div>

        <Link
          to="/products"
          className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5 group self-start md:self-auto"
        >
          <span>View All Products</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Brand Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {displayBrands.map((brand) => (
          <Link
            key={brand.name || brand.slug}
            to={`/products?keyword=${encodeURIComponent(brand.keyword || brand.name)}`}
            className="group relative bg-white hover:bg-gradient-to-b hover:from-white hover:to-indigo-50/40 rounded-3xl p-5 border border-slate-100 hover:border-indigo-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Brand Logo & Badge Header */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-indigo-600/10 border border-slate-100 group-hover:border-indigo-200 flex items-center justify-center text-2xl shadow-sm transition-colors">
                  {brand.logo || '✨'}
                </div>
                <span className="text-[10px] font-black uppercase tracking-tight text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                  {brand.badge || 'Partner'}
                </span>
              </div>

              {/* Brand Title */}
              <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                {brand.name}
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                {brand.category || 'Official Catalog'}
              </p>

              {brand.popular && (
                <p className="text-[11px] text-slate-500 mt-2 line-clamp-1">
                  Popular: {brand.popular}
                </p>
              )}
            </div>

            {/* Discount Tag & CTA Footer */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                {brand.discount || 'Special Offer'}
              </span>
              <span className="text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Store <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllBrandsShowcase;
