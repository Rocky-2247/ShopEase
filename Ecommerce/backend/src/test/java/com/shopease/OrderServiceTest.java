package com.shopease;

import com.shopease.dto.OrderDtos.CheckoutItem;
import com.shopease.dto.OrderDtos.CheckoutRequest;
import com.shopease.entity.Order;
import com.shopease.entity.OrderItem;
import com.shopease.entity.Product;
import com.shopease.entity.User;
import com.shopease.repository.*;
import com.shopease.service.OrderService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;
    @Mock
    private OrderItemRepository orderItemRepository;
    @Mock
    private ProductRepository productRepository;
    @Mock
    private ProductVariantRepository productVariantRepository;
    @Mock
    private UserRepository userRepository;
    @Mock
    private CouponRepository couponRepository;
    @Mock
    private CartItemRepository cartItemRepository;

    @InjectMocks
    private OrderService orderService;

    private User testUser;
    private Product testProduct;

    @BeforeEach
    void setUp() {
        testUser = User.builder()
                .id(1L)
                .name("Alex User")
                .email("user@test.com")
                .pointsBalance(200)
                .role("customer")
                .build();

        testProduct = Product.builder()
                .id(10L)
                .name("Premium Wireless Headphones")
                .price(120.0)
                .stock(15)
                .build();
    }

    @Test
    @DisplayName("Should successfully place an order and decrement product stock")
    void testCreateOrder_Success() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(testUser));
        when(productRepository.findById(10L)).thenReturn(Optional.of(testProduct));

        Order savedOrder = Order.builder()
                .id(100L)
                .orderNumber("SE-20260925-ABCD")
                .userId(1L)
                .totalAmount(120.0)
                .discountAmount(0.0)
                .shippingCharge(0.0)
                .finalAmount(120.0)
                .orderStatus("Confirmed")
                .build();

        when(orderRepository.save(any(Order.class))).thenReturn(savedOrder);

        CheckoutRequest request = new CheckoutRequest();
        CheckoutItem item = new CheckoutItem();
        item.setProductId(10L);
        item.setQuantity(2);
        request.setItems(List.of(item));
        request.setShippingAddress(Map.of("fullName", "Alex", "city", "New York", "street", "123 Main St"));
        request.setPaymentMethod("COD");

        Map<String, Object> result = orderService.createOrder(1L, request);

        assertNotNull(result);
        assertEquals(100L, ((Order) result.get("order")).getId());
        assertEquals(240, result.get("earned_points"));
        // Check product stock decremented: 15 - 2 = 13
        assertEquals(13, testProduct.getStock());
        verify(productRepository, times(1)).save(testProduct);
        verify(cartItemRepository, times(1)).deleteByUserId(1L);
    }

    @Test
    @DisplayName("Should cancel order and restock items")
    void testCancelOrder_RestocksItems() {
        OrderItem item = OrderItem.builder()
                .id(1L)
                .orderId(100L)
                .productId(10L)
                .quantity(3)
                .build();

        Order order = Order.builder()
                .id(100L)
                .orderNumber("SE-20260925-ABCD")
                .userId(1L)
                .orderStatus("Confirmed")
                .items(List.of(item))
                .build();

        when(orderRepository.findById(100L)).thenReturn(Optional.of(order));
        when(productRepository.findById(10L)).thenReturn(Optional.of(testProduct));
        when(orderRepository.save(any(Order.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Order cancelled = orderService.cancelOrder(100L, 1L, "customer");

        assertNotNull(cancelled);
        assertEquals("Cancelled", cancelled.getOrderStatus());
        // Stock should be replenished: 15 + 3 = 18
        assertEquals(18, testProduct.getStock());
        verify(productRepository, times(1)).save(testProduct);
    }
}
