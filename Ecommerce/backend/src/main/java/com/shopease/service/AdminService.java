package com.shopease.service;

import com.shopease.dto.ProductDtos.CouponCreateUpdateRequest;
import com.shopease.entity.Category;
import com.shopease.entity.Coupon;
import com.shopease.entity.Order;
import com.shopease.entity.Product;
import com.shopease.entity.User;
import com.shopease.repository.CategoryRepository;
import com.shopease.repository.CouponRepository;
import com.shopease.repository.OrderRepository;
import com.shopease.repository.ProductRepository;
import com.shopease.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Month;
import java.util.*;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final CategoryRepository categoryRepository;
    private final CouponRepository couponRepository;

    @Transactional(readOnly = true)
    public Map<String, Object> getDashboardStats() {
        long totalUsers = userRepository.countByRole("customer");
        long totalProducts = productRepository.count();
        long totalOrders = orderRepository.count();
        Double totalRevenue = orderRepository.calculateTotalRevenue();

        List<Order> recentOrders = orderRepository.findTop5ByOrderByCreatedAtDesc();
        List<Product> lowStockProducts = productRepository.findByStockLessThanEqualOrderByStockAsc(10, PageRequest.of(0, 6));

        // Monthly Sales Aggregation
        List<Order> activeOrders = orderRepository.findByOrderStatusNot("Cancelled");
        String[] monthNames = {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"};
        Map<String, Map<String, Object>> monthMap = new LinkedHashMap<>();

        int currentMonth = java.time.LocalDate.now().getMonthValue() - 1;
        for (int i = 5; i >= 0; i--) {
            int mIndex = (currentMonth - i + 12) % 12;
            String mName = monthNames[mIndex];
            Map<String, Object> mData = new HashMap<>();
            mData.put("name", mName);
            mData.put("revenue", 0.0);
            mData.put("orders", 0);
            monthMap.put(mName, mData);
        }

        for (Order o : activeOrders) {
            if (o.getCreatedAt() != null) {
                Month m = o.getCreatedAt().getMonth();
                String mName = monthNames[m.getValue() - 1];
                if (monthMap.containsKey(mName)) {
                    Map<String, Object> data = monthMap.get(mName);
                    double rev = (double) data.get("revenue") + o.getFinalAmount();
                    int count = (int) data.get("orders") + 1;
                    data.put("revenue", Math.round(rev * 100.0) / 100.0);
                    data.put("orders", count);
                }
            }
        }

        // Category distribution
        List<Category> categories = categoryRepository.findAll();
        List<Map<String, Object>> categoryDistribution = new ArrayList<>();
        for (Category c : categories) {
            categoryDistribution.add(Map.of(
                    "name", c.getName(),
                    "value", c.getItemCount() != null ? c.getItemCount() : 0
            ));
        }

        Map<String, Object> metrics = new HashMap<>();
        metrics.put("totalUsers", totalUsers);
        metrics.put("totalProducts", totalProducts);
        metrics.put("totalOrders", totalOrders);
        metrics.put("totalRevenue", totalRevenue != null ? Math.round(totalRevenue * 100.0) / 100.0 : 0.0);

        Map<String, Object> result = new HashMap<>();
        result.put("metrics", metrics);
        result.put("recentOrders", recentOrders);
        result.put("lowStockProducts", lowStockProducts);
        result.put("monthlySales", new ArrayList<>(monthMap.values()));
        result.put("categoryDistribution", categoryDistribution);

        return result;
    }

    @Transactional(readOnly = true)
    public Map<String, Object> getUsersList(String search, String role, Integer page, Integer limit) {
        int pageNumber = (page != null && page > 0) ? page : 1;
        int pageSize = (limit != null && limit > 0) ? limit : 15;
        Pageable pageable = PageRequest.of(pageNumber - 1, pageSize, Sort.by(Sort.Direction.DESC, "createdAt"));

        String filterRole = (role != null && !"all".equalsIgnoreCase(role)) ? role : null;
        String filterSearch = (search != null && !search.isBlank()) ? search.trim() : null;

        Page<User> userPage = userRepository.findUsersFiltered(filterSearch, filterRole, pageable);

        Map<String, Object> pagination = new HashMap<>();
        pagination.put("total", userPage.getTotalElements());
        pagination.put("page", pageNumber);
        pagination.put("pages", userPage.getTotalPages());
        pagination.put("limit", pageSize);

        Map<String, Object> result = new HashMap<>();
        result.put("users", userPage.getContent());
        result.put("pagination", pagination);

        return result;
    }

    @Transactional
    public Map<String, Object> toggleBlockUser(Long userId, Long currentAdminId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (user.getId().equals(currentAdminId)) {
            throw new IllegalArgumentException("You cannot block your own admin account");
        }

        user.setIsBlocked(!Boolean.TRUE.equals(user.getIsBlocked()));
        User saved = userRepository.save(user);

        return Map.of("id", saved.getId(), "is_blocked", saved.getIsBlocked());
    }

    @Transactional
    public Map<String, Object> toggleUserRole(Long userId, Long currentAdminId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (user.getId().equals(currentAdminId)) {
            throw new IllegalArgumentException("You cannot change your own admin role");
        }

        String newRole = "admin".equalsIgnoreCase(user.getRole()) ? "customer" : "admin";
        user.setRole(newRole);
        User saved = userRepository.save(user);

        return Map.of("id", saved.getId(), "role", saved.getRole());
    }

    @Transactional(readOnly = true)
    public List<Coupon> getCouponsList() {
        return couponRepository.findAllByOrderByCreatedAtDesc();
    }

    @Transactional
    public Coupon createCoupon(CouponCreateUpdateRequest request) {
        if (request.getCode() == null || request.getDiscountPercentage() == null) {
            throw new IllegalArgumentException("Coupon code and discount percentage are required");
        }

        String cleanCode = request.getCode().toUpperCase().trim();
        if (couponRepository.existsByCodeIgnoreCase(cleanCode)) {
            throw new IllegalArgumentException("Coupon code \"" + cleanCode + "\" already exists");
        }

        Coupon coupon = Coupon.builder()
                .code(cleanCode)
                .discountPercentage(request.getDiscountPercentage())
                .maxDiscount(request.getMaxDiscount())
                .minOrderValue(request.getMinOrderValue() != null ? request.getMinOrderValue() : 0.0)
                .isActive(true)
                .expiresAt(request.getExpiresAt())
                .build();

        return couponRepository.save(coupon);
    }

    @Transactional
    public Coupon updateCoupon(Long id, CouponCreateUpdateRequest request) {
        Coupon coupon = couponRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Coupon not found"));

        if (request.getCode() != null) coupon.setCode(request.getCode().toUpperCase().trim());
        if (request.getDiscountPercentage() != null) coupon.setDiscountPercentage(request.getDiscountPercentage());
        if (request.getMaxDiscount() != null) coupon.setMaxDiscount(request.getMaxDiscount());
        if (request.getMinOrderValue() != null) coupon.setMinOrderValue(request.getMinOrderValue());
        if (request.getExpiresAt() != null) coupon.setExpiresAt(request.getExpiresAt());
        if (request.getIsActive() != null) coupon.setIsActive(request.getIsActive());

        return couponRepository.save(coupon);
    }

    @Transactional
    public void deleteCoupon(Long id) {
        Coupon coupon = couponRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Coupon not found"));

        couponRepository.delete(coupon);
    }

    @Transactional
    public Coupon toggleCouponStatus(Long id) {
        Coupon coupon = couponRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Coupon not found"));

        coupon.setIsActive(!Boolean.TRUE.equals(coupon.getIsActive()));
        return couponRepository.save(coupon);
    }
}
