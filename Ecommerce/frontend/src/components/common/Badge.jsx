import React from 'react';

export const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
    secondary: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
    success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    danger: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
    accent: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300'
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </span>
  );
};

export const OrderStatusBadge = ({ status }) => {
  let variant = 'primary';
  if (status === 'Confirmed') variant = 'primary';
  if (status === 'Shipped') variant = 'warning';
  if (status === 'Delivered') variant = 'success';
  if (status === 'Cancelled') variant = 'danger';

  return <Badge variant={variant}>{status}</Badge>;
};
