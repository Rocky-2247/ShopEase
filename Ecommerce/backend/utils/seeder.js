import { sequelize, User, Category, Product, ProductVariant, Coupon, Address, Review } from '../models/index.js';
import { initDatabase } from '../config/db.js';
import { getSamsungProducts } from './samsungProductsData.js';
import { getAppleProducts } from './appleProductsData.js';
import { getDellProducts } from './dellProductsData.js';
import { getCanonProducts } from './canonProductsData.js';
import { getSonyProducts } from './sonyProductsData.js';
import { getAsusProducts } from './asusProductsData.js';
import { getAdidasProducts } from './adidasProductsData.js';
import { getNikeProducts } from './nikeProductsData.js';
import { getPumaProducts } from './pumaProductsData.js';
import { getZaraProducts } from './zaraProductsData.js';
import { getBoseProducts } from './boseProductsData.js';
import { getLogitechProducts } from './logitechProductsData.js';
import { getDysonProducts } from './dysonProductsData.js';
import { getRolexProducts } from './rolexProductsData.js';
import { getEnrichedMediaForProduct } from './productMediaEnricher.js';

export const seedDatabase = async (force = false) => {
  try {
    await initDatabase();
    if (force) {
      await sequelize.sync({ force: true });
    }

    console.log('🌱 Seeding ShopEase initial dataset with 10 commercial categories...');

    // 1. Seed Users
    let admin = await User.findOne({ where: { email: 'admin@shopease.com' } });
    if (!admin) {
      admin = await User.create({
        name: 'ShopEase Admin',
        email: 'admin@shopease.com',
        password: 'Admin@123',
        phone: '+1 234 567 8900',
        role: 'admin',
        points_balance: 500
      });
    }

    let demoUser = await User.findOne({ where: { email: 'user@shopease.com' } });
    if (!demoUser) {
      demoUser = await User.create({
        name: 'Alex Johnson',
        email: 'user@shopease.com',
        password: 'User@123',
        phone: '+1 987 654 3210',
        role: 'customer',
        points_balance: 150
      });
    }

    // 2. Seed Default Address for Demo User
    const existingAddr = await Address.findOne({ where: { user_id: demoUser.id } });
    if (!existingAddr) {
      await Address.create({
        user_id: demoUser.id,
        full_name: 'Alex Johnson',
        phone: '+1 987 654 3210',
        street: '742 Evergreen Terrace, Suite 4B',
        city: 'Springfield',
        state: 'Oregon',
        pincode: '97477',
        is_default: true
      });
    }

    // 3. Seed 10 Comprehensive Commercial Categories
    const categoriesData = [
      {
        name: 'Electronics & Tech',
        slug: 'electronics',
        description: 'Laptops, flagship smartphones, noise-cancelling audio, tablets, and smart gadgets',
        image_url: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=80',
        item_count: 5
      },
      {
        name: 'Fashion & Apparel',
        slug: 'fashion-apparel',
        description: 'Designer streetwear, premium denim, formal blazers, footwear, and leather bags',
        image_url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80',
        item_count: 4
      },
      {
        name: 'Home & Living',
        slug: 'home-living',
        description: 'Minimalist furniture, ceramic tableware, ambient smart lighting, and kitchenware',
        image_url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        item_count: 3
      },
      {
        name: 'Beauty & Skincare',
        slug: 'beauty-care',
        description: 'Clean skincare, botanical serums, luxury fragrances, and salon hair care',
        image_url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80',
        item_count: 4
      },
      {
        name: 'Sports & Fitness',
        slug: 'sports-outdoors',
        description: 'Performance activewear, ergonomic yoga mats, smart dumbbells, and camping gear',
        image_url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
        item_count: 3
      },
      {
        name: 'Books & Stationery',
        slug: 'books-stationery',
        description: 'Bestselling hardcovers, leather journals, fountain pens, and artistic supplies',
        image_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
        item_count: 3
      },
      {
        name: 'Gaming & Consoles',
        slug: 'gaming-consoles',
        description: 'Next-gen consoles, mechanical keyboards, gaming headsets, and ergonomic chairs',
        image_url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
        item_count: 3
      },
      {
        name: 'Watches & Jewelry',
        slug: 'watches-jewelry',
        description: 'Precision chronograph timepieces, sterling silver, gold pendants, and smart rings',
        image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
        item_count: 3
      },
      {
        name: 'Health & Wellness',
        slug: 'health-wellness',
        description: 'Organic dietary supplements, herbal teas, massage guns, and posture correctors',
        image_url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
        item_count: 3
      },
      {
        name: 'Groceries & Gourmet',
        slug: 'groceries-gourmet',
        description: 'Artisanal roasted coffee beans, organic matcha, cold-pressed olive oils, and snacks',
        image_url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
        item_count: 3
      }
    ];

    const createdCategories = {};
    for (const cat of categoriesData) {
      let [created] = await Category.findOrCreate({
        where: { slug: cat.slug },
        defaults: cat
      });
      // update details in case they already existed with old names
      created.name = cat.name;
      created.description = cat.description;
      created.image_url = cat.image_url;
      await created.save();
      createdCategories[cat.slug] = created.id;
    }

    // 4. Comprehensive Product Seed List Across All 10 Categories
    const productsData = [
      // 1. Electronics
      {
        name: 'AuraSound Spatial Wireless Headphones',
        slug: 'aurasound-spatial-wireless-headphones',
        description: 'Immerse yourself in concert-hall audio with active noise cancellation, 45-hour battery life, and ultra-soft memory foam ear cushions.',
        price: 299.99,
        discount_price: 249.99,
        stock: 35,
        category_id: createdCategories['electronics'],
        image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 42,
        is_featured: true,
        is_trending: true,
        specifications: { Connectivity: 'Bluetooth 5.3 + 3.5mm Aux', Battery: '45 Hours Playtime', Warranty: '2 Years Manufacturer' }
      },
      {
        name: 'MacBook Pro 16" Liquid Retina XDR',
        slug: 'macbook-pro-16-liquid-retina',
        description: 'Engineered for extreme performance with blazing fast 16-core CPU, 40-core GPU, up to 22h battery life, and 120Hz ProMotion display.',
        price: 2499.00,
        discount_price: 2299.00,
        stock: 20,
        category_id: createdCategories['electronics'],
        image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
        rating: 4.9,
        num_reviews: 88,
        is_featured: true,
        is_trending: true,
        specifications: { Chip: 'Apple M3 Pro', RAM: '36GB Unified', Storage: '1TB Superfast SSD' }
      },
      {
        name: 'Samsung Galaxy Book4 Pro 360 (Touchscreen with S Pen)',
        slug: 'samsung-galaxy-book4-pro-360',
        description: 'Next-gen 2-in-1 touchscreen laptop with 16" 3K Dynamic AMOLED 2X, Intel Core Ultra 7 processor with AI Boost, and bundled responsive S Pen.',
        price: 1899.00,
        discount_price: 1649.00,
        stock: 25,
        category_id: createdCategories['electronics'],
        image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
        rating: 4.9,
        num_reviews: 94,
        is_featured: true,
        is_trending: true,
        specifications: { Brand: 'Samsung', Processor: 'Intel Core Ultra 7', Display: '16" 3K AMOLED 120Hz', RAM: '32GB LPDDR5X' }
      },
      {
        name: 'Samsung Galaxy S24 Ultra (Titanium Gray 512GB)',
        slug: 'samsung-galaxy-s24-ultra',
        description: 'Flagship AI smartphone with Titanium exterior, built-in S Pen, 200MP Quad Telephoto camera with 100x Space Zoom, and Snapdragon 8 Gen 3 for Galaxy.',
        price: 1299.00,
        discount_price: 1199.00,
        stock: 30,
        category_id: createdCategories['electronics'],
        image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'],
        rating: 4.9,
        num_reviews: 118,
        is_featured: true,
        is_trending: true,
        specifications: { Brand: 'Samsung', Camera: '200MP Quad Camera', Chip: 'Snapdragon 8 Gen 3', Battery: '5000mAh' }
      },
      {
        name: 'UltraVision 4K OLED Smart Watch Pro',
        slug: 'ultravision-4k-oled-smart-watch-pro',
        description: 'Titanium chassis with sapphire glass, advanced health ECG telemetry, GPS tracking, and 7-day battery endurance.',
        price: 399.00,
        discount_price: 349.00,
        stock: 20,
        category_id: createdCategories['electronics'],
        image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'],
        rating: 4.8,
        num_reviews: 67,
        is_featured: true,
        is_trending: true,
        specifications: { Display: '1.9" OLED 1000 nits', Water_Resistance: '50m (5 ATM)', Sensors: 'Optical HR, SpO2, ECG' }
      },

      // 2. Fashion & Apparel
      {
        name: 'Heritage Italian Leather Crossbody Bag',
        slug: 'heritage-italian-leather-crossbody-bag',
        description: 'Full-grain Tuscan calfskin with antique brass hardware, expandable main compartment, and adjustable shoulder strap.',
        price: 249.00,
        discount_price: 199.00,
        stock: 30,
        category_id: createdCategories['fashion-apparel'],
        image_url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80'],
        rating: 4.8,
        num_reviews: 34,
        is_featured: true,
        is_trending: false,
        specifications: { Material: '100% Full Grain Leather', Hardware: 'Antique Solid Brass', Origin: 'Florence, Italy' }
      },
      {
        name: 'Urban Luxe Minimalist Denim Jacket',
        slug: 'urban-luxe-minimalist-denim-jacket',
        description: 'Japanese selvedge cotton denim with relaxed boxy silhouette, dual chest pockets, and custom antique zinc buttons.',
        price: 129.99,
        discount_price: 99.99,
        stock: 45,
        category_id: createdCategories['fashion-apparel'],
        image_url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80'],
        rating: 4.7,
        num_reviews: 29,
        is_featured: false,
        is_trending: true,
        specifications: { Fabric: '100% Selvedge Cotton', Fit: 'Relaxed Tailored', Wash: 'Vintage Stonewash' }
      },

      // 3. Home & Living
      {
        name: 'Nordic Ceramic Handcrafted Coffee Set',
        slug: 'nordic-ceramic-coffee-set',
        description: 'Includes matte black dripper, heat-resistant borosilicate glass server, and two ceramic artisan mugs.',
        price: 79.99,
        discount_price: 59.99,
        stock: 50,
        category_id: createdCategories['home-living'],
        image_url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'],
        rating: 4.9,
        num_reviews: 53,
        is_featured: true,
        is_trending: true,
        specifications: { Capacity: '600ml Server', Material: 'Stoneware Ceramic & Glass', Dishwasher_Safe: 'Yes' }
      },
      {
        name: 'AuraGlow Smart Ambient Floor Lamp',
        slug: 'auraglow-smart-ambient-floor-lamp',
        description: '16M vibrant colors, dynamic music synchronization, touch dimming, and seamless Apple HomeKit/Alexa integration.',
        price: 149.00,
        discount_price: 119.00,
        stock: 25,
        category_id: createdCategories['home-living'],
        image_url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'],
        rating: 4.7,
        num_reviews: 22,
        is_featured: false,
        is_trending: true,
        specifications: { Height: '140 cm', Brightness: '2000 Lumens', Connectivity: 'Wi-Fi 2.4GHz + Bluetooth' }
      },

      // 4. Beauty & Skincare
      {
        name: 'Radiance Glow Botanical Face Serum (50ml)',
        slug: 'radiance-glow-botanical-face-serum',
        description: 'Infused with Vitamin C, Hyaluronic Acid, and organic Rosehip oil to brighten skin tone and smooth fine lines.',
        price: 48.00,
        discount_price: 38.00,
        stock: 80,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'],
        rating: 4.9,
        num_reviews: 74,
        is_featured: true,
        is_trending: true,
        specifications: { Volume: '50ml (1.7 fl oz)', Skin_Type: 'All Skin Types', Certification: 'Cruelty-Free & Vegan' }
      },
      {
        name: 'Velvet Rose Eau De Parfum (100ml)',
        slug: 'velvet-rose-eau-de-parfum',
        description: 'A captivating blend of Damask rose, warm amber, cedarwood, and spicy pink peppercorn with 12h projection.',
        price: 95.00,
        discount_price: 79.00,
        stock: 40,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80'],
        rating: 4.8,
        num_reviews: 41,
        is_featured: false,
        is_trending: true,
        specifications: { Concentration: 'Eau de Parfum (20% Oil)', Top_Notes: 'Pink Pepper, Bergamot', Base_Notes: 'Amber, Cedarwood' }
      },
      {
        name: 'LuxeHydra Hyaluronic Acid Plumping Deep Moisture Cream (50ml)',
        slug: 'luxehydra-hyaluronic-moisture-cream',
        description: 'Triple-molecular weight hyaluronic acid combined with ceramides and squalane to replenish the skin barrier and lock in 72-hour deep moisture.',
        price: 52.00,
        discount_price: 41.50,
        stock: 65,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 128,
        is_featured: true,
        is_trending: true,
        specifications: { Active: 'Triple Hyaluronic Acid + Ceramide NP', SkinType: 'Dry & Sensitive Skin', Texture: 'Rich Whipped Soufflé' }
      },
      {
        name: 'Pure Botanical Cleansing Oil with Japanese Camellia (200ml)',
        slug: 'pure-botanical-cleansing-oil-camellia',
        description: 'Gentle melt-away cleansing oil that effortlessly dissolves waterproof makeup and SPF while purifying pores without stripping natural oils.',
        price: 34.00,
        discount_price: 27.00,
        stock: 70,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1556228722-d0b5be7490bf?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1556228722-d0b5be7490bf?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 89,
        is_featured: false,
        is_trending: true,
        specifications: { Ingredients: 'Japanese Camellia Oil, Jojoba, Vitamin E', Formula: 'Non-Comedogenic & PEG-Free', Volume: '200ml Pump Bottle' }
      },
      {
        name: 'Advanced 1% Pure Encapsulated Retinol Youth Night Elixir (30ml)',
        slug: 'encapsulated-retinol-youth-night-elixir',
        description: 'Time-release encapsulated retinol paired with soothing niacinamide and bakuchiol to diminish fine lines, accelerate cell turnover, and refine texture.',
        price: 65.00,
        discount_price: 52.00,
        stock: 45,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1608248597359-009581335f60?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1608248597359-009581335f60?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 94,
        is_featured: true,
        is_trending: true,
        specifications: { Concentration: '1% Encapsulated Retinol + 2% Bakuchiol', Use: 'Night Treatment', Packaging: 'Opaque Airless Vacuum Pump' }
      },
      {
        name: 'Centella Asiatica Soothing Barrier Calming Gel (100ml)',
        slug: 'centella-asiatica-soothing-calming-gel',
        description: 'Ultra-refreshing lightweight gel formulated with 80% Madagascar Centella Asiatica and panthenol to instantly soothe redness and acne irritation.',
        price: 28.00,
        discount_price: 21.99,
        stock: 75,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 63,
        is_featured: false,
        is_trending: false,
        specifications: { KeyExtract: '80% Madagascar Centella Asiatica', Finish: 'Weightless Cooling Gel', Suitable: 'Acne-Prone & Sensitive' }
      },
      {
        name: 'AuraShield Invisible Water-Gel Broad Spectrum SPF 50+ PA++++ (50ml)',
        slug: 'aurashield-water-gel-sunscreen-spf50',
        description: 'Ultralight hybrid sunscreen with zero white cast, velvet matte finish, pollution defense filter, and reef-safe water-resistant protection.',
        price: 32.00,
        discount_price: 25.50,
        stock: 90,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 156,
        is_featured: true,
        is_trending: true,
        specifications: { Protection: 'SPF 50+ / PA++++ UVA/UVB', Finish: 'Invisible Velvet Matte', ReefSafe: '100% Oxybenzone Free' }
      },
      {
        name: 'Caffeine & Peptide Firming Eye Contour Concentrate (15ml)',
        slug: 'caffeine-peptide-firming-eye-concentrate',
        description: 'Targeted rollerball treatment with 5% green tea caffeine and Matrixyl 3000 to visibly reduce stubborn puffiness, dark circles, and under-eye fatigue.',
        price: 36.00,
        discount_price: 28.99,
        stock: 55,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1512290900672-1f02e6a09be9?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1512290900672-1f02e6a09be9?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 77,
        is_featured: false,
        is_trending: false,
        specifications: { Applicator: 'Cooling Zamac Metal Rollerball', Actives: '5% Caffeine + Multi-Peptide Complex', Targets: 'Dark Circles & Bags' }
      },
      {
        name: 'GlowExfoliate AHA 7% Glycolic Acid Clarifying Toner (200ml)',
        slug: 'glowexfoliate-aha-glycolic-acid-toner',
        description: 'Gentle chemical exfoliating resurfacing toner with glycolic acid, Tasmanian pepperberry, and aloe vera for radiant glassy skin clarity.',
        price: 26.00,
        discount_price: 19.99,
        stock: 80,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 110,
        is_featured: false,
        is_trending: true,
        specifications: { Acid: '7% Glycolic Acid (AHA) pH 3.6', Soothing: 'Tasmanian Pepperberry & Aloe', Usage: '3-4 Times Weekly Evening' }
      },
      {
        name: 'Midnight Berry Nourishing Lip Sleeping Mask (20g)',
        slug: 'midnight-berry-nourishing-lip-mask',
        description: 'Enriched with shea butter, murumuru seed butter, and vitamin C berry fruit complex to melt away dead flakes and hydrate lips overnight.',
        price: 22.00,
        discount_price: 16.50,
        stock: 85,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 142,
        is_featured: false,
        is_trending: true,
        specifications: { Scent: 'Sweet Wild Berry', KeyMoisturizers: 'Shea Butter & Murumuru Butter', Includes: 'Silicone Spatula Wand' }
      },
      {
        name: 'Santorini Santal Wood & Vanilla Amber Luxury Eau De Parfum (100ml)',
        slug: 'santorini-santal-wood-vanilla-edp',
        description: 'Sophisticated unisex niche fragrance with Australian sandalwood, creamy bourbon vanilla, cardamom, and smoked cedarwood with 14h longevity.',
        price: 115.00,
        discount_price: 92.00,
        stock: 35,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 88,
        is_featured: true,
        is_trending: true,
        specifications: { Category: 'Unisex Eau de Parfum (22% Extrait)', Top: 'Cardamom & Violet Leaf', Base: 'Sandalwood & Bourbon Vanilla' }
      },
      {
        name: 'Moroccan Argan & Keratin Intense Hair Repair Mask (250ml)',
        slug: 'moroccan-argan-keratin-hair-mask',
        description: 'Deep conditioning restorative salon hair mask infused with cold-pressed organic argan oil, hydrolyzed silk keratin, and biotin for silky frizz control.',
        price: 38.00,
        discount_price: 29.50,
        stock: 60,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 69,
        is_featured: false,
        is_trending: false,
        specifications: { HairType: 'Dry, Bleached & Heat-Damaged', Actives: 'Moroccan Argan Oil & Silk Keratin', SulfateFree: '100% Color-Safe' }
      },
      {
        name: 'Rose Quartz Facial Roller & Sculpting Gua Sha Crystal Set',
        slug: 'rose-quartz-facial-roller-gua-sha-set',
        description: '100% natural Grade-AAA Brazilian Rose Quartz handcrafted facial roller and ergonomic heart gua sha for lymphatic drainage and facial contouring.',
        price: 29.99,
        discount_price: 22.99,
        stock: 70,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 83,
        is_featured: false,
        is_trending: true,
        specifications: { Stone: '100% Brazilian Rose Quartz AAA', Hardware: 'Reinforced Rose Gold Welded Zinc', GiftBox: 'Velvet Travel Pouch Included' }
      },
      {
        name: 'Rosemary & Biotin Follicle Densifying Scalp Serum (60ml)',
        slug: 'rosemary-biotin-scalp-serum-60ml',
        description: 'Stimulating peptide and pure rosemary oil hair density treatment that strengthens follicles, balances scalp sebum, and promotes thicker regrowth.',
        price: 36.00,
        discount_price: 28.00,
        stock: 65,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1608248597359-009581335f60?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1608248597359-009581335f60?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 91,
        is_featured: false,
        is_trending: true,
        specifications: { Extracts: 'Steam-Distilled Rosemary Oil & Biotin', NonGreasy: 'Water-Based Fast Absorbing', Application: 'Daily Scalp Drops' }
      },
      {
        name: 'Vitamin E & French Green Clay Purifying Detox Face Mask (100g)',
        slug: 'french-green-clay-detox-face-mask',
        description: 'Montmorillonite French clay with spirulina and vitamin E that draws out impurities, minimizes enlarged pores, and gently exfoliates.',
        price: 27.50,
        discount_price: 21.00,
        stock: 55,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1567928815104-b630f9a202d0?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1567928815104-b630f9a202d0?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 46,
        is_featured: false,
        is_trending: false,
        specifications: { Clay: '100% Illite & Montmorillonite French Clay', MaskType: 'Non-Drying Creamy Clay', NetWeight: '100g Glass Jar' }
      },
      {
        name: 'Silk Nourishing Hand & Cuticle Cream with Almond Milk (75ml)',
        slug: 'silk-nourishing-hand-cream-almond',
        description: 'Fast-absorbing non-sticky hand treatment packed with organic sweet almond milk, shea butter, and vitamin E to rescue dry cracked hands.',
        price: 18.00,
        discount_price: 13.99,
        stock: 90,
        category_id: createdCategories['beauty-care'],
        image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 54,
        is_featured: false,
        is_trending: false,
        specifications: { Texture: 'Non-Greasy Velvet Cream', Fragrance: 'Subtle Sweet Almond Blossom', Tube: '100% Recyclable Aluminum' }
      },

      // 5. Sports & Fitness
      {
        name: 'ProGrip High-Density Alignment Yoga Mat',
        slug: 'progrip-alignment-yoga-mat',
        description: 'Eco-friendly natural tree rubber with laser-etched alignment lines and anti-slip polyurethane sweat-absorbent top.',
        price: 68.00,
        discount_price: 52.00,
        stock: 60,
        category_id: createdCategories['sports-outdoors'],
        image_url: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=800&q=80'],
        rating: 4.8,
        num_reviews: 39,
        is_featured: true,
        is_trending: false,
        specifications: { Thickness: '5mm Cushioned', Dimensions: '183cm x 68cm', Weight: '2.8 kg' }
      },
      {
        name: 'Apex Speed Rope Pro (Ball-Bearing System)',
        slug: 'apex-speed-rope-pro',
        description: 'Ultra-fast 360-degree dual bearing mechanism with aircraft-grade aluminum handles for HIIT and boxing.',
        price: 34.99,
        discount_price: 24.99,
        stock: 75,
        category_id: createdCategories['sports-outdoors'],
        image_url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'],
        rating: 4.7,
        num_reviews: 26,
        is_featured: false,
        is_trending: true,
        specifications: { Cable: '3m Adjustable Steel Coated', Bearings: 'Stainless Steel Double Ball-Bearing' }
      },

      // 6. Books & Stationery
      {
        name: 'Atomic Habits & Deep Work Collector Bundle',
        slug: 'atomic-habits-deep-work-bundle',
        description: 'Deluxe hardcover edition with embossed gold foil details, ribbon bookmark, and companion productivity journal.',
        price: 49.99,
        discount_price: 39.99,
        stock: 55,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'],
        rating: 4.9,
        num_reviews: 112,
        is_featured: true,
        is_trending: true,
        specifications: { Format: 'Hardcover Slipcase', Pages: '640 Pages Combined', Language: 'English' }
      },
      {
        name: 'Amazon Kindle Paperwhite Signature Edition (32GB, Wireless Charging)',
        slug: 'kindle-paperwhite-signature-32gb',
        description: '6.8-inch glare-free 300 ppi display with auto-adjusting warm front light, 32GB storage, wireless charging, and up to 10 weeks battery life.',
        price: 189.99,
        discount_price: 159.99,
        stock: 35,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1592496001020-d31bd830651f?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1592496001020-d31bd830651f?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 148,
        is_featured: true,
        is_trending: true,
        specifications: { Display: '6.8" 300 ppi Glare-Free Paperwhite', Storage: '32GB Built-in', Battery: 'Up to 10 Weeks' }
      },
      {
        name: 'The Psychology of Money & Thinking, Fast and Slow (Hardcover Box Set)',
        slug: 'psychology-of-money-thinking-fast-slow-boxset',
        description: 'Mastering wealth, risk, and human cognitive psychology with this luxury slipcased pair from Morgan Housel and Daniel Kahneman.',
        price: 54.00,
        discount_price: 42.50,
        stock: 50,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 135,
        is_featured: true,
        is_trending: true,
        specifications: { Author: 'Morgan Housel & Daniel Kahneman', Format: 'Deluxe Hardcover Box Set', Language: 'English' }
      },
      {
        name: 'Handcrafted Full-Grain Leather Travelers Refillable Journal (A5)',
        slug: 'handcrafted-leather-travelers-journal',
        description: 'Authentic rustic crazy-horse leather cover with 3 fountain-pen friendly 120gsm kraft inserts, PVC zipper pouch, and brass bookmark charm.',
        price: 38.00,
        discount_price: 29.99,
        stock: 60,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 79,
        is_featured: false,
        is_trending: true,
        specifications: { Leather: '100% Full Grain Buffalo Leather', Paper: '120gsm Bleed-Proof Archival', Size: 'Standard A5 (21x15cm)' }
      },
      {
        name: 'Executive Brass Fountain Pen & Obsidian Ink Bottle Set',
        slug: 'executive-brass-fountain-pen-set',
        description: 'Precision machined solid brass barrel with German iridium fine nib, piston converter, and 50ml obsidian black ink.',
        price: 58.00,
        discount_price: 44.00,
        stock: 40,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'],
        rating: 4.8,
        num_reviews: 31,
        is_featured: false,
        is_trending: false,
        specifications: { Nib: '0.5mm German Iridium Fine', Material: 'Solid Brass with Gunmetal Finish' }
      },
      {
        name: 'Leuchtturm1917 Master Classic Dotted Hardcover Notebook (A4+)',
        slug: 'leuchtturm1917-master-classic-notebook',
        description: 'Oversized archival masterpiece with 235 numbered dot-grid pages, 100gsm ink-proof paper, expandable pocket, and table of contents.',
        price: 34.50,
        discount_price: 27.50,
        stock: 45,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 92,
        is_featured: false,
        is_trending: false,
        specifications: { Ruling: '5mm Dot Grid', PaperWeight: '100 g/m² FSC-Certified', Binding: 'Thread-Bound Opens Flat' }
      },
      {
        name: 'Prismacolor Premier 72-Color Soft Core Colored Pencils Tin',
        slug: 'prismacolor-premier-72-colored-pencils',
        description: 'Professional artist-grade colored pencils featuring thick 3.8mm soft cores for seamless blending, rich pigmentation, and lightfast brilliance.',
        price: 69.99,
        discount_price: 54.99,
        stock: 40,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 116,
        is_featured: true,
        is_trending: true,
        specifications: { Core: '3.8mm Soft Wax-Based', Count: '72 Vibrant Colors', Tin: 'Protective Storage Case' }
      },
      {
        name: 'Solid Walnut & Brass Heavy Geometric Bookends (Pair)',
        slug: 'solid-walnut-brass-geometric-bookends',
        description: 'Sculptural hand-carved American black walnut blocks anchored with solid brushed brass base plates and non-slip felt bottom pads.',
        price: 48.00,
        discount_price: 38.00,
        stock: 35,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 43,
        is_featured: false,
        is_trending: false,
        specifications: { Wood: 'Solid American Black Walnut', Metal: 'Heavy Solid Brass', Weight: '1.4 kg per pair' }
      },
      {
        name: 'Zenith Retro Heavy-Duty Desktop Mechanical Pencil Sharpener',
        slug: 'zenith-retro-mechanical-pencil-sharpener',
        description: 'Die-cast alloy vintage pencil sharpener with multi-point rotary blade mechanism, desk clamp, and transparent shavings drawer.',
        price: 32.00,
        discount_price: 24.99,
        stock: 55,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 38,
        is_featured: false,
        is_trending: false,
        specifications: { Blades: 'Spiral Steel Cutting Mechanism', Adjustability: '5 Point Sharpness Settings', Mounting: 'Desk Clamp Included' }
      },
      {
        name: 'Winsor & Newton Cotman Watercolor Half Pan Studio Set (45 Pcs)',
        slug: 'winsor-newton-cotman-watercolor-set',
        description: 'Comprehensive artist watercolor box with 40 assorted vibrant half pans, integrated mixing palettes, and 2 precision Sable travel brushes.',
        price: 75.00,
        discount_price: 59.99,
        stock: 30,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 84,
        is_featured: true,
        is_trending: true,
        specifications: { Contents: '45 Half Pans + Mixing Wells', Brushes: '2x Travel Detail Brushes', Medium: 'Professional Watercolor' }
      },
      {
        name: 'Traditional Copperplate Calligraphy Dip Pen & 6-Nib Guild Set',
        slug: 'traditional-calligraphy-dip-pen-set',
        description: 'Hand-turned ergonomic oblique wood penholder with 6 flexible stainless steel calligraphy nibs, sumi black ink, and instructional guide.',
        price: 29.99,
        discount_price: 22.50,
        stock: 50,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 51,
        is_featured: false,
        is_trending: false,
        specifications: { Holder: 'Oblique Ergonomic Rosewood', Nibs: '6x Flexible Steel (G-Nib, Hunt, Nikko)', Ink: '30ml Japanese Sumi Ink' }
      },
      {
        name: 'The Lord of the Rings 70th Anniversary Illustrated Hardcover Box Set',
        slug: 'lord-of-the-rings-70th-anniversary-boxset',
        description: 'Collectors heirloom edition illustrated in full color by author J.R.R. Tolkien, featuring gold gilded edges, fold-out maps, and slipcase.',
        price: 95.00,
        discount_price: 79.00,
        stock: 25,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 160,
        is_featured: true,
        is_trending: true,
        specifications: { Illustrations: 'Full Color by J.R.R. Tolkien', Pages: '1,248 Pages Illustrated', Slipcase: 'Gold Foil Stamped' }
      },
      {
        name: 'Minimalist Solid Aluminum Desk Organizer Caddy & Smartphone Dock',
        slug: 'minimalist-aluminum-desk-organizer',
        description: 'CNC machined aviation-grade anodized aluminum tray with dedicated compartments for pens, sticky notes, paperclips, and smartphone dock.',
        price: 42.00,
        discount_price: 34.00,
        stock: 40,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 47,
        is_featured: false,
        is_trending: true,
        specifications: { Material: 'Anodized 6061 Billet Aluminum', Finish: 'Space Gray Matte', Dimensions: '24 x 10 x 2.5 cm' }
      },
      {
        name: 'Moleskine Classic 12-Month Daily Planner & Journal (Large Hardcover)',
        slug: 'moleskine-classic-daily-planner-large',
        description: 'One full page per day for meticulous scheduling, expandable inner rear pocket, matching ribbon bookmark, and elastic closure band.',
        price: 27.99,
        discount_price: 21.99,
        stock: 65,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 96,
        is_featured: false,
        is_trending: true,
        specifications: { Layout: 'Daily (1 Page per Day)', Cover: 'Hardcover Black Leatherette', Size: 'Large (13 x 21 cm)' }
      },
      {
        name: 'Dune & Sci-Fi Classics Deluxe Clothbound Collectors Quad Set',
        slug: 'dune-sci-fi-classics-deluxe-clothbound',
        description: 'Frank Herberts seminal sci-fi epics in foil-stamped clothbound covers with custom endpapers and stained page edges.',
        price: 85.00,
        discount_price: 68.00,
        stock: 30,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 73,
        is_featured: false,
        is_trending: false,
        specifications: { Format: 'Clothbound Hardcovers', Titles: 'Dune, Messiah, Children, God Emperor', Binding: 'Ribbon Marker' }
      },
      {
        name: 'Midori Solid Brass 15cm Ruler & Numbered Bookmark Index Clip Set',
        slug: 'midori-brass-ruler-index-clip-set',
        description: 'Solid Japanese brass 15cm measurement ruler paired with 12 numbering index clips that develop a unique natural patina over time.',
        price: 24.99,
        discount_price: 18.99,
        stock: 55,
        category_id: createdCategories['books-stationery'],
        image_url: 'https://images.unsplash.com/photo-1532012164546-f432f2e37b73?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1532012164546-f432f2e37b73?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 34,
        is_featured: false,
        is_trending: false,
        specifications: { Material: '100% Solid Japanese Brass', RulerLength: '15 cm Metric & Imperial', Clips: '12 Numbered Metal Index Clips' }
      },

      // 7. Gaming & Consoles
      {
        name: 'Sony PlayStation 5 Pro Digital Console (2TB SSD)',
        slug: 'sony-playstation-5-pro-digital',
        description: 'Next-generation 4K 120Hz gaming powerhouse with PlayStation Spectral Super Resolution (PSSR), advanced ray tracing, and ultra-fast 2TB NVMe storage.',
        price: 699.99,
        discount_price: 649.99,
        stock: 25,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 142,
        is_featured: true,
        is_trending: true,
        specifications: { Storage: '2TB Custom High-Speed SSD', Resolution: 'Up to 8K / 4K 120Hz HDR', RayTracing: 'PSSR AI Upscaling' }
      },
      {
        name: 'Microsoft Xbox Series X (1TB Carbon Black Console)',
        slug: 'microsoft-xbox-series-x-1tb',
        description: 'The fastest, most powerful Xbox ever featuring 12 teraflops of raw graphic processing power, DirectX Raytracing, 120 FPS gaming, and Quick Resume.',
        price: 499.99,
        discount_price: 449.99,
        stock: 30,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 98,
        is_featured: true,
        is_trending: false,
        specifications: { CPU: 'Custom AMD Zen 2 (8-Core)', GPU: '12 TFLOPS RDNA 2', Storage: '1TB Custom NVMe SSD' }
      },
      {
        name: 'Nintendo Switch OLED Model (Neon Red/Neon Blue)',
        slug: 'nintendo-switch-oled-neon',
        description: 'Vibrant 7-inch OLED screen with vivid colors and crisp contrast, wide adjustable tabletop stand, dock with wired LAN port, and 64GB storage.',
        price: 349.99,
        discount_price: 319.99,
        stock: 40,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 185,
        is_featured: true,
        is_trending: true,
        specifications: { Display: '7-inch OLED Multi-touch', Storage: '64GB Internal + MicroSD slot', Audio: 'Enhanced Onboard Speakers' }
      },
      {
        name: 'Valve Steam Deck OLED Handheld Gaming PC (512GB)',
        slug: 'valve-steam-deck-oled-512gb',
        description: 'High-performance handheld gaming PC with 7.4-inch HDR OLED 90Hz display, custom AMD APU, responsive haptics, and up to 12 hours battery life.',
        price: 549.00,
        discount_price: 499.00,
        stock: 20,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 110,
        is_featured: true,
        is_trending: true,
        specifications: { Display: '7.4" 90Hz HDR OLED', Processor: '6nm AMD Sephiroth APU', Battery: '50Wh (3-12 Hours)' }
      },
      {
        name: 'NexusFlow Mechanical RGB Gaming Keyboard',
        slug: 'nexusflow-mechanical-gaming-keyboard',
        description: 'Hot-swappable linear optical switches, per-key RGB lighting, magnetic wrist rest, and aluminum chassis.',
        price: 159.99,
        discount_price: 129.99,
        stock: 45,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'],
        rating: 4.8,
        num_reviews: 65,
        is_featured: true,
        is_trending: true,
        specifications: { Switches: 'Gateron Hot-swap Linear', Layout: 'Tenkeyless 87-Key', Backlight: 'RGB 16.8M' }
      },
      {
        name: 'Vortex Elite Wireless Pro Gaming Mouse',
        slug: 'vortex-elite-wireless-gaming-mouse',
        description: 'Ultra-lightweight 58g honeycomb shell, 26,000 DPI optical sensor, 80-hour battery, and lag-free 2.4GHz wireless.',
        price: 89.99,
        discount_price: 69.99,
        stock: 50,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80'],
        rating: 4.9,
        num_reviews: 48,
        is_featured: false,
        is_trending: true,
        specifications: { Sensor: 'PixArt 3395 (26K DPI)', Weight: '58 Grams', Polling_Rate: '1000Hz' }
      },
      {
        name: 'AeroSpace 7.1 Spatial Surround Wireless Gaming Headset',
        slug: 'aerospace-spatial-surround-headset',
        description: 'Lossless 2.4GHz ultra-low latency audio with planar magnetic drivers, retractable broadcast-grade microphone, and cooling gel ear cushions.',
        price: 179.99,
        discount_price: 139.99,
        stock: 45,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 72,
        is_featured: false,
        is_trending: true,
        specifications: { Drivers: '50mm Planar Magnetic', Battery: '50 Hours Playback', Mic: 'Bi-directional Noise-Cancelling' }
      },
      {
        name: 'TitanEdge Ergonomic Racing Gaming Chair (Black & Gold)',
        slug: 'titanedge-ergonomic-racing-gaming-chair',
        description: 'Cold-cure foam cushioning with 4D armrests, integrated magnetic memory foam lumbar pillow, steel reinforced frame, and 165-degree recline.',
        price: 399.00,
        discount_price: 329.00,
        stock: 15,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1580481077197-c25e839e1ff1?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1580481077197-c25e839e1ff1?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 54,
        is_featured: true,
        is_trending: false,
        specifications: { Material: 'Prime 2.0 PU Leatherette', Base: 'Reinforced Aluminum ADC12', WeightCapacity: '130 kg (290 lbs)' }
      },
      {
        name: 'ApexPro DualSense Wireless Elite Controller (Hall-Effect Sticks)',
        slug: 'apexpro-dualsense-wireless-elite-controller',
        description: 'Customizable wireless pro gamepad with magnetic Hall-effect thumbsticks, mappable rear back-paddles, hair-trigger locks, and rubberized grip.',
        price: 129.99,
        discount_price: 99.99,
        stock: 50,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 89,
        is_featured: false,
        is_trending: true,
        specifications: { Joysticks: 'Anti-Drift Hall Effect', Triggers: '3-Way Adjustable Hair Triggers', Connectivity: 'Bluetooth 5.2 + 2.4G + USB-C' }
      },
      {
        name: 'Predator 34" Curved WQHD 175Hz QD-OLED Gaming Monitor',
        slug: 'predator-34-curved-wqhd-oled-monitor',
        description: 'Ultra-wide 1800R curved quantum-dot OLED panel with 0.03ms response time, HDR True Black 400, G-Sync compatibility, and customizable ambient lighting.',
        price: 899.99,
        discount_price: 749.99,
        stock: 18,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 63,
        is_featured: true,
        is_trending: true,
        specifications: { Resolution: '3440 x 1440 UWQHD', RefreshRate: '175Hz (0.03ms GtG)', Panel: 'QD-OLED (Quantum Dot)' }
      },
      {
        name: 'Elgato 4K60 Pro HDR10 Low-Latency PCIe Capture Card',
        slug: 'elgato-4k60-pro-hdr10-capture-card',
        description: 'Stream and record stunning 4K 60fps HDR10 gameplay with zero-lag passthrough, multi-app simultaneous feeds, and seamless OBS / Streamlabs integration.',
        price: 249.99,
        discount_price: 209.99,
        stock: 35,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 41,
        is_featured: false,
        is_trending: false,
        specifications: { Interface: 'PCIe 2.0 x4', MaxCapture: '4K60 HDR10 / 1440p144 / 1080p240', Passthrough: 'Up to 2160p60 HDR10' }
      },
      {
        name: 'Meta Quest 3 Next-Gen Mixed Reality VR Headset (128GB)',
        slug: 'meta-quest-3-mixed-reality-vr-128gb',
        description: 'Breakthrough mixed reality headset powered by Snapdragon XR2 Gen 2, 4K+ Infinite Display, Touch Plus haptic controllers, and full-color passthrough.',
        price: 499.99,
        discount_price: 449.99,
        stock: 22,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 130,
        is_featured: true,
        is_trending: true,
        specifications: { Optics: 'Pancake Lenses (2064x2208 per eye)', Chipset: 'Snapdragon XR2 Gen 2', Tracking: 'Inside-Out 6DOF + Color Passthrough' }
      },
      {
        name: 'Razer Panthera Evo Tournament Edition Arcade Fight Stick',
        slug: 'razer-panthera-evo-arcade-fight-stick',
        description: 'Authentic Sanwa Denshi joystick and 8-way action buttons, 10-foot braided cable with cable management, and customizable artwork acrylic top.',
        price: 199.99,
        discount_price: 159.99,
        stock: 28,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 36,
        is_featured: false,
        is_trending: false,
        specifications: { Lever: 'Sanwa JLF-TP-8YT Joystick', Buttons: '8x Sanwa OBSF-30', Platform: 'PS5, PS4, PC (X-Input)' }
      },
      {
        name: 'Logitech G G923 TrueForce Force Feedback Racing Wheel & Pedals',
        slug: 'logitech-g923-trueforce-racing-wheel',
        description: 'High-definition TrueForce force feedback system delivering 4000 updates per second, dual-clutch launch control, progressive brake pedal, and brushed metal pedals.',
        price: 349.99,
        discount_price: 289.99,
        stock: 20,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 82,
        is_featured: false,
        is_trending: true,
        specifications: { ForceFeedback: 'TRUEFORCE Direct Dial Dual-Motor', Rotation: '900 Degrees Lock-to-Lock', Compatibility: 'PC, PlayStation 5, PlayStation 4' }
      },
      {
        name: 'HyperX QuadCast S RGB USB Condenser Streaming Microphone',
        slug: 'hyperx-quadcast-s-rgb-microphone',
        description: 'Professional USB condenser microphone featuring dynamic RGB lighting, built-in anti-vibration shock mount, tap-to-mute sensor with LED indicator, and 4 polar patterns.',
        price: 159.99,
        discount_price: 129.99,
        stock: 40,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 95,
        is_featured: false,
        is_trending: true,
        specifications: { PolarPatterns: 'Stereo, Omnidirectional, Cardioid, Bidirectional', SampleRate: '48kHz / 16-bit', Mount: 'Built-in Anti-Vibration Shock Mount' }
      },
      {
        name: 'Thermaltake Massive RGB Heavy-Duty Gaming Laptop Cooling Pad',
        slug: 'thermaltake-massive-rgb-cooling-pad',
        description: 'Engineered with a massive 200mm whisper-quiet fan, 5 customizable RGB lighting modes, ergonomic height adjustment, and steel mesh surface.',
        price: 49.99,
        discount_price: 39.99,
        stock: 60,
        category_id: createdCategories['gaming-consoles'],
        image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 44,
        is_featured: false,
        is_trending: false,
        specifications: { FanSize: '200mm Silent Fan (800 RPM)', Compatibility: '10" to 19" Laptops', Lighting: '256 Colors RGB Ring' }
      },

      // 8. Watches & Jewelry
      {
        name: 'Lumix Alpha Minimalist Chronograph Watch',
        slug: 'lumix-alpha-minimalist-chronograph-watch',
        description: 'Handcrafted genuine Italian leather strap paired with a surgical stainless steel bezel and precision quartz movement.',
        price: 189.00,
        discount_price: 149.00,
        stock: 25,
        category_id: createdCategories['watches-jewelry'],
        image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80'],
        rating: 4.8,
        num_reviews: 37,
        is_featured: true,
        is_trending: true,
        specifications: { Movement: 'Japanese Quartz Chronograph', Case: '40mm 316L Stainless Steel', Water_Resist: '50m' }
      },
      {
        name: 'Starlight 18K Gold Plated Pendant Necklace',
        slug: 'starlight-18k-gold-plated-pendant-necklace',
        description: 'Dainty cubic zirconia solitaire starburst pendant on a delicate 18K gold-plated sterling silver herringbone chain.',
        price: 85.00,
        discount_price: 65.00,
        stock: 35,
        category_id: createdCategories['watches-jewelry'],
        image_url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'],
        rating: 4.9,
        num_reviews: 29,
        is_featured: false,
        is_trending: true,
        specifications: { Plating: '18K Yellow Gold Vermeil (3 Microns)', Base: '925 Sterling Silver', Hypoallergenic: 'Yes' }
      },

      // 9. Health & Wellness
      {
        name: 'TheraPulse Deep Tissue Massage Gun Pro',
        slug: 'therapulse-deep-tissue-massage-gun',
        description: 'High-torque brushless motor delivering 3200 RPM percussion therapy with 6 interchangeable massage heads and OLED screen.',
        price: 139.99,
        discount_price: 109.99,
        stock: 30,
        category_id: createdCategories['health-wellness'],
        image_url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'],
        rating: 4.8,
        num_reviews: 43,
        is_featured: true,
        is_trending: true,
        specifications: { Speeds: '30 Adjustable Levels', Battery: '6 Hours Lithium-Ion', Noise: '<45dB Quiet Glide' }
      },
      {
        name: 'Organic Ceremonial Grade Uji Matcha (100g)',
        slug: 'organic-ceremonial-grade-uji-matcha',
        description: 'First-harvest shade-grown green tea leaves from Kyoto, stone-ground to ultra-fine powder rich in L-theanine and antioxidants.',
        price: 36.00,
        discount_price: 28.00,
        stock: 65,
        category_id: createdCategories['health-wellness'],
        image_url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
        images: ['https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'],
        rating: 4.9,
        num_reviews: 57,
        is_featured: false,
        is_trending: true,
        specifications: { Origin: 'Uji, Kyoto, Japan', Grade: 'Ceremonial First Harvest', Weight: '100g Sealed Tin' }
      },

      // 10. Groceries & Gourmet
      {
        name: 'Artisan Single-Origin Ethiopian Yirgacheffe Coffee Beans (1kg)',
        slug: 'artisan-ethiopian-yirgacheffe-coffee',
        description: 'Medium roast whole beans boasting floral jasmine aroma, bergamot citrus notes, and silky milk chocolate body.',
        price: 32.50,
        discount_price: 26.50,
        stock: 50,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 62,
        is_featured: true,
        is_trending: true,
        specifications: { Roast: 'Medium Artisanal Roast', Processing: 'Washed Process', Elevation: '1,900 - 2,200m' }
      },
      {
        name: 'Cold-Pressed Extra Virgin Tuscan Olive Oil (750ml)',
        slug: 'cold-pressed-extra-virgin-olive-oil',
        description: 'Estate-bottled unfiltered EVOO from early harvested Frantoio and Leccino olives with rich peppery finish.',
        price: 29.99,
        discount_price: 22.99,
        stock: 45,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 35,
        is_featured: false,
        is_trending: false,
        specifications: { Acidity: '<0.2% Low Acidity', Region: 'Tuscany, Italy', Volume: '750ml Dark Glass Bottle' }
      },
      {
        name: 'Pure Raw Himalayan Wildflower Honey (500g Glass Jar)',
        slug: 'pure-raw-himalayan-wildflower-honey',
        description: 'Unprocessed, unfiltered multi-flora honey sourced directly from high-altitude Himalayan apiaries with natural bee pollen and enzymes.',
        price: 18.99,
        discount_price: 14.99,
        stock: 60,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 88,
        is_featured: true,
        is_trending: true,
        specifications: { Origin: 'Himalayan Foothills', Purity: '100% Raw Unpasteurized', Weight: '500g Hexagon Glass Jar' }
      },
      {
        name: 'Belgian 85% Single-Origin Dark Chocolate Truffles Box (24 Pcs)',
        slug: 'belgian-dark-chocolate-truffles-box',
        description: 'Master chocolatier assortment of handcrafted Grand Cru dark chocolate ganache, roasted hazelnut praline, and sea salt caramel.',
        price: 28.50,
        discount_price: 22.00,
        stock: 40,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 114,
        is_featured: true,
        is_trending: true,
        specifications: { Cocoa: '85% Single Origin Ecuador', Pieces: '24 Hand-poured Truffles', ShelfLife: '9 Months' }
      },
      {
        name: 'Authentic 12-Year Aged Balsamic Vinegar of Modena IGP (250ml)',
        slug: 'aged-balsamic-vinegar-modena-igp',
        description: 'Traditional wood-cask aged Italian vinegar from Trebbiano and Lambrusco grape must with complex sweet-tart syrupy texture.',
        price: 34.00,
        discount_price: 27.50,
        stock: 35,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 42,
        is_featured: false,
        is_trending: false,
        specifications: { Aging: '12 Years Oak & Cherry Casks', Certification: 'Modena IGP Certified', Volume: '250ml Wax-Sealed' }
      },
      {
        name: 'Royal Kashmiri Mammoth Walnut Kernels & Mamra Almonds Gift Box (1kg)',
        slug: 'kashmiri-walnut-mamra-almonds-gift-box',
        description: 'Selected jumbo snow-white walnut halves and oil-rich Mamra almonds packed in vacuum-sealed luxury gift tin with zero additives.',
        price: 38.00,
        discount_price: 29.99,
        stock: 55,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1508061252224-2375b47d04f8?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1508061252224-2375b47d04f8?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1608797178974-15b35a61dede?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 76,
        is_featured: true,
        is_trending: true,
        specifications: { Grade: 'Mammoth Halves & Iranian Mamra', NetWeight: '1000g (500g + 500g)', Packaging: 'Airtight Gift Tin' }
      },
      {
        name: 'Artisanal Bronze-Cut Black Summer Truffle Fettuccine (500g)',
        slug: 'artisan-truffle-fettuccine-pasta',
        description: 'Slow-dried durum wheat semolina pasta kneaded with aromatic Italian black summer truffle flakes for sublime gourmet dining.',
        price: 16.50,
        discount_price: 12.99,
        stock: 45,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1621996346565-e3d5d62810f5?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1621996346565-e3d5d62810f5?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 49,
        is_featured: false,
        is_trending: true,
        specifications: { Flour: '100% Italian Durum Semolina', Extrusion: 'Bronze Die Extruded', Weight: '500g Artisan Pack' }
      },
      {
        name: 'Himalayan Pink Rock Salt & Tellicherry Black Pepper Grinder Duo',
        slug: 'himalayan-salt-pepper-grinder-duo',
        description: 'Coarse 84-mineral pristine pink rock salt crystals paired with Tellicherry extra-bold black peppercorns in premium ceramic mill grinders.',
        price: 19.99,
        discount_price: 15.50,
        stock: 70,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1514944298352-f5424756b107?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1514944298352-f5424756b107?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 64,
        is_featured: false,
        is_trending: false,
        specifications: { SaltOrigin: 'Khewra Salt Mine', PepperGrade: 'Tellicherry TGSEB', Grinder: 'Adjustable Ceramic Rotor' }
      },
      {
        name: 'Stone-Ground Roasted Creamy Almond Butter with Chia & Flax (400g)',
        slug: 'stone-ground-almond-butter-chia',
        description: 'Slow-roasted whole California almonds stone-ground with superfood chia seeds and flaxseed, completely free of palm oil and refined sugar.',
        price: 15.50,
        discount_price: 12.00,
        stock: 50,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 81,
        is_featured: false,
        is_trending: true,
        specifications: { Ingredients: '92% Almonds, 5% Chia, 3% Flax', Vegan: '100% Plant-Based', Jar: '400g Glass Jar' }
      },
      {
        name: 'Gourmet Black Truffle Oil & French Fleur De Sel Finishing Hamper',
        slug: 'black-truffle-oil-fleur-de-sel-hamper',
        description: 'Indulgent chef-grade infusion of real black winter truffles in cold-extracted olive oil complemented with hand-harvested Guerande sea salt crystals.',
        price: 42.00,
        discount_price: 34.00,
        stock: 30,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 38,
        is_featured: true,
        is_trending: false,
        specifications: { TruffleType: 'Tuber Melanosporum', SaltRegion: 'Guerande, France', Pack: '250ml Oil + 125g Salt Tin' }
      },
      {
        name: 'Grade-A Pure Amber Maple Syrup from Vermont (500ml Decanter)',
        slug: 'grade-a-vermont-maple-syrup-500ml',
        description: 'Authentic 100% pure wood-fired maple syrup with delicate caramel warmth and butterscotch notes in a traditional handle glass decanter.',
        price: 22.50,
        discount_price: 17.99,
        stock: 55,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 53,
        is_featured: false,
        is_trending: false,
        specifications: { Grade: 'Grade A Amber Rich', Tree: 'Sugar Maple (Acer saccharum)', Volume: '500ml Glass Decanter' }
      },
      {
        name: 'Imperial Earl Grey Loose Leaf Black Tea with Blue Cornflowers (200g)',
        slug: 'imperial-earl-grey-loose-leaf-tea',
        description: 'High-grown orthodox Ceylon whole leaves infused with natural cold-pressed Italian bergamot oil and vibrant blue cornflower petals.',
        price: 17.00,
        discount_price: 13.50,
        stock: 65,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 71,
        is_featured: false,
        is_trending: true,
        specifications: { Estate: 'Nuwara Eliya, Sri Lanka', Bergamot: 'Reggio Calabria Cold-Pressed', Caddy: 'Double-Lid Airtight Tin' }
      },
      {
        name: 'Pure Spanish Saffron Threads (Category 1 Coupe 5g Tin)',
        slug: 'pure-spanish-saffron-threads-5g',
        description: 'Selected premium ISO 3632 Category 1 Coupe all-red saffron stigmas with intense floral-honey aroma and rich golden coloring.',
        price: 39.99,
        discount_price: 32.50,
        stock: 40,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 45,
        is_featured: true,
        is_trending: true,
        specifications: { Grade: 'ISO Category 1 Super Negin / Coupe', Origin: 'La Mancha, Spain', Packaging: 'Hermetic Acrylic & Gold Tin' }
      },
      {
        name: 'Genovese Basil Pesto with Pine Nuts & Parmigiano Reggiano (190g)',
        slug: 'genovese-basil-pesto-parmigiano',
        description: 'Authentic Ligurian recipe made with fresh PDO Genovese basil, Mediterranean pine nuts, extra virgin olive oil, and aged Parmigiano Reggiano cheese.',
        price: 14.50,
        discount_price: 11.25,
        stock: 60,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 58,
        is_featured: false,
        is_trending: true,
        specifications: { Basil: 'DOP Genovese Basil', Cheese: 'Parmigiano Reggiano DOP 24m', Weight: '190g Glass Jar' }
      },
      {
        name: 'Handcrafted Toasted Coconut & Wild Pecan Artisan Granola (500g)',
        slug: 'toasted-coconut-pecan-artisan-granola',
        description: 'Small-batch oven-baked whole rolled oats tossed with toasted coconut flakes, buttery wild pecans, maple syrup, and organic chia seeds.',
        price: 13.99,
        discount_price: 10.99,
        stock: 55,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 67,
        is_featured: false,
        is_trending: false,
        specifications: { Sweetener: '100% Pure Maple Syrup', Nuts: 'Texas Wild Pecans & Coconut', Bag: '500g Resealable Kraft Pouch' }
      },
      {
        name: 'Organic Greek Kalamata Whole Olives in Extra Virgin Olive Oil & Herbs (370g)',
        slug: 'organic-greek-kalamata-olives',
        description: 'Sun-ripened organic Kalamata olives marinated in EVOO, red wine vinegar, wild oregano, and thyme from southern Peloponnese.',
        price: 12.50,
        discount_price: 9.99,
        stock: 65,
        category_id: createdCategories['groceries-gourmet'],
        image_url: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 52,
        is_featured: false,
        is_trending: true,
        specifications: { OliveType: 'Whole Kalamata with Pit', Marinade: 'Greek EVOO, Oregano, Thyme', Volume: '370g Glass Jar' }
      },
      // Append 100+ Official Samsung Store Devices (Mobiles, Laptops, Foldables, Tablets, Wearables)
      ...getSamsungProducts(createdCategories['electronics']),
      // Append 120+ Official Apple Store Devices (iPhones, MacBooks, iPads, Apple Watches, AirPods, Displays, Vision Pro)
      ...getAppleProducts(createdCategories['electronics']),
      // Append 100+ Official Dell Devices (XPS, Alienware, Latitude, Precision, UltraSharp Monitors)
      ...getDellProducts(createdCategories['electronics']),
      // Append 100+ Official Canon Devices (EOS R, Cinema EOS, RF Lenses, PowerShot, imagePROGRAF Printers)
      ...getCanonProducts(createdCategories['electronics']),
      // Append 100+ Official Sony Devices (Alpha Cameras, G Master Lenses, PS5 Pro & VR2, Bravia XR OLED, Walkman, WH/WF ANC)
      ...getSonyProducts(createdCategories['electronics']),
      // Append 100+ Official ASUS Devices (ROG Strix, Zephyrus, Flow, Ally X, TUF Gaming, Zenbook DUO, ProArt, Swift OLED)
      ...getAsusProducts(createdCategories['electronics']),
      // Append 115+ Official Adidas Products (Ultraboost, Adizero, Samba OG, Gazelle, Spezial, Predator, Terrex)
      ...getAdidasProducts(createdCategories['sports-outdoors']),
      // Append 105+ Official Nike Products (Alphafly, Pegasus 41, Air Jordan, Dunk Low, Air Max, Mercurial)
      ...getNikeProducts(createdCategories['sports-outdoors']),
      // Append 105+ Official Puma Products (Deviate Nitro, Fast-R, Suede Classic, Palermo, Future 7, Scuderia Ferrari)
      ...getPumaProducts(createdCategories['sports-outdoors']),
      // Append 105+ Official Zara Products (Manteco Wool Coats, Tailoring Blazers, Silk Dresses, Selvedge Denim, Fragrances)
      ...getZaraProducts(createdCategories['fashion-apparel']),
      // Append 105+ Official Bose Audio Devices (QuietComfort Ultra, Smart Soundbars, Bass Modules, SoundLink Max, S1 Pro+, Frames)
      ...getBoseProducts(createdCategories['electronics']),
      // Append 115+ Official Logitech & Logitech G Devices (Mice, Keyboards, Webcams, Astro Headsets, Speakers, Sim Hardware)
      ...getLogitechProducts(createdCategories['electronics']),
      // Append 115+ Official Dyson Devices (Airwrap, Supersonic, Vacuums, Purifiers, OnTrac ANC Audio, WashG1)
      ...getDysonProducts(createdCategories['electronics'], createdCategories['home-living'], createdCategories['beauty-care']),
      // Append 145+ Official Rolex Watches (Submariner, Daytona, GMT-Master II, Datejust, Day-Date President, Oyster Perpetual, Sea-Dweller, Sky-Dweller, Yacht-Master, 1908, Milgauss, Air-King, Pearlmaster)
      ...getRolexProducts(createdCategories['watches-jewelry'])
    ];

    console.log(`📦 Processing and enriching ${productsData.length} products across 14 brand partner catalogs with 6-face imagery...`);
    const createdProductList = [];

    // Process all products with guaranteed 6 distinct face images
    for (let i = 0; i < productsData.length; i++) {
      const prod = productsData[i];
      const enriched = getEnrichedMediaForProduct(prod);
      const enrichedProd = {
        ...prod,
        image_url: enriched.image_url,
        images: enriched.images,
        video_url: enriched.video_url,
        rating: prod.rating || 4.9,
        num_reviews: prod.num_reviews || Math.floor(Math.random() * 150 + 25),
        is_featured: prod.is_featured !== undefined ? prod.is_featured : (i % 8 === 0),
        is_trending: prod.is_trending !== undefined ? prod.is_trending : (i % 5 === 0),
        stock: prod.stock || Math.floor(Math.random() * 40 + 10)
      };

      let [product, created] = await Product.findOrCreate({
        where: { slug: enrichedProd.slug },
        defaults: enrichedProd
      });

      if (!created) {
        await product.update({
          category_id: enrichedProd.category_id,
          name: enrichedProd.name,
          description: enrichedProd.description,
          price: enrichedProd.price,
          discount_price: enrichedProd.discount_price,
          stock: enrichedProd.stock,
          image_url: enrichedProd.image_url,
          images: enrichedProd.images,
          video_url: enrichedProd.video_url,
          rating: enrichedProd.rating,
          num_reviews: enrichedProd.num_reviews,
          is_featured: enrichedProd.is_featured,
          is_trending: enrichedProd.is_trending,
          specifications: enrichedProd.specifications
        });
      }

      if (i < 20) {
        createdProductList.push(product);
      }
    }

    console.log(`✅ Seeded ${productsData.length} products into the database.`);

    // 4.5. Ensure 100% of all existing products in the database have 6 face images & 10s video URL
    const allDbProducts = await Product.findAll();
    for (const p of allDbProducts) {
      if (!p.images || p.images.length < 6 || !p.video_url) {
        const enriched = getEnrichedMediaForProduct(p);
        p.images = enriched.images;
        if (!p.image_url) p.image_url = enriched.image_url;
        p.video_url = enriched.video_url;
        await p.save();
      }
    }

    // 5. Update item_count for all categories dynamically
    for (const catSlug in createdCategories) {
      const catId = createdCategories[catSlug];
      const count = await Product.count({ where: { category_id: catId } });
      await Category.update({ item_count: count }, { where: { id: catId } });
    }

    // 6. Seed Product Variants for key items
    if (createdProductList.length > 0) {
      await ProductVariant.findOrCreate({
        where: { sku: 'AURA-BLK' },
        defaults: {
          product_id: createdProductList[0].id,
          name: 'Matte Obsidian Black',
          sku: 'AURA-BLK',
          price: 299.99,
          discount_price: 249.99,
          stock: 20,
          attributes: { color: 'Obsidian Black' },
          image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'
        }
      });

      await ProductVariant.findOrCreate({
        where: { sku: 'AURA-SLV' },
        defaults: {
          product_id: createdProductList[0].id,
          name: 'Silver Luxe',
          sku: 'AURA-SLV',
          price: 299.99,
          discount_price: 249.99,
          stock: 15,
          attributes: { color: 'Silver Luxe' },
          image_url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800'
        }
      });
    }

    // 7. Seed Reviews
    if (createdProductList.length > 0) {
      await Review.findOrCreate({
        where: { user_id: demoUser.id, product_id: createdProductList[0].id },
        defaults: {
          user_id: demoUser.id,
          product_id: createdProductList[0].id,
          user_name: 'Alex Johnson',
          rating: 5,
          comment: 'Outstanding sound quality and deep bass! The ANC blocks out ambient noise completely on flights.',
          image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
          is_verified_buyer: true
        }
      });
    }

    // 8. Seed Coupons
    await Coupon.findOrCreate({
      where: { code: 'SAVE10' },
      defaults: {
        code: 'SAVE10',
        discount_percentage: 10,
        max_discount: 50,
        min_order_value: 50,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'WELCOME20' },
      defaults: {
        code: 'WELCOME20',
        discount_percentage: 20,
        max_discount: 100,
        min_order_value: 100,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'FREESHIP' },
      defaults: {
        code: 'FREESHIP',
        discount_percentage: 5,
        max_discount: 15,
        min_order_value: 0,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'SAMSUNG20' },
      defaults: {
        code: 'SAMSUNG20',
        discount_percentage: 20,
        max_discount: 200,
        min_order_value: 100,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'APPLE20' },
      defaults: {
        code: 'APPLE20',
        discount_percentage: 20,
        max_discount: 250,
        min_order_value: 150,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'DELL20' },
      defaults: {
        code: 'DELL20',
        discount_percentage: 20,
        max_discount: 250,
        min_order_value: 150,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'CANON15' },
      defaults: {
        code: 'CANON15',
        discount_percentage: 15,
        max_discount: 200,
        min_order_value: 100,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'SONY20' },
      defaults: {
        code: 'SONY20',
        discount_percentage: 20,
        max_discount: 250,
        min_order_value: 150,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'ASUS15' },
      defaults: {
        code: 'ASUS15',
        discount_percentage: 15,
        max_discount: 200,
        min_order_value: 100,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'ADIDAS20' },
      defaults: {
        code: 'ADIDAS20',
        discount_percentage: 20,
        max_discount: 150,
        min_order_value: 80,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'NIKE20' },
      defaults: {
        code: 'NIKE20',
        discount_percentage: 20,
        max_discount: 150,
        min_order_value: 80,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'PUMA20' },
      defaults: {
        code: 'PUMA20',
        discount_percentage: 20,
        max_discount: 150,
        min_order_value: 80,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'ZARA15' },
      defaults: {
        code: 'ZARA15',
        discount_percentage: 15,
        max_discount: 100,
        min_order_value: 60,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'BOSE20' },
      defaults: {
        code: 'BOSE20',
        discount_percentage: 20,
        max_discount: 250,
        min_order_value: 150,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'LOGITECH20' },
      defaults: {
        code: 'LOGITECH20',
        discount_percentage: 20,
        max_discount: 200,
        min_order_value: 100,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'DYSON20' },
      defaults: {
        code: 'DYSON20',
        discount_percentage: 20,
        max_discount: 300,
        min_order_value: 200,
        is_active: true
      }
    });

    await Coupon.findOrCreate({
      where: { code: 'ROLEX10' },
      defaults: {
        code: 'ROLEX10',
        discount_percentage: 10,
        max_discount: 2500,
        min_order_value: 5000,
        is_active: true
      }
    });

    console.log('✅ ShopEase database seeded successfully with 10 commercial categories, rich products, and variants!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
};

if (process.argv[2] === '--run') {
  seedDatabase(false).then(() => process.exit());
}
