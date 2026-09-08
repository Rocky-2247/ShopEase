package com.shopease.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.shopease.dto.ProductDtos.ProductCreateUpdateRequest;
import com.shopease.entity.Category;
import com.shopease.entity.Product;
import com.shopease.repository.CategoryRepository;
import com.shopease.repository.ProductRepository;
import com.shopease.repository.ProductVariantRepository;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductVariantRepository productVariantRepository;
    private final CategoryRepository categoryRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Transactional(readOnly = true)
    public Map<String, Object> getProducts(String keyword, String category, String brand,
                                          Double minPrice, Double maxPrice, Double rating,
                                          String inStock, String sort, Integer page, Integer limit) {
        int pageNumber = (page != null && page > 0) ? page : 1;
        int pageSize = (limit != null && limit > 0) ? limit : 12;

        Sort sortOrder = Sort.by(Sort.Direction.DESC, "createdAt");
        if ("price-asc".equalsIgnoreCase(sort)) {
            sortOrder = Sort.by(Sort.Direction.ASC, "price");
        } else if ("price-desc".equalsIgnoreCase(sort)) {
            sortOrder = Sort.by(Sort.Direction.DESC, "price");
        } else if ("rating-desc".equalsIgnoreCase(sort)) {
            sortOrder = Sort.by(Sort.Direction.DESC, "rating");
        } else if ("popularity".equalsIgnoreCase(sort) || "reviews-desc".equalsIgnoreCase(sort)) {
            sortOrder = Sort.by(Sort.Direction.DESC, "numReviews");
        } else if ("newest".equalsIgnoreCase(sort)) {
            sortOrder = Sort.by(Sort.Direction.DESC, "createdAt");
        }

        Pageable pageable = PageRequest.of(pageNumber - 1, pageSize, sortOrder);

        Specification<Product> spec = (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (keyword != null && !keyword.trim().isEmpty()) {
                String searchPattern = "%" + keyword.trim().toLowerCase() + "%";
                Predicate nameMatch = cb.like(cb.lower(root.get("name")), searchPattern);
                Predicate descMatch = cb.like(cb.lower(root.get("description")), searchPattern);
                predicates.add(cb.or(nameMatch, descMatch));
            }

            if (brand != null && !brand.trim().isEmpty() && !"all".equalsIgnoreCase(brand)) {
                String brandPattern = "%" + brand.trim().toLowerCase() + "%";
                Predicate nameMatch = cb.like(cb.lower(root.get("name")), brandPattern);
                Predicate descMatch = cb.like(cb.lower(root.get("description")), brandPattern);
                predicates.add(cb.or(nameMatch, descMatch));
            }

            if (category != null && !"all".equalsIgnoreCase(category)) {
                try {
                    Long catId = Long.parseLong(category);
                    predicates.add(cb.equal(root.get("categoryId"), catId));
                } catch (NumberFormatException e) {
                    Category cat = categoryRepository.findBySlug(category).orElse(null);
                    if (cat != null) {
                        predicates.add(cb.equal(root.get("categoryId"), cat.getId()));
                    }
                }
            }

            if (minPrice != null) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("price"), minPrice));
            }
            if (maxPrice != null) {
                predicates.add(cb.lessThanOrEqualTo(root.get("price"), maxPrice));
            }

            if (rating != null && rating > 0) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("rating"), rating));
            }

            if ("true".equalsIgnoreCase(inStock)) {
                predicates.add(cb.greaterThan(root.get("stock"), 0));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };

        Page<Product> productPage = productRepository.findAll(spec, pageable);

        Map<String, Object> pagination = new HashMap<>();
        pagination.put("total", productPage.getTotalElements());
        pagination.put("page", pageNumber);
        pagination.put("pages", productPage.getTotalPages());
        pagination.put("limit", pageSize);

        Map<String, Object> responseData = new HashMap<>();
        responseData.put("products", productPage.getContent());
        responseData.put("pagination", pagination);

        return responseData;
    }

    @Transactional(readOnly = true)
    public Product getProductByIdOrSlug(String idOrSlug) {
        try {
            Long id = Long.parseLong(idOrSlug);
            return productRepository.findById(id)
                    .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        } catch (NumberFormatException e) {
            return productRepository.findBySlug(idOrSlug)
                    .orElseThrow(() -> new IllegalArgumentException("Product not found"));
        }
    }

    @Transactional(readOnly = true)
    public List<Product> getFeaturedProducts() {
        return productRepository.findByIsFeaturedTrue(PageRequest.of(0, 8));
    }

    @Transactional(readOnly = true)
    public List<Product> getTrendingProducts() {
        return productRepository.findByIsTrendingTrue(PageRequest.of(0, 8));
    }

    @Transactional(readOnly = true)
    public List<Map<String, Object>> getBrandsCatalog() {
        List<Map<String, Object>> brands = new ArrayList<>();
        brands.add(Map.of("name", "Samsung", "slug", "samsung", "logo", "🌌", "category", "Electronics & Tech", "discount", "Up to 35% OFF", "badge", "Official Partner", "featured", true));
        brands.add(Map.of("name", "Apple", "slug", "apple", "logo", "🍎", "category", "Tech & Mobiles", "discount", "0% No-Cost EMI", "badge", "Authorized Reseller", "featured", true));
        brands.add(Map.of("name", "Sony", "slug", "sony", "logo", "🎧", "category", "Audio & Vision", "discount", "Flat ₹5,000 OFF", "badge", "Official Partner", "featured", true));
        brands.add(Map.of("name", "Nike", "slug", "nike", "logo", "⚡", "category", "Sports & Activewear", "discount", "Extra 15% OFF", "badge", "Top Brand", "featured", true));
        brands.add(Map.of("name", "Adidas", "slug", "adidas", "logo", "👟", "category", "Footwear & Originals", "discount", "Buy 2 Get 20% OFF", "badge", "Top Seller", "featured", true));
        brands.add(Map.of("name", "Dyson", "slug", "dyson", "logo", "🌪️", "category", "Home & Grooming", "discount", "Free Express Delivery", "badge", "Official Store", "featured", true));
        brands.add(Map.of("name", "Bose", "slug", "bose", "logo", "🎵", "category", "Premium Audio", "discount", "Save ₹4,000 Today", "badge", "Official Partner", "featured", true));
        brands.add(Map.of("name", "Dell", "slug", "dell", "logo", "💻", "category", "Laptops & Monitors", "discount", "Save Up to 25%", "badge", "Official Store", "featured", true));
        brands.add(Map.of("name", "Rolex", "slug", "rolex", "logo", "👑", "category", "Luxury Watches", "discount", "Certified Authentic", "badge", "Luxury Partner", "featured", true));
        brands.add(Map.of("name", "Puma", "slug", "puma", "logo", "🐆", "category", "Athletics & Shoes", "discount", "Extra 20% OFF", "badge", "Official Partner", "featured", true));
        brands.add(Map.of("name", "Canon", "slug", "canon", "logo", "📷", "category", "Cameras & Optics", "discount", "Special Bundle Deals", "badge", "Pro Visual", "featured", true));
        brands.add(Map.of("name", "Asus", "slug", "asus", "logo", "🎮", "category", "ROG Gaming & Tech", "discount", "Extra ₹3,000 OFF", "badge", "Gaming Partner", "featured", true));
        brands.add(Map.of("name", "Zara", "slug", "zara", "logo", "✨", "category", "Fashion & Style", "discount", "New Season 2026", "badge", "Designer Store", "featured", true));
        return brands;
    }

    @Transactional(readOnly = true)
    public List<Product> getRelatedProducts(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));

        return productRepository.findByCategoryIdAndIdNot(product.getCategoryId(), productId, PageRequest.of(0, 4));
    }

    @Transactional
    public Product createProduct(ProductCreateUpdateRequest request) {
        String slug = request.getName().toLowerCase().replaceAll("[^a-z0-9]+", "-").replaceAll("(^-|-$)", "") + "-" + (System.currentTimeMillis() % 10000);

        String imagesJson = serializeToJson(request.getImages());
        String specsJson = serializeToJson(request.getSpecifications());

        Product product = Product.builder()
                .name(request.getName())
                .slug(slug)
                .description(request.getDescription())
                .price(request.getPrice())
                .discountPrice(request.getDiscountPrice())
                .stock(request.getStock() != null ? request.getStock() : 0)
                .categoryId(request.getCategoryId())
                .imageUrl(request.getImageUrl() != null ? request.getImageUrl() : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800")
                .videoUrl(request.getVideoUrl())
                .images(imagesJson)
                .isFeatured(Boolean.TRUE.equals(request.getIsFeatured()))
                .isTrending(Boolean.TRUE.equals(request.getIsTrending()))
                .specifications(specsJson)
                .rating(0.0)
                .numReviews(0)
                .build();

        Product savedProduct = productRepository.save(product);

        // Increment category item count
        categoryRepository.findById(request.getCategoryId()).ifPresent(cat -> {
            cat.setItemCount(cat.getItemCount() + 1);
            categoryRepository.save(cat);
        });

        return savedProduct;
    }

    @Transactional
    public Product updateProduct(Long id, ProductCreateUpdateRequest request) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));

        if (request.getName() != null) product.setName(request.getName());
        if (request.getDescription() != null) product.setDescription(request.getDescription());
        if (request.getPrice() != null) product.setPrice(request.getPrice());
        if (request.getDiscountPrice() != null) product.setDiscountPrice(request.getDiscountPrice());
        if (request.getStock() != null) product.setStock(request.getStock());
        if (request.getCategoryId() != null) product.setCategoryId(request.getCategoryId());
        if (request.getImageUrl() != null) product.setImageUrl(request.getImageUrl());
        if (request.getVideoUrl() != null) product.setVideoUrl(request.getVideoUrl());
        if (request.getImages() != null) product.setImages(serializeToJson(request.getImages()));
        if (request.getIsFeatured() != null) product.setIsFeatured(request.getIsFeatured());
        if (request.getIsTrending() != null) product.setIsTrending(request.getIsTrending());
        if (request.getSpecifications() != null) product.setSpecifications(serializeToJson(request.getSpecifications()));

        return productRepository.save(product);
    }

    @Transactional
    public void deleteProduct(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));

        Long catId = product.getCategoryId();
        productRepository.delete(product);

        categoryRepository.findById(catId).ifPresent(cat -> {
            cat.setItemCount(Math.max(0, cat.getItemCount() - 1));
            categoryRepository.save(cat);
        });
    }

    private String serializeToJson(Object obj) {
        if (obj == null) return null;
        if (obj instanceof String) return (String) obj;
        try {
            return objectMapper.writeValueAsString(obj);
        } catch (Exception e) {
            return obj.toString();
        }
    }
}
