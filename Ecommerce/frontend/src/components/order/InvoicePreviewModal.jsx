import React, { useState } from 'react';
import {
  X,
  Printer,
  Download,
  CheckCircle2,
  Building2,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  Package,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { formatPrice } from '../../utils/currency';
import { downloadInvoiceFile } from '../../services/api';
import { useToast } from '../../context/ToastContext';

export const InvoicePreviewModal = ({ isOpen, onClose, order }) => {
  const { showToast } = useToast();
  const [downloading, setDownloading] = useState(false);

  if (!isOpen || !order) return null;

  const orderNum = order.order_number || order.id || 'ORDER';
  const orderDate = order.createdAt
    ? new Date(order.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
    : new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

  const address = typeof order.shipping_address_snapshot === 'string'
    ? JSON.parse(order.shipping_address_snapshot || '{}')
    : (order.shipping_address_snapshot || {});

  const customerName = address.full_name || order.user?.name || 'Valued Customer';
  const customerStreet = address.street || 'Standard Delivery Address';
  const customerCity = address.city || address.state ? `${address.city || ''}, ${address.state || ''} ${address.pincode ? `- ${address.pincode}` : ''}` : 'India';
  const customerPhone = address.phone || order.user?.phone || 'N/A';
  const customerEmail = order.user?.email || 'customer@example.com';

  const subtotal = Number(order.total_amount || order.final_amount || 0);
  const discount = Number(order.discount_amount || 0);
  const shipping = Number(order.shipping_charge || 0);
  const grandTotal = Number(order.final_amount || order.total_amount || 0);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    try {
      setDownloading(true);
      showToast('Generating official tax invoice PDF...', 'info');
      await downloadInvoiceFile(order.id, order.order_number);
      showToast('Tax invoice PDF downloaded successfully!', 'success');
    } catch (err) {
      showToast('Failed to download invoice. Please try again.', 'error');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white print:static">
      
      {/* Modal Container */}
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-3xl overflow-hidden flex flex-col max-h-[92vh] animate-scale-up print:max-h-none print:shadow-none print:border-none print:w-full">
        
        {/* Modal Controls Bar (Hidden during Print) */}
        <div className="bg-slate-900 text-white p-4 px-6 flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h3 className="font-extrabold text-sm text-white">GST Tax Invoice Preview • #{orderNum}</h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-indigo-400" />
              <span>Print Invoice</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
              <span>{downloading ? 'Generating...' : 'Download PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Invoice Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-800 print:overflow-visible print:p-0">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-base shadow-sm">
                  S
                </div>
                <h1 className="text-2xl font-black text-indigo-700 tracking-tight">ShopEase</h1>
              </div>
              <p className="text-xs text-slate-500 mt-1">Premium E-Commerce Marketplace Platform</p>
              <p className="text-[11px] text-slate-400">GSTIN: 27AABCS1429B1Z8 | support@shopease.com</p>
              <p className="text-[11px] text-slate-400">+91 (800) 123-4567 | www.shopease.com</p>
            </div>

            <div className="text-left sm:text-right">
              <span className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black rounded-full uppercase tracking-wider mb-2">
                ORIGINAL TAX INVOICE
              </span>
              <p className="text-sm font-black text-slate-900">Invoice: INV-{orderNum}</p>
              <p className="text-xs text-slate-500">Date: {orderDate}</p>
              <p className="text-xs text-slate-500">
                Payment: <strong className="text-slate-800 uppercase">{order.payment_method || 'ONLINE'}</strong> ({order.payment_status || 'PAID'})
              </p>
            </div>
          </div>

          {/* Billed & Shipping Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 block">
                Billed & Shipped To:
              </span>
              <p className="font-extrabold text-slate-900 text-sm">{customerName}</p>
              <p className="text-slate-600">{customerStreet}</p>
              <p className="text-slate-600">{customerCity}</p>
              <p className="text-slate-500">Phone: {customerPhone}</p>
              <p className="text-slate-500">Email: {customerEmail}</p>
            </div>

            <div className="space-y-1 sm:text-right">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 block">
                Order & Dispatch Details:
              </span>
              <p className="font-bold text-slate-800">Order ID: #{orderNum}</p>
              <p className="text-slate-600">Order Status: <span className="font-bold text-slate-900">{order.order_status || 'Confirmed'}</span></p>
              <p className="text-slate-600">Transaction Ref: <span className="font-mono text-slate-800">{order.razorpay_payment_id || `PAY-${orderNum}`}</span></p>
              <p className="text-slate-500">Place of Supply: India (State Code: 27)</p>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-extrabold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 w-10">#</th>
                  <th className="py-3 px-4">Item Description</th>
                  <th className="py-3 px-4 text-center">Qty</th>
                  <th className="py-3 px-4 text-right">Unit Price</th>
                  <th className="py-3 px-4 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {order.items && order.items.length > 0 ? (
                  order.items.map((item, idx) => {
                    const price = Number(item.price || 0);
                    const qty = Number(item.quantity || 1);
                    const total = price * qty;
                    return (
                      <tr key={idx} className="hover:bg-slate-50/60">
                        <td className="py-3 px-4 text-slate-400 font-bold">{idx + 1}</td>
                        <td className="py-3 px-4">
                          <p className="font-bold text-slate-900">{item.product_name_snapshot || item.product?.name || 'Commercial Product Item'}</p>
                          <span className="text-[10px] text-slate-400">HSN: 8517 | GST Included</span>
                        </td>
                        <td className="py-3 px-4 text-center font-bold text-slate-700">{qty}</td>
                        <td className="py-3 px-4 text-right text-slate-700">{formatPrice(price)}</td>
                        <td className="py-3 px-4 text-right font-black text-slate-900">{formatPrice(total)}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5} className="py-4 px-4 text-center text-slate-400 italic">
                      Standard Package Items
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Totals Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pt-2">
            <div className="text-xs text-slate-500 space-y-1 max-w-sm">
              <div className="flex items-center gap-1 text-emerald-700 font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Authentic Products • Verified Purchase</span>
              </div>
              <p className="text-[11px] text-slate-400">
                This is an authenticated computer-generated GST tax invoice for ShopEase online purchase. Requires no physical signature.
              </p>
            </div>

            <div className="w-full sm:w-72 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal:</span>
                <span className="font-bold text-slate-900">{formatPrice(subtotal)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Coupon & ShopPoints:</span>
                  <span>-{formatPrice(discount)}</span>
                </div>
              )}

              <div className="flex justify-between text-slate-600">
                <span>Shipping & Handling:</span>
                <span className="font-bold text-slate-900">
                  {shipping === 0 ? <strong className="text-emerald-600">FREE</strong> : formatPrice(shipping)}
                </span>
              </div>

              <div className="pt-2 border-t-2 border-slate-200 flex justify-between items-center text-sm font-black text-indigo-700 bg-indigo-50/50 p-2.5 rounded-xl">
                <span>Grand Total:</span>
                <span className="text-base">{formatPrice(grandTotal)}</span>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t border-slate-100 text-center text-[10px] text-slate-400">
            Thank you for shopping with ShopEase! For return inquiries, email support@shopease.com within 7 days of delivery.
          </div>

        </div>

      </div>
    </div>
  );
};
