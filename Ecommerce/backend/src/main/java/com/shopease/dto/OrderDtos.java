package com.shopease.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.List;
import java.util.Map;

public class OrderDtos {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class CheckoutItem {
        @JsonProperty("product_id")
        private Long productId;

        @JsonProperty("variant_id")
        private Long variantId;

        private Integer quantity;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class CheckoutRequest {
        private List<CheckoutItem> items;

        @JsonProperty("shipping_address")
        private Map<String, Object> shippingAddress;

        @JsonProperty("payment_method")
        @Builder.Default
        private String paymentMethod = "COD";

        @JsonProperty("coupon_code")
        private String couponCode;

        @JsonProperty("payment_id")
        private String paymentId;

        @JsonProperty("redeem_points")
        @Builder.Default
        private Integer redeemPoints = 0;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class OrderStatusUpdateRequest {
        private String status;

        @JsonProperty("payment_status")
        private String paymentStatus;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class ValidateCouponRequest {
        private String code;

        @JsonProperty("order_amount")
        @com.fasterxml.jackson.annotation.JsonAlias({"orderAmount", "cart_total", "cartTotal", "amount"})
        private Double orderAmount;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class CreateRazorpayOrderRequest {
        private Double amount;
        @Builder.Default
        private String currency = "USD";
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class VerifyRazorpayPaymentRequest {
        @JsonProperty("razorpay_order_id")
        private String razorpayOrderId;

        @JsonProperty("razorpay_payment_id")
        private String razorpayPaymentId;

        @JsonProperty("razorpay_signature")
        private String razorpaySignature;
    }
}
