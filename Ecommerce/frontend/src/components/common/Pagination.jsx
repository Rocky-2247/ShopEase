import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowRight
} from 'lucide-react';

/**
 * Smart pagination window generator
 * Returns an array of numbers and '...' strings
 */
export const generatePaginationRange = (currentPage, totalPages) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Near beginning
  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, '...', totalPages];
  }

  // Near end
  if (currentPage >= totalPages - 3) {
    return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  // Middle window
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};

export const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 12,
  onPageChange,
  onLimitChange,
  limitOptions = [12, 24, 48, 96],
  showSummary = true,
  showLimitSelector = false,
  showQuickJump = true,
  className = ''
}) => {
  const [jumpPage, setJumpPage] = useState('');

  if (totalPages <= 1 && totalItems <= itemsPerPage && !showLimitSelector) {
    return null;
  }

  const pages = generatePaginationRange(currentPage, totalPages);

  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = totalItems > 0
    ? Math.min(currentPage * itemsPerPage, totalItems)
    : Math.min(currentPage * itemsPerPage, totalPages * itemsPerPage);

  const handleJumpSubmit = (e) => {
    e.preventDefault();
    const p = parseInt(jumpPage, 10);
    if (!isNaN(p) && p >= 1 && p <= totalPages && p !== currentPage) {
      onPageChange(p);
      setJumpPage('');
    }
  };

  return (
    <div className={`flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-slate-200/80 ${className}`}>
      
      {/* 1. Item summary info */}
      {showSummary && (
        <div className="text-xs text-slate-500 font-medium order-2 md:order-1 text-center md:text-left">
          {totalItems > 0 ? (
            <span>
              Showing <strong className="text-slate-900 font-bold">{startItem}–{endItem}</strong> of{' '}
              <strong className="text-slate-900 font-bold">{totalItems}</strong> items &bull; Page{' '}
              <strong className="text-indigo-600 font-bold">{currentPage}</strong> of{' '}
              <strong className="text-slate-900 font-bold">{totalPages}</strong>
            </span>
          ) : (
            <span>
              Page <strong className="text-indigo-600 font-bold">{currentPage}</strong> of{' '}
              <strong className="text-slate-900 font-bold">{totalPages}</strong>
            </span>
          )}
        </div>
      )}

      {/* 2. Main Page Numbers Strip */}
      <div className="flex items-center gap-1.5 order-1 md:order-2 flex-wrap justify-center">
        {/* First Page (<<) */}
        {totalPages > 4 && (
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => onPageChange(1)}
            className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="First Page"
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
        )}

        {/* Previous (<) */}
        <button
          type="button"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs font-bold flex items-center gap-1"
          title="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Page Buttons with Ellipses */}
        {pages.map((p, idx) => {
          if (p === '...') {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-slate-400 font-bold text-xs select-none"
              >
                &hellip;
              </span>
            );
          }

          const isCurrent = p === currentPage;
          return (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs font-black transition-all cursor-pointer ${
                isCurrent
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105 z-10'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/40'
              }`}
            >
              {p}
            </button>
          );
        })}

        {/* Next (>) */}
        <button
          type="button"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs font-bold flex items-center gap-1"
          title="Next Page"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Last Page (>>) */}
        {totalPages > 4 && (
          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => onPageChange(totalPages)}
            className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="Last Page"
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 3. Controls: Items Per Page & Quick Jump */}
      {(showLimitSelector || (showQuickJump && totalPages > 5)) && (
        <div className="flex items-center gap-3 order-3 text-xs">
          {/* Items Per Page */}
          {showLimitSelector && onLimitChange && (
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-medium">Per page:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => onLimitChange(Number(e.target.value))}
                className="bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-700 focus:outline-hidden focus:border-indigo-500"
              >
                {limitOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Quick Page Jump Input */}
          {showQuickJump && totalPages > 5 && (
            <form onSubmit={handleJumpSubmit} className="flex items-center gap-1">
              <span className="text-slate-400 font-medium">Go to:</span>
              <input
                type="number"
                min="1"
                max={totalPages}
                placeholder="#"
                value={jumpPage}
                onChange={(e) => setJumpPage(e.target.value)}
                className="w-12 bg-white border border-slate-200 rounded-xl px-2 py-1.5 text-xs font-bold text-center text-slate-800 focus:outline-hidden focus:border-indigo-500"
              />
              <button
                type="submit"
                disabled={!jumpPage}
                className="p-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Go to page"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      )}

    </div>
  );
};

export default Pagination;
