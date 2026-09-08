# 05. High-Level Design (HLD)

---

## 1. System Context Diagram (C4 Model - Level 1)

The System Context diagram illustrates the boundaries of the ShopEase platform and its interactions with human actors and external services.

```mermaid
C4Context
    title System Context Diagram (C4 Level 1) - ShopEase E-Commerce Platform

    Person(customer, "Customer / Shopper", "Browses catalog, manages cart/wishlist, places orders, redeems loyalty points, downloads PDF invoices.")
    Person(admin, "Store Administrator", "Accesses /admin back-office, monitors sales KPIs, manages catalog, orders, coupons, and customer accounts.")

    Enterprise_Boundary(b0, "ShopEase Platform Boundary") {
        System(shopease_app, "ShopEase Full-Stack Application", "React 18 SPA Frontend + Spring Boot 3.3.3 REST API Backend + MySQL 8.0 Data Persistence Layer.")
    }

    System_Ext(razorpay, "Razorpay Payment Gateway", "Processes digital payments, creates order tokens, and verifies HMAC-SHA256 signatures.")
    System_Ext(smtp_server, "SMTP / Email Server", "Dispatches transactional order confirmation and account notification emails.")

    Rel(customer, shopease_app, "Interacts with storefront via", "HTTPS / JSON (Port 3000)")
    Rel(admin, shopease_app, "Manages back-office operations via", "HTTPS / JSON (Port 3000/admin)")
    Rel(shopease_app, razorpay, "Creates and verifies payment orders via", "HTTPS / REST API")
    Rel(shopease_app, smtp_server, "Dispatches asynchronous emails via", "SMTP")
```

---

## 2. Container Diagram (C4 Model - Level 2)

The Container Diagram illustrates the high-level technology containers comprising ShopEase.

```mermaid
C4Container
    title Container Diagram (C4 Level 2) - ShopEase Architecture

    Person(customer, "Customer", "Online Shopper")
    Person(admin, "Administrator", "Store Manager")

    Container_Boundary(frontend_tier, "Client Tier (Browser)") {
        Container(react_spa, "ShopEase Web Application", "React 18, Vite, Tailwind CSS, Lucide Icons, Recharts", "Serves Storefront & Admin Portal as a unified Single Page Application.")
    }

    Container_Boundary(backend_tier, "API Server Tier") {
        Container(spring_api, "REST API Server", "Java 21, Spring Boot 3.3.3, Spring Data JPA, Spring Security 6, OpenPDF", "Processes auth, product filtering, database-backed cart, checkout, orders, and streaming PDF invoices.")
    }

    Container_Boundary(database_tier, "Data Persistence Tier") {
        ContainerDb(relational_db, "Relational Database", "MySQL 8.0 (or H2 embedded fallback)", "Persists Users, Products, Variants, CartItems, WishlistItems, Addresses, Orders, OrderItems, Reviews, Coupons.")
    }

    System_Ext(razorpay_gw, "Razorpay Payment Gateway", "Payment API")
    System_Ext(smtp_svc, "Transactional Mail Server", "SMTP")

    Rel(customer, react_spa, "Browses and shops via", "HTTPS (Port 3000)")
    Rel(admin, react_spa, "Manages operations via", "HTTPS (Port 3000/admin)")
    Rel(react_spa, spring_api, "API calls (JWT Bearer / x-session-id)", "JSON / REST (Port 5000)")
    Rel(spring_api, relational_db, "Executes SQL queries via HikariCP connection pool", "Spring Data JPA / Hibernate")
    Rel(spring_api, razorpay_gw, "Creates order & verifies signature", "HTTPS")
    Rel(spring_api, smtp_svc, "Dispatches emails", "SMTP")
```

---

## 3. Component Architecture Breakdown

```
+---------------------------------------------------------------------------------------------------------------+
|                                       COMPONENT ARCHITECTURE BREAKDOWN                                        |
+---------------------------------------------------------------------------------------------------------------+
|                                                                                                               |
|  [ FRONTEND COMPONENTS (React 18 + Vite) ]                                                                    |
|  * Context Layer:                                                                                             |
|    - AuthContext: Manages user profile, JWT token in localStorage, login, logout, auto-cart merge             |
|    - CartContext: Synchronizes with /api/cart, controls cart drawer, shipping progress tracker               |
|    - WishlistContext: Handles wishlist state and move-to-cart operations                                      |
|    - ToastContext: Global floating notification queue                                                         |
|  * Routing & Security:                                                                                        |
|    - AppLayout (React Router DOM v6)                                                                          |
|    - ProtectedRoute: Verifies active JWT token, redirects unauthenticated requests to /login                  |
|    - AdminRoute: Verifies user role === 'admin', blocks unauthorized access                                  |
|  * Service Client Layer:                                                                                      |
|    - api.js: Central Axios instance with Bearer token injection and guest x-session-id persistence            |
|                                                                                                               |
|  [ BACKEND COMPONENTS (Java 21 + Spring Boot 3.3.3) ]                                                         |
|  * Controller Layer: 12 @RestControllers mounted on /api/*                                                    |
|  * Security Pipeline:                                                                                         |
|    - JwtAuthenticationFilter: Decodes Bearer token, loads UserPrincipal, verifies isBlocked status           |
|    - WebSecurityConfig: Stateless SecurityFilterChain with role-based URL matchers (/api/admin/**)           |
|  * Business Services:                                                                                         |
|    - AuthService, ProductService, CartService, OrderService, PaymentService, AdminService,                     |
|      CategoryService, ReviewService, WishlistService, InvoiceService (OpenPDF), DatabaseSeederService         |
|                                                                                                               |
|  [ DATA LAYER (Spring Data JPA / Hibernate) ]                                                                 |
|  * JPA Entities: User, Address, Category, Product, ProductVariant, CartItem, WishlistItem, Order,            |
|    OrderItem, Review, Coupon                                                                                  |
|  * Repositories: JpaRepository interfaces with custom JPQL queries & Specifications                          |
+---------------------------------------------------------------------------------------------------------------+
```

