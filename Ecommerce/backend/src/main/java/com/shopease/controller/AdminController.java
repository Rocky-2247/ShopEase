package com.shopease.controller;

import com.shopease.dto.ApiResponse;
import com.shopease.dto.ProductDtos.CouponCreateUpdateRequest;
import com.shopease.entity.Coupon;
import com.shopease.security.UserPrincipal;
import com.shopease.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/dashboard")
    public ResponseEntity<ApiResponse<Map<String, Object>>> getDashboardStats() {
        Map<String, Object> stats = adminService.getDashboardStats();
        return ResponseEntity.ok(ApiResponse.success(stats));
    }

    @GetMapping("/users")
    public ResponseEntity<ApiResponse<Object>> getUsers(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String role,
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "15") Integer limit) {

        Map<String, Object> result = adminService.getUsersList(search, role, page, limit);
        ApiResponse<Object> response = ApiResponse.builder()
                .success(true)
                .data(result)
                .build();
        return ResponseEntity.ok(response);
    }

    @PutMapping("/users/{id}/toggle-block")
    public ResponseEntity<ApiResponse<Map<String, Object>>> toggleBlockUser(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @PathVariable Long id) {

        try {
            Map<String, Object> result = adminService.toggleBlockUser(id, currentUser.getId());
            boolean isBlocked = (boolean) result.get("is_blocked");
            String msg = "User account is now " + (isBlocked ? "BLOCKED" : "ACTIVE");
            return ResponseEntity.ok(ApiResponse.success(result, msg));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @PutMapping("/users/{id}/toggle-role")
    public ResponseEntity<ApiResponse<Map<String, Object>>> toggleUserRole(
            @AuthenticationPrincipal UserPrincipal currentUser,
            @PathVariable Long id) {

        try {
            Map<String, Object> result = adminService.toggleUserRole(id, currentUser.getId());
            String role = (String) result.get("role");
            String msg = "User role updated to " + role.toUpperCase();
            return ResponseEntity.ok(ApiResponse.success(result, msg));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @GetMapping("/coupons")
    public ResponseEntity<ApiResponse<List<Coupon>>> getCoupons() {
        List<Coupon> coupons = adminService.getCouponsList();
        return ResponseEntity.ok(ApiResponse.success(coupons));
    }

    @PostMapping("/coupons")
    public ResponseEntity<ApiResponse<Coupon>> createCoupon(@RequestBody CouponCreateUpdateRequest request) {
        try {
            Coupon created = adminService.createCoupon(request);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(ApiResponse.success(created, "Coupon \"" + created.getCode() + "\" created successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @PutMapping("/coupons/{id}")
    public ResponseEntity<ApiResponse<Coupon>> updateCoupon(
            @PathVariable Long id,
            @RequestBody CouponCreateUpdateRequest request) {

        try {
            Coupon updated = adminService.updateCoupon(id, request);
            return ResponseEntity.ok(ApiResponse.success(updated, "Coupon \"" + updated.getCode() + "\" updated successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @DeleteMapping("/coupons/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteCoupon(@PathVariable Long id) {
        try {
            adminService.deleteCoupon(id);
            return ResponseEntity.ok(ApiResponse.success(null, "Coupon deleted successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error(e.getMessage()));
        }
    }

    @PutMapping("/coupons/{id}/toggle")
    public ResponseEntity<ApiResponse<Coupon>> toggleCouponStatus(@PathVariable Long id) {
        try {
            Coupon coupon = adminService.toggleCouponStatus(id);
            String msg = "Coupon \"" + coupon.getCode() + "\" is now " + (Boolean.TRUE.equals(coupon.getIsActive()) ? "ACTIVE" : "DEACTIVATED");
            return ResponseEntity.ok(ApiResponse.success(coupon, msg));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error(e.getMessage()));
        }
    }
}
