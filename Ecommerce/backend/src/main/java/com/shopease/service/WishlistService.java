package com.shopease.service;

import com.shopease.dto.CartDtos.AddToCartRequest;
import com.shopease.entity.Product;
import com.shopease.entity.WishlistItem;
import com.shopease.repository.ProductRepository;
import com.shopease.repository.WishlistItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class WishlistService {

    private final WishlistItemRepository wishlistRepository;
    private final ProductRepository productRepository;
    private final CartService cartService;

    @Transactional(readOnly = true)
    public List<Product> getWishlist(Long userId) {
        List<WishlistItem> items = wishlistRepository.findByUserIdOrderByCreatedAtDesc(userId);
        return items.stream()
                .map(item -> {
                    if (item.getProduct() != null) return item.getProduct();
                    return productRepository.findById(item.getProductId()).orElse(null);
                })
                .filter(Objects::nonNull)
                .toList();
    }

    @Transactional
    public boolean toggleWishlist(Long userId, Long productId) {
        Optional<WishlistItem> existing = wishlistRepository.findByUserIdAndProductId(userId, productId);

        if (existing.isPresent()) {
            wishlistRepository.delete(existing.get());
            return false; // Removed
        } else {
            WishlistItem item = WishlistItem.builder()
                    .userId(userId)
                    .productId(productId)
                    .build();
            wishlistRepository.save(item);
            return true; // Added
        }
    }

    @Transactional
    public void removeFromWishlist(Long userId, Long productId) {
        wishlistRepository.deleteByUserIdAndProductId(userId, productId);
    }

    @Transactional
    public void moveToCart(Long userId, Long productId) {
        wishlistRepository.deleteByUserIdAndProductId(userId, productId);

        cartService.addToCart(userId, AddToCartRequest.builder()
                .productId(productId)
                .quantity(1)
                .build());
    }
}
