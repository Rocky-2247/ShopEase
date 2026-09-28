package com.shopease.repository;

import com.shopease.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

    List<OrderItem> findByOrderId(Long orderId);

    @Query("SELECT COUNT(oi) > 0 FROM OrderItem oi JOIN Order o ON oi.orderId = o.id WHERE o.userId = :userId AND oi.productId = :productId AND o.orderStatus != 'Cancelled'")
    boolean existsByUserIdAndProductIdPurchased(@Param("userId") Long userId, @Param("productId") Long productId);
}
