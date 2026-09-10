import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => {
          let bg = 'bg-slate-900 border-slate-700 text-slate-100';
          let Icon = Info;
          let iconColor = 'text-indigo-400';

          if (toast.type === 'success') {
            bg = 'bg-slate-900 border-emerald-500/30 text-slate-100';
            Icon = CheckCircle2;
            iconColor = 'text-emerald-400';
          } else if (toast.type === 'error') {
            bg = 'bg-slate-900 border-rose-500/30 text-slate-100';
            Icon = AlertCircle;
            iconColor = 'text-rose-400';
          } else if (toast.type === 'warning') {
            bg = 'bg-slate-900 border-amber-500/30 text-slate-100';
            Icon = AlertTriangle;
            iconColor = 'text-amber-400';
          }

          return (
            <div
              key={toast.id}
              className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl border shadow-2xl backdrop-blur-md animate-fade-in ${bg}`}
            >
              <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconColor}`} />
              <p className="text-xs font-semibold leading-relaxed flex-1">{toast.message}</p>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-slate-400 hover:text-white p-0.5 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
