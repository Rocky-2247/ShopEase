# 02. System Requirements & Domain Constraints

---

## 1. Functional Requirements (FR) Traceability Matrix

The functional requirements below are mapped directly to the active source code in `Ecommerce/backend` (Java Spring Boot / Node.js) and `Ecommerce/frontend` (React 18).

### 1.1 Authentication & User Account Management (FR-AUTH)

| Req ID | Requirement Description | Implementation Status | Java Backend Source Reference | Frontend Source Reference |
| :--- | :--- | :--- | :--- | :--- |
| **FR-AUTH-01** | User registration with name, email, password, and phone. Passwords must be hashed using BCrypt (10 rounds). | **Fully Implemented** | `com.shopease.controller.AuthController` (`registerUser`), `AuthService.java`, `User.java` | `pages/Register.jsx`, `services/api.js` (`authAPI.register`) |
| **FR-AUTH-02** | User authentication returning signed JWT token. Blocks deactivated/blocked users from signing in. | **Fully Implemented** | `AuthController.java` (`loginUser`), `AuthService.java`, `JwtTokenProvider.java` | `pages/Login.jsx`, `context/AuthContext.jsx` |
| **FR-AUTH-03** | User profile retrieval and modification (name, phone, password). | **Fully Implemented** | `AuthController.java` (`getUserProfile`, `updateUserProfile`), `AuthService.java` | `pages/Profile.jsx`, `services/api.js` (`authAPI.updateProfile`) |
| **FR-AUTH-04** | Forgot password flow generating signed reset token, and reset password endpoint. | **Fully Implemented** | `AuthController.java` (`forgotPassword`, `resetPassword`), `AuthService.java` | `pages/ForgotPassword.jsx`, `pages/ResetPassword.jsx` |
| **FR-AUTH-05** | User address book CRUD (Add, Edit, Delete, and Set Default Shipping Address). | **Fully Implemented** | `AuthController.java` (`getUserAddresses`, `addAddress`, `updateAddress`, `deleteAddress`), `Address.java` | `pages/Profile.jsx`, `services/api.js` (`authAPI.addAddress`) |
| **FR-AUTH-06** | Welcome reward points (100 ShopPoints = $10.00 value) credited automatically upon account creation. | **Fully Implemented** | `User.java` (`pointsBalance = 100`), `DatabaseSeederService.java` | `context/AuthContext.jsx`, `pages/Checkout.jsx` |

---

### 1.2 Product Discovery & Catalog (FR-PROD)

| Req ID | Requirement Description | Implementation Status | Java Backend Source Reference | Frontend Source Reference |
| :--- | :--- | :--- | :--- | :--- |
| **FR-PROD-01** | Multi-facet catalog querying: keyword search (name/desc), category (slug/ID), brand, price slider, rating, and in-stock filter. | **Fully Implemented** | `com.shopease.controller.ProductController` (`getProducts`), `ProductService.java` (JPA Specification) | `pages/Products.jsx`, `services/api.js` (`productsAPI.getAll`) |
| **FR-PROD-02** | Dynamic catalog sorting (`price-asc`, `price-desc`, `rating-desc`, `popularity`, `newest`). | **Fully Implemented** | `ProductService.java` (Spring Data `Sort`), `ProductController.java` | `pages/Products.jsx` |
| **FR-PROD-03** | Product Detail Page (PDP) with multi-image thumbnail switcher, video showcase (`videoUrl`), specifications, and reviews. | **Fully Implemented** | `ProductController.java` (`getProductById`), `ProductService.java`, `Product.java` | `pages/ProductDetails.jsx`, `services/api.js` (`productsAPI.getById`) |
| **FR-PROD-04** | SKU variant selection (Size, Color, SKU, Variant-specific Price, and Stock). | **Fully Implemented** | `ProductVariant.java`, `ProductVariantRepository.java`, `Product.java` | `pages/ProductDetails.jsx` |
| **FR-PROD-05** | Featured & Trending product collections for homepage showcase. | **Fully Implemented** | `ProductController.java` (`getFeaturedProducts`, `getTrendingProducts`), `ProductService.java` | `pages/Home.jsx`, `components/product/ProductCard.jsx` |
| **FR-PROD-06** | Commercial brand directory showcase and brand filter. | **Fully Implemented** | `ProductController.java` (`getBrands`), `ProductService.java` (`getBrandsCatalog`) | `components/common/BrandMarquee.jsx`, `AllBrandsShowcase.jsx` |
| **FR-PROD-07** | Related products carousel based on category proximity. | **Fully Implemented** | `ProductController.java` (`getRelatedProducts`), `ProductService.java` | `pages/ProductDetails.jsx` |

