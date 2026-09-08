import React, { useState, useEffect } from 'react';
import {
  Tag,
  Plus,
  Edit2,
  Trash2,
  Percent,
  Calendar,
  DollarSign,
  CheckCircle2,
  XCircle,
  X,
  AlertCircle
} from 'lucide-react';
import { adminAPI } from '../../services/api';
import { Loader } from '../../components/common/Loader';
import { useToast } from '../../context/ToastContext';
import { formatPrice } from '../../utils/currency';

export const AdminCoupons = () => {
  const { showToast } = useToast();
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
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
      showToast('Failed to load coupons', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCoupons();
  }, []);

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
      expires_at: c.expires_at ? new Date(c.expires_at).toISOString().slice(0, 10) : ''
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.code || !formData.discount_percentage) {
      showToast('Code and Discount percentage are required', 'warning');
      return;
    }

    try {
      if (editingId) {
        const res = await adminAPI.updateCoupon(editingId, formData);
        showToast(res.data.message || 'Coupon updated', 'success');
      } else {
        const res = await adminAPI.createCoupon(formData);
        showToast(res.data.message || 'Coupon created', 'success');
      }
      setShowModal(false);
      loadCoupons();
    } catch (err) {
      showToast(err.message || 'Failed to save coupon', 'error');
    }
  };

  const handleToggle = async (c) => {
    try {
      const res = await adminAPI.toggleCouponStatus(c.id);
      showToast(res.data.message, 'success');
      setCoupons((prev) =>
        prev.map((item) => (item.id === c.id ? { ...item, is_active: !item.is_active } : item))
      );
    } catch (err) {
      showToast(err.message || 'Failed to update status', 'error');
    }
  };

  const handleDelete = async (c) => {
    if (!window.confirm(`Are you sure you want to delete coupon "${c.code}"?`)) return;
    try {
      const res = await adminAPI.deleteCoupon(c.id);
      showToast(res.data.message || 'Coupon deleted', 'success');
      setCoupons((prev) => prev.filter((item) => item.id !== c.id));
    } catch (err) {
      showToast(err.message || 'Failed to delete coupon', 'error');
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Coupons & Vouchers</h1>
          <p className="text-xs text-slate-400 mt-1">Manage festive discount codes, minimum order rules, and validity.</p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-2xl shadow-lg shadow-indigo-600/30 transition-all self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Create Coupon</span>
        </button>
      </div>

      {/* Coupons Table */}
      <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
        {loading ? (
          <div className="p-12">
            <Loader text="Loading promotional coupons..." />
          </div>
        ) : coupons.length === 0 ? (
          <div className="p-12 text-center text-slate-400 space-y-3">
            <Tag className="w-12 h-12 mx-auto text-slate-600" />
            <p className="text-sm font-bold">No coupons found</p>
            <p className="text-xs text-slate-500">Create your first discount voucher code to boost customer orders.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900/80 text-slate-400 font-bold uppercase tracking-wider text-[10px] border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4">Coupon Code</th>
                  <th className="px-6 py-4">Discount</th>
                  <th className="px-6 py-4">Max Discount</th>
                  <th className="px-6 py-4">Min Spend</th>
                  <th className="px-6 py-4">Expiry Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-medium">
                {coupons.map((c) => {
                  const isExpired = c.expires_at && new Date(c.expires_at) < new Date();
                  return (
                    <tr key={c.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-white text-sm bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-lg tracking-wide">
                            {c.code}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-black text-emerald-400 text-sm">
                        {c.discount_percentage}% OFF
                      </td>
                      <td className="px-6 py-4 text-slate-300">
                        {c.max_discount ? formatPrice(c.max_discount) : <span className="text-slate-500">Unlimited</span>}
                      </td>
                      <td className="px-6 py-4 text-slate-300">
                        {c.min_order_value ? formatPrice(c.min_order_value) : <span className="text-slate-500">No minimum</span>}
                      </td>
                      <td className="px-6 py-4 text-slate-400">
                        {c.expires_at ? (
                          <span className={isExpired ? 'text-rose-400 font-bold' : ''}>
                            {new Date(c.expires_at).toLocaleDateString()} {isExpired && '(Expired)'}
                          </span>
                        ) : (
                          <span className="text-slate-500">Lifetime</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleToggle(c)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold transition-colors cursor-pointer ${
                            c.is_active && !isExpired
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          }`}
                        >
                          {c.is_active && !isExpired ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" /> Active
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3.5 h-3.5" /> Inactive
                            </>
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          onClick={() => handleOpenEdit(c)}
                          className="p-2 text-slate-400 hover:text-indigo-400 rounded-xl hover:bg-slate-800 transition-colors"
                          title="Edit Coupon"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(c)}
                          className="p-2 text-slate-400 hover:text-rose-400 rounded-xl hover:bg-slate-800 transition-colors"
                          title="Delete Coupon"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Create / Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-5 animate-slide-up">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-lg font-extrabold text-white">
                {editingId ? 'Edit Discount Coupon' : 'Create New Coupon'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Coupon Code (Uppercase)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. FESTIVE30, MEGA50"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white uppercase font-bold outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Discount (%)</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    required
                    placeholder="e.g. 20"
                    value={formData.discount_percentage}
                    onChange={(e) => setFormData({ ...formData, discount_percentage: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Max Cap (₹ / $)</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="Optional max limit"
                    value={formData.max_discount}
                    onChange={(e) => setFormData({ ...formData, max_discount: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Min Order Spend</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 499"
                    value={formData.min_order_value}
                    onChange={(e) => setFormData({ ...formData, min_order_value: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Expiry Date</label>
                  <input
                    type="date"
                    value={formData.expires_at}
                    onChange={(e) => setFormData({ ...formData, expires_at: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 font-bold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-600/30"
                >
                  {editingId ? 'Save Changes' : 'Create Coupon'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminCoupons;
