package com.shopease.repository;

import com.shopease.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    List<CartItem> findByUserIdOrderByCreatedAtDesc(Long userId);

    List<CartItem> findBySessionIdOrderByCreatedAtDesc(String sessionId);

    Optional<CartItem> findByUserIdAndProductIdAndVariantId(Long userId, Long productId, Long variantId);

    Optional<CartItem> findBySessionIdAndProductIdAndVariantId(String sessionId, Long productId, Long variantId);

    Optional<CartItem> findByUserIdAndProductIdAndVariantIdIsNull(Long userId, Long productId);

    Optional<CartItem> findBySessionIdAndProductIdAndVariantIdIsNull(String sessionId, Long productId);

    Optional<CartItem> findFirstByUserIdAndProductId(Long userId, Long productId);

    Optional<CartItem> findFirstBySessionIdAndProductId(String sessionId, Long productId);

    void deleteByUserId(Long userId);

    void deleteBySessionId(String sessionId);
}
