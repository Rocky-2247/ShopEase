package com.shopease.controller;

import com.shopease.dto.ApiResponse;
import com.shopease.dto.OrderDtos.CheckoutRequest;
import com.shopease.dto.OrderDtos.OrderStatusUpdateRequest;
import com.shopease.dto.OrderDtos.OrderReturnRequest;
import com.shopease.dto.OrderDtos.OrderReturnStatusUpdateRequest;
import com.shopease.entity.Order;
import com.shopease.entity.User;
import com.shopease.repository.UserRepository;
import com.shopease.security.UserPrincipal;
import com.shopease.service.InvoiceService;
import com.shopease.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final InvoiceService invoiceService;
    private final UserRepository userRepository;

    @PostMapping
    public ResponseEntity<ApiResponse<Object>> createOrder(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @RequestBody CheckoutRequest request) {

        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error("Not authorized, please sign in"));
        }

        try {
            Map<String, Object> result = orderService.createOrder(currentUser.getId(), request);
            Order order = (Order) result.get("order");
            Integer earnedPoints = (Integer) result.get("earned_points");
            String orderNumber = (String) result.get("order_number");

            ApiResponse<Object> response = ApiResponse.builder()
                    .success(true)
                    .data(order)
                    .earned_points(earnedPoints)
                    .message("Order #" + orderNumber + " placed successfully! You earned " + earnedPoints + " ShopPoints.")
                    .build();

            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Order>>> getUserOrders(@AuthenticationPrincipal UserPrincipal currentUser) {
        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error("Not authorized"));
        }
        List<Order> orders = orderService.getUserOrders(currentUser.getId());
        return ResponseEntity.ok(ApiResponse.success(orders));
    }

    @GetMapping("/admin/all")
    public ResponseEntity<ApiResponse<Object>> getAllOrdersAdmin(
            @RequestParam(required = false) String status,
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "10") Integer limit) {

        Map<String, Object> result = orderService.getAllOrdersAdmin(status, page, limit);

        ApiResponse<Object> response = ApiResponse.builder()
                .success(true)
                .data(result)
                .build();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{idOrOrderNumber}")
    public ResponseEntity<ApiResponse<Order>> getOrderById(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @PathVariable String idOrOrderNumber) {

        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error("Not authorized"));
        }

        try {
            Order order = orderService.getOrderById(idOrOrderNumber, currentUser.getId(), currentUser.getRole());
            return ResponseEntity.ok(ApiResponse.success(order));
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(ApiResponse.error(e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error("Order not found"));
        }
    }

    @PutMapping("/{id}/cancel")
    public ResponseEntity<ApiResponse<Order>> cancelOrder(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @PathVariable Long id) {

        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error("Not authorized"));
        }

        try {
            Order cancelledOrder = orderService.cancelOrder(id, currentUser.getId(), currentUser.getRole());
            return ResponseEntity.ok(ApiResponse.success(cancelledOrder, "Order cancelled successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @GetMapping("/{idOrOrderNumber}/invoice")
    public ResponseEntity<?> downloadInvoice(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @PathVariable String idOrOrderNumber) {

        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error("Not authorized, please sign in"));
        }

        try {
            Order order = orderService.getOrderById(idOrOrderNumber, currentUser.getId(), currentUser.getRole());
            User user = userRepository.findById(order.getUserId()).orElse(null);

            byte[] pdfBytes = invoiceService.generateInvoicePdf(order, user);

            String filename = "Invoice-" + order.getOrderNumber() + ".pdf";

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(pdfBytes);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<ApiResponse<Order>> updateOrderStatus(
            @PathVariable Long id,
            @RequestBody OrderStatusUpdateRequest request) {

        try {
            Order updated = orderService.updateOrderStatusAdmin(id, request);
            return ResponseEntity.ok(ApiResponse.success(updated, "Order status updated to \"" + updated.getOrderStatus() + "\""));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @PostMapping("/{id}/return")
    public ResponseEntity<ApiResponse<Order>> requestOrderReturn(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @PathVariable Long id,
            @RequestBody OrderReturnRequest request) {

        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error("Not authorized, please sign in"));
        }

        try {
            Order returnedOrder = orderService.requestReturn(id, currentUser.getId(), request);
            return ResponseEntity.ok(ApiResponse.success(returnedOrder, "Return request submitted successfully. Support will review shortly."));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @PutMapping("/{id}/return-status")
    public ResponseEntity<ApiResponse<Order>> updateOrderReturnStatus(
            @PathVariable Long id,
            @RequestBody OrderReturnStatusUpdateRequest request) {

        try {
            Order updated = orderService.updateReturnStatus(id, request);
            String actionMsg = "Approved".equalsIgnoreCase(request.getReturnStatus()) 
                    ? "Return approved! Order has been refunded and items restocked." 
                    : "Return request marked as " + request.getReturnStatus();
            return ResponseEntity.ok(ApiResponse.success(updated, actionMsg));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
}
