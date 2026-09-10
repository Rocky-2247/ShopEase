import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  DollarSign,
  ShoppingBag,
  Package,
  Users,
  TrendingUp,
  AlertTriangle,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  BarChart3,
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight,
  Eye,
  RefreshCw
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid
} from 'recharts';
import { adminAPI, productsAPI } from '../services/api';
import { Loader } from '../components/common/Loader';
import { OrderStatusBadge } from '../components/common/Badge';
import { formatPrice } from '../utils/currency';
import { useToast } from '../context/ToastContext';

export const Dashboard = () => {
  const { showToast } = useToast();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [restockItem, setRestockItem] = useState(null);
  const [newStockVal, setNewStockVal] = useState('');

  const loadStats = async () => {
    try {
      const res = await adminAPI.getDashboardStats();
      if (res.data.success) {
        setData(res.data.data);
      }
    } catch (err) {
      console.error(err);
      showToast('Failed to load dashboard metrics', 'error');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  const handleQuickRestock = async (e) => {
    e.preventDefault();
    if (!restockItem || !newStockVal) return;
    try {
      await productsAPI.update(restockItem.id, {
        stock: parseInt(newStockVal, 10)
      });
      showToast(`Restocked ${restockItem.name} to ${newStockVal} units!`, 'success');
      setRestockItem(null);
      setNewStockVal('');
      loadStats();
    } catch (err) {
      showToast('Failed to update stock', 'error');
    }
  };

  if (loading) {
    return <Loader text="Loading live store intelligence..." />;
  }

  if (!data) {
    return (
      <div className="text-center py-20 text-slate-400">
        <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto mb-3" />
        <p className="font-bold">Failed to load analytics dashboard.</p>
        <button
          onClick={loadStats}
          className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  const { metrics, recentOrders, lowStockProducts, monthlySales, categoryDistribution } = data;
  const PIE_COLORS = ['#6366f1', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#06b6d4', '#3b82f6'];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
            <span>Executive Command Center</span>
            <span className="text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Live Feed
            </span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time turnover, high-velocity SKU distribution, and warehouse inventory alerts.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setRefreshing(true);
              loadStats();
            }}
            disabled={refreshing}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-bold transition-all shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-indigo-400 ${refreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
          <Link
            to="/analytics"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/25"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Deep Analytics</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Sales */}
        <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800/90 relative overflow-hidden group hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gross Turnover</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-black text-base">
              ₹
            </div>
          </div>
          <p className="text-3xl font-black text-white mt-3">{formatPrice(metrics.totalRevenue)}</p>
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] mt-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+18.4% this month</span>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800/90 relative overflow-hidden group hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Orders</span>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-black text-white mt-3">{metrics.totalOrders}</p>
          <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-[11px] mt-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Processed across catalog</span>
          </div>
        </div>

        {/* Total Products */}
        <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800/90 relative overflow-hidden group hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active SKUs</span>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
              <Package className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-black text-white mt-3">{metrics.totalProducts}</p>
          <div className="flex items-center gap-1.5 text-purple-400 font-bold text-[11px] mt-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>14 Brand Partner Lines</span>
          </div>
        </div>

        {/* Customers */}
        <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800/90 relative overflow-hidden group hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Customer Accounts</span>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-black text-white mt-3">{metrics.totalUsers}</p>
          <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px] mt-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Registered shoppers</span>
          </div>
        </div>
      </div>

      {/* Analytics Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Monthly Revenue Chart */}
        <div className="lg:col-span-8 bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-800/90 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-white">Monthly Sales Revenue Flow (₹)</h3>
              <p className="text-xs text-slate-400">Aggregated revenue performance over the last 6 months</p>
            </div>
            <Link to="/analytics" className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
              <span>View Report</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="h-64 sm:h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlySales}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="revenue" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Share Distribution */}
        <div className="lg:col-span-4 bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-800/90 space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-extrabold text-white">Inventory by Department</h3>
            <p className="text-xs text-slate-400">SKU distribution across commercial departments</p>
          </div>

          <div className="h-48 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={75}
                  paddingAngle={4}
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`dash-cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
            {categoryDistribution.slice(0, 4).map((c, i) => (
              <div key={c.name} className="flex items-center gap-1.5 truncate">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }}
                ></span>
                <span className="truncate">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Two Tables: Low Stock & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Low Stock Radar */}
        <div className="lg:col-span-5 bg-slate-900/90 p-6 rounded-3xl border border-slate-800/90 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Low Stock Warnings (&le;10 units)
            </h3>
            <Link to="/products" className="text-xs font-bold text-indigo-400 hover:underline">
              Manage All
            </Link>
          </div>

          <div className="divide-y divide-slate-800/60">
            {lowStockProducts.length === 0 ? (
              <p className="text-xs text-slate-500 py-6 text-center">All catalog items have healthy inventory!</p>
            ) : (
              lowStockProducts.map((p) => (
                <div key={p.id} className="py-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={p.image_url}
                      alt=""
                      className="w-10 h-10 rounded-xl object-cover bg-slate-950 shrink-0 border border-slate-800"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-200 truncate">{p.name}</p>
                      <p className="text-[10px] text-slate-400">{formatPrice(p.price)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-black text-rose-400 bg-rose-950/60 border border-rose-900/60 px-2.5 py-1 rounded-xl">
                      {p.stock} left
                    </span>
                    <button
                      onClick={() => {
                        setRestockItem(p);
                        setNewStockVal(String(p.stock + 50));
                      }}
                      className="text-[10px] font-bold text-indigo-400 hover:text-white px-2 py-1 rounded-lg bg-indigo-500/10 hover:bg-indigo-600 transition-colors"
                    >
                      + Re-stock
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Orders Live Feed */}
        <div className="lg:col-span-7 bg-slate-900/90 p-6 rounded-3xl border border-slate-800/90 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-white">Recent Customer Orders</h3>
            <Link to="/orders" className="text-xs font-bold text-indigo-400 hover:underline">
              View All Orders &rarr;
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[10px] uppercase font-bold text-slate-500 border-b border-slate-800">
                <tr>
                  <th className="pb-3">Order</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {recentOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 font-bold text-indigo-400">#{ord.order_number}</td>
                    <td className="py-3 font-medium text-slate-200">{ord.user?.name || 'Customer'}</td>
                    <td className="py-3 font-black text-white">{formatPrice(ord.final_amount)}</td>
                    <td className="py-3">
                      <OrderStatusBadge status={ord.order_status} />
                    </td>
                    <td className="py-3 text-right">
                      <Link
                        to={`/orders`}
                        className="text-xs font-bold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Re-Stock Modal */}
      {restockItem && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-sm w-full space-y-4 shadow-2xl">
            <h3 className="text-base font-extrabold text-white">Quick Inventory Re-stock</h3>
            <p className="text-xs text-slate-400 truncate">
              Update units for <span className="text-indigo-400 font-bold">{restockItem.name}</span>
            </p>

            <form onSubmit={handleQuickRestock} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">New Stock Level (Units)</label>
                <input
                  type="number"
                  min="0"
                  value={newStockVal}
                  onChange={(e) => setNewStockVal(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 font-bold"
                  autoFocus
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setRestockItem(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30"
                >
                  Update Stock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
