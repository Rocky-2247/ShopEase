# 06. Low-Level Design (LLD)

---

## 1. Backend Low-Level Architecture (Java 21 + Spring Boot 3.3.3)

### 1.1 Complete Java Package & Class Structure

The backend application is structured under the root package `com.shopease`:

```text
com.shopease
├── ShopEaseApplication.java         # Spring Boot @SpringBootApplication entrypoint
├── config/
│   ├── OpenApiConfig.java           # SpringDoc OpenAPI 3 info & security scheme
│   ├── WebMvcConfig.java            # WebMvcConfigurer (static uploads & CORS mapping)
│   └── WebSecurityConfig.java       # SecurityFilterChain, PasswordEncoder & CORS beans
├── controller/                      # REST API Endpoints (@RestController)
│   ├── AdminController.java         # /api/admin (Dashboard stats, users, block/role toggles, coupons)
│   ├── AuthController.java          # /api/auth (Register, login, profile, reset password, addresses)
│   ├── CartController.java          # /api/cart (Get, add, update, remove, clear, merge guest cart)
│   ├── CategoryController.java      # /api/categories (CRUD operations for categories)
│   ├── HealthController.java        # / & /api/health (System status & health check)
│   ├── OrderController.java         # /api/orders (Create, list, cancel, admin all, status, invoice)
│   ├── PaymentController.java       # /api/payment (Validate coupon, Razorpay order & verification)
│   ├── ProductController.java       # /api/products (Faceted catalog search, featured, brands, CRUD)
│   ├── ReviewController.java        # /api/reviews (Product reviews & submission)
│   ├── UploadController.java        # /api/upload (Multipart single & multiple image uploads)
│   ├── WebhookController.java       # /api/webhooks (Razorpay payment event listener)
│   └── WishlistController.java      # /api/wishlist (Get, toggle, remove, move-to-cart)
├── dto/                             # Data Transfer Objects
│   ├── ApiResponse.java             # Standard API envelope { success, message, data, ... }
│   ├── AuthDtos.java                # RegisterRequest, LoginRequest, AuthResponse, AddressRequest
│   ├── CartDtos.java                # AddToCartRequest, UpdateCartItemRequest, CartResponse, CartItemResponse
│   ├── OrderDtos.java               # CheckoutRequest, OrderStatusUpdateRequest, Payment requests
│   └── ProductDtos.java             # ProductCreateUpdateRequest, CouponRequest, ReviewCreateRequest
├── entity/                          # JPA Entities (@Entity, @Table)
│   ├── Address.java                 # Customer delivery addresses (addresses)
│   ├── CartItem.java                # Shopping cart items (cart_items)
│   ├── Category.java                # Product categories (categories)
│   ├── Coupon.java                  # Promotional discount vouchers (coupons)
│   ├── Order.java                   # Customer orders (orders)
│   ├── OrderItem.java               # Line item snapshots (order_items)
│   ├── Product.java                 # Catalog products (products)
│   ├── ProductVariant.java          # SKU-level variants (product_variants)
│   ├── Review.java                  # 5-star customer reviews (reviews)
│   ├── User.java                    # Customer & admin accounts (users)
│   └── WishlistItem.java            # Saved items (wishlist_items)
├── repository/                      # Spring Data JPA Interfaces (@Repository)
│   ├── AddressRepository.java, CartItemRepository.java, CategoryRepository.java,
│   ├── CouponRepository.java, OrderItemRepository.java, OrderRepository.java,
│   ├── ProductRepository.java, ProductVariantRepository.java, ReviewRepository.java,
│   ├── UserRepository.java, WishlistItemRepository.java
├── security/                        # Security & Token Components
│   ├── CustomUserDetailsService.java# UserDetailsService loading UserPrincipal from DB
│   ├── JwtAuthenticationFilter.java # OncePerRequestFilter parsing Bearer JWT tokens
│   ├── JwtTokenProvider.java        # JJWT token generation, signing & verification
│   └── UserPrincipal.java           # Spring Security UserDetails implementation
└── service/                         # Business Logic & Transactions (@Service)
    ├── AdminService.java            # KPI metrics, monthly sales aggregation, user moderation
    ├── AuthService.java             # Authentication, registration, address book management
    ├── CartService.java             # Cart state, stock boundary enforcement, guest cart merge
    ├── CategoryService.java         # Category operations & slug generation
    ├── DatabaseSeederService.java   # CommandLineRunner seeding demo users, products, coupons
    ├── InvoiceService.java          # OpenPDF vector tax invoice generation
    ├── OrderService.java            # Order placement, atomic stock decrement, cancellation restock
    ├── PaymentService.java          # Coupon validation, discount calculation, payment simulation
    ├── ProductService.java          # Dynamic multi-facet catalog filtering via JPA Specification
    ├── ReviewService.java           # Review persistence & instantaneous rating recalculation
    └── WishlistService.java         # Wishlist operations & move-to-cart transfers
```

