import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import {
  CheckCircle2,
  Download,
  Package,
  ArrowRight,
  Truck,
  Sparkles,
  Copy,
  FileText,
  Printer,
  Coins,
  MapPin,
  Calendar,
  CreditCard,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/currency';
import { downloadInvoiceFile, ordersAPI } from '../services/api';
import { InvoicePreviewModal } from '../components/order/InvoicePreviewModal';

export const OrderConfirmation = () => {
  const { orderId } = useParams();
  const location = useLocation();
  const { showToast } = useToast();
  
  const [order, setOrder] = useState(location.state?.order || null);
  const [loadingOrder, setLoadingOrder] = useState(!location.state?.order);
  const [downloading, setDownloading] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  useEffect(() => {
    // Launch celebratory confetti effect
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Fetch full order if page is refreshed or accessed directly
  useEffect(() => {
    if (!order && orderId) {
      setLoadingOrder(true);
      ordersAPI.getById(orderId)
        .then((res) => {
          if (res.data.success) {
            setOrder(res.data.data);
          }
        })
        .catch((err) => {
          console.error('Failed to load order details:', err);
        })
        .finally(() => {
          setLoadingOrder(false);
        });
    }
  }, [order, orderId]);

  const handleDownloadInvoice = async () => {
    try {
      setDownloading(true);
      showToast('Generating official GST tax invoice PDF...', 'info');
      await downloadInvoiceFile(order?.id || orderId, order?.order_number || orderId);
      showToast('Tax invoice PDF downloaded successfully!', 'success');
    } catch (err) {
      showToast(err.message || 'Failed to download invoice. Please try again.', 'error');
    } finally {
      setDownloading(false);
    }
  };

  const copyOrderNumber = () => {
    const num = order?.order_number || orderId;
    navigator.clipboard.writeText(num);
    showToast(`Order #${num} copied to clipboard!`, 'success');
  };

  const shippingAddr = order
    ? (typeof order.shipping_address_snapshot === 'string'
        ? JSON.parse(order.shipping_address_snapshot || '{}')
        : (order.shipping_address_snapshot || {}))
    : {};

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center space-y-8 animate-slide-up">
      
      {/* Success Badge */}
      <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-extrabold px-3 py-1 rounded-full border border-emerald-200/60">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Payment Authorized & Order Confirmed</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Thank you for your order!
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          We've received your order and have initiated warehouse packaging. An authenticated GST tax invoice and courier tracking link have been generated.
        </p>
      </div>

      {/* Main Order & Invoice Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm text-left space-y-6">
        
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Order Reference</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-lg font-black text-slate-900">#{order?.order_number || orderId}</span>
              <button
                onClick={copyOrderNumber}
                className="text-indigo-600 hover:text-indigo-800 p-1 cursor-pointer transition-colors"
                title="Copy order number"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 bg-indigo-50 px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-700">
              <Truck className="w-4 h-4" />
              <span>Standard Dispatch (3-5 Days)</span>
            </div>
            {order && (
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/70 text-xs font-black px-3 py-1.5 rounded-xl">
                {order.payment_status || 'PAID'}
              </span>
            )}
          </div>
        </div>

        {/* Order Details Grid */}
        {loadingOrder ? (
          <div className="py-8 text-center text-slate-400 text-xs flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
            <span>Loading verified order details...</span>
          </div>
        ) : order ? (
          <div className="space-y-6">
            
            {/* Meta summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Payment Method</span>
                <p className="font-extrabold text-slate-800 uppercase mt-0.5">{order.payment_method}</p>
                <p className="text-[11px] text-slate-400 font-mono truncate">{order.razorpay_payment_id || `PAY-${order.order_number}`}</p>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Shipping Destination</span>
                <p className="font-extrabold text-slate-800 mt-0.5">{shippingAddr.full_name || 'Customer'}</p>
                <p className="text-[11px] text-slate-500 truncate">{shippingAddr.city ? `${shippingAddr.city}, ${shippingAddr.state}` : 'India'}</p>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Grand Total</span>
                <p className="font-black text-indigo-600 text-base mt-0.5">{formatPrice(order.final_amount)}</p>
                {Number(order.discount_amount) > 0 && (
                  <span className="text-[10px] text-emerald-600 font-bold">
                    Saved {formatPrice(order.discount_amount)}
                  </span>
                )}
              </div>
            </div>

            {/* Items previews */}
            {order.items && order.items.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-extrabold text-slate-700 block">Ordered Items ({order.items.length})</span>
                <div className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="p-3.5 flex items-center justify-between gap-3 bg-white hover:bg-slate-50/50">
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={item.product_image_snapshot || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100'}
                          alt=""
                          className="w-12 h-12 rounded-xl object-cover border border-slate-100 bg-slate-50 shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-800 truncate">
                            {item.product_name_snapshot || item.product?.name || 'Product Item'}
                          </p>
                          <p className="text-[11px] text-slate-400">Qty: {item.quantity} × {formatPrice(item.price)}</p>
                        </div>
                      </div>
                      <span className="text-xs font-black text-slate-900 shrink-0">
                        {formatPrice(Number(item.price || 0) * Number(item.quantity || 1))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ShopPoints Reward Banner */}
            <div className="p-3.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                  <Coins className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-amber-900">
                    +{Math.floor(order.final_amount)} ShopPoints Awarded!
                  </p>
                  <p className="text-[11px] text-amber-700">Points credited to your account balance for future checkout discounts.</p>
                </div>
              </div>
            </div>

          </div>
        ) : null}

        {/* Invoice & Order Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownloadInvoice}
            disabled={downloading}
            className="flex-1 py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl transition-all shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
            <span>{downloading ? 'Generating Official Invoice...' : 'Download Tax Invoice (PDF)'}</span>
          </button>

          <button
            onClick={() => setShowInvoiceModal(true)}
            disabled={!order}
            className="flex-1 py-3.5 px-4 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>View & Print Tax Invoice</span>
          </button>

          <Link
            to={`/orders/${order?.id || orderId}`}
            className="sm:w-auto py-3.5 px-5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Package className="w-4 h-4 text-slate-500" />
            <span>Track Order</span>
          </Link>
        </div>

      </div>

      <div className="pt-2">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <span>Continue Shopping</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* On-Screen Invoice Preview & Print Modal */}
      {order && (
        <InvoicePreviewModal
          isOpen={showInvoiceModal}
          onClose={() => setShowInvoiceModal(false)}
          order={order}
        />
      )}

    </div>
  );
};
