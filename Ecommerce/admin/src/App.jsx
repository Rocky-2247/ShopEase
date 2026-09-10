import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Context
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';

// Components
import { ProtectedRoute } from './components/routes/ProtectedRoute';
import { AdminLayout } from './components/layout/AdminLayout';

// Pages
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Analytics } from './pages/Analytics';
import { Products } from './pages/Products';
import { Categories } from './pages/Categories';
import { Orders } from './pages/Orders';
import { Users } from './pages/Users';
import { Coupons } from './pages/Coupons';
import { Settings } from './pages/Settings';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/login" element={<Login />} />

            {/* Protected Admin Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="products" element={<Products />} />
              <Route path="categories" element={<Categories />} />
              <Route path="orders" element={<Orders />} />
              <Route path="users" element={<Users />} />
              <Route path="coupons" element={<Coupons />} />
              <Route path="settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
