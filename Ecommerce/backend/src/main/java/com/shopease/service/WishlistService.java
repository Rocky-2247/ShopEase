package com.shopease.service;

import com.shopease.dto.CartDtos.AddToCartRequest;
import com.shopease.entity.WishlistItem;
import com.shopease.repository.WishlistItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class WishlistService {

    private final WishlistItemRepository wishlistRepository;
    private final CartService cartService;

    @Transactional(readOnly = true)
    public List<WishlistItem> getWishlist(Long userId) {
        return wishlistRepository.findByUserIdOrderByCreatedAtDesc(userId);
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