---

### 1.3 Shopping Cart & Wishlist (FR-CART / FR-WISH)

| Req ID | Requirement Description | Implementation Status | Java Backend Source Reference | Frontend Source Reference |
| :--- | :--- | :--- | :--- | :--- |
| **FR-CART-01** | Database-backed shopping cart supporting authenticated users (`userId`) and anonymous guests (`x-session-id`). | **Fully Implemented** | `com.shopease.controller.CartController` (`getCart`, `addToCart`), `CartService.java`, `CartItem.java` | `context/CartContext.jsx`, `components/cart/CartDrawer.jsx`, `services/api.js` |
| **FR-CART-02** | Cart item quantity modification, live stock validation, and item removal. | **Fully Implemented** | `CartController.java` (`updateCartItem`, `removeFromCart`, `clearCart`), `CartService.java` | `context/CartContext.jsx`, `pages/Cart.jsx` |
| **FR-CART-03** | Automatic guest-to-user cart merging upon login. | **Fully Implemented** | `CartController.java` (`mergeGuestCart`), `CartService.java` | `context/AuthContext.jsx`, `services/api.js` (`cartAPI.mergeCart`) |
| **FR-WISH-01** | Customer wishlist management (Toggle in/out of wishlist, remove, and move item to cart). | **Fully Implemented** | `com.shopease.controller.WishlistController`, `WishlistService.java`, `WishlistItem.java` | `context/WishlistContext.jsx`, `pages/Wishlist.jsx` |

---

### 1.4 Checkout, Orders & Invoicing (FR-ORD / FR-PAY)

| Req ID | Requirement Description | Implementation Status | Java Backend Source Reference | Frontend Source Reference |
| :--- | :--- | :--- | :--- | :--- |
| **FR-ORD-01** | Multi-step checkout wizard with address selection, coupon application, and loyalty points redemption. | **Fully Implemented** | `com.shopease.controller.OrderController` (`createOrder`), `OrderService.java`, `OrderDtos.java` | `pages/Checkout.jsx`, `services/api.js` (`ordersAPI.create`) |
| **FR-ORD-02** | Atomic stock deduction across `Product` and `ProductVariant` entities upon order placement. | **Fully Implemented** | `OrderService.java` (`createOrder`, lines 150-175, `@Transactional`) | `pages/Checkout.jsx` |
| **FR-ORD-03** | Shipping calculation: Free shipping for orders $\ge \$100.00$, otherwise flat $\$10.00$ shipping fee. | **Fully Implemented** | `OrderService.java` (`createOrder`, line 118) | `context/CartContext.jsx`, `pages/Checkout.jsx` |
| **FR-ORD-04** | Loyalty points reward: 1 ShopPoint awarded per $\$1.00$ spent on final order amount. | **Fully Implemented** | `OrderService.java` (`createOrder`, lines 177-181) | `pages/OrderConfirmation.jsx` |
| **FR-ORD-05** | Real-time coupon code validation with percentage calculation, minimum spend, and max discount cap. | **Fully Implemented** | `com.shopease.controller.PaymentController` (`validateCoupon`), `PaymentService.java`, `Coupon.java` | `pages/Checkout.jsx`, `services/api.js` (`paymentAPI.validateCoupon`) |
| **FR-ORD-06** | Razorpay payment integration with test order creation, client popup, and signature verification. | **Fully Implemented** | `PaymentController.java` (`createRazorpayOrder`, `verifyRazorpayPayment`), `PaymentService.java` | `pages/Checkout.jsx`, `services/api.js` (`paymentAPI.createRazorpayOrder`) |
| **FR-ORD-07** | Order fulfillment tracking timeline (`Pending` $\rightarrow$ `Confirmed` $\rightarrow$ `Shipped` $\rightarrow$ `Delivered` / `Cancelled`). | **Fully Implemented** | `Order.java` (`orderStatus`), `OrderController.java` (`getOrderById`), `OrderService.java` | `pages/OrderHistory.jsx`, `pages/OrderDetails.jsx` |
| **FR-ORD-08** | Order cancellation with automatic stock replenishment in database. | **Fully Implemented** | `OrderController.java` (`cancelOrder`), `OrderService.java` (`cancelOrder`, `@Transactional`) | `pages/OrderDetails.jsx`, `services/api.js` (`ordersAPI.cancel`) |
| **FR-ORD-09** | On-the-fly streaming of official tax invoice PDF. | **Fully Implemented** | `OrderController.java` (`downloadInvoice`), `InvoiceService.java` (OpenPDF / PDFKit) | `services/api.js` (`downloadInvoiceFile`), `pages/OrderDetails.jsx` |

