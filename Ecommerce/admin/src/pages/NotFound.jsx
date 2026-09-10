import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="text-center py-24 space-y-4">
      <div className="w-16 h-16 rounded-3xl bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto border border-rose-500/20 shadow-xl">
        <ShieldAlert className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-black text-white">404 - Admin Screen Not Found</h1>
      <p className="text-xs text-slate-400 max-w-sm mx-auto">
        The administrative panel or resource you are looking for does not exist or has been moved.
      </p>
      <div className="pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Dashboard</span>
        </Link>
      </div>
    </div>
  );
};
