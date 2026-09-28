package com.shopease;

import com.shopease.dto.AuthDtos.AuthResponse;
import com.shopease.dto.AuthDtos.LoginRequest;
import com.shopease.dto.AuthDtos.RegisterRequest;
import com.shopease.entity.User;
import com.shopease.repository.AddressRepository;
import com.shopease.repository.UserRepository;
import com.shopease.security.JwtTokenProvider;
import com.shopease.service.AuthService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Map;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AuthControllerTest {

    @Mock
    private UserRepository userRepository;
    @Mock
    private AddressRepository addressRepository;
    @Mock
    private PasswordEncoder passwordEncoder;
    @Mock
    private JwtTokenProvider jwtTokenProvider;

    @InjectMocks
    private AuthService authService;

    private User sampleUser;

    @BeforeEach
    void setUp() {
        sampleUser = User.builder()
                .id(1L)
                .name("Alex Demo")
                .email("alex@example.com")
                .password("hashed_password_123")
                .role("customer")
                .pointsBalance(100)
                .isBlocked(false)
                .build();
    }

    @Test
    @DisplayName("Should successfully register a new user with hashed password")
    void testRegisterUser_Success() {
        when(userRepository.existsByEmailIgnoreCase("alex@example.com")).thenReturn(false);
        when(passwordEncoder.encode("Pass@123")).thenReturn("hashed_password_123");
        when(userRepository.save(any(User.class))).thenReturn(sampleUser);
        when(jwtTokenProvider.generateToken(1L)).thenReturn("mock_jwt_token_xyz");

        RegisterRequest request = new RegisterRequest();
        request.setName("Alex Demo");
        request.setEmail("alex@example.com");
        request.setPassword("Pass@123");
        request.setPhone("+1-555-0123");

        AuthResponse response = authService.registerUser(request);

        assertNotNull(response);
        assertEquals("alex@example.com", response.getEmail());
        assertEquals("mock_jwt_token_xyz", response.getToken());
        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    @DisplayName("Should reject registration if email already exists")
    void testRegisterUser_DuplicateEmail() {
        when(userRepository.existsByEmailIgnoreCase("alex@example.com")).thenReturn(true);

        RegisterRequest request = new RegisterRequest();
        request.setName("Alex Demo");
        request.setEmail("alex@example.com");
        request.setPassword("Pass@123");

        assertThrows(IllegalArgumentException.class, () -> authService.registerUser(request));
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    @DisplayName("Should successfully authenticate valid login credentials")
    void testLoginUser_Success() {
        when(userRepository.findByEmailIgnoreCase("alex@example.com")).thenReturn(Optional.of(sampleUser));
        when(passwordEncoder.matches("Pass@123", "hashed_password_123")).thenReturn(true);
        when(jwtTokenProvider.generateToken(1L)).thenReturn("mock_jwt_token_login");

        LoginRequest request = new LoginRequest();
        request.setEmail("alex@example.com");
        request.setPassword("Pass@123");

        AuthResponse response = authService.loginUser(request);

        assertNotNull(response);
        assertEquals(1L, response.getId());
        assertEquals("customer", response.getRole());
        assertEquals("mock_jwt_token_login", response.getToken());
    }

    @Test
    @DisplayName("ForgotPassword should not leak reset token in response payload")
    void testForgotPassword_DoesNotLeakToken() {
        when(userRepository.findByEmailIgnoreCase("alex@example.com")).thenReturn(Optional.of(sampleUser));
        when(jwtTokenProvider.generatePasswordResetToken(1L)).thenReturn("secret_reset_jwt");

        Map<String, Object> result = authService.forgotPassword("alex@example.com");

        assertNotNull(result);
        assertFalse(result.containsKey("reset_token"), "Reset token must NOT be present in API response");
        assertFalse(result.containsKey("reset_url"), "Reset URL must NOT be present in API response");
        assertTrue(((String) result.get("message")).contains("dispatched"));
    }

    @Test
    @DisplayName("Reset password requires valid password_reset token type")
    void testResetPassword_RejectsInvalidTokenType() {
        when(jwtTokenProvider.validateToken("bad_token")).thenReturn(true);
        when(jwtTokenProvider.isPasswordResetToken("bad_token")).thenReturn(false);

        assertThrows(IllegalArgumentException.class, () ->
                authService.resetPassword("bad_token", "NewPassword@123"));
    }
}
