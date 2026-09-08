import { Category, Product, ProductVariant } from '../models/index.js';
import { initDatabase } from '../config/db.js';

export const seedElectronics = async () => {
  try {
    await initDatabase();

    // 1. Ensure Electronics Category exists
    let [category] = await Category.findOrCreate({
      where: { slug: 'electronics' },
      defaults: {
        name: 'Electronics',
        slug: 'electronics',
        description: 'Flagship laptops, smartphones, noise-cancelling audio, consoles, and smart accessories',
        image_url: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80',
        item_count: 12
      }
    });

    // 2. Define Electronics Catalog
    const electronicsList = [
      {
        name: 'Apple MacBook Pro 16" (M3 Max Chip)',
        slug: 'apple-macbook-pro-16-m3-max',
        description: 'The ultimate pro laptop. Powered by M3 Max chip with 16-core CPU and 40-core GPU, Liquid Retina XDR display with 1600 nits peak brightness, up to 22 hours of battery life, and spatial audio 6-speaker system.',
        price: 3499.00,
        discount_price: 3199.00,
        stock: 25,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 185,
        is_featured: true,
        is_trending: true,
        specifications: {
          Brand: 'Apple Inc.',
          Processor: 'Apple M3 Max (16-Core CPU, 40-Core GPU)',
          Memory: '36GB Unified Memory',
          Display: '16.2-inch Liquid Retina XDR (120Hz ProMotion)',
          Battery: 'Up to 22 Hours Web/Video Playback'
        },
        variants: [
          {
            name: 'Space Black / 1TB SSD',
            sku: 'MBP-16-BLK-1TB',
            price: 3499.00,
            discount_price: 3199.00,
            stock: 15,
            attributes: { color: 'Space Black', storage: '1TB SSD' },
            image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Silver / 2TB SSD',
            sku: 'MBP-16-SLV-2TB',
            price: 3899.00,
            discount_price: 3599.00,
            stock: 10,
            attributes: { color: 'Silver', storage: '2TB SSD' },
            image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
        slug: 'sony-wh-1000xm5-wireless-headphones',
        description: 'Industry-leading noise cancellation powered by two processors and 8 microphones. Magnificent Hi-Res sound with newly developed 30mm driver, crystal-clear hands-free calling, and 30-hour battery life with quick charging.',
        price: 399.99,
        discount_price: 329.99,
        stock: 55,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 320,
        is_featured: true,
        is_trending: true,
        specifications: {
          Brand: 'Sony Electronics',
          ANC: 'HD Noise Cancelling Processor QN1',
          BatteryLife: '30 Hours (3 min charge = 3 hours playback)',
          Codecs: 'LDAC, AAC, SBC, Hi-Res Audio Wireless',
          Weight: '250 grams'
        },
        variants: [
          {
            name: 'Midnight Black',
            sku: 'SONY-XM5-BLK',
            price: 399.99,
            discount_price: 329.99,
            stock: 35,
            attributes: { color: 'Black' },
            image_url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Platinum Silver',
            sku: 'SONY-XM5-SLV',
            price: 399.99,
            discount_price: 329.99,
            stock: 20,
            attributes: { color: 'Silver' },
            image_url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Apple iPhone 15 Pro Max (5G)',
        slug: 'apple-iphone-15-pro-max',
        description: 'Forged in aerospace-grade titanium with the groundbreaking A17 Pro chip, customizable Action button, 48MP main camera with 5x optical telephoto zoom, and USB-C with USB 3 speeds.',
        price: 1199.00,
        discount_price: 1099.00,
        stock: 40,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 450,
        is_featured: true,
        is_trending: true,
        specifications: {
          Brand: 'Apple Inc.',
          Display: '6.7-inch Super Retina XDR OLED (120Hz ProMotion)',
          Chipset: 'A17 Pro Chip (6-Core CPU, 6-Core GPU)',
          Camera: '48MP Main + 12MP Ultra-Wide + 12MP 5x Telephoto',
          Chassis: 'Aerospace Grade Grade 5 Titanium'
        },
        variants: [
          {
            name: 'Natural Titanium / 256GB',
            sku: 'IPH-15PM-NAT-256',
            price: 1199.00,
            discount_price: 1099.00,
            stock: 25,
            attributes: { color: 'Natural Titanium', storage: '256GB' },
            image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Blue Titanium / 512GB',
            sku: 'IPH-15PM-BLU-512',
            price: 1399.00,
            discount_price: 1299.00,
            stock: 15,
            attributes: { color: 'Blue Titanium', storage: '512GB' },
            image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Samsung Galaxy S24 Ultra 5G with Galaxy AI',
        slug: 'samsung-galaxy-s24-ultra-5g',
        description: 'Meet Galaxy S24 Ultra with Titanium frame, built-in S Pen, 200MP camera system with Nightography Zoom, Snapdragon 8 Gen 3 for Galaxy, and revolutionary Galaxy AI features like Circle to Search and Live Translate.',
        price: 1299.99,
        discount_price: 1149.99,
        stock: 35,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 290,
        is_featured: true,
        is_trending: true,
        specifications: {
          Brand: 'Samsung Electronics',
          Display: '6.8-inch Dynamic AMOLED 2X QHD+ (2600 nits peak)',
          Processor: 'Snapdragon 8 Gen 3 Mobile Platform for Galaxy',
          Camera: '200MP Wide + 50MP 5x Telephoto + 10MP 3x + 12MP Ultra',
          Battery: '5000 mAh with 45W Fast Charging'
        },
        variants: [
          {
            name: 'Titanium Gray / 256GB',
            sku: 'S24U-GRY-256',
            price: 1299.99,
            discount_price: 1149.99,
            stock: 20,
            attributes: { color: 'Titanium Gray', storage: '256GB' },
            image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Titanium Violet / 512GB',
            sku: 'S24U-VIO-512',
            price: 1419.99,
            discount_price: 1279.99,
            stock: 15,
            attributes: { color: 'Titanium Violet', storage: '512GB' },
            image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Sony PlayStation 5 Slim Gaming Console',
        slug: 'sony-playstation-5-slim-console',
        description: 'Experience lightning-fast loading with an ultra-high speed 1TB SSD, deeper immersion with haptic feedback, adaptive triggers, 3D Audio, and an all-new generation of incredible PlayStation games.',
        price: 499.99,
        discount_price: 449.99,
        stock: 30,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 510,
        is_featured: true,
        is_trending: true,
        specifications: {
          Brand: 'Sony Interactive Entertainment',
          Storage: '1TB Custom High-Speed NVMe SSD',
          Graphics: 'AMD Radeon RDNA 2-based graphics (Ray Tracing)',
          VideoOut: 'Supports 4K 120Hz TVs, 8K TVs, VRR',
          Controller: 'DualSense Wireless Controller Included'
        },
        variants: [
          {
            name: 'PS5 Slim Disc Edition (with Ultra HD Blu-ray)',
            sku: 'PS5-SLIM-DISC',
            price: 499.99,
            discount_price: 449.99,
            stock: 20,
            attributes: { model: 'Disc Edition' },
            image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'PS5 Slim Digital Edition',
            sku: 'PS5-SLIM-DIG',
            price: 449.99,
            discount_price: 399.99,
            stock: 10,
            attributes: { model: 'Digital Edition' },
            image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Logitech MX Master 3S Wireless Performance Mouse',
        slug: 'logitech-mx-master-3s-mouse',
        description: 'An icon remastered. Quiet Clicks and 8,000 DPI track-on-glass sensor. Electromagnetic MagSpeed scrolling is 90% faster, 87% more precise, and ultra-quiet with ergonomic thumb rest.',
        price: 99.99,
        discount_price: 84.99,
        stock: 65,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 210,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Logitech',
          Sensor: 'Darkfield High Precision 8000 DPI',
          Connectivity: 'Bluetooth Low Energy + Logi Bolt USB Receiver',
          Battery: 'Rechargeable Li-Po (70 days per full charge)'
        },
        variants: [
          {
            name: 'Graphite Black',
            sku: 'LOGI-MX3S-GRP',
            price: 99.99,
            discount_price: 84.99,
            stock: 40,
            attributes: { color: 'Graphite' },
            image_url: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Pale Gray / White',
            sku: 'LOGI-MX3S-GRY',
            price: 99.99,
            discount_price: 84.99,
            stock: 25,
            attributes: { color: 'Pale Gray' },
            image_url: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Bose QuietComfort Ultra Wireless Earbuds',
        slug: 'bose-quietcomfort-ultra-earbuds',
        description: 'World-class noise cancellation, groundbreaking spatialized audio for more immersive listening, CustomTune technology that customizes sound to your ears, and IPX4 sweat resistance.',
        price: 299.00,
        discount_price: 249.00,
        stock: 50,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 140,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Bose',
          AudioFeature: 'Bose Immersive Audio Spatial Sound',
          Battery: 'Up to 24 Hours with USB-C Charging Case',
          Waterproof: 'IPX4 Splash & Sweat Resistant'
        },
        variants: [
          {
            name: 'Black',
            sku: 'BOSE-QC-BLK',
            price: 299.00,
            discount_price: 249.00,
            stock: 30,
            attributes: { color: 'Black' },
            image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'White Smoke',
            sku: 'BOSE-QC-WHT',
            price: 299.00,
            discount_price: 249.00,
            stock: 20,
            attributes: { color: 'White Smoke' },
            image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Anker 737 Power Bank (PowerCore 24K 140W)',
        slug: 'anker-737-power-bank-24k-140w',
        description: 'Equipped with the latest Power Delivery 3.1 and bi-directional technology to quickly recharge the portable charger or get a 140W ultra-powerful charge for MacBook, iPhone, and tablets.',
        price: 149.99,
        discount_price: 109.99,
        stock: 70,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 175,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Anker Innovations',
          Capacity: '24,000 mAh (Charges iPhone 15 ~5 times)',
          MaxOutput: '140W High-Speed USB-C Power Delivery',
          SmartDisplay: 'Real-time Digital Output & Battery Health Display'
        },
        variants: [
          {
            name: 'Anker 737 140W Power Bank',
            sku: 'ANK-737-24K',
            price: 149.99,
            discount_price: 109.99,
            stock: 70,
            attributes: { capacity: '24,000 mAh' },
            image_url: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ];

    for (const item of electronicsList) {
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

    const totalElecCount = await Product.count({ where: { category_id: category.id } });
    await category.update({ item_count: totalElecCount });

    console.log(`⚡ Successfully added ${electronicsList.length} Flagship Electronics items (MacBook Pro M3 Max, Sony XM5, iPhone 15 Pro Max, Galaxy S24 Ultra, PS5 Slim, Logitech MX Master 3S, Bose QC Ultra, Anker 737)!`);
  } catch (error) {
    console.error('Error seeding electronics:', error);
  }
};

seedElectronics().then(() => process.exit(0));