---

## 4. End-to-End Architectural Sequence Diagrams

### 4.1 Authentication & Guest Cart Merge Flow

```mermaid
sequenceDiagram
    autonumber
    actor User as User / Guest
    participant React as React Storefront
    participant AuthCtrl as AuthController
    participant AuthSvc as AuthService
    participant CartSvc as CartService
    participant DB as MySQL Database

    User->>React: Browses as Guest & Adds items to cart (Header: x-session-id: "guest_123")
    React->>CartSvc: POST /api/cart/add { productId: 5, quantity: 1 }
    CartSvc->>DB: INSERT INTO cart_items (session_id="guest_123", product_id=5, quantity=1)
    DB-->>CartSvc: CartItem entity saved
    CartSvc-->>React: 200 OK (Updated guest cart data)

    User->>React: Navigates to /login & Submits Credentials
    React->>AuthCtrl: POST /api/auth/login { email, password }
    AuthCtrl->>AuthSvc: loginUser(LoginRequest)
    AuthSvc->>DB: findByEmailIgnoreCase(email)
    DB-->>AuthSvc: User entity (with BCrypt password hash)
    AuthSvc->>AuthSvc: passwordEncoder.matches(rawPassword, encodedPassword)
    AuthSvc-->>AuthCtrl: AuthResponse { token: "ey...", id: 10, role: "customer" }
    AuthCtrl-->>React: 200 OK (AuthResponse payload)
    React->>React: Store token in localStorage under 'shopease_user'

    Note over React, CartSvc: Automatic Cart Merge Triggered by AuthContext
    React->>CartSvc: POST /api/cart/merge { session_id: "guest_123" } (Header: Bearer token)
    CartSvc->>DB: UPDATE cart_items SET user_id=10, session_id=NULL WHERE session_id="guest_123"
    DB-->>CartSvc: Rows updated
    CartSvc-->>React: 200 OK (Merged user cart data)
```

---

### 4.2 Multi-Step Checkout & Atomic Stock Deduction Sequence

```mermaid
sequenceDiagram
    autonumber
    actor Customer as Customer
    participant CheckoutUI as Checkout.jsx
    participant OrderCtrl as OrderController
    participant OrderSvc as OrderService
    participant DB as MySQL Database

    Customer->>CheckoutUI: Selects Address, Enters Coupon "SAVE10", Redeems 100 Points
    CheckoutUI->>OrderCtrl: POST /api/orders { items, shippingAddress, paymentMethod: "COD", couponCode: "SAVE10", redeemPoints: 100 }
    OrderCtrl->>OrderSvc: createOrder(userId, CheckoutRequest)
    
    rect rgb(240, 248, 255)
        Note over OrderSvc, DB: @Transactional Order Processing & Stock Deduction
        OrderSvc->>DB: Validate stock for each Product / ProductVariant
        OrderSvc->>DB: Deduct 100 points from User.points_balance
        OrderSvc->>DB: INSERT INTO orders (order_number="SE-20260908-A93C", order_status="Confirmed", final_amount=...)
        OrderSvc->>DB: INSERT INTO order_items (...)
        OrderSvc->>DB: UPDATE products / product_variants SET stock = stock - quantity
        OrderSvc->>DB: Award earned loyalty points to User (1 point per $1 spent)
        OrderSvc->>DB: DELETE FROM cart_items WHERE user_id = 10
    end

    OrderSvc-->>OrderCtrl: Map { order, earned_points: 125, order_number: "SE-..." }
    OrderCtrl-->>CheckoutUI: 201 Created ApiResponse<Order>
    CheckoutUI-->>Customer: Trigger Confetti Animation & Display Order Confirmation Screen
```

---

### 4.3 Streaming Vector PDF Tax Invoice Flow

```mermaid
sequenceDiagram
    autonumber
    actor Customer as Customer
    participant React as React UI
    participant OrderCtrl as OrderController
    participant InvoiceSvc as InvoiceService (OpenPDF)
    participant DB as MySQL Database

    Customer->>React: Clicks "Download Tax Invoice (PDF)"
    React->>OrderCtrl: GET /api/orders/{id}/invoice (Header: Bearer token)
    OrderCtrl->>DB: findById(orderId) with OrderItems & User
    DB-->>OrderCtrl: Order Entity Graph
    OrderCtrl->>InvoiceSvc: generateInvoicePdf(order, user)
    InvoiceSvc->>InvoiceSvc: Build OpenPDF Document with Tables, Styling & Tax Summary
    InvoiceSvc-->>OrderCtrl: byte[] pdfBytes
    OrderCtrl-->>React: Stream application/pdf (Header: Content-Disposition: attachment; filename="Invoice-SE-XXXX.pdf")
    React-->>Customer: Browser triggers download "Invoice-SE-XXXX.pdf"
```
