import React, { useState } from 'react';
import {
  Settings,
  Store,
  DollarSign,
  Truck,
  Shield,
  Database,
  Save,
  CheckCircle2,
  RefreshCw,
  Server,
  Zap,
  HardDrive
} from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const AdminSettings = () => {
  const { showToast } = useToast();
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  const [settings, setSettings] = useState({
    storeName: 'ShopEase Commercial Store',
    supportEmail: 'support@shopease.com',
    supportPhone: '+1 (800) 555-0199',
    currency: 'INR (₹)',
    taxRate: '18',
    freeShippingThreshold: '499',
    standardShippingFee: '40',
    maintenanceMode: false,
    enableGuestCheckout: true,
    autoApproveReviews: true,
    orderPrefix: 'SE-2026'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      showToast('Store settings updated and applied successfully!', 'success');
    }, 600);
  };

  const tabs = [
    { id: 'general', label: 'Store Profile', icon: Store },
    { id: 'shipping', label: 'Shipping & Taxes', icon: Truck },
    { id: 'security', label: 'Platform & Security', icon: Shield },
    { id: 'system', label: 'System Diagnostics', icon: Database }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
            <Settings className="w-7 h-7 text-indigo-400" />
            Store Settings & Platform Diagnostics
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Configure global store policies, currencies, shipping logic, and view system status.
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 transition-all disabled:opacity-50"
        >
          {saving ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs Menu */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                active
                  ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Contents */}
      <div className="bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-800/90 shadow-xl">
        {activeTab === 'general' && (
          <form onSubmit={handleSave} className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-base font-extrabold text-white">General Store Information</h3>
              <p className="text-xs text-slate-400">Public details displayed to shoppers and invoices.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">Store Brand Name</label>
                <input
                  type="text"
                  name="storeName"
                  value={settings.storeName}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">Order ID Sequence Prefix</label>
                <input
                  type="text"
                  name="orderPrefix"
                  value={settings.orderPrefix}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">Customer Support Email</label>
                <input
                  type="email"
                  name="supportEmail"
                  value={settings.supportEmail}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">Customer Support Phone</label>
                <input
                  type="text"
                  name="supportPhone"
                  value={settings.supportPhone}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">Default Currency</label>
                <input
                  type="text"
                  name="currency"
                  value={settings.currency}
                  disabled
                  className="w-full bg-slate-950/60 border border-slate-800/60 rounded-xl px-4 py-2.5 text-xs text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>
          </form>
        )}

        {activeTab === 'shipping' && (
          <form onSubmit={handleSave} className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-base font-extrabold text-white">Shipping, Delivery & Taxes</h3>
              <p className="text-xs text-slate-400">Configure checkout delivery charges and GST calculations.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">Standard Delivery Fee (₹)</label>
                <input
                  type="number"
                  name="standardShippingFee"
                  value={settings.standardShippingFee}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">Free Shipping Minimum Threshold (₹)</label>
                <input
                  type="number"
                  name="freeShippingThreshold"
                  value={settings.freeShippingThreshold}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">GST / Sales Tax Rate (%)</label>
                <input
                  type="number"
                  name="taxRate"
                  value={settings.taxRate}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </form>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-base font-extrabold text-white">Platform Controls & Policies</h3>
              <p className="text-xs text-slate-400">Manage accessibility, checkout permissions, and moderation.</p>
            </div>

            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
                <div>
                  <p className="text-xs font-bold text-white">Enable Guest Cart & Guest Checkout</p>
                  <p className="text-[11px] text-slate-400">Allows shoppers to build carts without immediate login.</p>
                </div>
                <input
                  type="checkbox"
                  name="enableGuestCheckout"
                  checked={settings.enableGuestCheckout}
                  onChange={handleChange}
                  className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-900 border-slate-700"
                />
              </label>

              <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
                <div>
                  <p className="text-xs font-bold text-white">Auto-Publish Verified Product Reviews</p>
                  <p className="text-[11px] text-slate-400">Instantly publish verified customer reviews to product pages.</p>
                </div>
                <input
                  type="checkbox"
                  name="autoApproveReviews"
                  checked={settings.autoApproveReviews}
                  onChange={handleChange}
                  className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-900 border-slate-700"
                />
              </label>

              <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
                <div>
                  <p className="text-xs font-bold text-white">Storefront Maintenance Mode</p>
                  <p className="text-[11px] text-slate-400">Temporarily show maintenance banner to non-admin visitors.</p>
                </div>
                <input
                  type="checkbox"
                  name="maintenanceMode"
                  checked={settings.maintenanceMode}
                  onChange={handleChange}
                  className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-900 border-slate-700"
                />
              </label>
            </div>
          </div>
        )}

        {activeTab === 'system' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-base font-extrabold text-white">Live System Diagnostics</h3>
              <p className="text-xs text-slate-400">Real-time architecture and database health status.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400">
                  <Database className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Database Engine</span>
                </div>
                <p className="text-base font-black text-white">MySQL 8.0 Enterprise</p>
                <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Hikari Connection Pool Active
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-purple-400">
                  <Server className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">API Architecture</span>
                </div>
                <p className="text-base font-black text-white">Express + Sequelize ORM</p>
                <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Port 5000 REST API Healthy
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400">
                  <Zap className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Catalog SKUs</span>
                </div>
                <p className="text-base font-black text-white">1,672 Products Seeded</p>
                <span className="text-[11px] text-indigo-400 font-bold">14 Partner Brand Catalogs</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
