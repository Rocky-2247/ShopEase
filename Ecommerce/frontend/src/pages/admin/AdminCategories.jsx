import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Layers, X, Upload } from 'lucide-react';
import { categoriesAPI, uploadAPI } from '../../services/api';
import { Loader } from '../../components/common/Loader';
import { useToast } from '../../context/ToastContext';

export const AdminCategories = () => {
  const { showToast } = useToast();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image_url: ''
  });

  const loadCategories = async () => {
    try {
      setLoading(true);
      const res = await categoriesAPI.getAll();
      if (res.data.success) {
        setCategories(res.data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({ name: '', description: '', image_url: '' });
    setShowModal(true);
  };

  const handleOpenEdit = (c) => {
    setEditingId(c.id);
    setFormData({
      name: c.name,
      description: c.description || '',
      image_url: c.image_url || ''
    });
    setShowModal(true);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const data = new FormData();
    data.append('image', file);

    try {
      setUploading(true);
      const res = await uploadAPI.uploadImage(data);
      if (res.data.success) {
        setFormData({ ...formData, image_url: res.data.url });
        showToast('Image uploaded', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Upload failed', 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) return;

    try {
      if (editingId) {
        await categoriesAPI.update(editingId, formData);
        showToast('Category updated', 'success');
      } else {
        await categoriesAPI.create(formData);
        showToast('Category created', 'success');
      }
      setShowModal(false);
      loadCategories();
    } catch (err) {
      showToast(err.message || 'Failed to save category', 'error');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this category? Associated products will lose this category binding.')) return;
    try {
      await categoriesAPI.delete(id);
      showToast('Category deleted', 'info');
      loadCategories();
    } catch (err) {
      showToast(err.message || 'Failed to delete category', 'error');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Category Taxonomy</h1>
          <p className="text-xs text-slate-400 mt-1">Organize products into intuitive departments and landing hubs.</p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="py-3 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-2xl shadow-lg shadow-indigo-600/25 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Category
        </button>
      </div>

      {/* Categories Grid */}
      {loading ? (
        <Loader text="Loading categories..." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-slate-950 rounded-3xl p-6 border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-full h-36 rounded-2xl overflow-hidden bg-slate-900 border border-slate-850 relative">
                  <img
                    src={cat.image_url || 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600'}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-indigo-400 border border-slate-800">
                    {cat.item_count || 0} products
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-white">{cat.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {cat.description || 'No description provided.'}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900 flex justify-end gap-2">
                <button
                  onClick={() => handleOpenEdit(cat)}
                  className="p-2 bg-slate-900 hover:bg-slate-800 rounded-xl text-indigo-400 hover:text-white transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(cat.id)}
                  className="p-2 bg-slate-900 hover:bg-rose-950/60 rounded-xl text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
          <div onClick={() => setShowModal(false)} className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
          <div className="relative bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-800 shadow-2xl space-y-4 z-10 animate-slide-up text-white">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="text-lg font-extrabold text-white">{editingId ? 'Edit Category' : 'Create Category'}</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-300 mb-1">Category Title *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Description</label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Banner Image URL or Upload</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="https://..."
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl p-3 outline-none focus:border-indigo-600 font-mono text-[11px]"
                  />
                  <label className="px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl cursor-pointer flex items-center gap-1 font-bold">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{uploading ? '...' : 'Upload'}</span>
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 bg-slate-800 rounded-xl font-bold text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-md"
                >
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
