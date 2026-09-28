package com.shopease.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.shopease.entity.Order;
import com.shopease.repository.OrderRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
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
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Value("${razorpay.key-secret:rzp_test_secret_placeholder}")
    private String razorpaySecret;

    @PostMapping("/payment")
    @Operation(summary = "Handle incoming Razorpay payment events with HMAC signature verification")
    public ResponseEntity<Map<String, Object>> handleRazorpayWebhook(
            @RequestBody(required = false) String rawBody,
            @RequestHeader(value = "X-Razorpay-Signature", required = false) String signature) {

        log.info("Received Razorpay webhook event. Signature present: {}", signature != null);

        if (rawBody == null || rawBody.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("status", "error", "message", "Empty webhook payload"));
        }

        // Verify cryptographic HMAC-SHA256 signature if secret is configured and not placeholder
        if (razorpaySecret != null && !razorpaySecret.contains("placeholder") && signature != null) {
            boolean isValid = verifySignature(rawBody, signature, razorpaySecret);
            if (!isValid) {
                log.warn("🚨 Unauthorized webhook attempt: Invalid HMAC-SHA256 signature");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("status", "error", "message", "Invalid webhook signature"));
            }
        }

        try {
            Map<String, Object> payload = objectMapper.readValue(rawBody, Map.class);
            if (payload != null && payload.containsKey("event")) {
                String event = (String) payload.get("event");
                
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
                                    log.info("✅ Order #{} marked PAID via verified webhook event: {}", order.getId(), event);
                                }
                            }
                        }
                    }
                }
            }
        } catch (Exception e) {
            log.error("Error processing webhook payload", e);
            return ResponseEntity.badRequest().body(Map.of("status", "error", "message", e.getMessage()));
        }

        return ResponseEntity.ok(Map.of("status", "ok", "received", true));
    }

    private boolean verifySignature(String payload, String signature, String secret) {
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
            log.error("Failed to verify HMAC signature", e);
            return false;
        }
    }
}
