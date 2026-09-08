package com.shopease.controller;

import com.shopease.dto.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@Tag(name = "Health", description = "Application health & root status endpoints")
public class HealthController {

    @Value("${spring.application.name:shopease-backend}")
    private String appName;

    @Value("${app.version:1.0.0}")
    private String version;

    @GetMapping("/")
    @Operation(summary = "Root API status greeting")
    public ResponseEntity<Map<String, Object>> root() {
        return ResponseEntity.ok(Map.of(
                "service", "ShopEase E-Commerce API (Spring Boot 3.3.x)",
                "status", "RUNNING",
                "version", version,
                "documentation", "/swagger-ui.html",
                "timestamp", LocalDateTime.now()
        ));
    }

    @GetMapping("/api/health")
    @Operation(summary = "Health check endpoint")
    public ResponseEntity<ApiResponse<Map<String, Object>>> healthCheck() {
        Map<String, Object> healthInfo = Map.of(
                "status", "UP",
                "app", appName,
                "version", version,
                "java", System.getProperty("java.version"),
                "timestamp", LocalDateTime.now()
        );
        return ResponseEntity.ok(ApiResponse.success(healthInfo, "ShopEase Backend is healthy"));
    }
}
