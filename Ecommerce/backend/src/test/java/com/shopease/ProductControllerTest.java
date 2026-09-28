package com.shopease;

import com.shopease.controller.ProductController;
import com.shopease.dto.ApiResponse;
import com.shopease.entity.Product;
import com.shopease.service.ProductService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProductControllerTest {

    @Mock
    private ProductService productService;

    @InjectMocks
    private ProductController productController;

    @Test
    @DisplayName("Should return products list with pagination and metrics")
    void testGetProducts_Success() {
        Map<String, Object> mockData = Map.of(
                "products", List.of(Product.builder().id(1L).name("Test Product").price(49.99).build()),
                "total", 1,
                "page", 1,
                "pages", 1
        );

        when(productService.getProducts(any(), any(), any(), any(), any(), any(), any(), any(), any(), any()))
                .thenReturn(mockData);

        ResponseEntity<ApiResponse<Object>> response = productController.getProducts(
                null, null, null, null, null, null, null, null, 1, 12);

        assertNotNull(response);
        assertEquals(200, response.getStatusCode().value());
        assertTrue(response.getBody().getSuccess());
        assertEquals(mockData, response.getBody().getData());
    }

    @Test
    @DisplayName("Should return featured products successfully")
    void testGetFeaturedProducts() {
        List<Product> featured = List.of(Product.builder().id(1L).name("Featured Item").isFeatured(true).build());
        when(productService.getFeaturedProducts()).thenReturn(featured);

        ResponseEntity<ApiResponse<List<Product>>> response = productController.getFeaturedProducts();

        assertNotNull(response);
        assertEquals(200, response.getStatusCode().value());
        assertEquals(1, response.getBody().getData().size());
    }
}
