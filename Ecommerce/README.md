# 🛍️ ShopEase – Enterprise Full Stack E-Commerce Platform

ShopEase is an enterprise full-stack E-Commerce web application built with **React 18 (Vite + Tailwind CSS)** and **Java 21 + Spring Boot 3.3.3 (REST APIs + Spring Data JPA + Spring Security 6 + JJWT + OpenPDF Vector Invoices + MySQL 8.0 / H2)** *(with a companion Node.js / Express backend option)*.

---

## 🌟 Key Features

### 👤 Customer Features
1. **Authentication & Profile**:
   - Register, Login, stateless JWT session management with token persistence in `localStorage`.
   - Profile management (name, phone, password update).
   - Address book manager (Add, Edit, Delete, Set Default Shipping Destination).
   - One-click demo credentials autofill.
2. **Interactive Catalog & Multi-Facet Search**:
   - Live search across product names & descriptions.
   - Multi-facet filtering by category department, price range slider ($10 - $500), star ratings (4★, 3★, 2★), brand showcase, and in-stock only.
   - Dynamic sorting (Newest, Most Popular, Price: Low to High, Price: High to Low, Rating).
   - Pagination controls.
3. **Product Showcase & Reviews**:
   - Multi-image gallery with interactive thumbnail switcher.
   - Embedded video player support (`videoUrl`).
   - Stock badges & low-stock alerts ($\le 10$ items).
   - Interactive 5-star customer review system with instantaneous average rating recalculation.
   - Related products carousel.
4. **Shopping Cart & Wishlist**:
   - Quick slide-over Cart Drawer with real-time quantity modifiers and stock boundary enforcement.
   - Free Express Shipping progress tracker (Unlocked at $100).
   - Coupon voucher engine (`SAVE10` for 10% off, `WELCOME20` for 20% off, `FREESHIP` for 5% off).
   - Wishlist toggle and move-to-cart functionality.
5. **Multi-Step Checkout & Loyalty Engine**:
   - **Step 1**: Shipping Destination (Select existing address or add new).
   - **Step 2**: Order Summary, coupon discounts, and ShopPoints loyalty redemption (100 points = $10).
   - **Step 3**: Payment selection:
     - **Razorpay Test Mode** (interactive test checkout popup).
     - **Cash on Delivery (COD)**.
     - **Instant UPI Simulator** (GPay / PhonePe / Paytm).
     - **Credit / Debit Cards**.
   - **Step 4**: Order confirmation with celebratory confetti animation (`canvas-confetti`).
6. **Order Management & Invoicing**:
   - Order history with live order status badges.
   - Interactive 4-stage fulfillment timeline (`Pending` $\rightarrow$ `Confirmed` $\rightarrow$ `Shipped` $\rightarrow$ `Delivered`).
   - Order cancellation flow with automatic inventory replenishment.
   - Downloadable official Tax Invoice (PDF) generated on-the-fly via **OpenPDF** (`InvoiceService.java`).

---

### 🛡️ Admin Dashboard (`/admin`)
1. **Executive Overview**:
   - Live KPI statistic cards (Total Revenue, Orders Processed, Catalog SKUs, Registered Customers).
   - Monthly sales revenue bar chart & Department distribution pie chart (Recharts).
   - Low inventory warning radar ($\le 10$ items remaining).
   - Recent customer orders table with instant inspection modal.
2. **Product Management (`/admin/products`)**:
   - Complete product catalog table with search & category filters.
   - Add & Edit product modal with multipart image upload & image URL support.
   - Price, discount, stock, and tags modifier (Featured / Trending).
   - Product deletion with category count synchronization.
3. **Category Management (`/admin/categories`)**:
   - Add, edit, and delete category departments with banner image uploads.
4. **Order Management (`/admin/orders`)**:
   - View all customer orders with status filters.
   - Advance order fulfillment stages (`Pending`, `Confirmed`, `Shipped`, `Delivered`, `Cancelled`).
   - Order inspector modal with full customer and shipping snapshot details.
5. **User Directory (`/admin/users`)**:
   - Search & filter registered shoppers.
   - One-click account block/unblock moderation.
   - Toggle customer role between `customer` and `admin`.
6. **Coupon Management (`/admin/coupons`)**:
   - Create, edit, delete, and toggle promotional discount vouchers.

---

## 💻 Tech Stack

* **Frontend**: React 18, Vite 5, React Router DOM v6, Tailwind CSS, Lucide React Icons, Axios, Recharts, Canvas Confetti.
* **Backend**: Java 21, Spring Boot 3.3.3, Spring Data JPA, Hibernate, Spring Security 6, JJWT 0.12.6, OpenPDF (LibrePDF), SpringDoc OpenAPI 3 / Swagger UI, HikariCP. *(Companion Node.js / Express backend with Sequelize ORM and PDFKit also included).*
* **Database**: MySQL 8.0 (with automatic zero-config embedded H2 Database / SQLite fallback for instant out-of-the-box local testing).

---

## 🚀 How to Run the Application

### Option A: Single-Command Launch (Recommended)
```bash
cd "Ecommerce"
npm install
npm run dev
```
* **Frontend Web App:** `http://localhost:3000`
* **Backend REST API:** `http://localhost:5000`
* **Swagger OpenAPI Docs:** `http://localhost:5000/swagger-ui.html`

---

### Option B: Standalone Startup

#### 1. Backend Server Setup (Spring Boot)
```bash
cd backend
mvnw.cmd spring-boot:run
```
*(On Linux/macOS: `./mvnw spring-boot:run`)*

The Spring Boot REST API server runs at: **`http://localhost:5000`**
Swagger API Docs available at: **`http://localhost:5000/swagger-ui.html`**

> **Database Configuration**:
> By default, the backend connects to an embedded H2 database (`spring.profiles.active=dev`) and automatically seeds realistic products, categories, demo users, and coupons on startup.
> To connect to MySQL 8.0 in production, update `backend/src/main/resources/application-mysql.properties` and run with:
> `mvnw.cmd spring-boot:run -Dspring-boot.run.profiles=mysql`

#### 2. Frontend Web App Setup
Open a new terminal:
```bash
cd frontend
npm install
npm run dev
```
The frontend web application runs at: **`http://localhost:3000`**

---

## 🔑 Demo Login Credentials

| Role | Email | Password |
| :--- | :--- | :--- |
| **Administrator** | `admin@shopease.com` | `Admin@123` |
| **Demo Customer** | `user@shopease.com` | `User@123` |

*(Quick-fill buttons are provided on the Login page for one-click authentication)*

---

## 🎟️ Demo Promo Codes

* **`SAVE10`**: 10% instant discount on all orders.
* **`WELCOME20`**: 20% discount on orders over $100.
* **`FREESHIP`**: 5% discount + free delivery.
