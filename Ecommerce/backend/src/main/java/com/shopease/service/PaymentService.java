package com.shopease.service;

import com.shopease.dto.OrderDtos.CreateRazorpayOrderRequest;
import com.shopease.dto.OrderDtos.ValidateCouponRequest;
import com.shopease.dto.OrderDtos.VerifyRazorpayPaymentRequest;
import com.shopease.entity.Coupon;
import com.shopease.repository.CouponRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class PaymentService {

    private final CouponRepository couponRepository;

    @Value("${razorpay.key-id:rzp_test_public_placeholder}")
    private String razorpayKeyId;

    @Value("${razorpay.key-secret:rzp_test_secret_placeholder}")
    private String razorpayKeySecret;

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
        String gatewayOrderId = "order_gw_" + System.currentTimeMillis() + "_" + Long.toHexString(System.nanoTime()).substring(0, 5);

        Map<String, Object> data = new HashMap<>();
        data.put("order_id", gatewayOrderId);
        data.put("amount", amountInSubunits);
        data.put("currency", request.getCurrency() != null ? request.getCurrency() : "INR");
        data.put("key_id", razorpayKeyId);

        return data;
    }

    public Map<String, Object> verifyRazorpayPayment(VerifyRazorpayPaymentRequest request) {
        if (request.getRazorpayPaymentId() == null || request.getRazorpayPaymentId().isBlank()) {
            throw new IllegalArgumentException("Missing payment details");
        }

        // Cryptographic HMAC-SHA256 signature verification when signature and order ID are provided
        if (request.getRazorpaySignature() != null && !request.getRazorpaySignature().isBlank()
                && request.getRazorpayOrderId() != null && !request.getRazorpayOrderId().isBlank()
                && razorpayKeySecret != null && !razorpayKeySecret.contains("placeholder")) {
            
            boolean verified = verifyHmacSignature(
                    request.getRazorpayOrderId() + "|" + request.getRazorpayPaymentId(),
                    request.getRazorpaySignature(),
                    razorpayKeySecret
            );
            if (!verified) {
                log.warn("🚨 Payment signature verification failed for order {}", request.getRazorpayOrderId());
                throw new IllegalArgumentException("Payment verification failed: Invalid transaction signature");
            }
        }

        Map<String, Object> data = new HashMap<>();
        data.put("payment_id", request.getRazorpayPaymentId());
        data.put("verified", true);

        return data;
    }

    private boolean verifyHmacSignature(String payload, String signature, String secret) {
        try {
            Mac hmacSha256 = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKey = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
            hmacSha256.init(secretKey);
            byte[] hash = hmacSha256.doFinal(payload.getBytes(StandardCharsets.UTF_8));

            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }
            return MessageDigest.isEqual(
                    hexString.toString().getBytes(StandardCharsets.UTF_8),
                    signature.trim().getBytes(StandardCharsets.UTF_8)
            );
        } catch (Exception e) {
            log.error("Failed to verify payment HMAC signature", e);
            return false;
        }
    }
}
