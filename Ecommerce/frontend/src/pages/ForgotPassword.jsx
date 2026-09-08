import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { authAPI } from '../services/api';
import { useToast } from '../context/ToastContext';

export const ForgotPassword = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      setLoading(true);
      await authAPI.forgotPassword(email);
      setSubmitted(true);
      showToast('Password reset link sent to your email!', 'success');
    } catch (err) {
      showToast(err.message || 'Error processing request', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-6 animate-slide-up">
        
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold font-display text-slate-900">
              Shop<span className="text-indigo-600">Ease</span>
            </span>
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Reset Password</h1>
          <p className="text-xs text-slate-500">
            Enter your account email and we'll send you instructions to recover your password.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h3 className="text-sm font-bold text-emerald-900">Recovery Email Dispatched</h3>
            <p className="text-xs text-emerald-700 leading-relaxed">
              If an account with <strong>{email}</strong> exists, check your inbox for instructions.
            </p>
            <Link
              to="/login"
              className="inline-block mt-2 text-xs font-bold text-indigo-600 hover:underline"
            >
              ← Back to Sign In
            </Link>
          </div>
        ) : (
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-2xl shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2"
            >
              <span>{loading ? 'Sending link...' : 'Send Recovery Link'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="pt-2 text-center text-xs">
          <Link to="/login" className="font-bold text-slate-500 hover:text-indigo-600 flex items-center justify-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
          </Link>
        </div>

      </div>
    </div>
  );
};
