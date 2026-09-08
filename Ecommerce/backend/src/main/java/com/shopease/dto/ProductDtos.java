package com.shopease.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.time.LocalDateTime;

public class ProductDtos {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class ProductCreateUpdateRequest {
        private String name;
        private String description;
        private Double price;

        @JsonProperty("discount_price")
        private Double discountPrice;

        private Integer stock;

        @JsonProperty("category_id")
        private Long categoryId;

        @JsonProperty("image_url")
        private String imageUrl;

        @JsonProperty("video_url")
        private String videoUrl;

        private Object images; // Can be List<String> or JSON String

        @JsonProperty("is_featured")
        private Boolean isFeatured;

        @JsonProperty("is_trending")
        private Boolean isTrending;

        private Object specifications; // Can be Map or JSON String
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class ReviewCreateRequest {
        private Double rating;
        private String comment;

        @JsonProperty("image_url")
        private String imageUrl;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class CategoryCreateUpdateRequest {
        private String name;
        private String description;

        @JsonProperty("image_url")
        private String imageUrl;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class CouponCreateUpdateRequest {
        private String code;

        @JsonProperty("discount_percentage")
        private Double discountPercentage;

        @JsonProperty("max_discount")
        private Double maxDiscount;

        @JsonProperty("min_order_value")
        private Double minOrderValue;

        @JsonProperty("is_active")
        private Boolean isActive;

        @JsonProperty("expires_at")
        private LocalDateTime expiresAt;
    }
}
