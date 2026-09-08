import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success', duration = 4000) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Fixed Toast Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4">
        {toasts.map((toast) => {
          let bg = 'bg-emerald-900/90 text-emerald-100 border-emerald-500/30';
          let icon = <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />;

          if (toast.type === 'error') {
            bg = 'bg-rose-900/90 text-rose-100 border-rose-500/30';
            icon = <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />;
          } else if (toast.type === 'warning') {
            bg = 'bg-amber-900/90 text-amber-100 border-amber-500/30';
            icon = <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />;
          } else if (toast.type === 'info') {
            bg = 'bg-indigo-900/90 text-indigo-100 border-indigo-500/30';
            icon = <Info className="w-5 h-5 text-indigo-400 shrink-0" />;
          }

          return (
            <div
              key={toast.id}
              className={`pointer-events-auto backdrop-blur-md border rounded-xl p-4 shadow-2xl flex items-start gap-3 transition-all animate-slide-up ${bg}`}
            >
              {icon}
              <div className="text-sm font-medium flex-1">{toast.message}</div>
              <button
                onClick={() => removeToast(toast.id)}
                className="opacity-70 hover:opacity-100 transition-opacity p-0.5"
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
