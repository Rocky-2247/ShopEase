package com.shopease.service;

import com.shopease.dto.AuthDtos.*;
import com.shopease.entity.Address;
import com.shopease.entity.User;
import com.shopease.repository.AddressRepository;
import com.shopease.repository.UserRepository;
import com.shopease.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final AddressRepository addressRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    public AuthResponse registerUser(RegisterRequest request) {
        String emailClean = request.getEmail().toLowerCase().trim();

        if (userRepository.existsByEmailIgnoreCase(emailClean)) {
            throw new IllegalArgumentException("An account with this email already exists");
        }

        User user = User.builder()
                .name(request.getName())
                .email(emailClean)
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(request.getPhone() != null ? request.getPhone() : "")
                .role("customer")
                .pointsBalance(100) // 100 bonus welcome points
                .isBlocked(false)
                .build();

        User savedUser = userRepository.save(user);
        String token = jwtTokenProvider.generateToken(savedUser.getId());

        return AuthResponse.builder()
                .id(savedUser.getId())
                .name(savedUser.getName())
                .email(savedUser.getEmail())
                .phone(savedUser.getPhone())
                .role(savedUser.getRole())
                .token(token)
                .build();
    }

    @Transactional(readOnly = true)
    public AuthResponse loginUser(LoginRequest request) {
        String emailClean = request.getEmail().toLowerCase().trim();

        User user = userRepository.findByEmailIgnoreCase(emailClean)
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        if (Boolean.TRUE.equals(user.getIsBlocked())) {
            throw new IllegalStateException("Account is blocked. Please contact customer support.");
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        String token = jwtTokenProvider.generateToken(user.getId());

        return AuthResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .role(user.getRole())
                .token(token)
                .build();
    }

    @Transactional(readOnly = true)
    public Map<String, Object> getUserProfile(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        List<Address> addresses = addressRepository.findByUserIdOrderByIsDefaultDescCreatedAtDesc(userId);

        Map<String, Object> profile = new HashMap<>();
        profile.put("id", user.getId());
        profile.put("name", user.getName());
        profile.put("email", user.getEmail());
        profile.put("phone", user.getPhone());
        profile.put("role", user.getRole());
        profile.put("points_balance", user.getPointsBalance());
        profile.put("is_blocked", user.getIsBlocked());
        profile.put("addresses", addresses);

        return profile;
    }

    @Transactional
    public AuthResponse updateUserProfile(Long userId, UpdateProfileRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (request.getName() != null && !request.getName().isBlank()) {
            user.setName(request.getName());
        }
        if (request.getPhone() != null) {
            user.setPhone(request.getPhone());
        }
        if (request.getPassword() != null && !request.getPassword().isBlank()) {
            user.setPassword(passwordEncoder.encode(request.getPassword()));
        }

        User updatedUser = userRepository.save(user);
        String token = jwtTokenProvider.generateToken(updatedUser.getId());

        return AuthResponse.builder()
                .id(updatedUser.getId())
                .name(updatedUser.getName())
                .email(updatedUser.getEmail())
                .phone(updatedUser.getPhone())
                .role(updatedUser.getRole())
                .token(token)
                .build();
    }

    @Transactional(readOnly = true)
    public Map<String, Object> forgotPassword(String email) {
        String emailClean = email.toLowerCase().trim();
        User user = userRepository.findByEmailIgnoreCase(emailClean).orElse(null);

        Map<String, Object> result = new HashMap<>();
        if (user != null) {
            String resetToken = jwtTokenProvider.generatePasswordResetToken(user.getId());
            Map<String, String> data = new HashMap<>();
            data.put("reset_token", resetToken);
            data.put("reset_url", "/reset-password/" + resetToken);
            result.put("data", data);
        } else {
            result.put("data", null);
        }
        result.put("message", "If an account exists with this email, a password reset link has been dispatched.");
        return result;
    }

    @Transactional
    public AuthResponse resetPassword(String token, String newPassword) {
        if (token == null || !jwtTokenProvider.validateToken(token)) {
            throw new IllegalArgumentException("Password reset link has expired or is invalid. Please request a new one.");
        }

        Long userId = jwtTokenProvider.getUserIdFromJWT(token);
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User account not found"));

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);

        return AuthResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .token(jwtTokenProvider.generateToken(user.getId()))
                .build();
    }

    @Transactional(readOnly = true)
    public List<Address> getUserAddresses(Long userId) {
        return addressRepository.findByUserIdOrderByIsDefaultDescCreatedAtDesc(userId);
    }

    @Transactional
    public Address addAddress(Long userId, AddressRequest request) {
        long count = addressRepository.countByUserId(userId);
        boolean isDefault = Boolean.TRUE.equals(request.getIsDefault()) || count == 0;

        if (isDefault) {
            addressRepository.resetDefaultAddressForUser(userId);
        }

        Address address = Address.builder()
                .userId(userId)
                .fullName(request.getFullName())
                .phone(request.getPhone())
                .street(request.getStreet())
                .city(request.getCity())
                .state(request.getState())
                .pincode(request.getPincode())
                .isDefault(isDefault)
                .build();

        return addressRepository.save(address);
    }

    @Transactional
    public Address updateAddress(Long addressId, Long userId, AddressRequest request) {
        Address address = addressRepository.findByIdAndUserId(addressId, userId)
                .orElseThrow(() -> new IllegalArgumentException("Address not found"));

        if (Boolean.TRUE.equals(request.getIsDefault())) {
            addressRepository.resetDefaultAddressForUser(userId);
            address.setIsDefault(true);
        } else if (request.getIsDefault() != null) {
            address.setIsDefault(request.getIsDefault());
        }

        if (request.getFullName() != null) address.setFullName(request.getFullName());
        if (request.getPhone() != null) address.setPhone(request.getPhone());
        if (request.getStreet() != null) address.setStreet(request.getStreet());
        if (request.getCity() != null) address.setCity(request.getCity());
        if (request.getState() != null) address.setState(request.getState());
        if (request.getPincode() != null) address.setPincode(request.getPincode());

        return addressRepository.save(address);
    }

    @Transactional
    public void deleteAddress(Long addressId, Long userId) {
        Address address = addressRepository.findByIdAndUserId(addressId, userId)
                .orElseThrow(() -> new IllegalArgumentException("Address not found"));

        addressRepository.delete(address);
    }
}
