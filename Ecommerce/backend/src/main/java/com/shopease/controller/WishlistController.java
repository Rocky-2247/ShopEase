package com.shopease.controller;

import com.shopease.dto.ApiResponse;
import com.shopease.entity.Product;
import com.shopease.security.UserPrincipal;
import com.shopease.service.WishlistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/wishlist")
@RequiredArgsConstructor
public class WishlistController {

    private final WishlistService wishlistService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<Product>>> getWishlist(@AuthenticationPrincipal UserPrincipal currentUser) {
        if (currentUser == null) {
            return ResponseEntity.status(401).body(ApiResponse.error("Not authorized"));
        }
        List<Product> wishlist = wishlistService.getWishlist(currentUser.getId());
        return ResponseEntity.ok(ApiResponse.success(wishlist));
    }

    @PostMapping("/toggle")
    public ResponseEntity<ApiResponse<Map<String, Object>>> toggleWishlist(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @RequestBody Map<String, Long> payload) {

        if (currentUser == null) {
            return ResponseEntity.status(401).body(ApiResponse.error("Not authorized"));
        }

        Long productId = payload.get("product_id");
        if (productId == null) {
            return ResponseEntity.badRequest().body(ApiResponse.error("Product ID is required"));
        }

        boolean added = wishlistService.toggleWishlist(currentUser.getId(), productId);
        String msg = added ? "Added to wishlist" : "Removed from wishlist";
        return ResponseEntity.ok(ApiResponse.success(Map.of("added", added, "is_wishlisted", added), msg));
    }

    @DeleteMapping("/remove/{productId}")
    public ResponseEntity<ApiResponse<Void>> removeFromWishlist(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @PathVariable Long productId) {

        if (currentUser == null) {
            return ResponseEntity.status(401).body(ApiResponse.error("Not authorized"));
        }

        wishlistService.removeFromWishlist(currentUser.getId(), productId);
        return ResponseEntity.ok(ApiResponse.success(null, "Item removed from wishlist"));
    }

    @PostMapping("/move-to-cart")
    public ResponseEntity<ApiResponse<Void>> moveToCart(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @RequestBody Map<String, Long> payload) {

        if (currentUser == null) {
            return ResponseEntity.status(401).body(ApiResponse.error("Not authorized"));
        }

        Long productId = payload.get("product_id");
        if (productId == null) {
            return ResponseEntity.badRequest().body(ApiResponse.error("Product ID is required"));
        }

        wishlistService.moveToCart(currentUser.getId(), productId);
        return ResponseEntity.ok(ApiResponse.success(null, "Item moved to cart"));
    }
}
