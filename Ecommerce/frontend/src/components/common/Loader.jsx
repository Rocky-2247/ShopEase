import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loader = ({ text = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 gap-3">
      <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
      <p className="text-sm font-medium text-slate-500">{text}</p>
    </div>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm animate-pulse flex flex-col gap-3">
      <div className="w-full aspect-square bg-slate-200 rounded-xl"></div>
      <div className="h-4 bg-slate-200 rounded w-1/3 mt-2"></div>
      <div className="h-5 bg-slate-200 rounded w-3/4"></div>
      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
      <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100">
        <div className="h-6 bg-slate-200 rounded w-1/4"></div>
        <div className="h-9 bg-slate-200 rounded-xl w-1/3"></div>
      </div>
    </div>
  );
};
