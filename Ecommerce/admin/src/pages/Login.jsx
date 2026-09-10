import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Mail, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [email, setEmail] = useState('admin@shopease.com');
  const [password, setPassword] = useState('Admin@123');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      // Toast handles display
    }
  };

  const handleFillDemo = () => {
    setEmail('admin@shopease.com');
    setPassword('Admin@123');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 antialiased selection:bg-indigo-500 selection:text-white">
      <div className="max-w-md w-full space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white mx-auto shadow-xl shadow-indigo-600/30">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white font-display">
            Shop<span className="text-indigo-400">Ease</span> Enterprise
          </h1>
          <p className="text-xs text-slate-400">
            Administrative Access Portal & Control Center
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Admin Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@shopease.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-medium"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span>{loading ? 'Authenticating...' : 'Sign In to Admin Hub'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Credentials */}
          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button
              type="button"
              onClick={handleFillDemo}
              className="w-full p-3 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-left flex items-center justify-between transition-colors group"
            >
              <div className="text-[11px]">
                <p className="font-bold text-slate-300 group-hover:text-white">Admin Demo Credentials</p>
                <p className="text-slate-500">admin@shopease.com &bull; Admin@123</p>
              </div>
              <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded-lg">
                Autofill
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-[11px] text-slate-500">
          ShopEase Enterprise Admin Web Application &bull; Port 3001
        </p>
      </div>
    </div>
  );
};
