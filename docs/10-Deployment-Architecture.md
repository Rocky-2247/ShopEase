# 10. Deployment Architecture & DevOps Engineering

---

## 1. Local Development Orchestration

The ShopEase root directory provides a single unified `package.json` utilizing **concurrently** to launch both backend and frontend development servers concurrently with a single command.

```bash
# 1. Open terminal in the Ecommerce root
cd "Ecommerce"
npm install

# 2. Run both Backend (:5000) and Frontend (:3000) concurrently
npm run dev
```

* **Frontend Web Application:** `http://localhost:3000`
* **Backend REST API:** `http://localhost:5000`
* **SpringDoc Swagger UI:** `http://localhost:5000/swagger-ui.html`
* **H2 Embedded Database Console:** `http://localhost:5000/h2-console` (JDBC URL: `jdbc:h2:file:./database_h2`, User: `sa`, Password: *(empty)*)

---

## 2. Spring Boot Profiles & Database Configurations

ShopEase supports seamless environment switching between embedded zero-configuration development and production MySQL via Spring Boot profiles:

```
                                  +------------------------------------+
                                  |     Spring Boot Active Profile     |
                                  |    (spring.profiles.active)        |
                                  +-----------------+------------------+
                                                    |
                         +--------------------------+--------------------------+
                         | (profile = dev)                                     | (profile = mysql)
                         v                                                     v
            +--------------------------+                              +--------------------------+
            |    H2 Embedded Engine    |                              |   Production MySQL 8.0   |
            |   (database_h2.mv.db)    |                              | (HikariCP Connection Pool|
            +--------------------------+                              +--------------------------+
```

### 2.1 Development Profile (`application.properties`)
```properties
server.port=5000
spring.application.name=shopease-backend

# Active Profile: 'dev' for zero-config embedded H2 startup
spring.profiles.active=dev

# H2 Embedded Database Configuration
spring.datasource.url=jdbc:h2:file:./database_h2;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

# JWT Security
jwt.secret=shopease_super_secret_jwt_key_2026_modern_ecommerce_very_secure_and_long_enough_for_hmac256
jwt.expiration-ms=2592000000
```

### 2.2 Production MySQL Profile (`application-mysql.properties`)
```properties
# MySQL Production Profile Configuration (Activate via: spring.profiles.active=mysql)
spring.datasource.url=jdbc:mysql://localhost:3306/shopease_db?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=your_mysql_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false

# HikariCP Enterprise Connection Pool
spring.datasource.hikari.maximum-pool-size=20
spring.datasource.hikari.minimum-idle=5
spring.datasource.hikari.idle-timeout=300000
spring.datasource.hikari.connection-timeout=20000
spring.datasource.hikari.max-lifetime=1200000
```

---

## 3. Production Docker Deployment

### 3.1 Spring Boot Backend Dockerfile (`backend/Dockerfile`)
```dockerfile
# Stage 1: Build JAR with Maven & Eclipse Temurin JDK 21
FROM maven:3.9.8-eclipse-temurin-21-alpine AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Minimal JRE 21 Alpine Runtime
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/target/shopease-backend-1.0.0.jar app.jar
RUN mkdir -p uploads

EXPOSE 5000
ENV SPRING_PROFILES_ACTIVE=mysql
ENTRYPOINT ["java", "-jar", "app.jar"]
```

### 3.2 React Frontend Dockerfile (`frontend/Dockerfile`)
```dockerfile
# Stage 1: Build Vite React Production Bundle
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Nginx Web Server
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 3.3 Production Docker Compose (`docker-compose.yml`)
```yaml
version: '3.8'

services:
  mysql-db:
    image: mysql:8.0
    container_name: shopease-mysql
    restart: unless-stopped
    environment:
      MYSQL_DATABASE: shopease_db
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_USER: shopease_user
      MYSQL_PASSWORD: shopease_password
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - shopease-net

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: shopease-api
    restart: unless-stopped
    depends_on:
      - mysql-db
    environment:
      SPRING_PROFILES_ACTIVE: mysql
      SPRING_DATASOURCE_URL: jdbc:mysql://mysql-db:3306/shopease_db?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
      SPRING_DATASOURCE_USERNAME: shopease_user
      SPRING_DATASOURCE_PASSWORD: shopease_password
    ports:
      - "5000:5000"
    volumes:
      - uploads_data:/app/uploads
    networks:
      - shopease-net

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: shopease-ui
    restart: unless-stopped
    ports:
      - "80:80"
    networks:
      - shopease-net

networks:
  shopease-net:
    driver: bridge

volumes:
  mysql_data:
  uploads_data:
```

---

## 4. Production Nginx Reverse Proxy Configuration

```nginx
server {
    listen 80;
    server_name store.shopease.com;

    # Serve React SPA Static Files
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    # Proxy REST API requests to Spring Boot Backend
    location /api/ {
        proxy_pass http://localhost:5000/api/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Serve Uploaded Product Media
    location /uploads/ {
        proxy_pass http://localhost:5000/uploads/;
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```
