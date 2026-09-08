# ShopEase E-Commerce Platform: Technical Documentation Suite

Welcome to the comprehensive technical documentation for **ShopEase**—an enterprise full-stack digital commerce platform engineered with **React 18 (Vite + Tailwind CSS)** and **Java 21 + Spring Boot 3.3.3 (Spring Data JPA + Spring Security 6 + JJWT + OpenPDF + MySQL 8.0 / H2)**.

---

## 📚 Documentation Chapter Index

| Chapter | Document | Scope & Focus Areas |
| :--- | :--- | :--- |
| **01** | [01-Project-Overview.md](01-Project-Overview.md) | Executive summary, dual-tier platform topology, business objectives, user personas, roles (`customer`, `admin`), end-to-end workflow, and scope. |
| **02** | [02-Requirements.md](02-Requirements.md) | Functional (FR-AUTH, FR-PROD, FR-CART, FR-ORD, FR-ADM) & Non-Functional specifications, domain rules, calculation formulas, and Gherkin user stories. |
| **03** | [03-Features.md](03-Features.md) | Customer Storefront & Admin Back-Office feature inventory, PDP gallery/video, database cart with `x-session-id`, 4-step checkout, and OpenPDF invoices. |
| **04** | [04-System-Architecture.md](04-System-Architecture.md) | Decoupled React SPA + Spring Boot 3.3.3 3-Tier Layered Monolith architecture, Axios client interceptors, Spring MVC flow, and global exception handling. |
| **05** | [05-HLD.md](05-HLD.md) | High-Level Design, C4 Level 1 & 2 diagrams, component architecture, sequence flows (Auth & Cart Merge, Checkout & Atomic Stock Deduction, Invoicing). |
| **06** | [06-LLD.md](06-LLD.md) | Detailed Spring Boot class designs, 12 Controllers, 11 Services, 11 JPA Repositories, 11 Entities, 5 DTOs, Spring Security filter chain, and React component tree. |
| **07** | [07-Database-Design.md](07-Database-Design.md) | Entity Relationship Diagram (ERD), full MySQL 8.0 DDL scripts, constraints, JPA entity mappings, and data dictionary. |
| **08** | [08-API-Documentation.md](08-API-Documentation.md) | Complete 32+ REST API endpoint catalog, OpenAPI schemas, query parameters, request/response JSON payloads, and status codes. |
| **09** | [09-Security-Design.md](09-Security-Design.md) | Spring Security 6 + JJWT 0.12.6 auth lifecycle, BCrypt password hashing, RBAC, upload file filters, security audit, and hardening guidelines. |
| **10** | [10-Deployment-Architecture.md](10-Deployment-Architecture.md) | Single-command local launch (`npm run dev`), Spring profiles (`dev` with H2 vs `mysql` with MySQL), multi-stage Dockerfiles, Docker Compose, and Nginx reverse proxy. |
| **11** | [11-Testing-Strategy.md](11-Testing-Strategy.md) | Automated backend JUnit 5 tests, live E2E integration runner (`test_e2e.js`), testing pyramid, and comprehensive test matrix. |
| **12** | [12-Future-Enhancements.md](12-Future-Enhancements.md) | Strategic evolution roadmap: Redis caching, OAuth2 social login, WebSockets / SSE for live tracking, Elasticsearch, and multi-vendor marketplace. |

---

## 💻 Technology Stack Summary

* **Frontend:** React 18, Vite 5, React Router DOM v6, Tailwind CSS, Lucide React Icons, Axios, Recharts, Canvas Confetti.
* **Backend:** Java 21, Spring Boot 3.3.3, Spring Data JPA, Hibernate, Spring Security 6, JJWT 0.12.6, OpenPDF (LibrePDF), SpringDoc OpenAPI 3 / Swagger UI, HikariCP. *(With companion Node.js / Express ES modules).*
* **Database:** MySQL 8.0 (with zero-config embedded H2 Database / SQLite fallback for instant local testing).
