import { Category, Product, ProductVariant } from '../models/index.js';
import { initDatabase } from '../config/db.js';

export const seedSamsungStationery = async () => {
  try {
    await initDatabase();

    // 1. Get Books & Stationery Category
    let [category] = await Category.findOrCreate({
      where: { slug: 'books-stationery' },
      defaults: {
        name: 'Books & Stationery',
        slug: 'books-stationery',
        description: 'Bestselling books, digital note-taking tablets, S Pens, and stationery essentials',
        image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
        item_count: 14
      }
    });

    // 2. Define Samsung Digital Stationery & Reading Products
    const samsungItems = [
      {
        name: 'Samsung Galaxy Tab S9 Ultra (with S Pen Included)',
        slug: 'samsung-galaxy-tab-s9-ultra-spen',
        description: 'The ultimate digital note-taking, textbook reader, and PDF annotator. Features a massive 14.6" Dynamic AMOLED 2X 120Hz screen, IP68 water/dust resistance, paper-feel S Pen with 2.8ms ultra-low latency, and Samsung Notes with audio sync.',
        price: 1199.99,
        discount_price: 1049.99,
        stock: 30,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 240,
        is_featured: true,
        is_trending: true,
        specifications: {
          Brand: 'Samsung Electronics',
          Display: '14.6" Dynamic AMOLED 2X (120Hz, Anti-Glare)',
          IncludedStylus: 'Samsung S Pen (0.7mm fine nib, 4096 pressure levels)',
          NoteTakingSoftware: 'Samsung Notes, GoodNotes, Clip Studio Paint',
          Storage: '256GB / 512GB (Expandable up to 1TB via MicroSD)'
        },
        variants: [
          {
            name: 'Graphite / 256GB (with S Pen)',
            sku: 'SAM-TABS9U-GRP-256',
            price: 1199.99,
            discount_price: 1049.99,
            stock: 20,
            attributes: { color: 'Graphite', storage: '256GB' },
            image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Beige / 512GB (with S Pen)',
            sku: 'SAM-TABS9U-BGE-512',
            price: 1319.99,
            discount_price: 1169.99,
            stock: 10,
            attributes: { color: 'Beige', storage: '512GB' },
            image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Samsung S Pen Pro Bluetooth Stylus',
        slug: 'samsung-s-pen-pro-stylus',
        description: 'Seamless cross-device note-taking across Galaxy phones, tablets, and PCs. Features Bluetooth Air Actions, Smart Select, clipboard syncing, and 16-day rechargeable battery life via USB-C.',
        price: 99.99,
        discount_price: 79.99,
        stock: 50,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 135,
        is_featured: true,
        is_trending: false,
        specifications: {
          Brand: 'Samsung Electronics',
          NibSize: '1.5mm Fine Tip with 4096 pressure levels',
          Connectivity: 'Bluetooth Low Energy (BLE)',
          BatteryLife: 'Up to 16 Days (50 min USB-C quick charge)',
          Compatibility: 'Galaxy Tab, Galaxy Book, Galaxy S Ultra Series'
        },
        variants: [
          {
            name: 'Black Matte',
            sku: 'SAM-SPEN-PRO-BLK',
            price: 99.99,
            discount_price: 79.99,
            stock: 50,
            attributes: { color: 'Black Matte' },
            image_url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Samsung S Pen Creator Edition (Ergonomic Digital Pen)',
        slug: 'samsung-s-pen-creator-edition',
        description: 'Designed for artists, students, and writers. Features an ergonomic thicker grip, enhanced tilt sensitivity, interchangeable nibs for authentic paper-like writing, and magnetic snap-on attachment.',
        price: 109.99,
        discount_price: 89.99,
        stock: 40,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1585336261026-7f05041ff34e?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1585336261026-7f05041ff34e?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 92,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Samsung Electronics',
          Design: 'Ergonomic Hexagonal Grip (No battery/charging needed)',
          TiltAngle: 'Enhanced 60-degree tilt detection',
          NibOptions: '2 Extra Fine Nibs + Replacement Tool Included',
          WaterResistance: 'IPX4 Splash Resistant'
        },
        variants: [
          {
            name: 'White Edition',
            sku: 'SAM-SPEN-CRT-WHT',
            price: 109.99,
            discount_price: 89.99,
            stock: 40,
            attributes: { color: 'White' },
            image_url: 'https://images.unsplash.com/photo-1585336261026-7f05041ff34e?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Samsung NotePaper Screen Protector for Galaxy Tab',
        slug: 'samsung-notepaper-screen-protector',
        description: 'Transform your Samsung Galaxy Tab into real textured paper. Delivers the friction and tactile feel of pen-on-paper writing with matte anti-glare finish for outdoor reading and journaling.',
        price: 49.99,
        discount_price: 39.99,
        stock: 65,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 78,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Samsung Official Accessory',
          Material: 'Micro-textured Matte Paper Film',
          Installation: 'Magnetic Snap-On (Detachable and Washable)',
          AntiGlare: 'Eliminates 95% surface reflections'
        },
        variants: [
          {
            name: 'For Galaxy Tab S9 Ultra (14.6")',
            sku: 'SAM-NOTEPPR-S9U',
            price: 54.99,
            discount_price: 44.99,
            stock: 35,
            attributes: { size: '14.6 inch' },
            image_url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'For Galaxy Tab S9+ (12.4")',
            sku: 'SAM-NOTEPPR-S9P',
            price: 49.99,
            discount_price: 39.99,
            stock: 30,
            attributes: { size: '12.4 inch' },
            image_url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ];

    for (const item of samsungItems) {
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

    const totalBooksCount = await Product.count({ where: { category_id: category.id } });
    await category.update({ item_count: totalBooksCount });

    console.log(`📱 Successfully added ${samsungItems.length} Samsung Digital Note-Taking & Stationery items (Galaxy Tab S9 Ultra, S Pen Pro, S Pen Creator Edition, NotePaper Screen)!`);
  } catch (error) {
    console.error('Error seeding Samsung stationery items:', error);
  }
};

seedSamsungStationery().then(() => process.exit(0));
