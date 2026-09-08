import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  MapPin,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  Plus,
  ShieldCheck,
  Truck,
  ArrowRight,
  ArrowLeft,
  Smartphone,
  Banknote,
  DollarSign,
  Sparkles,
  Loader2,
  Coins
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { authAPI, ordersAPI, paymentAPI } from '../services/api';
import { formatPrice } from '../utils/currency';
import { PaymentModal } from '../components/checkout/PaymentModal';

export const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cartItems, subtotal, discountAmount, shippingCharge, finalAmount, coupon, clearCart } = useCart();
  const { showToast } = useToast();

  const [currentStep, setCurrentStep] = useState(1); // 1: Address, 2: Review, 3: Payment
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Loyalty Points State: 1 point = ₹1
  const [redeemPoints, setRedeemPoints] = useState(false);
  const userPoints = user?.points_balance || 0;
  const pointsDiscountValue = redeemPoints ? Math.min(subtotal - discountAmount, userPoints) : 0;

  // Address form
  const [addressForm, setAddressForm] = useState({
    full_name: user ? user.name : '',
    phone: user ? user.phone || '' : '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    is_default: true
  });

  // Payment method: 'ONLINE' (Gateway), 'COD' (Cash on Delivery)
  const [paymentMethod, setPaymentMethod] = useState('ONLINE');

  // Load addresses for logged in user
  useEffect(() => {
    if (user) {
      authAPI.getAddresses()
        .then((res) => {
          if (res.data.success && res.data.data.length > 0) {
            setAddresses(res.data.data);
            const defaultAddr = res.data.data.find((a) => a.is_default) || res.data.data[0];
            setSelectedAddressId(defaultAddr.id);
          } else {
            setShowNewAddressForm(true);
          }
        })
        .catch(() => setShowNewAddressForm(true));
    } else {
      setShowNewAddressForm(true);
    }
  }, [user]);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Your bag is empty</h2>
        <Link to="/products" className="mt-4 inline-block text-indigo-600 font-bold">
          ← Return to shopping
        </Link>
      </div>
    );
  }

  const handleSaveNewAddress = async (e) => {
    e.preventDefault();
    if (!addressForm.street || !addressForm.city || !addressForm.state || !addressForm.pincode) {
      showToast('Please fill all required address fields', 'warning');
      return;
    }

    if (user) {
      try {
        setLoading(true);
        const res = await authAPI.addAddress(addressForm);
        if (res.data.success) {
          setAddresses((prev) => [res.data.data, ...prev]);
          setSelectedAddressId(res.data.data.id);
          setShowNewAddressForm(false);
          showToast('Address saved', 'success');
        }
      } catch (err) {
        showToast(err.message || 'Failed to save address', 'error');
      } finally {
        setLoading(false);
      }
    } else {
      // Guest address
      setSelectedAddressId('guest');
      setShowNewAddressForm(false);
    }
  };

  const getSelectedAddressData = () => {
    if (selectedAddressId === 'guest' || !user) {
      return addressForm;
    }
    return addresses.find((a) => a.id === selectedAddressId) || addressForm;
  };

  const calculatedTotal = Math.max(0, finalAmount - pointsDiscountValue);

  const handlePlaceOrder = async () => {
    const selectedAddress = getSelectedAddressData();
    if (!selectedAddress || !selectedAddress.street) {
      showToast('Please select or specify a shipping address', 'warning');
      setCurrentStep(1);
      return;
    }

    const itemsPayload = cartItems.map((i) => ({
      product_id: i.product_id || i.product?.id,
      variant_id: i.variant_id || i.variant?.id || null,
      quantity: i.quantity
    }));

    if (paymentMethod === 'COD') {
      setIsProcessingPayment(true);
      await finalizeOrder(itemsPayload, selectedAddress, 'COD', null);
      return;
    }

    // Open ShopEase Interactive Payment Gateway Modal
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = async (paymentResult) => {
    setShowPaymentModal(false);
    setIsProcessingPayment(true);

    const selectedAddress = getSelectedAddressData();
    const itemsPayload = cartItems.map((i) => ({
      product_id: i.product_id || i.product?.id,
      variant_id: i.variant_id || i.variant?.id || null,
      quantity: i.quantity
    }));

    await finalizeOrder(
      itemsPayload,
      selectedAddress,
      paymentResult.payment_method || 'ONLINE',
      paymentResult.payment_id
    );
  };

  const finalizeOrder = async (itemsPayload, address, pMethod, paymentId) => {
    try {
      const payload = {
        items: itemsPayload,
        shipping_address: address,
        payment_method: pMethod,
        coupon_code: coupon ? coupon.code : null,
        payment_id: paymentId,
        redeem_points: redeemPoints ? userPoints : 0
      };

      const res = await ordersAPI.create(payload);
      if (res.data.success) {
        clearCart();
        showToast(`Order confirmed! You earned ${res.data.earned_points || 0} ShopPoints.`, 'success');
        navigate(`/order-confirmation/${res.data.data.order_number}`, { state: { order: res.data.data } });
      }
    } catch (err) {
      showToast(err.message || 'Order creation failed', 'error');
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Checkout Step Tracker */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-slate-200 -z-0"></div>
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-indigo-600 -z-0 transition-all duration-300"
            style={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
          ></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center gap-2 bg-slate-50 px-2 z-10">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-sm ${
              currentStep >= 1 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
            }`}>
              1
            </div>
            <span className="text-xs font-bold text-slate-800">Shipping</span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-2 bg-slate-50 px-2 z-10">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-sm ${
              currentStep >= 2 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
            }`}>
              2
            </div>
            <span className="text-xs font-bold text-slate-800">Review</span>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-2 bg-slate-50 px-2 z-10">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-sm ${
              currentStep === 3 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
            }`}>
              3
            </div>
            <span className="text-xs font-bold text-slate-800">Payment</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Step Content Container */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* STEP 1: Shipping Address */}
          {currentStep === 1 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6 animate-fade-in">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-lg font-extrabold text-slate-900">Select Shipping Destination</h2>
                </div>
                {user && !showNewAddressForm && (
                  <button
                    onClick={() => setShowNewAddressForm(true)}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" /> Add Address
                  </button>
                )}
              </div>

              {/* Existing Address List */}
              {user && !showNewAddressForm && addresses.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      onClick={() => setSelectedAddressId(addr.id)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedAddressId === addr.id
                          ? 'border-indigo-600 bg-indigo-50/40 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">{addr.full_name}</span>
                        {addr.is_default && (
                          <span className="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-2">{addr.street}</p>
                      <p className="text-xs text-slate-600">{addr.city}, {addr.state} - {addr.pincode}</p>
                      <p className="text-[11px] text-slate-400 font-semibold mt-2">Phone: {addr.phone}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* New Address Form */}
              {(showNewAddressForm || !user || addresses.length === 0) && (
                <form onSubmit={handleSaveNewAddress} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={addressForm.full_name}
                        onChange={(e) => setAddressForm({ ...addressForm, full_name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone *</label>
                      <input
                        type="tel"
                        required
                        value={addressForm.phone}
                        onChange={(e) => setAddressForm({ ...addressForm, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Street Address / House No. *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Flat 302, Green Park Enclave"
                      value={addressForm.street}
                      onChange={(e) => setAddressForm({ ...addressForm, street: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">City *</label>
                      <input
                        type="text"
                        required
                        value={addressForm.city}
                        onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">State *</label>
                      <input
                        type="text"
                        required
                        value={addressForm.state}
                        onChange={(e) => setAddressForm({ ...addressForm, state: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">PIN Code *</label>
                      <input
                        type="text"
                        required
                        value={addressForm.pincode}
                        onChange={(e) => setAddressForm({ ...addressForm, pincode: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                      />
                    </div>
                  </div>

                  {user && addresses.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setShowNewAddressForm(false)}
                      className="text-xs font-bold text-slate-500 hover:underline mr-4"
                    >
                      Cancel
                    </button>
                  )}

                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
                  >
                    Confirm Address
                  </button>
                </form>
              )}

              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => {
                    const addr = getSelectedAddressData();
                    if (!addr || !addr.street) {
                      showToast('Please specify a delivery address', 'warning');
                      return;
                    }
                    setCurrentStep(2);
                  }}
                  className="py-3 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-2xl transition-all shadow-md shadow-indigo-600/25 flex items-center gap-2"
                >
                  <span>Continue to Review</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Order Review & Items Recap */}
          {currentStep === 2 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6 animate-fade-in">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-lg font-extrabold text-slate-900">Review Items & Delivery Details</h2>
                </div>
              </div>

              {/* Destination Recap */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold uppercase text-indigo-600">Delivering to</span>
                  <p className="text-xs font-bold text-slate-900 mt-0.5">{getSelectedAddressData().full_name}</p>
                  <p className="text-xs text-slate-600">{getSelectedAddressData().street}, {getSelectedAddressData().city}</p>
                  <p className="text-xs text-slate-600">{getSelectedAddressData().state} - {getSelectedAddressData().pincode}</p>
                </div>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-xs font-bold text-indigo-600 hover:underline"
                >
                  Change
                </button>
              </div>

              {/* Items List */}
              <div className="divide-y divide-slate-100">
                {cartItems.map((item) => {
                  const p = item.product || {};
                  const unitPrice = p.discount_price || p.price || 0;
                  return (
                    <div key={item.id || item.product_id} className="py-3 flex items-center gap-4">
                      <img
                        src={p.image_url}
                        alt=""
                        className="w-14 h-14 object-cover rounded-xl bg-slate-50 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-800 truncate">{p.name}</h4>
                        <p className="text-[11px] text-slate-400">Qty: {item.quantity} × {formatPrice(unitPrice)}</p>
                      </div>
                      <span className="text-xs font-black text-slate-900">
                        {formatPrice(unitPrice * item.quantity)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="py-3 px-6 text-slate-600 font-bold text-xs flex items-center gap-1.5 hover:text-slate-900"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Shipping
                </button>

                <button
                  onClick={() => setCurrentStep(3)}
                  className="py-3 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-2xl transition-all shadow-md shadow-indigo-600/25 flex items-center gap-2"
                >
                  <span>Proceed to Payment</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Payment Method & Points */}
          {currentStep === 3 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6 animate-fade-in">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-lg font-extrabold text-slate-900">Choose Payment Method</h2>
                </div>
              </div>

              {/* ShopPoints Redemption Banner */}
              {user && userPoints > 0 && (
                <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                      <Coins className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-amber-900">
                        You have <strong>{userPoints} ShopPoints</strong>
                      </p>
                      <p className="text-[11px] text-amber-700">
                        Redeem points for an instant {formatPrice(userPoints)} discount!
                      </p>
                    </div>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-xl border border-amber-300 font-bold text-xs text-amber-900 shadow-sm">
                    <input
                      type="checkbox"
                      checked={redeemPoints}
                      onChange={(e) => setRedeemPoints(e.target.checked)}
                      className="w-4 h-4 rounded text-amber-600"
                    />
                    <span>Redeem Now</span>
                  </label>
                </div>
              )}

              <div className="space-y-3">
                {/* Instant Online Payment Gateway (UPI, Cards, NetBanking, Wallets) */}
                <label
                  onClick={() => setPaymentMethod('ONLINE')}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'ONLINE'
                      ? 'border-indigo-600 bg-indigo-50/40 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'ONLINE'}
                      onChange={() => setPaymentMethod('ONLINE')}
                      className="accent-indigo-600 w-4 h-4"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        Online Payment Gateway (UPI / Cards / NetBanking / Wallets)
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                          Fast & Secure
                        </span>
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Instant payment via Google Pay, PhonePe, Paytm, QR Code, Cards, NetBanking & Wallets
                      </p>
                    </div>
                  </div>
                  <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />
                </label>

                {/* Cash on Delivery */}
                <label
                  onClick={() => setPaymentMethod('COD')}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'COD'
                      ? 'border-indigo-600 bg-indigo-50/40 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'COD'}
                      onChange={() => setPaymentMethod('COD')}
                      className="accent-indigo-600 w-4 h-4"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        Cash on Delivery (COD)
                        <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Doorstep Pay
                        </span>
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Pay with cash or UPI when your order arrives at your address</p>
                    </div>
                  </div>
                  <Banknote className="w-5 h-5 text-emerald-600 shrink-0" />
                </label>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="py-3 px-6 text-slate-600 font-bold text-xs flex items-center gap-1.5 hover:text-slate-900 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Review
                </button>

                <button
                  disabled={isProcessingPayment}
                  onClick={handlePlaceOrder}
                  className="py-4 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm rounded-2xl transition-all shadow-lg shadow-indigo-600/25 flex items-center gap-2 cursor-pointer"
                >
                  {isProcessingPayment ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing Order...</span>
                    </>
                  ) : (
                    <>
                      <span>
                        {paymentMethod === 'COD' ? 'Place Cash on Delivery Order' : 'Proceed to Secure Payment'} ({formatPrice(calculatedTotal)})
                      </span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Right Sticky Order Summary */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4 sticky top-28">
          <h3 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100">
            Order Total
          </h3>

          <div className="space-y-2.5 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Items Total ({cartItems.length})</span>
              <span className="font-bold text-slate-800">{formatPrice(subtotal)}</span>
            </div>

            {discountAmount > 0 && (
              <div className="flex justify-between text-emerald-600 font-bold">
                <span>Coupon ({coupon?.code})</span>
                <span>-{formatPrice(discountAmount)}</span>
              </div>
            )}

            {pointsDiscountValue > 0 && (
              <div className="flex justify-between text-amber-600 font-bold">
                <span>ShopPoints Reward</span>
                <span>-{formatPrice(pointsDiscountValue)}</span>
              </div>
            )}

            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="font-bold text-slate-800">
                {shippingCharge === 0 ? <strong className="text-emerald-600">FREE</strong> : formatPrice(shippingCharge)}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-sm font-extrabold text-slate-900">Total Payable</span>
            <span className="text-2xl font-black text-indigo-600">{formatPrice(calculatedTotal)}</span>
          </div>

          {/* Points Earned Preview */}
          <div className="p-3 bg-indigo-50/70 rounded-xl text-[11px] text-indigo-900 space-y-1">
            <p className="font-bold flex items-center gap-1">
              <Coins className="w-3.5 h-3.5 text-amber-500" /> You will earn{' '}
              <strong className="text-indigo-700">{Math.floor(calculatedTotal)} ShopPoints</strong> on this order!
            </p>
            <p className="text-indigo-600">Official GST Tax Invoice will be generated automatically upon placement.</p>
          </div>
        </div>

      </div>

      {/* ShopEase Payment Gateway Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={calculatedTotal}
        customerInfo={{
          name: getSelectedAddressData().full_name,
          phone: getSelectedAddressData().phone
        }}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
};
