import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loader = ({ text = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-slate-400 space-y-3 animate-fade-in">
      <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
      <p className="text-xs font-bold tracking-wide">{text}</p>
    </div>
  );
};
