import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ShoppingBag,
  Heart,
  User as UserIcon,
  Search,
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  Package,
  LogOut,
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { categoriesAPI, productsAPI } from '../../services/api';
import { formatPrice } from '../../utils/currency';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAdmin, logout } = useAuth();
  const { totalCount, totalItemsCount, setIsDrawerOpen, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const cartCount = totalCount ?? totalItemsCount ?? 0;

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  // Live Instant Search Dropdown
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    categoriesAPI.getAll()
      .then((res) => {
        if (res.data.success) {
          setCategories(res.data.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // Debounced search query for live suggestions
  useEffect(() => {
    if (!searchKeyword.trim() || searchKeyword.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setIsSearching(true);
        const res = await productsAPI.getAll({
          keyword: searchKeyword.trim(),
          category: selectedCategory || undefined,
          limit: 5
        });
        if (res.data.success) {
          setSuggestions(res.data.data.products || []);
          setShowSuggestions(true);
        }
      } catch (err) {
        console.warn('Live search suggestions note:', err);
      } finally {
        setIsSearching(false);
      }
    }, 220);

    return () => clearTimeout(timer);
  }, [searchKeyword, selectedCategory]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu and suggestions on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setShowSuggestions(false);
  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    if (searchKeyword.trim() || selectedCategory) {
      const params = new URLSearchParams();
      if (searchKeyword.trim()) params.set('keyword', searchKeyword.trim());
      if (selectedCategory) params.set('category', selectedCategory);
      navigate(`/products?${params.toString()}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      {/* Top promotional announcement bar */}
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span>Grand Festive Sale! Use coupon code <strong className="underline decoration-amber-300">SAVE10</strong> for 10% OFF on all orders.</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight font-display text-slate-900 leading-none">
                Shop<span className="text-indigo-600">Ease</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-0.5">
                Premium Store
              </span>
            </div>
          </Link>

          {/* Search Bar with Category Filter & Live Suggestions */}
          <div className="relative hidden md:flex flex-1 max-w-xl" ref={searchContainerRef}>
            <form
              onSubmit={handleSearch}
              className="w-full flex items-center bg-slate-100/90 hover:bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/30 focus-within:border-indigo-500 border border-slate-200/80 rounded-2xl p-1.5 transition-all"
            >
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent text-xs font-semibold text-slate-600 px-3 py-1.5 outline-none border-r border-slate-200 cursor-pointer"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Search products, tech, fashion, lifestyle..."
                value={searchKeyword}
                onFocus={() => {
                  if (suggestions.length > 0) setShowSuggestions(true);
                }}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="flex-1 bg-transparent px-3 py-1 text-sm text-slate-800 placeholder-slate-400 outline-none"
              />

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-xl transition-colors shadow-sm flex items-center justify-center cursor-pointer"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Live Instant Search Suggestions Popup */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 z-50 animate-slide-up overflow-hidden">
                <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>Top Product Matches</span>
                  {isSearching && <span className="text-indigo-600">Updating...</span>}
                </div>

                <div className="divide-y divide-slate-50 max-h-80 overflow-y-auto">
                  {suggestions.map((p) => {
                    const price = p.discount_price || p.price;
                    return (
                      <Link
                        key={p.id}
                        to={`/products/${p.id || p.slug}`}
                        onClick={() => setShowSuggestions(false)}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-indigo-50/50 transition-colors group"
                      >
                        <img
                          src={p.image_url || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100'}
                          alt={p.name}
                          className="w-11 h-11 rounded-xl object-cover bg-slate-50 border border-slate-100 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-slate-800 truncate group-hover:text-indigo-600 transition-colors">
                            {p.name}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] font-semibold text-slate-400">
                              {p.category?.name || 'Item'}
                            </span>
                            <span className="text-xs font-extrabold text-slate-900">
                              {formatPrice(price)}
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="px-4 pt-2.5 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Press Enter for all search results</span>
                  <button
                    onClick={handleSearch}
                    className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
                  >
                    View All →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2.5 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 transition-colors"
              title="Wishlist"
            >
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-5 h-5 bg-rose-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-sm animate-pulse-subtle">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart / Bag Button */}
            <button
              onClick={() => {
                if (setIsDrawerOpen) setIsDrawerOpen(true);
                else if (setIsCartOpen) setIsCartOpen(true);
              }}
              className="relative p-2.5 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 transition-colors flex items-center cursor-pointer"
              title="Shopping Bag"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-5 h-5 bg-indigo-600 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Profile Menu Dropdown */}
            <div className="relative" ref={profileMenuRef}>
              {user ? (
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all text-left"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-800 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                  <div className="hidden lg:flex flex-col">
                    <span className="text-xs font-bold text-slate-800 truncate max-w-[100px]">
                      {user.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium capitalize">
                      {user.role}
                    </span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    to="/login"
                    className="text-sm font-semibold text-slate-700 hover:text-indigo-600 px-3 py-2 rounded-xl transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="hidden sm:inline-flex text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-colors shadow-sm shadow-indigo-600/20"
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Profile Dropdown Popup */}
              {user && isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-slide-up">
                  <div className="px-4 py-2.5 border-b border-slate-100">
                    <p className="text-xs text-slate-400 font-medium">Signed in as</p>
                    <p className="text-sm font-bold text-slate-800 truncate">{user.email}</p>
                  </div>

                  {isAdmin && (
                    <Link
                      to="/admin"
                      onClick={() => setIsProfileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      Admin Dashboard
                    </Link>
                  )}

                  <Link
                    to="/profile"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <UserIcon className="w-4 h-4 text-slate-400" />
                    My Profile
                  </Link>

                  <Link
                    to="/orders"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <Package className="w-4 h-4 text-slate-400" />
                    My Orders
                  </Link>

                  <div className="border-t border-slate-100 my-1"></div>

                  <button
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      logout();
                    }}
                    className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Secondary Category Navigation Ribbon */}
        <nav className="hidden md:flex items-center justify-between py-2 border-t border-slate-100 text-xs font-medium text-slate-600 gap-4">
          <div className="flex items-center gap-5 overflow-x-auto no-scrollbar py-0.5">
            <Link
              to="/products"
              className={`hover:text-indigo-600 transition-colors font-bold flex items-center gap-1.5 shrink-0 ${
                location.pathname === '/products' && !location.search ? 'text-indigo-600 font-extrabold' : 'text-slate-800'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              All Products
            </Link>
            {categories.map((cat) => {
              const isActive = location.pathname === '/products' && location.search.includes(`category=${cat.slug}`);
              return (
                <Link
                  key={cat.id}
                  to={`/products?category=${cat.slug}`}
                  className={`hover:text-indigo-600 transition-colors shrink-0 whitespace-nowrap px-1 py-0.5 rounded-lg ${
                    isActive ? 'text-indigo-600 font-extrabold bg-indigo-50' : 'text-slate-600'
                  }`}
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4 text-slate-500 shrink-0 pl-2 border-l border-slate-100">
            <Link to="/products?sort=popularity" className="hover:text-indigo-600 font-semibold whitespace-nowrap">
              🔥 Trending Deals
            </Link>
            <Link to="/products?featured=true" className="hover:text-indigo-600 font-semibold whitespace-nowrap">
              ⭐ Featured Picks
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-4 animate-slide-up shadow-lg">
          {/* Mobile search */}
          <form onSubmit={handleSearch} className="flex items-center bg-slate-100 rounded-xl p-1.5">
            <input
              type="text"
              placeholder="Search products..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="flex-1 bg-transparent px-3 py-1.5 text-sm outline-none"
            />
            <button type="submit" className="bg-indigo-600 text-white p-2 rounded-lg">
              <Search className="w-4 h-4" />
            </button>
          </form>

          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
            <Link to="/" className="px-3 py-2 rounded-lg hover:bg-slate-50">
              Home
            </Link>
            <Link to="/products" className="px-3 py-2 rounded-lg hover:bg-slate-50">
              All Products
            </Link>
            <Link to="/wishlist" className="px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center justify-between">
              <span>Wishlist</span>
              {wishlistCount > 0 && <span className="bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full">{wishlistCount}</span>}
            </Link>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (setIsDrawerOpen) setIsDrawerOpen(true);
                else if (setIsCartOpen) setIsCartOpen(true);
              }}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center justify-between text-left w-full cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-indigo-600" />
                Shopping Bag
              </span>
              {cartCount > 0 && <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">{cartCount}</span>}
            </button>
            {user ? (
              <>
                <Link to="/profile" className="px-3 py-2 rounded-lg hover:bg-slate-50">
                  Profile & Addresses
                </Link>
                <Link to="/orders" className="px-3 py-2 rounded-lg hover:bg-slate-50">
                  Order History
                </Link>
                {isAdmin && (
                  <Link to="/admin" className="px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-bold">
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="text-left px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-lg"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="pt-2 flex flex-col gap-2">
                <Link to="/login" className="w-full text-center py-2.5 rounded-xl border border-slate-200 font-bold text-slate-800">
                  Sign In
                </Link>
                <Link to="/register" className="w-full text-center py-2.5 rounded-xl bg-indigo-600 text-white font-bold">
                  Create Account
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
