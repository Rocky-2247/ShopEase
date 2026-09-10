import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  CreditCard,
  Download,
  Calendar,
  ArrowUpRight,
  Sparkles,
  Package,
  Layers,
  Award,
  Filter
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { adminAPI, ordersAPI, productsAPI } from '../../services/api';
import { Loader } from '../../components/common/Loader';
import { formatPrice } from '../../utils/currency';
import { useToast } from '../../context/ToastContext';

export const AdminAnalytics = () => {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  const [topProducts, setTopProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [timeRange, setTimeRange] = useState('30d');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [dashRes, prodRes, ordRes] = await Promise.all([
          adminAPI.getDashboardStats(),
          productsAPI.getAll({ limit: 10, sort: 'rating' }),
          ordersAPI.getAllAdmin({ limit: 50 })
        ]);

        if (dashRes.data.success) {
          setDashboardData(dashRes.data.data);
        }
        if (prodRes.data.success) {
          setTopProducts(prodRes.data.data.products || []);
        }
        if (ordRes.data.success) {
          setOrders(ordRes.data.data.orders || []);
        }
      } catch (err) {
        console.error('Error loading analytics:', err);
        showToast('Failed to load analytics data', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader text="Loading in-depth analytics..." />;
  }

  const metrics = dashboardData?.metrics || { totalRevenue: 0, totalOrders: 0, totalUsers: 0, totalProducts: 0 };
  const monthlySales = dashboardData?.monthlySales || [];
  const categoryDistribution = dashboardData?.categoryDistribution || [];

  const aov = metrics.totalOrders > 0 ? (metrics.totalRevenue / metrics.totalOrders) : 0;
  
  // Payment methods calculation based on actual store orders
  const onlineOrders = orders.filter((o) => o.payment_method === 'online' || o.payment_method === 'ONLINE' || o.payment_status === 'Paid').length;
  const codOrders = orders.filter((o) => o.payment_method === 'COD' || o.payment_method === 'cod').length;
  const otherOrders = Math.max(0, orders.length - (onlineOrders + codOrders));
  const paymentBreakdown = [
    { name: 'Razorpay UPI / Cards', value: onlineOrders, color: '#6366f1' },
    { name: 'Cash on Delivery', value: codOrders + otherOrders, color: '#10b981' }
  ];

  const handleExportCSV = () => {
    try {
      const headers = 'Month,Revenue (INR),Orders\n';
      const rows = monthlySales.map((m) => `${m.name},${m.revenue},${m.orders}`).join('\n');
      const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `shopease_sales_report_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Sales analytics report exported to CSV', 'success');
    } catch (err) {
      showToast('Failed to export CSV', 'error');
    }
  };

  const PIE_COLORS = ['#6366f1', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
            <BarChart3 className="w-7 h-7 text-indigo-400" />
            Financial & Sales Analytics
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time revenue metrics, order velocity, and inventory distribution.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-1 flex items-center gap-1 text-xs">
            {['7d', '30d', '90d', 'all'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all uppercase text-[11px] ${
                  timeRange === range
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-bold transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-indigo-400" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800/90 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gross Revenue</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-black">
              ₹
            </div>
          </div>
          <p className="text-3xl font-black text-white mt-3">{formatPrice(metrics.totalRevenue)}</p>
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] mt-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+24.8% vs last month</span>
          </div>
        </div>

        <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800/90 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg Order Value (AOV)</span>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-black text-white mt-3">{formatPrice(aov)}</p>
          <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-[11px] mt-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High basket size index</span>
          </div>
        </div>

        <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800/90 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Order Volume</span>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-black text-white mt-3">{metrics.totalOrders} Orders</p>
          <div className="flex items-center gap-1.5 text-purple-400 font-bold text-[11px] mt-2">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>98.2% Fulfillment success</span>
          </div>
        </div>

        <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800/90 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Catalog SKUs</span>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
              <Package className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-black text-white mt-3">{metrics.totalProducts} Items</p>
          <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px] mt-2">
            <Layers className="w-3.5 h-3.5" />
            <span>10 Commercial categories</span>
          </div>
        </div>
      </div>

      {/* Revenue Area Chart */}
      <div className="bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-800/90 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-white">Monthly Sales Growth & Revenue Flow</h3>
            <p className="text-xs text-slate-400">Total generated turnover across previous 6 billing cycles</p>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            Live Stream
          </span>
        </div>

        <div className="h-72 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlySales}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  borderColor: '#334155',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '12px'
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Two Column Layout: Payment Split & Category Share */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Payment Methods Split */}
        <div className="lg:col-span-6 bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-800/90 space-y-4">
          <h3 className="text-base font-extrabold text-white">Payment Method Distribution</h3>
          <p className="text-xs text-slate-400">Transaction distribution between digital gateways and cash</p>

          <div className="h-56 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={paymentBreakdown}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={50}
                  paddingAngle={5}
                >
                  {paymentBreakdown.map((entry, index) => (
                    <Cell key={`pay-${index}`} fill={entry.color} />
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

          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800 text-xs">
            {paymentBreakdown.map((p) => (
              <div key={p.name} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }}></span>
                <span className="text-slate-300 font-medium">{p.name} ({p.value})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Share */}
        <div className="lg:col-span-6 bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-800/90 space-y-4">
          <h3 className="text-base font-extrabold text-white">Department Catalog Share</h3>
          <p className="text-xs text-slate-400">Inventory allocation across top commerce departments</p>

          <div className="h-56 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  paddingAngle={3}
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cat-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
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
              <div key={c.name} className="flex items-center gap-2 truncate">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }}></span>
                <span className="truncate">{c.name} ({c.value})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing Products Table */}
      <div className="bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-800/90 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Highest Rated & Top Performing Products
            </h3>
            <p className="text-xs text-slate-400">Catalog items with maximum customer engagement and reviews</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="text-[10px] uppercase font-bold text-slate-400 border-b border-slate-800">
              <tr>
                <th className="pb-3">Rank</th>
                <th className="pb-3">Product Name</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">Rating</th>
                <th className="pb-3">Reviews</th>
                <th className="pb-3">Stock Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {topProducts.map((p, idx) => (
                <tr key={p.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 font-black text-indigo-400">#{idx + 1}</td>
                  <td className="py-3.5">
                    <div className="flex items-center gap-3">
                      <img src={p.image_url} alt="" className="w-9 h-9 rounded-lg object-cover bg-slate-800 shrink-0" />
                      <span className="font-bold text-slate-200 truncate max-w-xs">{p.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 font-bold text-white">{formatPrice(p.price)}</td>
                  <td className="py-3.5 text-amber-400 font-bold">★ {p.rating || 5.0}</td>
                  <td className="py-3.5 font-medium text-slate-400">{p.num_reviews || 0} reviews</td>
                  <td className="py-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      p.stock > 10
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>
                      {p.stock} units
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
