import React, { useState, useEffect } from 'react';
import { User, MapPin, Lock, Phone, Mail, Plus, Trash2, CheckCircle2, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { authAPI } from '../services/api';
import { useToast } from '../context/ToastContext';

export const Profile = () => {
  const { user, updateProfile } = useAuth();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'addresses'

  // Profile form
  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [savingProfile, setSavingProfile] = useState(false);

  // Addresses
  const [addresses, setAddresses] = useState([]);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [addressForm, setAddressForm] = useState({
    full_name: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    is_default: false
  });

  useEffect(() => {
    if (user) {
      setName(user.name);
      setPhone(user.phone || '');
      loadAddresses();
    }
  }, [user]);

  const loadAddresses = async () => {
    try {
      const res = await authAPI.getAddresses();
      if (res.data.success) {
        setAddresses(res.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      showToast('Passwords do not match', 'error');
      return;
    }

    try {
      setSavingProfile(true);
      await updateProfile({
        name,
        phone,
        password: password || undefined
      });
      setPassword('');
      setConfirmPassword('');
    } catch (e) {
      // Toast handled in context
    } finally {
      setSavingProfile(false);
    }
  };

  const handleSaveAddress = async (e) => {
    e.preventDefault();
    try {
      if (editingAddressId) {
        await authAPI.updateAddress(editingAddressId, addressForm);
        showToast('Address updated', 'success');
      } else {
        await authAPI.addAddress(addressForm);
        showToast('Address added', 'success');
      }
      setShowAddressModal(false);
      setEditingAddressId(null);
      setAddressForm({ full_name: '', phone: '', street: '', city: '', state: '', pincode: '', is_default: false });
      loadAddresses();
    } catch (err) {
      showToast(err.message || 'Failed to save address', 'error');
    }
  };

  const handleDeleteAddress = async (id) => {
    if (!window.confirm('Delete this address?')) return;
    try {
      await authAPI.deleteAddress(id);
      showToast('Address deleted', 'info');
      loadAddresses();
    } catch (err) {
      showToast(err.message || 'Failed to delete', 'error');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Profile Summary */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-indigo-600/25">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">{user?.name}</h1>
              <span className="bg-indigo-50 text-indigo-700 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                {user?.role}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{user?.email}</p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-2 p-1.5 bg-slate-100 rounded-2xl">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'profile'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Profile Info
          </button>
          <button
            onClick={() => setActiveTab('addresses')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'addresses'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Address Book ({addresses.length})
          </button>
        </div>
      </div>

      {/* Profile Form Tab */}
      {activeTab === 'profile' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6 animate-fade-in max-w-2xl">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
            <User className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base font-extrabold text-slate-900">Personal Information</h2>
          </div>

          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                disabled
                value={user?.email || ''}
                className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3 text-xs text-slate-400 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
              />
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-3">Change Password (Optional)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">New Password</label>
                  <input
                    type="password"
                    placeholder="Leave blank to keep same"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={savingProfile}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-600/20 transition-all"
              >
                {savingProfile ? 'Saving Changes...' : 'Save Profile Details'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Address Book Tab */}
      {activeTab === 'addresses' && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-slate-900">Saved Addresses</h2>
            <button
              onClick={() => {
                setEditingAddressId(null);
                setAddressForm({ full_name: user.name, phone: user.phone || '', street: '', city: '', state: '', pincode: '', is_default: false });
                setShowAddressModal(true);
              }}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add New Address
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-3 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-slate-900">{addr.full_name}</span>
                  {addr.is_default && (
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                      Default Shipping
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600">{addr.street}</p>
                <p className="text-xs text-slate-600">{addr.city}, {addr.state} - {addr.pincode}</p>
                <p className="text-xs text-slate-400 font-medium pt-1">Phone: {addr.phone}</p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => {
                      setEditingAddressId(addr.id);
                      setAddressForm(addr);
                      setShowAddressModal(true);
                    }}
                    className="font-bold text-indigo-600 hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteAddress(addr.id)}
                    className="font-bold text-rose-600 hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Address Edit/Add Modal */}
      {showAddressModal && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
          <div
            onClick={() => setShowAddressModal(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-4 z-10 animate-slide-up">
            <h3 className="text-lg font-extrabold text-slate-900">
              {editingAddressId ? 'Edit Address' : 'Add New Address'}
            </h3>

            <form onSubmit={handleSaveAddress} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={addressForm.full_name}
                    onChange={(e) => setAddressForm({ ...addressForm, full_name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs outline-none focus:bg-white focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    required
                    value={addressForm.phone}
                    onChange={(e) => setAddressForm({ ...addressForm, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs outline-none focus:bg-white focus:border-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  value={addressForm.street}
                  onChange={(e) => setAddressForm({ ...addressForm, street: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs outline-none focus:bg-white focus:border-indigo-600"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={addressForm.city}
                    onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs outline-none focus:bg-white focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={addressForm.state}
                    onChange={(e) => setAddressForm({ ...addressForm, state: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs outline-none focus:bg-white focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Postal Code</label>
                  <input
                    type="text"
                    required
                    value={addressForm.pincode}
                    onChange={(e) => setAddressForm({ ...addressForm, pincode: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs outline-none focus:bg-white focus:border-indigo-600"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700 pt-2">
                <input
                  type="checkbox"
                  checked={addressForm.is_default}
                  onChange={(e) => setAddressForm({ ...addressForm, is_default: e.target.checked })}
                  className="w-4 h-4 rounded text-indigo-600"
                />
                <span>Set as default delivery address</span>
              </label>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddressModal(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl shadow-md"
                >
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
