// Department and Category Product Previews Metadata
// Provides verified high-resolution department photos, sample products inside each department, and category highlights

export const DEPARTMENT_METADATA = {
  'electronics': {
    name: 'Electronics & Tech',
    banner: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Laptops, Flagship Smartphones, Audio & Next-Gen Gadgets',
    accentColor: 'indigo',
    insideHighlights: ['Smartphones', 'Laptops & MacBooks', 'Hi-Res Audio', 'Smart Watches', '4K Cameras'],
    sampleProducts: [
      {
        name: 'Samsung Galaxy S24 Ultra AI Titanium',
        price: 1199.99,
        originalPrice: 1299.99,
        badge: 'Galaxy AI',
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Apple iPhone 16 Pro Max (Titanium)',
        price: 1199.99,
        originalPrice: 1299.99,
        badge: 'A18 Pro',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Sony WH-1000XM5 ANC Headphones',
        price: 349.99,
        originalPrice: 399.99,
        badge: 'Spatial Audio',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Apple MacBook Pro 16" M3 Max',
        price: 2499.00,
        originalPrice: 2699.00,
        badge: 'M3 Max',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'fashion-apparel': {
    name: 'Fashion & Apparel',
    banner: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Designer Streetwear, Knitwear, Leather Shoes & Luxury Bags',
    accentColor: 'pink',
    insideHighlights: ['Merino Knitwear', 'Italian Sneakers', 'Denim Jackets', 'Leather Bags', 'Tailored Blazers'],
    sampleProducts: [
      {
        name: 'Merino Wool Knit Oversized Cardigan',
        price: 119.00,
        originalPrice: 145.00,
        badge: '100% Merino',
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Handcrafted Italian Leather Sneakers',
        price: 149.00,
        originalPrice: 189.00,
        badge: 'Handmade',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Vintage Washed Selvedge Denim Jacket',
        price: 139.00,
        originalPrice: 169.00,
        badge: 'Selvedge',
        image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Tuscan Leather Crossbody Bag',
        price: 189.00,
        originalPrice: 220.00,
        badge: 'Italian Leather',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'home-living': {
    name: 'Home & Living',
    banner: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Minimalist Furniture, Handcrafted Ceramics & Smart Lighting',
    accentColor: 'amber',
    insideHighlights: ['Nordic Table Lamps', 'Ceramic Coffee Sets', 'Smart Floor Lamps', 'Dyson Vacuums', 'Linen Decor'],
    sampleProducts: [
      {
        name: 'Nordic Minimalist Ceramic Table Lamp',
        price: 89.00,
        originalPrice: 110.00,
        badge: 'Ceramic',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Nordic Ceramic Handcrafted Coffee Set',
        price: 59.99,
        originalPrice: 79.99,
        badge: 'Artisanal',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'AuraGlow Smart Ambient Floor Lamp',
        price: 119.00,
        originalPrice: 149.00,
        badge: 'Smart RGB',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Dyson Gen5detect Cordless Vacuum',
        price: 849.99,
        originalPrice: 949.99,
        badge: 'Laser Detect',
        image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'beauty-care': {
    name: 'Beauty & Skincare',
    banner: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Botanical Serums, Luxury Perfumes, Plumping Creams & Salon Care',
    accentColor: 'rose',
    insideHighlights: ['Radiance Face Serums', 'Velvet Rose Perfume', 'Hyaluronic Creams', 'Argan Hair Oils', 'Organic Cleansers'],
    sampleProducts: [
      {
        name: 'Botanical Glow Radiance Facial Serum',
        price: 45.00,
        originalPrice: 58.00,
        badge: 'Clean Beauty',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Velvet Rose Eau De Parfum (100ml)',
        price: 79.00,
        originalPrice: 95.00,
        badge: 'French Rose',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'LuxeHydra Hyaluronic Acid Plumping Cream',
        price: 41.50,
        originalPrice: 52.00,
        badge: 'Deep Hydration',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Salon Argan Elixir Hair Treatment Oil',
        price: 34.00,
        originalPrice: 42.00,
        badge: 'Pure Argan',
        image: 'https://images.unsplash.com/photo-1608248597359-2470e94bb55c?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'sports-outdoors': {
    name: 'Sports & Fitness',
    banner: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Professional Yoga Mats, Steel Bottles, Jump Ropes & Activewear',
    accentColor: 'emerald',
    insideHighlights: ['Eco Yoga Mats', 'Insulated Bottles', 'Speed Jump Ropes', 'Nike Pegasus 40', 'Dumbbell Sets'],
    sampleProducts: [
      {
        name: 'HydroShield Vacuum Steel Bottle (1L)',
        price: 27.99,
        originalPrice: 34.99,
        badge: '24h Cold',
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'ProGrip Non-Slip Eco Yoga Mat',
        price: 52.00,
        originalPrice: 68.00,
        badge: 'Eco Rubber',
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Apex Speed Rope Pro (Ball-Bearing)',
        price: 24.99,
        originalPrice: 34.99,
        badge: 'Ultra Fast',
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Nike Air Zoom Pegasus 40 Shoes',
        price: 119.99,
        originalPrice: 139.99,
        badge: 'Zoom Air',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'books-stationery': {
    name: 'Books & Stationery',
    banner: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Leatherbound Journals, Brass Pens, Bestsellers & Kindle E-Readers',
    accentColor: 'sky',
    insideHighlights: ['Hardcover Journals', 'Executive Pens', 'Atomic Habits Bundle', 'Kindle Paperwhite', 'Desk Organizers'],
    sampleProducts: [
      {
        name: 'Leatherbound Dot-Grid Hardcover Journal',
        price: 22.50,
        originalPrice: 28.00,
        badge: '160 GSM Paper',
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Atomic Habits Collector Bundle',
        price: 39.99,
        originalPrice: 49.99,
        badge: 'Bestseller',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Executive Brass Fountain Pen & Ink Set',
        price: 44.00,
        originalPrice: 58.00,
        badge: 'Solid Brass',
        image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Amazon Kindle Paperwhite Signature 32GB',
        price: 159.99,
        originalPrice: 189.99,
        badge: '300 PPI',
        image: 'https://images.unsplash.com/photo-1592496001020-d31bd830651f?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'gaming-consoles': {
    name: 'Gaming & Consoles',
    banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    tagline: 'PS5 Pro, Xbox Series X, RGB Keyboards & Pro Gaming Mice',
    accentColor: 'purple',
    insideHighlights: ['Mechanical RGB Keyboards', 'Wireless Gaming Mice', 'PS5 Pro Consoles', 'Xbox Series X', 'Gaming Headsets'],
    sampleProducts: [
      {
        name: 'NexusFlow Mechanical RGB Keyboard',
        price: 129.99,
        originalPrice: 159.99,
        badge: 'Hot-Swap',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Vortex Elite Wireless Pro Gaming Mouse',
        price: 69.99,
        originalPrice: 89.99,
        badge: '26K DPI',
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Sony PlayStation 5 Pro Digital Console 2TB',
        price: 649.99,
        originalPrice: 699.99,
        badge: '2TB SSD',
        image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Microsoft Xbox Series X 1TB Console',
        price: 449.99,
        originalPrice: 499.99,
        badge: '4K 120FPS',
        image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'watches-jewelry': {
    name: 'Watches & Jewelry',
    banner: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Rolex Heritage Chronographs, 18K Gold Pendants & Fine Rings',
    accentColor: 'amber',
    insideHighlights: ['Rolex Submariner', '18K Gold Pendants', 'Lumix Chronographs', 'Diamond Solitaires', 'Titanium Rings'],
    sampleProducts: [
      {
        name: 'Rolex Submariner No-Date 41mm Oystersteel',
        price: 8650.00,
        originalPrice: 9100.00,
        badge: 'Swiss Made',
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Starlight 18K Gold Plated Pendant Necklace',
        price: 65.00,
        originalPrice: 85.00,
        badge: '18K Gold',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Lumix Alpha Minimalist Chronograph Watch',
        price: 149.00,
        originalPrice: 189.00,
        badge: 'Sapphire Glass',
        image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Rolex Submariner Date 41mm Black Dial',
        price: 9750.00,
        originalPrice: 10250.00,
        badge: 'Cerachrom',
        image: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'health-wellness': {
    name: 'Health & Wellness',
    banner: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    tagline: 'TheraPulse Massage Guns, Organic Uji Matcha & Posture Ergonomics',
    accentColor: 'teal',
    insideHighlights: ['TheraPulse Massage Pro', 'Uji Ceremonial Matcha', 'Posture Align Belts', 'Aroma Diffusers', 'Herbal Teas'],
    sampleProducts: [
      {
        name: 'TheraPulse Deep Tissue Massage Gun Pro',
        price: 109.99,
        originalPrice: 139.99,
        badge: 'Percussive Pro',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Organic Ceremonial Grade Uji Matcha (100g)',
        price: 28.00,
        originalPrice: 36.00,
        badge: 'First Harvest',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'PostureAlign Ergonomic Spinal Support',
        price: 39.99,
        originalPrice: 49.99,
        badge: 'Orthopedic',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Ultrasonic Essential Oil Diffuser (500ml)',
        price: 49.00,
        originalPrice: 62.00,
        badge: 'BPA Free',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  'groceries-gourmet': {
    name: 'Groceries & Gourmet',
    banner: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Single-Origin Coffee, Tuscan Olive Oil, Wild Honey & Dark Chocolate',
    accentColor: 'orange',
    insideHighlights: ['Ethiopian Coffee Beans', 'Tuscan Olive Oil', 'Himalayan Raw Honey', 'Belgian Dark Truffles', 'Artisanal Teas'],
    sampleProducts: [
      {
        name: 'Ethiopian Yirgacheffe Coffee Beans (1kg)',
        price: 26.50,
        originalPrice: 32.50,
        badge: 'Single Origin',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Cold-Pressed Tuscan Extra Virgin Olive Oil',
        price: 22.99,
        originalPrice: 29.99,
        badge: 'DOP Tuscany',
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Pure Raw Himalayan Wildflower Honey (500g)',
        price: 14.99,
        originalPrice: 18.99,
        badge: '100% Raw',
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Belgian 85% Dark Chocolate Truffles Box',
        price: 22.00,
        originalPrice: 28.50,
        badge: 'Chocolatier',
        image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
};

export const getDepartmentMeta = (slug) => {
  return DEPARTMENT_METADATA[slug] || {
    name: 'Shopping Department',
    banner: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Curated premium essentials and top-rated products',
    accentColor: 'indigo',
    insideHighlights: ['Top Rated', 'Verified Authentic', 'Fast Delivery'],
    sampleProducts: []
  };
};