---

## 2. Core JPA Entity Definitions

### 2.1 User Entity (`entity/User.java`)

```java
package com.shopease.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String phone;

    @Column(nullable = false)
    @Builder.Default
    private String role = "customer"; // 'customer' or 'admin'

    @Column(name = "points_balance", nullable = false)
    @Builder.Default
    private Integer pointsBalance = 100; // Welcome 100 points ($10 value)

    @Column(name = "is_blocked", nullable = false)
    @Builder.Default
    private Boolean isBlocked = false;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    @Builder.Default
    private List<Address> addresses = new ArrayList<>();

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
```

### 2.2 Product Entity (`entity/Product.java`)

```java
package com.shopease.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String slug;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(nullable = false)
    private Double price;

    @Column(name = "discount_price")
    private Double discountPrice;

    @Column(nullable = false)
    @Builder.Default
    private Integer stock = 0;

    @Column(name = "category_id", nullable = false)
    private Long categoryId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", insertable = false, updatable = false)
    private Category category;

    @Column(name = "image_url", nullable = false)
    private String imageUrl;

    @Column(name = "video_url")
    private String videoUrl;

    @Column(columnDefinition = "TEXT")
    private String images; // Stored as JSON string (e.g. ["url1", "url2"])

    @Column(nullable = false)
    @Builder.Default
    private Double rating = 0.0;

    @Column(name = "num_reviews", nullable = false)
    @Builder.Default
    private Integer numReviews = 0;

    @Column(name = "is_featured", nullable = false)
    @Builder.Default
    private Boolean isFeatured = false;

    @Column(name = "is_trending", nullable = false)
    @Builder.Default
    private Boolean isTrending = false;

    @Column(columnDefinition = "TEXT")
    private String specifications; // Stored as JSON string (e.g. {"Display":"6.8 inch"})

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @Builder.Default
    private List<ProductVariant> variants = new ArrayList<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @Builder.Default
    private List<Review> reviews = new ArrayList<>();

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
```

---

## 3. Core Business Services Implementation

### 3.1 Order Service (`service/OrderService.java`)

