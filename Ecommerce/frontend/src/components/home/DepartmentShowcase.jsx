import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Eye,
  X,
  Check,
  ShoppingBag,
  Layers,
  ChevronRight,
  Star,
  ExternalLink,
  Tag,
  ShieldCheck
} from 'lucide-react';
import { DEPARTMENT_METADATA, getDepartmentMeta } from '../../utils/departmentData';
import { formatPrice } from '../../utils/currency';

export const DepartmentShowcase = ({ categories = [], getCategoryIcon }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [previewDept, setPreviewDept] = useState(null);

  // Filter categories if tab selected
  const displayedCategories = activeTab === 'all'
    ? categories
    : categories.filter(c => c.slug === activeTab);

  const openPreview = (e, cat) => {
    e.preventDefault();
    e.stopPropagation();
    const meta = getDepartmentMeta(cat.slug);
    setPreviewDept({ ...cat, meta });
  };

  const closePreview = () => {
    setPreviewDept(null);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>10 Commercial Departments</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore All Store Departments & Products
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse high-definition photography and preview the curated products inside each shopping department
          </p>
        </div>
        <Link
          to="/products"
          className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5 group self-start md:self-auto bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-xl transition-all"
        >
          <span>Browse Full Catalog</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Department Filter Ribbon */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all ${
            activeTab === 'all'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          All Departments ({categories.length || 10})
        </button>
        {categories.map((cat) => {
          const isActive = activeTab === cat.slug;
          return (
            <button
              key={cat.id || cat.slug}
              onClick={() => setActiveTab(isActive ? 'all' : cat.slug)}
              className={`px-3.5 py-2 rounded-2xl text-xs font-semibold shrink-0 border transition-all flex items-center gap-2 group shadow-sm ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-white hover:bg-indigo-50/60 text-slate-700 border-slate-200/90 hover:border-indigo-300'
              }`}
            >
              {getCategoryIcon(cat.slug)}
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                isActive ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-700'
              }`}>
                {cat.item_count || cat.itemCount || 0}
              </span>
            </button>
          );
        })}
      </div>

      {/* Department Visual Grid with "Inside Products" Photo Previews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
        {displayedCategories.map((cat) => {
          const meta = getDepartmentMeta(cat.slug);
          const deptImage = cat.imageUrl || cat.image_url || meta.banner;
          const itemCount = cat.item_count || cat.itemCount || 0;
          const sampleProducts = meta.sampleProducts || [];

          return (
            <div
              key={cat.id || cat.slug}
              className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Section with Main Department Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={deptImage}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
                  loading="lazy"
                />
                
                {/* Gradient Shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Top Floating Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="p-1.5 rounded-xl bg-white/90 backdrop-blur-md text-indigo-600 shadow-md">
                    {getCategoryIcon(cat.slug)}
                  </span>
                  <span className="text-[10px] font-extrabold bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/20 shadow-sm">
                    {itemCount} Products
                  </span>
                </div>

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-sm font-extrabold line-clamp-1 drop-shadow-md">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-200 font-medium line-clamp-1 opacity-90 drop-shadow">
                    {cat.description || meta.tagline}
                  </p>
                </div>

                {/* Hover Quick-Peek Action Button */}
                <button
                  onClick={(e) => openPreview(e, cat)}
                  className="absolute inset-0 bg-indigo-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-200 flex flex-col items-center justify-center gap-1.5 text-white cursor-pointer z-10"
                >
                  <div className="p-2 rounded-full bg-white text-indigo-600 shadow-lg transform group-hover:scale-110 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold tracking-wide">Peek Inside Products</span>
                </button>
              </div>

              {/* "Inside This Department" Visual Product Collage & Preview Thumbnails */}
              <div className="p-3.5 space-y-3 flex-1 flex flex-col justify-between bg-slate-50/50">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    <span className="flex items-center gap-1 text-indigo-600">
                      <Sparkles className="w-3 h-3" /> Inside Products
                    </span>
                    <button
                      onClick={(e) => openPreview(e, cat)}
                      className="text-indigo-600 hover:text-indigo-800 font-bold hover:underline cursor-pointer"
                    >
                      Quick View
                    </button>
                  </div>

                  {/* 4 Mini Product Thumbnails Collage */}
                  <div className="grid grid-cols-4 gap-1.5">
                    {sampleProducts.slice(0, 4).map((p, idx) => (
                      <div
                        key={idx}
                        className="group/thumb relative aspect-square rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-2xs hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer"
                        onClick={(e) => openPreview(e, cat)}
                        title={`${p.name} - ${formatPrice(p.price)}`}
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover/thumb:scale-115 transition-transform duration-300"
                          loading="lazy"
                        />
                        {p.badge && (
                          <span className="absolute bottom-0 inset-x-0 bg-slate-900/85 text-white text-[7px] font-black text-center py-0.5 truncate px-0.5">
                            {p.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Product Highlight Pills */}
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {(meta.insideHighlights || []).slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-medium bg-white text-slate-600 border border-slate-200/80 px-1.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shop Department Action Link */}
                <Link
                  to={`/products?category=${cat.slug}`}
                  className="w-full mt-2 py-2 px-3 bg-white hover:bg-indigo-600 text-slate-700 hover:text-white border border-slate-200 hover:border-indigo-600 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 shadow-xs group-hover:shadow-md"
                >
                  <span>Explore Department</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive "Peek Inside Department" Modal */}
      {previewDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Department Banner */}
            <div className="relative h-44 sm:h-52 w-full bg-slate-900 overflow-hidden shrink-0">
              <img
                src={previewDept.imageUrl || previewDept.image_url || previewDept.meta.banner}
                alt={previewDept.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={closePreview}
                className="absolute top-3.5 right-3.5 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 hover:scale-105 transition-all shadow-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Department Info */}
              <div className="absolute bottom-4 left-5 right-5 text-white flex items-end justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-lg bg-white/20 backdrop-blur-md">
                      {getCategoryIcon(previewDept.slug)}
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-300">
                      Department Preview
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {previewDept.name}
                  </h3>
                  <p className="text-xs text-slate-200 max-w-md line-clamp-2">
                    {previewDept.description || previewDept.meta.tagline}
                  </p>
                </div>
                <span className="shrink-0 bg-indigo-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-md">
                  {previewDept.item_count || previewDept.itemCount || 0} Products
                </span>
              </div>
            </div>

            {/* Modal Body: Products Inside */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  Top Products Available in this Department
                </h4>
                <span className="text-[11px] text-indigo-600 font-bold">
                  In-Stock & Verified
                </span>
              </div>

              {/* Product Grid inside Modal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {(previewDept.meta.sampleProducts || []).map((prod, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 hover:bg-indigo-50/50 border border-slate-200/80 hover:border-indigo-200 transition-all group"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0 border border-slate-200 shadow-xs">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0 space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        {prod.badge && (
                          <span className="text-[9px] font-black uppercase text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">
                            {prod.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-extrabold text-slate-900 truncate group-hover:text-indigo-600 transition-colors">
                        {prod.name}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs font-black text-slate-900">
                          {formatPrice(prod.price)}
                        </span>
                        {prod.originalPrice && (
                          <span className="text-[10px] text-slate-400 line-through">
                            {formatPrice(prod.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Department Highlights Tags */}
              <div className="pt-2 border-t border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Category Specialties:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {(previewDept.meta.insideHighlights || []).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/60"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={closePreview}
                className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-xl transition-all cursor-pointer"
              >
                Close Preview
              </button>
              <Link
                to={`/products?category=${previewDept.slug}`}
                onClick={closePreview}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-600/20 transition-all flex items-center gap-2"
              >
                <span>View All {previewDept.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
