package com.shopease.controller;

import com.shopease.dto.ApiResponse;
import com.shopease.dto.ProductDtos.ProductCreateUpdateRequest;
import com.shopease.entity.Product;
import com.shopease.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<ApiResponse<Object>> getProducts(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String brand,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) Double rating,
            @RequestParam(required = false) String inStock,
            @RequestParam(required = false) String sort,
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "12") Integer limit) {

        Map<String, Object> result = productService.getProducts(keyword, category, brand, minPrice, maxPrice, rating, inStock, sort, page, limit);

        ApiResponse<Object> response = ApiResponse.builder()
                .success(true)
                .data(result)
                .build();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/featured")
    public ResponseEntity<ApiResponse<List<Product>>> getFeaturedProducts() {
        List<Product> featured = productService.getFeaturedProducts();
        return ResponseEntity.ok(ApiResponse.success(featured));
    }

    @GetMapping("/trending")
    public ResponseEntity<ApiResponse<List<Product>>> getTrendingProducts() {
        List<Product> trending = productService.getTrendingProducts();
        return ResponseEntity.ok(ApiResponse.success(trending));
    }

    @GetMapping("/brands")
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getBrands() {
        List<Map<String, Object>> brands = productService.getBrandsCatalog();
        return ResponseEntity.ok(ApiResponse.success(brands));
    }

    @GetMapping("/{idOrSlug}")
    public ResponseEntity<ApiResponse<Product>> getProductById(@PathVariable String idOrSlug) {
        try {
            Product product = productService.getProductByIdOrSlug(idOrSlug);
            return ResponseEntity.ok(ApiResponse.success(product));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error("Product not found"));
        }
    }

    @GetMapping("/{id}/related")
    public ResponseEntity<ApiResponse<List<Product>>> getRelatedProducts(@PathVariable Long id) {
        try {
            List<Product> related = productService.getRelatedProducts(id);
            return ResponseEntity.ok(ApiResponse.success(related));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error("Product not found"));
        }
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Product>> createProduct(@RequestBody ProductCreateUpdateRequest request) {
        try {
            Product created = productService.createProduct(request);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(ApiResponse.success(created, "Product created successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Product>> updateProduct(@PathVariable Long id,
                                                              @RequestBody ProductCreateUpdateRequest request) {
        try {
            Product updated = productService.updateProduct(id, request);
            return ResponseEntity.ok(ApiResponse.success(updated, "Product updated successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteProduct(@PathVariable Long id) {
        try {
            productService.deleteProduct(id);
            return ResponseEntity.ok(ApiResponse.success(null, "Product deleted successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error(e.getMessage()));
        }
    }
}