```java
@Service
@RequiredArgsConstructor
@Slf4j
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final ProductRepository productRepository;
    private final ProductVariantRepository productVariantRepository;
    private final UserRepository userRepository;
    private final CouponRepository couponRepository;
    private final CartItemRepository cartItemRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Transactional
    public Map<String, Object> createOrder(Long userId, CheckoutRequest request) {
        // 1. Validate real-time stock & compute subtotal
        double subtotal = 0.0;
        List<Map<String, Object>> validatedItems = new ArrayList<>();

        for (CheckoutItem itemReq : request.getItems()) {
            Product product = productRepository.findById(itemReq.getProductId())
                    .orElseThrow(() -> new IllegalArgumentException("Product ID " + itemReq.getProductId() + " no longer exists"));

            ProductVariant variant = itemReq.getVariantId() != null 
                    ? productVariantRepository.findById(itemReq.getVariantId()).orElse(null) 
                    : null;

            int availableStock = (variant != null) ? variant.getStock() : product.getStock();
            if (availableStock < itemReq.getQuantity()) {
                String name = (variant != null) ? product.getName() + " (" + variant.getName() + ")" : product.getName();
                throw new IllegalArgumentException("Insufficient stock for \"" + name + "\". Available: " + availableStock);
            }

            double unitPrice = (variant != null) 
                    ? (variant.getDiscountPrice() != null ? variant.getDiscountPrice() : variant.getPrice())
                    : (product.getDiscountPrice() != null ? product.getDiscountPrice() : product.getPrice());

            subtotal += unitPrice * itemReq.getQuantity();

            Map<String, Object> vItem = new HashMap<>();
            vItem.put("product", product);
            vItem.put("variant", variant);
            vItem.put("quantity", itemReq.getQuantity());
            vItem.put("price", unitPrice);
            vItem.put("product_name_snapshot", (variant != null) ? product.getName() + " - " + variant.getName() : product.getName());
            vItem.put("product_image_snapshot", (variant != null && variant.getImageUrl() != null) ? variant.getImageUrl() : product.getImageUrl());
            validatedItems.add(vItem);
        }

        // 2. Coupon Discount
        double discountAmount = 0.0;
        if (request.getCouponCode() != null && !request.getCouponCode().isBlank()) {
            String codeClean = request.getCouponCode().toUpperCase().trim();
            Coupon coupon = couponRepository.findByCodeIgnoreCase(codeClean).orElse(null);
            if (coupon != null && Boolean.TRUE.equals(coupon.getIsActive()) && subtotal >= coupon.getMinOrderValue()) {
                double calc = (subtotal * coupon.getDiscountPercentage()) / 100.0;
                if (coupon.getMaxDiscount() != null && calc > coupon.getMaxDiscount()) {
                    calc = coupon.getMaxDiscount();
                }
                discountAmount = Math.round(calc * 100.0) / 100.0;
            }
        }

        // 3. Loyalty Points Redemption (100 points = $10)
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        double pointsDiscount = 0.0;
        int pointsToUse = request.getRedeemPoints() != null ? request.getRedeemPoints() : 0;
        if (pointsToUse > 0 && user.getPointsBalance() >= pointsToUse) {
            pointsDiscount = Math.round((pointsToUse / 10.0) * 100.0) / 100.0;
            if (pointsDiscount > (subtotal - discountAmount)) {
                pointsDiscount = subtotal - discountAmount;
            }
            user.setPointsBalance(user.getPointsBalance() - pointsToUse);
        }

        // 4. Shipping Calculation: Free for >= $100, else $10
        double netSubtotal = subtotal - discountAmount - pointsDiscount;
        double shippingCharge = netSubtotal >= 100.0 ? 0.0 : 10.0;
        double finalAmount = Math.max(0.0, Math.round((netSubtotal + shippingCharge) * 100.0) / 100.0);

        String orderNumber = "SE-" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd")) + "-" + UUID.randomUUID().toString().substring(0, 4).toUpperCase();

        // 5. Create Order Entity
        Order order = Order.builder()
                .orderNumber(orderNumber)
                .userId(userId)
                .totalAmount(Math.round(subtotal * 100.0) / 100.0)
                .discountAmount(Math.round((discountAmount + pointsDiscount) * 100.0) / 100.0)
                .shippingCharge(shippingCharge)
                .finalAmount(finalAmount)
                .couponCode(request.getCouponCode())
                .paymentMethod(request.getPaymentMethod() != null ? request.getPaymentMethod() : "COD")
                .paymentStatus("COD".equalsIgnoreCase(request.getPaymentMethod()) ? "Pending" : "Paid")
                .orderStatus("Confirmed")
                .shippingAddressSnapshot(objectMapper.writeValueAsString(request.getShippingAddress()))
                .deliveryDate(LocalDateTime.now().plusDays(5))
                .build();

        Order savedOrder = orderRepository.save(order);

        // 6. Create OrderItems & Decrement Stock
        for (Map<String, Object> vItem : validatedItems) {
            Product p = (Product) vItem.get("product");
            ProductVariant v = (ProductVariant) vItem.get("variant");
            int qty = (int) vItem.get("quantity");
            double price = (double) vItem.get("price");

            OrderItem oi = OrderItem.builder()
                    .orderId(savedOrder.getId())
                    .productId(p.getId())
                    .variantId(v != null ? v.getId() : null)
                    .productNameSnapshot((String) vItem.get("product_name_snapshot"))
                    .productImageSnapshot((String) vItem.get("product_image_snapshot"))
                    .price(price)
                    .quantity(qty)
                    .build();
            orderItemRepository.save(oi);

            if (v != null) {
                v.setStock(Math.max(0, v.getStock() - qty));
                productVariantRepository.save(v);
            }
            p.setStock(Math.max(0, p.getStock() - qty));
            productRepository.save(p);
        }

        // 7. Award Loyalty Points & Clear User Cart
        int earnedPoints = (int) Math.floor(finalAmount);
        if (earnedPoints > 0) user.setPointsBalance(user.getPointsBalance() + earnedPoints);
        userRepository.save(user);
        cartItemRepository.deleteByUserId(userId);

        return Map.of("order", savedOrder, "earned_points", earnedPoints, "order_number", orderNumber);
    }
}
```

---

## 4. Frontend State & Service Architecture

### 4.1 Global Contexts (`context/`)
* **`AuthContext.jsx`:** Stores authenticated user info, JWT token, login/logout handlers, and triggers guest cart auto-merging (`/api/cart/merge`) upon login.
* **`CartContext.jsx`:** Manages live cart state, drawer visibility, item quantity modifiers, subtotal, and shipping progress calculations.
* **`WishlistContext.jsx`:** Manages customer wishlist items with real-time add/remove toggles and move-to-cart operations.
* **`ToastContext.jsx`:** Centralized floating alert notification queue for action confirmations and error messages.

### 4.2 Central Axios API Service (`services/api.js`)
* **Request Interceptors:** Automatically injects `Authorization: Bearer <token>` for logged-in users and `x-session-id` for anonymous visitors.
* **Response Interceptors:** Extracts structured backend error messages from `ApiResponse` objects for clean UI alerting.
