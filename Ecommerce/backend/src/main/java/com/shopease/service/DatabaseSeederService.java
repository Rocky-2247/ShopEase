package com.shopease.service;

import com.shopease.entity.Address;
import com.shopease.entity.Category;
import com.shopease.entity.Coupon;
import com.shopease.entity.Product;
import com.shopease.entity.User;
import com.shopease.repository.AddressRepository;
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
    private final AddressRepository addressRepository;
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
            User savedCustomer = userRepository.save(customer);
            log.info("👤 Seeded Customer account: user@shopease.com / User@123");

            if (addressRepository.countByUserId(savedCustomer.getId()) == 0) {
                Address defaultAddr = Address.builder()
                        .userId(savedCustomer.getId())
                        .fullName("Alex Johnson")
                        .phone("+1 987 654 3210")
                        .street("742 Evergreen Terrace, Suite 4B")
                        .city("Springfield")
                        .state("Oregon")
                        .pincode("97477")
                        .isDefault(true)
                        .build();
                addressRepository.save(defaultAddr);
            }
        }
    }

    private void seedCategories() {
        if (categoryRepository.count() == 0) {
            createCategory("Electronics & Tech", "electronics", "Laptops, flagship smartphones, noise-cancelling audio, tablets, and smart gadgets", "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=80", 5);
            createCategory("Fashion & Apparel", "fashion-apparel", "Designer streetwear, premium denim, formal blazers, footwear, and leather bags", "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80", 3);
            createCategory("Home & Living", "home-living", "Minimalist furniture, ceramic tableware, ambient smart lighting, and kitchenware", "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80", 3);
            createCategory("Beauty & Skincare", "beauty-care", "Clean skincare, botanical serums, luxury fragrances, and salon hair care", "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80", 4);
            createCategory("Sports & Fitness", "sports-outdoors", "Performance activewear, ergonomic yoga mats, smart dumbbells, and camping gear", "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80", 4);
            createCategory("Books & Stationery", "books-stationery", "Bestselling hardcovers, leather journals, fountain pens, and artistic supplies", "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80", 3);
            createCategory("Gaming & Consoles", "gaming-consoles", "Next-gen consoles, mechanical keyboards, gaming headsets, and ergonomic chairs", "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80", 3);
            createCategory("Watches & Jewelry", "watches-jewelry", "Precision chronograph timepieces, sterling silver, gold pendants, and smart rings", "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80", 3);
            createCategory("Health & Wellness", "health-wellness", "Organic dietary supplements, herbal teas, massage guns, and posture correctors", "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80", 3);
            createCategory("Groceries & Gourmet", "groceries-gourmet", "Artisanal roasted coffee beans, organic matcha, cold-pressed olive oils, and snacks", "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80", 3);
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
            Category tech = categoryRepository.findBySlug("electronics").orElse(null);
            Category fashion = categoryRepository.findBySlug("fashion-apparel").orElse(null);
            Category home = categoryRepository.findBySlug("home-living").orElse(null);
            Category beauty = categoryRepository.findBySlug("beauty-care").orElse(null);
            Category sports = categoryRepository.findBySlug("sports-outdoors").orElse(null);
            Category books = categoryRepository.findBySlug("books-stationery").orElse(null);
            Category gaming = categoryRepository.findBySlug("gaming-consoles").orElse(null);
            Category luxury = categoryRepository.findBySlug("watches-jewelry").orElse(null);
            Category health = categoryRepository.findBySlug("health-wellness").orElse(null);
            Category groceries = categoryRepository.findBySlug("groceries-gourmet").orElse(null);

            if (tech != null) {
                createProduct("Samsung Galaxy S24 Ultra (AI Titanium)", "samsung-galaxy-s24-ultra",
                        "Experience the pinnacle of mobile technology with Snapdragon 8 Gen 3, titanium frame, 200MP Quad Tele zoom system, and Galaxy AI live translate.",
                        1299.99, 1199.99, 25, tech.getId(),
                        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
                        true, true, 4.9, 184);

                createProduct("MacBook Pro 16\" Liquid Retina XDR", "macbook-pro-16-liquid-retina",
                        "Engineered for extreme performance with blazing fast 16-core CPU, 40-core GPU, up to 22h battery life, and 120Hz ProMotion display.",
                        2499.00, 2299.00, 20, tech.getId(),
                        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
                        true, true, 4.9, 88);

                createProduct("Sony WH-1000XM5 Wireless ANC Headphones", "sony-wh-1000xm5",
                        "Industry-leading noise cancellation powered by two processors and 8 microphones. Hi-Res Audio wireless streaming with 30-hour battery life.",
                        399.99, 349.99, 30, tech.getId(),
                        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
                        true, false, 4.9, 96);

                createProduct("AuraSound Spatial Wireless Headphones", "aurasound-spatial-wireless-headphones",
                        "Immerse yourself in concert-hall audio with active noise cancellation, 45-hour battery life, and ultra-soft memory foam ear cushions.",
                        299.99, 249.99, 35, tech.getId(),
                        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800",
                        true, true, 4.8, 42);

                createProduct("UltraVision 4K OLED Smart Watch Pro", "ultravision-4k-oled-smart-watch-pro",
                        "Titanium chassis with sapphire glass, advanced health ECG telemetry, GPS tracking, and 7-day battery endurance.",
                        399.00, 349.00, 20, tech.getId(),
                        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
                        true, true, 4.8, 67);
            }

            if (fashion != null) {
                createProduct("Heritage Italian Leather Crossbody Bag", "heritage-italian-leather-crossbody-bag",
                        "Full-grain Tuscan calfskin with antique brass hardware, expandable main compartment, and adjustable shoulder strap.",
                        249.00, 199.00, 30, fashion.getId(),
                        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
                        true, false, 4.8, 34);

                createProduct("Urban Luxe Minimalist Denim Jacket", "urban-luxe-minimalist-denim-jacket",
                        "Japanese selvedge cotton denim with relaxed boxy silhouette, dual chest pockets, and custom antique zinc buttons.",
                        129.99, 99.99, 45, fashion.getId(),
                        "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800",
                        false, true, 4.7, 29);

                createProduct("Zara Oversized Tailored Wool Blazer", "zara-oversized-tailored-wool-blazer",
                        "Crafted from premium Italian wool blend with structured padded shoulders, peak lapels, and double-breasted horn button closure.",
                        189.00, 149.00, 28, fashion.getId(),
                        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
                        true, true, 4.8, 52);
            }

            if (home != null) {
                createProduct("Nordic Ceramic Handcrafted Coffee Set", "nordic-ceramic-coffee-set",
                        "Includes matte black dripper, heat-resistant borosilicate glass server, and two ceramic artisan mugs.",
                        79.99, 59.99, 50, home.getId(),
                        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800",
                        true, true, 4.9, 53);

                createProduct("AuraGlow Smart Ambient Floor Lamp", "auraglow-smart-ambient-floor-lamp",
                        "16M vibrant colors, dynamic music synchronization, touch dimming, and seamless Apple HomeKit/Alexa integration.",
                        149.00, 119.00, 25, home.getId(),
                        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
                        false, true, 4.7, 22);

                createProduct("Dyson V15 Detect Cordless Vacuum", "dyson-v15-detect-cordless-vacuum",
                        "Laser reveals microscopic dust, piezo sensor automatically sizes and counts dust particles, and intelligent motor adjusts suction power.",
                        749.99, 649.99, 15, home.getId(),
                        "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800",
                        true, true, 4.9, 78);
            }

            if (beauty != null) {
                createProduct("Radiance Glow Botanical Face Serum (50ml)", "radiance-glow-botanical-face-serum",
                        "Infused with Vitamin C, Hyaluronic Acid, and organic Rosehip oil to brighten skin tone and smooth fine lines.",
                        48.00, 38.00, 80, beauty.getId(),
                        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
                        true, true, 4.9, 74);

                createProduct("Velvet Rose Eau De Parfum (100ml)", "velvet-rose-eau-de-parfum",
                        "A captivating blend of Damask rose, warm amber, cedarwood, and spicy pink peppercorn with 12h projection.",
                        95.00, 79.00, 40, beauty.getId(),
                        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800",
                        false, true, 4.8, 41);

                createProduct("LuxeHydra Hyaluronic Moisture Cream (50ml)", "luxehydra-hyaluronic-moisture-cream",
                        "Triple-molecular weight hyaluronic acid combined with ceramides and squalane to replenish the skin barrier and lock in 72-hour deep moisture.",
                        52.00, 41.50, 65, beauty.getId(),
                        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
                        true, true, 4.9, 128);

                createProduct("AuraShield Invisible Water-Gel SPF 50+", "aurashield-water-gel-sunscreen-spf50",
                        "Ultralight hybrid sunscreen with zero white cast, velvet matte finish, pollution defense filter, and reef-safe water-resistant protection.",
                        32.00, 25.50, 90, beauty.getId(),
                        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800",
                        true, true, 4.9, 156);
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

                createProduct("ProGrip High-Density Alignment Yoga Mat", "progrip-alignment-yoga-mat",
                        "Eco-friendly natural tree rubber with laser-etched alignment lines and anti-slip polyurethane sweat-absorbent top.",
                        68.00, 52.00, 60, sports.getId(),
                        "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800",
                        true, false, 4.8, 39);

                createProduct("Apex Speed Rope Pro (Ball-Bearing System)", "apex-speed-rope-pro",
                        "Ultra-fast 360-degree dual bearing mechanism with aircraft-grade aluminum handles for HIIT and boxing.",
                        34.99, 24.99, 75, sports.getId(),
                        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800",
                        false, true, 4.7, 26);
            }

            if (books != null) {
                createProduct("Atomic Habits & Deep Work Collector Bundle", "atomic-habits-deep-work-bundle",
                        "Deluxe hardcover edition with embossed gold foil details, ribbon bookmark, and companion productivity journal.",
                        49.99, 39.99, 55, books.getId(),
                        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
                        true, true, 4.9, 112);

                createProduct("Kindle Paperwhite Signature Edition (32GB)", "kindle-paperwhite-signature-32gb",
                        "6.8-inch glare-free 300 ppi display with auto-adjusting warm front light, 32GB storage, wireless charging, and up to 10 weeks battery life.",
                        189.99, 159.99, 35, books.getId(),
                        "https://images.unsplash.com/photo-1592496001020-d31bd830651f?w=800",
                        true, true, 4.9, 148);

                createProduct("Executive Brass Fountain Pen Set", "executive-brass-fountain-pen-set",
                        "Precision machined solid brass barrel with German iridium fine nib, piston converter, and 50ml obsidian black ink.",
                        58.00, 44.00, 40, books.getId(),
                        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800",
                        false, false, 4.8, 31);
            }

            if (gaming != null) {
                createProduct("Asus ROG Zephyrus G16 OLED Gaming Laptop", "asus-rog-zephyrus-g16-oled",
                        "Ultra-slim CNC aluminum chassis with Intel Core Ultra 9, NVIDIA GeForce RTX 4080 GPU, 240Hz 2.5K OLED display, and advanced vapor chamber cooling.",
                        2299.00, 2099.00, 15, gaming.getId(),
                        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800",
                        true, true, 4.9, 64);

                createProduct("Logitech G Pro X Superlight 2 Wireless Gaming Mouse", "logitech-g-pro-x-superlight-2",
                        "Ultralight 60-gram tournament mouse with HERO 2 sensor (32,000 DPI), LIGHTFORCE hybrid optical-mechanical switches, and 95-hour battery life.",
                        159.99, 139.99, 45, gaming.getId(),
                        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800",
                        true, true, 4.9, 112);

                createProduct("PlayStation 5 Pro Digital Edition Console", "playstation-5-pro-digital-edition",
                        "Upgraded GPU with PlayStation Spectral Super Resolution AI upscaling, advanced ray tracing, 2TB SSD storage, and DualSense haptic wireless controller.",
                        699.99, 649.99, 20, gaming.getId(),
                        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800",
                        true, true, 5.0, 150);
            }

            if (luxury != null) {
                createProduct("Rolex Submariner Date 41mm Oystersteel", "rolex-submariner-date-41",
                        "The reference among divers' watches. Black Cerachrom ceramic bezel, luminescent Chromalight display, and Calibre 3235 movement.",
                        10250.00, 9950.00, 4, luxury.getId(),
                        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
                        true, false, 5.0, 45);

                createProduct("Rolex Cosmograph Daytona 18ct Everose Gold", "rolex-cosmograph-daytona-gold",
                        "Iconic motorsport chronograph with tachymetric scale bezel, sundust dial, and Oysterflex bracelet powered by Calibre 4131 movement.",
                        32500.00, 31900.00, 2, luxury.getId(),
                        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800",
                        true, true, 5.0, 38);

                createProduct("Titanium Chronograph Sapphire Timepiece", "titanium-chronograph-sapphire-timepiece",
                        "Aerospace-grade grade 5 titanium case, antireflective sapphire crystal, Swiss automatic movement, and interchangeable silicone and leather straps.",
                        850.00, 720.00, 18, luxury.getId(),
                        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
                        false, true, 4.8, 29);
            }

            if (health != null) {
                createProduct("TheraPulse Deep Tissue Percussion Massage Gun", "therapulse-deep-tissue-massage-gun",
                        "Brushless ultra-quiet high-torque motor delivering 3200 RPM, 6 interchangeable massage heads, OLED speed display, and 6-hour battery life.",
                        169.00, 129.00, 35, health.getId(),
                        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
                        true, true, 4.8, 72);

                createProduct("Organic Ashwagandha & Vitamin D3 Immunity Complex", "organic-ashwagandha-d3-immunity",
                        "Clinically proven KSM-66 full-spectrum root extract with organic black pepper extract and plant-based lichen Vitamin D3 for optimal absorption.",
                        34.99, 26.99, 80, health.getId(),
                        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
                        false, true, 4.9, 95);

                createProduct("Ergonomic Memory Foam Lumbar Support Cushion", "ergonomic-memory-foam-lumbar-cushion",
                        "Orthopedic contoured high-density memory foam with breathable 3D mesh cover and adjustable dual straps for office and car seats.",
                        45.00, 34.00, 50, health.getId(),
                        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
                        false, false, 4.7, 41);
            }

            if (groceries != null) {
                createProduct("Single-Origin Ethiopian Yirgacheffe Specialty Coffee Beans (1kg)", "ethiopian-yirgacheffe-specialty-coffee",
                        "100% Arabica artisanal whole beans with notes of jasmine blossom, sweet bergamot, and wild blueberry. Freshly roasted.",
                        38.00, 29.99, 60, groceries.getId(),
                        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800",
                        true, true, 4.9, 130);

                createProduct("Ceremonial Grade Uji Japanese Organic Matcha Green Tea (100g)", "ceremonial-grade-uji-matcha-100g",
                        "Stone-ground first-harvest green tea leaves from Kyoto with vibrant emerald color, rich umami flavor, and smooth velvety crema.",
                        42.00, 33.50, 45, groceries.getId(),
                        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800",
                        true, false, 4.9, 84);

                createProduct("Cold-Pressed Extra Virgin Tuscan Olive Oil (500ml)", "cold-pressed-tuscan-extra-virgin-olive-oil",
                        "Hand-harvested Frantoio and Leccino olives cold-extracted within 6 hours of picking. Unfiltered with peppery artichoke finish.",
                        29.99, 23.99, 50, groceries.getId(),
                        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800",
                        false, true, 4.8, 62);
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

