import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Lock, Mail, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';
  const { login } = useAuth();
  const { showToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please enter both email and password', 'warning');
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      navigate(redirect);
    } catch (err) {
      // Handled in context toast
    } finally {
      setLoading(false);
    }
  };

  const fillDemoAdmin = () => {
    setEmail('admin@shopease.com');
    setPassword('Admin@123');
    showToast('Admin demo credentials populated!', 'info');
  };

  const fillDemoCustomer = () => {
    setEmail('user@shopease.com');
    setPassword('User@123');
    showToast('Customer demo credentials populated!', 'info');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-6 animate-slide-up">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold font-display text-slate-900">
              Shop<span className="text-indigo-600">Ease</span>
            </span>
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Welcome Back</h1>
          <p className="text-xs text-slate-500">Sign in to access your orders, cart, and wishlist.</p>
        </div>

        {/* Sandbox Demo Account Quick-Fill (Development Sandbox Only) */}
        {import.meta.env.DEV && (
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-2">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block text-center">
              ⚡ Sandbox Demo Accounts (Dev Only)
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={fillDemoAdmin}
                className="py-2 px-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5" /> Demo Admin
              </button>
              <button
                type="button"
                onClick={fillDemoCustomer}
                className="py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5" /> Demo Customer
              </button>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
            <div className="relative flex items-center">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600 transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-slate-700">Password</label>
              <Link to="/forgot-password" className="text-xs font-bold text-indigo-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-2xl shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2"
          >
            <span>{loading ? 'Signing in...' : 'Sign In to Account'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-slate-500">
          Don't have an account yet?{' '}
          <Link to={`/register?redirect=${encodeURIComponent(redirect)}`} className="font-bold text-indigo-600 hover:underline">
            Create Account
          </Link>
        </div>

      </div>
    </div>
  );
};
