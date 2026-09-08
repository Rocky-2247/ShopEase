import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { cartAPI, paymentAPI } from '../services/api';
import { useAuth } from './AuthContext';
import { useToast } from './ToastContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const { showToast } = useToast();

  const [cartItems, setCartItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState(null);
  const [couponLoading, setCouponLoading] = useState(false);

  // Fetch cart directly from backend database
  const loadDBCart = useCallback(async () => {
    try {
      setLoading(true);
      const res = await cartAPI.getCart();
      if (res.data?.success && res.data?.data) {
        setCartItems(res.data.data.items || []);
      }
    } catch (err) {
      console.warn('Cart database fetch note:', err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Handle User Login / Cart Merge into Database
  useEffect(() => {
    const syncOnAuthChange = async () => {
      const sessionId = localStorage.getItem('shopease_session_id');
      if (user && sessionId) {
        try {
          // Merge guest session cart rows in database to the authenticated user
          await cartAPI.mergeCart({ session_id: sessionId });
        } catch (e) {
          console.warn('Guest cart merge note:', e.message);
        }
      }
      loadDBCart();
    };

    syncOnAuthChange();
  }, [user, loadDBCart]);

  // Add item to cart (Persists in database for both logged in users and guests)
  const addToCart = async (product, quantity = 1) => {
    try {
      const productId = product.id || product.product_id;
      const variantId = product.variant_id || null;

      const res = await cartAPI.addToCart({
        product_id: productId,
        variant_id: variantId,
        quantity: Math.max(1, parseInt(quantity, 10) || 1)
      });

      if (res.data?.success) {
        if (res.data.data?.items) {
          setCartItems(res.data.data.items);
        } else {
          await loadDBCart();
        }
        showToast(`Added "${product.name}" to your bag`, 'success');
        setIsDrawerOpen(true);
      }
    } catch (err) {
      console.error('addToCart error:', err);
      showToast(err.message || 'Failed to add item to bag', 'error');
    }
  };

  // Update item quantity in database
  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      return removeFromCart(itemId);
    }

    try {
      const res = await cartAPI.updateQuantity({
        id: typeof itemId === 'number' ? itemId : undefined,
        product_id: itemId,
        quantity: newQuantity
      });

      if (res.data?.success) {
        if (res.data.data?.items) {
          setCartItems(res.data.data.items);
        } else {
          await loadDBCart();
        }
      }
    } catch (err) {
      console.error('updateQuantity error:', err);
      showToast(err.message || 'Failed to update quantity', 'error');
    }
  };

  // Remove from database cart
  const removeFromCart = async (itemId) => {
    try {
      const res = await cartAPI.removeFromCart(itemId);
      if (res.data?.success) {
        if (res.data.data?.items) {
          setCartItems(res.data.data.items);
        } else {
          await loadDBCart();
        }
        showToast('Item removed from bag', 'info');
      }
    } catch (err) {
      console.error('removeFromCart error:', err);
      showToast(err.message || 'Failed to remove item', 'error');
    }
  };

  // Clear cart from database
  const clearCart = async () => {
    try {
      await cartAPI.clearCart();
      setCartItems([]);
    } catch (e) {
      console.error('clearCart error:', e);
      setCartItems([]);
    }
    setCoupon(null);
  };

  // Apply discount coupon
  const applyCoupon = async (code) => {
    if (!code) return;
    try {
      setCouponLoading(true);
      const res = await paymentAPI.validateCoupon({
        code: code.trim(),
        order_amount: subtotal
      });

      if (res.data.success) {
        setCoupon(res.data.data);
        showToast(`Coupon "${code.toUpperCase()}" applied!`, 'success');
      }
    } catch (err) {
      setCoupon(null);
      showToast(err.message || 'Invalid or expired coupon', 'error');
    } finally {
      setCouponLoading(false);
    }
  };

  const removeCoupon = () => {
    setCoupon(null);
    showToast('Coupon removed', 'info');
  };

  // Compute live subtotal
  const subtotal = cartItems.reduce((sum, item) => {
    const p = item.product || {};
    const price = p.discount_price ? p.discount_price : p.price ? p.price : 0;
    return sum + price * item.quantity;
  }, 0);

  // Compute coupon discount
  const discountAmount = coupon ? coupon.discount_amount : 0;

  // Free shipping threshold in INR is ₹999, standard shipping is ₹99
  const FREE_SHIPPING_THRESHOLD = 999;
  const shippingCharge = subtotal - discountAmount >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 99;
  const finalAmount = Math.max(0, subtotal - discountAmount + shippingCharge);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItemsCount,
        totalCount: totalItemsCount,
        subtotal,
        discountAmount,
        shippingCharge,
        finalAmount,
        coupon,
        couponLoading,
        isDrawerOpen,
        setIsDrawerOpen,
        isCartOpen: isDrawerOpen,
        setIsCartOpen: setIsDrawerOpen,
        openCart: () => setIsDrawerOpen(true),
        closeCart: () => setIsDrawerOpen(false),
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        applyCoupon,
        removeCoupon,
        loadServerCart: loadDBCart,
        loading,
        FREE_SHIPPING_THRESHOLD
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
