import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';
import { useToast } from './ToastContext';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('shopease_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if (user) {
      localStorage.setItem('shopease_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('shopease_user');
    }
  }, [user]);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await authAPI.login({ email, password });
      setUser(res.data.data);
      showToast(`Welcome back, ${res.data.data.name}!`, 'success');
      return res.data.data;
    } catch (err) {
      showToast(err.message || 'Login failed', 'error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      const res = await authAPI.register(userData);
      setUser(res.data.data);
      showToast('Account created successfully! Welcome to ShopEase.', 'success');
      return res.data.data;
    } catch (err) {
      showToast(err.message || 'Registration failed', 'error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('shopease_user');
    showToast('You have been logged out safely.', 'info');
  };

  const updateProfile = async (formData) => {
    setLoading(true);
    try {
      const res = await authAPI.updateProfile(formData);
      setUser(res.data.data);
      showToast('Profile details updated successfully', 'success');
      return res.data.data;
    } catch (err) {
      showToast(err.message || 'Failed to update profile', 'error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const isAdmin = user && user.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAdmin,
        login,
        register,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
