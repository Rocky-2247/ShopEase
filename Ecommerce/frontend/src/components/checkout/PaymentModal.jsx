import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  Smartphone,
  CreditCard,
  Building2,
  Wallet,
  Sparkles,
  QrCode,
  Lock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  RefreshCw,
  Clock,
  KeyRound
} from 'lucide-react';
import { formatPrice } from '../../utils/currency';

export const PaymentModal = ({
  isOpen,
  onClose,
  amount,
  onPaymentSuccess,
  customerInfo = {}
}) => {
  const [activeTab, setActiveTab] = useState('upi'); // 'upi', 'card', 'netbanking', 'wallet'
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStep, setProcessStep] = useState('input'); // 'input', 'otp', 'verifying', 'success'
  const [errorMsg, setErrorMsg] = useState('');

  // UPI State
  const [upiId, setUpiId] = useState('');
  const [selectedUpiApp, setSelectedUpiApp] = useState('gpay');
  const [qrCountdown, setQrCountdown] = useState(300); // 5 mins

  // Card State
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState(customerInfo.name || '');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [otpCode, setOtpCode] = useState('');

  // NetBanking State
  const [selectedBank, setSelectedBank] = useState('HDFC');

  // Wallet State
  const [selectedWallet, setSelectedWallet] = useState('paytm');

  // QR Timer
  useEffect(() => {
    let timer;
    if (isOpen && activeTab === 'upi') {
      timer = setInterval(() => {
        setQrCountdown((prev) => (prev > 0 ? prev - 1 : 300));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  const formatCardNumber = (val) => {
    const clean = val.replace(/\D/g, '').slice(0, 16);
    return clean.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  };

  const formatExpiry = (val) => {
    const clean = val.replace(/\D/g, '').slice(0, 4);
    if (clean.length >= 3) {
      return `${clean.slice(0, 2)}/${clean.slice(2)}`;
    }
    return clean;
  };

  const getCardBrand = (num) => {
    const clean = num.replace(/\s/g, '');
    if (clean.startsWith('4')) return 'VISA';
    if (clean.startsWith('5')) return 'Mastercard';
    if (clean.startsWith('6')) return 'RuPay';
    if (clean.startsWith('3')) return 'Amex';
    return 'Card';
  };

  const handleAuthorizePayment = (paymentMethodName, customId = null) => {
    setErrorMsg('');
    setIsProcessing(true);
    setProcessStep('verifying');

    setTimeout(() => {
      const generatedPaymentId = customId || `pay_auth_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      setProcessStep('success');

      setTimeout(() => {
        setIsProcessing(false);
        setProcessStep('input');
        onPaymentSuccess({
          payment_id: generatedPaymentId,
          payment_method: paymentMethodName,
          status: 'SUCCESS'
        });
      }, 1000);
    }, 1500);
  };

  const handleCardSubmit = (e) => {
    e.preventDefault();
    if (cardNumber.replace(/\s/g, '').length < 15) {
      setErrorMsg('Please enter a valid 16-digit card number');
      return;
    }
    if (!cardExpiry || cardExpiry.length < 5) {
      setErrorMsg('Please enter a valid expiry date (MM/YY)');
      return;
    }
    if (!cardCvv || cardCvv.length < 3) {
      setErrorMsg('Please enter a valid CVV');
      return;
    }
    // Proceed to 3DS OTP step
    setProcessStep('otp');
  };

  const handleOtpVerify = (e) => {
    e.preventDefault();
    if (!otpCode || otpCode.length < 4) {
      setErrorMsg('Please enter valid 6-digit OTP');
      return;
    }
    handleAuthorizePayment('CARD', `pay_card_${Date.now()}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-2xl overflow-hidden flex flex-col max-h-[92vh] animate-scale-up">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 px-6 flex items-center justify-between relative shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/30 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base tracking-tight text-white">ShopEase Secure Gateway</h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-extrabold px-2 py-0.5 rounded-full border border-emerald-400/30">
                  256-Bit SSL Encrypted
                </span>
              </div>
              <p className="text-xs text-slate-300">Authorized Payment Processing (INR / ₹)</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Amount Payable</span>
              <span className="text-xl font-black text-emerald-400">{formatPrice(amount)}</span>
            </div>
            <button
              onClick={onClose}
              disabled={isProcessing}
              className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Processing / Verification Screen */}
        {processStep === 'verifying' && (
          <div className="p-12 text-center space-y-4 my-auto">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto animate-pulse shadow-md">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
            <h4 className="text-lg font-extrabold text-slate-800">Authorizing Payment...</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Securely communicating with bank authentication servers. Please do not refresh or close this window.
            </p>
          </div>
        )}

        {/* Success Screen */}
        {processStep === 'success' && (
          <div className="p-12 text-center space-y-4 my-auto animate-scale-up">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-xl font-black text-slate-900">Payment Authorized!</h4>
            <p className="text-xs text-emerald-700 font-bold">
              Transaction reference created. Finalizing your order...
            </p>
          </div>
        )}

        {/* 3D-Secure Card OTP Step */}
        {processStep === 'otp' && (
          <div className="p-6 sm:p-8 space-y-6 my-auto">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-2">
                <KeyRound className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-slate-900">3D-Secure Bank Authentication</h4>
              <p className="text-xs text-slate-500">
                An authentication OTP has been dispatched to mobile ending with <strong>*4231</strong>
              </p>
            </div>

            <form onSubmit={handleOtpVerify} className="max-w-sm mx-auto space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 text-center">Enter 6-Digit OTP</label>
                <input
                  type="text"
                  maxLength={6}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  className="w-full text-center tracking-[0.5em] text-xl font-black py-3 bg-slate-50 border-2 border-indigo-200 rounded-2xl outline-none focus:border-indigo-600 focus:bg-white"
                  placeholder="••••••"
                  required
                />
                <div className="flex items-between justify-between text-[11px] mt-2 text-slate-500">
                  <span>Resend available</span>
                  <span className="text-indigo-600 font-bold">Standard 3DS Auth</span>
                </div>
              </div>

              {errorMsg && (
                <div className="p-2.5 bg-rose-50 text-rose-600 text-xs font-bold rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setProcessStep('input')}
                  className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-md shadow-indigo-600/25"
                >
                  Confirm & Pay {formatPrice(amount)}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Normal Input Method View */}
        {processStep === 'input' && (
          <div className="flex-1 overflow-y-auto flex flex-col md:flex-row">
            
            {/* Payment Method Selector Sidebar */}
            <div className="w-full md:w-56 bg-slate-50 p-3 border-r border-slate-100 flex md:flex-col gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => { setActiveTab('upi'); setErrorMsg(''); }}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl font-bold text-xs transition-all text-left ${
                  activeTab === 'upi'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Smartphone className="w-4 h-4 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="truncate">UPI / QR Code</p>
                  <span className={`text-[10px] block ${activeTab === 'upi' ? 'text-indigo-100' : 'text-slate-400'}`}>
                    Instant • Zero Fee
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('card'); setErrorMsg(''); }}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl font-bold text-xs transition-all text-left ${
                  activeTab === 'card'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <CreditCard className="w-4 h-4 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="truncate">Credit / Debit Card</p>
                  <span className={`text-[10px] block ${activeTab === 'card' ? 'text-indigo-100' : 'text-slate-400'}`}>
                    Visa, Master, RuPay
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('netbanking'); setErrorMsg(''); }}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl font-bold text-xs transition-all text-left ${
                  activeTab === 'netbanking'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Building2 className="w-4 h-4 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="truncate">Net Banking</p>
                  <span className={`text-[10px] block ${activeTab === 'netbanking' ? 'text-indigo-100' : 'text-slate-400'}`}>
                    All Major Banks
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('wallet'); setErrorMsg(''); }}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl font-bold text-xs transition-all text-left ${
                  activeTab === 'wallet'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Wallet className="w-4 h-4 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="truncate">Wallets</p>
                  <span className={`text-[10px] block ${activeTab === 'wallet' ? 'text-indigo-100' : 'text-slate-400'}`}>
                    Paytm, PhonePe
                  </span>
                </div>
              </button>
            </div>

            {/* Payment Details Body */}
            <div className="flex-1 p-6 space-y-6">
              
              {/* TAB 1: UPI */}
              {activeTab === 'upi' && (
                <div className="space-y-6 animate-fade-in">
                  
                  {/* Dynamic QR Box */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 p-5 bg-gradient-to-br from-indigo-50/70 to-slate-50 rounded-2xl border border-indigo-100">
                    <div className="p-3 bg-white rounded-2xl border border-indigo-200 shadow-sm relative group shrink-0">
                      <div className="w-32 h-32 bg-slate-900 rounded-xl p-2 flex flex-col items-center justify-between text-white relative">
                        <div className="flex justify-between w-full">
                          <div className="w-7 h-7 border-2 border-white rounded-md flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-sm"></div>
                          </div>
                          <div className="w-7 h-7 border-2 border-white rounded-md flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-sm"></div>
                          </div>
                        </div>
                        <QrCode className="w-10 h-10 text-indigo-400" />
                        <div className="flex justify-between w-full">
                          <div className="w-7 h-7 border-2 border-white rounded-md flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-sm"></div>
                          </div>
                          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold text-center block text-slate-500 mt-1.5">
                        Scan with any UPI App
                      </span>
                    </div>

                    <div className="space-y-2 text-center sm:text-left">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-indigo-100/80 text-indigo-700 rounded-full text-[10px] font-extrabold">
                        <Clock className="w-3 h-3" />
                        <span>QR Valid for: {Math.floor(qrCountdown / 60)}:{(qrCountdown % 60).toString().padStart(2, '0')}</span>
                      </div>
                      <h4 className="text-sm font-extrabold text-slate-900">Scan & Pay from Phone</h4>
                      <p className="text-xs text-slate-500">
                        Open Google Pay, PhonePe, Paytm, BHIM, or Cred to scan and authorize instantly.
                      </p>
                      <button
                        onClick={() => handleAuthorizePayment('UPI', `pay_upi_qr_${Date.now()}`)}
                        className="mt-2 text-xs font-black text-indigo-600 hover:text-indigo-800 flex items-center justify-center sm:justify-start gap-1 cursor-pointer"
                      >
                        <span>Authorize QR Payment</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* UPI VPA ID Input */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-700">Or Pay via UPI ID / VPA</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. yourname@upi or mobile@bank"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                      />
                      <button
                        onClick={() => {
                          const vpa = upiId.trim() || 'customer@upi';
                          handleAuthorizePayment('UPI', `pay_upi_${vpa.split('@')[0]}_${Date.now()}`);
                        }}
                        className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-md shadow-indigo-600/25 shrink-0 cursor-pointer"
                      >
                        Verify & Pay
                      </button>
                    </div>
                  </div>

                  {/* Popular UPI Apps shortcuts */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block mb-2">Supported Apps</span>
                    <div className="grid grid-cols-4 gap-2">
                      {['Google Pay', 'PhonePe', 'Paytm', 'BHIM UPI'].map((app) => (
                        <div
                          key={app}
                          onClick={() => handleAuthorizePayment('UPI', `pay_${app.toLowerCase().replace(/\s/g, '')}_${Date.now()}`)}
                          className="p-2.5 rounded-xl border border-slate-200 hover:border-indigo-600 hover:bg-indigo-50/50 cursor-pointer text-center text-xs font-bold text-slate-700 transition-all shadow-2xs"
                        >
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2: CREDIT / DEBIT CARD */}
              {activeTab === 'card' && (
                <div className="space-y-6 animate-fade-in">
                  
                  {/* Interactive 3D Card Graphic */}
                  <div className="bg-gradient-to-tr from-slate-900 via-indigo-900 to-indigo-800 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden space-y-4">
                    <div className="absolute right-4 top-4 text-xs font-black tracking-widest text-indigo-300">
                      {getCardBrand(cardNumber)}
                    </div>
                    <div className="w-10 h-7 bg-amber-400/80 rounded-md border border-amber-300/50 flex items-center justify-center">
                      <div className="w-6 h-4 border border-amber-700/40 rounded-sm"></div>
                    </div>
                    <div className="tracking-[0.2em] font-mono text-base font-bold">
                      {cardNumber || '•••• •••• •••• ••••'}
                    </div>
                    <div className="flex justify-between items-end text-xs">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Card Holder</span>
                        <span className="font-bold tracking-wide uppercase">{cardHolder || 'CARDHOLDER NAME'}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Expires</span>
                        <span className="font-bold">{cardExpiry || 'MM/YY'}</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleCardSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Card Number *</label>
                      <input
                        type="text"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-mono text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                        placeholder="4532 •••• •••• 5678"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Cardholder Name *</label>
                        <input
                          type="text"
                          value={cardHolder}
                          onChange={(e) => setCardHolder(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                          placeholder="Name on card"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Expiry *</label>
                          <input
                            type="text"
                            maxLength={5}
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-mono text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">CVV *</label>
                          <input
                            type="password"
                            maxLength={4}
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-mono text-slate-800 outline-none focus:bg-white focus:border-indigo-600"
                            placeholder="•••"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {errorMsg && (
                      <div className="p-2.5 bg-rose-50 text-rose-600 text-xs font-bold rounded-xl flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2 mt-4 cursor-pointer"
                    >
                      <Lock className="w-4 h-4" />
                      <span>Proceed to 3D-Secure ({formatPrice(amount)})</span>
                    </button>
                  </form>

                </div>
              )}

              {/* TAB 3: NET BANKING */}
              {activeTab === 'netbanking' && (
                <div className="space-y-4 animate-fade-in">
                  <label className="block text-xs font-bold text-slate-700">Select Popular Indian Bank</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'HDFC', name: 'HDFC Bank' },
                      { id: 'ICICI', name: 'ICICI Bank' },
                      { id: 'SBI', name: 'State Bank of India' },
                      { id: 'AXIS', name: 'Axis Bank' },
                      { id: 'KOTAK', name: 'Kotak Mahindra' },
                      { id: 'PNB', name: 'Punjab National Bank' }
                    ].map((bank) => (
                      <div
                        key={bank.id}
                        onClick={() => setSelectedBank(bank.id)}
                        className={`p-3 rounded-xl border-2 cursor-pointer transition-all text-center ${
                          selectedBank === bank.id
                            ? 'border-indigo-600 bg-indigo-50/50 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <Building2 className={`w-5 h-5 mx-auto mb-1 ${selectedBank === bank.id ? 'text-indigo-600' : 'text-slate-400'}`} />
                        <span className="text-xs font-bold text-slate-800 block truncate">{bank.name}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleAuthorizePayment('NETBANKING', `pay_nb_${selectedBank}_${Date.now()}`)}
                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2 mt-4 cursor-pointer"
                  >
                    <span>Pay via {selectedBank} NetBanking ({formatPrice(amount)})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* TAB 4: WALLETS */}
              {activeTab === 'wallet' && (
                <div className="space-y-4 animate-fade-in">
                  <label className="block text-xs font-bold text-slate-700">Choose Digital Wallet</label>
                  <div className="space-y-2">
                    {[
                      { id: 'paytm', name: 'Paytm Wallet' },
                      { id: 'phonepe', name: 'PhonePe Wallet' },
                      { id: 'amazon', name: 'Amazon Pay' },
                      { id: 'mobikwik', name: 'MobiKwik' }
                    ].map((w) => (
                      <div
                        key={w.id}
                        onClick={() => setSelectedWallet(w.id)}
                        className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                          selectedWallet === w.id
                            ? 'border-indigo-600 bg-indigo-50/50 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Wallet className={`w-5 h-5 ${selectedWallet === w.id ? 'text-indigo-600' : 'text-slate-400'}`} />
                          <span className="text-xs font-bold text-slate-800">{w.name}</span>
                        </div>
                        <span className="text-xs text-emerald-600 font-bold">Direct Gateway Link</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleAuthorizePayment('WALLET', `pay_w_${selectedWallet}_${Date.now()}`)}
                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2 mt-4 cursor-pointer"
                  >
                    <span>Link & Pay via Wallet ({formatPrice(amount)})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>

          </div>
        )}

        {/* Footer info strip */}
        <div className="bg-slate-50 border-t border-slate-100 p-3 px-6 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-500" />
            <span>PCI-DSS Compliant • Bank Grade Security</span>
          </div>
          <span className="font-bold text-indigo-600">Secure Payment Gateway Active</span>
        </div>

      </div>
    </div>
  );
};
