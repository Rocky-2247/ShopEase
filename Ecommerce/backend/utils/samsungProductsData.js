// Comprehensive dataset of 115+ Official Samsung Devices (Smartphones, Laptops, Foldables, Tablets, Wearables)

const createVariantList = (baseList) => {
  const result = [];
  for (const item of baseList) {
    result.push(item);
  }
  return result;
};

export const getSamsungProducts = (categoryId) => {
  const mobileModels = [
    // --- S24 Ultra Series (8 SKUs) ---
    {
      name: 'Samsung Galaxy S24 Ultra 5G (512GB Titanium Gray, 12GB RAM)',
      slug: 'samsung-galaxy-s24-ultra-512gb-gray',
      description: 'Flagship AI smartphone with Titanium chassis, built-in S Pen, 200MP Quad Telephoto camera with 100x Space Zoom, Galaxy AI Live Translate, and Snapdragon 8 Gen 3 for Galaxy.',
      price: 1379.99, discount_price: 1199.99, stock: 35, rating: 4.9, num_reviews: 215, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24', Display: '6.8" QHD+ Dynamic AMOLED 2X 120Hz', Processor: 'Snapdragon 8 Gen 3 for Galaxy', RAM: '12GB', Storage: '512GB UFS 4.0', Camera: '200MP + 50MP + 12MP + 10MP', Battery: '5000mAh 45W' }
    },
    {
      name: 'Samsung Galaxy S24 Ultra 5G (1TB Titanium Black, 12GB RAM)',
      slug: 'samsung-galaxy-s24-ultra-1tb-black',
      description: 'Ultimate power user flagship with 1TB high-speed storage, titanium armor frame, anti-reflective Corning Gorilla Armor glass, and pro-grade Circle to Search AI.',
      price: 1659.99, discount_price: 1499.99, stock: 20, rating: 4.9, num_reviews: 142, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24', Display: '6.8" 120Hz Dynamic AMOLED 2600 nits', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '1TB', Camera: '200MP Quad Camera', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy S24 Ultra 5G (256GB Titanium Violet, 12GB RAM)',
      slug: 'samsung-galaxy-s24-ultra-256gb-violet',
      description: 'Stunning Titanium Violet finish with titanium satin sides, Galaxy AI Photo Assist, generative edit, and 5x optical zoom 50MP sensor.',
      price: 1299.99, discount_price: 1129.99, stock: 40, rating: 4.9, num_reviews: 98, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24', Display: '6.8" QHD+ 120Hz', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '256GB', Camera: '200MP OIS', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy S24 Ultra 5G (512GB Titanium Yellow, 12GB RAM)',
      slug: 'samsung-galaxy-s24-ultra-512gb-yellow',
      description: 'Vibrant Titanium Yellow flagship smartphone with 512GB storage, ray tracing graphics engine, S Pen stylus, and 7 years of Android OS updates.',
      price: 1379.99, discount_price: 1199.99, stock: 25, rating: 4.8, num_reviews: 74, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24', Display: '6.8" Dynamic AMOLED 2X', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '512GB', Camera: '200MP AI Telephoto', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy S24 Ultra 5G (256GB Titanium Black, 12GB RAM)',
      slug: 'samsung-galaxy-s24-ultra-256gb-black',
      description: 'Stealth Titanium Black finish with 256GB storage, pro visual engine, AI super HDR camera, and optical quality zoom.',
      price: 1299.99, discount_price: 1129.99, stock: 45, rating: 4.9, num_reviews: 138, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24', Display: '6.8" QHD+ 120Hz', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '256GB', Camera: '200MP + 50MP + 12MP + 10MP', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy S24 Ultra 5G (512GB Titanium Blue Exclusive, 12GB RAM)',
      slug: 'samsung-galaxy-s24-ultra-512gb-blue',
      description: 'Online exclusive Titanium Blue edition with contrasting jet-black titanium frame, 512GB storage, and Galaxy AI transcript assist.',
      price: 1399.99, discount_price: 1229.99, stock: 18, rating: 4.9, num_reviews: 82, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24', Display: '6.8" Dynamic AMOLED 2X', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '512GB', Camera: '200MP OIS', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy S24 Ultra 5G (512GB Titanium Green Exclusive, 12GB RAM)',
      slug: 'samsung-galaxy-s24-ultra-512gb-green',
      description: 'Exclusive Titanium Green tone with 512GB storage, generative photo editing, 4K 120fps video recording, and S Pen gestures.',
      price: 1399.99, discount_price: 1229.99, stock: 20, rating: 4.9, num_reviews: 65, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24', Display: '6.8" QHD+ 120Hz', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '512GB', Camera: '200MP Quad Camera', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy S24 Ultra 5G (1TB Titanium Gray, 12GB RAM)',
      slug: 'samsung-galaxy-s24-ultra-1tb-gray',
      description: 'Maximum capacity 1TB Titanium Gray edition for mobile creators and videographers with 8K video capture and instant slow-mo.',
      price: 1659.99, discount_price: 1499.99, stock: 15, rating: 4.9, num_reviews: 91, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24', Display: '6.8" QHD+ AMOLED 2X', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '1TB', Camera: '200MP Quad OIS', Battery: '5000mAh' }
    },

    // --- S24+ & S24 Series (8 SKUs) ---
    {
      name: 'Samsung Galaxy S24+ 5G (256GB Cobalt Violet, 12GB RAM)',
      slug: 'samsung-galaxy-s24-plus-256gb-violet',
      description: 'Expanded 6.7" QHD+ screen with uniform slim bezels, Armor Aluminum 2.0 frame, Galaxy AI note assist, and 4900mAh battery with 45W fast charging.',
      price: 999.99, discount_price: 849.99, stock: 45, rating: 4.8, num_reviews: 115, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24+', Display: '6.7" QHD+ AMOLED 2X 120Hz', Processor: 'Exynos 2400 / Snapdragon 8 Gen 3', RAM: '12GB', Storage: '256GB', Camera: '50MP + 12MP + 10MP', Battery: '4900mAh' }
    },
    {
      name: 'Samsung Galaxy S24+ 5G (512GB Onyx Black, 12GB RAM)',
      slug: 'samsung-galaxy-s24-plus-512gb-black',
      description: 'Sleek Onyx Black flagship plus edition with 512GB internal storage, pro-visual camera engine with Super HDR, and IP68 water resistance.',
      price: 1119.99, discount_price: 969.99, stock: 30, rating: 4.9, num_reviews: 86, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24+', Display: '6.7" QHD+ 120Hz', Processor: 'Exynos 2400', RAM: '12GB', Storage: '512GB', Camera: '50MP Dual Pixel OIS', Battery: '4900mAh' }
    },
    {
      name: 'Samsung Galaxy S24+ 5G (256GB Marble Gray, 12GB RAM)',
      slug: 'samsung-galaxy-s24-plus-256gb-gray',
      description: 'Refined Marble Gray matte back panel with satin aluminum frame, dual stereo speakers with Dolby Atmos, and 12GB multitasking RAM.',
      price: 999.99, discount_price: 849.99, stock: 40, rating: 4.8, num_reviews: 62, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24+', Display: '6.7" Dynamic AMOLED 2X', Processor: 'Exynos 2400', RAM: '12GB', Storage: '256GB', Camera: '50MP Triple Camera', Battery: '4900mAh' }
    },
    {
      name: 'Samsung Galaxy S24+ 5G (512GB Amber Yellow, 12GB RAM)',
      slug: 'samsung-galaxy-s24-plus-512gb-yellow',
      description: 'Warm Amber Yellow plus smartphone with 512GB storage, Live Translate calls, Circle to Search, and bright 2600 nits QHD+ AMOLED.',
      price: 1119.99, discount_price: 969.99, stock: 35, rating: 4.8, num_reviews: 54, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24+', Display: '6.7" QHD+ 120Hz', Processor: 'Exynos 2400', RAM: '12GB', Storage: '512GB', Camera: '50MP Triple OIS', Battery: '4900mAh' }
    },
    {
      name: 'Samsung Galaxy S24 5G (128GB Onyx Black, 8GB RAM)',
      slug: 'samsung-galaxy-s24-128gb-black',
      description: 'Compact 6.2" pocket powerhouse featuring full Galaxy AI suite, 2600 nits peak brightness display, 50MP triple cameras, and lightweight 167g design.',
      price: 799.99, discount_price: 699.99, stock: 55, rating: 4.8, num_reviews: 130, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24', Display: '6.2" FHD+ Dynamic AMOLED 2X 120Hz', Processor: 'Exynos 2400 Deca-Core', RAM: '8GB', Storage: '128GB', Camera: '50MP + 12MP + 10MP 3x Zoom', Battery: '4000mAh' }
    },
    {
      name: 'Samsung Galaxy S24 5G (256GB Amber Yellow, 8GB RAM)',
      slug: 'samsung-galaxy-s24-256gb-yellow',
      description: 'Sunny Amber Yellow compact flagship with 256GB UFS 4.0 storage, Live Translate phone calls, interpreter mode, and enhanced thermal cooling vapor chamber.',
      price: 859.99, discount_price: 749.99, stock: 45, rating: 4.8, num_reviews: 92, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24', Display: '6.2" Dynamic AMOLED 2X', Processor: 'Exynos 2400', RAM: '8GB', Storage: '256GB', Camera: '50MP OIS', Battery: '4000mAh' }
    },
    {
      name: 'Samsung Galaxy S24 5G (256GB Marble Gray, 8GB RAM)',
      slug: 'samsung-galaxy-s24-256gb-gray',
      description: 'Elegant Marble Gray compact smartphone with Gorilla Glass Victus 2, ultrasonic in-display fingerprint reader, and wireless power sharing.',
      price: 859.99, discount_price: 749.99, stock: 50, rating: 4.8, num_reviews: 80, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24', Display: '6.2" 120Hz AMOLED', Processor: 'Exynos 2400', RAM: '8GB', Storage: '256GB', Camera: '50MP Triple OIS', Battery: '4000mAh' }
    },
    {
      name: 'Samsung Galaxy S24 5G (256GB Cobalt Violet, 8GB RAM)',
      slug: 'samsung-galaxy-s24-256gb-violet',
      description: 'Subtle Cobalt Violet tone with 256GB storage, 50MP optical quality zoom, super fast wireless charging 2.0, and IP68 rating.',
      price: 859.99, discount_price: 749.99, stock: 40, rating: 4.8, num_reviews: 71, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24', Display: '6.2" 120Hz AMOLED', Processor: 'Exynos 2400', RAM: '8GB', Storage: '256GB', Camera: '50MP OIS', Battery: '4000mAh' }
    },

    // --- S24 FE & Previous S-Series (8 SKUs) ---
    {
      name: 'Samsung Galaxy S24 FE 5G (256GB Mint, 8GB RAM)',
      slug: 'samsung-galaxy-s24-fe-256gb-mint',
      description: 'Fan Edition flagship with 6.7" Dynamic AMOLED 2X, Exynos 2400e 4nm processor, ProVisual camera engine, and Galaxy AI generative photo editing.',
      price: 709.99, discount_price: 619.99, stock: 60, rating: 4.8, num_reviews: 104, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24 FE', Display: '6.7" FHD+ AMOLED 2X 120Hz', Processor: 'Exynos 2400e', RAM: '8GB', Storage: '256GB', Camera: '50MP + 12MP + 8MP 3x OIS', Battery: '4700mAh' }
    },
    {
      name: 'Samsung Galaxy S24 FE 5G (128GB Graphite, 8GB RAM)',
      slug: 'samsung-galaxy-s24-fe-128gb-graphite',
      description: 'Affordable flagship experience with durable IP68 aluminum casing, Galaxy AI Chat Assist, and all-day 4700mAh battery life.',
      price: 649.99, discount_price: 569.99, stock: 65, rating: 4.7, num_reviews: 88, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24 FE', Display: '6.7" 120Hz AMOLED', Processor: 'Exynos 2400e', RAM: '8GB', Storage: '128GB', Camera: '50MP OIS Camera', Battery: '4700mAh' }
    },
    {
      name: 'Samsung Galaxy S24 FE 5G (256GB Blue, 8GB RAM)',
      slug: 'samsung-galaxy-s24-fe-256gb-blue',
      description: 'Cool pastel Blue tone with 256GB storage, 6.7" edge-to-edge HDR10+ screen, and 7 generations of guaranteed Android upgrades.',
      price: 709.99, discount_price: 619.99, stock: 50, rating: 4.8, num_reviews: 58, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24 FE', Display: '6.7" Dynamic AMOLED', Processor: 'Exynos 2400e', RAM: '8GB', Storage: '256GB', Camera: '50MP Triple AI', Battery: '4700mAh' }
    },
    {
      name: 'Samsung Galaxy S24 FE 5G (256GB Yellow, 8GB RAM)',
      slug: 'samsung-galaxy-s24-fe-256gb-yellow',
      description: 'Vibrant Yellow edition with 256GB storage, 1900 nits high brightness display, 8K video recording, and Knox Matrix.',
      price: 709.99, discount_price: 619.99, stock: 45, rating: 4.8, num_reviews: 42, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S24 FE', Display: '6.7" 120Hz Dynamic AMOLED', Processor: 'Exynos 2400e', RAM: '8GB', Storage: '256GB', Camera: '50MP OIS', Battery: '4700mAh' }
    },
    {
      name: 'Samsung Galaxy S23 Ultra 5G (256GB Phantom Black, 12GB RAM)',
      slug: 'samsung-galaxy-s23-ultra-256gb-black',
      description: 'Iconic flagship with 200MP ISOCELL HP2 sensor, built-in S Pen, Snapdragon 8 Gen 2 for Galaxy, 100x Space Zoom, and 5000mAh battery.',
      price: 1149.99, discount_price: 899.99, stock: 35, rating: 4.9, num_reviews: 280, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S23 Ultra', Display: '6.8" Edge QHD+ AMOLED 120Hz', Processor: 'Snapdragon 8 Gen 2', RAM: '12GB', Storage: '256GB', Camera: '200MP + 12MP + 10MP + 10MP', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy S23 Ultra 5G (512GB Green, 12GB RAM)',
      slug: 'samsung-galaxy-s23-ultra-512gb-green',
      description: 'Rich Forest Green flagship smartphone with 512GB storage, expert RAW astronomy mode, quad camera system, and S Pen productivity.',
      price: 1269.99, discount_price: 999.99, stock: 25, rating: 4.9, num_reviews: 195, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S23 Ultra', Display: '6.8" QHD+ 120Hz', Processor: 'Snapdragon 8 Gen 2', RAM: '12GB', Storage: '512GB', Camera: '200MP Quad Camera', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy S23 5G (128GB Cream, 8GB RAM)',
      slug: 'samsung-galaxy-s23-128gb-cream',
      description: 'Compact premium glass & metal smartphone with 6.1" AMOLED 120Hz display, Snapdragon 8 Gen 2, 50MP nightography camera, and wireless charging.',
      price: 699.99, discount_price: 529.99, stock: 45, rating: 4.8, num_reviews: 165, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S23', Display: '6.1" Dynamic AMOLED 2X 120Hz', Processor: 'Snapdragon 8 Gen 2', RAM: '8GB', Storage: '128GB', Camera: '50MP Triple Camera', Battery: '3900mAh' }
    },
    {
      name: 'Samsung Galaxy S23 FE 5G (128GB Purple, 8GB RAM)',
      slug: 'samsung-galaxy-s23-fe-128gb-purple',
      description: 'Stylish Purple finish with 6.4" Dynamic AMOLED 2X 120Hz screen, 50MP pro sensor, Exynos 2200 4nm chip, and IP68 water resistance.',
      price: 599.99, discount_price: 449.99, stock: 60, rating: 4.7, num_reviews: 140, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S23 FE', Display: '6.4" FHD+ AMOLED 120Hz', Processor: 'Exynos 2200 / Snapdragon 8 Gen 1', RAM: '8GB', Storage: '128GB', Camera: '50MP OIS + 12MP + 8MP', Battery: '4500mAh' }
    },

    // --- Z-Fold & Z-Flip Series (8 SKUs) ---
    {
      name: 'Samsung Galaxy Z Fold6 5G (512GB Silver Shadow, 12GB RAM)',
      slug: 'samsung-galaxy-z-fold6-512gb-silver',
      description: 'Next-gen dual-screen foldable with symmetrical razor-thin titanium hinge, 7.6" Dynamic AMOLED 2X inner workspace, Snapdragon 8 Gen 3, and Galaxy AI multi-window multitasking.',
      price: 2019.99, discount_price: 1849.99, stock: 25, rating: 4.9, num_reviews: 132, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Z Fold6', MainDisplay: '7.6" QXGA+ Dynamic AMOLED 2X 120Hz', CoverDisplay: '6.3" HD+ AMOLED 120Hz', Processor: 'Snapdragon 8 Gen 3 for Galaxy', RAM: '12GB', Storage: '512GB', Camera: '50MP + 12MP + 10MP 3x OIS', Battery: '4400mAh Dual Battery' }
    },
    {
      name: 'Samsung Galaxy Z Fold6 5G (1TB Crafted Black, 12GB RAM)',
      slug: 'samsung-galaxy-z-fold6-1tb-black',
      description: 'Exclusive Crafted Black carbon-weave textured flagship foldable with massive 1TB storage, S Pen Fold Edition support, and Armor Aluminum frame.',
      price: 2259.99, discount_price: 2099.99, stock: 15, rating: 4.9, num_reviews: 78, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Z Fold6', MainDisplay: '7.6" Foldable AMOLED 120Hz', CoverDisplay: '6.3" 120Hz', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '1TB', Camera: '50MP Triple OIS', Battery: '4400mAh' }
    },
    {
      name: 'Samsung Galaxy Z Fold6 5G (256GB Navy Blue, 12GB RAM)',
      slug: 'samsung-galaxy-z-fold6-256gb-navy',
      description: 'Sophisticated Navy Blue foldable phone with enhanced dual-rail hinge, IP48 water resistance, Circle to Search, and split-screen drag-and-drop productivity.',
      price: 1899.99, discount_price: 1749.99, stock: 30, rating: 4.8, num_reviews: 95, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Z Fold6', MainDisplay: '7.6" AMOLED 2X', CoverDisplay: '6.3" AMOLED', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '256GB', Camera: '50MP Triple Camera', Battery: '4400mAh' }
    },
    {
      name: 'Samsung Galaxy Z Flip6 5G (256GB Mint, 12GB RAM)',
      slug: 'samsung-galaxy-z-flip6-256gb-mint',
      description: 'Iconic clamshell foldable with 3.4" Super AMOLED FlexWindow, upgraded 50MP wide camera with 2x optical zoom, vapor chamber cooling, and 4000mAh battery.',
      price: 1099.99, discount_price: 979.99, stock: 40, rating: 4.9, num_reviews: 148, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Z Flip6', MainDisplay: '6.7" FHD+ Dynamic AMOLED 2X 120Hz', FlexWindow: '3.4" Super AMOLED 60Hz', Processor: 'Snapdragon 8 Gen 3 for Galaxy', RAM: '12GB', Storage: '256GB', Camera: '50MP Dual Pixel OIS + 12MP Ultra-wide', Battery: '4000mAh' }
    },
    {
      name: 'Samsung Galaxy Z Flip6 5G (512GB Silver Shadow, 12GB RAM)',
      slug: 'samsung-galaxy-z-flip6-512gb-silver',
      description: 'Ultra-modern Silver Shadow finish with 512GB storage, auto-zoom hands-free FlexCam, Galaxy AI generative wallpaper, and 12GB RAM.',
      price: 1219.99, discount_price: 1099.99, stock: 30, rating: 4.8, num_reviews: 92, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Z Flip6', MainDisplay: '6.7" 120Hz AMOLED', FlexWindow: '3.4" Super AMOLED', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '512GB', Camera: '50MP Dual Camera', Battery: '4000mAh' }
    },
    {
      name: 'Samsung Galaxy Z Flip6 5G (256GB Yellow, 12GB RAM)',
      slug: 'samsung-galaxy-z-flip6-256gb-yellow',
      description: 'Vibrant pop-yellow pocket fashion icon with camcorder grip mode, dual-screen interpreter, and Armor Aluminum frame.',
      price: 1099.99, discount_price: 979.99, stock: 35, rating: 4.8, num_reviews: 64, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Z Flip6', MainDisplay: '6.7" AMOLED 2X', FlexWindow: '3.4" AMOLED', Processor: 'Snapdragon 8 Gen 3', RAM: '12GB', Storage: '256GB', Camera: '50MP + 12MP', Battery: '4000mAh' }
    },
    {
      name: 'Samsung Galaxy Z Fold5 5G (512GB Icy Blue, 12GB RAM)',
      slug: 'samsung-galaxy-z-fold5-512gb-blue',
      description: 'Zero-gap Flex Hinge foldable with 7.6" inner display, Snapdragon 8 Gen 2, taskbar multi-tasking, and 50MP pro-grade camera.',
      price: 1799.99, discount_price: 1399.99, stock: 20, rating: 4.8, num_reviews: 175, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Z Fold5', MainDisplay: '7.6" AMOLED 120Hz', CoverDisplay: '6.2" AMOLED 120Hz', Processor: 'Snapdragon 8 Gen 2', RAM: '12GB', Storage: '512GB', Camera: '50MP Triple OIS', Battery: '4400mAh' }
    },
    {
      name: 'Samsung Galaxy Z Flip5 5G (256GB Lavender, 8GB RAM)',
      slug: 'samsung-galaxy-z-flip5-256gb-lavender',
      description: 'Pastel Lavender clamshell with 3.4" Flex Window cover screen for instant replies, selfies, widgets, and Snapdragon 8 Gen 2 performance.',
      price: 999.99, discount_price: 699.99, stock: 35, rating: 4.8, num_reviews: 190, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Z Flip5', MainDisplay: '6.7" Dynamic AMOLED 2X 120Hz', FlexWindow: '3.4" Super AMOLED', Processor: 'Snapdragon 8 Gen 2', RAM: '8GB', Storage: '256GB', Camera: '12MP Dual Pixel OIS', Battery: '3700mAh' }
    },

    // --- Galaxy A-Series (12 SKUs) ---
    {
      name: 'Samsung Galaxy A55 5G (256GB Awesome Navy, 12GB RAM)',
      slug: 'samsung-galaxy-a55-256gb-navy',
      description: 'Premium metal frame mid-ranger with 6.6" 120Hz Super AMOLED screen, Exynos 1480 4nm processor with AMD Xclipse 530 GPU, and 50MP OIS camera.',
      price: 479.99, discount_price: 399.99, stock: 80, rating: 4.8, num_reviews: 168, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A55', Display: '6.6" FHD+ Super AMOLED 120Hz 1000 nits', Processor: 'Exynos 1480 4nm (AMD GPU)', RAM: '12GB', Storage: '256GB + MicroSD', Camera: '50MP OIS + 12MP + 5MP', Battery: '5000mAh 25W' }
    },
    {
      name: 'Samsung Galaxy A55 5G (128GB Awesome Iceblue, 8GB RAM)',
      slug: 'samsung-galaxy-a55-128gb-iceblue',
      description: 'Shimmering Iceblue metal frame smartphone with Gorilla Glass Victus+ front & back, Knox Vault security, and 4 years of OS upgrades.',
      price: 429.99, discount_price: 359.99, stock: 90, rating: 4.8, num_reviews: 145, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A55', Display: '6.6" Super AMOLED 120Hz', Processor: 'Exynos 1480', RAM: '8GB', Storage: '128GB', Camera: '50MP OIS Triple Camera', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy A55 5G (256GB Awesome Lilac, 8GB RAM)',
      slug: 'samsung-galaxy-a55-256gb-lilac',
      description: 'Gentle pastel Lilac glass back with solid metal chassis, 32MP high-res selfie camera, Nightography video, and IP67 dust & water rating.',
      price: 459.99, discount_price: 379.99, stock: 75, rating: 4.8, num_reviews: 87, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A55', Display: '6.6" 120Hz AMOLED', Processor: 'Exynos 1480', RAM: '8GB', Storage: '256GB', Camera: '50MP OIS', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy A55 5G (128GB Awesome Lemon, 8GB RAM)',
      slug: 'samsung-galaxy-a55-128gb-lemon',
      description: 'Bright Awesome Lemon metal frame smartphone with 50MP Nightography, stereo Dolby sound, and 5000mAh battery.',
      price: 429.99, discount_price: 359.99, stock: 80, rating: 4.8, num_reviews: 72, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A55', Display: '6.6" AMOLED 120Hz', Processor: 'Exynos 1480', RAM: '8GB', Storage: '128GB', Camera: '50MP OIS', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy A35 5G (128GB Awesome Navy, 8GB RAM)',
      slug: 'samsung-galaxy-a35-128gb-navy',
      description: 'All-round 5G smartphone with 6.6" 120Hz Super AMOLED Infinity-O screen, Exynos 1380 octa-core processor, and 50MP OIS triple camera system.',
      price: 359.99, discount_price: 299.99, stock: 85, rating: 4.7, num_reviews: 122, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A35', Display: '6.6" FHD+ Super AMOLED 120Hz', Processor: 'Exynos 1380 5nm', RAM: '8GB', Storage: '128GB', Camera: '50MP OIS + 8MP + 5MP', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy A35 5G (256GB Awesome Lemon, 8GB RAM)',
      slug: 'samsung-galaxy-a35-256gb-lemon',
      description: 'Fresh Awesome Lemon edition with 256GB storage, Vision Booster sunlight screen technology, Knox Vault, and 2-day 5000mAh battery life.',
      price: 399.99, discount_price: 329.99, stock: 65, rating: 4.7, num_reviews: 76, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A35', Display: '6.6" 120Hz AMOLED', Processor: 'Exynos 1380', RAM: '8GB', Storage: '256GB', Camera: '50MP OIS Camera', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy A35 5G (256GB Awesome Iceblue, 8GB RAM)',
      slug: 'samsung-galaxy-a35-256gb-iceblue',
      description: 'Iceblue glass finish with 256GB storage, 50MP main sensor with Super HDR video, IP67 protection, and fast 25W charging.',
      price: 399.99, discount_price: 329.99, stock: 70, rating: 4.7, num_reviews: 64, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A35', Display: '6.6" Super AMOLED 120Hz', Processor: 'Exynos 1380', RAM: '8GB', Storage: '256GB', Camera: '50MP OIS', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy A25 5G (128GB Blue Black, 8GB RAM)',
      slug: 'samsung-galaxy-a25-128gb-black',
      description: 'Affordable 120Hz 5G phone with 6.5" Super AMOLED display, 50MP optical image stabilization (OIS), stereo speakers, and 3.5mm headphone jack.',
      price: 299.99, discount_price: 249.99, stock: 95, rating: 4.7, num_reviews: 110, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A25', Display: '6.5" FHD+ Super AMOLED 120Hz 1000 nits', Processor: 'Exynos 1280 5nm', RAM: '8GB', Storage: '128GB', Camera: '50MP OIS + 8MP + 2MP', Battery: '5000mAh 25W' }
    },
    {
      name: 'Samsung Galaxy A25 5G (256GB Light Blue, 8GB RAM)',
      slug: 'samsung-galaxy-a25-256gb-lightblue',
      description: 'Light Blue pattern finish with 256GB expandable storage, Exynos 1280 gaming processor, Dolby Atmos audio, and side fingerprint scanner.',
      price: 339.99, discount_price: 279.99, stock: 70, rating: 4.7, num_reviews: 58, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A25', Display: '6.5" Super AMOLED 120Hz', Processor: 'Exynos 1280', RAM: '8GB', Storage: '256GB', Camera: '50MP OIS Triple', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy A15 5G (128GB Blue Black, 6GB RAM)',
      slug: 'samsung-galaxy-a15-5g-128gb-black',
      description: 'Bestselling 5G budget king with 6.5" 90Hz Super AMOLED screen, MediaTek Dimensity 6100+ processor, 50MP triple cameras, and 5000mAh battery.',
      price: 219.99, discount_price: 179.99, stock: 120, rating: 4.7, num_reviews: 245, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A15', Display: '6.5" FHD+ Super AMOLED 90Hz 800 nits', Processor: 'MediaTek Dimensity 6100+', RAM: '6GB', Storage: '128GB + MicroSD', Camera: '50MP + 5MP + 2MP', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy A15 5G (128GB Light Blue, 8GB RAM)',
      slug: 'samsung-galaxy-a15-5g-128gb-lightblue',
      description: 'Smooth 8GB RAM multitasking budget smartphone with 90Hz vivid AMOLED display, eye care shield, and 4 guaranteed Android OS updates.',
      price: 239.99, discount_price: 199.99, stock: 100, rating: 4.6, num_reviews: 118, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A15', Display: '6.5" 90Hz Super AMOLED', Processor: 'Dimensity 6100+', RAM: '8GB', Storage: '128GB', Camera: '50MP Triple Camera', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy A05s (128GB Light Green, 6GB RAM)',
      slug: 'samsung-galaxy-a05s-128gb-green',
      description: 'Reliable everyday smartphone with large 6.7" 90Hz FHD+ display, Qualcomm Snapdragon 680 processor, 50MP main camera, and 25W Super Fast Charging.',
      price: 169.99, discount_price: 139.99, stock: 110, rating: 4.6, num_reviews: 95, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A05s', Display: '6.7" FHD+ 90Hz PLS LCD', Processor: 'Qualcomm Snapdragon 680', RAM: '6GB', Storage: '128GB', Camera: '50MP + 2MP + 2MP', Battery: '5000mAh 25W' }
    },

    // --- Galaxy M & F Series (8 SKUs) ---
    {
      name: 'Samsung Galaxy M55 5G (256GB Denim Black, 12GB RAM)',
      slug: 'samsung-galaxy-m55-256gb-black',
      description: 'Sleek 7.8mm slim profile with 6.7" 120Hz Super AMOLED+ display, Snapdragon 7 Gen 1 4nm processor, 50MP selfie camera, 50MP OIS rear camera, and 45W charging.',
      price: 389.99, discount_price: 319.99, stock: 75, rating: 4.7, num_reviews: 98, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy M55', Display: '6.7" FHD+ Super AMOLED+ 120Hz 1000 nits', Processor: 'Qualcomm Snapdragon 7 Gen 1 4nm', RAM: '12GB', Storage: '256GB', Camera: '50MP OIS Rear + 50MP Selfie', Battery: '5000mAh 45W Charging' }
    },
    {
      name: 'Samsung Galaxy M55 5G (128GB Light Green, 8GB RAM)',
      slug: 'samsung-galaxy-m55-128gb-green',
      description: 'Pastel Light Green edition featuring dual recording vlog mode, stereo speakers with Dolby Atmos, and in-display fingerprint scanner.',
      price: 339.99, discount_price: 279.99, stock: 80, rating: 4.7, num_reviews: 76, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy M55', Display: '6.7" 120Hz AMOLED+', Processor: 'Snapdragon 7 Gen 1', RAM: '8GB', Storage: '128GB', Camera: '50MP OIS + 50MP Front', Battery: '5000mAh 45W' }
    },
    {
      name: 'Samsung Galaxy M35 5G (128GB Daybreak Blue, 6GB RAM)',
      slug: 'samsung-galaxy-m35-128gb-blue',
      description: 'Monster 6000mAh battery champion with 6.6" 120Hz Super AMOLED screen, Exynos 1380 processor, vapor cooling chamber, and 50MP OIS camera.',
      price: 289.99, discount_price: 239.99, stock: 90, rating: 4.8, num_reviews: 165, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy M35', Display: '6.6" FHD+ Super AMOLED 120Hz', Processor: 'Exynos 1380 5nm', RAM: '6GB', Storage: '128GB', Camera: '50MP OIS + 8MP + 2MP', Battery: '6000mAh Monster Battery' }
    },
    {
      name: 'Samsung Galaxy M35 5G (256GB Thunder Grey, 8GB RAM)',
      slug: 'samsung-galaxy-m35-256gb-grey',
      description: 'Heavy duty 6000mAh power station phone with 256GB storage, Corning Gorilla Glass Victus+, and 4 Android OS updates.',
      price: 329.99, discount_price: 269.99, stock: 85, rating: 4.8, num_reviews: 94, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy M35', Display: '6.6" 120Hz AMOLED', Processor: 'Exynos 1380', RAM: '8GB', Storage: '256GB', Camera: '50MP OIS Triple', Battery: '6000mAh' }
    },
    {
      name: 'Samsung Galaxy M15 5G (128GB Celestine Blue, 6GB RAM)',
      slug: 'samsung-galaxy-m15-128gb-blue',
      description: 'Unbeatable budget endurance with 6000mAh battery, 6.5" 90Hz FHD+ Super AMOLED screen, MediaTek Dimensity 6100+ chip, and 50MP triple camera.',
      price: 209.99, discount_price: 169.99, stock: 115, rating: 4.7, num_reviews: 230, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy M15', Display: '6.5" Super AMOLED 90Hz', Processor: 'MediaTek Dimensity 6100+', RAM: '6GB', Storage: '128GB', Camera: '50MP + 5MP + 2MP', Battery: '6000mAh Battery' }
    },
    {
      name: 'Samsung Galaxy F55 5G Vegan Leather (256GB Apricot Crush, 12GB RAM)',
      slug: 'samsung-galaxy-f55-256gb-apricot',
      description: 'Handcrafted vegan leather back with saddle stitching, 6.7" 120Hz Super AMOLED+ display, Snapdragon 7 Gen 1, 50MP OIS camera, and ultra-slim 7.8mm body.',
      price: 399.99, discount_price: 329.99, stock: 65, rating: 4.8, num_reviews: 112, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy F55', Back: 'Premium Vegan Leather Saddle Stitch', Display: '6.7" 120Hz Super AMOLED+', Processor: 'Snapdragon 7 Gen 1', RAM: '12GB', Storage: '256GB', Camera: '50MP OIS + 50MP Selfie', Battery: '5000mAh 45W' }
    },
    {
      name: 'Samsung Galaxy F55 5G Vegan Leather (128GB Raisin Black, 8GB RAM)',
      slug: 'samsung-galaxy-f55-128gb-black',
      description: 'Sophisticated Raisin Black stitched leather smartphone with 50MP high-res selfie camera, 45W super fast charging, and Knox Vault protection.',
      price: 349.99, discount_price: 289.99, stock: 70, rating: 4.7, num_reviews: 84, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy F55', Back: 'Vegan Leather', Display: '6.7" Super AMOLED+ 120Hz', Processor: 'Snapdragon 7 Gen 1', RAM: '8GB', Storage: '128GB', Camera: '50MP OIS', Battery: '5000mAh 45W' }
    },
    {
      name: 'Samsung Galaxy F15 5G (128GB Jazzy Green, 6GB RAM)',
      slug: 'samsung-galaxy-f15-128gb-green',
      description: 'Segment-first 6000mAh battery with 6.5" sAMOLED 90Hz display, Dimensity 6100+ chip, Voice Focus, and 4 generations of Android upgrades.',
      price: 199.99, discount_price: 159.99, stock: 120, rating: 4.7, num_reviews: 195, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy F15', Display: '6.5" FHD+ Super AMOLED 90Hz', Processor: 'Dimensity 6100+', RAM: '6GB', Storage: '128GB', Camera: '50MP Triple Camera', Battery: '6000mAh Battery' }
    }
  ];

  // --- Galaxy Book Laptops (32 SKUs) ---
  const laptopModels = [
    {
      name: 'Samsung Galaxy Book4 Ultra 16" (Intel Core Ultra 9 185H, RTX 4070, 32GB RAM, 1TB SSD)',
      slug: 'samsung-galaxy-book4-ultra-core-ultra-9',
      description: 'The pinnacle of AI computing performance. 16" 3K Dynamic AMOLED 2X 120Hz anti-reflective touchscreen, Intel Core Ultra 9 with dedicated NPU, NVIDIA GeForce RTX 4070 8GB GDDR6, Quad AKG studio speakers, and fast 140W charging.',
      price: 2999.99, discount_price: 2699.99, stock: 15, rating: 4.9, num_reviews: 84, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Ultra', Display: '16" 3K (2880x1800) Dynamic AMOLED 2X 120Hz Touch', Processor: 'Intel Core Ultra 9 185H (16 Cores, up to 5.1GHz)', Graphics: 'NVIDIA GeForce RTX 4070 (8GB)', RAM: '32GB LPDDR5X', Storage: '1TB NVMe PCIe 4.0 SSD', Weight: '1.86 kg' }
    },
    {
      name: 'Samsung Galaxy Book4 Ultra 16" (Intel Core Ultra 9 185H, RTX 4070, 64GB RAM, 2TB SSD)',
      slug: 'samsung-galaxy-book4-ultra-64gb-2tb',
      description: 'Maximum spec creator flagship workstation with 64GB ultra-fast RAM, 2TB high-speed NVMe storage, 3K OLED touch display, and AI Copilot studio features.',
      price: 3499.99, discount_price: 3199.99, stock: 10, rating: 5.0, num_reviews: 45, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Ultra', Display: '16" 3K AMOLED 120Hz Touch', Processor: 'Intel Core Ultra 9 185H', Graphics: 'NVIDIA RTX 4070 (8GB)', RAM: '64GB LPDDR5X', Storage: '2TB NVMe SSD' }
    },
    {
      name: 'Samsung Galaxy Book4 Ultra 16" (Intel Core Ultra 7 155H, RTX 4050, 16GB RAM, 1TB SSD)',
      slug: 'samsung-galaxy-book4-ultra-core-ultra-7',
      description: 'Creator powerhouse laptop with 16" 3K AMOLED 120Hz display, Intel AI Boost Core Ultra 7 processor, NVIDIA GeForce RTX 4050 GPU, and Moonstone Gray aluminum chassis.',
      price: 2399.99, discount_price: 2149.99, stock: 20, rating: 4.9, num_reviews: 62, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Ultra', Display: '16" 3K AMOLED 2X Touch 120Hz', Processor: 'Intel Core Ultra 7 155H', Graphics: 'NVIDIA GeForce RTX 4050 (6GB)', RAM: '16GB LPDDR5X', Storage: '1TB NVMe SSD', OS: 'Windows 11 Home' }
    },
    {
      name: 'Samsung Galaxy Book4 Ultra 16" (Intel Core Ultra 7 155H, RTX 4050, 32GB RAM, 512GB SSD)',
      slug: 'samsung-galaxy-book4-ultra-32gb-512gb',
      description: 'Performance workstation with 32GB LPDDR5X RAM, Intel Arc & NVIDIA studio drivers, anti-reflective glass, and dual cooling vapor chamber.',
      price: 2499.99, discount_price: 2249.99, stock: 18, rating: 4.8, num_reviews: 38, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Ultra', Display: '16" 3K Touch AMOLED', Processor: 'Intel Core Ultra 7 155H', Graphics: 'RTX 4050 6GB', RAM: '32GB', Storage: '512GB SSD' }
    },
    {
      name: 'Samsung Galaxy Book4 Pro 360 16" Touchscreen 2-in-1 (Intel Core Ultra 7 155H, 32GB RAM, 1TB SSD)',
      slug: 'samsung-galaxy-book4-pro-360-1tb',
      description: 'Flagship 2-in-1 convertible touchscreen with bundled responsive S Pen, 16" 3K Dynamic AMOLED 2X 120Hz panel, Intel Core Ultra 7 with Intel Arc graphics, and 360-degree rotating hinge.',
      price: 1899.99, discount_price: 1649.99, stock: 25, rating: 4.9, num_reviews: 94, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Pro 360', Display: '16" 3K Dynamic AMOLED 2X Touch (2880x1800)', Processor: 'Intel Core Ultra 7 155H with AI NPU', RAM: '32GB LPDDR5X', Storage: '1TB SSD', Stylus: 'S Pen Included in Box', Battery: '76Wh (up to 21 Hours)' }
    },
    {
      name: 'Samsung Galaxy Book4 Pro 360 16" Touchscreen (Intel Core Ultra 7 155H, 16GB RAM, 512GB SSD)',
      slug: 'samsung-galaxy-book4-pro-360-512gb',
      description: 'Convertible tablet-laptop workstation with Vision Booster outdoor display visibility, AKG quad speakers with Dolby Atmos, and seamless Galaxy Phone Multi Control.',
      price: 1699.99, discount_price: 1479.99, stock: 30, rating: 4.8, num_reviews: 71, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Pro 360', Display: '16" 3K AMOLED 120Hz Touch', Processor: 'Intel Core Ultra 7 155H', RAM: '16GB', Storage: '512GB SSD', Stylus: 'S Pen Included', Weight: '1.66 kg' }
    },
    {
      name: 'Samsung Galaxy Book4 Pro 360 16" (Intel Core Ultra 5 125H, 16GB RAM, 512GB SSD, Silver)',
      slug: 'samsung-galaxy-book4-pro-360-silver-ultra-5',
      description: 'Platinum Silver 360 convertible laptop with 16" 3K OLED touch display, Intel Core Ultra 5 CPU, S Pen stylus, and fast Thunderbolt 4 connectivity.',
      price: 1499.99, discount_price: 1299.99, stock: 35, rating: 4.8, num_reviews: 49, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Pro 360', Display: '16" 3K AMOLED Touch', Processor: 'Intel Core Ultra 5 125H', RAM: '16GB', Storage: '512GB SSD', Stylus: 'S Pen Included' }
    },
    {
      name: 'Samsung Galaxy Book4 Pro 16" Ultrabook (Intel Core Ultra 7 155H, 16GB RAM, 512GB SSD)',
      slug: 'samsung-galaxy-book4-pro-16-512gb',
      description: 'Ultra-thin 12.5mm clamshell laptop with 16" 3K Dynamic AMOLED 2X 120Hz anti-glare screen, Intel Arc Graphics, dual Thunderbolt 4 ports, and 1.56kg featherweight chassis.',
      price: 1449.99, discount_price: 1249.99, stock: 35, rating: 4.8, num_reviews: 83, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Pro 16', Display: '16" 3K AMOLED 2X 120Hz', Processor: 'Intel Core Ultra 7 155H', RAM: '16GB LPDDR5X', Storage: '512GB NVMe SSD', Ports: '2x Thunderbolt 4, HDMI 2.1, USB-A' }
    },
    {
      name: 'Samsung Galaxy Book4 Pro 16" Ultrabook (Intel Core Ultra 7 155H, 32GB RAM, 1TB SSD)',
      slug: 'samsung-galaxy-book4-pro-16-1tb',
      description: 'Maxed-out 16" clamshell ultrabook with 32GB RAM, 1TB SSD, studio-grade 2MP FHD webcam, and Knox security chip.',
      price: 1749.99, discount_price: 1549.99, stock: 25, rating: 4.9, num_reviews: 67, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Pro 16', Display: '16" 3K 120Hz AMOLED Touch', Processor: 'Intel Core Ultra 7 155H', RAM: '32GB', Storage: '1TB SSD' }
    },
    {
      name: 'Samsung Galaxy Book4 Pro 14" Ultrabook (Intel Core Ultra 7 155H, 16GB RAM, 512GB SSD)',
      slug: 'samsung-galaxy-book4-pro-14-512gb',
      description: 'Compact 1.23kg executive mobility laptop with 14" 3K AMOLED 2X 120Hz touchscreen, Intel AI Boost NPU, Wi-Fi 6E, and full day battery life.',
      price: 1399.99, discount_price: 1199.99, stock: 40, rating: 4.9, num_reviews: 95, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Pro 14', Display: '14" 3K (2880x1800) AMOLED 2X 120Hz Touch', Processor: 'Intel Core Ultra 7 155H', RAM: '16GB', Storage: '512GB SSD', Weight: '1.23 kg Lightweight' }
    },
    {
      name: 'Samsung Galaxy Book4 Pro 14" Ultrabook (Intel Core Ultra 7 155H, 32GB RAM, 1TB SSD)',
      slug: 'samsung-galaxy-book4-pro-14-1tb',
      description: 'Pocket-sized powerhouse with 32GB RAM, 1TB high speed SSD, 14" 3K 120Hz OLED screen, and 63Wh fast charging battery.',
      price: 1699.99, discount_price: 1479.99, stock: 25, rating: 4.9, num_reviews: 58, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Pro 14', Display: '14" 3K AMOLED 120Hz Touch', Processor: 'Intel Core Ultra 7 155H', RAM: '32GB', Storage: '1TB SSD' }
    },
    {
      name: 'Samsung Galaxy Book4 Pro 14" Ultrabook (Intel Core Ultra 5 125H, 16GB RAM, 512GB SSD)',
      slug: 'samsung-galaxy-book4-pro-14-ultra-5',
      description: 'Premium everyday powerhouse with 14" 3K AMOLED 120Hz touch panel, Intel Core Ultra 5 with AI NPU, studio-quality mics with 2-way AI noise cancelation.',
      price: 1249.99, discount_price: 1049.99, stock: 45, rating: 4.8, num_reviews: 64, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Pro 14', Display: '14" 3K AMOLED 120Hz Touch', Processor: 'Intel Core Ultra 5 125H (14 Cores)', RAM: '16GB', Storage: '512GB SSD', OS: 'Windows 11 Home' }
    },
    {
      name: 'Samsung Galaxy Book4 Edge 16" Copilot+ PC (Snapdragon X Elite, 16GB RAM, 512GB SSD)',
      slug: 'samsung-galaxy-book4-edge-16-snapdragon',
      description: 'Next-gen Copilot+ PC with 45 TOPS NPU, Qualcomm Snapdragon X Elite processor, 16" 3K Dynamic AMOLED 2X 120Hz touchscreen, and unmatched 22-hour battery endurance.',
      price: 1749.99, discount_price: 1499.99, stock: 25, rating: 4.9, num_reviews: 72, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Edge 16', Display: '16" 3K Dynamic AMOLED 2X 120Hz Touch', Processor: 'Qualcomm Snapdragon X Elite (12-Core 3.4GHz, 45 TOPS NPU)', RAM: '16GB LPDDR5X', Storage: '512GB UFS 4.0', Battery: 'Up to 22 Hours' }
    },
    {
      name: 'Samsung Galaxy Book4 Edge 16" Copilot+ PC (Snapdragon X Elite, 16GB RAM, 1TB SSD)',
      slug: 'samsung-galaxy-book4-edge-16-1tb',
      description: 'High capacity 1TB ARM Copilot+ laptop with real-time live captions translation, instant Cocreator drawing AI, and 3K OLED anti-reflective glass.',
      price: 1949.99, discount_price: 1699.99, stock: 20, rating: 4.9, num_reviews: 48, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Edge 16', Display: '16" 3K AMOLED 120Hz Touch', Processor: 'Snapdragon X Elite (45 TOPS NPU)', RAM: '16GB', Storage: '1TB SSD' }
    },
    {
      name: 'Samsung Galaxy Book4 Edge 14" Copilot+ PC (Snapdragon X Elite, 16GB RAM, 512GB SSD)',
      slug: 'samsung-galaxy-book4-edge-14-snapdragon',
      description: 'Ultra-portable 1.16kg Copilot+ PC with 14" 3K AMOLED 2X 120Hz touch screen, on-device AI generation, instant Cocreator, and whisper-quiet fanless cooling.',
      price: 1349.99, discount_price: 1149.99, stock: 30, rating: 4.8, num_reviews: 53, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 Edge 14', Display: '14" 3K AMOLED 120Hz Touch', Processor: 'Qualcomm Snapdragon X Elite', RAM: '16GB', Storage: '512GB', Weight: '1.16 kg' }
    },
    {
      name: 'Samsung Galaxy Book4 360 15.6" Convertible (Intel Core 7 150U, 16GB RAM, 512GB SSD)',
      slug: 'samsung-galaxy-book4-360-core-7',
      description: 'Versatile 2-in-1 touchscreen laptop with 15.6" Super AMOLED vibrant FHD display, Intel Core 7 150U processor, stylus support, and Dolby Atmos audio.',
      price: 1299.99, discount_price: 1049.99, stock: 40, rating: 4.8, num_reviews: 79, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 360', Display: '15.6" FHD Super AMOLED Touch', Processor: 'Intel Core 7 150U (10 Cores up to 5.4GHz)', RAM: '16GB LPDDR5', Storage: '512GB NVMe SSD', Hinge: '360° Rotating 2-in-1' }
    },
    {
      name: 'Samsung Galaxy Book4 360 15.6" Convertible (Intel Core 5 120U, 16GB RAM, 512GB SSD)',
      slug: 'samsung-galaxy-book4-360-core-5',
      description: 'Flexible 2-in-1 AMOLED convertible with S Pen compatibility, fingerprint security on power key, expandable SSD slot, and 65W USB-C compact charger.',
      price: 1099.99, discount_price: 899.99, stock: 50, rating: 4.7, num_reviews: 61, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4 360', Display: '15.6" Super AMOLED Touch FHD', Processor: 'Intel Core 5 120U', RAM: '16GB', Storage: '512GB SSD', OS: 'Windows 11 Home' }
    },
    {
      name: 'Samsung Galaxy Book4 15.6" Full HD Laptop (Intel Core 7 150U, 16GB RAM, 512GB SSD, Gray)',
      slug: 'samsung-galaxy-book4-core-7-gray',
      description: 'Sleek aluminum chassis with 15.6" Anti-Glare FHD display, Intel Core 7 150U processor, dual SSD slots, full numeric keypad, and comprehensive port selection.',
      price: 949.99, discount_price: 799.99, stock: 65, rating: 4.8, num_reviews: 110, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4', Display: '15.6" FHD (1920x1080) Anti-Glare IPS', Processor: 'Intel Core 7 150U', RAM: '16GB LPDDR4X', Storage: '512GB NVMe SSD (Dual Slots)', Ports: 'HDMI, 2x USB-C, 2x USB 3.2, MicroSD, RJ45' }
    },
    {
      name: 'Samsung Galaxy Book4 15.6" Full HD Laptop (Intel Core 5 120U, 16GB RAM, 512GB SSD, Silver)',
      slug: 'samsung-galaxy-book4-core-5-silver',
      description: 'Modern Silver finish student & professional laptop with 15.6" screen, Intel Core 5 120U, Phone Link, Quick Share, and 1.55kg slim body.',
      price: 849.99, discount_price: 699.99, stock: 80, rating: 4.7, num_reviews: 135, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4', Display: '15.6" FHD Anti-Glare', Processor: 'Intel Core 5 120U (10 Cores)', RAM: '16GB', Storage: '512GB SSD', OS: 'Windows 11 Home' }
    },
    {
      name: 'Samsung Galaxy Book4 15.6" Full HD Laptop (Intel Core 3 100U, 8GB RAM, 512GB SSD, Gray)',
      slug: 'samsung-galaxy-book4-core-3-gray',
      description: 'Affordable premium built laptop with Intel Core 3 100U 6-core processor, metal top case, stereo speakers, and fast charging USB-C adapter.',
      price: 699.99, discount_price: 549.99, stock: 90, rating: 4.6, num_reviews: 82, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book4', Display: '15.6" FHD IPS', Processor: 'Intel Core 3 100U (6 Cores)', RAM: '8GB', Storage: '512GB SSD', Weight: '1.55 kg' }
    },
    {
      name: 'Samsung Galaxy Book3 Ultra 16" (Intel Core i9-13900H, RTX 4070, 32GB RAM, 1TB SSD)',
      slug: 'samsung-galaxy-book3-ultra-core-i9',
      description: 'High-end workstation powerhouse featuring 16" 3K Dynamic AMOLED 2X 120Hz display, Intel Core i9-13900H 14-core CPU, RTX 4070 GPU, and AKG Quad Speakers.',
      price: 2699.99, discount_price: 1999.99, stock: 18, rating: 4.9, num_reviews: 140, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book3 Ultra', Display: '16" 3K Dynamic AMOLED 2X 120Hz', Processor: 'Intel Core i9-13900H (14-Core)', Graphics: 'NVIDIA RTX 4070 (8GB)', RAM: '32GB LPDDR5', Storage: '1TB SSD' }
    },
    {
      name: 'Samsung Galaxy Book3 Pro 360 16" (Intel Core i7-1360P, 16GB RAM, 1TB SSD)',
      slug: 'samsung-galaxy-book3-pro-360-i7',
      description: 'Versatile 360-degree 2-in-1 laptop with 16" 3K Dynamic AMOLED 2X touchscreen, bundled S Pen, Intel Evo i7 platform, and graphite metal finish.',
      price: 1749.99, discount_price: 1299.99, stock: 25, rating: 4.8, num_reviews: 125, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book3 Pro 360', Display: '16" 3K AMOLED 120Hz Touch', Processor: 'Intel Core i7-1360P (12-Core)', RAM: '16GB', Storage: '1TB SSD', Stylus: 'S Pen Included' }
    },
    {
      name: 'Samsung Galaxy Book3 Pro 14" (Intel Core i7-1360P, 16GB RAM, 512GB SSD)',
      slug: 'samsung-galaxy-book3-pro-14-i7',
      description: 'Featherlight 1.17kg business laptop with 14" 3K 120Hz Dynamic AMOLED screen, Intel Iris Xe graphics, dual Thunderbolt 4, and studio mics.',
      price: 1399.99, discount_price: 999.99, stock: 30, rating: 4.8, num_reviews: 98, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book3 Pro 14', Display: '14" 3K AMOLED 120Hz', Processor: 'Intel Core i7-1360P', RAM: '16GB', Storage: '512GB SSD', Weight: '1.17 kg' }
    },
    {
      name: 'Samsung Galaxy Book3 360 13.3" (Intel Core i5-1335U, 16GB RAM, 512GB SSD)',
      slug: 'samsung-galaxy-book3-360-13-i5',
      description: 'Ultra-portable 1.16kg 2-in-1 convertible with 13.3" FHD Super AMOLED touchscreen, Intel Core i5 13th Gen, and 65W fast charging.',
      price: 1049.99, discount_price: 799.99, stock: 45, rating: 4.7, num_reviews: 86, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book3 360', Display: '13.3" FHD Super AMOLED Touch', Processor: 'Intel Core i5-1335U (10 Cores)', RAM: '16GB', Storage: '512GB SSD' }
    },
    {
      name: 'Samsung Galaxy Book3 15.6" (Intel Core i5-1335U, 16GB RAM, 512GB SSD)',
      slug: 'samsung-galaxy-book3-15-i5',
      description: 'Durable metal case laptop with 15.6" Anti-Glare FHD screen, Intel Core i5 13th Gen, dual SSD expansion slots, and multi-control ecosystem.',
      price: 849.99, discount_price: 629.99, stock: 60, rating: 4.7, num_reviews: 142, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book3', Display: '15.6" FHD IPS', Processor: 'Intel Core i5-1335U', RAM: '16GB', Storage: '512GB SSD', OS: 'Windows 11 Home' }
    },
    {
      name: 'Samsung Galaxy Book2 15.6" (Intel Core i5-1235U, 16GB RAM, 512GB SSD)',
      slug: 'samsung-galaxy-book2-15-i5',
      description: 'Value-packed slim laptop with Intel Core i5-1235U 10-core CPU, 15.6" FHD display, Dolby Atmos audio, and lightweight aluminum construction.',
      price: 749.99, discount_price: 529.99, stock: 55, rating: 4.6, num_reviews: 110, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book2', Display: '15.6" FHD (1920x1080)', Processor: 'Intel Core i5-1235U', RAM: '16GB', Storage: '512GB SSD', OS: 'Windows 11' }
    },
    {
      name: 'Samsung Galaxy Book Go 14" (Qualcomm Snapdragon 7c Gen 2, 8GB RAM, 128GB eUFS, Silver)',
      slug: 'samsung-galaxy-book-go-snapdragon',
      description: 'Ultra-thin, fanless 14" portable laptop with Qualcomm Snapdragon 7c Gen 2 compute platform, 180-degree hinge, and up to 18 hours battery life.',
      price: 399.99, discount_price: 299.99, stock: 75, rating: 4.5, num_reviews: 95, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book Go', Display: '14" FHD (1920x1080) LED', Processor: 'Qualcomm Snapdragon 7c Gen 2 (up to 2.55GHz)', RAM: '8GB LPDDR4X', Storage: '128GB eUFS', Battery: 'Up to 18 Hours', Weight: '1.38 kg' }
    },
    {
      name: 'Samsung Galaxy Chromebook Plus 15.6" OLED (Intel Core 3 100U, 8GB RAM, 256GB SSD)',
      slug: 'samsung-galaxy-chromebook-plus-oled',
      description: 'Thin and light Google AI Chromebook with 15.6" Full HD OLED screen, Intel Core 3 100U processor, dedicated Quick Insert key, and 13h battery life.',
      price: 699.99, discount_price: 599.99, stock: 40, rating: 4.8, num_reviews: 48, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Chromebook Plus', Display: '15.6" FHD OLED 400 nits', Processor: 'Intel Core 3 100U (6-Core)', RAM: '8GB LPDDR5X', Storage: '256GB SSD', OS: 'ChromeOS with Google AI' }
    },
    {
      name: 'Samsung Galaxy Chromebook 2 13.3" QLED Touchscreen (Fiesta Red, Intel Core i3, 8GB RAM, 128GB)',
      slug: 'samsung-galaxy-chromebook-2-qled',
      description: 'Striking Fiesta Red 2-in-1 convertible with world-first 13.3" QLED FHD touchscreen, Smart Amp sound, USI pen support, and ultra-slim aluminum body.',
      price: 599.99, discount_price: 479.99, stock: 45, rating: 4.7, num_reviews: 67, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Chromebook 2', Display: '13.3" FHD QLED Touch (1920x1080)', Processor: 'Intel Core i3-10110U', RAM: '8GB', Storage: '128GB eMMC', Color: 'Fiesta Red Aluminum' }
    }
  ];

  // --- Galaxy Tablets, Wearables, Audio & Smart Rings (20 SKUs) ---
  const tabletAndWearables = [
    {
      name: 'Samsung Galaxy Tab S9 Ultra 5G (14.6" Dynamic AMOLED 2X, 512GB, 12GB RAM with S Pen)',
      slug: 'samsung-galaxy-tab-s9-ultra-512gb-5g',
      description: 'Massive 14.6" 120Hz Dynamic AMOLED 2X HDR10+ tablet with Snapdragon 8 Gen 2 for Galaxy, IP68 water-resistant body & S Pen, quad AKG speakers, and 11,200mAh battery.',
      price: 1399.99, discount_price: 1199.99, stock: 25, rating: 4.9, num_reviews: 156, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Tab S9 Ultra', Display: '14.6" WQXGA+ Dynamic AMOLED 2X 120Hz (2960x1848)', Processor: 'Snapdragon 8 Gen 2 for Galaxy', RAM: '12GB', Storage: '512GB + MicroSD up to 1TB', Connectivity: '5G + Wi-Fi 6E', Battery: '11,200mAh 45W' }
    },
    {
      name: 'Samsung Galaxy Tab S9 Ultra Wi-Fi (14.6" Dynamic AMOLED 2X, 256GB, 12GB RAM with S Pen)',
      slug: 'samsung-galaxy-tab-s9-ultra-256gb-wifi',
      description: 'Giant productivity canvas for artists & engineers with ultra-low latency S Pen, Samsung DeX desktop mode, dual front 12MP cameras with Auto Framing.',
      price: 1199.99, discount_price: 1049.99, stock: 30, rating: 4.9, num_reviews: 112, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Tab S9 Ultra', Display: '14.6" 120Hz Dynamic AMOLED', Processor: 'Snapdragon 8 Gen 2', RAM: '12GB', Storage: '256GB', Battery: '11,200mAh' }
    },
    {
      name: 'Samsung Galaxy Tab S9+ 5G (12.4" Dynamic AMOLED 2X, 256GB, 12GB RAM with S Pen)',
      slug: 'samsung-galaxy-tab-s9-plus-256gb-5g',
      description: 'Ideal balance of large screen and portability with 12.4" 120Hz AMOLED 2X panel, IP68 Armor Aluminum durability, dual rear 13MP+8MP cameras, and 10,090mAh battery.',
      price: 1119.99, discount_price: 969.99, stock: 35, rating: 4.9, num_reviews: 94, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Tab S9+', Display: '12.4" WQXGA+ (2800x1752) Dynamic AMOLED 2X 120Hz', Processor: 'Snapdragon 8 Gen 2', RAM: '12GB', Storage: '256GB', Connectivity: '5G + Wi-Fi', Battery: '10,090mAh' }
    },
    {
      name: 'Samsung Galaxy Tab S9 11.0" Wi-Fi (128GB Beige, 8GB RAM with S Pen)',
      slug: 'samsung-galaxy-tab-s9-11-128gb-beige',
      description: 'Flagship compact tablet with gorgeous 11" Dynamic AMOLED 2X 120Hz screen, Snapdragon 8 Gen 2 power, in-display fingerprint, and IP68 rated S Pen included.',
      price: 799.99, discount_price: 679.99, stock: 50, rating: 4.8, num_reviews: 130, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Tab S9', Display: '11.0" Dynamic AMOLED 2X 120Hz (2560x1600)', Processor: 'Snapdragon 8 Gen 2', RAM: '8GB', Storage: '128GB', Battery: '8400mAh 45W' }
    },
    {
      name: 'Samsung Galaxy Tab S9 FE+ 12.4" Wi-Fi (128GB Mint, 8GB RAM with S Pen)',
      slug: 'samsung-galaxy-tab-s9-fe-plus-128gb-mint',
      description: 'Expansive 12.4" 90Hz high-res display with IP68 water & dust resistance, Exynos 1380 processor, bundled water-resistant S Pen, and giant 10,090mAh battery.',
      price: 599.99, discount_price: 499.99, stock: 60, rating: 4.8, num_reviews: 145, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Tab S9 FE+', Display: '12.4" WQXGA 90Hz (2560x1600)', Processor: 'Exynos 1380', RAM: '8GB', Storage: '128GB + MicroSD', Battery: '10,090mAh', Stylus: 'IP68 S Pen Included' }
    },
    {
      name: 'Samsung Galaxy Tab S9 FE 10.9" Wi-Fi (128GB Gray, 6GB RAM with S Pen)',
      slug: 'samsung-galaxy-tab-s9-fe-109-128gb-gray',
      description: 'Portable student & creative tablet with 10.9" 90Hz screen, Vision Booster, dual AKG speakers, IP68 S Pen, and all-day 8000mAh battery.',
      price: 449.99, discount_price: 379.99, stock: 75, rating: 4.8, num_reviews: 180, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Tab S9 FE', Display: '10.9" WUXGA+ 90Hz', Processor: 'Exynos 1380', RAM: '6GB', Storage: '128GB', Battery: '8000mAh' }
    },
    {
      name: 'Samsung Galaxy Tab A9+ 5G 11.0" (128GB Graphite, 8GB RAM)',
      slug: 'samsung-galaxy-tab-a9-plus-128gb-5g',
      description: 'Value entertainment tablet with 11.0" 90Hz WQXGA display, Qualcomm Snapdragon 695 5G processor, quad speakers with Dolby Atmos, and 3-app split screen.',
      price: 289.99, discount_price: 239.99, stock: 90, rating: 4.7, num_reviews: 215, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Tab A9+', Display: '11.0" FHD 90Hz (1920x1200)', Processor: 'Qualcomm Snapdragon 695 5G', RAM: '8GB', Storage: '128GB + MicroSD', Audio: 'Quad Speakers with Dolby Atmos', Battery: '7040mAh' }
    },
    {
      name: 'Samsung Galaxy Tab A9+ Wi-Fi 11.0" (64GB Silver, 4GB RAM)',
      slug: 'samsung-galaxy-tab-a9-plus-64gb-wifi',
      description: 'Family entertainment powerhouse with 11" 90Hz screen, Samsung Kids mode, quad speakers, and slim 6.9mm aluminum body.',
      price: 219.99, discount_price: 179.99, stock: 110, rating: 4.6, num_reviews: 168, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Tab A9+', Display: '11.0" 90Hz Display', Processor: 'Snapdragon 695', RAM: '4GB', Storage: '64GB', Battery: '7040mAh' }
    },
    {
      name: 'Samsung Galaxy Watch Ultra 47mm LTE (Titanium Gray with Marine Band)',
      slug: 'samsung-galaxy-watch-ultra-47mm-gray',
      description: 'Rugged outdoor smartwatch with Grade 4 Titanium cushion frame, 100m water resistance (10 ATM), dual-frequency L1+L5 GPS, Emergency Siren, 3nm Exynos W1000 chip, and up to 100 hours battery.',
      price: 649.99, discount_price: 579.99, stock: 35, rating: 4.9, num_reviews: 124, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Watch Ultra 47mm', Material: 'Grade 4 Titanium + Sapphire Crystal', Display: '1.5" Super AMOLED 3000 nits', Durability: '10 ATM + IP68 + MIL-STD-810H', Processor: 'Exynos W1000 (3nm 5-Core)', Connectivity: 'LTE + Bluetooth 5.3 + GPS L1+L5' }
    },
    {
      name: 'Samsung Galaxy Watch Ultra 47mm LTE (Titanium White with Trail Band)',
      slug: 'samsung-galaxy-watch-ultra-47mm-white',
      description: 'Striking Titanium White chassis with Quick Button custom action triggers, Functional Threshold Power (FTP) cycling metrics, and sleep apnea FDA authorized detection.',
      price: 649.99, discount_price: 579.99, stock: 25, rating: 4.9, num_reviews: 68, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Watch Ultra', Material: 'Titanium Frame', Display: '1.5" AMOLED 3000 nits', Sensors: 'BioActive Sensor (HR, ECG, BIA, AGEs)', Battery: '590mAh' }
    },
    {
      name: 'Samsung Galaxy Watch7 44mm Bluetooth (Green Armor Aluminum)',
      slug: 'samsung-galaxy-watch7-44mm-green',
      description: 'Next-generation AI wellness tracker powered by 3nm processor, dual-frequency GPS, Energy Score AI analysis, heart rate tracking, and 2000 nits bright display.',
      price: 329.99, discount_price: 279.99, stock: 50, rating: 4.8, num_reviews: 95, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Watch7 44mm', Display: '1.5" Super AMOLED Sapphire Crystal', Processor: '3nm Exynos W1000', Health: 'Energy Score, ECG, Bioelectrical Impedance, AGEs', WaterResistance: '5 ATM + IP68' }
    },
    {
      name: 'Samsung Galaxy Watch7 40mm Bluetooth (Cream Aluminum)',
      slug: 'samsung-galaxy-watch7-40mm-cream',
      description: 'Compact 40mm wellness smartwatch with personalized HR zones, gesture controls with Double Pinch, and seamless Wear OS 5 with One UI 6 Watch.',
      price: 299.99, discount_price: 249.99, stock: 55, rating: 4.8, num_reviews: 78, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Watch7 40mm', Display: '1.3" Super AMOLED', Processor: '3nm Exynos W1000', Health: 'AI Health Coaching & Sleep Tracking', Battery: '300mAh' }
    },
    {
      name: 'Samsung Galaxy Watch6 Classic 47mm Bluetooth (Black Stainless Steel Rotating Bezel)',
      slug: 'samsung-galaxy-watch6-classic-47mm-black',
      description: 'Timeless physical rotating bezel smartwatch crafted with 316L stainless steel, sapphire crystal glass, advanced sleep coaching, and ECG blood pressure monitoring.',
      price: 429.99, discount_price: 329.99, stock: 40, rating: 4.8, num_reviews: 185, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1579586337278-3fdfb8f2d561?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1579586337278-3fdfb8f2d561?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Watch6 Classic', Bezel: 'Physical Rotating Bezel', Material: '316L Stainless Steel', Display: '1.5" Super AMOLED', Battery: '425mAh' }
    },
    {
      name: 'Samsung Galaxy Buds3 Pro True Wireless Earbuds (Silver with Blade Lights)',
      slug: 'samsung-galaxy-buds3-pro-silver',
      description: 'Hi-Fi studio audio earbuds with angular Blade Lights, 2-way dual amplifier drivers with planar tweeter, 24-bit 96kHz lossless audio, Adaptive ANC, and live interpreter mode.',
      price: 249.99, discount_price: 209.99, stock: 70, rating: 4.9, num_reviews: 168, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Buds3 Pro', Drivers: 'Enhanced 2-Way (10.5mm Dynamic + 6.1mm Planar)', Codec: 'Samsung Seamless Codec Ultra High Quality 24-bit 96kHz', Lighting: 'Blade Lights with Pinch & Swipe Gestures', ANC: 'Adaptive Noise Control + Voice Detect', Battery: 'Up to 30 Hours with Case' }
    },
    {
      name: 'Samsung Galaxy Buds3 Pro True Wireless Earbuds (White with Blade Lights)',
      slug: 'samsung-galaxy-buds3-pro-white',
      description: 'Pristine White audiophile earbuds featuring dual amplifiers for woofer and tweeter, 360 Audio with direct multi-channel, and IP57 water resistance.',
      price: 249.99, discount_price: 209.99, stock: 65, rating: 4.8, num_reviews: 95, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Buds3 Pro', Drivers: 'Dual Amp 2-Way', Audio: '24-bit/96kHz Lossless', WaterRating: 'IP57', Battery: '30h Total Playtime' }
    },
    {
      name: 'Samsung Galaxy Buds3 Open-Type Wireless Earbuds (Silver)',
      slug: 'samsung-galaxy-buds3-silver',
      description: 'Comfortable open-fit earbuds with 11mm dynamic driver with 1.5x enhanced diaphragm amp, Adaptive EQ with Galaxy AI, and crystal clear call quality with Super Wideband mic.',
      price: 179.99, discount_price: 149.99, stock: 75, rating: 4.7, num_reviews: 82, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Buds3', Fit: 'Open-Type Ergonomic Fit', Driver: '11mm Dynamic Driver', ANC: 'Active Noise Cancellation', Mic: 'Pre-trained DNN Super Wideband Mic' }
    },
    {
      name: 'Samsung Galaxy Buds FE Wireless ANC Earbuds (Graphite)',
      slug: 'samsung-galaxy-buds-fe-graphite',
      description: 'Ergonomic wing-tip earbuds with powerful deep bass, Active Noise Cancellation, Ambient Sound, 3-mic system, and up to 30 hours battery endurance.',
      price: 99.99, discount_price: 79.99, stock: 95, rating: 4.8, num_reviews: 210, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Buds FE', Driver: 'Custom 1-Way Deep Bass', ANC: 'Powerful Active Noise Canceling', Battery: 'Up to 30 Hours', Fit: 'Wing-Tip Grip' }
    },
    {
      name: 'Samsung Galaxy Ring (Titanium Black, Smart Health & Sleep Tracker)',
      slug: 'samsung-galaxy-ring-titanium-black',
      description: 'Ultralight Grade 5 Titanium smart ring with 10 ATM water resistance, 7-day battery life, continuous heart rate telemetry, skin temperature tracking, and AI Energy Score.',
      price: 399.99, discount_price: 379.99, stock: 30, rating: 4.9, num_reviews: 86, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Ring', Material: 'Grade 5 Titanium (Concave Design)', Durability: '10 ATM + IP68 (100m)', Battery: 'Up to 7 Days Single Charge', Sensors: 'Optical Bio-signal, Skin Temp, Accelerometer' }
    },
    {
      name: 'Samsung Galaxy Ring (Titanium Gold, Smart Health & Sleep Tracker)',
      slug: 'samsung-galaxy-ring-titanium-gold',
      description: 'Luxurious Titanium Gold finish smart ring with sleep apnea monitoring, heart rate alert, cycle tracking, and compact charging case.',
      price: 399.99, discount_price: 379.99, stock: 25, rating: 4.9, num_reviews: 64, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Ring', Material: 'Grade 5 Titanium Gold', Battery: '7 Days', Health: 'AI Energy Score & Sleep Apnea' }
    },
    {
      name: 'Samsung Galaxy Ring (Titanium Silver, Smart Health & Sleep Tracker)',
      slug: 'samsung-galaxy-ring-titanium-silver',
      description: 'Clean brushed Titanium Silver smart wellness ring with automatic workout detection, seamless Samsung Health synchronization, and 100m water resistance.',
      price: 399.99, discount_price: 379.99, stock: 28, rating: 4.8, num_reviews: 42, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Ring', Material: 'Grade 5 Titanium Silver', Battery: '7 Days', Durability: '10 ATM Waterproof' }
    },
    {
      name: 'Samsung Galaxy S23+ 5G (512GB Phantom Black, 8GB RAM)',
      slug: 'samsung-galaxy-s23-plus-512gb-black',
      description: 'Expanded 6.6" 120Hz Dynamic AMOLED 2X flagship with Snapdragon 8 Gen 2 for Galaxy, 50MP triple OIS camera, and 4700mAh battery.',
      price: 1049.99, discount_price: 799.99, stock: 35, rating: 4.8, num_reviews: 164, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S23+', Display: '6.6" FHD+ AMOLED 120Hz', Processor: 'Snapdragon 8 Gen 2', RAM: '8GB', Storage: '512GB', Camera: '50MP + 12MP + 10MP', Battery: '4700mAh' }
    },
    {
      name: 'Samsung Galaxy S22 Ultra 5G (256GB Burgundy, 12GB RAM)',
      slug: 'samsung-galaxy-s22-ultra-256gb-burgundy',
      description: 'Iconic Burgundy edition with integrated S Pen, 108MP Pro quad camera system, 100x Space Zoom, and 6.8" Edge QHD+ 120Hz AMOLED.',
      price: 1099.99, discount_price: 699.99, stock: 40, rating: 4.8, num_reviews: 310, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S22 Ultra', Display: '6.8" Edge QHD+ AMOLED 120Hz', Processor: 'Snapdragon 8 Gen 1', RAM: '12GB', Storage: '256GB', Camera: '108MP + 12MP + 10MP + 10MP', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy S22 5G (128GB Phantom White, 8GB RAM)',
      slug: 'samsung-galaxy-s22-128gb-white',
      description: 'Compact 6.1" premium glass & metal smartphone with 120Hz Dynamic AMOLED 2X display, Snapdragon 8 Gen 1, and 50MP Nightography.',
      price: 599.99, discount_price: 399.99, stock: 50, rating: 4.7, num_reviews: 240, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy S22', Display: '6.1" Dynamic AMOLED 2X 120Hz', Processor: 'Snapdragon 8 Gen 1', RAM: '8GB', Storage: '128GB', Camera: '50MP Triple Camera', Battery: '3700mAh' }
    },
    {
      name: 'Samsung Galaxy A54 5G (256GB Awesome Lime, 8GB RAM)',
      slug: 'samsung-galaxy-a54-256gb-lime',
      description: 'Premium glass back mid-ranger with 6.4" 120Hz Super AMOLED screen, 50MP No-Shake OIS camera, and 5000mAh 2-day battery.',
      price: 449.99, discount_price: 329.99, stock: 65, rating: 4.8, num_reviews: 188, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A54', Display: '6.4" FHD+ Super AMOLED 120Hz', Processor: 'Exynos 1380', RAM: '8GB', Storage: '256GB', Camera: '50MP OIS + 12MP + 5MP', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy A34 5G (128GB Awesome Silver, 8GB RAM)',
      slug: 'samsung-galaxy-a34-128gb-silver',
      description: 'Prismatic Awesome Silver finish with 6.6" 120Hz Super AMOLED display, Dimensity 1080 6nm chip, and IP67 water resistance.',
      price: 349.99, discount_price: 269.99, stock: 70, rating: 4.7, num_reviews: 154, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy A34', Display: '6.6" 120Hz Super AMOLED', Processor: 'MediaTek Dimensity 1080', RAM: '8GB', Storage: '128GB', Camera: '48MP OIS + 8MP + 5MP', Battery: '5000mAh' }
    },
    {
      name: 'Samsung Galaxy M14 5G (128GB Berry Blue, 6GB RAM)',
      slug: 'samsung-galaxy-m14-128gb-blue',
      description: 'Heavy duty 6000mAh battery budget 5G phone with 6.6" 90Hz FHD+ screen, Exynos 1330 5nm octa-core CPU, and 50MP triple camera.',
      price: 189.99, discount_price: 149.99, stock: 95, rating: 4.6, num_reviews: 220, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy M14', Display: '6.6" FHD+ 90Hz PLS LCD', Processor: 'Exynos 1330 5nm', RAM: '6GB', Storage: '128GB', Camera: '50MP + 2MP + 2MP', Battery: '6000mAh' }
    },
    {
      name: 'Samsung Galaxy F54 5G (256GB Meteor Blue, 8GB RAM)',
      slug: 'samsung-galaxy-f54-256gb-blue',
      description: 'Flagship tier 108MP No-Shake OIS camera with 6000mAh monster battery, 6.7" 120Hz Super AMOLED+ display, and Nightography video.',
      price: 379.99, discount_price: 299.99, stock: 60, rating: 4.7, num_reviews: 135, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy F54', Display: '6.7" FHD+ Super AMOLED+ 120Hz', Processor: 'Exynos 1380', RAM: '8GB', Storage: '256GB', Camera: '108MP OIS + 8MP + 2MP', Battery: '6000mAh' }
    },
    {
      name: 'Samsung Galaxy Tab S6 Lite 2024 Edition 10.4" (64GB Oxford Gray with S Pen)',
      slug: 'samsung-galaxy-tab-s6-lite-2024-gray',
      description: 'Lightweight student tablet with 10.4" WUXGA+ display, bundled precision S Pen, AKG dual speakers with Dolby Atmos, and One UI 6.',
      price: 329.99, discount_price: 269.99, stock: 85, rating: 4.8, num_reviews: 210, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Tab S6 Lite', Display: '10.4" WUXGA+ (2000x1200)', Processor: 'Exynos 1280 Octa-Core', RAM: '4GB', Storage: '64GB + MicroSD up to 1TB', Stylus: 'S Pen Included', Battery: '7040mAh' }
    },
    {
      name: 'Samsung Galaxy Tab S6 Lite 2024 Edition 10.4" (128GB Chiffon Pink with S Pen)',
      slug: 'samsung-galaxy-tab-s6-lite-2024-pink',
      description: 'Charming Chiffon Pink metal tablet with 128GB storage, magnetic S Pen stylus, Samsung Notes PDF annotation, and metal unibody.',
      price: 379.99, discount_price: 309.99, stock: 70, rating: 4.8, num_reviews: 145, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Series: 'Galaxy Tab S6 Lite', Display: '10.4" Display', Processor: 'Exynos 1280', RAM: '4GB', Storage: '128GB', Stylus: 'S Pen Included' }
    },
    {
      name: 'Samsung Galaxy Book2 Business 14" (Intel Core i7-1260P vPro, 16GB RAM, 512GB SSD, Windows 11 Pro)',
      slug: 'samsung-galaxy-book2-business-i7',
      description: 'Enterprise grade security laptop with Intel vPro 12th Gen Core i7-1260P, hardware tamper alert, IR camera facial recognition, and MIL-STD-810H durability.',
      price: 1399.99, discount_price: 999.99, stock: 30, rating: 4.8, num_reviews: 75, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Book2 Business', Display: '14.0" FHD Anti-Glare (1920x1080)', Processor: 'Intel Core i7-1260P with vPro', RAM: '16GB DDR4', Storage: '512GB NVMe SSD', Security: 'Hardware Tamper Alert + TPM 2.0', OS: 'Windows 11 Pro' }
    },
    {
      name: 'Samsung Galaxy Watch6 44mm Bluetooth (Graphite Aluminum)',
      slug: 'samsung-galaxy-watch6-44mm-graphite',
      description: '20% larger screen with 30% slimmer bezel, sapphire crystal glass, personalized sleep coaching, HR alert, and advanced body composition analysis.',
      price: 299.99, discount_price: 219.99, stock: 65, rating: 4.8, num_reviews: 195, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Watch6 44mm', Display: '1.5" Super AMOLED Sapphire Crystal', Processor: 'Exynos W930 Dual-Core', Battery: '425mAh', WaterResistance: '5 ATM + IP68' }
    },
    {
      name: 'Samsung Galaxy Watch6 40mm Bluetooth (Gold Aluminum)',
      slug: 'samsung-galaxy-watch6-40mm-gold',
      description: 'Dainty Gold finished smartwatch with custom watch faces, women health cycle tracking, ECG, and one-click quick band release system.',
      price: 269.99, discount_price: 189.99, stock: 70, rating: 4.8, num_reviews: 140, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Watch6 40mm', Display: '1.3" Super AMOLED', Material: 'Armor Aluminum', Health: 'Sleep Coaching, BIA & ECG', Battery: '300mAh' }
    },
    {
      name: 'Samsung Galaxy Watch FE 40mm Bluetooth (Black Aluminum)',
      slug: 'samsung-galaxy-watch-fe-40mm-black',
      description: 'Essential wellness companion with Sapphire Crystal glass, Body Composition measurement, personalized heart rate zones, and One UI 5 Watch.',
      price: 199.99, discount_price: 169.99, stock: 80, rating: 4.7, num_reviews: 88, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Samsung', Model: 'Galaxy Watch FE', Display: '1.2" Super AMOLED Sapphire Crystal', Processor: 'Exynos W920', Durability: '5 ATM + IP68 + MIL-STD-810H', Battery: '247mAh' }
    }
  ];

  // Combine and assign category_id
  const allDevices = [...mobileModels, ...laptopModels, ...tabletAndWearables];
  
  return allDevices.map((d) => ({
    ...d,
    category_id: categoryId
  }));
};
