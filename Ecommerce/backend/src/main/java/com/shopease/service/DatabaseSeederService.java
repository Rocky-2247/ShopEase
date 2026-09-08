package com.shopease.service;

import com.shopease.entity.Category;
import com.shopease.entity.Coupon;
import com.shopease.entity.Product;
import com.shopease.entity.User;
import com.shopease.repository.CategoryRepository;
import com.shopease.repository.CouponRepository;
import com.shopease.repository.ProductRepository;
import com.shopease.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class DatabaseSeederService implements CommandLineRunner {

    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    private final CouponRepository couponRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) {
        try {
            seedUsers();
            seedCategories();
            seedProducts();
            seedCoupons();
            log.info("✅ Database verification and seeding completed successfully.");
        } catch (Exception e) {
            log.warn("Seeding notice: {}", e.getMessage());
        }
    }

    private void seedUsers() {
        if (!userRepository.existsByEmailIgnoreCase("admin@shopease.com")) {
            User admin = User.builder()
                    .name("Store Administrator")
                    .email("admin@shopease.com")
                    .password(passwordEncoder.encode("Admin@123"))
                    .phone("+1-555-0100")
                    .role("admin")
                    .pointsBalance(500)
                    .isBlocked(false)
                    .build();
            userRepository.save(admin);
            log.info("👤 Seeded Admin account: admin@shopease.com / Admin@123");
        }

        if (!userRepository.existsByEmailIgnoreCase("user@shopease.com")) {
            User customer = User.builder()
                    .name("Alex Demo Customer")
                    .email("user@shopease.com")
                    .password(passwordEncoder.encode("User@123"))
                    .phone("+1-555-0199")
                    .role("customer")
                    .pointsBalance(100)
                    .isBlocked(false)
                    .build();
            userRepository.save(customer);
            log.info("👤 Seeded Customer account: user@shopease.com / User@123");
        }
    }

    private void seedCategories() {
        if (categoryRepository.count() == 0) {
            createCategory("Electronics & Tech", "electronics-tech", "Smartphones, laptops, smart audio and premium gadgets", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800", 6);
            createCategory("Fashion & Apparel", "fashion-apparel", "Designer streetwear, footwear and seasonal luxury collections", "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800", 5);
            createCategory("Sports & Activewear", "sports-activewear", "Professional athletic apparel, running shoes and gear", "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800", 4);
            createCategory("Home & Living", "home-living", "Modern smart appliances, luxury decor and air purifiers", "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800", 3);
            createCategory("Luxury Watches & Jewelry", "luxury-watches", "Certified heritage chronometers and luxury timepieces", "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800", 3);
        }
    }

    private Category createCategory(String name, String slug, String desc, String imageUrl, int count) {
        Category cat = Category.builder()
                .name(name)
                .slug(slug)
                .description(desc)
                .imageUrl(imageUrl)
                .itemCount(count)
                .build();
        return categoryRepository.save(cat);
    }

    private void seedProducts() {
        if (productRepository.count() == 0) {
            Category tech = categoryRepository.findBySlug("electronics-tech").orElse(null);
            Category fashion = categoryRepository.findBySlug("fashion-apparel").orElse(null);
            Category sports = categoryRepository.findBySlug("sports-activewear").orElse(null);
            Category luxury = categoryRepository.findBySlug("luxury-watches").orElse(null);

            if (tech != null) {
                createProduct("Samsung Galaxy S24 Ultra (AI Titanium)", "samsung-galaxy-s24-ultra",
                        "Experience the pinnacle of mobile technology with Snapdragon 8 Gen 3, titanium frame, 200MP Quad Tele zoom system, and Galaxy AI live translate.",
                        1299.99, 1199.99, 25, tech.getId(),
                        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
                        true, true, 4.9, 184);

                createProduct("Apple iPhone 15 Pro Max", "apple-iphone-15-pro-max",
                        "Forged in titanium with industry-leading A17 Pro chip, Action button, customizable camera focal lengths, and USB-C connectivity.",
                        1199.99, 1099.99, 18, tech.getId(),
                        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
                        true, true, 4.8, 210);

                createProduct("Sony WH-1000XM5 Wireless ANC Headphones", "sony-wh-1000xm5",
                        "Industry-leading noise cancellation powered by two processors and 8 microphones. Hi-Res Audio wireless streaming with 30-hour battery life.",
                        399.99, 349.99, 30, tech.getId(),
                        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
                        true, false, 4.9, 96);
            }

            if (sports != null) {
                createProduct("Nike Air Zoom Pegasus 40", "nike-air-zoom-pegasus-40",
                        "A springy ride for every run. Dual Zoom Air units and React foam provide high-energy responsiveness across road terrain.",
                        139.99, 119.99, 40, sports.getId(),
                        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
                        true, true, 4.7, 142);

                createProduct("Adidas Ultraboost Light 2026", "adidas-ultraboost-light-2026",
                        "Experience epic energy with our lightest BOOST foam ever. Primeknit+ upper ensures locked-in comfort with maximum cushioning.",
                        189.99, 159.99, 22, sports.getId(),
                        "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800",
                        false, true, 4.8, 88);
            }

            if (luxury != null) {
                createProduct("Rolex Submariner Date 41mm Oystersteel", "rolex-submariner-date-41",
                        "The reference among divers' watches. Black Cerachrom ceramic bezel, luminescent Chromalight display, and Calibre 3235 movement.",
                        10250.00, 9950.00, 4, luxury.getId(),
                        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
                        true, false, 5.0, 45);
            }
        }
    }

    private void createProduct(String name, String slug, String desc, Double price, Double discPrice,
                              int stock, Long catId, String imageUrl, boolean featured, boolean trending,
                              double rating, int reviews) {
        Product p = Product.builder()
                .name(name)
                .slug(slug)
                .description(desc)
                .price(price)
                .discountPrice(discPrice)
                .stock(stock)
                .categoryId(catId)
                .imageUrl(imageUrl)
                .isFeatured(featured)
                .isTrending(trending)
                .rating(rating)
                .numReviews(reviews)
                .images("[\"" + imageUrl + "\"]")
                .specifications("{\"Authenticity\":\"100% Genuine\",\"Warranty\":\"1 Year Official Warranty\"}")
                .build();
        productRepository.save(p);
    }

    private void seedCoupons() {
        if (couponRepository.count() == 0) {
            createCoupon("SAVE10", 10.0, 50.0, 0.0);
            createCoupon("WELCOME10", 10.0, 50.0, 0.0);
            createCoupon("WELCOME20", 20.0, 100.0, 50.0);
            createCoupon("SAVE20", 20.0, 100.0, 50.0);
            createCoupon("FREESHIP", 5.0, 20.0, 30.0);
            log.info("🎟️ Seeded Demo Coupons: SAVE10, WELCOME10, WELCOME20, SAVE20, FREESHIP");
        }
    }

    private void createCoupon(String code, Double pct, Double maxDisc, Double minOrder) {
        Coupon c = Coupon.builder()
                .code(code)
                .discountPercentage(pct)
                .maxDiscount(maxDisc)
                .minOrderValue(minOrder)
                .isActive(true)
                .expiresAt(LocalDateTime.now().plusMonths(6))
                .build();
        couponRepository.save(c);
    }
}
