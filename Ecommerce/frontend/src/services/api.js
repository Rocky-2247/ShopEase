import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to automatically attach JWT token & guest session ID
api.interceptors.request.use(
  (config) => {
    // 1. Attach JWT token if authenticated
    const userInfo = localStorage.getItem('shopease_user');
    if (userInfo) {
      try {
        const { token } = JSON.parse(userInfo);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (e) {
        console.error('Error parsing token from localStorage', e);
      }
    }

    // 2. Attach persistent session ID for guest database cart synchronization
    let sessionId = localStorage.getItem('shopease_session_id');
    if (!sessionId) {
      sessionId = (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID)
        ? window.crypto.randomUUID()
        : 'guest_' + Date.now() + '_' + Math.random().toString(36).substring(2, 11);
      localStorage.setItem('shopease_session_id', sessionId);
    }
    config.headers['x-session-id'] = sessionId;

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for unified error message extraction
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      'An unexpected error occurred';
    return Promise.reject(new Error(message));
  }
);

// Modular API services
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (data) => api.put('/auth/profile', data),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (data) => api.post('/auth/reset-password', data),
  getAddresses: () => api.get('/auth/addresses'),
  addAddress: (data) => api.post('/auth/addresses', data),
  updateAddress: (id, data) => api.put(`/auth/addresses/${id}`, data),
  deleteAddress: (id) => api.delete(`/auth/addresses/${id}`)
};

export const newsletterAPI = {
  subscribe: (email) => api.post('/auth/newsletter', { email })
};

export const productsAPI = {
  getAll: (params) => api.get('/products', { params }),
  getById: (id) => api.get(`/products/${id}`),
  getFeatured: () => api.get('/products/featured'),
  getTrending: () => api.get('/products/trending'),
  getBrands: () => api.get('/products/brands'),
  getRelated: (id) => api.get(`/products/${id}/related`),
  create: (data) => api.post('/products', data),
  update: (id, data) => api.put(`/products/${id}`, data),
  delete: (id) => api.delete(`/products/${id}`)
};

export const categoriesAPI = {
  getAll: () => api.get('/categories'),
  getById: (id) => api.get(`/categories/${id}`),
  create: (data) => api.post('/categories', data),
  update: (id, data) => api.put(`/categories/${id}`, data),
  delete: (id) => api.delete(`/categories/${id}`)
};

export const cartAPI = {
  getCart: () => api.get('/cart'),
  addToCart: (dataOrProductId, quantity = 1) =>
    typeof dataOrProductId === 'object' && dataOrProductId !== null
      ? api.post('/cart/add', dataOrProductId)
      : api.post('/cart/add', { product_id: dataOrProductId, quantity }),
  updateQuantity: (dataOrProductId, quantity) =>
    typeof dataOrProductId === 'object' && dataOrProductId !== null
      ? api.put('/cart/update', dataOrProductId)
      : api.put('/cart/update', { id: dataOrProductId, product_id: dataOrProductId, quantity }),
  removeFromCart: (id) => api.delete(`/cart/remove/${id}`),
  clearCart: () => api.delete('/cart/clear'),
  mergeCart: (payload) =>
    Array.isArray(payload)
      ? api.post('/cart/merge', { items: payload })
      : api.post('/cart/merge', payload || {})
};

export const wishlistAPI = {
  getWishlist: () => api.get('/wishlist'),
  toggle: (productId) => api.post('/wishlist/toggle', { product_id: productId }),
  remove: (productId) => api.delete(`/wishlist/remove/${productId}`),
  moveToCart: (productId) => api.post('/wishlist/move-to-cart', { product_id: productId })
};

export const downloadInvoiceFile = async (orderId, orderNumber = '') => {
  try {
    const res = await api.get(`/orders/${orderId}/invoice`, {
      responseType: 'blob'
    });

    // Check if response is an error JSON returned inside a blob
    if (res.data.type && res.data.type.includes('json')) {
      const text = await res.data.text();
      const errData = JSON.parse(text);
      throw new Error(errData.message || 'Invoice generation error');
    }

    const blob = new Blob([res.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Invoice-${orderNumber || orderId}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    return true;
  } catch (err) {
    console.error('Invoice download error:', err);
    throw new Error(err.message || 'Unable to download invoice. Please verify your order status and try again.');
  }
};

export const ordersAPI = {
  create: (orderData) => api.post('/orders', orderData),
  getUserOrders: () => api.get('/orders'),
  getById: (id) => api.get(`/orders/${id}`),
  cancel: (id) => api.put(`/orders/${id}/cancel`),
  requestReturn: (id, data) => api.post(`/orders/${id}/return`, data),
  updateReturnStatus: (id, data) => api.put(`/orders/${id}/return-status`, data),
  downloadInvoice: (id) => api.get(`/orders/${id}/invoice`, { responseType: 'blob' }),
  downloadInvoiceFile,
  getAllAdmin: (params) => api.get('/orders/admin/all', { params }),
  updateStatus: (id, data) => api.put(`/orders/${id}/status`, data)
};

export const paymentAPI = {
  createRazorpayOrder: (amount, currency = 'INR') => api.post('/payment/create-order', { amount, currency }),
  verifyPayment: (data) => api.post('/payment/verify', data),
  validateCoupon: (codeOrObj, orderAmount) =>
    typeof codeOrObj === 'object'
      ? api.post('/payment/validate-coupon', codeOrObj)
      : api.post('/payment/validate-coupon', { code: codeOrObj, order_amount: orderAmount })
};

export const reviewsAPI = {
  getByProduct: (productId) => api.get(`/reviews/product/${productId}`),
  create: (productId, reviewData) => api.post(`/reviews/product/${productId}`, reviewData)
};

export const adminAPI = {
  getDashboardStats: () => api.get('/admin/dashboard'),
  getUsers: (params) => api.get('/admin/users', { params }),
  toggleBlockUser: (id) => api.put(`/admin/users/${id}/toggle-block`),
  toggleUserRole: (id) => api.put(`/admin/users/${id}/toggle-role`),
  getCoupons: () => api.get('/admin/coupons'),
  createCoupon: (data) => api.post('/admin/coupons', data),
  updateCoupon: (id, data) => api.put(`/admin/coupons/${id}`, data),
  deleteCoupon: (id) => api.delete(`/admin/coupons/${id}`),
  toggleCouponStatus: (id) => api.put(`/admin/coupons/${id}/toggle`)
};

export const uploadAPI = {
  uploadImage: (formData) => api.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
};

export default api;
