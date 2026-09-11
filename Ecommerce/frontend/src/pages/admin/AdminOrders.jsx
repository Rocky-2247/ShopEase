import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Eye,
  Download,
  Calendar,
  Filter,
  X,
  MapPin,
  CreditCard,
  User,
  CheckCircle2,
  Clock,
  Truck,
  AlertCircle,
  Package,
  Search,
  ExternalLink,
  ChevronRight,
  FileSpreadsheet,
  RotateCcw,
  Check,
  XCircle
} from 'lucide-react';
import { ordersAPI, downloadInvoiceFile } from '../../services/api';
import { Loader } from '../../components/common/Loader';
import { OrderStatusBadge } from '../../components/common/Badge';
import { Pagination } from '../../components/common/Pagination';
import { useToast } from '../../context/ToastContext';
import { formatPrice } from '../../utils/currency';

export const AdminOrders = () => {
  const { showToast } = useToast();
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadingOrderId, setDownloadingOrderId] = useState(null);
  const [updatingStatusId, setUpdatingStatusId] = useState(null);

  // Inspector modal
  const [inspectOrder, setInspectOrder] = useState(null);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const res = await ordersAPI.getAllAdmin({
        status: (selectedStatus === 'all' || selectedStatus === 'returns') ? undefined : selectedStatus,
        page: currentPage,
        limit: itemsPerPage
      });
      if (res.data.success) {
        setOrders(res.data.data.orders || []);
        if (res.data.data.pagination) {
          setPagination(res.data.data.pagination);
        }
      }
    } catch (err) {
      console.error(err);
      showToast('Failed to load orders list', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, [selectedStatus, currentPage, itemsPerPage]);

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
    setCurrentPage(1);
  };

  const handleDownloadInvoice = async (orderId, orderNumber) => {
    try {
      setDownloadingOrderId(orderId);
      showToast('Generating official tax invoice PDF...', 'info');
      await downloadInvoiceFile(orderId, orderNumber);
      showToast('Invoice downloaded successfully!', 'success');
    } catch (err) {
      showToast('Failed to download invoice', 'error');
    } finally {
      setDownloadingOrderId(null);
    }
  };

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      setUpdatingStatusId(orderId);
      await ordersAPI.updateStatus(orderId, { order_status: newStatus });
      showToast(`Order #${orderId} status updated to ${newStatus}`, 'success');
      
      // Update locally
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, order_status: newStatus } : o))
      );

      if (inspectOrder && inspectOrder.id === orderId) {
        setInspectOrder((prev) => ({ ...prev, order_status: newStatus }));
      }
    } catch (err) {
      showToast(err.message || 'Failed to update order status', 'error');
    } finally {
      setUpdatingStatusId(null);
    }
  };

  const handleUpdateReturnStatus = async (orderId, newReturnStatus) => {
    try {
      await ordersAPI.updateReturnStatus(orderId, { return_status: newReturnStatus });
      showToast(
        newReturnStatus === 'Approved'
          ? `Return approved! Order #${orderId} refunded and items restocked.`
          : `Return request marked as ${newReturnStatus}`,
        'success'
      );
      loadOrders();
      if (inspectOrder && inspectOrder.id === orderId) {
        setInspectOrder((prev) => ({
          ...prev,
          return_status: newReturnStatus,
          order_status: newReturnStatus === 'Approved' ? 'Refunded' : prev.order_status,
          payment_status: newReturnStatus === 'Approved' ? 'Refunded' : prev.payment_status
        }));
      }
    } catch (err) {
      showToast(err.message || 'Failed to update return status', 'error');
    }
  };

  const handleExportOrdersCSV = () => {
    if (orders.length === 0) {
      showToast('No orders to export', 'warning');
      return;
    }

    const headers = [
      'Order Number',
      'Date Placed',
      'Customer Name',
      'Customer Email',
      'Items Count',
      'Total Amount ($)',
      'Discount ($)',
      'Shipping ($)',
      'Final Amount ($)',
      'Payment Method',
      'Payment Status',
      'Order Status',
      'Return Status',
      'Return Reason'
    ];

    const rows = filteredOrders.map((o) => [
      `"${o.order_number || o.id}"`,
      `"${new Date(o.createdAt || o.created_at || Date.now()).toLocaleDateString()}"`,
      `"${(o.user?.name || '').replace(/"/g, '""')}"`,
      `"${(o.user?.email || '').replace(/"/g, '""')}"`,
      o.items?.length || 0,
      o.total_amount || 0,
      o.discount_amount || 0,
      o.shipping_charge || 0,
      o.final_amount || 0,
      `"${o.payment_method || ''}"`,
      `"${o.payment_status || ''}"`,
      `"${o.order_status || ''}"`,
      `"${o.return_status || 'None'}"`,
      `"${(o.return_reason || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `ShopEase_Orders_Export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Orders exported to CSV successfully!', 'success');
  };

  const filteredOrders = orders.filter((o) => {
    if (selectedStatus === 'returns') {
      if (!o.return_status || o.return_status === 'None') return false;
    } else if (selectedStatus !== 'all' && o.order_status !== selectedStatus) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      (o.order_number && o.order_number.toLowerCase().includes(q)) ||
      (o.user?.name && o.user.name.toLowerCase().includes(q)) ||
      (o.user?.email && o.user.email.toLowerCase().includes(q)) ||
      (o.return_status && o.return_status.toLowerCase().includes(q))
    );
  });

  const returnRequestsCount = orders.filter((o) => o.return_status === 'Requested').length;

  const statusTabs = [
    { id: 'all', label: 'All Orders' },
    { id: 'Pending', label: 'Pending' },
    { id: 'Confirmed', label: 'Confirmed' },
    { id: 'Processing', label: 'Processing' },
    { id: 'Shipped', label: 'Shipped' },
    { id: 'Delivered', label: 'Delivered' },
    { id: 'returns', label: `Returns ${returnRequestsCount > 0 ? `(${returnRequestsCount})` : ''}` },
    { id: 'Cancelled', label: 'Cancelled' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
            <ShoppingBag className="w-7 h-7 text-indigo-400" />
            Order Fulfillment & Invoicing Hub
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Track customer orders, manage return requests, update delivery pipelines, and export sales CSV reports.
          </p>
        </div>

        <button
          onClick={handleExportOrdersCSV}
          className="px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 flex items-center gap-2 transition-all self-start sm:self-auto cursor-pointer"
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>Export Orders (CSV)</span>
        </button>
      </div>

      {/* Filter Tabs & Search */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {statusTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleStatusChange(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedStatus === tab.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by order # or customer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Orders Table */}
      {loading ? (
        <Loader text="Loading customer orders..." />
      ) : (
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800/90 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[10px] uppercase font-bold text-slate-400 bg-slate-950/60 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Order ID</th>
                  <th className="py-4 px-4">Date Placed</th>
                  <th className="py-4 px-4">Customer Details</th>
                  <th className="py-4 px-4">Total Amount</th>
                  <th className="py-4 px-4">Fulfillment Status</th>
                  <th className="py-4 px-4">Change Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-500 font-bold">
                      No orders found matching the selected status or query.
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-6 font-bold text-indigo-400">
                        #{ord.order_number || ord.id}
                      </td>
                      <td className="py-4 px-4 text-slate-400">
                        {new Date(ord.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-bold text-white">{ord.user?.name || 'Customer'}</p>
                        <p className="text-[10px] text-slate-400 truncate max-w-[140px]">
                          {ord.user?.email || 'N/A'}
                        </p>
                      </td>
                      <td className="py-4 px-4 font-black text-white text-sm">
                        {formatPrice(ord.final_amount)}
                      </td>
                      <td className="py-4 px-4">
                        <OrderStatusBadge status={ord.order_status} />
                      </td>
                      <td className="py-4 px-4">
                        <select
                          value={ord.order_status}
                          disabled={updatingStatusId === ord.id}
                          onChange={(e) => handleUpdateStatus(ord.id, e.target.value)}
                          className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-[11px] font-bold text-slate-300 focus:outline-none focus:border-indigo-500 disabled:opacity-50"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setInspectOrder(ord)}
                            className="p-2 rounded-xl text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 transition-colors"
                            title="Inspect Order Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDownloadInvoice(ord.id, ord.order_number)}
                            disabled={downloadingOrderId === ord.id}
                            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors disabled:opacity-50"
                            title="Download PDF Invoice"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Pagination */}
          <div className="p-4 border-t border-slate-800/80 bg-slate-950/40">
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.pages}
              totalItems={pagination.total}
              itemsPerPage={itemsPerPage}
              onPageChange={(p) => setCurrentPage(p)}
              onLimitChange={(l) => {
                setItemsPerPage(l);
                setCurrentPage(1);
              }}
              limitOptions={[10, 20, 50, 100]}
              showLimitSelector={true}
              showQuickJump={true}
              showSummary={true}
            />
          </div>
        </div>
      )}

      {/* Order Inspector Modal / Drawer */}
      {inspectOrder && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full my-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-black uppercase text-indigo-400 tracking-wider">
                  Order Breakdown
                </span>
                <h2 className="text-xl font-black text-white mt-0.5">
                  Order #{inspectOrder.order_number || inspectOrder.id}
                </h2>
              </div>
              <button
                onClick={() => setInspectOrder(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Customer & Shipping Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Customer Profile</span>
                </p>
                <p className="text-sm font-bold text-white">{inspectOrder.user?.name || 'Customer'}</p>
                <p className="text-xs text-slate-400">{inspectOrder.user?.email || 'N/A'}</p>
                <p className="text-xs text-slate-400">{inspectOrder.user?.phone || 'No phone recorded'}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Payment & Invoice</span>
                </p>
                <p className="text-xs text-slate-300">
                  Method: <span className="font-bold text-white uppercase">{inspectOrder.payment_method || 'Online'}</span>
                </p>
                <p className="text-xs text-slate-300">
                  Payment Status: <span className="font-bold text-emerald-400">{inspectOrder.payment_status || 'Paid'}</span>
                </p>
                <p className="text-xs text-slate-300">
                  Grand Total: <span className="font-black text-white">{formatPrice(inspectOrder.final_amount)}</span>
                </p>
              </div>
            </div>

            {/* Return Request Review Banner (if applicable) */}
            {inspectOrder.return_status && inspectOrder.return_status !== 'None' && (
              <div className={`p-4 rounded-2xl border space-y-3 ${
                inspectOrder.return_status === 'Approved'
                  ? 'bg-emerald-950/40 border-emerald-800 text-emerald-200'
                  : inspectOrder.return_status === 'Rejected'
                  ? 'bg-rose-950/40 border-rose-800 text-rose-200'
                  : 'bg-amber-950/50 border-amber-700/80 text-amber-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-xs">
                    <RotateCcw className="w-4 h-4" />
                    <span>Return Request Status: <strong>{inspectOrder.return_status}</strong></span>
                  </div>
                  {inspectOrder.return_requested_at && (
                    <span className="text-[10px] opacity-75">
                      {new Date(inspectOrder.return_requested_at).toLocaleDateString()}
                    </span>
                  )}
                </div>

                {inspectOrder.return_reason && (
                  <p className="text-xs bg-black/40 p-2.5 rounded-xl border border-white/5 font-mono">
                    <strong>Customer Note:</strong> {inspectOrder.return_reason}
                  </p>
                )}

                {/* Approve / Reject Controls */}
                {inspectOrder.return_status === 'Requested' && (
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => handleUpdateReturnStatus(inspectOrder.id, 'Approved')}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-600/20"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Approve Return & Refund</span>
                    </button>
                    <button
                      onClick={() => handleUpdateReturnStatus(inspectOrder.id, 'Rejected')}
                      className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Reject Return</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Items List */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Order Items ({inspectOrder.items?.length || 0})
              </h3>
              <div className="divide-y divide-slate-800/60 bg-slate-950 rounded-2xl border border-slate-800 p-2 max-h-56 overflow-y-auto">
                {inspectOrder.items && inspectOrder.items.length > 0 ? (
                  inspectOrder.items.map((it, idx) => (
                    <div key={idx} className="p-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={it.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=100&q=80'}
                          alt=""
                          className="w-10 h-10 rounded-xl object-cover bg-slate-900 border border-slate-800 shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-white truncate">{it.product_name || `Item #${it.product_id}`}</p>
                          <p className="text-[11px] text-slate-400">Qty: {it.quantity} &bull; {formatPrice(it.unit_price)} each</p>
                        </div>
                      </div>
                      <p className="text-xs font-bold text-white shrink-0">
                        {formatPrice((it.unit_price || 0) * (it.quantity || 1))}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500 p-4 text-center">No individual items recorded.</p>
                )}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => handleDownloadInvoice(inspectOrder.id, inspectOrder.order_number)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Tax Invoice (PDF)</span>
              </button>

              <button
                onClick={() => setInspectOrder(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
