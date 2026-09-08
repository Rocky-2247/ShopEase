package com.shopease.repository;

import com.shopease.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByUserIdOrderByCreatedAtDesc(Long userId);

    Optional<Order> findByOrderNumber(String orderNumber);

    Optional<Order> findByRazorpayOrderId(String razorpayOrderId);

    Optional<Order> findByIdAndUserId(Long id, Long userId);

    @Query("SELECT COALESCE(SUM(o.finalAmount), 0.0) FROM Order o WHERE o.orderStatus <> 'Cancelled'")
    Double calculateTotalRevenue();

    @Query("SELECT o FROM Order o WHERE (:status IS NULL OR o.orderStatus = :status)")
    Page<Order> findOrdersFiltered(@Param("status") String status, Pageable pageable);

    List<Order> findTop5ByOrderByCreatedAtDesc();

    List<Order> findByOrderStatusNot(String status);
}