---

### 1.5 Admin Back-Office Governance (FR-ADM)

| Req ID | Requirement Description | Implementation Status | Java Backend Source Reference | Frontend Source Reference |
| :--- | :--- | :--- | :--- | :--- |
| **FR-ADM-01** | Executive analytics dashboard with live KPI counters (Revenue, Orders, SKUs, Customers), Recharts sales graphs, and low-stock warnings ($\le 10$ items). | **Fully Implemented** | `com.shopease.controller.AdminController` (`getDashboardStats`), `AdminService.java` | `pages/admin/AdminDashboard.jsx`, `services/api.js` (`adminAPI.getDashboardStats`) |
| **FR-ADM-02** | Product administration (Create, Edit, Delete) with multipart image upload (`/api/upload`) and tag toggles. | **Fully Implemented** | `ProductController.java` (`createProduct`, `updateProduct`, `deleteProduct`), `UploadController.java` | `pages/admin/AdminProducts.jsx`, `services/api.js` (`productsAPI.create`) |
| **FR-ADM-03** | Category Department management (Create, Update, Delete) with item count synchronization. | **Fully Implemented** | `com.shopease.controller.CategoryController`, `CategoryService.java`, `Category.java` | `pages/admin/AdminCategories.jsx`, `services/api.js` (`categoriesAPI.create`) |
| **FR-ADM-04** | Order fulfillment hub with status transitions (`Confirmed` $\rightarrow$ `Shipped` $\rightarrow$ `Delivered`) and order inspector modal. | **Fully Implemented** | `OrderController.java` (`getAllOrdersAdmin`, `updateOrderStatus`), `OrderService.java` | `pages/admin/AdminOrders.jsx`, `services/api.js` (`ordersAPI.updateStatus`) |
| **FR-ADM-05** | User directory with search, account blocking/unblocking, and role toggle (`customer` $\leftrightarrow$ `admin`). | **Fully Implemented** | `AdminController.java` (`getUsers`, `toggleBlockUser`, `toggleUserRole`), `AdminService.java` | `pages/admin/AdminUsers.jsx`, `services/api.js` (`adminAPI.toggleBlockUser`) |
| **FR-ADM-06** | Coupon & Promotion campaign management (Create, Update, Delete, Toggle Active status). | **Fully Implemented** | `AdminController.java` (`getCoupons`, `createCoupon`, `updateCoupon`, `deleteCoupon`, `toggleCouponStatus`), `AdminService.java` | `pages/admin/AdminCoupons.jsx`, `services/api.js` (`adminAPI.createCoupon`) |

---

## 2. Non-Functional Requirements (NFR)

