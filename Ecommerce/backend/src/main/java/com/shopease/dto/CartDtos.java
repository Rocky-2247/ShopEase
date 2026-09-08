package com.shopease.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.List;

public class CartDtos {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class AddToCartRequest {
        @JsonProperty("product_id")
        private Long productId;

        @JsonProperty("variant_id")
        private Long variantId;

        @Builder.Default
        private Integer quantity = 1;

        @JsonProperty("session_id")
        private String sessionId;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class UpdateCartItemRequest {
        private Long id;

        @JsonProperty("product_id")
        private Long productId;

        private Integer quantity;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class MergeCartRequest {
        @JsonProperty("session_id")
        private String sessionId;

        private List<AddToCartRequest> items;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class CartItemResponse {
        private Long id;

        @JsonProperty("product_id")
        private Long productId;

        @JsonProperty("variant_id")
        private Long variantId;

        private Integer quantity;

        private Object product;

        @JsonProperty("item_total")
        private Double itemTotal;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class CartResponse {
        private List<CartItemResponse> items;
        private Double subtotal;
        private Integer count;
    }
}
