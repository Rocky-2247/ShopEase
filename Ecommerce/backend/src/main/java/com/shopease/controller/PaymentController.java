package com.shopease.controller;

import com.shopease.dto.ApiResponse;
import com.shopease.dto.OrderDtos.CreateRazorpayOrderRequest;
import com.shopease.dto.OrderDtos.ValidateCouponRequest;
import com.shopease.dto.OrderDtos.VerifyRazorpayPaymentRequest;
import com.shopease.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping("/create-order")
    public ResponseEntity<ApiResponse<Map<String, Object>>> createRazorpayOrder(@RequestBody CreateRazorpayOrderRequest request) {
        try {
            Map<String, Object> data = paymentService.createRazorpayOrder(request);
            return ResponseEntity.ok(ApiResponse.success(data));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<ApiResponse<Map<String, Object>>> verifyRazorpayPayment(@RequestBody VerifyRazorpayPaymentRequest request) {
        try {
            Map<String, Object> data = paymentService.verifyRazorpayPayment(request);
            return ResponseEntity.ok(ApiResponse.success(data, "Payment verified successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @PostMapping("/validate-coupon")
    public ResponseEntity<ApiResponse<Map<String, Object>>> validateCoupon(@RequestBody ValidateCouponRequest request) {
        try {
            Map<String, Object> data = paymentService.validateCoupon(request);
            String code = (String) data.get("code");
            Double discount = (Double) data.get("discount_amount");
            return ResponseEntity.ok(ApiResponse.success(data, "Coupon \"" + code + "\" applied! You saved $" + discount));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
}
