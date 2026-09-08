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
  ChevronRight
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
  Cell
} from 'recharts';
import { adminAPI } from '../../services/api';
import { Loader } from '../../components/common/Loader';
import { OrderStatusBadge } from '../../components/common/Badge';
import { formatPrice } from '../../utils/currency';

export const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    adminAPI.getDashboardStats()
      .then((res) => {
        if (res.data.success) {
          setData(res.data.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader text="Loading admin sales analytics..." />;
  }

  if (!data) {
    return <div className="text-slate-400">Failed to load analytics dashboard.</div>;
  }

  const { metrics, recentOrders, lowStockProducts, monthlySales, categoryDistribution } = data;
  const PIE_COLORS = ['#6366f1', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'];

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Admin Executive Overview</h1>
        <p className="text-xs text-slate-400 mt-1">Live metrics, revenue performance, and inventory health.</p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Sales</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-base">
              ₹
            </div>
          </div>
          <p className="text-3xl font-black text-white">{formatPrice(metrics.totalRevenue)}</p>
          <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +18.4% this month
          </span>
        </div>

        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Orders</span>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-black text-white">{metrics.totalOrders}</p>
          <span className="text-[11px] text-indigo-400 font-bold">Processed across catalog</span>
        </div>

        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Products</span>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-black text-white">{metrics.totalProducts}</p>
          <span className="text-[11px] text-purple-400 font-bold">Active SKUs listed</span>
        </div>

        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Customers</span>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-black text-white">{metrics.totalUsers}</p>
          <span className="text-[11px] text-amber-400 font-bold">Registered shoppers</span>
        </div>

      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Revenue Monthly Chart */}
        <div className="lg:col-span-8 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-white">Monthly Sales Revenue (₹)</h3>
            <span className="text-xs text-slate-400 font-semibold">Past 6 Months</span>
          </div>

          <div className="h-64 sm:h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlySales}>
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                />
                <Bar dataKey="revenue" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Share Distribution */}
        <div className="lg:col-span-4 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 flex flex-col justify-between">
          <h3 className="text-base font-extrabold text-white">Inventory by Department</h3>

          <div className="h-52 w-full flex items-center justify-center">
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
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-900">
            {categoryDistribution.slice(0, 4).map((c, i) => (
              <div key={c.name} className="flex items-center gap-1.5 truncate">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }}></span>
                <span className="truncate">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Two Tables: Low Stock & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Low Stock Alerts */}
        <div className="lg:col-span-5 bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Low Stock Warnings (&lt;10 units)
            </h3>
            <Link to="/admin/products" className="text-xs font-bold text-indigo-400 hover:underline">
              Manage All
            </Link>
          </div>

          <div className="divide-y divide-slate-900">
            {lowStockProducts.length === 0 ? (
              <p className="text-xs text-slate-500 py-4">All products have healthy inventory levels!</p>
            ) : (
              lowStockProducts.map((p) => (
                <div key={p.id} className="py-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <img src={p.image_url} alt="" className="w-10 h-10 rounded-xl object-cover bg-slate-900 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-200 truncate">{p.name}</p>
                      <p className="text-[10px] text-slate-500">{formatPrice(p.price)}</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-rose-400 bg-rose-950/60 border border-rose-900/60 px-2.5 py-1 rounded-xl shrink-0">
                    {p.stock} left
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="lg:col-span-7 bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-white">Recent Customer Orders</h3>
            <Link to="/admin/orders" className="text-xs font-bold text-indigo-400 hover:underline">
              View All Orders
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
              <tbody className="divide-y divide-slate-900 text-slate-300">
                {recentOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-slate-900/40">
                    <td className="py-3 font-bold text-indigo-400">#{ord.order_number}</td>
                    <td className="py-3">{ord.user?.name || 'Customer'}</td>
                    <td className="py-3 font-bold">{formatPrice(ord.final_amount)}</td>
                    <td className="py-3"><OrderStatusBadge status={ord.order_status} /></td>
                    <td className="py-3 text-right">
                      <Link to={`/admin/orders`} className="text-indigo-400 hover:text-indigo-300 font-bold">
                        Inspect →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
};
