import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Package,
  Truck,
  CheckCircle2,
  Clock,
  XCircle,
  Download,
  MapPin,
  CreditCard,
  ChevronLeft,
  AlertTriangle,
  FileText,
  RotateCcw,
  Send,
  X,
  AlertCircle
} from 'lucide-react';
import { OrderStatusBadge } from '../components/common/Badge';
import { Loader } from '../components/common/Loader';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/currency';
import { ordersAPI, downloadInvoiceFile } from '../services/api';
import { InvoicePreviewModal } from '../components/order/InvoicePreviewModal';

export const OrderDetails = () => {
  const { id } = useParams();
  const { showToast } = useToast();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cancelling, setCancelling] = useState(false);
  const [downloadingInvoice, setDownloadingInvoice] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  // Return & Refund State
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [returnReason, setReturnReason] = useState('Damaged / Defective item');
  const [returnComments, setReturnComments] = useState('');
  const [submittingReturn, setSubmittingReturn] = useState(false);

  useEffect(() => {
    ordersAPI.getById(id)
      .then((res) => {
        if (res.data.success) {
          setOrder(res.data.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleCancelOrder = async () => {
    if (!window.confirm('Are you sure you want to cancel this order? Items will be restocked.')) {
      return;
    }

    try {
      setCancelling(true);
      const res = await ordersAPI.cancel(order.id);
      if (res.data.success) {
        showToast('Order has been cancelled successfully', 'info');
        setOrder(res.data.data);
      }
    } catch (err) {
      showToast(err.message || 'Failed to cancel order', 'error');
    } finally {
      setCancelling(false);
    }
  };

  const handleRequestReturn = async (e) => {
    e.preventDefault();
    try {
      setSubmittingReturn(true);
      const res = await ordersAPI.requestReturn(order.id, {
        reason: returnReason,
        comments: returnComments
      });
      if (res.data.success) {
        showToast('Return request submitted! Our team will review shortly.', 'success');
        setOrder(res.data.data);
        setShowReturnModal(false);
      }
    } catch (err) {
      showToast(err.message || 'Could not submit return request', 'error');
    } finally {
      setSubmittingReturn(false);
    }
  };

  if (loading) {
    return <Loader text="Loading order details..." />;
  }

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Order not found</h2>
        <Link to="/orders" className="mt-4 inline-block text-indigo-600 font-bold">
          ← Back to orders
        </Link>
      </div>
    );
  }

  const shippingAddr = typeof order.shipping_address_snapshot === 'string'
    ? JSON.parse(order.shipping_address_snapshot || '{}')
    : (order.shipping_address_snapshot || {});

  // Timeline step active logic
  const statuses = ['Pending', 'Confirmed', 'Shipped', 'Delivered'];
  const currentIndex = statuses.indexOf(order.order_status);
  const isCancelled = order.order_status === 'Cancelled';
  const isDelivered = order.order_status === 'Delivered';
  const hasReturnRequest = order.return_status && order.return_status !== 'None';

  const handleDownloadInvoice = async () => {
    try {
      setDownloadingInvoice(true);
      showToast('Generating official tax invoice PDF...', 'info');
      await downloadInvoiceFile(order.id, order.order_number);
      showToast('Tax invoice PDF downloaded successfully!', 'success');
    } catch (err) {
      showToast('Failed to download invoice. Please try again.', 'error');
    } finally {
      setDownloadingInvoice(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
        <div>
          <Link to="/orders" className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1 mb-2">
            <ChevronLeft className="w-4 h-4" /> Back to My Orders
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Order #{order.order_number}
            </h1>
            <OrderStatusBadge status={order.order_status} />
            {hasReturnRequest && (
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                order.return_status === 'Approved'
                  ? 'bg-emerald-100 text-emerald-800'
                  : order.return_status === 'Rejected'
                  ? 'bg-rose-100 text-rose-800'
                  : 'bg-amber-100 text-amber-800 animate-pulse'
              }`}>
                Return: {order.return_status}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Placed on {new Date(order.createdAt).toLocaleString()}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowInvoiceModal(true)}
            className="px-4 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs rounded-xl shadow-2xs flex items-center gap-2 cursor-pointer transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>View & Print Invoice</span>
          </button>

          <button
            onClick={handleDownloadInvoice}
            disabled={downloadingInvoice}
            className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-2 cursor-pointer transition-all"
          >
            <Download className={`w-4 h-4 ${downloadingInvoice ? 'animate-bounce' : ''}`} />
            <span>{downloadingInvoice ? 'Generating PDF...' : 'Tax Invoice PDF'}</span>
          </button>

          {/* Request Return Button */}
          {isDelivered && !hasReturnRequest && (
            <button
              onClick={() => setShowReturnModal(true)}
              className="px-4 py-2.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 font-bold text-xs rounded-xl shadow-2xs flex items-center gap-2 cursor-pointer transition-all"
            >
              <RotateCcw className="w-4 h-4 text-amber-600" />
              <span>Request Return / Refund</span>
            </button>
          )}

          {!isCancelled && !isDelivered && (
            <button
              disabled={cancelling}
              onClick={handleCancelOrder}
              className="px-4 py-2.5 border border-rose-200 hover:bg-rose-50 text-rose-600 font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              {cancelling ? 'Cancelling...' : 'Cancel Order'}
            </button>
          )}
        </div>
      </div>

      {/* Return & Refund Status Alert */}
      {hasReturnRequest && (
        <div className={`p-5 rounded-3xl border flex items-start gap-4 ${
          order.return_status === 'Approved'
            ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
            : order.return_status === 'Rejected'
            ? 'bg-rose-50/80 border-rose-200 text-rose-900'
            : 'bg-amber-50/80 border-amber-200 text-amber-900'
        }`}>
          <RotateCcw className="w-6 h-6 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <h4 className="font-extrabold text-sm">
              Return Request Status: {order.return_status}
            </h4>
            <p className="opacity-90">
              {order.return_status === 'Approved'
                ? 'Your return has been approved! The order has been refunded and payment returned to original method.'
                : order.return_status === 'Rejected'
                ? 'Your return request was not approved by administration.'
                : 'Your return request has been submitted and is currently under review by our operations team.'}
            </p>
            {order.return_reason && (
              <p className="font-mono text-[11px] pt-1">
                Reason: <strong>{order.return_reason}</strong>
              </p>
            )}
          </div>
        </div>
      )}

      {/* Interactive Status Timeline */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
        <h3 className="text-sm font-extrabold text-slate-800">Order Journey & Tracking</h3>

        {isCancelled ? (
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-3 text-rose-700">
            <XCircle className="w-6 h-6 shrink-0" />
            <div>
              <p className="text-xs font-bold">This order was cancelled</p>
              <p className="text-[11px] text-rose-600">The items have been restocked. Any processed amount will be refunded within 3-5 business days.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 pt-4 relative">
            <div className="absolute top-1/2 left-6 right-6 h-1 bg-slate-100 -z-0"></div>
            {statuses.map((st, idx) => {
              const isCompleted = currentIndex >= idx;
              const isCurrent = currentIndex === idx;

              return (
                <div key={st} className="flex flex-col items-center text-center gap-2 relative z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      isCompleted
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-white border-2 border-slate-200 text-slate-400'
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                  </div>
                  <div>
                    <p className={`text-xs font-bold ${isCurrent ? 'text-indigo-600' : isCompleted ? 'text-slate-800' : 'text-slate-400'}`}>
                      {st}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Details Grid: Address + Payment & Order Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Shipping Address */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase mb-2">
            <MapPin className="w-4 h-4" />
            <span>Shipping Address</span>
          </div>
          <p className="text-sm font-bold text-slate-800">{shippingAddr.full_name || order.user?.name}</p>
          <p className="text-xs text-slate-600">{shippingAddr.street}</p>
          <p className="text-xs text-slate-600">{shippingAddr.city}, {shippingAddr.state} - {shippingAddr.pincode}</p>
          <p className="text-xs text-slate-500 pt-1">Phone: {shippingAddr.phone || order.user?.phone}</p>
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase mb-2">
            <CreditCard className="w-4 h-4" />
            <span>Payment Summary</span>
          </div>
          <p className="text-xs text-slate-600">
            Method: <strong className="text-slate-800 uppercase">{order.payment_method}</strong>
          </p>
          <p className="text-xs text-slate-600">
            Payment Status: <strong className={order.payment_status === 'Paid' ? 'text-emerald-600' : 'text-amber-600'}>{order.payment_status}</strong>
          </p>
          {order.razorpay_payment_id && (
            <p className="text-xs text-slate-600 font-mono">
              Txn ID: {order.razorpay_payment_id}
            </p>
          )}
        </div>

      </div>

      {/* Items Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-6 space-y-4">
        <h3 className="text-sm font-extrabold text-slate-800">Purchased Items ({order.items?.length || 0})</h3>

        <div className="divide-y divide-slate-100">
          {order.items?.map((item) => (
            <div key={item.id} className="py-4 flex items-center gap-4">
              <img
                src={item.product_image_snapshot || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100'}
                alt=""
                className="w-16 h-16 rounded-2xl object-cover bg-slate-50 border border-slate-100 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">
                  {item.product_name_snapshot}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Unit Price: {formatPrice(item.price)} × {item.quantity}
                </p>
              </div>
              <div className="text-right">
                <span className="text-sm font-extrabold text-slate-900">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600 max-w-xs ml-auto">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span className="font-bold text-slate-800">{formatPrice(order.total_amount)}</span>
          </div>
          {Number(order.discount_amount) > 0 && (
            <div className="flex justify-between text-emerald-600 font-bold">
              <span>Discount ({order.coupon_code || 'COUPON'}):</span>
              <span>-{formatPrice(order.discount_amount)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Delivery:</span>
            <span className="font-bold text-slate-800">
              {Number(order.shipping_charge) === 0 ? 'FREE' : formatPrice(order.shipping_charge)}
            </span>
          </div>
          <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-100">
            <span>Grand Total:</span>
            <span className="text-indigo-600 font-black">{formatPrice(order.final_amount)}</span>
          </div>
        </div>
      </div>

      {/* On-Screen Invoice Preview & Print Modal */}
      <InvoicePreviewModal
        isOpen={showInvoiceModal}
        onClose={() => setShowInvoiceModal(false)}
        order={order}
      />

      {/* Return & Refund Request Modal */}
      {showReturnModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-800">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Request Return / Refund</h3>
                  <p className="text-xs text-slate-500">Order #{order.order_number}</p>
                </div>
              </div>
              <button
                onClick={() => setShowReturnModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleRequestReturn} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Return Reason
                </label>
                <select
                  value={returnReason}
                  onChange={(e) => setReturnReason(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-hidden bg-slate-50"
                >
                  <option value="Damaged / Defective item">Damaged or Defective item</option>
                  <option value="Wrong item / size delivered">Wrong item or size delivered</option>
                  <option value="Item not as described">Item differs from website description</option>
                  <option value="Quality not as expected">Product quality not as expected</option>
                  <option value="Arrived too late">Arrived too late for needed occasion</option>
                  <option value="Accidental order / Changed mind">Accidental order / Changed mind</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Additional Details / Notes
                </label>
                <textarea
                  rows="3"
                  value={returnComments}
                  onChange={(e) => setReturnComments(e.target.value)}
                  placeholder="Please describe the issue in detail to expedite approval..."
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-hidden bg-slate-50 placeholder:text-slate-400"
                  required
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed">
                💡 <strong>Return Policy:</strong> Once approved, the order items will be restocked and your refund will be processed back to your original payment method within 24-48 hours.
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReturnModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submittingReturn}
                  className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-md shadow-amber-600/20 flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{submittingReturn ? 'Submitting...' : 'Submit Return Request'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
