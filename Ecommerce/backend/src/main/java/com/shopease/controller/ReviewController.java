package com.shopease.controller;

import com.shopease.dto.ApiResponse;
import com.shopease.dto.ProductDtos.ReviewCreateRequest;
import com.shopease.entity.Review;
import com.shopease.security.UserPrincipal;
import com.shopease.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping("/product/{id}")
    public ResponseEntity<ApiResponse<List<Review>>> getProductReviews(@PathVariable Long id) {
        List<Review> reviews = reviewService.getProductReviews(id);
        return ResponseEntity.ok(ApiResponse.success(reviews));
    }

    @PostMapping("/product/{id}")
    public ResponseEntity<ApiResponse<Review>> addProductReview(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @PathVariable Long id,
            @RequestBody ReviewCreateRequest request) {

        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error("Not authorized, please sign in"));
        }

        try {
            Review review = reviewService.addProductReview(currentUser.getId(), id, request);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(ApiResponse.success(review, "Review submitted successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
}
