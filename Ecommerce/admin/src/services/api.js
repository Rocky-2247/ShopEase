import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request Interceptor: attach JWT
api.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem('shopease_admin_user') || localStorage.getItem('shopease_user');
    if (userInfo) {
      try {
        const { token } = JSON.parse(userInfo);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (e) {
        console.error('Error parsing admin token', e);
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: error normalization
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

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  getProfile: () => api.get('/auth/profile')
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

export const productsAPI = {
  getAll: (params) => api.get('/products', { params }),
  getById: (id) => api.get(`/products/${id}`),
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

export const ordersAPI = {
  getAllAdmin: (params) => api.get('/orders/admin/all', { params }),
  getById: (id) => api.get(`/orders/${id}`),
  updateStatus: (id, data) => api.put(`/orders/${id}/status`, data),
  downloadInvoice: (id) => api.get(`/orders/${id}/invoice`, { responseType: 'blob' })
};

export const downloadInvoiceFile = async (orderId, orderNumber = '') => {
  try {
    const res = await api.get(`/orders/${orderId}/invoice`, {
      responseType: 'blob'
    });

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
    throw new Error(err.message || 'Unable to download invoice.');
  }
};

export const uploadAPI = {
  uploadImage: (formData) => api.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
};

export default api;
