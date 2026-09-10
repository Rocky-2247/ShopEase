import React from 'react';

export const OrderStatusBadge = ({ status }) => {
  let color = 'bg-slate-800 text-slate-300 border-slate-700';

  switch (status?.toLowerCase()) {
    case 'delivered':
      color = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      break;
    case 'shipped':
      color = 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      break;
    case 'processing':
      color = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      break;
    case 'cancelled':
      color = 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      break;
    case 'pending':
    default:
      color = 'bg-sky-500/10 text-sky-400 border-sky-500/20';
      break;
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${color}`}>
      {status || 'Pending'}
    </span>
  );
};
