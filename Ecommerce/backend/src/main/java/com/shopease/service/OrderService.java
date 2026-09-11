package com.shopease.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.shopease.dto.OrderDtos.*;
import com.shopease.entity.*;
import com.shopease.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

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

    private String generateOrderNumber() {
        String dateStr = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        String randomStr = UUID.randomUUID().toString().substring(0, 4).toUpperCase();
        return "SE-" + dateStr + "-" + randomStr;
    }

    @Transactional
    public Map<String, Object> createOrder(Long userId, CheckoutRequest request) {
        if (request.getItems() == null || request.getItems().isEmpty()) {
            throw new IllegalArgumentException("Order items are required");
        }

        if (request.getShippingAddress() == null || request.getShippingAddress().isEmpty()) {
            throw new IllegalArgumentException("Shipping address is incomplete");
        }

        double subtotal = 0.0;
        List<Map<String, Object>> validatedItems = new ArrayList<>();

        // 1. Validate real-time stock and prices
        for (CheckoutItem itemReq : request.getItems()) {
            Product product = productRepository.findById(itemReq.getProductId())
                    .orElseThrow(() -> new IllegalArgumentException("Product ID " + itemReq.getProductId() + " no longer exists"));

            ProductVariant variant = null;
            if (itemReq.getVariantId() != null) {
                variant = productVariantRepository.findById(itemReq.getVariantId()).orElse(null);
            }

            int availableStock = (variant != null) ? variant.getStock() : product.getStock();
            if (availableStock < itemReq.getQuantity()) {
                String itemName = (variant != null) ? product.getName() + " (" + variant.getName() + ")" : product.getName();
                throw new IllegalArgumentException("Insufficient stock for \"" + itemName + "\". Available: " + availableStock + ", requested: " + itemReq.getQuantity());
            }

            double unitPrice;
            if (variant != null) {
                unitPrice = variant.getDiscountPrice() != null ? variant.getDiscountPrice() : variant.getPrice();
            } else {
                unitPrice = product.getDiscountPrice() != null ? product.getDiscountPrice() : product.getPrice();
            }

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

        // 3. Loyalty Points Redemption: 100 points = $10 discount
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

        // 4. Shipping: Free over $100, else $10
        double netSubtotal = subtotal - discountAmount - pointsDiscount;
        double shippingCharge = netSubtotal >= 100.0 ? 0.0 : 10.0;
        double finalAmount = Math.max(0.0, Math.round((netSubtotal + shippingCharge) * 100.0) / 100.0);

        String orderNumber = generateOrderNumber();

        String addressJson = "";
        try {
            addressJson = objectMapper.writeValueAsString(request.getShippingAddress());
        } catch (Exception e) {
            addressJson = request.getShippingAddress().toString();
        }

        // 5. Create Order
        Order order = Order.builder()
                .orderNumber(orderNumber)
                .userId(userId)
                .totalAmount(Math.round(subtotal * 100.0) / 100.0)
                .discountAmount(Math.round((discountAmount + pointsDiscount) * 100.0) / 100.0)
                .shippingCharge(shippingCharge)
                .finalAmount(finalAmount)
                .couponCode(request.getCouponCode() != null ? request.getCouponCode().toUpperCase() : null)
                .paymentMethod(request.getPaymentMethod() != null ? request.getPaymentMethod() : "COD")
                .paymentStatus("COD".equalsIgnoreCase(request.getPaymentMethod()) ? "Pending" : "Paid")
                .orderStatus("Confirmed")
                .shippingAddressSnapshot(addressJson)
                .razorpayPaymentId(request.getPaymentId())
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

        // 7. Reward Loyalty Points (1 point per $1 spent)
        int earnedPoints = (int) Math.floor(finalAmount);
        if (earnedPoints > 0) {
            user.setPointsBalance(user.getPointsBalance() + earnedPoints);
        }
        userRepository.save(user);

        // 8. Clear Cart
        cartItemRepository.deleteByUserId(userId);

        Map<String, Object> responseData = new HashMap<>();
        responseData.put("order", savedOrder);
        responseData.put("earned_points", earnedPoints);
        responseData.put("order_number", orderNumber);

        return responseData;
    }

    @Transactional(readOnly = true)
    public List<Order> getUserOrders(Long userId) {
        return orderRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    @Transactional(readOnly = true)
    public Order getOrderById(String idOrOrderNumber, Long userId, String userRole) {
        Order order;
        try {
            Long id = Long.parseLong(idOrOrderNumber);
            order = orderRepository.findById(id).orElse(null);
        } catch (NumberFormatException e) {
            order = orderRepository.findByOrderNumber(idOrOrderNumber).orElse(null);
        }

        if (order == null) {
            throw new IllegalArgumentException("Order not found");
        }

        if (!order.getUserId().equals(userId) && !"admin".equalsIgnoreCase(userRole)) {
            throw new IllegalStateException("Not authorized to view this order");
        }

        return order;
    }

    @Transactional
    public Order cancelOrder(Long orderId, Long userId, String userRole) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("Order not found"));

        if (!order.getUserId().equals(userId) && !"admin".equalsIgnoreCase(userRole)) {
            throw new IllegalStateException("Not authorized");
        }

        if ("Shipped".equalsIgnoreCase(order.getOrderStatus()) || "Delivered".equalsIgnoreCase(order.getOrderStatus())) {
            throw new IllegalStateException("Order cannot be cancelled because it is already " + order.getOrderStatus());
        }

        if ("Cancelled".equalsIgnoreCase(order.getOrderStatus())) {
            throw new IllegalStateException("Order is already cancelled");
        }

        // Restock items
        for (OrderItem item : order.getItems()) {
            if (item.getVariantId() != null) {
                productVariantRepository.findById(item.getVariantId()).ifPresent(v -> {
                    v.setStock(v.getStock() + item.getQuantity());
                    productVariantRepository.save(v);
                });
            }
            if (item.getProductId() != null) {
                productRepository.findById(item.getProductId()).ifPresent(p -> {
                    p.setStock(p.getStock() + item.getQuantity());
                    productRepository.save(p);
                });
            }
        }

        order.setOrderStatus("Cancelled");
        return orderRepository.save(order);
    }

    @Transactional(readOnly = true)
    public Map<String, Object> getAllOrdersAdmin(String status, Integer page, Integer limit) {
        int pageNumber = (page != null && page > 0) ? page : 1;
        int pageSize = (limit != null && limit > 0) ? limit : 10;
        Pageable pageable = PageRequest.of(pageNumber - 1, pageSize, Sort.by(Sort.Direction.DESC, "createdAt"));

        String filterStatus = (status != null && !"all".equalsIgnoreCase(status)) ? status : null;
        Page<Order> orderPage = orderRepository.findOrdersFiltered(filterStatus, pageable);

        Map<String, Object> pagination = new HashMap<>();
        pagination.put("total", orderPage.getTotalElements());
        pagination.put("page", pageNumber);
        pagination.put("pages", orderPage.getTotalPages());
        pagination.put("limit", pageSize);

        Map<String, Object> responseData = new HashMap<>();
        responseData.put("orders", orderPage.getContent());
        responseData.put("pagination", pagination);

        return responseData;
    }

    @Transactional
    public Order updateOrderStatusAdmin(Long orderId, OrderStatusUpdateRequest request) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("Order not found"));

        if (request.getStatus() != null && !request.getStatus().isBlank()) {
            if ("Cancelled".equalsIgnoreCase(request.getStatus()) && !"Cancelled".equalsIgnoreCase(order.getOrderStatus())) {
                // Restock items
                for (OrderItem item : order.getItems()) {
                    if (item.getVariantId() != null) {
                        productVariantRepository.findById(item.getVariantId()).ifPresent(v -> {
                            v.setStock(v.getStock() + item.getQuantity());
                            productVariantRepository.save(v);
                        });
                    }
                    if (item.getProductId() != null) {
                        productRepository.findById(item.getProductId()).ifPresent(p -> {
                            p.setStock(p.getStock() + item.getQuantity());
                            productRepository.save(p);
                        });
                    }
                }
            }
            order.setOrderStatus(request.getStatus());
        }

        if (request.getPaymentStatus() != null && !request.getPaymentStatus().isBlank()) {
            order.setPaymentStatus(request.getPaymentStatus());
        }

        return orderRepository.save(order);
    }

    @Transactional
    public Order requestReturn(Long orderId, Long userId, OrderReturnRequest request) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("Order not found"));

        if (!order.getUserId().equals(userId)) {
            throw new IllegalStateException("Not authorized to request return for this order");
        }

        if (!"Delivered".equalsIgnoreCase(order.getOrderStatus())) {
            throw new IllegalStateException("Returns can only be requested for orders with 'Delivered' status");
        }

        if ("Requested".equalsIgnoreCase(order.getReturnStatus())) {
            throw new IllegalStateException("A return request has already been submitted for this order");
        }

        if ("Approved".equalsIgnoreCase(order.getReturnStatus())) {
            throw new IllegalStateException("Return request has already been approved");
        }

        String fullReason = request.getReason() != null ? request.getReason() : "Customer Return";
        if (request.getComments() != null && !request.getComments().isBlank()) {
            fullReason += ": " + request.getComments();
        }

        order.setReturnStatus("Requested");
        order.setReturnReason(fullReason);
        order.setReturnRequestedAt(LocalDateTime.now());

        return orderRepository.save(order);
    }

    @Transactional
    public Order updateReturnStatus(Long orderId, OrderReturnStatusUpdateRequest request) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("Order not found"));

        if (request.getReturnStatus() == null || request.getReturnStatus().isBlank()) {
            throw new IllegalArgumentException("Return status is required");
        }

        String status = request.getReturnStatus().trim();
        if ("Approved".equalsIgnoreCase(status)) {
            order.setReturnStatus("Approved");
            order.setOrderStatus("Refunded");
            order.setPaymentStatus("Refunded");

            // Restock items
            for (OrderItem item : order.getItems()) {
                if (item.getVariantId() != null) {
                    productVariantRepository.findById(item.getVariantId()).ifPresent(v -> {
                        v.setStock(v.getStock() + item.getQuantity());
                        productVariantRepository.save(v);
                    });
                }
                if (item.getProductId() != null) {
                    productRepository.findById(item.getProductId()).ifPresent(p -> {
                        p.setStock(p.getStock() + item.getQuantity());
                        productRepository.save(p);
                    });
                }
            }
        } else if ("Rejected".equalsIgnoreCase(status)) {
            order.setReturnStatus("Rejected");
        } else {
            order.setReturnStatus(status);
        }

        return orderRepository.save(order);
    }
}
