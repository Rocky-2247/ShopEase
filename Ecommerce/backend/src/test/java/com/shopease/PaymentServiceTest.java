package com.shopease;

import com.shopease.dto.OrderDtos.CreateRazorpayOrderRequest;
import com.shopease.dto.OrderDtos.ValidateCouponRequest;
import com.shopease.dto.OrderDtos.VerifyRazorpayPaymentRequest;
import com.shopease.entity.Coupon;
import com.shopease.repository.CouponRepository;
import com.shopease.service.PaymentService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.util.ReflectionTestUtils;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class PaymentServiceTest {

    @Mock
    private CouponRepository couponRepository;

    @InjectMocks
    private PaymentService paymentService;

    private Coupon testCoupon;

    @BeforeEach
    void setUp() {
        ReflectionTestUtils.setField(paymentService, "razorpayKeyId", "rzp_test_key_123");
        ReflectionTestUtils.setField(paymentService, "razorpayKeySecret", "rzp_test_secret_456");

        testCoupon = Coupon.builder()
                .id(1L)
                .code("SAVE20")
                .discountPercentage(20.0)
                .minOrderValue(50.0)
                .maxDiscount(100.0)
                .isActive(true)
                .expiresAt(LocalDateTime.now().plusDays(30))
                .build();
    }

    @Test
    @DisplayName("Should successfully validate a valid active coupon")
    void testValidateCoupon_Success() {
        when(couponRepository.findByCodeIgnoreCase("SAVE20")).thenReturn(Optional.of(testCoupon));

        ValidateCouponRequest request = new ValidateCouponRequest();
        request.setCode("SAVE20");
        request.setOrderAmount(100.0);

        Map<String, Object> result = paymentService.validateCoupon(request);

        assertNotNull(result);
        assertEquals("SAVE20", result.get("code"));
        assertEquals(20.0, result.get("discount_amount"));
        assertEquals(20.0, result.get("discount_percentage"));
    }

    @Test
    @DisplayName("Should throw exception when order amount is below minimum coupon value")
    void testValidateCoupon_BelowMinAmount() {
        when(couponRepository.findByCodeIgnoreCase("SAVE20")).thenReturn(Optional.of(testCoupon));

        ValidateCouponRequest request = new ValidateCouponRequest();
        request.setCode("SAVE20");
        request.setOrderAmount(30.0);

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () ->
                paymentService.validateCoupon(request));

        assertTrue(exception.getMessage().contains("Minimum order amount"));
    }

    @Test
    @DisplayName("Should throw exception when coupon has expired")
    void testValidateCoupon_Expired() {
        testCoupon.setExpiresAt(LocalDateTime.now().minusDays(1));
        when(couponRepository.findByCodeIgnoreCase("SAVE20")).thenReturn(Optional.of(testCoupon));

        ValidateCouponRequest request = new ValidateCouponRequest();
        request.setCode("SAVE20");
        request.setOrderAmount(100.0);

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () ->
                paymentService.validateCoupon(request));

        assertTrue(exception.getMessage().contains("expired"));
    }

    @Test
    @DisplayName("Should create gateway order successfully")
    void testCreateRazorpayOrder() {
        CreateRazorpayOrderRequest request = new CreateRazorpayOrderRequest();
        request.setAmount(150.50);
        request.setCurrency("INR");

        Map<String, Object> result = paymentService.createRazorpayOrder(request);

        assertNotNull(result);
        assertTrue(result.containsKey("order_id"));
        assertEquals(15050L, result.get("amount"));
        assertEquals("INR", result.get("currency"));
        assertEquals("rzp_test_key_123", result.get("key_id"));
    }

    @Test
    @DisplayName("Should verify valid payment ID")
    void testVerifyRazorpayPayment() {
        VerifyRazorpayPaymentRequest request = new VerifyRazorpayPaymentRequest();
        request.setRazorpayPaymentId("pay_test_998877");

        Map<String, Object> result = paymentService.verifyRazorpayPayment(request);

        assertNotNull(result);
        assertEquals("pay_test_998877", result.get("payment_id"));
        assertEquals(true, result.get("verified"));
    }
}
