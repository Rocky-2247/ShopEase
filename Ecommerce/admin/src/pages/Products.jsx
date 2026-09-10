import React, { useState, useEffect } from 'react';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Upload,
  X,
  Sparkles,
  AlertCircle,
  Download,
  Package,
  Layers,
  CheckCircle2,
  TrendingUp,
  Tag
} from 'lucide-react';
import { productsAPI, categoriesAPI, uploadAPI } from '../services/api';
import { Loader } from '../components/common/Loader';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/currency';

export const Products = () => {
  const { showToast } = useToast();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [selectedCat, setSelectedCat] = useState('');
  const [stockFilter, setStockFilter] = useState('all');

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    discount_price: '',
    stock: '',
    category_id: '',
    image_url: '',
    is_featured: false,
    is_trending: false
  });

  const loadProducts = async () => {
    try {
      setLoading(true);
      const [pRes, cRes] = await Promise.all([
        productsAPI.getAll({ keyword, category: selectedCat, limit: 100 }),
        categoriesAPI.getAll()
      ]);
      if (pRes.data.success) {
        setProducts(pRes.data.data.products || []);
      }
      if (cRes.data.success) {
        setCategories(cRes.data.data || []);
      }
    } catch (err) {
      console.error(err);
      showToast('Failed to load products', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [keyword, selectedCat]);

  const filteredProducts = products.filter((p) => {
    if (stockFilter === 'instock') return p.stock > 10;
    if (stockFilter === 'lowstock') return p.stock > 0 && p.stock <= 10;
    if (stockFilter === 'outofstock') return p.stock === 0;
    return true;
  });

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      name: '',
      description: '',
      price: '',
      discount_price: '',
      stock: '',
      category_id: categories[0]?.id || '',
      image_url: '',
      is_featured: false,
      is_trending: false
    });
    setShowModal(true);
  };

  const handleOpenEdit = (p) => {
    setEditingId(p.id);
    setFormData({
      name: p.name,
      description: p.description || '',
      price: p.price,
      discount_price: p.discount_price || '',
      stock: p.stock,
      category_id: p.category_id || p.category?.id || '',
      image_url: p.image_url || '',
      is_featured: p.is_featured || false,
      is_trending: p.is_trending || false
    });
    setShowModal(true);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setUploadingImage(true);
      const form = new FormData();
      form.append('image', file);
      const res = await uploadAPI.uploadImage(form);
      if (res.data.success) {
        setFormData((prev) => ({ ...prev, image_url: res.data.data.url }));
        showToast('Image uploaded successfully!', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Image upload failed', 'error');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.category_id) {
      return showToast('Please fill all required fields', 'warning');
    }

    try {
      const payload = {
        ...formData,
        price: parseFloat(formData.price),
        discount_price: formData.discount_price ? parseFloat(formData.discount_price) : null,
        stock: parseInt(formData.stock || '0', 10),
        category_id: parseInt(formData.category_id, 10)
      };

      if (editingId) {
        await productsAPI.update(editingId, payload);
        showToast('Product updated successfully!', 'success');
      } else {
        await productsAPI.create(payload);
        showToast('New product added to catalog!', 'success');
      }

      setShowModal(false);
      loadProducts();
    } catch (err) {
      showToast(err.message || 'Failed to save product', 'error');
    }
  };

  const handleDelete = async (id) => {
    try {
      await productsAPI.delete(id);
      showToast('Product deleted from catalog', 'info');
      setDeleteConfirmId(null);
      loadProducts();
    } catch (err) {
      showToast(err.message || 'Failed to delete product', 'error');
    }
  };

  const handleExportCSV = () => {
    try {
      const headers = 'ID,Name,Category,Price,Discount Price,Stock,Featured,Trending\n';
      const rows = filteredProducts
        .map(
          (p) =>
            `"${p.id}","${p.name.replace(/"/g, '""')}","${p.category?.name || ''}",${p.price},${p.discount_price || ''},${p.stock},${p.is_featured},${p.is_trending}`
        )
        .join('\n');
      const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `shopease_products_catalog_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Product catalog exported to CSV', 'success');
    } catch (err) {
      showToast('Failed to export CSV', 'error');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
            <Package className="w-7 h-7 text-indigo-400" />
            Product Catalog Inventory
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage SKUs, brand catalogs, live inventory levels, pricing, and visual media.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-bold transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-indigo-400" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>New Product</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800/90 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search SKUs by name, brand, or model..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <select
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 font-medium focus:outline-none focus:border-indigo-500"
          >
            <option value="">All Departments</option>
            {categories.map((c) => (
              <option key={c.id} value={c.slug || c.id}>
                {c.name}
              </option>
            ))}
          </select>

          {/* Stock Filter Chips */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-1 flex items-center gap-1 text-[11px] font-bold">
            <button
              onClick={() => setStockFilter('all')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                stockFilter === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({products.length})
            </button>
            <button
              onClick={() => setStockFilter('instock')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                stockFilter === 'instock' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              In Stock
            </button>
            <button
              onClick={() => setStockFilter('lowstock')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                stockFilter === 'lowstock' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Low Stock (&le;10)
            </button>
          </div>
        </div>
      </div>

      {/* Products Table */}
      {loading ? (
        <Loader text="Loading catalog inventory..." />
      ) : (
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800/90 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[10px] uppercase font-bold text-slate-400 bg-slate-950/60 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Product Details</th>
                  <th className="py-4 px-4">Department</th>
                  <th className="py-4 px-4">Price / Discount</th>
                  <th className="py-4 px-4">Stock Level</th>
                  <th className="py-4 px-4">Promotions</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-500 font-bold">
                      No products found matching your search filters.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3.5">
                          <img
                            src={p.image_url}
                            alt=""
                            className="w-12 h-12 rounded-xl object-cover bg-slate-950 border border-slate-800 shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="font-bold text-slate-100 truncate max-w-sm">{p.name}</p>
                            <p className="text-[10px] text-slate-500">SKU #{p.id} &bull; {p.rating} ★ ({p.num_reviews} reviews)</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-semibold text-slate-300">
                        {p.category?.name || 'Unassigned'}
                      </td>
                      <td className="py-4 px-4">
                        <div className="space-y-0.5">
                          <p className="font-black text-white text-sm">{formatPrice(p.price)}</p>
                          {p.discount_price && (
                            <p className="text-[10px] text-emerald-400 font-bold">
                              Sale: {formatPrice(p.discount_price)}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                            p.stock > 10
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : p.stock > 0
                              ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          }`}
                        >
                          {p.stock} units
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {p.is_featured && (
                            <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-[10px] font-bold">
                              Featured
                            </span>
                          )}
                          {p.is_trending && (
                            <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-400 border border-purple-500/30 text-[10px] font-bold">
                              Trending
                            </span>
                          )}
                          {!p.is_featured && !p.is_trending && (
                            <span className="text-[10px] text-slate-500 font-medium">Standard</span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEdit(p)}
                            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                            title="Edit Product"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(p.id)}
                            className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Product Create / Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full my-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-lg font-black text-white">
                {editingId ? 'Edit Product Details' : 'Add New Product to Catalog'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Product Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apple MacBook Pro 16 M3 Max"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Product Description</label>
                <textarea
                  rows={3}
                  placeholder="Comprehensive specifications, key features, warranty details..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Regular Price (₹) *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="2499.00"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Sale Price (₹)</label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="1999.00"
                    value={formData.discount_price}
                    onChange={(e) => setFormData({ ...formData, discount_price: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Stock Units *</label>
                  <input
                    type="number"
                    required
                    placeholder="50"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Department Category *</label>
                  <select
                    required
                    value={formData.category_id}
                    onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="">Select Category</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Image Media URL</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/..."
                      value={formData.image_url}
                      onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                    />
                    <label className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer transition-colors shrink-0">
                      <Upload className="w-4 h-4" />
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                  </div>
                </div>
              </div>

              {formData.image_url && (
                <div className="flex items-center gap-3 p-3 bg-slate-950 rounded-2xl border border-slate-800">
                  <img
                    src={formData.image_url}
                    alt="Preview"
                    className="w-12 h-12 rounded-xl object-cover bg-slate-900 border border-slate-800 shrink-0"
                  />
                  <div className="min-w-0 text-xs">
                    <p className="font-bold text-white">Image Preview Attached</p>
                    <p className="text-[10px] text-slate-400 truncate">{formData.image_url}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600 bg-slate-950 border-slate-800"
                  />
                  <span className="text-xs font-bold text-slate-300">Mark as Featured Showcase</span>
                </label>

                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.is_trending}
                    onChange={(e) => setFormData({ ...formData, is_trending: e.target.checked })}
                    className="w-4 h-4 rounded text-purple-600 bg-slate-950 border-slate-800"
                  />
                  <span className="text-xs font-bold text-slate-300">Mark as Trending Hot</span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 transition-all"
                >
                  {editingId ? 'Save Product' : 'Create Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-sm w-full space-y-4 shadow-2xl">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2 text-rose-400">
              <AlertCircle className="w-5 h-5" />
              Confirm Deletion
            </h3>
            <p className="text-xs text-slate-400">
              Are you sure you want to permanently delete this product? This action cannot be undone.
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 shadow-md shadow-rose-600/30"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
