import React, { useState, useEffect } from 'react';
import {
  Tag,
  Plus,
  Edit2,
  Trash2,
  Copy,
  X,
  AlertCircle,
  Zap
} from 'lucide-react';
import { adminAPI } from '../services/api';
import { Loader } from '../components/common/Loader';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/currency';

export const Coupons = () => {
  const { showToast } = useToast();
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const [formData, setFormData] = useState({
    code: '',
    discount_percentage: '',
    max_discount: '',
    min_order_value: '',
    expires_at: ''
  });

  const loadCoupons = async () => {
    try {
      setLoading(true);
      const res = await adminAPI.getCoupons();
      if (res.data.success) {
        setCoupons(res.data.data || []);
      }
    } catch (err) {
      console.error(err);
      showToast('Failed to load coupons list', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCoupons();
  }, []);

  const handleGenerateCode = () => {
    const prefixes = ['SAVE', 'FLASH', 'DEAL', 'SUPER', 'SUMMER', 'VIP', 'OFFER'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const num = Math.floor(Math.random() * 8 + 2) * 5;
    setFormData((prev) => ({
      ...prev,
      code: `${prefix}${num}`,
      discount_percentage: String(num)
    }));
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      code: '',
      discount_percentage: '',
      max_discount: '',
      min_order_value: '',
      expires_at: ''
    });
    setShowModal(true);
  };

  const handleOpenEdit = (c) => {
    setEditingId(c.id);
    setFormData({
      code: c.code,
      discount_percentage: c.discount_percentage,
      max_discount: c.max_discount || '',
      min_order_value: c.min_order_value || '',
      expires_at: c.expires_at ? new Date(c.expires_at).toISOString().split('T')[0] : ''
    });
    setShowModal(true);
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    showToast(`Coupon code "${code}" copied to clipboard!`, 'info');
  };

  const handleToggleStatus = async (c) => {
    try {
      const res = await adminAPI.toggleCouponStatus(c.id);
      if (res.data.success) {
        showToast(res.data.message, c.is_active ? 'warning' : 'success');
        setCoupons((prev) =>
          prev.map((item) => (item.id === c.id ? { ...item, is_active: !item.is_active } : item))
        );
      }
    } catch (err) {
      showToast(err.message || 'Failed to toggle status', 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.code || !formData.discount_percentage) {
      return showToast('Code and discount percentage are required', 'warning');
    }

    try {
      const payload = {
        code: formData.code.toUpperCase().trim(),
        discount_percentage: parseFloat(formData.discount_percentage),
        max_discount: formData.max_discount ? parseFloat(formData.max_discount) : null,
        min_order_value: formData.min_order_value ? parseFloat(formData.min_order_value) : 0,
        expires_at: formData.expires_at ? new Date(formData.expires_at).toISOString() : null
      };

      if (editingId) {
        await adminAPI.updateCoupon(editingId, payload);
        showToast('Coupon updated successfully!', 'success');
      } else {
        await adminAPI.createCoupon(payload);
        showToast('New coupon created successfully!', 'success');
      }

      setShowModal(false);
      loadCoupons();
    } catch (err) {
      showToast(err.message || 'Failed to save coupon', 'error');
    }
  };

  const handleDelete = async (id) => {
    try {
      await adminAPI.deleteCoupon(id);
      showToast('Coupon deleted successfully', 'info');
      setDeleteConfirmId(null);
      loadCoupons();
    } catch (err) {
      showToast(err.message || 'Failed to delete coupon', 'error');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
            <Tag className="w-7 h-7 text-indigo-400" />
            Coupons, Promo Codes & Discounts
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Configure promotional voucher campaigns, discount limits, and minimum cart rules.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>New Promo Code</span>
        </button>
      </div>

      {/* Coupons List Table */}
      {loading ? (
        <Loader text="Loading coupon vouchers..." />
      ) : (
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800/90 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[10px] uppercase font-bold text-slate-400 bg-slate-950/60 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Promo Code</th>
                  <th className="py-4 px-4">Discount Rate</th>
                  <th className="py-4 px-4">Min Order Value</th>
                  <th className="py-4 px-4">Max Discount Cap</th>
                  <th className="py-4 px-4">Expiry Date</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {coupons.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-500 font-bold">
                      No discount coupons configured yet. Click "New Promo Code" to create one.
                    </td>
                  </tr>
                ) : (
                  coupons.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-black text-sm text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-xl border border-indigo-500/20">
                            {c.code}
                          </span>
                          <button
                            onClick={() => handleCopyCode(c.code)}
                            className="p-1 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-colors"
                            title="Copy Code"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-black text-white text-sm">
                          {c.discount_percentage}% OFF
                        </span>
                      </td>
                      <td className="py-4 px-4 text-slate-300 font-medium">
                        {c.min_order_value > 0 ? formatPrice(c.min_order_value) : 'No Minimum'}
                      </td>
                      <td className="py-4 px-4 text-slate-300 font-medium">
                        {c.max_discount ? formatPrice(c.max_discount) : 'Unlimited'}
                      </td>
                      <td className="py-4 px-4 text-slate-400">
                        {c.expires_at ? (
                          new Date(c.expires_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })
                        ) : (
                          <span className="text-emerald-400 font-bold text-[11px]">Never Expires</span>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() => handleToggleStatus(c)}
                          className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                            c.is_active
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20'
                              : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700'
                          }`}
                        >
                          {c.is_active ? 'Active' : 'Disabled'}
                        </button>
                      </td>
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
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Create / Edit Coupon Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-lg font-black text-white">
                {editingId ? 'Edit Discount Voucher' : 'Create New Discount Voucher'}
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
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300">Voucher Code *</label>
                  <button
                    type="button"
                    onClick={handleGenerateCode}
                    className="text-[11px] font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    <Zap className="w-3 h-3" />
                    <span>Generate Code</span>
                  </button>
                </div>
                <input
                  type="text"
                  required
                  placeholder="e.g. FLASH25"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white font-mono font-bold focus:outline-none focus:border-indigo-500 uppercase"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Discount (%) *</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    required
                    placeholder="20"
                    value={formData.discount_percentage}
                    onChange={(e) => setFormData({ ...formData, discount_percentage: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Max Discount (₹)</label>
                  <input
                    type="number"
                    placeholder="500"
                    value={formData.max_discount}
                    onChange={(e) => setFormData({ ...formData, max_discount: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Min Cart Value (₹)</label>
                  <input
                    type="number"
                    placeholder="100"
                    value={formData.min_order_value}
                    onChange={(e) => setFormData({ ...formData, min_order_value: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Expiry Date</label>
                  <input
                    type="date"
                    value={formData.expires_at}
                    onChange={(e) => setFormData({ ...formData, expires_at: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

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
                  {editingId ? 'Save Coupon' : 'Create Voucher'}
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
              Delete Voucher
            </h3>
            <p className="text-xs text-slate-400">
              Are you sure you want to delete this coupon? Existing orders using this coupon won't be affected.
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
