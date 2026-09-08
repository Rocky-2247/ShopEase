package com.shopease.controller;

import com.shopease.dto.ApiResponse;
import com.shopease.entity.Order;
import com.shopease.repository.OrderRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Map;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/webhooks")
@RequiredArgsConstructor
@Tag(name = "Webhooks", description = "Payment gateway webhook listeners")
public class WebhookController {

    private final OrderRepository orderRepository;

    @Value("${razorpay.key-secret:rzp_test_secret_placeholder}")
    private String razorpaySecret;

    @PostMapping("/payment")
    @Operation(summary = "Handle incoming Razorpay payment events")
    public ResponseEntity<Map<String, Object>> handleRazorpayWebhook(
            @RequestBody(required = false) Map<String, Object> payload,
            @RequestHeader(value = "X-Razorpay-Signature", required = false) String signature) {

        log.info("Received Razorpay webhook event: {}", payload != null ? payload.get("event") : "null");

        if (payload != null && payload.containsKey("event")) {
            String event = (String) payload.get("event");
            
            try {
                if ("payment.captured".equals(event) || "order.paid".equals(event)) {
                    Map<String, Object> payloadData = (Map<String, Object>) payload.get("payload");
                    if (payloadData != null && payloadData.containsKey("payment")) {
                        Map<String, Object> paymentEntity = (Map<String, Object>) ((Map<String, Object>) payloadData.get("payment")).get("entity");
                        if (paymentEntity != null) {
                            String razorpayOrderId = (String) paymentEntity.get("order_id");
                            String razorpayPaymentId = (String) paymentEntity.get("id");
                            
                            if (razorpayOrderId != null) {
                                Optional<Order> orderOpt = orderRepository.findByRazorpayOrderId(razorpayOrderId);
                                if (orderOpt.isPresent()) {
                                    Order order = orderOpt.get();
                                    order.setPaymentStatus("Paid");
                                    order.setRazorpayPaymentId(razorpayPaymentId);
                                    orderRepository.save(order);
                                    log.info("Order #{} marked PAID via webhook", order.getId());
                                }
                            }
                        }
                    }
                }
            } catch (Exception e) {
                log.error("Error processing webhook payload", e);
            }
        }

        return ResponseEntity.ok(Map.of("status", "ok", "received", true));
    }
}
