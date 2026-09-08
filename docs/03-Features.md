# 03. Comprehensive Feature Specifications & Inventory

---

## 1. Feature Classification Matrix

The feature inventory below is extracted directly from the active codebase in `Ecommerce/backend` (Java Spring Boot / Node.js) and `Ecommerce/frontend` (React 18).

```
+---------------------------------------------------------------------------------------------------------------+
|                                        SHOPEASE FEATURE CLASSIFICATION                                        |
+---------------------------------------------------------------------------------------------------------------+
|  [ Fully Implemented ]                                                                                        |
|  * JWT Auth, BCrypt Passwords, Profile Management & Saved Address Book CRUD                                  |
|  * Multi-Facet Catalog Discovery (Keyword, Brand, Category, Price Slider, Rating, Stock Toggle)              |
|  * Product Details with Multi-Image Thumbnail Switcher, Video Showcase & SKU Variant Picker                   |
|  * 5-Star Customer Review System with Instant Average Rating & Review Count Recalculation                     |
|  * Database Cart with Guest Session Sync (x-session-id) & 1-Click Auto-Merge upon Login                        |
|  * Wishlist with Move-to-Cart Functionality                                                                   |
|  * 4-Step Checkout Wizard with Loyalty Points (100pts=$10) & Coupon Voucher Engine                            |
|  * Multi-Payment Engine (Razorpay Test Mode, Cash on Delivery, UPI Simulator, Cards)                         |
|  * 4-Stage Order Lifecycle (Pending -> Confirmed -> Shipped -> Delivered / Cancelled)                          |
|  * Transactional Stock Deduction & Automatic Restock upon Cancellation                                        |
|  * Streaming Vector PDF Tax Invoice Generation (OpenPDF / PDFKit)                                             |
|  * Admin Dashboard with GMV, Orders, Catalog, Customer KPIs & Monthly Sales Bar Charts (Recharts)             |
|  * Admin Management Suites for Products (Multipart Uploads), Categories, Orders, Users & Coupons              |
|  * Interactive OpenAPI 3 / Swagger Documentation (/swagger-ui.html & /api-docs)                              |
+---------------------------------------------------------------------------------------------------------------+
|  [ Partially Implemented / Simulated ]                                                                        |
|  * Razorpay integration operates in test simulation mode for developer convenience                           |
|  * Webhook listener handles payment.captured and order.paid payloads                                         |
+---------------------------------------------------------------------------------------------------------------+
|  [ Recommended Production Enhancements ]                                                                      |
|  * Redis distributed caching for high-velocity catalog endpoints                                              |
|  * OAuth2 Social Login (Google / GitHub)                                                                      |
|  * WebSockets / SSE for live order tracking push notifications                                                |
|  * SMS / WhatsApp notification gateway integration                                                            |
+---------------------------------------------------------------------------------------------------------------+
```

---

## 2. Customer-Side Features Deep Dive

### 2.1 Authentication & Profile Management
* **Frontend Pages:** `frontend/src/pages/Login.jsx`, `Register.jsx`, `Profile.jsx`
* **Java Backend:** `com.shopease.controller.AuthController`, `AuthService.java`, `com.shopease.entity.User`, `Address.java`
* **Features:**
  - One-click demo credentials autofill (`admin@shopease.com` / `user@shopease.com`) with instant form population.
  - BCrypt password hashing (10 salt rounds) with write-only serialization (passwords never exposed via JSON).
  - Stateless JWT token issuance (`JwtTokenProvider.java`) with 30-day validity, persisted in `localStorage` under `shopease_user`.
  - Welcome bonus: 100 loyalty points ($10.00 value) credited automatically upon registration.
  - Multi-address manager allowing users to add, edit, delete, and designate a default shipping destination.

### 2.2 Password Reset Workflow
* **Frontend Pages:** `frontend/src/pages/ForgotPassword.jsx`, `ResetPassword.jsx`
* **Java Backend:** `AuthController.java` (`forgotPassword`, `resetPassword`), `AuthService.java`
* **Features:**
  - Generates a signed, time-limited reset JWT token and returns a direct reset link.
  - Token validation endpoint verifies cryptographic signature and updates user credentials securely using BCrypt.

