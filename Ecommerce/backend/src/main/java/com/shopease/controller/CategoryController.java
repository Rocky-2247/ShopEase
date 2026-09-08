package com.shopease.controller;

import com.shopease.dto.ApiResponse;
import com.shopease.dto.ProductDtos.CategoryCreateUpdateRequest;
import com.shopease.entity.Category;
import com.shopease.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<Category>>> getCategories() {
        List<Category> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(ApiResponse.success(categories));
    }

    @GetMapping("/{idOrSlug}")
    public ResponseEntity<ApiResponse<Category>> getCategoryById(@PathVariable String idOrSlug) {
        try {
            Category category = categoryService.getCategoryByIdOrSlug(idOrSlug);
            return ResponseEntity.ok(ApiResponse.success(category));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error("Category not found"));
        }
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Category>> createCategory(@RequestBody CategoryCreateUpdateRequest request) {
        try {
            Category created = categoryService.createCategory(request);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(ApiResponse.success(created, "Category created successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Category>> updateCategory(@PathVariable Long id,
                                                                @RequestBody CategoryCreateUpdateRequest request) {
        try {
            Category updated = categoryService.updateCategory(id, request);
            return ResponseEntity.ok(ApiResponse.success(updated, "Category updated successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteCategory(@PathVariable Long id) {
        try {
            categoryService.deleteCategory(id);
            return ResponseEntity.ok(ApiResponse.success(null, "Category deleted successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ApiResponse.error(e.getMessage()));
        }
    }
}
