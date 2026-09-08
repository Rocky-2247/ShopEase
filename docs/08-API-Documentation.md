# 08. REST API Documentation & Specification

---

## 1. REST API Conventions & Global Headers

* **Base URL:** `http://localhost:5000/api` (Production: `https://api.shopease.com/api`)
* **Interactive OpenAPI 3 / Swagger UI:** `http://localhost:5000/swagger-ui.html`
* **Raw OpenAPI JSON Spec:** `http://localhost:5000/api-docs`
* **Standard Headers:**
  - `Content-Type: application/json` (or `multipart/form-data` for image uploads)
  - `Authorization: Bearer <JWT_TOKEN>` (For authenticated customer & admin requests)
  - `x-session-id: <GUEST_SESSION_UUID>` (For persistent guest database cart operations)
* **Standard ApiResponse Envelope:**
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { ... },
  "earned_points": 124,
  "url": "/uploads/example.jpg"
}
```

---

## 2. Comprehensive REST Endpoint Catalog

### 2.1 Authentication & Profile APIs (`/api/auth`)

| Method | Endpoint | Controller Method | Auth Required | Request Body / Params | Status Codes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **POST** | `/auth/register` | `AuthController.registerUser()` | Public | `{ name, email, password, phone }` | 201, 400 |
| **POST** | `/auth/login` | `AuthController.loginUser()` | Public | `{ email, password }` | 200, 401, 403 |
| **GET** | `/auth/profile` | `AuthController.getUserProfile()` | Customer / Admin | None (Bearer token) | 200, 401 |
| **PUT** | `/auth/profile` | `AuthController.updateUserProfile()`| Customer / Admin | `{ name, phone, password }` | 200, 401 |
| **POST** | `/auth/forgot-password` | `AuthController.forgotPassword()` | Public | `{ email }` | 200 |
| **POST** | `/auth/reset-password` | `AuthController.resetPassword()` | Public | `{ token, password }` | 200, 400 |
| **GET** | `/auth/addresses` | `AuthController.getUserAddresses()` | Customer / Admin | None | 200, 401 |
| **POST** | `/auth/addresses` | `AuthController.addAddress()` | Customer / Admin | `{ fullName, phone, street, city, state, pincode, isDefault }` | 201, 401 |
| **PUT** | `/auth/addresses/{id}` | `AuthController.updateAddress()` | Customer / Admin | Address fields | 200, 401, 404 |
| **DELETE**| `/auth/addresses/{id}` | `AuthController.deleteAddress()` | Customer / Admin | None | 200, 401, 404 |

---

### 2.2 Product Catalog APIs (`/api/products`)

| Method | Endpoint | Controller Method | Auth Required | Query Parameters / Body | Status Codes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GET** | `/products` | `ProductController.getProducts()` | Public | Query: `keyword, category, brand, minPrice, maxPrice, rating, inStock, sort, page, limit` | 200 |
| **GET** | `/products/featured` | `ProductController.getFeaturedProducts()` | Public | None | 200 |
| **GET** | `/products/trending` | `ProductController.getTrendingProducts()` | Public | None | 200 |
| **GET** | `/products/brands` | `ProductController.getBrands()` | Public | None | 200 |
| **GET** | `/products/{idOrSlug}` | `ProductController.getProductById()` | Public | Path: ID or Slug | 200, 404 |
| **GET** | `/products/{id}/related` | `ProductController.getRelatedProducts()` | Public | Path: ID | 200, 404 |
| **POST** | `/products` | `ProductController.createProduct()` | Admin | `{ name, description, price, discountPrice, stock, categoryId, imageUrl, videoUrl, images, isFeatured, isTrending, specifications }` | 201, 403 |
| **PUT** | `/products/{id}` | `ProductController.updateProduct()` | Admin | Product fields | 200, 403, 404 |
| **DELETE**| `/products/{id}` | `ProductController.deleteProduct()` | Admin | None | 200, 403, 404 |

---

### 2.3 Category Department APIs (`/api/categories`)

| Method | Endpoint | Controller Method | Auth Required | Request Body | Status Codes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GET** | `/categories` | `CategoryController.getCategories()` | Public | None | 200 |
| **GET** | `/categories/{idOrSlug}`| `CategoryController.getCategoryById()` | Public | Path: ID or Slug | 200, 404 |
| **POST** | `/categories` | `CategoryController.createCategory()` | Admin | `{ name, description, imageUrl }` | 201, 403 |
| **PUT** | `/categories/{id}` | `CategoryController.updateCategory()` | Admin | Category fields | 200, 403, 404 |
| **DELETE**| `/categories/{id}` | `CategoryController.deleteCategory()` | Admin | None | 200, 403, 404 |

---

### 2.4 Shopping Cart & Wishlist APIs (`/api/cart` & `/api/wishlist`)

| Method | Endpoint | Controller Method | Auth Required | Request Body / Headers | Status Codes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GET** | `/cart` | `CartController.getCart()` | Optional Auth | Bearer token OR `x-session-id` | 200 |
| **POST** | `/cart/add` | `CartController.addToCart()` | Optional Auth | `{ productId, variantId, quantity, sessionId }` | 200, 400 |
| **PUT** | `/cart/update` | `CartController.updateCartItem()` | Optional Auth | `{ id, productId, quantity }` | 200, 400 |
| **DELETE**| `/cart/remove/{id}` | `CartController.removeFromCart()` | Optional Auth | None | 200, 400 |
| **DELETE**| `/cart/clear` | `CartController.clearCart()` | Optional Auth | None | 200 |
| **POST** | `/cart/merge` | `CartController.mergeGuestCart()` | Customer | `{ sessionId, items }` | 200, 401 |
| **GET** | `/wishlist` | `WishlistController.getWishlist()` | Customer | None | 200, 401 |
| **POST** | `/wishlist/toggle` | `WishlistController.toggleWishlist()` | Customer | `{ product_id }` | 200, 401, 400 |
| **DELETE**| `/wishlist/remove/{productId}` | `WishlistController.removeFromWishlist()` | Customer | None | 200, 401 |
| **POST** | `/wishlist/move-to-cart`| `WishlistController.moveToCart()` | Customer | `{ product_id }` | 200, 401 |

---

### 2.5 Order & Payment APIs (`/api/orders` & `/api/payment`)

| Method | Endpoint | Controller Method | Auth Required | Request Body | Status Codes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **POST** | `/orders` | `OrderController.createOrder()` | Customer | `{ items, shippingAddress, paymentMethod, couponCode, redeemPoints }` | 201, 400, 401 |
| **GET** | `/orders` | `OrderController.getUserOrders()` | Customer | None | 200, 401 |
| **GET** | `/orders/admin/all` | `OrderController.getAllOrdersAdmin()` | Admin | Query: `status, page, limit` | 200, 403 |
| **GET** | `/orders/{idOrNumber}` | `OrderController.getOrderById()` | Customer / Admin | Path: ID or OrderNumber | 200, 401, 403, 404 |
| **PUT** | `/orders/{id}/cancel` | `OrderController.cancelOrder()` | Customer / Admin | None | 200, 400, 401 |
| **GET** | `/orders/{idOrNumber}/invoice` | `OrderController.downloadInvoice()` | Customer / Admin | None | 200 (`application/pdf`), 401 |
| **PUT** | `/orders/{id}/status` | `OrderController.updateOrderStatus()`| Admin | `{ status, paymentStatus }` | 200, 400, 403 |
| **POST** | `/payment/create-order` | `PaymentController.createRazorpayOrder()` | Customer | `{ amount, currency }` | 200, 400 |
| **POST** | `/payment/verify` | `PaymentController.verifyRazorpayPayment()`| Customer | `{ razorpayOrderId, razorpayPaymentId }` | 200, 400 |
| **POST** | `/payment/validate-coupon` | `PaymentController.validateCoupon()` | Optional Auth | `{ code, orderAmount }` | 200, 400 |

---

### 2.6 Admin Back-Office & Upload APIs (`/api/admin` & `/api/upload`)

| Method | Endpoint | Controller Method | Auth Required | Request Body / Params | Status Codes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GET** | `/admin/dashboard` | `AdminController.getDashboardStats()` | Admin | None | 200, 403 |
| **GET** | `/admin/users` | `AdminController.getUsers()` | Admin | Query: `search, role, page, limit` | 200, 403 |
| **PUT** | `/admin/users/{id}/toggle-block` | `AdminController.toggleBlockUser()` | Admin | None | 200, 400, 403 |
| **PUT** | `/admin/users/{id}/toggle-role` | `AdminController.toggleUserRole()` | Admin | None | 200, 400, 403 |
| **GET** | `/admin/coupons` | `AdminController.getCoupons()` | Admin | None | 200, 403 |
| **POST** | `/admin/coupons` | `AdminController.createCoupon()` | Admin | `{ code, discountPercentage, maxDiscount, minOrderValue, expiresAt }` | 201, 400, 403 |
| **PUT** | `/admin/coupons/{id}` | `AdminController.updateCoupon()` | Admin | Coupon fields | 200, 400, 403 |
| **DELETE**| `/admin/coupons/{id}` | `AdminController.deleteCoupon()` | Admin | None | 200, 403, 404 |
| **PUT** | `/admin/coupons/{id}/toggle` | `AdminController.toggleCouponStatus()` | Admin | None | 200, 403, 404 |
| **POST** | `/upload` | `UploadController.uploadFile()` | Authenticated | `multipart/form-data` (`image` or `file`) | 200, 400 |
| **POST** | `/upload/multiple` | `UploadController.uploadMultipleFiles()` | Authenticated | `multipart/form-data` (`images` or `files`) | 200, 400 |

---

### 2.7 Reviews, Health & Webhook APIs

| Method | Endpoint | Controller Method | Auth Required | Request Body | Status Codes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GET** | `/reviews/product/{id}` | `ReviewController.getProductReviews()` | Public | None | 200 |
| **POST** | `/reviews/product/{id}` | `ReviewController.addProductReview()` | Customer | `{ rating, comment, imageUrl }` | 201, 400, 401 |
| **GET** | `/api/health` | `HealthController.healthCheck()` | Public | None | 200 |
| **GET** | `/` | `HealthController.root()` | Public | None | 200 |
| **POST** | `/api/webhooks/payment` | `WebhookController.handleRazorpayWebhook()` | Public | Webhook payload | 200 |

---

## 3. Sample JSON Request & Response Payloads

### 3.1 Checkout Request & Response (`POST /api/orders`)

* **Request Body:**
```json
{
  "items": [
    {
      "productId": 1,
      "variantId": null,
      "quantity": 1
    }
  ],
  "shippingAddress": {
    "fullName": "Alex Demo Customer",
    "phone": "+1-555-0199",
    "street": "742 Evergreen Terrace",
    "city": "Springfield",
    "state": "IL",
    "pincode": "62704"
  },
  "paymentMethod": "COD",
  "couponCode": "SAVE10",
  "redeemPoints": 100
}
```

* **Success Response (`201 Created`):**
```json
{
  "success": true,
  "message": "Order #SE-20260908-A93C placed successfully! You earned 1069 ShopPoints.",
  "data": {
    "id": 42,
    "orderNumber": "SE-20260908-A93C",
    "userId": 2,
    "totalAmount": 1199.99,
    "discountAmount": 130.00,
    "shippingCharge": 0.00,
    "finalAmount": 1069.99,
    "couponCode": "SAVE10",
    "paymentMethod": "COD",
    "paymentStatus": "Pending",
    "orderStatus": "Confirmed",
    "deliveryDate": "2026-09-13T10:30:00",
    "items": [
      {
        "id": 85,
        "orderId": 42,
        "productId": 1,
        "productNameSnapshot": "Samsung Galaxy S24 Ultra (AI Titanium)",
        "productImageSnapshot": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
        "price": 1199.99,
        "quantity": 1
      }
    ]
  },
  "earned_points": 1069
}
```