### 2.3 Product Catalog & Multi-Facet Filtering
* **Frontend Pages:** `frontend/src/pages/Products.jsx`, `components/product/ProductCard.jsx`
* **Java Backend:** `ProductController.java` (`getProducts`, `getBrands`), `ProductService.java`
* **Filter Facets:**
  - **Live Keyword Search:** Matches against product `name` and `description`.
  - **Commercial Brand Filter:** Filter by leading brands (Samsung, Apple, Sony, Nike, Adidas, Rolex, Dell, Dyson, etc.).
  - **Department Categories:** Filter by slug (`electronics-tech`, `fashion-apparel`, `sports-activewear`, etc.) or numeric ID.
  - **Price Range Slider:** Interactive slider bounded from $10 to $500.
  - **Star Rating Filter:** Minimum threshold filter (4★, 3★, 2★).
  - **In-Stock Toggle:** Filter showing only items with available stock ($\text{stock} > 0$).
  - **Dynamic Sorting:** Order by Newest, Price (Low to High / High to Low), Rating, and Popularity (`numReviews`).

### 2.4 Product Detail Page (PDP) & Variant Selector
* **Frontend Pages:** `frontend/src/pages/ProductDetails.jsx`
* **Java Backend:** `ProductController.java` (`getProductByIdOrSlug`, `getRelatedProducts`), `Product.java`, `ProductVariant.java`
* **Features:**
  - Multi-image gallery with interactive thumbnail selector.
  - Embedded product video showcase via `videoUrl`.
  - Dynamic SKU variant selector (Size, Color, SKU, Variant Price & Stock).
  - Low-stock badge indicators ($\le 10$ units remaining).
  - Category-based related products carousel.

### 2.5 5-Star Customer Review Engine
* **Frontend Pages:** Embedded inside `ProductDetails.jsx`
* **Java Backend:** `ReviewController.java` (`getProductReviews`, `addProductReview`), `ReviewService.java`, `Review.java`
* **Features:**
  - 1-to-5 star interactive review submission with text commentary and optional image attachment.
  - Automatic database-level recalculation of average `rating` and `numReviews` count on the associated `Product` entity.

### 2.6 Database-Backed Cart & Guest Session Synchronization
* **Frontend Components:** `components/cart/CartDrawer.jsx`, `pages/Cart.jsx`, `context/CartContext.jsx`
* **Java Backend:** `CartController.java`, `CartService.java`, `CartItem.java`
* **Features:**
  - Dual-mode database persistence: Authenticated users map to `userId`; guest visitors map to a persistent UUID `x-session-id` header.
  - Free Express Shipping progress tracker (Unlocked when subtotal $\ge \$100$).
  - Real-time stock boundary checks preventing users from exceeding available inventory.
  - 1-click cart migration (`POST /api/cart/merge`) executed automatically by `AuthContext` when a guest logs in.

### 2.7 4-Step Checkout Wizard & Loyalty Engine
* **Frontend Pages:** `frontend/src/pages/Checkout.jsx`, `OrderConfirmation.jsx`
* **Java Backend:** `OrderController.java` (`createOrder`), `PaymentController.java` (`validateCoupon`, `createRazorpayOrder`), `OrderService.java`
* **Checkout Wizard Steps:**
  - **Step 1: Shipping Destination:** Select from saved address book or create a new address.
  - **Step 2: Order Items & Promo Summary:** Review line items, validate promo coupons (`SAVE10`, `WELCOME20`, `FREESHIP`), and choose loyalty points redemption.
  - **Step 3: Payment Method Selection:**
    - Razorpay Test Gateway (Interactive checkout popup).
    - Cash on Delivery (COD).
    - Instant UPI Simulator (Google Pay / PhonePe / Paytm).
    - Credit / Debit Card Simulator.
  - **Step 4: Confirmation:** Celebratory confetti animation (`canvas-confetti`) with complete order breakdown and earned loyalty points summary.

### 2.8 Order History, Tracking & On-the-Fly PDF Invoicing
* **Frontend Pages:** `frontend/src/pages/OrderHistory.jsx`, `OrderDetails.jsx`
* **Java Backend:** `OrderController.java` (`getUserOrders`, `getOrderById`, `cancelOrder`, `downloadInvoice`), `InvoiceService.java`
* **Features:**
  - 4-stage fulfillment progress bar (`Pending` $\rightarrow$ `Confirmed` $\rightarrow$ `Shipped` $\rightarrow$ `Delivered`).
  - Order cancellation flow with automatic database stock replenishment.
  - Instant official Tax Invoice download streamed as vector PDF via **OpenPDF** (`InvoiceService.java`).

