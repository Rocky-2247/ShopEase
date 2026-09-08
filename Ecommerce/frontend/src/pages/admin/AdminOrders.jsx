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
  CheckCircle2
} from 'lucide-react';
import { ordersAPI, downloadInvoiceFile } from '../../services/api';
import { Loader } from '../../components/common/Loader';
import { OrderStatusBadge } from '../../components/common/Badge';
import { useToast } from '../../context/ToastContext';
import { formatPrice } from '../../utils/currency';

export const AdminOrders = () => {
  const { showToast } = useToast();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [downloadingOrderId, setDownloadingOrderId] = useState(null);

  // Inspector modal
  const [inspectOrder, setInspectOrder] = useState(null);

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

  const loadOrders = async () => {
    try {
      setLoading(true);
      const res = await ordersAPI.getAllAdmin({ status: selectedStatus });
      if (res.data.success) {
        setOrders(res.data.data.orders);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, [selectedStatus]);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const res = await ordersAPI.updateStatus(orderId, { status: newStatus });
      if (res.data.success) {
        showToast(`Order status updated to "${newStatus}"`, 'success');
        setOrders((prev) =>
          prev.map((o) => (o.id === orderId ? { ...o, order_status: newStatus } : o))
        );
        if (inspectOrder && inspectOrder.id === orderId) {
          setInspectOrder({ ...inspectOrder, order_status: newStatus });
        }
      }
    } catch (err) {
      showToast(err.message || 'Failed to update order status', 'error');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Order Lifecycle Fulfillment</h1>
          <p className="text-xs text-slate-400 mt-1">Track orders, manage fulfillment stages, and monitor transactions.</p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-2xl border border-slate-800">
          <Filter className="w-4 h-4 text-slate-500 ml-2" />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-transparent text-xs font-bold text-slate-300 outline-none pr-3 cursor-pointer"
          >
            <option value="all">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12"><Loader text="Loading orders..." /></div>
        ) : orders.length === 0 ? (
          <div className="p-12 text-center text-slate-500 text-xs">No orders found for this filter.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[10px] uppercase font-bold text-slate-500 bg-slate-900/60 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Order ID</th>
                  <th className="py-4 px-4">Customer</th>
                  <th className="py-4 px-4">Date</th>
                  <th className="py-4 px-4">Items</th>
                  <th className="py-4 px-4">Total</th>
                  <th className="py-4 px-4">Order Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900 text-slate-300">
                {orders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-indigo-400">#{ord.order_number}</td>
                    <td className="py-3.5 px-4">
                      <p className="font-bold text-white">{ord.user?.name || 'Customer'}</p>
                      <p className="text-[10px] text-slate-500">{ord.user?.email}</p>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">
                      {new Date(ord.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3.5 px-4 font-semibold">{ord.items?.length || 0} items</td>
                    <td className="py-3.5 px-4 font-black text-white">{formatPrice(ord.final_amount)}</td>
                    <td className="py-3.5 px-4">
                      <select
                        value={ord.order_status}
                        onChange={(e) => handleStatusChange(ord.id, e.target.value)}
                        className="bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1 text-xs font-bold text-slate-200 outline-none cursor-pointer"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="py-3.5 px-6 text-right space-x-2">
                      <button
                        onClick={() => setInspectOrder(ord)}
                        className="p-2 bg-slate-900 hover:bg-slate-800 rounded-xl text-indigo-400 hover:text-white transition-colors"
                        title="Inspect order"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDownloadInvoice(ord.id, ord.order_number)}
                        disabled={downloadingOrderId === ord.id}
                        className="inline-block p-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 rounded-xl text-slate-400 hover:text-white transition-colors cursor-pointer"
                        title="Download invoice"
                      >
                        <Download className={`w-3.5 h-3.5 ${downloadingOrderId === ord.id ? 'animate-bounce text-indigo-400' : ''}`} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Inspect Order Modal */}
      {inspectOrder && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
          <div onClick={() => setInspectOrder(null)} className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
          <div className="relative bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-slate-800 shadow-2xl space-y-6 z-10 max-h-[90vh] overflow-y-auto animate-slide-up text-white text-xs">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-extrabold text-white">Order Details #{inspectOrder.order_number}</h3>
                <p className="text-[11px] text-slate-400">{new Date(inspectOrder.createdAt).toLocaleString()}</p>
              </div>
              <button onClick={() => setInspectOrder(null)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>

            {/* Customer & Address Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold uppercase text-indigo-400">Customer Info</span>
                <p className="font-bold text-white">{inspectOrder.user?.name}</p>
                <p className="text-slate-400">{inspectOrder.user?.email}</p>
                <p className="text-slate-400">{inspectOrder.user?.phone || 'No phone'}</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold uppercase text-indigo-400">Shipping Destination</span>
                {(() => {
                  const addr = typeof inspectOrder.shipping_address_snapshot === 'string'
                    ? JSON.parse(inspectOrder.shipping_address_snapshot || '{}')
                    : (inspectOrder.shipping_address_snapshot || {});
                  return (
                    <>
                      <p className="font-bold text-white">{addr.full_name || 'Name'}</p>
                      <p className="text-slate-400">{addr.street}</p>
                      <p className="text-slate-400">{addr.city}, {addr.state} - {addr.pincode}</p>
                    </>
                  );
                })()}
              </div>
            </div>

            {/* Purchased Items List */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-[10px] font-bold uppercase text-indigo-400">Ordered Items</span>
              <div className="divide-y divide-slate-900">
                {inspectOrder.items?.map((item) => (
                  <div key={item.id} className="py-2.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img src={item.product_image_snapshot} alt="" className="w-10 h-10 rounded-xl object-cover bg-slate-900 shrink-0" />
                      <div>
                        <p className="font-bold text-white">{item.product_name_snapshot}</p>
                        <p className="text-[11px] text-slate-500">Qty: {item.quantity} × {formatPrice(item.price)}</p>
                      </div>
                    </div>
                    <span className="font-bold text-white">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Totals & Action */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-3 border-t border-slate-850">
              <div>
                <span className="text-slate-400 block text-xs">Payment: <strong className="text-white uppercase">{inspectOrder.payment_method}</strong> ({inspectOrder.payment_status})</span>
                <span className="text-slate-400 block text-xs mt-0.5">Order Status: <strong className="text-indigo-400">{inspectOrder.order_status}</strong></span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <button
                  onClick={() => handleDownloadInvoice(inspectOrder.id, inspectOrder.order_number)}
                  disabled={downloadingOrderId === inspectOrder.id}
                  className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Download className={`w-3.5 h-3.5 ${downloadingOrderId === inspectOrder.id ? 'animate-bounce' : ''}`} />
                  <span>{downloadingOrderId === inspectOrder.id ? 'Generating...' : 'Download Invoice PDF'}</span>
                </button>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Final Total</span>
                  <span className="text-lg font-black text-indigo-400">{formatPrice(inspectOrder.final_amount)}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
