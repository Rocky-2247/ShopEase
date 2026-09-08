package com.shopease.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_number", nullable = false, unique = true)
    private String orderNumber;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    @Column(name = "total_amount", nullable = false)
    private Double totalAmount;

    @Column(name = "discount_amount", nullable = false)
    @Builder.Default
    private Double discountAmount = 0.0;

    @Column(name = "shipping_charge", nullable = false)
    @Builder.Default
    private Double shippingCharge = 0.0;

    @Column(name = "final_amount", nullable = false)
    private Double finalAmount;

    @Column(name = "coupon_code")
    private String couponCode;

    @Column(name = "payment_method", nullable = false)
    @Builder.Default
    private String paymentMethod = "COD"; // 'COD', 'UPI', 'CARD', 'RAZORPAY'

    @Column(name = "payment_status", nullable = false)
    @Builder.Default
    private String paymentStatus = "Pending"; // 'Pending', 'Paid', 'Failed'

    @Column(name = "order_status", nullable = false)
    @Builder.Default
    private String orderStatus = "Confirmed"; // 'Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'

    @Column(name = "shipping_address_snapshot", columnDefinition = "TEXT", nullable = false)
    private String shippingAddressSnapshot; // JSON String

    @Column(name = "razorpay_order_id")
    private String razorpayOrderId;

    @Column(name = "razorpay_payment_id")
    private String razorpayPaymentId;

    @Column(name = "delivery_date")
    private LocalDateTime deliveryDate;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @Builder.Default
    private List<OrderItem> items = new ArrayList<>();

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