```
+---------------------------------------------------------------------------------------------------------------+
|                                      NON-FUNCTIONAL SPECIFICATIONS & SLAS                                     |
+---------------------------------------------------------------------------------------------------------------+
| [Performance]     | * Product search & catalog query response time < 80ms (p95) using Spring Data JPA.        |
|                   | * On-the-fly streaming PDF invoice generation < 200ms using OpenPDF ByteArrayOutputStream.|
|                   | * HikariCP connection pool with sub-millisecond connection checkout.                      |
+-------------------+-------------------------------------------------------------------------------------------+
| [Portability]     | * Zero-config local execution via embedded H2 database (dev profile) or SQLite.           |
|                   | * Production MySQL 8.0 support with HikariCP connection pooling and UTC timezone.         |
+-------------------+-------------------------------------------------------------------------------------------+
| [Security]        | * BCrypt password hashing (Cost Factor 10) for irreversible credential storage.           |
|                   | * Stateless JWT authentication with JJWT 0.12.6 and Spring Security 6 filter chain.      |
|                   | * Role-based access control restricting /api/admin/** to users with ROLE_ADMIN.           |
|                   | * Multipart file upload sanitization and file extension whitelisting in UploadController. |
+-------------------+-------------------------------------------------------------------------------------------+
| [Resilience]      | * All order creation and cancellation flows execute inside @Transactional boundaries.    |
|                   | * Automatic inventory replenishment if an order is cancelled before shipping.             |
|                   | * Comprehensive exception handling via standard ApiResponse envelope structure.          |
+---------------------------------------------------------------------------------------------------------------+
```

---

## 3. Real Business Rules & Computational Constraints

1. **Order Number Generation:** Order numbers follow format `SE-YYYYMMDD-XXXX` (e.g., `SE-20260908-A93C`).
2. **Loyalty Points Valuation:** 100 ShopPoints = $\$10.00$ discount ($0.10 per point). Points discount cannot exceed the net subtotal.
3. **Loyalty Reward Accumulation:** Customers earn 1 ShopPoint per whole $\$1.00$ of `final_amount` paid.
4. **Shipping Fee Threshold:** Orders with `netSubtotal >= $100.00` receive Free Express Shipping ($0.00). Orders below $\$100.00$ incur a flat $\$10.00$ shipping charge.
5. **Coupon Discount Computation:**
   $$\text{Discount} = \min\left(\frac{\text{Subtotal} \times \text{Discount Percentage}}{100}, \text{Max Discount Cap}\right)$$
   Requires $\text{Subtotal} \ge \text{Min Order Value}$.
6. **Order Cancellation Eligibility:** Orders in `Pending` or `Confirmed` status can be cancelled by the customer or admin, triggering automatic inventory restocking. Orders already in `Shipped` or `Delivered` status cannot be cancelled directly.
7. **Account Blocking Invariant:** An administrator cannot block their own account or remove their own admin role.

---

## 4. User Stories & Acceptance Criteria (Gherkin Format)

### User Story 1: Customer Multi-Step Checkout with Coupon & Points
```gherkin
Feature: Customer Multi-Step Order Placement
  As an authenticated shopper
  I want to apply a promo coupon and redeem my loyalty points during checkout
  So that I can purchase products at a discount and receive an instant order confirmation

  Scenario: Successful checkout with coupon SAVE10 and 100 loyalty points
    Given I am authenticated with role "customer" and have 100 ShopPoints
    And I have items in my cart totaling $150.00
    When I enter coupon code "SAVE10"
    Then the system applies a 10% discount (-$15.00)
    When I select to redeem 100 ShopPoints
    Then the system deducts $10.00 from the subtotal
    And sets shipping charge to $0.00 (since net subtotal is $125.00 >= $100.00)
    And computes final amount as $125.00
    When I confirm order placement with payment method "COD"
    Then an Order record is created with status "Confirmed"
    And product stock quantities are decremented in the database
    And my database cart is emptied
    And my account balance is awarded 125 new ShopPoints
```

### User Story 2: Admin Order Lifecycle Status Transition
```gherkin
Feature: Admin Order Status Transition
  As a store administrator
  I want to advance the fulfillment status of an order from "Confirmed" to "Shipped"
  So that the customer can track their delivery timeline

  Scenario: Admin updates order lifecycle stage
    Given I am authenticated with role "admin"
    When I send PUT "/api/orders/101/status" with status "Shipped"
    Then the system updates Order #101 order_status to "Shipped"
    And returns HTTP 200 OK with the updated order entity
```
