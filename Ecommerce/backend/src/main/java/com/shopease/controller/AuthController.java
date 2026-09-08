package com.shopease.controller;

import com.shopease.dto.ApiResponse;
import com.shopease.dto.AuthDtos.*;
import com.shopease.entity.Address;
import com.shopease.security.UserPrincipal;
import com.shopease.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<AuthResponse>> registerUser(@Valid @RequestBody RegisterRequest request) {
        try {
            AuthResponse response = authService.registerUser(request);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(ApiResponse.success(response, "Registration successful! Welcome to ShopEase."));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthResponse>> loginUser(@Valid @RequestBody LoginRequest request) {
        try {
            AuthResponse response = authService.loginUser(request);
            return ResponseEntity.ok(ApiResponse.success(response, "Login successful"));
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(ApiResponse.error(e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error(e.getMessage()));
        }
    }

    @GetMapping("/profile")
    public ResponseEntity<ApiResponse<Map<String, Object>>> getUserProfile(@AuthenticationPrincipal UserPrincipal currentUser) {
        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error("Not authorized, please sign in"));
        }
        Map<String, Object> profile = authService.getUserProfile(currentUser.getId());
        return ResponseEntity.ok(ApiResponse.success(profile));
    }

    @PutMapping("/profile")
    public ResponseEntity<ApiResponse<AuthResponse>> updateUserProfile(@AuthenticationPrincipal UserPrincipal currentUser,
                                                                       @RequestBody UpdateProfileRequest request) {
        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error("Not authorized"));
        }
        AuthResponse response = authService.updateUserProfile(currentUser.getId(), request);
        return ResponseEntity.ok(ApiResponse.success(response, "Profile updated successfully"));
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<ApiResponse<Object>> forgotPassword(@RequestBody ForgotPasswordRequest request) {
        Map<String, Object> result = authService.forgotPassword(request.getEmail());
        ApiResponse<Object> apiResp = ApiResponse.builder()
                .success(true)
                .message((String) result.get("message"))
                .data(result.get("data"))
                .build();
        return ResponseEntity.ok(apiResp);
    }

    @PostMapping({"/reset-password", "/reset-password/{token}"})
    public ResponseEntity<ApiResponse<AuthResponse>> resetPassword(@PathVariable(required = false) String token,
                                                                   @RequestBody ResetPasswordRequest request) {
        try {
            String resetToken = (token != null && !token.isBlank()) ? token : request.getToken();
            AuthResponse response = authService.resetPassword(resetToken, request.getPassword());
            return ResponseEntity.ok(ApiResponse.success(response, "Password reset successfully! You can now sign in with your new password."));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @GetMapping("/addresses")
    public ResponseEntity<ApiResponse<List<Address>>> getUserAddresses(@AuthenticationPrincipal UserPrincipal currentUser) {
        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error("Not authorized"));
        }
        List<Address> addresses = authService.getUserAddresses(currentUser.getId());
        return ResponseEntity.ok(ApiResponse.success(addresses));
    }

    @PostMapping("/addresses")
    public ResponseEntity<ApiResponse<Address>> addAddress(@AuthenticationPrincipal UserPrincipal currentUser,
                                                           @RequestBody AddressRequest request) {
        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error("Not authorized"));
        }
        Address address = authService.addAddress(currentUser.getId(), request);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success(address, "Address saved"));
    }

    @PutMapping("/addresses/{id}")
    public ResponseEntity<ApiResponse<Address>> updateAddress(@AuthenticationPrincipal UserPrincipal currentUser,
                                                              @PathVariable Long id,
                                                              @RequestBody AddressRequest request) {
        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error("Not authorized"));
        }
        Address address = authService.updateAddress(id, currentUser.getId(), request);
        return ResponseEntity.ok(ApiResponse.success(address, "Address updated"));
    }

    @DeleteMapping("/addresses/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteAddress(@AuthenticationPrincipal UserPrincipal currentUser,
                                                           @PathVariable Long id) {
        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResponse.error("Not authorized"));
        }
        authService.deleteAddress(id, currentUser.getId());
        return ResponseEntity.ok(ApiResponse.success(null, "Address deleted successfully"));
    }
}
