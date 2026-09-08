import { Category, Product, ProductVariant } from '../models/index.js';
import { initDatabase } from '../config/db.js';

export const seedMassiveSamsung = async () => {
  try {
    await initDatabase();

    // 1. Fetch Categories
    const [booksCategory] = await Category.findOrCreate({
      where: { slug: 'books-stationery' },
      defaults: {
        name: 'Books & Stationery',
        slug: 'books-stationery',
        description: 'Bestselling books, digital note-taking tablets, S Pens, and stationery essentials',
        image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
        item_count: 18
      }
    });

    const [electronicsCategory] = await Category.findOrCreate({
      where: { slug: 'electronics' },
      defaults: {
        name: 'Electronics',
        slug: 'electronics',
        description: 'Flagship laptops, smartphones, noise-cancelling audio, consoles, and smart accessories',
        image_url: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80',
        item_count: 20
      }
    });

    // 2. Comprehensive Samsung Products Catalog
    const massiveSamsungProducts = [
      // --- BOOKS & STATIONERY / DIGITAL NOTE-TAKING & E-READING ---
      {
        name: 'Samsung Galaxy Book4 Pro 360 (2-in-1 Laptop with S Pen)',
        slug: 'samsung-galaxy-book4-pro-360-laptop',
        description: 'The ultimate 2-in-1 touchscreen laptop designed for digital sketching, textbook annotating, and multitasking. Features 16" Dynamic AMOLED 2X touchscreen (120Hz), Intel Core Ultra 7 processor with AI Boost, and bundled responsive S Pen.',
        price: 1899.99,
        discount_price: 1649.99,
        stock: 20,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 145,
        is_featured: true,
        is_trending: true,
        specifications: {
          Brand: 'Samsung Electronics',
          Processor: 'Intel Core Ultra 7 155H (Intel AI Boost)',
          Display: '16-inch 3K Dynamic AMOLED 2X Touchscreen (120Hz)',
          RAM_Storage: '16GB LPDDR5X / 1TB NVMe SSD',
          Stylus: 'Samsung S Pen Included with 4096 pressure levels'
        },
        variants: [
          {
            name: 'Moonstone Gray / 1TB SSD',
            sku: 'SAM-GB4P-GRY-1TB',
            price: 1899.99,
            discount_price: 1649.99,
            stock: 12,
            attributes: { color: 'Moonstone Gray', storage: '1TB' },
            image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Platinum Silver / 512GB SSD',
            sku: 'SAM-GB4P-SLV-512',
            price: 1699.99,
            discount_price: 1479.99,
            stock: 8,
            attributes: { color: 'Platinum Silver', storage: '512GB' },
            image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Samsung Galaxy Tab S9 FE+ (12.4" Display with S Pen)',
        slug: 'samsung-galaxy-tab-s9-fe-plus',
        description: 'Engineered for students and creators. Expansive 12.4" 90Hz display with Vision Booster, water and dust-resistant IP68 build, included precision S Pen, and all-day 10,090 mAh battery for non-stop lecture note-taking and reading.',
        price: 599.99,
        discount_price: 499.99,
        stock: 45,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 190,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Samsung Electronics',
          Screen: '12.4" WQXGA Display (90Hz Refresh Rate)',
          Durability: 'IP68 Water & Dust Resistant (Tablet + S Pen)',
          Battery: '10,090 mAh (Up to 20h video playback, 45W fast charge)',
          NoteFeatures: 'Pre-loaded GoodNotes, Samsung Notes with PDF conversion'
        },
        variants: [
          {
            name: 'Gray / 128GB (WiFi)',
            sku: 'SAM-TABS9FE-GRY-128',
            price: 599.99,
            discount_price: 499.99,
            stock: 25,
            attributes: { color: 'Gray', storage: '128GB' },
            image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Mint / 256GB (WiFi)',
            sku: 'SAM-TABS9FE-MNT-256',
            price: 699.99,
            discount_price: 589.99,
            stock: 20,
            attributes: { color: 'Mint', storage: '256GB' },
            image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Samsung Galaxy Tab A9+ (11" 90Hz Reading & Study Tablet)',
        slug: 'samsung-galaxy-tab-a9-plus',
        description: 'Sleek and versatile 11-inch Android tablet featuring quad speakers powered by Dolby Atmos, 90Hz smooth scrolling for eBooks, multi-window split-screen for studying, and expandable storage.',
        price: 269.99,
        discount_price: 219.99,
        stock: 60,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 160,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Samsung Electronics',
          Screen: '11.0" WQXGA (90Hz Smooth Display)',
          Audio: 'Quad Speakers with Dolby Atmos 3D Audio',
          Processor: 'Snapdragon 695 5G Octa-core',
          Storage: '64GB / 128GB (MicroSD expand up to 1TB)'
        },
        variants: [
          {
            name: 'Graphite / 64GB',
            sku: 'SAM-TABA9P-GRY-64',
            price: 269.99,
            discount_price: 219.99,
            stock: 35,
            attributes: { color: 'Graphite', storage: '64GB' },
            image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Silver / 128GB',
            sku: 'SAM-TABA9P-SLV-128',
            price: 319.99,
            discount_price: 269.99,
            stock: 25,
            attributes: { color: 'Silver', storage: '128GB' },
            image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Samsung T7 Shield 2TB Rugged Portable SSD',
        slug: 'samsung-t7-shield-2tb-portable-ssd',
        description: 'Superfast, durable external solid-state drive built for backing up entire eBook libraries, research papers, digital journals, and 4K footage. IP65 water, dust, and 3-meter drop resistant with 1050MB/s speeds.',
        price: 199.99,
        discount_price: 159.99,
        stock: 55,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 215,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Samsung Memory',
          ReadSpeed: 'Up to 1,050 MB/s (USB 3.2 Gen 2)',
          Durability: 'IP65 Water/Dust Resistant + Drop-resistant up to 9.8 ft',
          Security: 'Password Protection with AES 256-bit Hardware Encryption',
          Compatibility: 'Windows, Mac, Android, iPad, Gaming Consoles'
        },
        variants: [
          {
            name: 'Black / 2TB',
            sku: 'SAM-T7SH-BLK-2TB',
            price: 199.99,
            discount_price: 159.99,
            stock: 30,
            attributes: { color: 'Black', capacity: '2TB' },
            image_url: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Blue / 2TB',
            sku: 'SAM-T7SH-BLU-2TB',
            price: 199.99,
            discount_price: 159.99,
            stock: 25,
            attributes: { color: 'Blue', capacity: '2TB' },
            image_url: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },

      // --- ELECTRONICS CATEGORY FLAGSHIPS ---
      {
        name: 'Samsung Galaxy Z Fold5 (5G Foldable Phone)',
        slug: 'samsung-galaxy-z-fold5-5g',
        description: 'Unfold an immersive 7.6" Dynamic AMOLED 2X tablet-class screen in your pocket. Features Flex Hinge design, Snapdragon 8 Gen 2 for Galaxy, Taskbar multitasking, S Pen Fold Edition compatibility, and 50MP pro camera.',
        price: 1799.99,
        discount_price: 1599.99,
        stock: 25,
        category_id: electronicsCategory.id,
        image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 280,
        is_featured: true,
        is_trending: true,
        specifications: {
          Brand: 'Samsung Electronics',
          MainScreen: '7.6" QXGA+ Dynamic AMOLED 2X (120Hz Adaptive)',
          CoverScreen: '6.2" HD+ Dynamic AMOLED 2X (120Hz)',
          WaterResistance: 'IPX8 Water Resistant',
          Camera: '50MP Wide + 10MP 3x Telephoto + 12MP Ultra-Wide'
        },
        variants: [
          {
            name: 'Phantom Black / 512GB',
            sku: 'SAM-ZF5-BLK-512',
            price: 1799.99,
            discount_price: 1599.99,
            stock: 15,
            attributes: { color: 'Phantom Black', storage: '512GB' },
            image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Icy Blue / 256GB',
            sku: 'SAM-ZF5-BLU-256',
            price: 1699.99,
            discount_price: 1499.99,
            stock: 10,
            attributes: { color: 'Icy Blue', storage: '256GB' },
            image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Samsung Galaxy Z Flip5 (5G Pocket Foldable)',
        slug: 'samsung-galaxy-z-flip5-5g',
        description: 'Compact pocket-sized flip phone with 3.4" Flex Window cover screen allowing you to reply to texts, make calls, take hands-free FlexCam selfies, and check widgets without unfolding.',
        price: 999.99,
        discount_price: 849.99,
        stock: 35,
        category_id: electronicsCategory.id,
        image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 230,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Samsung Electronics',
          CoverDisplay: '3.4" Super AMOLED 60Hz Flex Window',
          MainDisplay: '6.7" FHD+ Dynamic AMOLED 2X 120Hz',
          Processor: 'Snapdragon 8 Gen 2 for Galaxy',
          Durability: 'Armor Aluminum Frame + IPX8 Water Resistant'
        },
        variants: [
          {
            name: 'Mint / 256GB',
            sku: 'SAM-ZFL5-MNT-256',
            price: 999.99,
            discount_price: 849.99,
            stock: 20,
            attributes: { color: 'Mint', storage: '256GB' },
            image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Lavender / 256GB',
            sku: 'SAM-ZFL5-LAV-256',
            price: 999.99,
            discount_price: 849.99,
            stock: 15,
            attributes: { color: 'Lavender', storage: '256GB' },
            image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Samsung Galaxy Watch6 Classic (Rotating Bezel Smartwatch)',
        slug: 'samsung-galaxy-watch6-classic',
        description: 'Timeless luxury meets advanced health monitoring. Iconic physical rotating bezel, sapphire crystal glass, personalized sleep coaching, ECG heart monitoring, and body composition analysis.',
        price: 399.99,
        discount_price: 339.99,
        stock: 40,
        category_id: electronicsCategory.id,
        image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 175,
        is_featured: true,
        is_trending: true,
        specifications: {
          Brand: 'Samsung Electronics',
          Bezel: 'Physical Precision Rotating Bezel',
          Sensors: 'BioActive Sensor (Optical Heart Rate, Electrical Heart ECG, BIA Body Comp)',
          Glass: 'Sapphire Crystal Glass',
          Waterproof: '5ATM + IP68 Water & Dust Resistant'
        },
        variants: [
          {
            name: '47mm Black Stainless Steel',
            sku: 'SAM-W6C-47-BLK',
            price: 429.99,
            discount_price: 369.99,
            stock: 20,
            attributes: { size: '47mm', color: 'Black' },
            image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: '43mm Silver Stainless Steel',
            sku: 'SAM-W6C-43-SLV',
            price: 399.99,
            discount_price: 339.99,
            stock: 20,
            attributes: { size: '43mm', color: 'Silver' },
            image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Samsung Galaxy Buds2 Pro (24-bit Hi-Fi ANC Earbuds)',
        slug: 'samsung-galaxy-buds2-pro',
        description: 'Studio-quality listening with 24-bit Hi-Fi sound, Intelligent Active Noise Cancellation with 3 high-SNR microphones, 360 Audio with Direct Multi-channel support, and ergonomic compact fit.',
        price: 229.99,
        discount_price: 179.99,
        stock: 55,
        category_id: electronicsCategory.id,
        image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 195,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Samsung Electronics / AKG Sound',
          SoundTechnology: '24-bit Hi-Fi Seamless Codec + 360 Audio',
          ANC: 'Intelligent Active Noise Cancelling + Voice Detect',
          Waterproof: 'IPX7 Water Resistance',
          BatteryLife: 'Up to 29 Hours with Wireless Charging Case'
        },
        variants: [
          {
            name: 'Graphite Black',
            sku: 'SAM-BUDS2P-GRP',
            price: 229.99,
            discount_price: 179.99,
            stock: 30,
            attributes: { color: 'Graphite' },
            image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Bora Purple',
            sku: 'SAM-BUDS2P-PUR',
            price: 229.99,
            discount_price: 179.99,
            stock: 25,
            attributes: { color: 'Bora Purple' },
            image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Samsung Odyssey OLED G9 49" Curved Gaming Monitor',
        slug: 'samsung-odyssey-oled-g9-curved-monitor',
        description: 'Immerse in a dual QHD panoramic battlefield. 49-inch 1800R curved QD-OLED display, blazing 240Hz refresh rate, 0.03ms response time, Neo Quantum Processor Pro, and built-in Gaming Hub.',
        price: 1799.99,
        discount_price: 1499.99,
        stock: 12,
        category_id: electronicsCategory.id,
        image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 88,
        is_featured: true,
        is_trending: false,
        specifications: {
          Brand: 'Samsung Odyssey',
          Resolution: 'Dual QHD (5120 x 1440, 32:9 Aspect Ratio)',
          Panel: 'Quantum Dot OLED (1800R Curvature)',
          Speed: '240Hz Refresh Rate, 0.03ms (GtG) Response Time',
          Features: 'AMD FreeSync Premium Pro, DisplayHDR True Black 400'
        },
        variants: [
          {
            name: '49" OLED Curved Silver Chassis',
            sku: 'SAM-ODYS-G9-OLED',
            price: 1799.99,
            discount_price: 1499.99,
            stock: 12,
            attributes: { size: '49 inch', panel: 'QD-OLED' },
            image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Samsung Galaxy SmartTag2 (Bluetooth Tracker 4-Pack)',
        slug: 'samsung-galaxy-smarttag2-4pack',
        description: 'Never lose your keys, luggage, backpack, or pets. Features redesigned ring design with IP67 water/dust resistance, Compass View navigation with AR, and up to 500 days of battery life.',
        price: 99.99,
        discount_price: 79.99,
        stock: 80,
        category_id: electronicsCategory.id,
        image_url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 140,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Samsung Electronics',
          PackSize: 'Pack of 4 SmartTags (2 Black + 2 White)',
          BatteryLife: 'Up to 500 Days (700 Days in Power Saving Mode)',
          Navigation: 'Ultra-Wideband (UWB) + BLE + Compass View AR',
          Rating: 'IP67 Water and Dust Resistance'
        },
        variants: [
          {
            name: '4-Pack (2 Black, 2 White)',
            sku: 'SAM-SMTAG2-4PK',
            price: 99.99,
            discount_price: 79.99,
            stock: 80,
            attributes: { pack: '4-Pack' },
            image_url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ];

    for (const item of massiveSamsungProducts) {
      const { variants, ...prodFields } = item;

      let [product, created] = await Product.findOrCreate({
        where: { slug: prodFields.slug },
        defaults: prodFields
      });

      if (!created) {
        await product.update(prodFields);
      }

      if (variants && variants.length > 0) {
        for (const v of variants) {
          await ProductVariant.findOrCreate({
            where: { sku: v.sku },
            defaults: {
              ...v,
              product_id: product.id
            }
          });
        }
      }
    }

    // Update Counts
    const booksCount = await Product.count({ where: { category_id: booksCategory.id } });
    await booksCategory.update({ item_count: booksCount });

    const elecCount = await Product.count({ where: { category_id: electronicsCategory.id } });
    await electronicsCategory.update({ item_count: elecCount });

    console.log(`🚀 Successfully seeded ${massiveSamsungProducts.length} Premium Samsung Products across Books & Stationery and Electronics!`);
  } catch (error) {
    console.error('Error seeding massive Samsung products:', error);
  }
};

seedMassiveSamsung().then(() => process.exit(0));
