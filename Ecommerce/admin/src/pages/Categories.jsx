import React, { useState, useEffect } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  Layers,
  X,
  Upload,
  Grid,
  List,
  Package,
  AlertCircle
} from 'lucide-react';
import { categoriesAPI, uploadAPI } from '../services/api';
import { Loader } from '../components/common/Loader';
import { useToast } from '../context/ToastContext';

export const Categories = () => {
  const { showToast } = useToast();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image_url: ''
  });

  const loadCategories = async () => {
    try {
      setLoading(true);
      const res = await categoriesAPI.getAll();
      if (res.data.success) {
        setCategories(res.data.data || []);
      }
    } catch (err) {
      console.error(err);
      showToast('Failed to load categories', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleNameChange = (e) => {
    const name = e.target.value;
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    setFormData((prev) => ({
      ...prev,
      name,
      slug: prev.slug === '' || prev.slug === prev.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') ? slug : prev.slug
    }));
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({ name: '', slug: '', description: '', image_url: '' });
    setShowModal(true);
  };

  const handleOpenEdit = (c) => {
    setEditingId(c.id);
    setFormData({
      name: c.name,
      slug: c.slug || '',
      description: c.description || '',
      image_url: c.image_url || ''
    });
    setShowModal(true);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setUploading(true);
      const data = new FormData();
      data.append('image', file);
      const res = await uploadAPI.uploadImage(data);
      if (res.data.success) {
        setFormData((prev) => ({ ...prev, image_url: res.data.data.url }));
        showToast('Category banner uploaded successfully!', 'success');
      }
    } catch (err) {
      showToast('Image upload failed', 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      return showToast('Category name is required', 'warning');
    }

    try {
      if (editingId) {
        await categoriesAPI.update(editingId, formData);
        showToast('Category updated successfully!', 'success');
      } else {
        await categoriesAPI.create(formData);
        showToast('New category created successfully!', 'success');
      }

      setShowModal(false);
      loadCategories();
    } catch (err) {
      showToast(err.message || 'Failed to save category', 'error');
    }
  };

  const handleDelete = async (id) => {
    try {
      await categoriesAPI.delete(id);
      showToast('Category deleted successfully', 'info');
      setDeleteConfirmId(null);
      loadCategories();
    } catch (err) {
      showToast(err.message || 'Failed to delete category', 'error');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
            <Layers className="w-7 h-7 text-indigo-400" />
            Commercial Departments & Categories
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Organize catalog taxonomy, category banners, product counts, and storefront navigation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-1 flex items-center gap-1 text-slate-400">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-indigo-600 text-white shadow-sm' : 'hover:text-white'
              }`}
              title="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'table' ? 'bg-indigo-600 text-white shadow-sm' : 'hover:text-white'
              }`}
              title="Table View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>New Category</span>
          </button>
        </div>
      </div>

      {loading ? (
        <Loader text="Loading department categories..." />
      ) : viewMode === 'grid' ? (
        /* Cards Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div
              key={c.id}
              className="bg-slate-900/90 rounded-3xl border border-slate-800/90 overflow-hidden shadow-lg group hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
                <img
                  src={c.imageUrl || c.image_url || 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80'}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-indigo-600/80 backdrop-blur-md text-white font-bold text-xs flex items-center gap-1.5 shadow-md">
                    <Package className="w-3.5 h-3.5" />
                    <span>{c.itemCount ?? c.item_count ?? 0} Products</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full backdrop-blur-sm border border-slate-800">
                    /{c.slug}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-white group-hover:text-indigo-400 transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {c.description || 'No description provided for this department category.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-2">
                  <button
                    onClick={() => handleOpenEdit(c)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                  >
                    <Edit2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => setDeleteConfirmId(c.id)}
                    className="p-1.5 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                    title="Delete Category"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Table View */
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800/90 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[10px] uppercase font-bold text-slate-400 bg-slate-950/60 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Department</th>
                  <th className="py-4 px-4">Slug Identifier</th>
                  <th className="py-4 px-4">Catalog Inventory</th>
                  <th className="py-4 px-4">Description</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {categories.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={c.imageUrl || c.image_url || 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80'}
                          alt=""
                          className="w-10 h-10 rounded-xl object-cover bg-slate-950 border border-slate-800 shrink-0"
                        />
                        <span className="font-bold text-white text-sm">{c.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono text-slate-400 text-[11px]">/{c.slug}</td>
                    <td className="py-4 px-4">
                      <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold text-[11px]">
                        {c.itemCount ?? c.item_count ?? 0} Products
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-400 truncate max-w-xs">{c.description}</td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleOpenEdit(c)}
                          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(c.id)}
                          className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Category Create / Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-lg font-black text-white">
                {editingId ? 'Edit Department Category' : 'Create New Department'}
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
                <label className="text-xs font-bold text-slate-300">Category Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Smart Home & Robotics"
                  value={formData.name}
                  onChange={handleNameChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">URL Slug Identifier</label>
                <input
                  type="text"
                  placeholder="smart-home-robotics"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Description</label>
                <textarea
                  rows={2}
                  placeholder="Department summary..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Banner Image URL</label>
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
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
              </div>

              {formData.image_url && (
                <div className="h-24 w-full rounded-2xl overflow-hidden border border-slate-800 relative bg-slate-950">
                  <img src={formData.image_url} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 transition-all"
                >
                  {editingId ? 'Save Category' : 'Create Category'}
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
              Delete Department
            </h3>
            <p className="text-xs text-slate-400">
              Are you sure you want to delete this category? Any associated products will need to be reassigned.
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
