# 🛍️ ShopEase – Enterprise Full Stack E-Commerce Platform

> Production-grade, full-stack digital commerce platform engineered with **React 18 (Vite + Tailwind CSS)** and **Java 21 + Spring Boot 3.3.3 (Spring Data JPA + Spring Security 6 + JJWT + OpenPDF Vector Invoices + MySQL 8.0 / H2)** *(with companion Node.js / Express backend)*.

---

## 🏗️ System Architecture Topology

```
+---------------------------------------------------------------------------------------------------------------+
|                                         SHOPEASE PLATFORM TOPOLOGY                                            |
+---------------------------------------------------------------------------------------------------------------+
|                                                                                                               |
|   +---------------------------------------+             +---------------------------------------+             |
|   |         Customer Storefront UI        |             |         Admin Back-Office UI          |             |
|   |      (React 18 + Vite + Tailwind)     |             |     (React 18 + Vite + Recharts)      |             |
|   |          http://localhost:3000        |             |      http://localhost:3000/admin      |             |
|   +-------------------+-------------------+             +-------------------+-------------------+             |
|                       |                                                     |                                 |
|                       |            HTTPS / JSON REST API Communication      |                                 |
|                       +--------------------------+  +-----------------------+                                 |
|                                                  |  |                                                         |
|                                                  v  v                                                         |
|                       +-------------------------------------------------------+                               |
|                       |             Backend REST API Server (:5000)           |                               |
|                       |     * Java 21 + Spring Boot 3.3.3 (Primary Engine)    |                               |
|                       |     * Spring Data JPA + Hibernate ORM                 |                               |
|                       |     * Spring Security 6 + JJWT 0.12.6 (Stateless)     |                               |
|                       |     * OpenPDF Streaming Tax Invoices                  |                               |
|                       |     * SpringDoc OpenAPI 3 Docs (/swagger-ui.html)     |                               |
|                       +---------------------------+---------------------------+                               |
|                                                   |                                                           |
|                                                   | HikariCP JDBC Connection Pool                             |
|                                                   v                                                           |
|                       +-------------------------------------------------------+                               |
|                       |         Relational Database Persistence Layer         |                               |
|                       |   * Production: MySQL 8.0 (shopease_db)               |                               |
|                       |   * Zero-Config Dev: H2 Database / SQLite Embedded    |                               |
|                       +-------------------------------------------------------+                               |
+---------------------------------------------------------------------------------------------------------------+
```

---

## 🛠️ Technology Stack

* **Frontend:** React 18, Vite 5, React Router DOM v6, Tailwind CSS, Lucide React Icons, Axios, Recharts, Canvas Confetti.
* **Backend:** Java 21, Spring Boot 3.3.3, Spring Data JPA, Hibernate, Spring Security 6, JJWT 0.12.6, OpenPDF (LibrePDF), SpringDoc OpenAPI 3 / Swagger UI, HikariCP. *(With companion Node.js / Express ES modules).*
* **Database:** MySQL 8.0 (with zero-config embedded H2 Database / SQLite fallback for instant local testing).

---

## 📖 Complete Technical Documentation Suite

The complete 12-chapter technical documentation suite is maintained in the [`docs/`](docs/) directory:

| Chapter | Document | Scope & Focus Areas |
| :--- | :--- | :--- |
| **01** | [Project Overview](docs/01-Project-Overview.md) | Business objectives, user personas, roles (`customer`, `admin`), end-to-end workflow, and scope. |
| **02** | [System Requirements](docs/02-Requirements.md) | Functional & Non-Functional specifications, domain rules, calculation formulas, and Gherkin user stories. |
| **03** | [Feature Specifications](docs/03-Features.md) | Customer and Admin features, PDP video/gallery, database cart with `x-session-id`, 4-step checkout, and OpenPDF invoices. |
| **04** | [System Architecture](docs/04-System-Architecture.md) | Decoupled React SPA + Spring Boot 3.3.3 3-Tier Layered Monolith architecture, Axios client interceptors, and error handling. |
| **05** | [High-Level Design (HLD)](docs/05-HLD.md) | C4 Level 1 & 2 diagrams, sequence flows (Auth, Cart merge, Checkout, PDF streaming). |
| **06** | [Low-Level Design (LLD)](docs/06-LLD.md) | Detailed Spring Boot class designs, 12 Controllers, 11 Services, 11 JPA Repositories, 11 Entities, and React component tree. |
| **07** | [Database Design](docs/07-Database-Design.md) | Entity Relationship Diagram (ERD), full MySQL 8.0 DDL scripts, constraints, JPA entity mappings, and data dictionary. |
| **08** | [REST API Documentation](docs/08-API-Documentation.md) | Complete 32+ REST API endpoint catalog, OpenAPI schemas, request/response JSON payloads, and status codes. |
| **09** | [Security Design](docs/09-Security-Design.md) | Spring Security 6 + JJWT 0.12.6 auth lifecycle, BCrypt password hashing, RBAC, upload file filters, and security audit. |
| **10** | [Deployment Architecture](docs/10-Deployment-Architecture.md) | Local single-command launch, Spring profiles (`dev` with H2 vs `mysql` with MySQL), Dockerfiles, and Nginx setup. |
| **11** | [Testing Strategy](docs/11-Testing-Strategy.md) | Automated backend JUnit 5 tests, live E2E integration runner (`test_e2e.js`), testing pyramid, and test matrix. |
| **12** | [Strategic Roadmap](docs/12-Future-Enhancements.md) | Future enhancements: Redis caching, OAuth2 social login, WebSockets / SSE for live tracking, and multi-vendor marketplace. |

---

## 🚀 Quick Start Guide

### 1. Single-Command Launch (Backend + Frontend)
```bash
cd "Ecommerce"
npm install
npm run dev
```

* **Customer Storefront:** [http://localhost:3000](http://localhost:3000)
* **Admin Back-Office:** [http://localhost:3000/admin](http://localhost:3000/admin)
* **Backend REST API:** [http://localhost:5000](http://localhost:5000)
* **Swagger OpenAPI Docs:** [http://localhost:5000/swagger-ui.html](http://localhost:5000/swagger-ui.html)
* **H2 Database Console:** [http://localhost:5000/h2-console](http://localhost:5000/h2-console) (JDBC URL: `jdbc:h2:file:./database_h2`, User: `sa`, Password: *(empty)*)

---

## 🔑 Demo Login Credentials

| Role | Email | Password | Quick-Fill Location |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin@shopease.com` | `Admin@123` | Quick-Fill button on `/login` |
| **Customer** | `user@shopease.com` | `User@123` | Quick-Fill button on `/login` |

---

## 🎟️ Active Demo Promo Codes

* **`SAVE10`**: 10% instant discount on all orders.
* **`WELCOME20`**: 20% discount on orders $\ge \$100$.
* **`FREESHIP`**: 5% discount + free express delivery.
