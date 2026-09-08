import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Package, Download, ChevronRight, Calendar, ArrowRight, FileText } from 'lucide-react';
import { ordersAPI, downloadInvoiceFile } from '../services/api';
import { OrderStatusBadge } from '../components/common/Badge';
import { Loader } from '../components/common/Loader';
import { formatPrice } from '../utils/currency';
import { useToast } from '../context/ToastContext';
import { InvoicePreviewModal } from '../components/order/InvoicePreviewModal';

export const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [downloadingOrderId, setDownloadingOrderId] = useState(null);
  const [previewOrder, setPreviewOrder] = useState(null);
  const { showToast } = useToast();

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

  useEffect(() => {
    ordersAPI.getUserOrders()
      .then((res) => {
        if (res.data.success) {
          setOrders(res.data.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader text="Loading your order history..." />;
  }

  if (orders.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mx-auto mb-4">
          <Package className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">No orders placed yet</h2>
        <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
          When you place orders, they will appear here along with tracking statuses and downloadable PDF tax invoices.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md"
        >
          <span>Start Shopping</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">My Orders</h1>
        <p className="text-sm text-slate-500 mt-1">
          Review previous orders, track live status, or download tax invoices.
        </p>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 space-y-4 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-sm font-black text-slate-900">#{order.order_number}</span>
                <OrderStatusBadge status={order.order_status} />
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{new Date(order.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </div>
            </div>

            {/* Items previews */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {order.items?.map((item, idx) => (
                  <img
                    key={idx}
                    src={item.product_image_snapshot || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100'}
                    alt=""
                    className="w-12 h-12 rounded-xl object-cover border border-slate-100 bg-slate-50 shrink-0"
                    title={item.product_name_snapshot}
                  />
                ))}
                <span className="text-xs text-slate-500 font-medium ml-2">
                  {order.items?.length} item{order.items?.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[10px] text-slate-400 font-bold block">Total Amount</span>
                <span className="text-base font-black text-indigo-600">
                  {formatPrice(order.final_amount)}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPreviewOrder(order)}
                  className="font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Invoice</span>
                </button>

                <button
                  onClick={() => handleDownloadInvoice(order.id, order.order_number)}
                  disabled={downloadingOrderId === order.id}
                  className="font-bold text-slate-600 hover:text-slate-900 disabled:opacity-50 flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className={`w-3.5 h-3.5 text-indigo-600 ${downloadingOrderId === order.id ? 'animate-bounce' : ''}`} />
                  <span>{downloadingOrderId === order.id ? 'Generating...' : 'PDF Invoice'}</span>
                </button>
              </div>

              <Link
                to={`/orders/${order.id}`}
                className="font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <span>View Order Details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* On-Screen Tax Invoice Preview Modal */}
      {previewOrder && (
        <InvoicePreviewModal
          isOpen={!!previewOrder}
          onClose={() => setPreviewOrder(null)}
          order={previewOrder}
        />
      )}
    </div>
  );
};
