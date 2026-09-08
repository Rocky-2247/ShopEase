import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Heart,
  ShoppingBag,
  Zap,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Plus,
  Minus,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Sparkles,
  Camera,
  Layers,
  Upload,
  Tag,
  Copy,
  Check,
  Percent,
  Clock,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Video,
  Eye,
  Maximize2,
  RotateCw
} from 'lucide-react';
import { productsAPI, reviewsAPI, uploadAPI } from '../services/api';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { StarRating } from '../components/common/StarRating';
import { ProductCard } from '../components/product/ProductCard';
import { Loader } from '../components/common/Loader';
import { formatPrice } from '../utils/currency';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { user } = useAuth();
  const { showToast } = useToast();

  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [activeMediaTab, setActiveMediaTab] = useState('photos'); // 'photos' | 'video'
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef(null);

  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Review submission state with photo support
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewPhotoUrl, setReviewPhotoUrl] = useState('');
  const [uploadingReviewPhoto, setUploadingReviewPhoto] = useState(false);
  const [submittingReview, setSubmittingReview] = useState(false);
  const [copiedCoupon, setCopiedCoupon] = useState(null);

  const copyCouponCode = (code, desc) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    showToast(`Coupon "${code}" copied! ${desc}`, 'success');
    setTimeout(() => setCopiedCoupon(null), 3000);
  };

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const res = await productsAPI.getById(id);
        if (res.data.success) {
          const prod = res.data.data;
          setProduct(prod);
          setSelectedImage(prod.image_url);

          // Select default variant if available
          if (prod.variants && prod.variants.length > 0) {
            setSelectedVariant(prod.variants[0]);
            if (prod.variants[0].image_url) {
              setSelectedImage(prod.variants[0].image_url);
            }
          } else {
            setSelectedVariant(null);
          }

          // Track Recently Viewed
          try {
            const viewed = JSON.parse(localStorage.getItem('shopease_recently_viewed') || '[]');
            const filtered = viewed.filter((item) => item.id !== prod.id);
            localStorage.setItem('shopease_recently_viewed', JSON.stringify([prod, ...filtered].slice(0, 6)));
          } catch (e) {
            console.error(e);
          }

          // Fetch related
          const relRes = await productsAPI.getRelated(prod.id);
          if (relRes.data.success) {
            setRelatedProducts(relRes.data.data);
          }
        }
      } catch (err) {
        console.error('Error fetching product details:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (loading) {
    return <Loader text="Loading product details & variants..." />;
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Product not found</h2>
        <Link to="/products" className="mt-4 inline-block text-indigo-600 font-bold">
          ← Back to Catalog
        </Link>
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);
  const currentPrice = selectedVariant
    ? (selectedVariant.discount_price || selectedVariant.price)
    : (product.discount_price || product.price);
  const originalPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentStock = selectedVariant ? selectedVariant.stock : product.stock;

  const FACE_PERSPECTIVES = ['Front View', '3/4 Perspective', 'Side Profile', 'Top View', 'Macro Detail', 'In-Use Lifestyle'];
  const FACE_LABELS = ['Front', '3/4 Angle', 'Side', 'Top', 'Detail', 'Lifestyle'];

  const discountPercent = originalPrice > currentPrice
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : null;

  const rawImages = Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [product.image_url, ...(product.variants?.map(v => v.image_url).filter(Boolean) || [])];

  const uniqueImages = rawImages.filter((v, i, a) => a.indexOf(v) === i && !!v);
  const allImages = uniqueImages.length > 0 ? uniqueImages : (product.image_url ? [product.image_url] : []);
  const currentFaceIndex = Math.max(0, allImages.indexOf(selectedImage));
  const hasVideo = !!product.video_url;

  const handleSelectVariant = (v) => {
    setSelectedVariant(v);
    if (v.image_url) {
      setSelectedImage(v.image_url);
    }
  };

  const handleAddToCart = () => {
    const itemToAdd = {
      ...product,
      variant_id: selectedVariant ? selectedVariant.id : null,
      name: selectedVariant ? `${product.name} (${selectedVariant.name})` : product.name,
      price: selectedVariant ? selectedVariant.price : product.price,
      discount_price: selectedVariant ? selectedVariant.discount_price : product.discount_price,
      stock: currentStock,
      image_url: selectedVariant?.image_url || product.image_url
    };
    addToCart(itemToAdd, quantity);
  };

  const handleBuyNow = async () => {
    handleAddToCart();
    navigate('/checkout');
  };

  const handleReviewPhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const data = new FormData();
    data.append('image', file);

    try {
      setUploadingReviewPhoto(true);
      const res = await uploadAPI.uploadImage(data);
      if (res.data.success) {
        setReviewPhotoUrl(res.data.url);
        showToast('Review photo attached!', 'success');
      }
    } catch (err) {
      showToast(err.message || 'Photo upload failed', 'error');
    } finally {
      setUploadingReviewPhoto(false);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      showToast('Please sign in to write a customer review', 'warning');
      navigate(`/login?redirect=/products/${product.id}`);
      return;
    }

    if (!reviewComment.trim()) {
      showToast('Please enter your review comments', 'warning');
      return;
    }

    try {
      setSubmittingReview(true);
      const res = await reviewsAPI.create(product.id, {
        rating: reviewRating,
        comment: reviewComment,
        image_url: reviewPhotoUrl || null
      });

      if (res.data.success) {
        showToast('Review & photos submitted successfully!', 'success');
        setReviewComment('');
        setReviewPhotoUrl('');
        const updatedProd = await productsAPI.getById(product.id);
        if (updatedProd.data.success) {
          setProduct(updatedProd.data.data);
        }
      }
    } catch (err) {
      showToast(err.message || 'Failed to submit review', 'error');
    } finally {
      setSubmittingReview(false);
    }
  };

  const specs = typeof product.specifications === 'string'
    ? JSON.parse(product.specifications || '{}')
    : (product.specifications || {});

  const bundleItem = relatedProducts.length > 0 ? relatedProducts[0] : null;

  const demoVideoUrl = product.video_url || '';

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration || 10;
      const progress = (videoRef.current.currentTime / dur) * 100;
      setVideoProgress(progress);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const handleSelectFaceImage = (img) => {
    setSelectedImage(img);
    setActiveMediaTab('photos');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/products" className="hover:text-indigo-600">Products</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to={`/products?category=${product.category?.slug}`} className="hover:text-indigo-600">
          {product.category?.name}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-800 truncate max-w-[200px] sm:max-w-md">{product.name}</span>
      </nav>

      {/* Main Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Product Media Gallery (Dynamic Gallery + Video if available) */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Media Mode Switcher (rendered only when genuine product video exists) */}
          {hasVideo && (
            <div className="flex items-center justify-between gap-2 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-inner">
              <button
                onClick={() => setActiveMediaTab('photos')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeMediaTab === 'photos'
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Gallery Images ({allImages.length})</span>
              </button>

              <button
                onClick={() => {
                  setActiveMediaTab('video');
                  if (videoRef.current) {
                    videoRef.current.play().catch(() => {});
                    setIsVideoPlaying(true);
                  }
                }}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeMediaTab === 'video'
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <div className="relative flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping absolute" />
                  <span className="w-2 h-2 rounded-full bg-rose-500 relative" />
                </div>
                <Video className="w-3.5 h-3.5" />
                <span>Product Video Clip</span>
              </button>
            </div>
          )}

          {/* Main Media Showcase Container */}
          <div className="relative w-full aspect-square bg-slate-950 rounded-3xl overflow-hidden border border-slate-800/80 shadow-xl group">
            {activeMediaTab === 'photos' || !hasVideo ? (
              <>
                <img
                  src={selectedImage || product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />

                {/* Photo Count & Perspective Face Badge Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  {allImages.length > 1 && (
                    <div className="bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-black px-3 py-1 rounded-full border border-slate-700/80 shadow flex items-center gap-1.5">
                      <Eye className="w-3 h-3 text-indigo-400" />
                      <span>
                        Photo {currentFaceIndex + 1} of {allImages.length}
                        {FACE_PERSPECTIVES[currentFaceIndex] ? ` • ${FACE_PERSPECTIVES[currentFaceIndex]}` : ''}
                      </span>
                    </div>
                  )}

                  {discountPercent && (
                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md self-start">
                      {discountPercent}% OFF
                    </div>
                  )}
                </div>

                {/* Next / Prev Photo Quick Flips */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={() => {
                        const prevIdx = (currentFaceIndex - 1 + allImages.length) % allImages.length;
                        setSelectedImage(allImages[prevIdx]);
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      title="Previous Image"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => {
                        const nextIdx = (currentFaceIndex + 1) % allImages.length;
                        setSelectedImage(allImages[nextIdx]);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      title="Next Image"
                    >
                      ›
                    </button>
                  </>
                )}
              </>
            ) : (
              /* Genuine Product Video Player View */
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={demoVideoUrl}
                  className="w-full h-full object-cover object-center"
                  autoPlay
                  loop
                  muted={isVideoMuted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onClick={togglePlayPause}
                />

                {/* Video Top Header Banner */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="bg-rose-950/80 backdrop-blur-md border border-rose-600/40 text-white text-xs font-black px-3 py-1 rounded-full shadow flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span>Official Product Demo</span>
                  </div>

                  <span className="bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-black px-2.5 py-1 rounded-full border border-amber-400/30 shadow">
                    HD Preview
                  </span>
                </div>

                {/* Center Play/Pause Overlay Indicator */}
                {!isVideoPlaying && (
                  <button
                    onClick={togglePlayPause}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-slate-900/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </button>
                )}

                {/* Video Bottom Custom Control Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800/90 rounded-2xl p-2.5 flex items-center gap-3">
                  <button
                    onClick={togglePlayPause}
                    className="p-1.5 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>

                  {/* Scrubber Progress Bar */}
                  <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-rose-500 to-indigo-500 h-full rounded-full transition-all duration-100"
                      style={{ width: `${videoProgress}%` }}
                    />
                  </div>

                  {/* Audio Mute/Unmute */}
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
                    title={isVideoMuted ? 'Unmute Sound' : 'Mute Sound'}
                  >
                    {isVideoMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                </div>
              </div>
            )}

            {/* Wishlist Button */}
            <button
              onClick={() => toggleWishlist(product)}
              className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md shadow-md transition-all cursor-pointer ${
                wishlisted
                  ? 'bg-rose-50 text-rose-500 shadow-rose-200'
                  : 'bg-white/90 text-slate-400 hover:text-rose-500 hover:bg-white'
              }`}
            >
              <Heart className={`w-5 h-5 ${wishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
          </div>

          {/* Visual Thumbnails Gallery with 6-Face Labels */}
          {(allImages.length > 1 || hasVideo) && (
            <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-none">
              {/* Product Image Thumbnails with Face Tags */}
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedImage(img);
                    setActiveMediaTab('photos');
                  }}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                    activeMediaTab === 'photos' && selectedImage === img
                      ? 'border-indigo-600 shadow-md shadow-indigo-600/25 scale-95'
                      : 'border-slate-200 hover:border-slate-400 opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 left-1 right-1 bg-slate-950/85 backdrop-blur-xs text-white text-[8px] font-black px-1 py-0.5 rounded text-center truncate">
                    {FACE_LABELS[idx] || `Angle ${idx + 1}`}
                  </span>
                </button>
              ))}

              {/* Video Thumbnail Button (if product has video) */}
              {hasVideo && (
                <button
                  onClick={() => {
                    setActiveMediaTab('video');
                    if (videoRef.current) {
                      videoRef.current.play().catch(() => {});
                      setIsVideoPlaying(true);
                    }
                  }}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 shrink-0 transition-all bg-slate-950 flex flex-col items-center justify-center cursor-pointer ${
                    activeMediaTab === 'video'
                      ? 'border-rose-500 shadow-md shadow-rose-500/30 scale-95'
                      : 'border-slate-700 hover:border-rose-400 opacity-85 hover:opacity-100'
                  }`}
                >
                  <div className="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center shadow">
                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                  </div>
                  <span className="text-[9px] font-black text-rose-300 mt-1 uppercase tracking-tight">
                    Video
                  </span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Right: Product Details, Variants & Purchase Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                {product.category?.name || 'Department'}
              </span>
              {selectedVariant?.sku && (
                <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-md">
                  SKU: {selectedVariant.sku}
                </span>
              )}
              {currentStock > 0 && currentStock <= 5 && (
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full animate-pulse">
                  Only {currentStock} left!
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {product.name}
            </h1>

            {/* Rating Stars */}
            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating || 0} numReviews={product.num_reviews} size="md" />
              <span className="text-xs text-slate-400">|</span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {currentStock > 0 ? 'In Stock & Ready to Ship' : 'Out of Stock'}
              </span>
            </div>
          </div>

          {/* Pricing in Indian Rupees (₹) */}
          <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-100/80 flex items-baseline gap-3">
            <span className="text-3xl font-black text-slate-900">
              {formatPrice(currentPrice)}
            </span>
            {originalPrice > currentPrice && (
              <>
                <span className="text-base text-slate-400 line-through">
                  {formatPrice(originalPrice)}
                </span>
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  Save {formatPrice(originalPrice - currentPrice)} ({discountPercent}% OFF)
                </span>
              </>
            )}
          </div>

          {/* Real E-Commerce Available Discounts & Partner Bank Offers Box */}
          <div className="bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-slate-50 border border-indigo-100 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-indigo-600" />
                Available Offers & Exclusive Discounts
              </span>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-full">
                ⚡ 3 Offers Applicable
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Coupon Code 1 */}
              <div className="bg-white p-3 rounded-xl border border-indigo-100 shadow-sm flex items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-slate-900">Code: SAVE10</span>
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">10% OFF</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">Instant ₹{Math.round(currentPrice * 0.1)} savings on this item</p>
                </div>
                <button
                  onClick={() => copyCouponCode('SAVE10', '10% Flat Savings applied!')}
                  className="px-2.5 py-1 text-xs font-bold bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white rounded-lg transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  {copiedCoupon === 'SAVE10' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCoupon === 'SAVE10' ? 'Copied' : 'Apply'}</span>
                </button>
              </div>

              {/* Bank Offer 2 */}
              <div className="bg-white p-3 rounded-xl border border-indigo-100 shadow-sm flex items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-slate-900">💳 Bank Cashback</span>
                    <span className="text-[9px] font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">HDFC/ICICI</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">Extra 10% instant rebate on credit cards</p>
                </div>
                <span className="text-[10px] font-extrabold text-indigo-600">Active</span>
              </div>
            </div>
          </div>

          {/* Multi-Variant Selector Pills */}
          {product.variants && product.variants.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  Select Model / Edition
                </label>
                {selectedVariant && (
                  <span className="text-xs text-indigo-600 font-bold">
                    {selectedVariant.name}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => handleSelectVariant(v)}
                    className={`p-3 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                      selectedVariant?.id === v.id
                        ? 'border-indigo-600 bg-indigo-50/60 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 truncate">{v.name}</span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${v.stock > 0 ? 'text-emerald-700 bg-emerald-50' : 'text-rose-600 bg-rose-50'}`}>
                        {v.stock > 0 ? `${v.stock} in stock` : 'Out of stock'}
                      </span>
                    </div>
                    <span className="text-xs font-black text-indigo-600 mt-1">
                      {formatPrice(v.discount_price || v.price)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Description</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Specifications Table */}
          {Object.keys(specs).length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Specifications</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(specs).map(([k, v]) => (
                  <div key={k} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex flex-col">
                    <span className="text-slate-400 font-semibold">{k}</span>
                    <span className="text-slate-800 font-bold mt-0.5">{String(v)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & CTA Buttons */}
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-700">Quantity:</span>
              <div className="flex items-center border border-slate-200 rounded-2xl bg-white p-1 shadow-sm">
                <button
                  disabled={quantity <= 1}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-slate-500 hover:text-indigo-600 disabled:opacity-30"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-extrabold text-slate-800 px-4 min-w-[30px] text-center">
                  {quantity}
                </span>
                <button
                  disabled={quantity >= currentStock}
                  onClick={() => setQuantity((q) => Math.min(currentStock, q + 1))}
                  className="p-2 text-slate-500 hover:text-indigo-600 disabled:opacity-30"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                {currentStock} units available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                disabled={currentStock <= 0}
                onClick={handleAddToCart}
                className="py-4 px-6 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <button
                disabled={currentStock <= 0}
                onClick={handleBuyNow}
                className="py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl transition-all shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Buy Now
              </button>
            </div>
          </div>

          {/* Delivery & Assurance Perks */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-center">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <Truck className="w-5 h-5 text-indigo-600 mb-1" />
              <span className="text-[11px] font-bold text-slate-800">Free Express</span>
              <span className="text-[10px] text-slate-400">Over ₹999</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <ShieldCheck className="w-5 h-5 text-emerald-600 mb-1" />
              <span className="text-[11px] font-bold text-slate-800">2-Year Warranty</span>
              <span className="text-[10px] text-slate-400">Official Brand</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <RotateCcw className="w-5 h-5 text-amber-600 mb-1" />
              <span className="text-[11px] font-bold text-slate-800">7-Day Return</span>
              <span className="text-[10px] text-slate-400">Instant Refund</span>
            </div>
          </div>

        </div>

      </div>

      {/* Frequently Bought Together Bundle */}
      {bundleItem && (
        <section className="bg-gradient-to-r from-indigo-50/70 via-purple-50/50 to-pink-50/50 p-6 sm:p-8 rounded-3xl border border-indigo-100/60 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-indigo-700 font-extrabold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Frequently Bought Together Deal</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
                <img src={product.image_url} alt="" className="w-14 h-14 object-cover rounded-xl" />
                <div>
                  <p className="text-xs font-bold text-slate-800 max-w-[150px] truncate">{product.name}</p>
                  <p className="text-xs font-black text-indigo-600">{formatPrice(currentPrice)}</p>
                </div>
              </div>

              <span className="text-xl font-extrabold text-slate-400">+</span>

              <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
                <img src={bundleItem.image_url} alt="" className="w-14 h-14 object-cover rounded-xl" />
                <div>
                  <p className="text-xs font-bold text-slate-800 max-w-[150px] truncate">{bundleItem.name}</p>
                  <p className="text-xs font-black text-indigo-600">
                    {formatPrice(bundleItem.discount_price || bundleItem.price)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <span className="text-[11px] text-slate-400 line-through block">
                  {formatPrice(currentPrice + (bundleItem.discount_price || bundleItem.price))}
                </span>
                <span className="text-xl font-black text-indigo-700">
                  {formatPrice((currentPrice + (bundleItem.discount_price || bundleItem.price)) * 0.9)}
                </span>
                <span className="text-[10px] font-bold text-emerald-600 block">Bundle Savings: 10% OFF</span>
              </div>

              <button
                onClick={() => {
                  addToCart(product, 1);
                  addToCart(bundleItem, 1);
                  showToast('Bundle added to cart with 10% bundle savings!', 'success');
                }}
                className="py-3.5 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-2xl shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Buy Bundle</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Customer Reviews Section */}
      <section className="pt-8 border-t border-slate-200 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
              <MessageSquare className="w-4 h-4" />
              <span>Customer Feedback</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Ratings & Reviews ({product.reviews?.length || 0})
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Write a Review Form with Photo Upload */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-base font-extrabold text-slate-900">Share Your Review & Photos</h3>
            <p className="text-xs text-slate-500">
              Help shoppers by sharing your feedback and uploading unboxing pictures.
            </p>

            <form onSubmit={handleReviewSubmit} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Rating</label>
                <StarRating
                  rating={reviewRating}
                  size="md"
                  interactive={true}
                  onRatingChange={(r) => setReviewRating(r)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Review Comment</label>
                <textarea
                  rows="3"
                  required
                  placeholder="How was the build quality, performance, and packaging?"
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-indigo-600 transition-colors"
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Attach Photo (Optional)</label>
                <div className="flex gap-2">
                  <label className="flex-1 border-2 border-dashed border-slate-200 hover:border-indigo-400 rounded-2xl p-3 flex items-center justify-center gap-2 cursor-pointer bg-slate-50 transition-colors">
                    <Camera className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold text-slate-600">
                      {uploadingReviewPhoto ? 'Uploading image...' : reviewPhotoUrl ? 'Photo Attached ✓' : 'Upload Unboxing Photo'}
                    </span>
                    <input type="file" accept="image/*" onChange={handleReviewPhotoUpload} className="hidden" />
                  </label>
                </div>
                {reviewPhotoUrl && (
                  <div className="mt-2 relative w-16 h-16 rounded-xl overflow-hidden border border-slate-200">
                    <img src={reviewPhotoUrl} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={submittingReview}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-indigo-600/20"
              >
                {submittingReview ? 'Posting Review...' : 'Post Customer Review'}
              </button>
            </form>
          </div>

          {/* Reviews List with Verified Badges & Photos */}
          <div className="lg:col-span-7 space-y-4">
            {(!product.reviews || product.reviews.length === 0) ? (
              <div className="p-8 text-center bg-slate-50 rounded-3xl text-slate-400 text-sm">
                No reviews yet. Be the first to review this product!
              </div>
            ) : (
              product.reviews.map((rev) => (
                <div key={rev.id} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">
                        {rev.user_name?.charAt(0) || 'U'}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800">{rev.user_name || rev.user?.name}</span>
                        {rev.is_verified_buyer && (
                          <span className="ml-2 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 inline-flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400">
                      {new Date(rev.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <StarRating rating={rev.rating} size="sm" />

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {rev.comment}
                  </p>

                  {/* Customer Attached Photo */}
                  {rev.image_url && (
                    <div className="pt-2">
                      <img
                        src={rev.image_url}
                        alt="User review attachment"
                        className="w-24 h-24 rounded-xl object-cover border border-slate-200 shadow-sm hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="pt-8 border-t border-slate-200 space-y-6">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Similar Recommendations</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            You Might Also Like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
