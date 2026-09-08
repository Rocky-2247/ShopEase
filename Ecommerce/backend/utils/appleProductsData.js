// Comprehensive dataset of 120+ Official Apple Store Devices (iPhones, MacBooks, iPads, Apple Watches, AirPods, Displays, Vision Pro & Official Accessories)

export const getAppleProducts = (categoryId) => {
  // 1. iPhones (Flagship, Pro, Plus, Standard, mini & SE) - 42 SKUs
  const iphones = [
    // --- iPhone 16 Pro Max Series (6 SKUs) ---
    {
      name: 'Apple iPhone 16 Pro Max (256GB Desert Titanium)',
      slug: 'apple-iphone-16-pro-max-256gb-desert',
      description: 'Stunning Grade 5 Titanium design with 6.9" Super Retina XDR ProMotion 120Hz display, A18 Pro chip with Apple Intelligence, Camera Control button, 48MP Fusion camera, and 5x optical telephoto zoom.',
      price: 1199.00, discount_price: 1149.00, stock: 45, rating: 4.9, num_reviews: 230, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Pro Max', Display: '6.9" Super Retina XDR OLED ProMotion (120Hz)', Chip: 'A18 Pro with 6-core GPU & 16-core NPU', Storage: '256GB NVMe', Camera: '48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto', Video: '4K 120 fps Dolby Vision HDR', Battery: 'Up to 33 Hours Video Playback' }
    },
    {
      name: 'Apple iPhone 16 Pro Max (512GB Desert Titanium)',
      slug: 'apple-iphone-16-pro-max-512gb-desert',
      description: 'Luminous Desert Titanium finish with 512GB storage, Studio-quality 4-mic array, Audio Mix spatial audio editor, and ultra-fast USB 3 transfer speeds up to 10Gb/s.',
      price: 1399.00, discount_price: 1329.00, stock: 35, rating: 4.9, num_reviews: 165, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Pro Max', Display: '6.9" ProMotion OLED 2000 nits', Chip: 'A18 Pro', Storage: '512GB', Camera: '48MP Triple Pro Camera', Port: 'USB-C (USB 3 10Gbps)' }
    },
    {
      name: 'Apple iPhone 16 Pro Max (512GB Natural Titanium)',
      slug: 'apple-iphone-16-pro-max-512gb-natural',
      description: 'Raw Natural Titanium finish with 512GB storage, Studio-quality 4-mic array, Audio Mix spatial audio editor, and ultra-fast USB 3 transfer speeds up to 10Gb/s.',
      price: 1399.00, discount_price: 1329.00, stock: 35, rating: 4.9, num_reviews: 185, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Pro Max', Display: '6.9" ProMotion OLED 2000 nits', Chip: 'A18 Pro', Storage: '512GB', Camera: '48MP Triple Pro Camera', Port: 'USB-C (USB 3 10Gbps)' }
    },
    {
      name: 'Apple iPhone 16 Pro Max (1TB Black Titanium)',
      slug: 'apple-iphone-16-pro-max-1tb-black',
      description: 'Ultimate power flagship in Deep Black Titanium with 1TB capacity for ProRes 4K 120fps direct external recording, Ceramic Shield front, and Apple Intelligence.',
      price: 1599.00, discount_price: 1519.00, stock: 20, rating: 5.0, num_reviews: 110, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Pro Max', Display: '6.9" 120Hz Always-On OLED', Chip: 'A18 Pro', Storage: '1TB', Camera: '48MP Pro System with LiDAR', Battery: 'Up to 33h Battery' }
    },
    {
      name: 'Apple iPhone 16 Pro Max (1TB Desert Titanium)',
      slug: 'apple-iphone-16-pro-max-1tb-desert',
      description: 'Maxed 1TB Desert Titanium edition built for professional video creators, supporting ACES color workflows and external SSD capture.',
      price: 1599.00, discount_price: 1519.00, stock: 15, rating: 5.0, num_reviews: 80, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Pro Max', Display: '6.9" ProMotion OLED', Chip: 'A18 Pro', Storage: '1TB', Camera: '48MP Triple Lens with 5x Optical' }
    },
    {
      name: 'Apple iPhone 16 Pro Max (256GB White Titanium)',
      slug: 'apple-iphone-16-pro-max-256gb-white',
      description: 'Pristine White Titanium chassis with Camera Control sapphire crystal switch, Action Button customization, and next-gen Ceramic Shield 2x tougher than any smartphone glass.',
      price: 1199.00, discount_price: 1149.00, stock: 40, rating: 4.9, num_reviews: 142, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Pro Max', Display: '6.9" Super Retina XDR', Chip: 'A18 Pro', Storage: '256GB', Camera: '48MP Fusion + 48MP Ultra Wide', Charging: 'MagSafe 25W Fast Wireless' }
    },

    // --- iPhone 16 Pro Series (5 SKUs) ---
    {
      name: 'Apple iPhone 16 Pro (128GB Desert Titanium)',
      slug: 'apple-iphone-16-pro-128gb-desert',
      description: 'Pro performance in a 6.3" titanium format. A18 Pro chip, 5x optical telephoto prism, 48MP Macro photography, and Apple Intelligence generative writing tools.',
      price: 999.00, discount_price: 949.00, stock: 50, rating: 4.9, num_reviews: 175, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Pro', Display: '6.3" Super Retina XDR OLED ProMotion (120Hz)', Chip: 'A18 Pro 3nm', Storage: '128GB', Camera: '48MP + 48MP + 12MP 5x Zoom', Battery: 'Up to 27 Hours Video Playback' }
    },
    {
      name: 'Apple iPhone 16 Pro (256GB Desert Titanium)',
      slug: 'apple-iphone-16-pro-256gb-desert',
      description: 'Desert Titanium 256GB pro model featuring Camera Control, hardware ray-tracing, 4K 120fps Dolby Vision recording, and 5x tetraprism optical zoom.',
      price: 1099.00, discount_price: 1039.00, stock: 45, rating: 4.9, num_reviews: 140, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Pro', Display: '6.3" ProMotion 120Hz', Chip: 'A18 Pro', Storage: '256GB', Camera: '48MP Triple Pro Lens' }
    },
    {
      name: 'Apple iPhone 16 Pro (256GB Black Titanium)',
      slug: 'apple-iphone-16-pro-256gb-black',
      description: 'Matte textured Black Titanium with 256GB storage, hardware-accelerated ray tracing for AAA console gaming, and Wi-Fi 7 connectivity.',
      price: 1099.00, discount_price: 1039.00, stock: 45, rating: 4.9, num_reviews: 130, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Pro', Display: '6.3" ProMotion 120Hz', Chip: 'A18 Pro', Storage: '256GB', Camera: '48MP Fusion Triple Camera', Port: 'USB-C 10Gbps' }
    },
    {
      name: 'Apple iPhone 16 Pro (512GB Natural Titanium)',
      slug: 'apple-iphone-16-pro-512gb-natural',
      description: 'Earthy Natural Titanium pro phone with 512GB memory, 4K 120fps slow-motion capture, Photographic Styles v2, and Emergency SOS via satellite.',
      price: 1299.00, discount_price: 1229.00, stock: 35, rating: 4.9, num_reviews: 94, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Pro', Display: '6.3" 120Hz OLED Always-On', Chip: 'A18 Pro', Storage: '512GB', Camera: '48MP Pro Camera System', Battery: 'Up to 27 Hours' }
    },
    {
      name: 'Apple iPhone 16 Pro (1TB White Titanium)',
      slug: 'apple-iphone-16-pro-1tb-white',
      description: 'Maximum 1TB White Titanium pro model for filmmakers and power users with ProRes Log recording, ACES color workflow, and Spatial Audio recording.',
      price: 1499.00, discount_price: 1419.00, stock: 20, rating: 5.0, num_reviews: 62, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Pro', Display: '6.3" Super Retina XDR', Chip: 'A18 Pro', Storage: '1TB', Camera: '48MP Triple Lens with LiDAR', OS: 'iOS 18 with Apple Intelligence' }
    },

    // --- iPhone 16 & 16 Plus Series (9 SKUs) ---
    {
      name: 'Apple iPhone 16 (128GB Ultramarine Blue)',
      slug: 'apple-iphone-16-128gb-ultramarine',
      description: 'Striking vibrant Ultramarine color-infused back glass with Camera Control, Action Button, 48MP Fusion 2-in-1 camera with 2x optical quality telephoto, and A18 chip.',
      price: 799.00, discount_price: 749.00, stock: 65, rating: 4.8, num_reviews: 198, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16', Display: '6.1" Super Retina XDR OLED (2000 nits peak)', Chip: 'A18 (6-core CPU, 5-core GPU, 16-core NPU)', Storage: '128GB', Camera: '48MP Fusion + 12MP Ultra Wide with Macro', Controls: 'Camera Control & Action Button', Battery: 'Up to 22 Hours' }
    },
    {
      name: 'Apple iPhone 16 (256GB Teal)',
      slug: 'apple-iphone-16-256gb-teal',
      description: 'Refreshing Teal finish with 256GB storage, Spatial Photos and Videos capture for Apple Vision Pro, Dynamic Island, and USB-C.',
      price: 899.00, discount_price: 849.00, stock: 55, rating: 4.8, num_reviews: 145, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16', Display: '6.1" Super Retina XDR', Chip: 'A18', Storage: '256GB', Camera: '48MP Fusion Dual Camera', Battery: '22h Video' }
    },
    {
      name: 'Apple iPhone 16 (128GB Pink)',
      slug: 'apple-iphone-16-128gb-pink',
      description: 'Vivid Pink aerospace-grade aluminum smartphone with Camera Control visual intelligence, crash detection, and MagSafe charging.',
      price: 799.00, discount_price: 749.00, stock: 60, rating: 4.8, num_reviews: 160, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16', Display: '6.1" OLED 2000 nits', Chip: 'A18', Storage: '128GB', Camera: '48MP Fusion + 12MP Ultra Wide', Color: 'Pink' }
    },
    {
      name: 'Apple iPhone 16 (128GB White)',
      slug: 'apple-iphone-16-128gb-white',
      description: 'Crisp minimal White finish with color-infused glass, Ceramic Shield, A18 3nm processor, and 48MP high-resolution camera.',
      price: 799.00, discount_price: 749.00, stock: 50, rating: 4.8, num_reviews: 120, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16', Display: '6.1" Super Retina XDR', Chip: 'A18', Storage: '128GB', Color: 'White' }
    },
    {
      name: 'Apple iPhone 16 (512GB Black)',
      slug: 'apple-iphone-16-512gb-black',
      description: 'Sleek Midnight Black finish with generous 512GB internal storage, Ceramic Shield glass, Wi-Fi 7, and Apple Intelligence writing assistance.',
      price: 1099.00, discount_price: 1029.00, stock: 35, rating: 4.8, num_reviews: 78, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16', Display: '6.1" Super Retina XDR', Chip: 'A18', Storage: '512GB', Camera: '48MP Fusion Dual Camera', Battery: 'Up to 22 Hours' }
    },
    {
      name: 'Apple iPhone 16 Plus (128GB Ultramarine Blue)',
      slug: 'apple-iphone-16-plus-128gb-ultramarine',
      description: 'Large 6.7" Super Retina XDR display with extended 27-hour battery life, A18 3nm processor, Camera Control, and vibrant color-infused glass back.',
      price: 899.00, discount_price: 849.00, stock: 50, rating: 4.8, num_reviews: 135, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Plus', Display: '6.7" Super Retina XDR OLED (2000 nits)', Chip: 'A18 Chip', Storage: '128GB', Camera: '48MP Fusion + 12MP Ultra Wide', Battery: 'Up to 27 Hours Video Playback' }
    },
    {
      name: 'Apple iPhone 16 Plus (128GB Black)',
      slug: 'apple-iphone-16-plus-128gb-black',
      description: 'Matte Black 6.7" large format phone with 27-hour endurance, Action Button, 48MP Fusion camera, and A18 processor.',
      price: 899.00, discount_price: 849.00, stock: 50, rating: 4.8, num_reviews: 105, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Plus', Display: '6.7" OLED', Chip: 'A18', Storage: '128GB', Color: 'Black' }
    },
    {
      name: 'Apple iPhone 16 Plus (256GB Teal)',
      slug: 'apple-iphone-16-plus-256gb-teal',
      description: 'Big screen Teal plus phone with 256GB capacity, Action Button shortcuts, 48MP high resolution sensor, and 2x optical quality zoom.',
      price: 999.00, discount_price: 939.00, stock: 45, rating: 4.8, num_reviews: 88, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Plus', Display: '6.7" OLED 2000 nits', Chip: 'A18', Storage: '256GB', Camera: '48MP Dual Camera', Battery: '27h Battery' }
    },
    {
      name: 'Apple iPhone 16 Plus (512GB Black)',
      slug: 'apple-iphone-16-plus-512gb-black',
      description: 'Max capacity 512GB iPhone 16 Plus with all-weekend battery life, 48MP portrait mode with focus and depth control, and IP68 water rating.',
      price: 1199.00, discount_price: 1129.00, stock: 30, rating: 4.9, num_reviews: 56, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 16 Plus', Display: '6.7" Super Retina XDR', Chip: 'A18', Storage: '512GB', Camera: '48MP Dual Camera', Battery: 'Up to 27 Hours' }
    },

    // --- iPhone 15 Pro & 15 Series (12 SKUs) ---
    {
      name: 'Apple iPhone 15 Pro Max (256GB Blue Titanium)',
      slug: 'apple-iphone-15-pro-max-256gb-blue',
      description: 'Grade 5 Titanium smartphone with 6.7" 120Hz ProMotion screen, A17 Pro 3nm chip, 5x telephoto optical zoom, Action Button, and USB-C.',
      price: 1099.00, discount_price: 999.00, stock: 45, rating: 4.9, num_reviews: 285, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 15 Pro Max', Display: '6.7" Super Retina XDR ProMotion 120Hz', Chip: 'A17 Pro 3nm', Storage: '256GB', Camera: '48MP + 12MP + 12MP 5x Zoom', Battery: 'Up to 29 Hours' }
    },
    {
      name: 'Apple iPhone 15 Pro Max (512GB Natural Titanium)',
      slug: 'apple-iphone-15-pro-max-512gb-natural',
      description: 'Iconic Natural Titanium finish with 512GB storage, ProRes video log, console gaming with ray tracing, and lightweight aerospace build.',
      price: 1299.00, discount_price: 1169.00, stock: 35, rating: 4.9, num_reviews: 210, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 15 Pro Max', Display: '6.7" OLED 120Hz', Chip: 'A17 Pro', Storage: '512GB', Camera: '48MP Pro Triple Camera', Battery: '29h Battery' }
    },
    {
      name: 'Apple iPhone 15 Pro Max (1TB Black Titanium)',
      slug: 'apple-iphone-15-pro-max-1tb-black',
      description: 'Top-tier 1TB iPhone 15 Pro Max in Black Titanium, featuring 4K 60fps ProRes recording directly to USB-C drives and titanium durability.',
      price: 1499.00, discount_price: 1349.00, stock: 25, rating: 4.9, num_reviews: 130, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 15 Pro Max', Display: '6.7" ProMotion OLED', Chip: 'A17 Pro', Storage: '1TB', Camera: '48MP 5x Optical Zoom' }
    },
    {
      name: 'Apple iPhone 15 Pro (128GB Black Titanium)',
      slug: 'apple-iphone-15-pro-128gb-black',
      description: 'Handy 6.1" ProMotion 120Hz display with A17 Pro processor, 48MP main camera with customizable default focal lengths, and Action Button.',
      price: 899.00, discount_price: 819.00, stock: 55, rating: 4.8, num_reviews: 240, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 15 Pro', Display: '6.1" Super Retina XDR 120Hz', Chip: 'A17 Pro', Storage: '128GB', Camera: '48MP + 12MP + 12MP 3x Zoom', Port: 'USB-C 10Gbps' }
    },
    {
      name: 'Apple iPhone 15 Pro (256GB White Titanium)',
      slug: 'apple-iphone-15-pro-256gb-white',
      description: 'Crisp White Titanium chassis with 256GB storage, spatial video recording for Vision Pro, and Ceramic Shield protection.',
      price: 999.00, discount_price: 899.00, stock: 45, rating: 4.8, num_reviews: 165, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 15 Pro', Display: '6.1" 120Hz OLED', Chip: 'A17 Pro', Storage: '256GB', Camera: '48MP Triple Lens', Battery: 'Up to 23 Hours' }
    },
    {
      name: 'Apple iPhone 15 Pro (512GB Natural Titanium)',
      slug: 'apple-iphone-15-pro-512gb-natural',
      description: 'Natural Titanium 512GB pro compact smartphone with ray tracing GPU, 3x telephoto optical zoom, and always-on display.',
      price: 1199.00, discount_price: 1079.00, stock: 35, rating: 4.9, num_reviews: 110, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 15 Pro', Display: '6.1" OLED 120Hz', Chip: 'A17 Pro', Storage: '512GB', Camera: '48MP Pro System' }
    },
    {
      name: 'Apple iPhone 15 (128GB Pink)',
      slug: 'apple-iphone-15-128gb-pink',
      description: 'Popular pastel Pink color-infused glass smartphone with Dynamic Island, 48MP Main camera with 2x Telephoto, A16 Bionic chip, and USB-C.',
      price: 699.00, discount_price: 629.00, stock: 80, rating: 4.8, num_reviews: 310, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 15', Display: '6.1" Super Retina XDR OLED (2000 nits)', Chip: 'A16 Bionic', Storage: '128GB', Camera: '48MP Main + 12MP Ultra Wide', Port: 'USB-C Charging' }
    },
    {
      name: 'Apple iPhone 15 (128GB Black)',
      slug: 'apple-iphone-15-128gb-black',
      description: 'Stealth Black matte glass finish with Dynamic Island, next-generation portraits with focus and depth control, and all-day battery.',
      price: 699.00, discount_price: 629.00, stock: 90, rating: 4.8, num_reviews: 260, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 15', Display: '6.1" OLED', Chip: 'A16 Bionic', Storage: '128GB', Camera: '48MP Dual Camera', Battery: 'Up to 20 Hours' }
    },
    {
      name: 'Apple iPhone 15 (256GB Blue)',
      slug: 'apple-iphone-15-256gb-blue',
      description: 'Subtle frost Blue glass with 256GB storage, 48MP super-high-resolution photos, 2x telephoto crop, and USB-C port.',
      price: 799.00, discount_price: 719.00, stock: 70, rating: 4.8, num_reviews: 175, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 15', Display: '6.1" Super Retina XDR', Chip: 'A16 Bionic', Storage: '256GB', Camera: '48MP + 12MP', Battery: '20h Video' }
    },
    {
      name: 'Apple iPhone 15 (256GB Green)',
      slug: 'apple-iphone-15-256gb-green',
      description: 'Soft Mint Green design with 256GB storage, Precision Finding for Find My friends, Roadside Assistance via satellite, and MagSafe.',
      price: 799.00, discount_price: 719.00, stock: 60, rating: 4.8, num_reviews: 128, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 15', Display: '6.1" OLED', Chip: 'A16 Bionic', Storage: '256GB', Camera: '48MP Dual Camera', Color: 'Green' }
    },
    {
      name: 'Apple iPhone 15 Plus (128GB Pink)',
      slug: 'apple-iphone-15-plus-128gb-pink',
      description: 'Large 6.7" Super Retina XDR display with incredible 26-hour battery endurance, Dynamic Island, and 48MP main sensor.',
      price: 799.00, discount_price: 729.00, stock: 55, rating: 4.8, num_reviews: 190, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 15 Plus', Display: '6.7" OLED (2000 nits)', Chip: 'A16 Bionic', Storage: '128GB', Camera: '48MP Dual Camera', Battery: 'Up to 26 Hours' }
    },
    {
      name: 'Apple iPhone 15 Plus (256GB Black)',
      slug: 'apple-iphone-15-plus-256gb-black',
      description: 'Big battery champion in Matte Black with 256GB storage, 6.7" OLED screen, USB-C convenience, and Ceramic Shield.',
      price: 899.00, discount_price: 819.00, stock: 45, rating: 4.8, num_reviews: 115, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 15 Plus', Display: '6.7" Super Retina XDR', Chip: 'A16 Bionic', Storage: '256GB', Camera: '48MP Main Camera', Battery: '26h Battery' }
    },

    // --- iPhone 14 & 14 Plus Series (4 SKUs) ---
    {
      name: 'Apple iPhone 14 (128GB Midnight)',
      slug: 'apple-iphone-14-128gb-midnight',
      description: 'Durable and capable with 6.1" OLED display, A15 Bionic chip with 5-core GPU, Photonic Engine night photos, and Cinematic mode 4K.',
      price: 599.00, discount_price: 529.00, stock: 85, rating: 4.7, num_reviews: 340, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 14', Display: '6.1" Super Retina XDR', Chip: 'A15 Bionic (5-core GPU)', Storage: '128GB', Camera: '12MP Dual Camera System', Battery: 'Up to 20 Hours' }
    },
    {
      name: 'Apple iPhone 14 (128GB Starlight)',
      slug: 'apple-iphone-14-128gb-starlight',
      description: 'Warm silver Starlight finish with Crash Detection, Action Mode gimbal-like video stabilization, and MagSafe wireless ecosystem.',
      price: 599.00, discount_price: 529.00, stock: 75, rating: 4.7, num_reviews: 215, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 14', Display: '6.1" OLED', Chip: 'A15 Bionic', Storage: '128GB', Camera: '12MP Dual Camera', Color: 'Starlight' }
    },
    {
      name: 'Apple iPhone 14 Plus (128GB Midnight)',
      slug: 'apple-iphone-14-plus-128gb-midnight',
      description: 'Huge 6.7" OLED display with industry-leading battery life, A15 Bionic chip with 5-core GPU, and dual 12MP camera with Photonic Engine.',
      price: 699.00, discount_price: 619.00, stock: 60, rating: 4.7, num_reviews: 170, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 14 Plus', Display: '6.7" Super Retina XDR', Chip: 'A15 Bionic', Storage: '128GB', Battery: 'Up to 26h Video' }
    },
    {
      name: 'Apple iPhone 14 Plus (256GB Blue)',
      slug: 'apple-iphone-14-plus-256gb-blue',
      description: 'Airy light blue 6.7" iPhone 14 Plus with 256GB storage, Emergency SOS satellite messaging, and IP68 waterproof design.',
      price: 799.00, discount_price: 709.00, stock: 50, rating: 4.7, num_reviews: 110, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 14 Plus', Display: '6.7" OLED', Chip: 'A15 Bionic', Storage: '256GB', Color: 'Blue' }
    },

    // --- iPhone 13, 13 mini & SE Series (6 SKUs) ---
    {
      name: 'Apple iPhone 13 (128GB Midnight)',
      slug: 'apple-iphone-13-128gb-midnight',
      description: 'Super-bright 6.1" Super Retina XDR display, A15 Bionic chip, diagonal 12MP dual camera system with sensor-shift OIS, and exceptional value.',
      price: 499.00, discount_price: 449.00, stock: 95, rating: 4.8, num_reviews: 420, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 13', Display: '6.1" Super Retina XDR OLED', Chip: 'A15 Bionic', Storage: '128GB', Camera: '12MP Dual Camera with OIS', Battery: 'Up to 19 Hours' }
    },
    {
      name: 'Apple iPhone 13 (128GB Starlight)',
      slug: 'apple-iphone-13-128gb-starlight',
      description: 'Timeless Starlight design with Ceramic Shield front glass, IP68 water resistance, and 5G connectivity.',
      price: 499.00, discount_price: 449.00, stock: 80, rating: 4.8, num_reviews: 290, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 13', Display: '6.1" OLED', Chip: 'A15 Bionic', Storage: '128GB', Camera: '12MP Dual Camera', Color: 'Starlight' }
    },
    {
      name: 'Apple iPhone 13 mini (128GB Midnight)',
      slug: 'apple-iphone-13-mini-128gb-midnight',
      description: 'Ultra-compact 5.4" pocket powerhouse with full flagship A15 Bionic chip, sensor-shift optical image stabilization, and Ceramic Shield.',
      price: 449.00, discount_price: 399.00, stock: 55, rating: 4.8, num_reviews: 210, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone 13 mini', Display: '5.4" Super Retina XDR OLED', Chip: 'A15 Bionic', Storage: '128GB', Weight: '141 g' }
    },
    {
      name: 'Apple iPhone SE 3rd Gen (64GB Midnight, 5G)',
      slug: 'apple-iphone-se-64gb-midnight',
      description: 'Compact 4.7" pocket-friendly design with Touch ID home button, A15 Bionic chip, 5G cellular speed, and wireless charging.',
      price: 429.00, discount_price: 379.00, stock: 70, rating: 4.6, num_reviews: 180, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone SE (3rd Gen)', Display: '4.7" Retina HD with True Tone', Chip: 'A15 Bionic', Storage: '64GB', Security: 'Touch ID Fingerprint Sensor', Connectivity: '5G' }
    },
    {
      name: 'Apple iPhone SE 3rd Gen (128GB Starlight, 5G)',
      slug: 'apple-iphone-se-128gb-starlight',
      description: 'Classic Home Button iPhone with 128GB storage, Smart HDR 4 photography, Portrait Mode, and durable glass front and back.',
      price: 479.00, discount_price: 419.00, stock: 65, rating: 4.6, num_reviews: 125, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone SE (3rd Gen)', Display: '4.7" Retina HD', Chip: 'A15 Bionic', Storage: '128GB', Security: 'Touch ID', Battery: 'Up to 15h Video' }
    },
    {
      name: 'Apple iPhone SE 3rd Gen (256GB (PRODUCT)RED, 5G)',
      slug: 'apple-iphone-se-256gb-red',
      description: 'Vibrant RED edition iPhone SE with 256GB spacious storage, A15 Bionic processing power, 4K video recording, and fast charging.',
      price: 579.00, discount_price: 499.00, stock: 45, rating: 4.7, num_reviews: 98, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPhone SE (3rd Gen)', Display: '4.7" Retina HD', Chip: 'A15 Bionic', Storage: '256GB', Color: '(PRODUCT)RED' }
    }
  ];

  // 2. MacBooks, iMacs, Mac Studios, Mac mini, Displays - 32 SKUs
  const macs = [
    // --- MacBook Pro 16" Series (6 SKUs) ---
    {
      name: 'Apple MacBook Pro 16" (M3 Max 16-Core CPU, 40-Core GPU, 48GB RAM, 1TB SSD, Space Black)',
      slug: 'apple-macbook-pro-16-m3-max-48gb-1tb',
      description: 'Supreme workstation performance. 16.2" Liquid Retina XDR 120Hz display with 1600 nits peak HDR brightness, Apple M3 Max silicon, hardware-accelerated ray tracing, 6-speaker sound system with force-canceling woofers, and up to 22h battery life.',
      price: 3999.00, discount_price: 3699.00, stock: 15, rating: 5.0, num_reviews: 84, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
      ],
      specifications: { Brand: 'Apple', Model: 'MacBook Pro 16', Display: '16.2" Liquid Retina XDR (3456x2234) 120Hz ProMotion', Chip: 'Apple M3 Max (16-Core CPU, 40-Core GPU, 16-Core Neural Engine)', RAM: '48GB Unified Memory (400GB/s)', Storage: '1TB Superfast SSD', Ports: '3x Thunderbolt 4 (USB-C), HDMI, SDXC, MagSafe 3', Battery: 'Up to 22 Hours' }
    },
    {
      name: 'Apple MacBook Pro 16" (M3 Max 16-Core CPU, 40-Core GPU, 64GB RAM, 2TB SSD, Space Black)',
      slug: 'apple-macbook-pro-16-m3-max-64gb-2tb',
      description: 'Heavy-duty 64GB RAM & 2TB SSD creative monster laptop with Space Black anodization, Liquid Retina XDR 120Hz panel, and 140W USB-C fast power.',
      price: 4699.00, discount_price: 4399.00, stock: 12, rating: 5.0, num_reviews: 55, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Pro 16', Display: '16.2" Liquid Retina XDR', Chip: 'Apple M3 Max', RAM: '64GB Unified Memory', Storage: '2TB SSD' }
    },
    {
      name: 'Apple MacBook Pro 16" (M3 Max 16-Core CPU, 40-Core GPU, 128GB RAM, 4TB SSD, Space Black)',
      slug: 'apple-macbook-pro-16-m3-max-128gb-4tb',
      description: 'The ultimate professional cinema and AI model training workstation with 128GB unified RAM, 4TB PCIe SSD, Space Black fingerprint-resistant anodized enclosure, and 140W USB-C GaN charger.',
      price: 5899.00, discount_price: 5499.00, stock: 8, rating: 5.0, num_reviews: 32, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Pro 16', Display: '16.2" Liquid Retina XDR 120Hz', Chip: 'Apple M3 Max', RAM: '128GB Unified Memory', Storage: '4TB SSD (7.4GB/s)', OS: 'macOS Sequoia with Apple Intelligence' }
    },
    {
      name: 'Apple MacBook Pro 16" (M3 Pro 12-Core CPU, 18-Core GPU, 36GB RAM, 512GB SSD, Space Black)',
      slug: 'apple-macbook-pro-16-m3-pro-36gb-512gb',
      description: 'Ideal developer and creator balance featuring Apple M3 Pro, 36GB unified memory, 16.2" mini-LED Liquid Retina XDR screen, 1080p FaceTime HD camera, and 22h endurance.',
      price: 2899.00, discount_price: 2649.00, stock: 25, rating: 4.9, num_reviews: 110, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Pro 16', Display: '16.2" Liquid Retina XDR', Chip: 'Apple M3 Pro (12-Core CPU, 18-Core GPU)', RAM: '36GB Unified Memory', Storage: '512GB SSD', Color: 'Space Black' }
    },
    {
      name: 'Apple MacBook Pro 16" (M3 Pro 12-Core CPU, 18-Core GPU, 18GB RAM, 512GB SSD, Silver)',
      slug: 'apple-macbook-pro-16-m3-pro-18gb-512gb-silver',
      description: 'Classic Silver aluminum unibody 16" laptop with M3 Pro silicon, studio-grade 3-mic array, Touch ID on Magic Keyboard, and MagSafe 3 fast charging.',
      price: 2499.00, discount_price: 2299.00, stock: 30, rating: 4.9, num_reviews: 95, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Pro 16', Display: '16.2" Liquid Retina XDR 120Hz ProMotion', Chip: 'Apple M3 Pro', RAM: '18GB Unified Memory', Storage: '512GB SSD', Color: 'Silver' }
    },
    {
      name: 'Apple MacBook Pro 16" (M3 Pro 12-Core CPU, 18-Core GPU, 36GB RAM, 1TB SSD, Silver)',
      slug: 'apple-macbook-pro-16-m3-pro-36gb-1tb-silver',
      description: 'Silver 16.2" Liquid Retina XDR workstation with 36GB memory, 1TB fast SSD storage, and studio sound.',
      price: 3099.00, discount_price: 2849.00, stock: 20, rating: 4.9, num_reviews: 68, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Pro 16', Display: '16.2" mini-LED XDR', Chip: 'Apple M3 Pro', RAM: '36GB', Storage: '1TB SSD' }
    },

    // --- MacBook Pro 14" Series (6 SKUs) ---
    {
      name: 'Apple MacBook Pro 14" (M3 Max 14-Core CPU, 30-Core GPU, 36GB RAM, 1TB SSD, Space Black)',
      slug: 'apple-macbook-pro-14-m3-max-36gb-1tb',
      description: 'Massive desktop-class power in a compact 14.2" form factor. M3 Max chip with 300GB/s memory bandwidth, Liquid Retina XDR 120Hz display, and 18-hour battery.',
      price: 3199.00, discount_price: 2949.00, stock: 20, rating: 4.9, num_reviews: 76, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Pro 14', Display: '14.2" Liquid Retina XDR (3024x1964) 120Hz', Chip: 'Apple M3 Max (14-Core CPU, 30-Core GPU)', RAM: '36GB Unified Memory', Storage: '1TB SSD', Weight: '1.62 kg' }
    },
    {
      name: 'Apple MacBook Pro 14" (M3 Max 16-Core CPU, 40-Core GPU, 64GB RAM, 2TB SSD, Space Black)',
      slug: 'apple-macbook-pro-14-m3-max-64gb-2tb',
      description: 'Maximized 14" beast with top-binned 40-core GPU M3 Max chip, 64GB RAM, 2TB SSD, and 18 hours battery life.',
      price: 4299.00, discount_price: 3999.00, stock: 15, rating: 5.0, num_reviews: 44, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Pro 14', Display: '14.2" Liquid Retina XDR', Chip: 'Apple M3 Max (16-core CPU, 40-core GPU)', RAM: '64GB', Storage: '2TB SSD' }
    },
    {
      name: 'Apple MacBook Pro 14" (M3 Pro 12-Core CPU, 18-Core GPU, 18GB RAM, 1TB SSD, Space Black)',
      slug: 'apple-macbook-pro-14-m3-pro-18gb-1tb',
      description: 'Pro productivity standard with M3 Pro 12-core CPU, 1TB SSD, 14.2" mini-LED XDR display with 1000 nits sustained full-screen brightness, and HDMI 2.1.',
      price: 2399.00, discount_price: 2199.00, stock: 35, rating: 4.9, num_reviews: 112, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Pro 14', Display: '14.2" Liquid Retina XDR', Chip: 'Apple M3 Pro', RAM: '18GB', Storage: '1TB SSD', Ports: '3x Thunderbolt 4, HDMI, SD Card, MagSafe' }
    },
    {
      name: 'Apple MacBook Pro 14" (M3 Pro 11-Core CPU, 14-Core GPU, 18GB RAM, 512GB SSD, Silver)',
      slug: 'apple-macbook-pro-14-m3-pro-18gb-512gb-silver',
      description: 'Portable creative studio with Apple M3 Pro, 14.2" ProMotion 120Hz display, 6-speaker spatial audio, and whisper-quiet active cooling.',
      price: 1999.00, discount_price: 1849.00, stock: 40, rating: 4.8, num_reviews: 145, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Pro 14', Display: '14.2" Liquid Retina XDR 120Hz', Chip: 'Apple M3 Pro (11-Core CPU, 14-Core GPU)', RAM: '18GB', Storage: '512GB SSD', Color: 'Silver' }
    },
    {
      name: 'Apple MacBook Pro 14" (M3 Pro 12-Core CPU, 18-Core GPU, 36GB RAM, 1TB SSD, Space Black)',
      slug: 'apple-macbook-pro-14-m3-pro-36gb-1tb',
      description: 'Space Black 14" powerhouse with 36GB unified memory, 1TB SSD, 3x Thunderbolt 4 ports, and 120Hz Liquid Retina XDR.',
      price: 2799.00, discount_price: 2549.00, stock: 25, rating: 4.9, num_reviews: 86, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Pro 14', Display: '14.2" Liquid Retina XDR', Chip: 'Apple M3 Pro', RAM: '36GB Unified', Storage: '1TB SSD' }
    },
    {
      name: 'Apple MacBook Pro 14" (M3 8-Core CPU, 10-Core GPU, 16GB RAM, 512GB SSD, Space Gray)',
      slug: 'apple-macbook-pro-14-m3-16gb-512gb',
      description: 'Next-gen entry pro laptop with Apple M3 chip, 16GB unified memory, Liquid Retina XDR display, up to 22h battery life, and 2x Thunderbolt ports.',
      price: 1799.00, discount_price: 1649.00, stock: 45, rating: 4.8, num_reviews: 130, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Pro 14', Display: '14.2" Liquid Retina XDR', Chip: 'Apple M3', RAM: '16GB', Storage: '512GB SSD', Battery: 'Up to 22 Hours' }
    },

    // --- MacBook Air 15" & 13" Series (8 SKUs) ---
    {
      name: 'Apple MacBook Air 15" (M3 8-Core CPU, 10-Core GPU, 16GB RAM, 512GB SSD, Midnight)',
      slug: 'apple-macbook-air-15-m3-16gb-512gb-midnight',
      description: 'Impossibly thin 11.5mm large screen laptop with 15.3" Liquid Retina display, Apple M3 chip, support for up to two external displays with lid closed, MagSafe, and 18h battery.',
      price: 1499.00, discount_price: 1349.00, stock: 55, rating: 4.9, num_reviews: 215, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Air 15', Display: '15.3" Liquid Retina (2880x1864) 500 nits', Chip: 'Apple M3 (8-Core CPU, 10-Core GPU, 16-Core NPU)', RAM: '16GB Unified Memory', Storage: '512GB SSD', Design: 'Fanless 100% Silent (1.51 kg)', Battery: 'Up to 18 Hours' }
    },
    {
      name: 'Apple MacBook Air 15" (M3 8-Core CPU, 10-Core GPU, 24GB RAM, 1TB SSD, Starlight)',
      slug: 'apple-macbook-air-15-m3-24gb-1tb-starlight',
      description: 'Maxed configuration 15" MacBook Air in elegant Starlight with 24GB unified memory, 1TB storage, 6-speaker spatial audio, and Touch ID.',
      price: 1899.00, discount_price: 1729.00, stock: 30, rating: 4.9, num_reviews: 82, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Air 15', Display: '15.3" Liquid Retina 500 nits', Chip: 'Apple M3', RAM: '24GB Unified', Storage: '1TB SSD', Color: 'Starlight' }
    },
    {
      name: 'Apple MacBook Air 15" (M3 8-Core CPU, 10-Core GPU, 16GB RAM, 256GB SSD, Space Gray)',
      slug: 'apple-macbook-air-15-m3-16gb-256gb-spacegray',
      description: 'Spacious 15.3" screen productivity laptop in Space Gray with M3 silicon, 1080p FaceTime HD camera, dual USB-C Thunderbolt ports, and 35W Dual USB-C compact adapter.',
      price: 1299.00, discount_price: 1179.00, stock: 60, rating: 4.8, num_reviews: 140, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Air 15', Display: '15.3" IPS Liquid Retina', Chip: 'Apple M3', RAM: '16GB', Storage: '256GB SSD', Color: 'Space Gray' }
    },
    {
      name: 'Apple MacBook Air 15" (M3 8-Core CPU, 10-Core GPU, 16GB RAM, 512GB SSD, Silver)',
      slug: 'apple-macbook-air-15-m3-16gb-512gb-silver',
      description: 'Sleek Silver 15.3" fanless MacBook Air with 16GB memory, 512GB SSD, and incredible 18-hour battery longevity.',
      price: 1499.00, discount_price: 1349.00, stock: 45, rating: 4.8, num_reviews: 95, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Air 15', Display: '15.3" Liquid Retina', Chip: 'Apple M3', RAM: '16GB', Storage: '512GB SSD', Color: 'Silver' }
    },
    {
      name: 'Apple MacBook Air 13" (M3 8-Core CPU, 10-Core GPU, 16GB RAM, 512GB SSD, Midnight)',
      slug: 'apple-macbook-air-13-m3-16gb-512gb-midnight',
      description: 'The worlds most popular laptop. 13.6" Liquid Retina display, Apple M3 chip with breakout AI performance, fingerprint-resistant anodized Midnight seal, and 1.24kg light unibody.',
      price: 1299.00, discount_price: 1179.00, stock: 80, rating: 4.9, num_reviews: 290, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Air 13', Display: '13.6" Liquid Retina (2560x1664) 500 nits', Chip: 'Apple M3 (8-Core CPU, 10-Core GPU)', RAM: '16GB Unified Memory', Storage: '512GB SSD', Weight: '1.24 kg', Battery: 'Up to 18 Hours' }
    },
    {
      name: 'Apple MacBook Air 13" (M3 8-Core CPU, 8-Core GPU, 16GB RAM, 256GB SSD, Starlight)',
      slug: 'apple-macbook-air-13-m3-16gb-256gb-starlight',
      description: 'Ultra-portable daily laptop in Starlight with Apple M3 chip, 16GB unified RAM, MagSafe 3 charging, Wi-Fi 6E, and dual external display capability.',
      price: 1099.00, discount_price: 999.00, stock: 90, rating: 4.8, num_reviews: 220, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Air 13', Display: '13.6" Liquid Retina', Chip: 'Apple M3 (8-Core CPU, 8-Core GPU)', RAM: '16GB Unified', Storage: '256GB SSD', Color: 'Starlight' }
    },
    {
      name: 'Apple MacBook Air 13" (M3 8-Core CPU, 10-Core GPU, 24GB RAM, 512GB SSD, Silver)',
      slug: 'apple-macbook-air-13-m3-24gb-512gb-silver',
      description: 'Power-packed 24GB RAM 13" MacBook Air for heavy multitasking, coding, and Adobe CC workflows in an all-aluminum fanless chassis.',
      price: 1499.00, discount_price: 1369.00, stock: 35, rating: 4.9, num_reviews: 65, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Air 13', Display: '13.6" Liquid Retina', Chip: 'Apple M3', RAM: '24GB Unified', Storage: '512GB SSD', Color: 'Silver' }
    },
    {
      name: 'Apple MacBook Air 13" (M2 8-Core CPU, 8-Core GPU, 16GB RAM, 256GB SSD, Midnight)',
      slug: 'apple-macbook-air-13-m2-16gb-256gb-midnight',
      description: 'Value champion MacBook Air powered by M2 silicon with 13.6" Liquid Retina screen, 1080p webcam, 16GB unified memory, and MagSafe 3.',
      price: 999.00, discount_price: 899.00, stock: 95, rating: 4.8, num_reviews: 380, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MacBook Air 13', Display: '13.6" Liquid Retina', Chip: 'Apple M2', RAM: '16GB', Storage: '256GB SSD', Battery: 'Up to 18 Hours' }
    },

    // --- Desktop Macs (iMac, Mac Studio, Mac mini & Displays) - 12 SKUs ---
    {
      name: 'Apple iMac 24" (Apple M3 8-Core CPU, 10-Core GPU, 16GB RAM, 512GB SSD, Blue with Touch ID)',
      slug: 'apple-imac-24-m3-16gb-512gb-blue',
      description: 'All-in-one desktop marvel with vibrant 24" 4.5K Retina display, Apple M3 chip, 1080p FaceTime camera, 6-speaker spatial audio, and color-matched Magic Keyboard with Touch ID.',
      price: 1699.00, discount_price: 1549.00, stock: 30, rating: 4.9, num_reviews: 110, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iMac 24"', Display: '24" 4.5K Retina (4480x2520) 500 nits Wide Color P3', Chip: 'Apple M3 (8-Core CPU, 10-Core GPU)', RAM: '16GB Unified Memory', Storage: '512GB SSD', Accessories: 'Color-matched Magic Mouse & Magic Keyboard with Touch ID' }
    },
    {
      name: 'Apple iMac 24" (Apple M3 8-Core CPU, 10-Core GPU, 16GB RAM, 512GB SSD, Green with Touch ID)',
      slug: 'apple-imac-24-m3-16gb-512gb-green',
      description: 'Vibrant Green 24" 4.5K Retina all-in-one desktop with M3 10-core GPU, 16GB memory, and studio-grade 3-mic array.',
      price: 1699.00, discount_price: 1549.00, stock: 25, rating: 4.9, num_reviews: 75, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iMac 24"', Display: '24" 4.5K Retina', Chip: 'Apple M3', RAM: '16GB', Storage: '512GB SSD', Color: 'Green' }
    },
    {
      name: 'Apple iMac 24" (Apple M3 8-Core CPU, 8-Core GPU, 8GB RAM, 256GB SSD, Silver)',
      slug: 'apple-imac-24-m3-8gb-256gb-silver',
      description: 'Sleek Silver 11.5mm thin all-in-one desktop with 24" 4.5K Retina screen, M3 silicon, studio-quality 3-mic array, and Wi-Fi 6E.',
      price: 1299.00, discount_price: 1199.00, stock: 40, rating: 4.8, num_reviews: 85, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iMac 24"', Display: '24" 4.5K Retina', Chip: 'Apple M3', RAM: '8GB', Storage: '256GB SSD', Color: 'Silver' }
    },
    {
      name: 'Apple Mac mini (M2 Pro 10-Core CPU, 16-Core GPU, 16GB RAM, 512GB SSD)',
      slug: 'apple-mac-mini-m2-pro-16gb-512gb',
      description: 'Transform any desk into a powerful studio. Apple M2 Pro chip with 4x Thunderbolt 4 ports, dual display support, Gigabit Ethernet, and compact 7.7" unibody.',
      price: 1299.00, discount_price: 1169.00, stock: 35, rating: 4.9, num_reviews: 140, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Mac mini', Chip: 'Apple M2 Pro (10-Core CPU, 16-Core GPU)', RAM: '16GB Unified Memory', Storage: '512GB SSD', Ports: '4x Thunderbolt 4, 2x USB-A, HDMI, 10Gb Ethernet' }
    },
    {
      name: 'Apple Mac mini (M2 Pro 12-Core CPU, 19-Core GPU, 32GB RAM, 1TB SSD)',
      slug: 'apple-mac-mini-m2-pro-32gb-1tb',
      description: 'Max-configured Mac mini with 12-core CPU M2 Pro, 32GB unified RAM, 1TB NVMe SSD, and 4x Thunderbolt 4 ports.',
      price: 1999.00, discount_price: 1819.00, stock: 20, rating: 4.9, num_reviews: 62, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Mac mini', Chip: 'Apple M2 Pro (12-Core CPU, 19-Core GPU)', RAM: '32GB', Storage: '1TB SSD' }
    },
    {
      name: 'Apple Mac mini (M2 8-Core CPU, 10-Core GPU, 8GB RAM, 256GB SSD)',
      slug: 'apple-mac-mini-m2-8gb-256gb',
      description: 'More muscle for less. Apple M2 chip, 2x Thunderbolt 4 ports, HDMI, Wi-Fi 6E, and silent fan cooling.',
      price: 599.00, discount_price: 529.00, stock: 65, rating: 4.8, num_reviews: 220, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Mac mini', Chip: 'Apple M2', RAM: '8GB', Storage: '256GB SSD', Ports: '2x Thunderbolt 4, HDMI, USB-A' }
    },
    {
      name: 'Apple Mac Studio (M2 Max 12-Core CPU, 30-Core GPU, 32GB RAM, 512GB SSD)',
      slug: 'apple-mac-studio-m2-max-32gb-512gb',
      description: 'Outrageous compact desktop performance for audio engineers, 3D artists, and developers with M2 Max silicon, front SD card slot, and support for up to 5 displays.',
      price: 1999.00, discount_price: 1849.00, stock: 20, rating: 4.9, num_reviews: 78, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Mac Studio', Chip: 'Apple M2 Max (12-Core CPU, 30-Core GPU)', RAM: '32GB Unified Memory', Storage: '512GB SSD', Ports: '4x Thunderbolt 4, 2x USB-C front, 10Gb Ethernet, SDXC' }
    },
    {
      name: 'Apple Mac Studio (M2 Max 12-Core CPU, 38-Core GPU, 64GB RAM, 1TB SSD)',
      slug: 'apple-mac-studio-m2-max-64gb-1tb',
      description: 'Expanded 64GB memory Mac Studio with 38-core GPU M2 Max chip, 1TB fast SSD, and 400GB/s bandwidth.',
      price: 2599.00, discount_price: 2399.00, stock: 15, rating: 5.0, num_reviews: 50, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Mac Studio', Chip: 'Apple M2 Max (38-Core GPU)', RAM: '64GB Unified', Storage: '1TB SSD' }
    },
    {
      name: 'Apple Mac Studio (M2 Ultra 24-Core CPU, 60-Core GPU, 64GB RAM, 1TB SSD)',
      slug: 'apple-mac-studio-m2-ultra-64gb-1tb',
      description: 'Colossal workstation with 24-core CPU, 60-core GPU, 800GB/s memory bandwidth, 6x Thunderbolt 4 ports, and support for 8K video output.',
      price: 3999.00, discount_price: 3699.00, stock: 10, rating: 5.0, num_reviews: 42, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Mac Studio', Chip: 'Apple M2 Ultra (24-Core CPU, 60-Core GPU)', RAM: '64GB Unified Memory', Storage: '1TB SSD' }
    },
    {
      name: 'Apple Studio Display 27" 5K Retina (Standard Glass, Tilt-Adjustable Stand)',
      slug: 'apple-studio-display-27-5k-retina',
      description: 'Expansive 27" 5K Retina display with 14.7 million pixels, 600 nits brightness, 12MP Ultra Wide camera with Center Stage, 3-mic array, and 6-speaker sound system with Spatial Audio.',
      price: 1599.00, discount_price: 1479.00, stock: 25, rating: 4.8, num_reviews: 95, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Studio Display', Display: '27" 5K Retina (5120x2880) 600 nits P3', Camera: '12MP Ultra Wide with Center Stage', Audio: '6 Speakers with Spatial Audio & 3 Studio Mics', Ports: '1x Thunderbolt 3 (96W Host Charging), 3x USB-C (10Gbps)' }
    },
    {
      name: 'Apple Studio Display 27" 5K Retina (Nano-Texture Glass, Tilt & Height Stand)',
      slug: 'apple-studio-display-27-5k-nanotexture',
      description: 'Nano-Texture anti-glare glass 5K display with ergonomic tilt and height-adjustable stand, 96W USB-C fast host power, and Center Stage.',
      price: 2299.00, discount_price: 2099.00, stock: 15, rating: 4.9, num_reviews: 48, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Studio Display', Glass: 'Nano-Texture Anti-Reflective', Stand: 'Tilt and Height Adjustable' }
    },
    {
      name: 'Apple Pro Display XDR 32" 6K Retina (Nano-Texture Glass with Pro Stand)',
      slug: 'apple-pro-display-xdr-32-6k-nanotexture',
      description: 'Massive 32" 6K Retina reference monitor with 1600 nits peak brightness, 1,000,000:1 contrast ratio, 10-bit color depth, and precision Pro Stand.',
      price: 5999.00, discount_price: 5499.00, stock: 8, rating: 5.0, num_reviews: 28, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Pro Display XDR', Display: '32" 6K Retina (6016x3384) 1600 nits', Glass: 'Nano-Texture Glass', Stand: 'Apple Pro Stand Included' }
    }
  ];

  // 3. iPads (iPad Pro M4, iPad Air M2, iPad 10th Gen & mini) - 22 SKUs
  const ipads = [
    // --- iPad Pro M4 Series (8 SKUs) ---
    {
      name: 'Apple iPad Pro 13" M4 Ultra Retina XDR OLED (256GB Space Black, Wi-Fi)',
      slug: 'apple-ipad-pro-13-m4-256gb-black',
      description: 'Thincredible 5.1mm design with Tandem OLED Ultra Retina XDR 120Hz display, cutting-edge Apple M4 chip with 38 TOPS Neural Engine, and Apple Pencil Pro support.',
      price: 1299.00, discount_price: 1219.00, stock: 35, rating: 4.9, num_reviews: 140, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'
      ],
      specifications: { Brand: 'Apple', Model: 'iPad Pro 13 (M4)', Display: '13" Ultra Retina XDR Tandem OLED 120Hz (1600 nits peak)', Chip: 'Apple M4 (9-Core CPU, 10-Core GPU, 16-Core NPU)', RAM: '8GB Unified', Storage: '256GB', Thickness: '5.1 mm Thinnest Apple Product', Accessories: 'Apple Pencil Pro & Magic Keyboard Support' }
    },
    {
      name: 'Apple iPad Pro 13" M4 Ultra Retina XDR OLED (512GB Space Black, Wi-Fi)',
      slug: 'apple-ipad-pro-13-m4-512gb-black-wifi',
      description: 'Spacious 512GB Tandem OLED 13" iPad Pro in Space Black with M4 silicon, landscape 12MP Center Stage camera, and Thunderbolt 3.',
      price: 1499.00, discount_price: 1399.00, stock: 30, rating: 4.9, num_reviews: 95, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad Pro 13 (M4)', Display: '13" Tandem OLED 120Hz', Chip: 'Apple M4', RAM: '8GB', Storage: '512GB' }
    },
    {
      name: 'Apple iPad Pro 13" M4 Ultra Retina XDR OLED (512GB Silver, 5G Cellular + Wi-Fi)',
      slug: 'apple-ipad-pro-13-m4-512gb-5g-silver',
      description: 'Cellular enabled 13" OLED powerhouse in Silver with 512GB storage, landscape 12MP Center Stage front camera, Face ID, and LiDAR scanner.',
      price: 1699.00, discount_price: 1579.00, stock: 25, rating: 5.0, num_reviews: 82, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad Pro 13 (M4)', Display: '13" Tandem OLED 120Hz', Chip: 'Apple M4', RAM: '8GB', Storage: '512GB', Connectivity: '5G Cellular + Wi-Fi 6E' }
    },
    {
      name: 'Apple iPad Pro 13" M4 Ultra Retina XDR OLED (1TB Space Black, Nano-Texture Glass)',
      slug: 'apple-ipad-pro-13-m4-1tb-nanotexture',
      description: 'Studio masterpiece with anti-reflective Nano-Texture glass, 16GB unified RAM, 1TB SSD, and 10-core CPU M4 chip for pro grading and visual effects.',
      price: 2099.00, discount_price: 1949.00, stock: 15, rating: 5.0, num_reviews: 45, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad Pro 13 (M4)', Glass: 'Nano-Texture Anti-Glare Glass', Chip: 'Apple M4 (10-Core CPU)', RAM: '16GB Unified', Storage: '1TB SSD' }
    },
    {
      name: 'Apple iPad Pro 13" M4 Ultra Retina XDR OLED (2TB Space Black, Nano-Texture, 5G Cellular)',
      slug: 'apple-ipad-pro-13-m4-2tb-5g-nanotexture',
      description: 'Ultimate iPad configuration with 2TB storage, 16GB RAM, Nano-Texture glass, 5G cellular, and Tandem OLED.',
      price: 2499.00, discount_price: 2299.00, stock: 10, rating: 5.0, num_reviews: 28, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad Pro 13 (M4)', Display: '13" Nano-Texture OLED', Chip: 'Apple M4', RAM: '16GB', Storage: '2TB', Connectivity: '5G + Wi-Fi 6E' }
    },
    {
      name: 'Apple iPad Pro 11" M4 Ultra Retina XDR OLED (256GB Space Black, Wi-Fi)',
      slug: 'apple-ipad-pro-11-m4-256gb-black',
      description: 'Ultralight 5.3mm tablet with 11" Tandem OLED 120Hz display, Apple M4 chip, Thunderbolt 3 port, 4-speaker audio, and Apple Pencil Pro haptic squeeze.',
      price: 999.00, discount_price: 929.00, stock: 40, rating: 4.9, num_reviews: 165, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad Pro 11 (M4)', Display: '11" Ultra Retina XDR OLED 120Hz', Chip: 'Apple M4', RAM: '8GB', Storage: '256GB', Weight: '444 g' }
    },
    {
      name: 'Apple iPad Pro 11" M4 Ultra Retina XDR OLED (512GB Silver, Wi-Fi)',
      slug: 'apple-ipad-pro-11-m4-512gb-silver',
      description: 'Pristine Silver 11" OLED iPad Pro with 512GB storage, 4K ProRes video recording, Smart HDR 4, and landscape FaceTime camera with Center Stage.',
      price: 1199.00, discount_price: 1119.00, stock: 30, rating: 4.9, num_reviews: 95, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad Pro 11 (M4)', Display: '11" Tandem OLED', Chip: 'Apple M4', RAM: '8GB', Storage: '512GB', Color: 'Silver' }
    },
    {
      name: 'Apple iPad Pro 11" M4 Ultra Retina XDR OLED (512GB Space Black, 5G Cellular + Wi-Fi)',
      slug: 'apple-ipad-pro-11-m4-512gb-5g-black',
      description: 'Cellular 5G 11" OLED iPad Pro with 512GB capacity, Face ID, studio mics, and quad speakers.',
      price: 1399.00, discount_price: 1299.00, stock: 25, rating: 4.9, num_reviews: 70, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad Pro 11 (M4)', Display: '11" OLED 120Hz', Chip: 'Apple M4', RAM: '8GB', Storage: '512GB', Connectivity: '5G Cellular' }
    },

    // --- iPad Air M2 Series (6 SKUs) ---
    {
      name: 'Apple iPad Air 13" M2 (128GB Space Gray, Wi-Fi)',
      slug: 'apple-ipad-air-13-m2-128gb-spacegray',
      description: 'First-ever 13" iPad Air with expansive Liquid Retina display, Apple M2 chip, landscape stereo speakers with 2x bass, and Apple Pencil Pro barrel roll support.',
      price: 799.00, discount_price: 739.00, stock: 50, rating: 4.8, num_reviews: 175, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad Air 13 (M2)', Display: '13" Liquid Retina IPS (2732x2048) 600 nits', Chip: 'Apple M2 (8-Core CPU, 9-Core GPU)', RAM: '8GB', Storage: '128GB', TouchID: 'Top Button Touch ID' }
    },
    {
      name: 'Apple iPad Air 13" M2 (256GB Blue, Wi-Fi)',
      slug: 'apple-ipad-air-13-m2-256gb-blue',
      description: 'Gentle Blue pastel 13" canvas with 256GB capacity, USB-C, Wi-Fi 6E, landscape 12MP Center Stage camera, and all-day 10h battery life.',
      price: 899.00, discount_price: 839.00, stock: 40, rating: 4.8, num_reviews: 110, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad Air 13 (M2)', Display: '13" Liquid Retina 600 nits', Chip: 'Apple M2', RAM: '8GB', Storage: '256GB', Color: 'Blue' }
    },
    {
      name: 'Apple iPad Air 13" M2 (512GB Space Gray, 5G Cellular + Wi-Fi)',
      slug: 'apple-ipad-air-13-m2-512gb-5g-spacegray',
      description: 'Cellular 5G enabled 13" iPad Air with 512GB storage, Apple M2 performance, and landscape stereo audio.',
      price: 1149.00, discount_price: 1049.00, stock: 25, rating: 4.9, num_reviews: 58, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad Air 13 (M2)', Display: '13" Liquid Retina', Chip: 'Apple M2', RAM: '8GB', Storage: '512GB', Connectivity: '5G Cellular' }
    },
    {
      name: 'Apple iPad Air 11" M2 (128GB Starlight, Wi-Fi)',
      slug: 'apple-ipad-air-11-m2-128gb-starlight',
      description: 'Incredibly portable and powerful with 11" Liquid Retina display, Apple M2 chip, Apple Pencil Pro hover & haptics, and Touch ID in the top button.',
      price: 599.00, discount_price: 549.00, stock: 65, rating: 4.8, num_reviews: 210, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad Air 11 (M2)', Display: '11" Liquid Retina (2360x1640) 500 nits', Chip: 'Apple M2', RAM: '8GB', Storage: '128GB', Weight: '462 g' }
    },
    {
      name: 'Apple iPad Air 11" M2 (256GB Purple, Wi-Fi)',
      slug: 'apple-ipad-air-11-m2-256gb-purple',
      description: 'Lavender Purple aluminum finish with 256GB storage, Magic Keyboard support, 12MP 4K rear camera, and fast USB-C data speeds.',
      price: 699.00, discount_price: 639.00, stock: 50, rating: 4.8, num_reviews: 135, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad Air 11 (M2)', Display: '11" Liquid Retina', Chip: 'Apple M2', RAM: '8GB', Storage: '256GB', Color: 'Purple' }
    },
    {
      name: 'Apple iPad Air 11" M2 (512GB Space Gray, Wi-Fi)',
      slug: 'apple-ipad-air-11-m2-512gb-spacegray',
      description: 'Max-storage 512GB 11" iPad Air with M2 chip, Apple Pencil Pro support, and all-day 10-hour battery life.',
      price: 899.00, discount_price: 819.00, stock: 35, rating: 4.8, num_reviews: 72, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad Air 11 (M2)', Display: '11" Liquid Retina', Chip: 'Apple M2', RAM: '8GB', Storage: '512GB' }
    },

    // --- iPad 10th Gen & iPad mini (8 SKUs) ---
    {
      name: 'Apple iPad 10.9" 10th Gen (64GB Blue, Wi-Fi)',
      slug: 'apple-ipad-10th-gen-64gb-blue',
      description: 'Colorfully reimagined all-screen tablet with 10.9" Liquid Retina display, A14 Bionic chip, landscape 12MP Ultra Wide camera, USB-C, and Magic Keyboard Folio support.',
      price: 349.00, discount_price: 319.00, stock: 95, rating: 4.7, num_reviews: 380, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad (10th Gen)', Display: '10.9" Liquid Retina (2360x1640)', Chip: 'A14 Bionic', Storage: '64GB', Camera: '12MP Wide + Landscape 12MP Front', Connector: 'USB-C' }
    },
    {
      name: 'Apple iPad 10.9" 10th Gen (256GB Silver, Wi-Fi)',
      slug: 'apple-ipad-10th-gen-256gb-silver',
      description: 'Spacious 256GB everyday iPad in Silver with Touch ID on top button, Apple Pencil (USB-C) support, and all-day 10-hour battery life.',
      price: 499.00, discount_price: 449.00, stock: 75, rating: 4.7, num_reviews: 210, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad (10th Gen)', Display: '10.9" IPS', Chip: 'A14 Bionic', Storage: '256GB', Battery: 'Up to 10 Hours' }
    },
    {
      name: 'Apple iPad 10.9" 10th Gen (64GB Pink, Wi-Fi)',
      slug: 'apple-ipad-10th-gen-64gb-pink',
      description: 'Vibrant Pink family tablet with stereo landscape speakers, Touch ID, iPadOS 18 multitasking, and Freeform collaboration.',
      price: 349.00, discount_price: 319.00, stock: 80, rating: 4.7, num_reviews: 165, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad (10th Gen)', Display: '10.9" Liquid Retina', Chip: 'A14 Bionic', Storage: '64GB', Color: 'Pink' }
    },
    {
      name: 'Apple iPad 10.9" 10th Gen (64GB Yellow, Wi-Fi)',
      slug: 'apple-ipad-10th-gen-64gb-yellow',
      description: 'Cheerful Yellow all-screen iPad with A14 Bionic, landscape Center Stage camera, and USB-C connectivity.',
      price: 349.00, discount_price: 319.00, stock: 70, rating: 4.7, num_reviews: 120, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad (10th Gen)', Display: '10.9" Liquid Retina', Chip: 'A14 Bionic', Storage: '64GB', Color: 'Yellow' }
    },
    {
      name: 'Apple iPad mini 8.3" (A17 Pro, 128GB Space Gray, Wi-Fi)',
      slug: 'apple-ipad-mini-a17-pro-128gb-spacegray',
      description: 'Mega power in mini size. 8.3" Liquid Retina display, A17 Pro chip with Apple Intelligence, Apple Pencil Pro support, 2x faster USB-C, and Wi-Fi 6E.',
      price: 499.00, discount_price: 469.00, stock: 60, rating: 4.9, num_reviews: 140, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad mini (A17 Pro)', Display: '8.3" Liquid Retina (2266x1488) P3 True Tone', Chip: 'A17 Pro (6-core CPU, 5-core GPU, Apple Intelligence)', Storage: '128GB', Stylus: 'Apple Pencil Pro Support', Weight: '293 g' }
    },
    {
      name: 'Apple iPad mini 8.3" (A17 Pro, 256GB Starlight, Wi-Fi)',
      slug: 'apple-ipad-mini-a17-pro-256gb-starlight',
      description: 'Pocket-sized creative notebook with 256GB storage in warm Starlight, 12MP Center Stage camera, Smart HDR 4, and Touch ID.',
      price: 599.00, discount_price: 559.00, stock: 45, rating: 4.9, num_reviews: 95, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad mini (A17 Pro)', Display: '8.3" Liquid Retina', Chip: 'A17 Pro', Storage: '256GB', Color: 'Starlight' }
    },
    {
      name: 'Apple iPad mini 8.3" (A17 Pro, 128GB Blue, Wi-Fi)',
      slug: 'apple-ipad-mini-a17-pro-128gb-blue',
      description: 'Pastel Blue iPad mini with A17 Pro silicon, Apple Intelligence, and Apple Pencil Pro support.',
      price: 499.00, discount_price: 469.00, stock: 50, rating: 4.8, num_reviews: 82, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad mini (A17 Pro)', Display: '8.3" Liquid Retina', Chip: 'A17 Pro', Storage: '128GB', Color: 'Blue' }
    },
    {
      name: 'Apple iPad mini 8.3" (A17 Pro, 512GB Purple, 5G Cellular + Wi-Fi)',
      slug: 'apple-ipad-mini-a17-pro-512gb-5g-purple',
      description: 'Top-tier 512GB cellular 5G iPad mini in Purple with A17 Pro chip, ultra-fast 10Gbps USB-C, and Apple Intelligence.',
      price: 799.00, discount_price: 739.00, stock: 30, rating: 4.9, num_reviews: 64, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'iPad mini (A17 Pro)', Display: '8.3" Liquid Retina', Chip: 'A17 Pro', Storage: '512GB', Connectivity: '5G Cellular' }
    }
  ];

  // 4. Apple Watches, AirPods, Vision Pro & Smart Home/Official Accessories - 24 SKUs
  const wearablesAndAccessories = [
    // --- Apple Watch Series (9 SKUs) ---
    {
      name: 'Apple Watch Ultra 2 49mm GPS + Cellular (Black Titanium with Dark Green Alpine Loop)',
      slug: 'apple-watch-ultra-2-black-titanium-alpine',
      description: 'The ultimate sports & adventure watch. Stunning satin Black Titanium finish, 3000 nits Always-On OLED screen, dual-frequency precision GPS, Depth gauge with EN13319 scuba certification, and up to 72h low power battery.',
      price: 799.00, discount_price: 749.00, stock: 35, rating: 4.9, num_reviews: 175, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
      ],
      specifications: { Brand: 'Apple', Model: 'Apple Watch Ultra 2', Case: '49mm Aerospace Grade 5 Black Titanium', Display: '3000 nits Sapphire Crystal Always-On OLED', WaterResistance: '100m (WR100) & High-speed water sports', Chip: 'S9 SiP with 4-Core Neural Engine (Double Tap Gesture)', Battery: 'Up to 36 Hours (72 Hours Low Power Mode)' }
    },
    {
      name: 'Apple Watch Ultra 2 49mm GPS + Cellular (Natural Titanium with Orange Ocean Band)',
      slug: 'apple-watch-ultra-2-natural-titanium-ocean',
      description: 'Engineered for endurance athletes and divers with Action Button, 86dB Emergency Siren, Oceanic+ dive computer app, and dual speakers.',
      price: 799.00, discount_price: 749.00, stock: 30, rating: 4.9, num_reviews: 140, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple Watch Ultra 2', Case: '49mm Natural Titanium', Display: '3000 nits Sapphire Glass', Band: 'Molded Elastomer Ocean Band' }
    },
    {
      name: 'Apple Watch Ultra 2 49mm GPS + Cellular (Natural Titanium with Blue/Black Trail Loop)',
      slug: 'apple-watch-ultra-2-natural-titanium-trailloop',
      description: 'Lightweight and thin woven Trail Loop with pull tab for fast adjustments during trail running and endurance training.',
      price: 799.00, discount_price: 749.00, stock: 30, rating: 4.9, num_reviews: 115, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple Watch Ultra 2', Case: '49mm Titanium', Band: 'Trail Loop', Battery: 'Up to 72 Hours' }
    },
    {
      name: 'Apple Watch Series 10 46mm GPS + Cellular (Jet Black Aluminum with Sport Band)',
      slug: 'apple-watch-series-10-46mm-jetblack',
      description: 'Apples thinnest watch ever with wide-angle OLED display that is up to 40% brighter off-axis, S10 SiP chip, sleep apnea notifications, depth gauge, water temperature sensor, and fast charging to 80% in 30 minutes.',
      price: 429.00, discount_price: 399.00, stock: 50, rating: 4.9, num_reviews: 190, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple Watch Series 10', Case: '46mm Polished Jet Black Aluminum (9.7mm thin)', Display: 'Wide-Angle OLED (2000 nits peak)', Chip: 'S10 SiP (Double Tap & On-Device Siri)', Sensors: 'ECG, Blood Oxygen, Sleep Apnea, Temp, Depth to 6m', Charging: 'Fast Charge 80% in 30 Mins' }
    },
    {
      name: 'Apple Watch Series 10 46mm GPS + Cellular (Natural Titanium with Milanese Loop)',
      slug: 'apple-watch-series-10-46mm-titanium-milanese',
      description: 'Jewelry-grade Grade 5 polished Titanium case with matching magnetic Milanese Loop, sapphire crystal glass, and cellular voice roaming.',
      price: 749.00, discount_price: 699.00, stock: 25, rating: 4.9, num_reviews: 85, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple Watch Series 10', Case: '46mm Grade 5 Titanium', Glass: 'Sapphire Crystal', Band: 'Titanium Milanese Loop' }
    },
    {
      name: 'Apple Watch Series 10 46mm GPS (Silver Aluminum with Sport Loop)',
      slug: 'apple-watch-series-10-46mm-silver',
      description: 'Silver 46mm smartwatch with wide-angle OLED display, S10 SiP chip, water temperature sensor, and fast charging.',
      price: 429.00, discount_price: 389.00, stock: 45, rating: 4.8, num_reviews: 120, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple Watch Series 10', Case: '46mm Silver Aluminum', Chip: 'S10 SiP' }
    },
    {
      name: 'Apple Watch Series 10 42mm GPS (Rose Gold Aluminum with Sport Loop)',
      slug: 'apple-watch-series-10-42mm-rosegold',
      description: 'Elegant 42mm Rose Gold smartwatch with wrist temperature sensing, cycle tracking, Double Tap gesture, and built-in media playback speaker.',
      price: 399.00, discount_price: 369.00, stock: 60, rating: 4.8, num_reviews: 130, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple Watch Series 10', Case: '42mm Aluminum', Display: 'Wide-Angle OLED', Color: 'Rose Gold', Weight: '29.3 g' }
    },
    {
      name: 'Apple Watch SE 2nd Gen 44mm GPS (Midnight Aluminum with Sport Band)',
      slug: 'apple-watch-se-44mm-midnight',
      description: 'Essential health and fitness tracking with Heart Rate notifications, Crash Detection, Fall Detection, Sleep Tracking, and water resistance to 50m.',
      price: 279.00, discount_price: 239.00, stock: 85, rating: 4.7, num_reviews: 290, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple Watch SE (2nd Gen)', Case: '44mm Aluminum', Chip: 'S8 SiP Dual-Core', WaterResistance: '50m (Swimproof)', Sensors: 'Optical Heart Sensor, Compass, Altimeter' }
    },
    {
      name: 'Apple Watch SE 2nd Gen 40mm GPS (Starlight Aluminum with Sport Band)',
      slug: 'apple-watch-se-40mm-starlight',
      description: 'Affordable daily smartwatch in Starlight with Activity rings, Emergency SOS, workout tracking, and seamless iPhone integration.',
      price: 249.00, discount_price: 209.00, stock: 90, rating: 4.7, num_reviews: 240, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple Watch SE (2nd Gen)', Case: '40mm Aluminum', Display: 'Retina OLED 1000 nits', Color: 'Starlight' }
    },

    // --- Vision Pro, AirPods & Audio & Official Accessories (15 SKUs) ---
    {
      name: 'Apple Vision Pro (512GB Spatial Computer)',
      slug: 'apple-vision-pro-512gb',
      description: 'Revolutionary spatial computer blending digital media with physical space. Dual 4K micro-OLED displays with 23 million pixels, M2 and R1 dual chips, spatial audio, and intuitive eye & hand navigation.',
      price: 3699.00, discount_price: 3499.00, stock: 12, rating: 4.9, num_reviews: 65, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple Vision Pro', Displays: 'Custom 4K Micro-OLED (23M Pixels total 90/96/100Hz)', Chips: 'Apple M2 (8-core CPU, 10-core GPU) + Apple R1 Real-time Chip', Storage: '512GB', OS: 'visionOS with EyeSight & Personas', Audio: 'Spatial Audio with Dual-driver Audio Pods' }
    },
    {
      name: 'Apple Vision Pro (256GB Spatial Computer)',
      slug: 'apple-vision-pro-256gb',
      description: 'Infinite desktop workspace in your living room with 3D camera recording, private cinema screen experience, and immersive environment dials.',
      price: 3499.00, discount_price: 3299.00, stock: 15, rating: 4.8, num_reviews: 48, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple Vision Pro', Displays: 'Micro-OLED 4K per eye', Chips: 'M2 + R1', Storage: '256GB', Tracking: 'High-speed eye tracking + Hand gestures' }
    },
    {
      name: 'Apple Vision Pro (1TB Spatial Computer)',
      slug: 'apple-vision-pro-1tb',
      description: 'Maximized 1TB Spatial Computer for extensive offline 3D video, immersive games, and professional spatial computing apps.',
      price: 3899.00, discount_price: 3699.00, stock: 8, rating: 5.0, num_reviews: 35, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple Vision Pro', Displays: '4K Micro-OLED', Chips: 'M2 + R1', Storage: '1TB' }
    },
    {
      name: 'Apple AirPods Max (USB-C, Midnight with Smart Case)',
      slug: 'apple-airpods-max-usb-c-midnight',
      description: 'Over-ear acoustic perfection updated with USB-C lossless audio, Apple-designed 40mm dynamic drivers, Pro-level Active Noise Cancellation, Personalized Spatial Audio with dynamic head tracking, and knit-mesh canopy.',
      price: 549.00, discount_price: 499.00, stock: 40, rating: 4.9, num_reviews: 210, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'AirPods Max (USB-C)', Drivers: '40mm Apple Custom Dynamic Driver with Dual Neodymium Ring', Audio: 'Lossless Audio via USB-C, Pro Active Noise Cancellation, Transparency Mode', Battery: 'Up to 20 Hours with ANC On', Charging: 'USB-C Fast Charging' }
    },
    {
      name: 'Apple AirPods Max (USB-C, Starlight with Smart Case)',
      slug: 'apple-airpods-max-usb-c-starlight',
      description: 'Sophisticated Starlight colorway with memory foam ear cushions, digital crown volume control, computational audio with H1 chips in each cup, and 20h playtime.',
      price: 549.00, discount_price: 499.00, stock: 35, rating: 4.9, num_reviews: 145, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'AirPods Max (USB-C)', Audio: 'Pro ANC & Spatial Audio', Connector: 'USB-C', Color: 'Starlight' }
    },
    {
      name: 'Apple AirPods Max (USB-C, Orange with Smart Case)',
      slug: 'apple-airpods-max-usb-c-orange',
      description: 'Vibrant fresh Orange USB-C AirPods Max with studio-quality audio, personalized spatial acoustics, and stainless steel frame.',
      price: 549.00, discount_price: 499.00, stock: 30, rating: 4.8, num_reviews: 80, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'AirPods Max (USB-C)', Audio: 'Lossless Audio via USB-C', Color: 'Orange' }
    },
    {
      name: 'Apple AirPods Pro 2 (USB-C, MagSafe Charging Case with Speaker & Lanyard Loop)',
      slug: 'apple-airpods-pro-2-usb-c',
      description: 'Up to 2x more Active Noise Cancellation powered by H2 chip, Adaptive Audio, Conversation Awareness, clinical-grade Hearing Aid feature, IP54 dust and sweat resistance, and precision finding case.',
      price: 249.00, discount_price: 199.00, stock: 110, rating: 4.9, num_reviews: 450, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'AirPods Pro 2', Chip: 'Apple H2 Headphone Chip + U1 Case Chip', ANC: '2x More Active Noise Cancellation + Adaptive Audio', Health: 'FDA Authorized Clinical Hearing Aid & Hearing Test', Battery: 'Up to 30 Hours with Case', Case: 'MagSafe USB-C Case with Speaker & Precision Finding' }
    },
    {
      name: 'Apple AirPods 4 with Active Noise Cancellation (Wireless Charging Case)',
      slug: 'apple-airpods-4-anc',
      description: 'First open-ear AirPods with Active Noise Cancellation, H2 chip, Adaptive Audio, Transparency mode, Conversation Awareness, and smallest wireless charging case.',
      price: 179.00, discount_price: 159.00, stock: 85, rating: 4.8, num_reviews: 195, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'AirPods 4 (ANC)', Fit: 'Open-Ear Ergonomic Fit', Chip: 'Apple H2', ANC: 'Active Noise Cancellation + Adaptive Audio', Case: 'Wireless Charging Case with Speaker', Battery: 'Up to 30 Hours Total' }
    },
    {
      name: 'Apple AirPods 4 (Standard USB-C Charging Case)',
      slug: 'apple-airpods-4-standard',
      description: 'Redesigned acoustic architecture with custom low-distortion driver, Personalized Spatial Audio, Voice Isolation, force sensor controls, and USB-C case.',
      price: 129.00, discount_price: 119.00, stock: 100, rating: 4.7, num_reviews: 160, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'AirPods 4', Chip: 'Apple H2', Audio: 'Personalized Spatial Audio with Head Tracking', Charging: 'USB-C', Battery: 'Up to 30 Hours' }
    },
    {
      name: 'Apple HomePod 2nd Gen (Midnight Smart Speaker with Spatial Audio)',
      slug: 'apple-homepod-2nd-gen-midnight',
      description: 'High-fidelity smart speaker with custom high-excursion woofer, beamforming 5-tweeter array, room sensing technology, Matter & Thread smart home hub, and Siri.',
      price: 299.00, discount_price: 269.00, stock: 45, rating: 4.8, num_reviews: 110, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'HomePod (2nd Gen)', Audio: '4" High-Excursion Woofer + 5x Beamforming Tweeters', SmartHome: 'Matter, Thread Border Router, Temp & Humidity Sensor', Processing: 'S7 Chip Real-time Computational Audio' }
    },
    {
      name: 'Apple HomePod mini (Space Gray)',
      slug: 'apple-homepod-mini-spacegray',
      description: 'Compact 3.3" spherical smart speaker with 360-degree audio, Apple S5 chip computational tuning, intercom broadcasts, and seamless iPhone handoff.',
      price: 99.00, discount_price: 89.00, stock: 90, rating: 4.8, num_reviews: 280, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'HomePod mini', Audio: 'Full-Range Driver & Dual Passive Radiators (360° Sound)', Voice: '4-Mic Far-Field Siri Array', SmartHome: 'Thread Border Router' }
    },
    {
      name: 'Apple HomePod mini (Blue)',
      slug: 'apple-homepod-mini-blue',
      description: 'Playful Blue mini speaker with room-filling sound, Apple Music integration, and smart home temperature sensor.',
      price: 99.00, discount_price: 89.00, stock: 65, rating: 4.8, num_reviews: 140, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'HomePod mini', Color: 'Blue', Audio: '360° Sound' }
    },
    {
      name: 'Apple TV 4K 128GB Wi-Fi + Ethernet (with Siri Remote USB-C)',
      slug: 'apple-tv-4k-128gb-ethernet',
      description: 'Cinematic powerhouse with A15 Bionic chip, 4K Dolby Vision, HDR10+, Dolby Atmos audio, Gigabit Ethernet, Thread smart home networking, and Siri Remote.',
      price: 149.00, discount_price: 129.00, stock: 70, rating: 4.9, num_reviews: 195, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple TV 4K (3rd Gen)', Processor: 'A15 Bionic Chip', Storage: '128GB', Video: '4K 60fps HDR10+ & Dolby Vision', Remote: 'Siri Remote with Touch-enabled Clickpad & USB-C' }
    },
    {
      name: 'Apple Pencil Pro (with Squeeze, Barrel Roll, Haptic Feedback & Find My)',
      slug: 'apple-pencil-pro',
      description: 'Advanced creative stylus with sensor squeeze menu, gyroscopic barrel roll rotation, haptic pulse feedback, Apple Pencil hover, and magnetic pairing/charging.',
      price: 129.00, discount_price: 114.00, stock: 120, rating: 4.9, num_reviews: 240, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple Pencil Pro', Compatibility: 'iPad Pro M4 & iPad Air M2 & iPad mini A17 Pro', Features: 'Squeeze, Barrel Roll, Haptic Feedback, Find My', Precision: 'Pixel-perfect accuracy with tilt & pressure sensitivity' }
    },
    {
      name: 'Apple Magic Keyboard for iPad Pro 13" M4 (Space Black Aluminum Palm Rest)',
      slug: 'apple-magic-keyboard-ipad-pro-13-black',
      description: 'Floating cantilever design with premium aluminum palm rest, 14-key function row with brightness & volume controls, and enlarged glass haptic trackpad.',
      price: 349.00, discount_price: 319.00, stock: 45, rating: 4.8, num_reviews: 88, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Magic Keyboard for iPad Pro 13"', Material: 'Machined Aluminum Palm Rest & Haptic Glass Trackpad', Connector: 'Smart Connector with USB-C Pass-through Charging' }
    },
    {
      name: 'Apple Magic Trackpad (USB-C, Black Aluminum)',
      slug: 'apple-magic-trackpad-black',
      description: 'Wireless and rechargeable trackpad with full Force Touch gestures and edge-to-edge glass surface.',
      price: 149.00, discount_price: 129.00, stock: 50, rating: 4.8, num_reviews: 95, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Magic Trackpad', Interface: 'Force Touch & Multi-Touch Gestures', Charging: 'USB-C Rechargeable' }
    },
    {
      name: 'Apple MagSafe Charger 25W Fast Wireless (2m Woven Cable)',
      slug: 'apple-magsafe-charger-25w-2m',
      description: 'Next-generation Qi2 wireless charger delivering up to 25W ultra-fast wireless charging for iPhone 16 models with braided 2-meter cable.',
      price: 49.00, discount_price: 39.00, stock: 130, rating: 4.9, num_reviews: 310, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'MagSafe Charger (25W)', Speed: 'Up to 25W Qi2 Fast Wireless', Cable: '2m Braided USB-C' }
    },
    {
      name: 'Apple AirTag 4-Pack (Precision Finding with U1 Ultra Wideband)',
      slug: 'apple-airtag-4-pack',
      description: 'Keep track of keys, wallet, luggage, and backpacks in the Find My app. Precision Finding with Ultra Wideband technology and built-in speaker.',
      price: 99.00, discount_price: 79.00, stock: 150, rating: 4.9, num_reviews: 580, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Apple', Model: 'Apple AirTag (4-Pack)', Chip: 'Apple U1 Ultra Wideband Chip', Battery: 'User-Replaceable CR2032 (Over 1 Year Life)', WaterResistance: 'IP67 Water & Dust Resistant' }
    }
  ];

  // Combine and assign category_id
  const allDevices = [...iphones, ...macs, ...ipads, ...wearablesAndAccessories];

  return allDevices.map((d) => ({
    ...d,
    category_id: categoryId
  }));
};
