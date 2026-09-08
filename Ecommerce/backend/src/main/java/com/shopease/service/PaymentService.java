package com.shopease.service;

import com.shopease.dto.OrderDtos.CreateRazorpayOrderRequest;
import com.shopease.dto.OrderDtos.ValidateCouponRequest;
import com.shopease.dto.OrderDtos.VerifyRazorpayPaymentRequest;
import com.shopease.entity.Coupon;
import com.shopease.repository.CouponRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final CouponRepository couponRepository;

    @Transactional(readOnly = true)
    public Map<String, Object> validateCoupon(ValidateCouponRequest request) {
        if (request.getCode() == null || request.getCode().trim().isEmpty()) {
            throw new IllegalArgumentException("Please enter a coupon code");
        }

        String cleanCode = request.getCode().toUpperCase().trim();
        Coupon coupon = couponRepository.findByCodeIgnoreCase(cleanCode)
                .orElseThrow(() -> new IllegalArgumentException("Invalid or expired coupon code"));

        if (!Boolean.TRUE.equals(coupon.getIsActive())) {
            throw new IllegalArgumentException("This coupon is inactive");
        }

        if (coupon.getExpiresAt() != null && coupon.getExpiresAt().isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("This coupon has expired");
        }

        double subtotal = request.getOrderAmount() != null ? request.getOrderAmount() : 0.0;
        if (subtotal < coupon.getMinOrderValue()) {
            throw new IllegalArgumentException("Minimum order amount of $" + coupon.getMinOrderValue() + " required for coupon " + coupon.getCode());
        }

        double discount = (subtotal * coupon.getDiscountPercentage()) / 100.0;
        if (coupon.getMaxDiscount() != null && discount > coupon.getMaxDiscount()) {
            discount = coupon.getMaxDiscount();
        }
        discount = Math.round(discount * 100.0) / 100.0;

        Map<String, Object> data = new HashMap<>();
        data.put("code", coupon.getCode());
        data.put("discount_percentage", coupon.getDiscountPercentage());
        data.put("discount_amount", discount);
        data.put("max_discount", coupon.getMaxDiscount());

        return data;
    }

    public Map<String, Object> createRazorpayOrder(CreateRazorpayOrderRequest request) {
        if (request.getAmount() == null || request.getAmount() <= 0) {
            throw new IllegalArgumentException("Invalid payment amount");
        }

        long amountInSubunits = Math.round(request.getAmount() * 100);
        String simulatedOrderId = "order_test_" + System.currentTimeMillis() + "_" + Long.toHexString(System.nanoTime()).substring(0, 5);

        Map<String, Object> data = new HashMap<>();
        data.put("order_id", simulatedOrderId);
        data.put("amount", amountInSubunits);
        data.put("currency", request.getCurrency() != null ? request.getCurrency() : "USD");
        data.put("key_id", "rzp_test_ShopeaseDemo");

        return data;
    }

    public Map<String, Object> verifyRazorpayPayment(VerifyRazorpayPaymentRequest request) {
        if (request.getRazorpayPaymentId() == null || request.getRazorpayPaymentId().isBlank()) {
            throw new IllegalArgumentException("Missing payment details");
        }

        Map<String, Object> data = new HashMap<>();
        data.put("payment_id", request.getRazorpayPaymentId());

        return data;
    }
}
