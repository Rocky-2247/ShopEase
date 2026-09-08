import React, { useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Lock, Eye, EyeOff, ArrowRight, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { authAPI } from '../services/api';
import { useToast } from '../context/ToastContext';
import { useAuth } from '../context/AuthContext';

export const ResetPassword = () => {
  const { token: paramToken } = useParams();
  const [searchParams] = useSearchParams();
  const token = paramToken || searchParams.get('token');
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      showToast('Reset token is missing or invalid. Please request a new link.', 'error');
      return;
    }

    if (password.length < 6) {
      showToast('Password must be at least 6 characters long', 'error');
      return;
    }

    if (password !== confirmPassword) {
      showToast('Passwords do not match', 'error');
      return;
    }

    try {
      setLoading(true);
      const res = await authAPI.resetPassword({ token, password });
      if (res.data.success) {
        setSuccess(true);
        showToast('Password reset successfully! You can now log in.', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Failed to reset password. The link may have expired.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-6 animate-slide-up">
        
        {/* Header / Brand */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/25">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold font-display text-slate-900">
              Shop<span className="text-indigo-600">Ease</span>
            </span>
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Create New Password</h1>
          <p className="text-xs text-slate-500">
            Choose a strong, secure password for your ShopEase account.
          </p>
        </div>

        {!token && !success && (
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-800 text-xs flex items-center gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>No reset token detected in URL. Please use the link sent to your email.</span>
          </div>
        )}

        {success ? (
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <div>
              <h3 className="text-sm font-bold text-emerald-900">Password Updated Successfully</h3>
              <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                Your account is now secured with your new password.
              </p>
            </div>
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
            >
              <span>Sign In to Your Account</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* New Password */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">New Password</label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Min 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Confirm New Password</label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Re-enter new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                />
              </div>
            </div>

            {/* Password Requirement Hint */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Use at least 6 characters with a combination of letters & numbers.</span>
            </div>

            <button
              type="submit"
              disabled={loading || !token}
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-2xl shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span>{loading ? 'Updating password...' : 'Set New Password'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="pt-2 text-center text-xs">
          <Link to="/login" className="font-bold text-slate-500 hover:text-indigo-600">
            ← Return to Sign In
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ResetPassword;
