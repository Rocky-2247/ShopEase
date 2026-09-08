# 12. Strategic Roadmap & Future Enhancements

---

## 1. Evolution Roadmap Overview

```mermaid
gantt
    title ShopEase Platform Strategic Roadmap
    dateFormat  YYYY-Q
    section Phase 1 (Current Core)
    Java 21 Spring Boot + React Full-Stack Core Launch :done, p1, 2026-Q1, 2026-Q2
    OpenPDF Invoices & Admin Backoffice Hub             :done, p2, 2026-Q2, 2026-Q2
    section Phase 2 (Hardening & Scale)
    Redis Distributed Caching Tier (Spring Cache)       :active, p3, 2026-Q3, 2026-Q3
    OAuth2 Social Authentication (Google / GitHub)      : p4, 2026-Q3, 2026-Q4
    WebSockets / SSE for Real-Time Order Timeline       : p5, 2026-Q4, 2026-Q4
    section Phase 3 (Ecosystem Expansion)
    Elasticsearch / OpenSearch Catalog Search Engine    : p6, 2027-Q1, 2027-Q2
    Multi-Vendor Marketplace & Seller Subscriptions     : p7, 2027-Q2, 2027-Q3
    Twilio SMS & WhatsApp Order Notification Gateway    : p8, 2027-Q3, 2027-Q4
```

---

## 2. Key Enhancement Initiatives

### 2.1 Redis Distributed Caching Tier (`spring-boot-starter-data-redis`)
* **Product Catalog Acceleration:** Cache high-frequency endpoints (`GET /api/products`, `GET /api/products/featured`) with `@Cacheable(value = "products")` and automated invalidation via `@CacheEvict` when an admin adds or edits a product.
* **Token Blacklisting:** Provide instant revocation of active JWT tokens in Redis cache when an admin blocks a customer account.

### 2.2 OAuth2 Social Authentication (`spring-boot-starter-oauth2-client`)
* Integrate **Google Identity Services** and **GitHub OAuth2** to provide frictionless 1-click registration and sign-in for consumers directly from `Login.jsx` and `Register.jsx`.

### 2.3 Real-Time WebSockets / SSE for Order Fulfillment Tracking
* Implement **Spring WebSocket (`SimpMessagingTemplate`)** or Server-Sent Events (SSE) to push live status updates to `OrderDetails.jsx` as soon as a store manager advances order fulfillment from `Confirmed` $\rightarrow$ `Shipped` $\rightarrow$ `Delivered`.

### 2.4 Typo-Tolerant Elasticsearch / OpenSearch Integration
* Integrate Spring Data Elasticsearch to enable fuzzy matching (e.g. searching "smarthphone" matches "Samsung Galaxy"), phonetic matching, and instant autocomplete suggestions.

### 2.5 Multi-Vendor Marketplace Platform
* Introduce `Vendor` models, seller registration workflows, seller-specific inventory management, and automated commission splitting.
