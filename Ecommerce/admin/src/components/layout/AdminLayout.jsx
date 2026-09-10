import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  Package,
  Layers,
  ShoppingBag,
  Users,
  Tag,
  Settings,
  ExternalLink,
  LogOut,
  Shield,
  Menu,
  X,
  Plus,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickActionOpen, setQuickActionOpen] = useState(false);

  const navItems = [
    { label: 'Overview', path: '/', icon: LayoutDashboard, exact: true },
    { label: 'Analytics', path: '/analytics', icon: BarChart3 },
    { label: 'Products', path: '/products', icon: Package, badge: '1.6k+' },
    { label: 'Categories', path: '/categories', icon: Layers },
    { label: 'Orders', path: '/orders', icon: ShoppingBag },
    { label: 'Customers', path: '/users', icon: Users },
    { label: 'Coupons', path: '/coupons', icon: Tag, badge: 'Active' },
    { label: 'Settings', path: '/settings', icon: Settings },
  ];

  const getPageTitle = () => {
    const item = navItems.find((n) =>
      n.exact ? location.pathname === n.path : location.pathname.startsWith(n.path)
    );
    return item ? item.label : 'Dashboard';
  };

  const isNavActive = (item) => {
    if (item.exact) return location.pathname === item.path;
    return location.pathname === item.path || location.pathname.startsWith(item.path + '/');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row antialiased selection:bg-indigo-500 selection:text-white">
      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar (Desktop + Mobile Slideover) */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-72 bg-slate-900/95 md:bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between shrink-0 z-50 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="space-y-6">
          {/* Admin Header / Logo */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black font-display tracking-tight text-white">
                    Shop<span className="text-indigo-400">Ease</span>
                  </span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                    Admin
                  </span>
                </div>
                <span className="text-[10px] block font-bold uppercase tracking-widest text-slate-400">
                  Control Hub (Port 3001)
                </span>
              </div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            <p className="px-3 text-[11px] font-black uppercase tracking-wider text-slate-500 pb-1">
              Management Portal
            </p>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isNavActive(item);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all group ${
                      active
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-600/25'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-4 h-4 transition-colors ${
                          active ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                          active
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Footer info & live link */}
        <div className="pt-5 border-t border-slate-800/80 space-y-3">
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-all border border-slate-700/50 group"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open Store (Port 3000)</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
          </a>

          <div className="flex items-center justify-between px-2 pt-1">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-md">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate">{user?.name || 'Administrator'}</p>
                <p className="text-[10px] text-slate-400 truncate">{user?.email || 'admin@shopease.com'}</p>
              </div>
            </div>
            <button
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className="text-slate-400 hover:text-rose-400 p-2 rounded-lg hover:bg-rose-500/10 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Top Sticky Header */}
        <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 font-medium">ShopEase Admin</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="font-extrabold text-white">{getPageTitle()}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* System Status Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>MySQL 8.0 &bull; Port 5000 Online</span>
            </div>

            {/* Quick Actions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setQuickActionOpen(!quickActionOpen)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create</span>
              </button>

              {quickActionOpen && (
                <>
                  <div
                    className="fixed inset-0 z-20"
                    onClick={() => setQuickActionOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-30 space-y-1 animate-fade-in">
                    <button
                      onClick={() => {
                        setQuickActionOpen(false);
                        navigate('/products');
                      }}
                      className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      <Package className="w-4 h-4 text-indigo-400" />
                      <span>New Product</span>
                    </button>
                    <button
                      onClick={() => {
                        setQuickActionOpen(false);
                        navigate('/categories');
                      }}
                      className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      <Layers className="w-4 h-4 text-purple-400" />
                      <span>New Category</span>
                    </button>
                    <button
                      onClick={() => {
                        setQuickActionOpen(false);
                        navigate('/coupons');
                      }}
                      className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      <Tag className="w-4 h-4 text-emerald-400" />
                      <span>New Coupon</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
