import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';
import { useToast } from './ToastContext';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('shopease_admin_user') || localStorage.getItem('shopease_user');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.role === 'admin') return parsed;
      } catch (e) {
        console.error(e);
      }
    }
    return null;
  });
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if (user && user.role === 'admin') {
      localStorage.setItem('shopease_admin_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('shopease_admin_user');
    }
  }, [user]);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await authAPI.login({ email, password });
      const userData = res.data.data;

      if (userData.role !== 'admin') {
        throw new Error('Access denied: Administrative privileges required.');
      }

      setUser(userData);
      localStorage.setItem('shopease_admin_user', JSON.stringify(userData));
      showToast(`Welcome to Admin Hub, ${userData.name}!`, 'success');
      return userData;
    } catch (err) {
      showToast(err.message || 'Login failed', 'error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('shopease_admin_user');
    showToast('Signed out of Admin Hub.', 'info');
  };

  const isAdmin = Boolean(user && user.role === 'admin');

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAdmin,
        login,
        logout
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
