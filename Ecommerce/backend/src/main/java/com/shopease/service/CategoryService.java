package com.shopease.service;

import com.shopease.dto.ProductDtos.CategoryCreateUpdateRequest;
import com.shopease.entity.Category;
import com.shopease.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    @Transactional(readOnly = true)
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Category getCategoryByIdOrSlug(String idOrSlug) {
        try {
            Long id = Long.parseLong(idOrSlug);
            return categoryRepository.findById(id)
                    .orElseThrow(() -> new IllegalArgumentException("Category not found"));
        } catch (NumberFormatException e) {
            return categoryRepository.findBySlug(idOrSlug)
                    .orElseThrow(() -> new IllegalArgumentException("Category not found"));
        }
    }

    @Transactional
    public Category createCategory(CategoryCreateUpdateRequest request) {
        String slug = request.getName().toLowerCase().replaceAll("[^a-z0-9]+", "-").replaceAll("(^-|-$)", "");

        Category category = Category.builder()
                .name(request.getName())
                .slug(slug)
                .description(request.getDescription())
                .imageUrl(request.getImageUrl())
                .itemCount(0)
                .build();

        return categoryRepository.save(category);
    }

    @Transactional
    public Category updateCategory(Long id, CategoryCreateUpdateRequest request) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));

        if (request.getName() != null) {
            category.setName(request.getName());
            category.setSlug(request.getName().toLowerCase().replaceAll("[^a-z0-9]+", "-").replaceAll("(^-|-$)", ""));
        }
        if (request.getDescription() != null) category.setDescription(request.getDescription());
        if (request.getImageUrl() != null) category.setImageUrl(request.getImageUrl());

        return categoryRepository.save(category);
    }

    @Transactional
    public void deleteCategory(Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));

        categoryRepository.delete(category);
    }
}
