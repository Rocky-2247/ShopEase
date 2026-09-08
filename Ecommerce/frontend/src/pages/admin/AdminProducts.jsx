import React, { useState, useEffect } from 'react';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Image as ImageIcon,
  Upload,
  X,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { productsAPI, categoriesAPI, uploadAPI } from '../../services/api';
import { Loader } from '../../components/common/Loader';
import { useToast } from '../../context/ToastContext';
import { formatPrice } from '../../utils/currency';

export const AdminProducts = () => {
  const { showToast } = useToast();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [selectedCat, setSelectedCat] = useState('');

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);

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
        productsAPI.getAll({ keyword, category: selectedCat, limit: 50 }),
        categoriesAPI.getAll()
      ]);
      if (pRes.data.success) setProducts(pRes.data.data.products);
      if (cRes.data.success) setCategories(cRes.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [keyword, selectedCat]);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      name: '',
      description: '',
      price: '',
      discount_price: '',
      stock: '',
      category_id: categories.length > 0 ? categories[0].id : '',
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
      description: p.description,
      price: p.price,
      discount_price: p.discount_price || '',
      stock: p.stock,
      category_id: p.category_id,
      image_url: p.image_url,
      is_featured: !!p.is_featured,
      is_trending: !!p.is_trending
    });
    setShowModal(true);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append('image', file);

    try {
      setUploadingImage(true);
      const res = await uploadAPI.uploadImage(data);
      if (res.data.success) {
        setFormData({ ...formData, image_url: res.data.url });
        showToast('Image uploaded successfully', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Image upload failed', 'error');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.category_id || !formData.image_url) {
      showToast('Please fill all required fields', 'warning');
      return;
    }

    try {
      if (editingId) {
        await productsAPI.update(editingId, formData);
        showToast('Product updated successfully', 'success');
      } else {
        await productsAPI.create(formData);
        showToast('New product added to catalog', 'success');
      }
      setShowModal(false);
      loadProducts();
    } catch (err) {
      showToast(err.message || 'Failed to save product', 'error');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to permanently delete this product?')) return;
    try {
      await productsAPI.delete(id);
      showToast('Product removed from catalog', 'info');
      loadProducts();
    } catch (err) {
      showToast(err.message || 'Failed to delete product', 'error');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Product Catalog Management</h1>
          <p className="text-xs text-slate-400 mt-1">Add, modify, restock, or remove products from the active storefront.</p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="py-3 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-2xl shadow-lg shadow-indigo-600/25 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      {/* Filter bar */}
      <div className="bg-slate-950 p-4 rounded-3xl border border-slate-800 flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex-1 max-w-md relative flex items-center">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5" />
          <input
            type="text"
            placeholder="Search products by title or description..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-600"
          />
        </div>

        <select
          value={selectedCat}
          onChange={(e) => setSelectedCat(e.target.value)}
          className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-slate-300 outline-none cursor-pointer"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12"><Loader text="Loading catalog..." /></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[10px] uppercase font-bold text-slate-500 bg-slate-900/60 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Product</th>
                  <th className="py-4 px-4">Category</th>
                  <th className="py-4 px-4">Price</th>
                  <th className="py-4 px-4">Stock</th>
                  <th className="py-4 px-4">Rating</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900 text-slate-300">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-3">
                        <img src={p.image_url} alt="" className="w-12 h-12 rounded-xl object-cover bg-slate-900 border border-slate-800 shrink-0" />
                        <div className="min-w-0">
                          <p className="font-bold text-white truncate max-w-xs">{p.name}</p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            {p.is_featured && <span className="text-[9px] font-bold text-indigo-400 bg-indigo-950/60 px-1.5 py-0.5 rounded">Featured</span>}
                            {p.is_trending && <span className="text-[9px] font-bold text-purple-400 bg-purple-950/60 px-1.5 py-0.5 rounded">Trending</span>}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold text-slate-400">{p.category?.name || 'General'}</td>
                    <td className="py-3 px-4">
                      <span className="font-bold text-white">{formatPrice(p.price)}</span>
                      {p.discount_price && <span className="text-[10px] text-emerald-400 block font-semibold">{formatPrice(p.discount_price)}</span>}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2.5 py-1 rounded-xl text-xs font-bold ${
                        p.stock <= 5 ? 'bg-rose-950/60 text-rose-400 border border-rose-900/50' : 'bg-emerald-950/60 text-emerald-400 border border-emerald-900/50'
                      }`}>
                        {p.stock} in stock
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-amber-400">★ {Number(p.rating || 0).toFixed(1)}</td>
                    <td className="py-3 px-6 text-right space-x-2">
                      <button
                        onClick={() => handleOpenEdit(p)}
                        className="p-2 bg-slate-900 hover:bg-slate-800 rounded-xl text-indigo-400 hover:text-white transition-colors"
                        title="Edit product"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="p-2 bg-slate-900 hover:bg-rose-950/60 rounded-xl text-slate-400 hover:text-rose-400 transition-colors"
                        title="Delete product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add / Edit Product Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
          <div onClick={() => setShowModal(false)} className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
          <div className="relative bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-slate-800 shadow-2xl space-y-4 z-10 max-h-[90vh] overflow-y-auto animate-slide-up text-white">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="text-lg font-extrabold text-white">{editingId ? 'Edit Product' : 'Add New Product'}</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-300 mb-1">Product Title *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Description *</label>
                <textarea
                  rows="3"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-indigo-600"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Price (₹) *</label>
                  <input
                    type="number"
                    step="1"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Discount Price (₹)</label>
                  <input
                    type="number"
                    step="1"
                    value={formData.discount_price}
                    onChange={(e) => setFormData({ ...formData, discount_price: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Inventory Stock *</label>
                  <input
                    type="number"
                    required
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Category Department *</label>
                <select
                  required
                  value={formData.category_id}
                  onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-indigo-600"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              {/* Image upload / URL */}
              <div>
                <label className="block font-bold text-slate-300 mb-1">Product Photo URL or Upload *</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="https://images.unsplash.com/... or uploaded path"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-indigo-600 font-mono text-[11px]"
                  />
                  <label className="px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl cursor-pointer flex items-center gap-1.5 font-bold shrink-0">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{uploadingImage ? 'Uploading...' : 'Upload'}</span>
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
              </div>

              <div className="flex gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-300">
                  <input
                    type="checkbox"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600"
                  />
                  <span>Mark as Featured Product</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-300">
                  <input
                    type="checkbox"
                    checked={formData.is_trending}
                    onChange={(e) => setFormData({ ...formData, is_trending: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600"
                  />
                  <span>Mark as Trending Deal</span>
                </label>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 bg-slate-800 rounded-xl font-bold text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-md shadow-indigo-600/30"
                >
                  Save Product
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