---

## 3. Admin Back-Office Features Deep Dive

```
+---------------------------------------------------------------------------------------------------------------+
|                                        ADMIN BACK-OFFICE PORTAL (/admin)                                      |
+---------------------------------------------------------------------------------------------------------------+
|  1. Executive Dashboard:      | Live GMV, Orders, Catalog, Customer counters; Recharts sales charts           |
|  2. Product Management:       | Full catalog table, multipart image upload, price/stock modifiers            |
|  3. Category Departments:     | Create, edit, delete categories; auto item count synchronization             |
|  4. Order Fulfillment:        | Order status state machine, full customer and shipping details modal          |
|  5. User Governance:          | Customer directory, 1-click account block/unblock, role toggle (Admin/User)   |
|  6. Coupon Engine:            | Create & toggle promotional coupons with % discounts, max caps, min spend     |
+---------------------------------------------------------------------------------------------------------------+
```

### 3.1 Executive Analytics Dashboard
* **Frontend Page:** `frontend/src/pages/admin/AdminDashboard.jsx`
* **Java Backend:** `AdminController.java` (`getDashboardStats`), `AdminService.java`
* **KPI Telemetry:**
  - Total Revenue (excluding cancelled orders).
  - Total Orders Processed.
  - Total Catalog Products.
  - Total Registered Customers.
  - Monthly Sales Revenue Bar Chart & Department Distribution Pie Chart (Recharts).
  - Low Inventory Warning Radar ($\le 10$ units remaining).
  - Recent Orders Feed with customer drilldown modal.

### 3.2 Product & Inventory Administration
* **Frontend Page:** `frontend/src/pages/admin/AdminProducts.jsx`
* **Java Backend:** `ProductController.java` (`createProduct`, `updateProduct`, `deleteProduct`), `UploadController.java`
* **Features:**
  - Product catalog table with keyword search and category filters.
  - Add & Edit product modal with multipart image upload (`/api/upload`) and URL input support.
  - Price, discount, stock, and tags modifier (Featured / Trending).
  - Product deletion with automated category item count synchronization.

### 3.3 Category Department Taxonomy
* **Frontend Page:** `frontend/src/pages/admin/AdminCategories.jsx`
* **Java Backend:** `CategoryController.java`, `CategoryService.java`
* **Features:**
  - Create, update, and delete product category departments.
  - Automatic slug generation and image banner management.

### 3.4 Order Fulfillment Management
* **Frontend Page:** `frontend/src/pages/admin/AdminOrders.jsx`
* **Java Backend:** `OrderController.java` (`getAllOrdersAdmin`, `updateOrderStatus`), `OrderService.java`
* **Features:**
  - Filter orders by fulfillment status (`All`, `Pending`, `Confirmed`, `Shipped`, `Delivered`, `Cancelled`).
  - Advance order fulfillment lifecycle and update payment status.
  - Order inspector modal displaying customer details, address snapshots, and item breakdowns.
  - Automated restock trigger when an order status is set to `Cancelled`.

### 3.5 User Account Governance & Moderation
* **Frontend Page:** `frontend/src/pages/admin/AdminUsers.jsx`
* **Java Backend:** `AdminController.java` (`getUsers`, `toggleBlockUser`, `toggleUserRole`), `AdminService.java`
* **Features:**
  - Search shopper directory by name, email, and role.
  - Instant account block/unblock toggle (blocked accounts cannot authenticate).
  - Role elevation (toggle user between `customer` and `admin`).

### 3.6 Coupon & Promotion Campaign Manager
* **Frontend Page:** `frontend/src/pages/admin/AdminCoupons.jsx`
* **Java Backend:** `AdminController.java` (`getCoupons`, `createCoupon`, `updateCoupon`, `deleteCoupon`, `toggleCouponStatus`), `AdminService.java`
* **Features:**
  - Create promotional vouchers with custom discount percentages, max discount caps, minimum order value thresholds, and expiration dates.
  - One-click active/inactive campaign toggle.
