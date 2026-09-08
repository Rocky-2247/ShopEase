import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { wishlistAPI } from '../services/api';
import { useAuth } from './AuthContext';
import { useCart } from './CartContext';
import { useToast } from './ToastContext';

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const [wishlist, setWishlist] = useState(() => {
    const local = localStorage.getItem('shopease_wishlist');
    return local ? JSON.parse(local) : [];
  });
  const [loading, setLoading] = useState(false);

  const fetchDBWishlist = useCallback(async () => {
    if (!user) return;
    try {
      setLoading(true);
      const res = await wishlistAPI.getWishlist();
      if (res.data.success) {
        setWishlist(res.data.data || []);
      }
    } catch (e) {
      console.warn('Wishlist load error:', e.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    const syncWishlist = async () => {
      if (user) {
        const local = localStorage.getItem('shopease_wishlist');
        if (local) {
          try {
            const guestItems = JSON.parse(local);
            if (Array.isArray(guestItems) && guestItems.length > 0) {
              for (const it of guestItems) {
                if (it && it.id) {
                  await wishlistAPI.toggle(it.id).catch(() => {});
                }
              }
              localStorage.removeItem('shopease_wishlist');
            }
          } catch (e) {
            console.warn('Wishlist merge note:', e);
          }
        }
        fetchDBWishlist();
      } else {
        const local = localStorage.getItem('shopease_wishlist');
        setWishlist(local ? JSON.parse(local) : []);
      }
    };

    syncWishlist();
  }, [user, fetchDBWishlist]);

  useEffect(() => {
    if (!user) {
      localStorage.setItem('shopease_wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist, user]);

  const toggleWishlist = async (product) => {
    if (user) {
      try {
        const res = await wishlistAPI.toggle(product.id);
        await fetchDBWishlist();
        showToast(res.data.message, res.data.is_wishlisted ? 'success' : 'info');
      } catch (err) {
        showToast(err.message || 'Wishlist update failed', 'error');
      }
    } else {
      const exists = wishlist.some((item) => item.id === product.id);
      if (exists) {
        setWishlist((prev) => prev.filter((item) => item.id !== product.id));
        showToast('Removed from wishlist', 'info');
      } else {
        setWishlist((prev) => [...prev, product]);
        showToast('Added to wishlist', 'success');
      }
    }
  };

  const removeFromWishlist = async (productId) => {
    if (user) {
      try {
        await wishlistAPI.remove(productId);
        await fetchDBWishlist();
        showToast('Removed from wishlist', 'info');
      } catch (err) {
        showToast(err.message || 'Failed to remove', 'error');
      }
    } else {
      setWishlist((prev) => prev.filter((item) => item.id !== productId));
      showToast('Removed from wishlist', 'info');
    }
  };

  const moveToCart = async (product) => {
    await addToCart(product, 1);
    await removeFromWishlist(product.id);
  };

  const isWishlisted = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        loading,
        toggleWishlist,
        removeFromWishlist,
        moveToCart,
        isWishlisted,
        wishlistCount: wishlist.length
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
