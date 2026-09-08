package com.shopease.controller;

import com.shopease.dto.ApiResponse;
import com.shopease.dto.CartDtos.*;
import com.shopease.security.UserPrincipal;
import com.shopease.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping
    public ResponseEntity<ApiResponse<CartResponse>> getCart(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @RequestHeader(value = "x-session-id", required = false) String sessionId,
            @RequestParam(value = "session_id", required = false) String paramSessionId) {

        Long userId = (currentUser != null) ? currentUser.getId() : null;
        String activeSessionId = (sessionId != null && !sessionId.isBlank()) ? sessionId : paramSessionId;

        CartResponse cart = cartService.getCart(userId, activeSessionId);
        return ResponseEntity.ok(ApiResponse.success(cart));
    }

    @PostMapping("/add")
    public ResponseEntity<ApiResponse<CartResponse>> addToCart(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @RequestHeader(value = "x-session-id", required = false) String sessionId,
            @RequestBody AddToCartRequest request) {

        Long userId = (currentUser != null) ? currentUser.getId() : null;
        if (request.getSessionId() == null || request.getSessionId().isBlank()) {
            request.setSessionId(sessionId);
        }

        try {
            CartResponse cart = cartService.addToCart(userId, request);
            return ResponseEntity.ok(ApiResponse.success(cart, "Item added to database cart successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @PutMapping("/update")
    public ResponseEntity<ApiResponse<CartResponse>> updateCartItem(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @RequestHeader(value = "x-session-id", required = false) String sessionId,
            @RequestBody UpdateCartItemRequest request) {

        Long userId = (currentUser != null) ? currentUser.getId() : null;
        try {
            CartResponse cart = cartService.updateCartItem(userId, sessionId, request);
            return ResponseEntity.ok(ApiResponse.success(cart, "Cart updated successfully in database"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<ApiResponse<CartResponse>> removeFromCart(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @RequestHeader(value = "x-session-id", required = false) String sessionId,
            @PathVariable Long id) {

        Long userId = (currentUser != null) ? currentUser.getId() : null;
        try {
            CartResponse cart = cartService.removeFromCart(userId, sessionId, id);
            return ResponseEntity.ok(ApiResponse.success(cart, "Item removed from database cart"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @DeleteMapping("/clear")
    public ResponseEntity<ApiResponse<CartResponse>> clearCart(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @RequestHeader(value = "x-session-id", required = false) String sessionId) {

        Long userId = (currentUser != null) ? currentUser.getId() : null;
        CartResponse cart = cartService.clearCart(userId, sessionId);
        return ResponseEntity.ok(ApiResponse.success(cart, "Cart cleared successfully from database"));
    }

    @PostMapping("/merge")
    public ResponseEntity<ApiResponse<CartResponse>> mergeGuestCart(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @RequestBody MergeCartRequest request) {

        if (currentUser == null) {
            return ResponseEntity.status(401).body(ApiResponse.error("Not authorized, please sign in"));
        }

        try {
            CartResponse cart = cartService.mergeGuestCart(currentUser.getId(), request);
            return ResponseEntity.ok(ApiResponse.success(cart, "Cart merged successfully into your account"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
}
