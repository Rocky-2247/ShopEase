package com.shopease.service;

import com.shopease.dto.ProductDtos.ReviewCreateRequest;
import com.shopease.entity.Product;
import com.shopease.entity.Review;
import com.shopease.entity.User;
import com.shopease.repository.ProductRepository;
import com.shopease.repository.ReviewRepository;
import com.shopease.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<Review> getProductReviews(Long productId) {
        return reviewRepository.findByProductIdOrderByCreatedAtDesc(productId);
    }

    @Transactional
    public Review addProductReview(Long userId, Long productId, ReviewCreateRequest request) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (request.getRating() == null || request.getRating() < 1 || request.getRating() > 5) {
            throw new IllegalArgumentException("Rating must be between 1 and 5");
        }

        Review review = Review.builder()
                .userId(userId)
                .productId(productId)
                .userName(user.getName())
                .rating(request.getRating())
                .comment(request.getComment() != null ? request.getComment() : "")
                .imageUrl(request.getImageUrl())
                .isVerifiedBuyer(true)
                .build();

        Review savedReview = reviewRepository.save(review);

        // Recalculate average rating & review count
        Double avgRating = reviewRepository.calculateAverageRatingForProduct(productId);
        long count = reviewRepository.countByProductId(productId);

        product.setRating(avgRating != null ? Math.round(avgRating * 10.0) / 10.0 : 0.0);
        product.setNumReviews((int) count);
        productRepository.save(product);

        return savedReview;
    }
}
