# 11. Testing Strategy & Quality Assurance

---

## 1. Automated Test Pipeline & Execution

ShopEase supports multi-tier automated testing across both backend unit/integration suites and an automated E2E integration runner:

```
+---------------------------------------------------------------------------------------------------------------+
|                                         SHOPEASE TEST EXECUTION MATRIX                                        |
+---------------------------------------------------------------------------------------------------------------+
|  1. Spring Boot Test Suite:    | mvnw test -> JUnit 5, MockMvc, Spring Security Test, Data JPA Mocking        |
|  2. Automated E2E Runner:      | node backend/test_e2e.js -> Validates complete live REST API transaction loop |
|  3. Frontend Unit & UI Tests:  | npm run test -> Vitest + React Testing Library (Contexts & Pages)             |
+---------------------------------------------------------------------------------------------------------------+
```

### 1.1 Running the Backend JUnit 5 Test Suite
```bash
cd "Ecommerce/backend"
mvnw test
```

### 1.2 Running the Automated E2E Integration Suite
```bash
cd "Ecommerce/backend"
node test_e2e.js
```

```
+-----------------------------------------------------------------------------------------------+
|                             EXISTING E2E TEST WORKFLOW (test_e2e.js)                          |
+-----------------------------------------------------------------------------------------------+
|  1. System Health Check:       | GET /api/health -> Verifies status: 'UP' / 'online'          |
|  2. Authentication Test:       | POST /api/auth/login -> Verifies JWT issuance & role          |
|  3. Catalog Discovery Test:    | GET /api/products -> Verifies multi-facet filtering & limits |
|  4. Database Cart Flow:        | POST /api/cart/add -> Verifies item addition & session sync  |
|  5. Multi-Step Checkout:       | POST /api/orders -> Verifies stock deduction & points reward |
|  6. PDF Tax Invoice Streaming: | GET /api/orders/{id}/invoice -> Verifies application/pdf byte|
|  7. Admin Dashboard KPIs:      | GET /api/admin/dashboard -> Verifies metrics and charts data |
+-----------------------------------------------------------------------------------------------+
```

---

## 2. Testing Pyramid & Multi-Tier Strategy

```
                       / \
                      / E2E \           Playwright / test_e2e.js (Live Checkout & Invoicing Loop)
                     /-------\
                    /   API   \         Spring MockMvc / REST Assured (All 12 Controllers & Endpoints)
                   /-----------\
                  /  Component  \       Vitest + React Testing Library (AuthContext, CartDrawer, Checkout)
                 /---------------\
                /   Unit Tests    \     JUnit 5 + Mockito (OrderService, ProductService, JJWT Token Provider)
               /-------------------\
```

---

## 3. Core Test Matrix & Verification Scenarios

| Test ID | Module | Precondition | Execution Steps | Expected Outcome |
| :--- | :--- | :--- | :--- | :--- |
| **TC-AUTH-01** | Auth | User email not in DB | POST `/api/auth/register` with `{ name, email, password }` | HTTP 201 Created; BCrypt hash stored in DB; JWT token returned; 100 bonus ShopPoints credited. |
| **TC-AUTH-02** | Auth | User account blocked (`is_blocked = true`) | POST `/api/auth/login` with correct password | HTTP 403 Forbidden; message: "Account is blocked. Please contact customer support." |
| **TC-AUTH-03** | Auth | Invalid credentials provided | POST `/api/auth/login` with wrong password | HTTP 401 Unauthorized; message: "Invalid email or password". |
| **TC-CAT-01** | Catalog | 6 categories and products seeded | GET `/api/products?minPrice=100&maxPrice=1200&sort=price-asc` | HTTP 200 OK; products returned ordered by price ascending within price boundaries. |
| **TC-CART-01** | Cart | Header `x-session-id: guest_test_123` | POST `/api/cart/add` with `{ productId: 1, quantity: 2 }` | HTTP 200 OK; CartItem persisted in DB with `session_id = "guest_test_123"`. |
| **TC-CART-02** | Cart | Guest logs into account ID 2 | POST `/api/cart/merge` with `{ sessionId: "guest_test_123" }` | HTTP 200 OK; guest cart items migrated to `userId = 2`. |
| **TC-ORD-01** | Order | Product ID 1 stock = 25 | POST `/api/orders` requesting quantity = 2 | HTTP 201 Created; Product stock decremented to 23; Order created in `Confirmed` status. |
| **TC-ORD-02** | Order | Product ID 1 stock = 1 | POST `/api/orders` requesting quantity = 5 | HTTP 400 Bad Request; message: "Insufficient stock". |
| **TC-ORD-03** | Order | Order in `Confirmed` status | PUT `/api/orders/{id}/cancel` | HTTP 200 OK; order status set to `Cancelled`; product stock incremented back. |
| **TC-PDF-01** | Invoice | Valid order exists | GET `/api/orders/{id}/invoice` with Bearer token | HTTP 200 OK; `Content-Type: application/pdf`; valid binary vector PDF stream returned. |
| **TC-ADM-01** | Admin | User has role `customer` | GET `/api/admin/dashboard` | HTTP 403 Forbidden; Spring Security blocks non-admin access. |
| **TC-ADM-02** | Admin | User has role `admin` | GET `/api/admin/dashboard` | HTTP 200 OK with `totalRevenue`, `totalOrders`, `lowStockProducts`, and `monthlySales`. |
