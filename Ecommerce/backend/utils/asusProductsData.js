// backend/utils/asusProductsData.js
// 107 Unique, Non-Repeating Official ASUS Devices (ROG Strix, Zephyrus, Flow, Ally X, TUF Gaming, Zenbook DUO, ProArt Studiobooks & Displays, ROG Swift OLED, ROG RTX 4090 & Peripherals)

export const getAsusProducts = (categoryId) => {
  return [
    // --- 1. ASUS ROG STRIX, ZEPHYRUS & FLOW GAMING LAPTOPS & ALLY (20 Models) ---
    {
      name: 'ASUS ROG Strix SCAR 18 (2026 G834 - Core i9-14900HX, RTX 4090 16GB, 64GB DDR5, 4TB SSD)',
      slug: 'asus-rog-strix-scar-18-i9-14900hx-rtx-4090-64gb-4tb',
      description: 'The unrivaled desktop replacement gaming king: 18-inch 2.5K 240Hz ROG Nebula HDR Mini LED display with 2000+ local dimming zones and 1100 nits peak brightness, Intel Core i9-14900HX, NVIDIA GeForce RTX 4090 175W TGP with Conductonaut Extreme liquid metal on CPU & GPU, and tri-fan cooling.',
      price: 3999,
      discount_price: 3699,
      stock: 12,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 185,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core i9-14900HX (24 cores, 5.8GHz)', Graphics: 'NVIDIA GeForce RTX 4090 16GB GDDR6 (175W Max TGP)', RAM: '64GB DDR5 5600MHz', Storage: '4TB PCIe 4.0 NVMe M.2 Performance SSD (2TB+2TB RAID 0)', Display: '18" ROG Nebula HDR Mini LED 2.5K (2560x1600) 240Hz 3ms G-Sync' }
    },
    {
      name: 'ASUS ROG Strix SCAR 16 (2026 G634 - Core i9-14900HX, RTX 4080 12GB, 32GB RAM, 2TB SSD)',
      slug: 'asus-rog-strix-scar-16-i9-14900hx-rtx-4080-32gb-2tb',
      description: '16-inch ROG Nebula HDR Mini LED display (2560x1600 240Hz), Intel Core i9-14900HX, RTX 4080 175W, customizable ROG Armor Caps, and full-surround RGB lightbar.',
      price: 2999,
      discount_price: 2799,
      stock: 18,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 240,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core i9-14900HX', Graphics: 'NVIDIA GeForce RTX 4080 12GB (175W)', RAM: '32GB DDR5', Storage: '2TB NVMe SSD', Display: '16" 2.5K 240Hz Mini LED 1100 nits' }
    },
    {
      name: 'ASUS ROG Strix G18 (2026 G814 - Core i9-14900HX, RTX 4070 8GB, 32GB RAM, 1TB SSD)',
      slug: 'asus-rog-strix-g18-i9-14900hx-rtx-4070-32gb-1tb',
      description: 'Massive 18-inch 16:10 ROG Nebula Display (240Hz 3ms), Intel Core i9-14900HX, RTX 4070 140W, Aura Sync 4-zone RGB keyboard, and Dolby Atmos 4-speaker audio.',
      price: 2299,
      discount_price: 2099,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 190,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core i9-14900HX', Graphics: 'NVIDIA GeForce RTX 4070 8GB', RAM: '32GB DDR5', Storage: '1TB NVMe SSD', Display: '18" QHD+ 240Hz' }
    },
    {
      name: 'ASUS ROG Strix G16 (2026 G614 - Core i7-14650HX, RTX 4060 8GB, 16GB RAM, 1TB SSD)',
      slug: 'asus-rog-strix-g16-i7-14650hx-rtx-4060-16gb-1tb',
      description: 'Competitive esports esports machine: 16" FHD+ 165Hz IPS display, Intel Core i7-14650HX, RTX 4060 140W, MUX Switch with NVIDIA Advanced Optimus.',
      price: 1499,
      discount_price: 1349,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 310,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core i7-14650HX', Graphics: 'NVIDIA GeForce RTX 4060 8GB', RAM: '16GB DDR5', Storage: '1TB SSD', Display: '16" FHD+ 165Hz' }
    },
    {
      name: 'ASUS ROG Zephyrus G16 OLED (2026 GU605 - Ultra 9 185H, RTX 4090 16GB, 32GB RAM, 2TB SSD)',
      slug: 'asus-rog-zephyrus-g16-oled-ultra-9-rtx-4090-32gb-2tb',
      description: 'Masterpiece of thin-and-light gaming: CNC-machined unibody aluminum chassis, customizable Slash Lighting LED array across the lid, 16" 2.5K 240Hz 0.2ms ROG Nebula OLED display with G-Sync, Intel Core Ultra 9 185H, RTX 4090, 6-speaker audio with dual force-cancelling woofers, 1.85 kg.',
      price: 3499,
      discount_price: 3299,
      stock: 15,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 215,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core Ultra 9 185H with AI Boost NPU', Graphics: 'NVIDIA GeForce RTX 4090 16GB GDDR6', RAM: '32GB LPDDR5X 7467MHz', Storage: '2TB PCIe 4.0 NVMe SSD', Display: '16" 2.5K (2560x1600) 240Hz 0.2ms OLED VESA DisplayHDR True Black 500', Weight: '1.85 kg CNC Unibody' }
    },
    {
      name: 'ASUS ROG Zephyrus G16 AMD Edition (2026 GA605 - Ryzen AI 9 HX 370, RTX 4070, 32GB, 1TB)',
      slug: 'asus-rog-zephyrus-g16-amd-ryzen-ai-9-rtx-4070-32gb-1tb',
      description: 'Next-gen Copilot+ gaming laptop: AMD Ryzen AI 9 HX 370 with 50 TOPS NPU, RTX 4070 8GB, 16" 2.5K 240Hz OLED ROG Nebula display, Platinum White finish, 90Wh battery.',
      price: 2499,
      discount_price: 2299,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 140,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen AI 9 HX 370 (12 cores, 50 TOPS NPU)', Graphics: 'NVIDIA GeForce RTX 4070 8GB', RAM: '32GB LPDDR5X', Storage: '1TB NVMe SSD', Display: '16" 2.5K 240Hz OLED' }
    },
    {
      name: 'ASUS ROG Zephyrus G14 OLED (2026 GA403 - Ryzen 9 8945HS, RTX 4070, 32GB RAM, 1TB SSD)',
      slug: 'asus-rog-zephyrus-g14-oled-ryzen-9-rtx-4070-32gb-1tb',
      description: 'Ultraportable 14-inch titan: 1.5 kg CNC aluminum, 14" 3K (2880x1800) 120Hz 0.2ms ROG Nebula OLED display, AMD Ryzen 9 8945HS with Ryzen AI, RTX 4070, Slash Lighting, 73Wh battery.',
      price: 2199,
      discount_price: 1999,
      stock: 28,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 380,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen 9 8945HS (8 cores, 16 threads)', Graphics: 'NVIDIA GeForce RTX 4070 8GB GDDR6', RAM: '32GB LPDDR5X 6400MHz', Storage: '1TB PCIe 4.0 SSD', Display: '14" 3K (2880x1800) 120Hz OLED', Weight: '1.5 kg' }
    },
    {
      name: 'ASUS ROG Zephyrus G14 (Eclipse Gray, Ryzen 7 8845HS, RTX 4060, 16GB, 1TB SSD)',
      slug: 'asus-rog-zephyrus-g14-eclipse-gray-ryzen-7-rtx-4060',
      description: 'Eclipse Gray stealth finish: 14" 3K 120Hz OLED display, AMD Ryzen 7 8845HS, RTX 4060, 16GB RAM, 1TB SSD, 100W USB-C PD fast charge.',
      price: 1599,
      discount_price: 1449,
      stock: 32,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 290,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen 7 8845HS', Graphics: 'NVIDIA GeForce RTX 4060 8GB', RAM: '16GB LPDDR5X', Storage: '1TB NVMe SSD', Display: '14" 3K 120Hz OLED' }
    },
    {
      name: 'ASUS ROG Zephyrus Duo 16 (GX650 - Ryzen 9 7945HX, RTX 4090, 64GB DDR5, 4TB SSD)',
      slug: 'asus-rog-zephyrus-duo-16-dual-screen-ryzen-9-rtx-4090',
      description: 'Iconic dual-screen flagship: Primary 16" Mini LED QHD+ 240Hz display + secondary 14.1" 4K ROG ScreenPad Plus touchscreen that tilts 13 degrees, AMD Ryzen 9 7945HX 16-core CPU, RTX 4090, 64GB RAM, 4TB SSD.',
      price: 4499,
      discount_price: 4199,
      stock: 8,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 110,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen 9 7945HX (16 Cores, 32 Threads)', Graphics: 'NVIDIA GeForce RTX 4090 16GB (175W)', RAM: '64GB DDR5', Storage: '4TB NVMe SSD (2x 2TB RAID 0)', Displays: '16" Mini LED 240Hz + 14.1" 4K ScreenPad Plus Touch' }
    },
    {
      name: 'ASUS ROG Flow Z13 Gaming Tablet Laptop (GZ301 - Core i9-13900H, RTX 4060, 16GB, 1TB)',
      slug: 'asus-rog-flow-z13-gaming-tablet-i9-13900h-rtx-4060',
      description: 'World’s most powerful gaming tablet: 13.4" QHD+ 165Hz touch screen, Intel Core i9-13900H, RTX 4060, detachable RGB keyboard, CNC milled rear inspection window, XG Mobile eGPU port, 1.18 kg.',
      price: 1899,
      discount_price: 1749,
      stock: 20,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 210,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', FormFactor: 'Detachable 2-in-1 Gaming Tablet', Processor: 'Intel Core i9-13900H', Graphics: 'NVIDIA GeForce RTX 4060 8GB', Display: '13.4" QHD+ (2560x1600) 165Hz Touch', Weight: '1.18 kg' }
    },
    {
      name: 'ASUS ROG Flow X16 2-in-1 Convertible (GV601 - Core i9-13900H, RTX 4070, 32GB, 1TB)',
      slug: 'asus-rog-flow-x16-convertible-i9-13900h-rtx-4070',
      description: '16-inch 360° convertible gaming powerhouse: ROG Nebula HDR Mini LED (240Hz 1100 nits touch), Intel Core i9-13900H, RTX 4070, stylus support, Frost Force tri-fan cooling.',
      price: 2499,
      discount_price: 2299,
      stock: 16,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 145,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Hinge: '360° Flip Convertible', Processor: 'Intel Core i9-13900H', Graphics: 'NVIDIA GeForce RTX 4070 8GB', Display: '16" Mini LED 240Hz Touch', RAM: '32GB DDR5' }
    },
    {
      name: 'ASUS ROG Flow X13 (GV302 - Ryzen 9 7940HS, RTX 4070, 32GB RAM, 1TB SSD)',
      slug: 'asus-rog-flow-x13-ryzen-9-7940hs-rtx-4070-32gb-1tb',
      description: 'Compact 13.4" 360° convertible: AMD Ryzen 9 7940HS, RTX 4070, QHD+ 165Hz touch screen, Corning Gorilla Glass DXC, 1.3 kg ultralight form factor.',
      price: 1999,
      discount_price: 1849,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 165,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen 9 7940HS', Graphics: 'NVIDIA GeForce RTX 4070 8GB', Display: '13.4" QHD+ 165Hz Touch 360°', Weight: '1.3 kg' }
    },
    {
      name: 'ASUS ROG XG Mobile External GPU Dock (RTX 4090 16GB)',
      slug: 'asus-rog-xg-mobile-external-gpu-dock-rtx-4090',
      description: 'Proprietary PCIe 3.0 x8 interface eGPU: NVIDIA GeForce RTX 4090 Laptop GPU 16GB, built-in 330W power adapter, 2.5G LAN, HDMI 2.1, DisplayPort 1.4, USB-C & USB-A Hub.',
      price: 1999,
      discount_price: 1899,
      stock: 12,
      image_url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 80,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', GPU: 'NVIDIA GeForce RTX 4090 Laptop GPU 16GB', Interface: 'ROG XG Mobile Interface (PCIe x8) + USB-C', Power: 'Integrated 330W Adapter', IOHub: '2.5G LAN, HDMI 2.1, DP 1.4, 3x USB 3.2' }
    },
    {
      name: 'ASUS ROG Ally X Handheld Gaming Console (Ryzen Z1 Extreme, 24GB LPDDR5X, 1TB SSD)',
      slug: 'asus-rog-ally-x-handheld-gaming-console-ryzen-z1-extreme',
      description: 'The ultimate Windows 11 handheld gaming console: AMD Ryzen Z1 Extreme processor, upgraded 24GB LPDDR5X-7500 RAM, massive 1TB full-size M.2 2280 NVMe SSD, massive 80Wh battery (2x capacity), dual USB-C with Thunderbolt 4, enhanced ergonomics with redesigned Hall Effect joysticks and triggers, 7" FHD 120Hz 500 nits FreeSync Premium display.',
      price: 799,
      discount_price: 799,
      stock: 55,
      image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 950,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen Z1 Extreme (8 cores, 16 threads, 8.6 TFlops)', RAM: '24GB LPDDR5X 7500MHz Dual Channel', Storage: '1TB PCIe 4.0 NVMe M.2 2280 SSD', Battery: '80Wh (Double Playtime)', Display: '7" FHD (1920x1080) 120Hz 7ms 500 nits Gorilla Glass Victus', Connectivity: 'Dual USB-C (1x USB4 / Thunderbolt 4 + 1x USB 3.2 Gen 2)' }
    },
    {
      name: 'ASUS ROG Ally Handheld Gaming Console (Ryzen Z1 Extreme, 16GB RAM, 512GB SSD)',
      slug: 'asus-rog-ally-handheld-gaming-console-ryzen-z1-extreme-512gb',
      description: 'Groundbreaking handheld: AMD Ryzen Z1 Extreme, 16GB LPDDR5 RAM, 512GB SSD, 7" 1080p 120Hz FreeSync display, Armoury Crate SE software.',
      price: 649,
      discount_price: 549,
      stock: 45,
      image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 1420,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen Z1 Extreme', RAM: '16GB LPDDR5', Storage: '512GB NVMe SSD', Screen: '7" 120Hz Full HD' }
    },
    {
      name: 'ASUS ROG Strix SCAR 17 X3D (G733 - Ryzen 9 7945HX3D, RTX 4090 16GB, 32GB, 2TB)',
      slug: 'asus-rog-strix-scar-17-x3d-ryzen-9-7945hx3d-rtx-4090',
      description: 'World’s first 3D V-Cache mobile gaming laptop: AMD Ryzen 9 7945HX3D with 128MB L3 cache, RTX 4090 175W, 17.3" QHD 240Hz display, mechanical optical switches.',
      price: 3599,
      discount_price: 3399,
      stock: 10,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 130,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen 9 7945HX3D (128MB 3D V-Cache)', Graphics: 'NVIDIA GeForce RTX 4090 16GB (175W)', Display: '17.3" QHD (2560x1440) 240Hz 3ms', RAM: '32GB DDR5' }
    },
    {
      name: 'ASUS ROG Strix G17 (G713 - Ryzen 9 7845HX, RTX 4070, 16GB RAM, 1TB SSD)',
      slug: 'asus-rog-strix-g17-ryzen-9-7845hx-rtx-4070-16gb-1tb',
      description: '17.3-inch WQHD 240Hz gaming laptop, AMD Ryzen 9 7845HX 12-core processor, RTX 4070 140W, liquid metal thermal compound, and Wi-Fi 6E.',
      price: 1899,
      discount_price: 1699,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 210,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen 9 7845HX', Graphics: 'NVIDIA GeForce RTX 4070 8GB', Display: '17.3" WQHD 240Hz', RAM: '16GB DDR5' }
    },
    {
      name: 'ASUS ROG Strix G15 Advantage Edition (Ryzen 9 5900HX, Radeon RX 6800M 12GB)',
      slug: 'asus-rog-strix-g15-advantage-edition-ryzen-9-rx-6800m',
      description: 'All-AMD gaming beast: AMD Ryzen 9 5900HX, AMD Radeon RX 6800M 12GB GDDR6, 300Hz 3ms FHD display, and vapor chamber cooling.',
      price: 1499,
      discount_price: 1299,
      stock: 20,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 340,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen 9 5900HX', Graphics: 'AMD Radeon RX 6800M 12GB', Display: '15.6" FHD 300Hz 3ms' }
    },
    {
      name: 'ASUS ROG Zephyrus M16 (GU604 - Core i9-13900H, RTX 4080, AniMe Matrix, 32GB, 1TB)',
      slug: 'asus-rog-zephyrus-m16-i9-13900h-rtx-4080-anime-matrix',
      description: 'Lid equipped with customizable AniMe Matrix LED lighting display, 16" QHD+ 240Hz Mini LED Nebula HDR screen, Intel Core i9-13900H, RTX 4080 145W.',
      price: 2699,
      discount_price: 2499,
      stock: 14,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 175,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', LidDisplay: 'AniMe Matrix 18,710 CNC Milled Holes', Processor: 'Intel Core i9-13900H', Graphics: 'NVIDIA GeForce RTX 4080 12GB', Display: '16" Mini LED 240Hz' }
    },
    {
      name: 'ASUS ROG Flow Z13-ACRNM RMT02 Special Edition (i9-13900H, RTX 4070, 32GB)',
      slug: 'asus-rog-flow-z13-acrnm-rmt02-special-edition',
      description: 'Collaborative masterpiece with fashion-tech design house ACRONYM: Custom CNC-milled aluminum chassis with integrated carry harness straps, Core i9-13900H, RTX 4070.',
      price: 2499,
      discount_price: 2399,
      stock: 7,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 62,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Collaboration: 'ACRONYM Errolson Hugh Design', Chassis: 'Machined Aluminum with Integrated Strap System', Specs: 'i9-13900H, RTX 4070, 32GB RAM' }
    },

    // --- 2. ASUS TUF GAMING SERIES (12 Models) ---
    {
      name: 'ASUS TUF Gaming A16 Advantage Edition (FA617 - Ryzen 9 7940HX, RX 7700S 8GB, 16GB, 1TB)',
      slug: 'asus-tuf-gaming-a16-advantage-edition-ryzen-9-rx-7700s',
      description: '16-inch 16:10 QHD+ 240Hz display, AMD Ryzen 9 7940HX, Radeon RX 7700S with AMD SmartShift & SmartAccess Memory, MIL-STD-810H military durability, 90Wh battery.',
      price: 1399,
      discount_price: 1249,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 420,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen 9 7940HX', Graphics: 'AMD Radeon RX 7700S 8GB', Display: '16" QHD+ (2560x1600) 240Hz', Durability: 'MIL-STD-810H Military Standard' }
    },
    {
      name: 'ASUS TUF Gaming A15 (FA507 - Ryzen 9 8945HS, RTX 4070, 16GB DDR5, 1TB SSD)',
      slug: 'asus-tuf-gaming-a15-ryzen-9-8945hs-rtx-4070-16gb-1tb',
      description: 'AMD Ryzen 9 8945HS with Ryzen AI, RTX 4070 140W, 15.6" FHD 144Hz 100% sRGB display, Arc Flow Fans, 90Wh battery with fast charging.',
      price: 1499,
      discount_price: 1349,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 510,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen 9 8945HS', Graphics: 'NVIDIA GeForce RTX 4070 8GB (140W)', Display: '15.6" FHD 144Hz 100% sRGB', Battery: '90Wh' }
    },
    {
      name: 'ASUS TUF Gaming F15 (FX507 - Core i7-13620H, RTX 4060, 16GB RAM, 1TB SSD)',
      slug: 'asus-tuf-gaming-f15-i7-13620h-rtx-4060-16gb-1tb',
      description: 'Intel Core i7-13620H 10-core CPU, RTX 4060 140W, MUX Switch, 15.6" FHD 144Hz, Two-Way AI Noise Cancellation.',
      price: 1199,
      discount_price: 1049,
      stock: 50,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 680,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core i7-13620H', Graphics: 'NVIDIA GeForce RTX 4060 8GB', RAM: '16GB DDR5', Storage: '1TB NVMe SSD' }
    },
    {
      name: 'ASUS TUF Gaming A14 (FA401 - Ryzen AI 9 HX 370, RTX 4060, 16GB, 1TB SSD, 1.46 kg)',
      slug: 'asus-tuf-gaming-a14-ryzen-ai-9-rtx-4060-1-46kg',
      description: 'Ultraportable 14-inch military tough gaming machine: AMD Ryzen AI 9 HX 370 (50 TOPS NPU), RTX 4060, 14" 2.5K 165Hz IPS, 1.46 kg compact chassis.',
      price: 1399,
      discount_price: 1299,
      stock: 28,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 160,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen AI 9 HX 370', Graphics: 'NVIDIA GeForce RTX 4060 8GB', Display: '14" 2.5K 165Hz 3ms', Weight: '1.46 kg' }
    },
    {
      name: 'ASUS TUF Gaming F16 (FX607 - Core i7-13650HX, RTX 4060, 16GB RAM, 1TB SSD)',
      slug: 'asus-tuf-gaming-f16-i7-13650hx-rtx-4060-16gb-1tb',
      description: '16-inch 16:10 FHD+ 165Hz display, Intel Core i7-13650HX 14-core CPU, RTX 4060 130W, Thunderbolt 4, and 90Wh battery.',
      price: 1249,
      discount_price: 1099,
      stock: 38,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 290,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core i7-13650HX', Graphics: 'NVIDIA GeForce RTX 4060 8GB', Display: '16" 16:10 FHD+ 165Hz' }
    },
    {
      name: 'ASUS TUF Gaming A17 (FA707 - Ryzen 7 7735HS, RTX 4050, 16GB RAM, 512GB SSD)',
      slug: 'asus-tuf-gaming-a17-ryzen-7-7735hs-rtx-4050',
      description: 'Massive 17.3-inch 144Hz IPS display, AMD Ryzen 7 7735HS 8-core processor, RTX 4050 140W, 90Wh battery.',
      price: 1099,
      discount_price: 949,
      stock: 42,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 350,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen 7 7735HS', Graphics: 'NVIDIA GeForce RTX 4050 6GB', Display: '17.3" FHD 144Hz' }
    },
    {
      name: 'ASUS TUF Gaming F17 (FX707 - Core i7-12700H, RTX 4060, 16GB, 1TB SSD)',
      slug: 'asus-tuf-gaming-f17-i7-12700h-rtx-4060-16gb-1tb',
      description: '17.3-inch gaming workhorse: Intel Core i7-12700H, RTX 4060, full numpad RGB keyboard, and MIL-STD-810H drop testing.',
      price: 1299,
      discount_price: 1149,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 280,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core i7-12700H', Graphics: 'NVIDIA GeForce RTX 4060 8GB', Screen: '17.3" FHD 144Hz' }
    },
    {
      name: 'ASUS TUF Gaming GT502 Dual Chamber Mid-Tower Case',
      slug: 'asus-tuf-gaming-gt502-dual-chamber-mid-tower-case',
      description: 'Panoramic tempered glass front and side panels, dual chamber thermal layout, woven carry handles rated for 30 kg, support for 360mm radiators.',
      price: 179,
      discount_price: 159,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 310,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Type: 'Dual Chamber ATX Mid-Tower', Glass: 'Panoramic Front & Side Tempered Glass', Straps: 'Woven Cotton Carry Handles (30kg load)' }
    },
    {
      name: 'ASUS TUF Gaming LC II 360 ARGB Liquid CPU Cooler',
      slug: 'asus-tuf-gaming-lc-ii-360-argb-liquid-cpu-cooler',
      description: '360mm aluminum radiator with three 120mm ARGB fans: reinforced 400mm sleeved tubing, illuminated TUF logo pump cover, and Aura Sync compatibility.',
      price: 139,
      discount_price: 119,
      stock: 45,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 240,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Radiator: '360mm Radiator', Fans: '3x 120mm ARGB Fans (75.8 CFM)', Sockets: 'Intel LGA1700/1851 & AMD AM5/AM4' }
    },
    {
      name: 'ASUS TUF Gaming 1000W Gold Fully Modular Power Supply',
      slug: 'asus-tuf-gaming-1000w-gold-fully-modular-power-supply',
      description: 'ATX 3.0 compatible with native 16-pin PCIe 5.0 cable: 80 PLUS Gold certified, PCB conformal protective coating against dust and moisture, 10-year warranty.',
      price: 179,
      discount_price: 159,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 195,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Wattage: '1000 Watts', Efficiency: '80 PLUS Gold Certified', Standard: 'ATX 3.0 & PCIe 5.0 12VHPWR' }
    },
    {
      name: 'ASUS TUF Gaming VG27AQ3A 27" QHD 180Hz Fast IPS Monitor',
      slug: 'asus-tuf-gaming-vg27aq3a-27-qhd-180hz-fast-ips-monitor',
      description: '27-inch 2560x1440 Fast IPS gaming monitor: 180Hz overclocked refresh rate, 1ms GtG, ASUS Extreme Low Motion Blur Sync (ELMB Sync), and 130% sRGB color gamut.',
      price: 249,
      discount_price: 209,
      stock: 60,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 780,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Resolution: '27" QHD (2560x1440) Fast IPS', RefreshRate: '180Hz / 1ms GtG', Technology: 'ELMB Sync & FreeSync Premium' }
    },
    {
      name: 'ASUS TUF Gaming VG34VQL3A 34" Curved UWQHD 180Hz Monitor',
      slug: 'asus-tuf-gaming-vg34vql3a-34-curved-uwqhd-180hz-monitor',
      description: '34-inch 21:9 Ultra-Wide QHD (3440x1440) 1500R curved VA panel: 180Hz, DisplayHDR 400, FreeSync Premium Pro, and USB hub.',
      price: 369,
      discount_price: 329,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 320,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', ScreenSize: '34" 21:9 UWQHD (3440x1440)', Curve: '1500R Curvature', RefreshRate: '180Hz / 1ms' }
    },

    // --- 3. ASUS ZENBOOK & VIVOBOOK ULTRABOOKS (20 Models) ---
    {
      name: 'ASUS Zenbook DUO (2026 UX8406 - Dual 14" 3K 120Hz OLED, Ultra 9 185H, 32GB, 2TB)',
      slug: 'asus-zenbook-duo-dual-14-3k-oled-ultra-9-32gb-2tb',
      description: 'World’s first dual full-size 14-inch 3K 120Hz OLED touchscreen laptop: Full detachable magnetic Bluetooth keyboard with touchpad, built-in kickstand, Intel Core Ultra 9 185H with dedicated NPU, 32GB LPDDR5X, 2TB SSD, Intel Evo certified, bundled ASUS Pen 2.0.',
      price: 1899,
      discount_price: 1749,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 310,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', DualDisplays: '2x 14" 3K (2880x1800) 120Hz Lumina OLED Touchscreens (19.8" combined workspace)', Processor: 'Intel Core Ultra 9 185H (16 cores, AI NPU)', RAM: '32GB LPDDR5X', Storage: '2TB PCIe 4.0 SSD', Keyboard: 'Detachable Bluetooth Keyboard with Pogo Pin Charging' }
    },
    {
      name: 'ASUS Zenbook S 16 OLED (UM5606 - Ryzen AI 9 HX 370, Ceraluminum Lid, 32GB, 1TB)',
      slug: 'asus-zenbook-s-16-oled-ceraluminum-ryzen-ai-9-32gb-1tb',
      description: 'Revolutionary Ceraluminum high-tech ceramic lid material: 1.1cm ultra-thin and 1.5kg, 16" 3K 120Hz ASUS Lumina OLED display, AMD Ryzen AI 9 HX 370 with 50 TOPS NPU, 78Wh battery, geometric grille cooling.',
      price: 1699,
      discount_price: 1549,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 195,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Material: 'High-Tech Ceramic Ceraluminum Chassis', Thickness: '1.1 cm Ultra-Thin (1.5 kg)', Processor: 'AMD Ryzen AI 9 HX 370 (50 TOPS)', Display: '16" 3K (2880x1800) 120Hz OLED' }
    },
    {
      name: 'ASUS Zenbook 14 OLED (UX3405 - Ultra 7 155H, 16GB LPDDR5X, 1TB SSD, 1.2 kg)',
      slug: 'asus-zenbook-14-oled-ultra-7-155h-16gb-1tb',
      description: 'All-day premium ultrabook: 14" 3K 120Hz OLED 0.2ms display, Intel Core Ultra 7 155H, 75Wh battery with up to 15 hours runtime, super-linear speakers with Smart Amp.',
      price: 1299,
      discount_price: 1149,
      stock: 45,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 460,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core Ultra 7 155H', Display: '14" 3K (2880x1800) 120Hz OLED', Weight: '1.2 kg', Battery: '75Wh High-Capacity' }
    },
    {
      name: 'ASUS Zenbook 14 OLED Touch (Ponder Blue - Ultra 5 125H, 16GB RAM, 512GB SSD)',
      slug: 'asus-zenbook-14-oled-touch-ponder-blue-ultra-5',
      description: 'Ponder Blue finish with responsive touchscreen: Intel Core Ultra 5 125H, 16GB RAM, 512GB SSD, FHD IR camera with privacy shutter.',
      price: 999,
      discount_price: 899,
      stock: 50,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 320,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core Ultra 5 125H', Display: '14" FHD+ OLED Touchscreen', Color: 'Ponder Blue' }
    },
    {
      name: 'ASUS Zenbook Pro 16X OLED (UX7602 - Core i9-13905H, RTX 4080, 32GB, 2TB SSD)',
      slug: 'asus-zenbook-pro-16x-oled-i9-13905h-rtx-4080-32gb-2tb',
      description: 'Supercharged creator flagship: AAS Ultra mechanism tilts keyboard 7 degrees for 30% enhanced airflow and ergonomic typing, physical ASUS Dial controller, 16" 3.2K 120Hz OLED touchscreen.',
      price: 2999,
      discount_price: 2799,
      stock: 14,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 140,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Keyboard: 'AAS Ultra Auto-Tilting Keyboard', Controller: 'Physical Rotary ASUS Dial', Processor: 'Intel Core i9-13905H on System-on-Module', Graphics: 'NVIDIA GeForce RTX 4080 12GB', Display: '16" 3.2K 120Hz OLED Touch' }
    },
    {
      name: 'ASUS Zenbook Pro 14 OLED (UX6404 - Core i9-13900H, RTX 4070, ASUS DialPad, 1TB SSD)',
      slug: 'asus-zenbook-pro-14-oled-i9-13900h-rtx-4070-1tb',
      description: '14.5" 2.8K 120Hz OLED NanoEdge display, Intel Core i9-13900H, RTX 4070, ASUS DialPad on glass trackpad for Adobe Creative Cloud precision control, 1.65 kg.',
      price: 2099,
      discount_price: 1899,
      stock: 20,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 180,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Dial: 'Virtual ASUS DialPad on Touchpad', Processor: 'Intel Core i9-13900H', Graphics: 'NVIDIA GeForce RTX 4070 8GB', Display: '14.5" 2.8K 120Hz OLED' }
    },
    {
      name: 'ASUS Zenbook S 13 OLED (UX5304 - World’s Slimmest 1cm OLED Laptop, 1kg, Ultra 7)',
      slug: 'asus-zenbook-s-13-oled-slimmest-1cm-ultra-7-1kg',
      description: 'World’s slimmest OLED laptop: 1cm profile, 1.0 kg featherweight, Plasma Ceramic Aluminum eco-friendly lid, Intel Core Ultra 7 155H, 32GB RAM, 1TB SSD, 13.3" 2.8K OLED.',
      price: 1399,
      discount_price: 1249,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 410,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Profile: '1.0 cm Ultra-Slim (1.0 kg Weight)', Processor: 'Intel Core Ultra 7 155H', Display: '13.3" 2.8K (2880x1800) OLED 16:10', RAM: '32GB LPDDR5X' }
    },
    {
      name: 'ASUS Zenbook 15 OLED (UM3504 - Ryzen 7 7735U, Radeon 680M, 16GB, 1TB SSD)',
      slug: 'asus-zenbook-15-oled-ryzen-7-7735u-16gb-1tb',
      description: '15.6" 2.8K 120Hz OLED display, AMD Ryzen 7 7735U 8-core CPU, 1.4 kg lightweight magnesium-aluminum body, 67Wh battery.',
      price: 1099,
      discount_price: 999,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 230,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen 7 7735U', Display: '15.6" 2.8K 120Hz OLED', Weight: '1.4 kg' }
    },
    {
      name: 'ASUS Zenbook Flip 14 OLED (UP3404 - 360° Convertible, Core i7-1360P, 16GB, 1TB)',
      slug: 'asus-zenbook-flip-14-oled-convertible-i7-1360p-16gb-1tb',
      description: '360° ErgoLift hinge turns laptop into tablet or tent: 14" 2.8K 90Hz OLED touch display, Intel Core i7-1360P, bundled ASUS Pen 2.0 active stylus.',
      price: 1199,
      discount_price: 1049,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 190,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Hinge: '360° ErgoLift Convertible', Processor: 'Intel Core i7-1360P', Display: '14" 2.8K 90Hz OLED Touch', Stylus: 'ASUS Pen 2.0 Included' }
    },
    {
      name: 'ASUS Vivobook S 15 OLED Copilot+ PC (S5507 - Snapdragon X Elite, 32GB RAM, 1TB SSD)',
      slug: 'asus-vivobook-s-15-oled-copilot-snapdragon-x-elite-32gb-1tb',
      description: 'First Copilot+ AI PC: Qualcomm Snapdragon X Elite processor with 45 TOPS NPU, 32GB LPDDR5X, 1TB SSD, 15.6" 3K 120Hz OLED, single-zone RGB keyboard with dedicated Copilot key, 18+ hours battery.',
      price: 1299,
      discount_price: 1199,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 260,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Snapdragon X Elite (12 Cores, 45 TOPS NPU)', Display: '15.6" 3K (2880x1620) 120Hz OLED', Battery: 'Up to 18 Hours (70Wh)', RAM: '32GB LPDDR5X 8448MHz' }
    },
    {
      name: 'ASUS Vivobook Pro 15 OLED (N6506 - Ultra 9 185H, RTX 4060, ASUS Dial, 16GB, 1TB)',
      slug: 'asus-vivobook-pro-15-oled-ultra-9-rtx-4060-16gb-1tb',
      description: 'Creative power tool: 15.6" 3K 120Hz OLED display, Intel Core Ultra 9 185H, RTX 4060, physical ASUS Dial controller, Harman Kardon audio.',
      price: 1499,
      discount_price: 1349,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 170,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core Ultra 9 185H', Graphics: 'NVIDIA GeForce RTX 4060 8GB', Dial: 'ASUS Dial Rotary Controller', Display: '15.6" 3K 120Hz OLED' }
    },
    {
      name: 'ASUS Vivobook 16 (X1605 - Core i7-1255U, 16GB RAM, 512GB SSD)',
      slug: 'asus-vivobook-16-i7-1255u-16gb-512gb',
      description: 'Everyday productivity workhorse: 16" 16:10 WUXGA NanoEdge display, 180° lay-flat hinge, physical webcam shield, and ASUS Antimicrobial Guard Plus.',
      price: 699,
      discount_price: 599,
      stock: 65,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 580,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core i7-1255U 10-core', Display: '16" 16:10 WUXGA (1920x1200)', Protection: 'ASUS Antimicrobial Guard Plus' }
    },
    {
      name: 'ASUS Vivobook Go 15 OLED (E1504 - Ryzen 5 7520U, 16GB RAM, 512GB SSD)',
      slug: 'asus-vivobook-go-15-oled-ryzen-5-16gb-512gb',
      description: 'Affordable OLED excellence: 15.6" FHD OLED display with 100% DCI-P3 color gamut, AMD Ryzen 5 7520U, fast charging to 60% in 49 minutes.',
      price: 549,
      discount_price: 479,
      stock: 70,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 490,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Display: '15.6" FHD (1920x1080) OLED 600 nits', Processor: 'AMD Ryzen 5 7520U', Weight: '1.63 kg' }
    },
    {
      name: 'ASUS Vivobook S 16 OLED (S5606 - Ultra 7 155H, 16GB RAM, 1TB SSD)',
      slug: 'asus-vivobook-s-16-oled-ultra-7-155h-16gb-1tb',
      description: 'Sleek all-metal design: 16" 3.2K 120Hz OLED display, Intel Core Ultra 7 155H, single-zone RGB keyboard, 75Wh battery.',
      price: 1149,
      discount_price: 1049,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 210,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core Ultra 7 155H', Display: '16" 3.2K (3200x2000) 120Hz OLED', Battery: '75Wh' }
    },
    {
      name: 'ASUS Vivobook 14 (X1404 - Core i5-1335U, 16GB RAM, 512GB SSD)',
      slug: 'asus-vivobook-14-i5-1335u-16gb-512gb',
      description: 'Compact 14-inch laptop for students and mobile work: Intel Core i5-1335U, 16GB RAM, 14" FHD IPS display, fingerprint sensor on touchpad.',
      price: 599,
      discount_price: 519,
      stock: 55,
      image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.6,
      num_reviews: 380,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core i5-1335U', Display: '14" FHD (1920x1080) Anti-Glare', Weight: '1.4 kg' }
    },
    {
      name: 'ASUS ZenScreen OLED MQ16AH 15.6" Portable OLED Monitor',
      slug: 'asus-zenscreen-oled-mq16ah-15-6-portable-monitor',
      description: '15.6-inch FHD (1920x1080) portable OLED display: 100% DCI-P3, Delta E < 2, 1ms response time, Mini HDMI and dual USB-C ports, smart cover stand.',
      price: 399,
      discount_price: 349,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 240,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Display: '15.6" FHD OLED (100% DCI-P3)', Weight: '650g Ultra-Slim 5mm profile', Connectivity: 'Mini HDMI + 2x USB-C with DisplayPort Alt Mode' }
    },
    {
      name: 'ASUS ZenScreen Touch MB16AMT 15.6" Portable Touch Monitor',
      slug: 'asus-zenscreen-touch-mb16amt-portable-touch-monitor',
      description: '10-point capacitive touchscreen with built-in 7800mAh battery for 4 hours untethered second-screen productivity: foldable smart case.',
      price: 329,
      discount_price: 289,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 190,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Battery: '7800mAh Built-in Battery', Touch: '10-Point Capacitive Multi-Touch', Display: '15.6" IPS Full HD' }
    },
    {
      name: 'ASUS ZenScreen Stand MTS01D Ergonomic Portable Stand',
      slug: 'asus-zenscreen-stand-mts01d-ergonomic-portable-stand',
      description: 'Height, pivot, and tilt adjustable aluminum desktop stand for ASUS ZenScreen portable monitors.',
      price: 59,
      discount_price: 49,
      stock: 60,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 110,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Adjustments: 'Height (215mm), Tilt (+17°/-20°), 90° Pivot' }
    },
    {
      name: 'ASUS Pen 2.0 Active Stylus (4096 Pressure Levels)',
      slug: 'asus-pen-2-0-active-stylus-4096-pressure-levels',
      description: 'Microsoft Pen Protocol (MPP 2.0) stylus: 4096 levels of pressure sensitivity, 4 interchangeable tips (2H, H, HB, B), USB-C fast charging.',
      price: 79,
      discount_price: 69,
      stock: 80,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 320,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Protocol: 'MPP 2.0', Sensitivity: '4096 Pressure Levels & Tilt Support', Tips: '4 Interchangeable Pen Tips Included' }
    },
    {
      name: 'ASUS 100W 3-Port GaN Fast Power Adapter',
      slug: 'asus-100w-3-port-gan-fast-power-adapter',
      description: 'Gallium Nitride (GaN) compact charger with dual USB-C (up to 100W PD) and USB-A fast charging for Zenbook and ROG laptops.',
      price: 69,
      discount_price: 59,
      stock: 90,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 440,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Power: '100W Power Delivery 3.0', Ports: '2x USB-C + 1x USB-A', Technology: 'Gallium Nitride (GaN)' }
    },

    // --- 4. ASUS PROART CREATOR SERIES & WORKSTATIONS (14 Models) ---
    {
      name: 'ASUS ProArt Studiobook Pro 16 OLED (W7604 - Core i9-13980HX, RTX 3000 Ada, 64GB, 4TB)',
      slug: 'asus-proart-studiobook-pro-16-oled-rtx-3000-ada-64gb-4tb',
      description: 'ISV-certified studio mobile workstation: 16" 3.2K 120Hz OLED touchscreen with Delta E < 1 and Calman verification, physical rotary ASUS Dial for fine control in Premiere/Photoshop/DaVinci, Intel Core i9-13980HX 24-core CPU, NVIDIA RTX 3000 Ada Generation 8GB, 64GB DDR5, 4TB PCIe 4.0 SSD, haptic stylus trackpad.',
      price: 3699,
      discount_price: 3399,
      stock: 10,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 78,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Dial: 'Physical Precision Rotary ASUS Dial', Graphics: 'NVIDIA RTX 3000 Ada Generation 8GB (ISV Certified)', Processor: 'Intel Core i9-13980HX (24 Cores)', Display: '16" 3.2K 120Hz OLED Touch Delta E < 1', RAM: '64GB DDR5 (ECC Support)' }
    },
    {
      name: 'ASUS ProArt Studiobook 16 OLED (H7604 - Core i9-13980HX, RTX 4070 8GB, 32GB, 2TB)',
      slug: 'asus-proart-studiobook-16-oled-i9-13980hx-rtx-4070',
      description: 'Creative workhorse: Intel Core i9-13980HX, RTX 4070 with NVIDIA Studio Drivers, 3.2K 120Hz OLED touchscreen, physical ASUS Dial, 90Wh battery.',
      price: 2499,
      discount_price: 2299,
      stock: 16,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 135,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Intel Core i9-13980HX', Graphics: 'NVIDIA GeForce RTX 4070 8GB', Dial: 'Physical ASUS Dial', Display: '16" 3.2K 120Hz OLED Touch' }
    },
    {
      name: 'ASUS ProArt P16 AI Studio Laptop (H7606 - Ryzen AI 9 HX 370, RTX 4070, 64GB, 2TB)',
      slug: 'asus-proart-p16-ai-studio-laptop-ryzen-ai-9-rtx-4070',
      description: 'Next-gen AI creative studio: AMD Ryzen AI 9 HX 370 with 50 TOPS NPU, RTX 4070, 64GB LPDDR5X, 2TB SSD, 16" 4K Lumina OLED touchscreen with ASUS DialPad, 1.85 kg.',
      price: 2699,
      discount_price: 2499,
      stock: 18,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 95,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'AMD Ryzen AI 9 HX 370 (50 TOPS NPU)', Graphics: 'NVIDIA GeForce RTX 4070 8GB', RAM: '64GB LPDDR5X 7500MHz', Display: '16" 4K (3840x2400) Lumina OLED Touch' }
    },
    {
      name: 'ASUS ProArt PX13 AI Convertible Laptop (HN7306 - Ryzen AI 9 HX 370, RTX 4060, 32GB)',
      slug: 'asus-proart-px13-ai-convertible-ryzen-ai-9-rtx-4060',
      description: '13.3" 360° convertible AI laptop: 3K Lumina OLED touchscreen, AMD Ryzen AI 9 HX 370, RTX 4060, ASUS DialPad, 1.38 kg.',
      price: 1999,
      discount_price: 1849,
      stock: 20,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 110,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Hinge: '360° Convertible', Processor: 'AMD Ryzen AI 9 HX 370', Graphics: 'NVIDIA GeForce RTX 4060 8GB', Display: '13.3" 3K OLED Touch' }
    },
    {
      name: 'ASUS ProArt PZ13 AI Detachable Tablet (HT5306 - Snapdragon X Plus, IP52, 13.3" 3K OLED)',
      slug: 'asus-proart-pz13-ai-detachable-tablet-snapdragon-x-plus',
      description: '0.85 kg IP52-rated outdoor creator tablet: Qualcomm Snapdragon X Plus, 13.3" 3K OLED touch, magnetic keyboard and cover stand included.',
      price: 1099,
      discount_price: 999,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 80,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', FormFactor: 'Detachable Tablet with IP52 Resistance', Processor: 'Qualcomm Snapdragon X Plus', Display: '13.3" 3K OLED Touch', Weight: '0.85 kg' }
    },
    {
      name: 'ASUS ProArt Display PA32UCG-K 32" 4K 120Hz Mini LED HDR 1600 Monitor',
      slug: 'asus-proart-display-pa32ucg-k-32-4k-120hz-mini-led',
      description: 'World’s first 1600-nit HDR monitor with 120Hz variable refresh rate: 1152-zone local dimming Mini LED backlight, true 10-bit color, 98% DCI-P3, dual Thunderbolt 3 ports, and bundled X-rite i1 Display Pro hardware calibrator.',
      price: 2999,
      discount_price: 2799,
      stock: 8,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 64,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Panel: '32" 4K (3840x2160) Mini LED 1152 Zones', Brightness: '1600 nits Peak (1000 nits Sustained)', RefreshRate: '120Hz VRR', Ports: 'Dual Thunderbolt 3 (60W PD) + HDMI 2.1', Calibrator: 'X-rite i1 Display Pro Included' }
    },
    {
      name: 'ASUS ProArt Display PA329CRV 32" 4K HDR Color-Accurate Monitor',
      slug: 'asus-proart-display-pa329crv-32-4k-hdr-color-accurate',
      description: '32-inch 4K IPS with 98% DCI-P3 & 100% sRGB: Factory pre-calibrated Delta E < 2, Calman Verified, 96W USB-C Power Delivery with daisy-chain DisplayPort support.',
      price: 699,
      discount_price: 629,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 180,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Display: '32" 4K IPS (3840x2160)', ColorAccuracy: 'Delta E < 2 Calman Verified', USBPort: '96W USB-C with DP Daisy Chain' }
    },
    {
      name: 'ASUS ProArt Display PA279CRV 27" 4K HDR Monitor',
      slug: 'asus-proart-display-pa279crv-27-4k-hdr-monitor',
      description: '27-inch 4K UHD professional display: 99% DCI-P3 & Adobe RGB, 96W USB-C, ergonomic stand with full tilt, swivel, pivot, and height adjustment.',
      price: 499,
      discount_price: 449,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 320,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Display: '27" 4K UHD (3840x2160) IPS', Color: '99% DCI-P3 & 99% Adobe RGB', USBC: '96W Single-Cable Power Delivery' }
    },
    {
      name: 'ASUS ProArt Display PA169CDV 15.6" 4K Portable Pen Display',
      slug: 'asus-proart-display-pa169cdv-portable-pen-display',
      description: 'World’s first portable monitor with dual Calman and PANTONE Validated certifications: 15.6" 4K IPS, bundled ProArt Pen with Wacom EMR technology (no charging needed), dual kickstands.',
      price: 899,
      discount_price: 799,
      stock: 18,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 95,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', PenTech: 'Wacom EMR ProArt Pen (Battery-Free)', Display: '15.6" 4K IPS 10-bit', Calibration: 'Calman & PANTONE Validated' }
    },
    {
      name: 'ASUS ProArt Mouse MD300 with ASUS Dial',
      slug: 'asus-proart-mouse-md300-with-asus-dial',
      description: 'Creator mouse with integrated physical ASUS Dial and side scroll wheel: 4200 DPI optical sensor, independent middle button with Kailh switches, fast charging.',
      price: 129,
      discount_price: 99,
      stock: 45,
      image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 140,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Dial: 'Integrated Physical ASUS Dial', Sensor: '4200 DPI Optical', Connectivity: '2.4GHz Wireless + Bluetooth' }
    },
    {
      name: 'ASUS ProArt Mouse Pad PS201 Magnetic Leatherette',
      slug: 'asus-proart-mouse-pad-ps201-magnetic-leatherette',
      description: 'Elegant premium leatherette desk mat with two hidden magnetic clips to anchor charging cables and pens in place.',
      price: 39,
      discount_price: 34,
      stock: 75,
      image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 85,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Material: 'Water-Repellent Premium Leatherette', Magnets: '2x Embedded Magnetic Cable Keepers' }
    },
    {
      name: 'ASUS ProArt GeForce RTX 4080 SUPER 16GB OC Edition GPU',
      slug: 'asus-proart-geforce-rtx-4080-super-16gb-oc-gpu',
      description: 'Minimalist 2.5-slot design engineered for content creation workstations: Axial-tech fans with dual ball bearings, 0dB quiet mode, metal exoskeleton, 3 months Adobe Creative Cloud included.',
      price: 1149,
      discount_price: 1099,
      stock: 15,
      image_url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 160,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Engine: 'NVIDIA GeForce RTX 4080 SUPER', VRAM: '16GB GDDR6X 256-bit', Design: '2.5-Slot Compact ProArt Footprint', Bundle: '3-Month Adobe Creative Cloud Subscription' }
    },
    {
      name: 'ASUS ProArt LC 420 Liquid CPU Cooler (Noctua Fans)',
      slug: 'asus-proart-lc-420-liquid-cpu-cooler-noctua-fans',
      description: 'Massive 420mm radiator equipped with three industrial Noctua NF-A14 industrialPPC-2000 PWM fans: illuminated real-time system status meter on pump block.',
      price: 269,
      discount_price: 249,
      stock: 20,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 90,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Radiator: '420mm Radiator', Fans: '3x Noctua NF-A14 iPPC-2000 Fans', Meter: 'Minimalist Real-Time System Load Meter' }
    },
    {
      name: 'ASUS ProArt Z790-CREATOR WIFI Motherboard',
      slug: 'asus-proart-z790-creator-wifi-motherboard',
      description: 'Dual Thunderbolt 4 ports, 10Gb and 2.5Gb dual Ethernet, PCIe 5.0 x16 slot, 4x M.2 slots, 16+1 power stages for Core i9 processors.',
      price: 469,
      discount_price: 429,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 140,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Socket: 'LGA1700 (14th/13th Gen Intel)', Thunderbolt: 'Dual Thunderbolt 4 Type-C (40Gbps)', Networking: 'Marvell AQtion 10Gb + Intel 2.5Gb Ethernet + Wi-Fi 6E' }
    },

    // --- 5. ASUS ROG MONITORS, DESKTOPS, GPUS & COMPONENTS (20 Models) ---
    {
      name: 'ASUS ROG Swift OLED PG32UCDM 32" 4K 240Hz QD-OLED Monitor',
      slug: 'asus-rog-swift-oled-pg32ucdm-32-4k-240hz-qd-oled',
      description: 'The holy grail of gaming monitors: 32-inch 4K QD-OLED panel, 240Hz refresh rate, blistering 0.03ms GtG response time, custom graphene heatsink with zero noisy fans, 99% DCI-P3, DisplayHDR True Black 400, USB-C 90W PD, and KVM switch.',
      price: 1299,
      discount_price: 1199,
      stock: 18,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 340,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Panel: '32" 4K (3840x2160) QD-OLED', RefreshRate: '240Hz / 0.03ms GtG', Cooling: 'Graphene Film & Custom Heatsink (Fanless)', Ports: 'DP 1.4 (DSC), HDMI 2.1, USB-C (90W PD)' }
    },
    {
      name: 'ASUS ROG Swift OLED PG27AQDM 27" 1440p 240Hz OLED Monitor',
      slug: 'asus-rog-swift-oled-pg27aqdm-27-1440p-240hz-oled',
      description: '27-inch 1440p OLED gaming monitor: 240Hz, 0.03ms response time, anti-glare micro-texture coating, uniform brightness mode, and DisplayWidget Center.',
      price: 899,
      discount_price: 799,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 420,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Panel: '27" QHD (2560x1440) OLED', RefreshRate: '240Hz / 0.03ms', Coating: 'Anti-Glare Micro-Texture' }
    },
    {
      name: 'ASUS ROG Swift Pro PG248QP 24.1" 540Hz Esports Gaming Monitor',
      slug: 'asus-rog-swift-pro-pg248qp-24-1-540hz-esports-monitor',
      description: 'World’s fastest esports monitor: 540Hz (OC) Esports-TN (E-TN) panel, built-in NVIDIA G-Sync processor, Ultra Low Motion Blur 2 (ULMB 2) with 2000Hz+ effective clarity, ESS Codec audio.',
      price: 899,
      discount_price: 849,
      stock: 15,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 180,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', RefreshRate: '540Hz Overclocked', Panel: '24.1" Esports-TN (E-TN)', BlurReduction: 'NVIDIA ULMB 2 (Full Refresh Rate Backlight Strobing)', Audio: 'ESS Quad-DAC Built-in' }
    },
    {
      name: 'ASUS ROG Swift PG38UQ 38" 4K 144Hz Fast IPS Gaming Display',
      slug: 'asus-rog-swift-pg38uq-38-4k-144hz-fast-ips-display',
      description: '38-inch 4K UHD Fast IPS monitor: 144Hz, 1ms GtG, HDMI 2.1 for PS5/Xbox 4K 120Hz gaming, DisplayHDR 600, built-in 5W stereo speakers.',
      price: 899,
      discount_price: 799,
      stock: 20,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 120,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', ScreenSize: '38" 4K UHD (3840x2160)', RefreshRate: '144Hz Fast IPS', ConsoleReady: 'HDMI 2.1 Full 48Gbps' }
    },
    {
      name: 'ASUS ROG Swift PG49WCD 49" Curved QD-OLED Super-Ultrawide Monitor',
      slug: 'asus-rog-swift-pg49wcd-49-curved-qd-oled-monitor',
      description: '49-inch 32:9 Super-Ultrawide (5120x1440) 1800R curved QD-OLED: 144Hz, 0.03ms, Smart KVM switch to control two PCs with one mouse/keyboard, 90W USB-C PD.',
      price: 1499,
      discount_price: 1299,
      stock: 12,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 95,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', AspectRatio: '49" 32:9 Super Ultra-Wide (5120x1440)', Panel: '1800R Curved QD-OLED', RefreshRate: '144Hz / 0.03ms', KVM: 'Smart KVM Dual PC Control' }
    },
    {
      name: 'ASUS ROG Hyperion GR701 Flagship Full-Tower E-ATX Gaming Case',
      slug: 'asus-rog-hyperion-gr701-full-tower-gaming-case',
      description: 'Monumental chassis: Dual 420mm radiator support, integrated aluminum X-frame capable of supporting 80kg, dual USB 3.2 Gen 2x2 Type-C (60W fast charge), built-in ARGB lighting hub and tool storage drawer.',
      price: 499,
      discount_price: 449,
      stock: 15,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 110,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', FormFactor: 'E-ATX Full Tower', RadiatorSupport: 'Dual 420mm Radiators', FrontIO: 'Dual 20Gbps Type-C with 60W Fast Charging', Weight: '20.8 kg Aluminum Die-Cast' }
    },
    {
      name: 'ASUS ROG Hyperion BTF Edition Full-Tower Chassis',
      slug: 'asus-rog-hyperion-btf-edition-full-tower-chassis',
      description: 'Engineered for Back-To-the-Future hidden-connector motherboards: zero visible front cables for the cleanest PC build imaginable.',
      price: 529,
      discount_price: 479,
      stock: 12,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 70,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Compatibility: 'BTF Hidden-Connector Motherboards & Standard E-ATX', CableManagement: '34mm Deep Cable Routing Channel' }
    },
    {
      name: 'ASUS ROG Matrix Platinum GeForce RTX 4090 24GB Graphics Card',
      slug: 'asus-rog-matrix-platinum-geforce-rtx-4090-24gb',
      description: 'The world-record breaking GPU: Liquid metal thermal compound applied directly on the GPU die, custom 360mm all-in-one AIO radiator, infinity mirror ARGB chamber, and highest boost clocks on the planet.',
      price: 3199,
      discount_price: 2999,
      stock: 5,
      image_url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 48,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', GPU: 'NVIDIA GeForce RTX 4090 24GB GDDR6X', Thermal: 'Liquid Metal GPU Compound + Custom 360mm AIO', BoostClock: 'Highest Factory Overclock (2700MHz+)' }
    },
    {
      name: 'ASUS ROG Strix GeForce RTX 4090 24GB White OC Edition GPU',
      slug: 'asus-rog-strix-geforce-rtx-4090-24gb-white-oc',
      description: 'All-white die-cast shroud: 3.5-slot vapor chamber design, 3x Axial-tech fans pushing 23% more air, Aura Sync RGB ring.',
      price: 2099,
      discount_price: 1999,
      stock: 10,
      image_url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 210,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', GPU: 'RTX 4090 24GB', Finish: 'All-White Edition', Slot: '3.5-Slot Vapor Chamber' }
    },
    {
      name: 'ASUS ROG Strix GeForce RTX 4080 SUPER 16GB OC Edition GPU',
      slug: 'asus-rog-strix-geforce-rtx-4080-super-16gb-oc',
      description: 'Patented vapor chamber with milled heatspreader: 16GB GDDR6X, dual BIOS switch, vented exoskeleton.',
      price: 1249,
      discount_price: 1149,
      stock: 20,
      image_url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 180,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', GPU: 'RTX 4080 SUPER 16GB GDDR6X', Power: '16-Pin 12VHPWR' }
    },
    {
      name: 'ASUS ROG Maximus Z790 DARK HERO Motherboard',
      slug: 'asus-rog-maximus-z790-dark-hero-motherboard',
      description: 'Flagship Intel LGA1700 motherboard: 20+1+2 power stages (90A), onboard Wi-Fi 7 with ASUS WiFi Q-Antenna, dual Thunderbolt 4 ports, PCIe 5.0 M.2 slot, Polymo Lighting on I/O shroud.',
      price: 699,
      discount_price: 629,
      stock: 18,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 195,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Socket: 'LGA1700 (14th/13th Gen Intel)', VRM: '20+1+2 Power Stages (90A)', Wireless: 'Wi-Fi 7 with 320MHz Channels', Storage: '5x M.2 Slots (1x PCIe 5.0)' }
    },
    {
      name: 'ASUS ROG Crosshair X670E HERO Motherboard (AMD AM5)',
      slug: 'asus-rog-crosshair-x670e-hero-motherboard-amd-am5',
      description: 'AMD Ryzen 9000/7000 series flagship: 18+2 power stages (110A), dual PCIe 5.0 x16 slots, USB4 40Gbps ports, Polymo Lighting, DDR5 memory OC up to 8000MT/s.',
      price: 649,
      discount_price: 579,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 230,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Socket: 'AMD AM5 (PCIe 5.0 Ready)', PowerStages: '18+2 Stages (110A)', Ports: 'Dual USB4 40Gbps Ports' }
    },
    {
      name: 'ASUS ROG Strix Z790-E Gaming WIFI II Motherboard',
      slug: 'asus-rog-strix-z790-e-gaming-wifi-ii-motherboard',
      description: '18+1+2 power stages, Wi-Fi 7, PCIe 5.0 M.2 slot with combo-sink, Q-Release button for graphics card removal without tools.',
      price: 499,
      discount_price: 449,
      stock: 28,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 310,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Socket: 'Intel LGA1700', Networking: 'Wi-Fi 7 + Intel 2.5Gb LAN', Features: 'PCIe Slot Q-Release & M.2 Q-Latch' }
    },
    {
      name: 'ASUS ROG Ryujin III 360 ARGB Liquid CPU Cooler (3.5" LCD Screen)',
      slug: 'asus-rog-ryujin-iii-360-argb-liquid-cpu-cooler-lcd',
      description: 'Massive 3.5-inch full-color 60Hz LCD screen displaying real-time system stats or custom GIFs: 8th gen Asetek pump, built-in VRM fan inside pump housing, 3x magnetic daisy-chainable ARGB fans.',
      price: 349,
      discount_price: 319,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 260,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Screen: '3.5" Full-Color 60Hz LCD Screen (32MB Memory)', Pump: 'Asetek 8th Gen Motor + Embedded VRM Fan', Fans: '3x Magnetic Daisy-Chain 120mm ARGB' }
    },
    {
      name: 'ASUS ROG Thor 1200W Platinum II Power Supply with OLED Screen',
      slug: 'asus-rog-thor-1200w-platinum-ii-power-supply-oled',
      description: 'Built-in OLED power display showing live wattage consumption in real time: 80 PLUS Platinum certified, 100% Japanese capacitors, PCIe 5.0 16-pin cable, 0dB quiet mode.',
      price: 369,
      discount_price: 329,
      stock: 18,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 180,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Wattage: '1200 Watts (80 PLUS Platinum)', Screen: 'Integrated OLED Live Wattage Display', Cable: 'PCIe 5.0 12VHPWR 600W Cable' }
    },
    {
      name: 'ASUS ROG Loki SFX-L 1000W Platinum Power Supply (Small Form Factor)',
      slug: 'asus-rog-loki-sfx-l-1000w-platinum-power-supply',
      description: 'Ultra-compact SFX-L PSU for Mini-ITX builds: 1000W output, 80 PLUS Platinum, ARGB 120mm fan, PCIe 5.0 ready.',
      price: 279,
      discount_price: 249,
      stock: 20,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 95,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', FormFactor: 'SFX-L Small Form Factor', Wattage: '1000 Watts Platinum' }
    },
    {
      name: 'ASUS ROG Rapture GT-BE98 Quad-Band Wi-Fi 7 Gaming Router',
      slug: 'asus-rog-rapture-gt-be98-quad-band-wi-fi-7-gaming-router',
      description: 'World’s first quad-band Wi-Fi 7 gaming router: Speeds up to 25 Gbps, dual 10G ports, four 2.5G ports, 320MHz channel bandwidth, Multi-Link Operation (MLO), and Triple-Level Game Acceleration.',
      price: 799,
      discount_price: 729,
      stock: 14,
      image_url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 110,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Standard: 'Wi-Fi 7 Quad-Band (6GHz-1, 6GHz-2, 5GHz, 2.4GHz)', Speeds: 'Up to 25,000 Mbps', Ports: 'Dual 10Gbps Ports + Quad 2.5Gbps Ports' }
    },
    {
      name: 'ASUS ROG Rapture GT-AXE16000 Quad-Band Wi-Fi 6E Gaming Router',
      slug: 'asus-rog-rapture-gt-axe16000-quad-band-router',
      description: 'Quad-band Wi-Fi 6E with 6GHz band, dual 10G ports, RangeBoost Plus, 2.0GHz 64-bit quad-core CPU.',
      price: 599,
      discount_price: 529,
      stock: 18,
      image_url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 160,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Standard: 'Wi-Fi 6E Quad-Band', Ports: 'Dual 10G Ports' }
    },
    {
      name: 'ASUS RT-AX88U Pro Dual-Band Wi-Fi 6 Router',
      slug: 'asus-rt-ax88u-pro-dual-band-wi-fi-6-router',
      description: 'Dual 2.5G ports, 6000 Mbps throughput, commercial-grade AiProtection Pro security, and ASUS AiMesh expandability.',
      price: 299,
      discount_price: 249,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 380,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Speed: 'AX6000 (6000 Mbps)', Ethernet: 'Dual 2.5G WAN/LAN Ports' }
    },
    {
      name: 'ASUS ROG Gaming Desktop G22CH (Compact 10L Chassis, Core i7-13700KF, RTX 4070)',
      slug: 'asus-rog-gaming-desktop-g22ch-compact-10l',
      description: 'Ultra-compact 10-liter desktop battle station: Intel Core i7-13700KF, liquid cooled, RTX 4070 12GB, 32GB DDR5, 1TB SSD, Aura Sync glass side panel.',
      price: 1799,
      discount_price: 1599,
      stock: 14,
      image_url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 95,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Chassis: '10-Liter Ultra-Compact Form Factor', Processor: 'Intel Core i7-13700KF Liquid Cooled', Graphics: 'NVIDIA GeForce RTX 4070 12GB' }
    },

    // --- 6. ASUS ROG PHONES & ESPORTS PERIPHERALS (21 Models) ---
    {
      name: 'ASUS ROG Phone 8 Pro 5G Smartphone (24GB RAM, 1TB Storage, Phantom Black)',
      slug: 'asus-rog-phone-8-pro-5g-smartphone-24gb-1tb',
      description: 'The pinnacle of mobile gaming: Snapdragon 8 Gen 3, 24GB LPDDR5X RAM, 1TB UFS 4.0 storage, 341 mini-LED AniMe Vision rear display, 6.78" 165Hz LTPO AMOLED display with 2500 nits peak, AirTrigger ultrasonic buttons, 6-axis gimbal stabilizer 3.0 camera, IP68 water resistance, and 5500mAh battery with 65W HyperCharge + 15W Qi wireless.',
      price: 1499,
      discount_price: 1399,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 410,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Qualcomm Snapdragon 8 Gen 3', RAM: '24GB LPDDR5X (World Highest)', Storage: '1TB UFS 4.0', Display: '6.78" 165Hz Samsung Flexible LTPO AMOLED (2500 nits)', RearLid: 'AniMe Vision 341 Programmable Mini-LED Matrix', WaterResistance: 'IP68 Certified' }
    },
    {
      name: 'ASUS ROG Phone 8 Edition (16GB RAM, 512GB Storage, Rebel Grey)',
      slug: 'asus-rog-phone-8-edition-16gb-512gb-rebel-grey',
      description: 'Snapdragon 8 Gen 3, 16GB RAM, 512GB, 165Hz AMOLED, Aura RGB logo, 50MP Sony IMX890 camera with gimbal stabilization, and 3.5mm headphone jack with Dirac Virtuo.',
      price: 1099,
      discount_price: 999,
      stock: 28,
      image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 260,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Processor: 'Snapdragon 8 Gen 3', Display: '6.78" 165Hz AMOLED', Audio: '3.5mm Jack with Dirac Virtuo' }
    },
    {
      name: 'ASUS AeroActive Cooler X for ROG Phone 8 Series',
      slug: 'asus-aeroactive-cooler-x-for-rog-phone-8',
      description: 'Thermoelectric Peltier cooling chip: 29% smaller, 1.2x higher cooling efficiency, reduces back cover temperature by up to 36°C, two physical trigger buttons, 3.5mm audio jack.',
      price: 99,
      discount_price: 89,
      stock: 50,
      image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 180,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Cooling: 'Thermoelectric AI Peltier Chip', DropTemp: 'Up to 36°C Cooling', Buttons: '2x Dual Physical Ergonomic Triggers' }
    },
    {
      name: 'ASUS ROG Tessen Foldable Mobile Gaming Controller',
      slug: 'asus-rog-tessen-foldable-mobile-gaming-controller',
      description: 'Zero-latency USB-C connection with foldaway compact mechanism: console-grade ALPS analog sticks, mechanical microswitch face buttons, two programmable aluminum rear paddles.',
      price: 109,
      discount_price: 99,
      stock: 45,
      image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 130,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Connection: 'Zero-Latency USB-C with 18W Passthrough Charging', Sticks: 'ALPS Console Joysticks', Foldable: 'Transforms into Pocket Size' }
    },
    {
      name: 'ASUS ROG Azoth Wireless 75% Custom Mechanical Gaming Keyboard',
      slug: 'asus-rog-azoth-wireless-75-mechanical-gaming-keyboard',
      description: 'Silicon gasket mount with 3-layer sound dampening foam, pre-lubed ROG NX mechanical switches (hot-swappable), OLED display with 3-way control knob, tri-mode wireless (2.4GHz SpeedNova, Bluetooth, USB), bundled DIY lube kit.',
      price: 249,
      discount_price: 219,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 620,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Layout: '75% Custom Mechanical', Mount: 'Silicone Gasket Mount with 3 Dampening Layers', Display: '2-Inch OLED Display + 3-Way Control Knob', Switches: 'Hot-Swappable Pre-Lubed ROG NX Mechanical' }
    },
    {
      name: 'ASUS ROG Azoth Extreme 75% Full Aluminum Gaming Keyboard',
      slug: 'asus-rog-azoth-extreme-75-aluminum-keyboard',
      description: 'CNC-machined aluminum alloy chassis, carbon fiber positioning plate, adjustable gasket mount switch (Hard/Soft feel), full-color OLED touchscreen, 8000Hz polling rate via ROG Polling Rate Booster.',
      price: 499,
      discount_price: 469,
      stock: 14,
      image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 88,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Chassis: 'Full CNC Aluminum with Anodized Finish', Plate: 'Carbon Fiber Positioning Plate', Screen: 'Full-Color OLED Touchscreen', Polling: '8000Hz Polling Rate Booster Included' }
    },
    {
      name: 'ASUS ROG Falchion RX Low Profile 65% Wireless Keyboard',
      slug: 'asus-rog-falchion-rx-low-profile-65-wireless-keyboard',
      description: 'Ultra-slim 26.5mm profile: Pre-lubed ROG RX Low-Profile Optical Switches, interactive multi-function touch panel, dual silicone dampening layers, 2-way keyboard cover case.',
      price: 169,
      discount_price: 149,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 290,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Switches: 'ROG RX Red Low-Profile Optical', Layout: '65% in a 60% Frame', TouchPanel: 'Integrated Interactive Touch Bar' }
    },
    {
      name: 'ASUS ROG Strix Scope II 96 Wireless Mechanical Keyboard',
      slug: 'asus-rog-strix-scope-ii-96-wireless-keyboard',
      description: 'Compact 96% layout retaining all number pad and arrow keys: hot-swappable ROG NX Snow linear switches, sound dampening foam, multi-function button and wheel.',
      price: 179,
      discount_price: 159,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 210,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Layout: '96% Space-Saving (retails 100% keys)', Switches: 'Pre-Lubed ROG NX Snow Linear' }
    },
    {
      name: 'ASUS ROG Harpe Ace Aim Lab Edition Ultralight Wireless Mouse',
      slug: 'asus-rog-harpe-ace-aim-lab-edition-mouse',
      description: 'Co-developed with Aim Lab esports champions: 54g ultralight weight, bio-based nylon shell, ROG AimPoint 36,000 DPI optical sensor (<1% cpi deviation), ROG SpeedNova wireless technology, 90 hours battery.',
      price: 149,
      discount_price: 129,
      stock: 50,
      image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 480,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Weight: '54 Grams Ultralight', Sensor: 'ROG AimPoint 36,000 DPI (650 IPS, 50G)', Battery: '90 Hours Wireless', Software: 'Aim Lab Settings Optimizer' }
    },
    {
      name: 'ASUS ROG Harpe Ace Extreme Carbon Fiber Wireless Gaming Mouse',
      slug: 'asus-rog-harpe-ace-extreme-carbon-fiber-mouse',
      description: 'Aerospace-grade woven carbon fiber composite shell weighing only 47 grams: ROG AimPoint Pro 42,000 DPI sensor, glass skates, 8000Hz true wireless polling rate.',
      price: 249,
      discount_price: 229,
      stock: 18,
      image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 92,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Material: 'Woven Carbon Fiber Shell (47g)', Sensor: 'ROG AimPoint Pro 42,000 DPI with Glass-Tracking', PollingRate: 'True 8000Hz Wireless Polling Rate Booster', Feet: 'Corning Gorilla Glass Mouse Feet' }
    },
    {
      name: 'ASUS ROG Keris II Ace Wireless Ergonomic Gaming Mouse',
      slug: 'asus-rog-keris-ii-ace-wireless-ergonomic-mouse',
      description: '54g ergonomic right-handed shape co-designed with pro FPS players: ROG AimPoint Pro 42,000 DPI sensor, ROG 100M Optical Micro Switches, tri-mode connectivity.',
      price: 159,
      discount_price: 139,
      stock: 45,
      image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 210,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Weight: '54g Ergonomic', Switches: 'ROG Optical Micro Switches (100M Clicks)', Sensor: '42,000 DPI AimPoint Pro' }
    },
    {
      name: 'ASUS ROG Gladius III Wireless AimPoint Gaming Mouse',
      slug: 'asus-rog-gladius-iii-wireless-aimpoint-gaming-mouse',
      description: 'Push-Fit Switch Socket II design lets you swap 3-pin mechanical and 5-pin optical micro switches: 36,000 DPI sensor, 119 hours battery, laser-engraved RGB ROG side markings.',
      price: 109,
      discount_price: 89,
      stock: 50,
      image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 320,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Sockets: 'Push-Fit Switch Socket II (Hot-Swappable Switches)', Sensor: '36,000 DPI AimPoint', Battery: '119 Hours' }
    },
    {
      name: 'ASUS ROG Spatha X Wireless MMO Gaming Mouse (12 Programmable Buttons)',
      slug: 'asus-rog-spatha-x-wireless-mmo-gaming-mouse',
      description: '12 programmable buttons optimized for MMORPG / MOBA action: magnetic charging dock, 19,000 DPI sensor, ROG Micro Switches, wired/wireless dual-mode.',
      price: 149,
      discount_price: 129,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 175,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Buttons: '12 Programmable Buttons (6 Thumb Grid)', Dock: 'Magnetic Stand-Up Charging Dock' }
    },
    {
      name: 'ASUS ROG Delta S Wireless Gaming Headset (Dual-Mode Wireless)',
      slug: 'asus-rog-delta-s-wireless-gaming-headset',
      description: 'Dual-mode low-latency 2.4GHz and Bluetooth: 50mm ASUS Essence drivers, AI Beamforming Microphones with AI Noise-Cancellation, D-shaped ergonomic ear cushions, 25 hours battery with fast charge.',
      price: 199,
      discount_price: 169,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 310,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Drivers: '50mm Neodymium ASUS Essence Drivers', Microphone: 'AI Beamforming with AI Noise-Canceling', Battery: '25 Hours (15m charge = 3 hours)' }
    },
    {
      name: 'ASUS ROG Delta S Animate Gaming Headset with AniMe Matrix',
      slug: 'asus-rog-delta-s-animate-gaming-headset',
      description: 'Customizable AniMe Matrix mini-LED displays on ear cups: ESS 9281 Quad DAC with MQA renderer, ASUS AI Noise-Canceling microphone, USB-C & USB-A connectivity.',
      price: 249,
      discount_price: 219,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 160,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Display: 'AniMe Matrix Displays on Earcups', AudioDAC: 'ESS 9281 Pro Quad DAC + MQA Renderer' }
    },
    {
      name: 'ASUS ROG Cetra True Wireless SpeedNova Gaming Earbuds',
      slug: 'asus-rog-cetra-true-wireless-speednova-earbuds',
      description: 'Dual-mode 2.4GHz ultra-low latency & Bluetooth: 24-bit 96kHz lossless audio via ROG SpeedNova, Adaptive Hybrid ANC, Bone-Conduction AI microphones, up to 46 hours battery with wireless charging case.',
      price: 199,
      discount_price: 179,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 240,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Wireless: 'Dual-Mode 2.4GHz SpeedNova + Bluetooth 5.3', Audio: '24-Bit 96kHz High-Resolution Audio', NoiseCanceling: 'Adaptive Hybrid ANC + Bone-Conduction Mics', Battery: 'Up to 46 Hours' }
    },
    {
      name: 'ASUS ROG Throne Qi Headset Stand with Wireless Charging & ESS DAC',
      slug: 'asus-rog-throne-qi-headset-stand',
      description: 'Premium aluminum headphone stand with built-in Qi fast wireless charging base, ESS 9118 amplifier & DAC, dual USB 3.1 hub, 18-zone Aura Sync RGB lighting.',
      price: 139,
      discount_price: 119,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 190,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Base: 'Qi Fast Wireless Charging Base', DAC: 'ESS 9118 DAC & Amp (3.5mm Headphone Jack)', Lighting: '18-Zone Customizable Aura Sync RGB' }
    },
    {
      name: 'ASUS ROG Moonstone Ace L Tempered Glass Gaming Mouse Pad',
      slug: 'asus-rog-moonstone-ace-l-glass-mouse-pad',
      description: 'Impact-resistant 9H tempered glass surface with ultra-low friction coating for effortless speed and precision tracking: full silicone anti-slip base.',
      price: 99,
      discount_price: 89,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 155,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Surface: '9H Tempered Glass with Anti-Scratch Coating', Dimensions: '500 x 400 mm Large Size', Base: 'Full Silicone Anti-Skid Base' }
    },
    {
      name: 'ASUS ROG Hone Ace Aim Lab Edition Gaming Mouse Pad',
      slug: 'asus-rog-hone-ace-aim-lab-edition-mouse-pad',
      description: 'Hybrid cloth surface with military-grade protective nano-coating: water, oil, and dust repellent, printed measurement markings for Aim Lab accuracy training.',
      price: 39,
      discount_price: 29,
      stock: 70,
      image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 310,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Surface: 'Hybrid Cloth with Protective Nano-Coating', AimLab: 'Measurement Grid for Training', Dimensions: '508 x 420 x 3 mm' }
    },
    {
      name: 'ASUS ROG Ranger BP2701 Gaming Backpack (22L Capacity)',
      slug: 'asus-rog-ranger-bp2701-gaming-backpack',
      description: 'Water-repellent 22-liter capacity backpack: fits up to 17" gaming laptops, padded internal organization dividers, luggage strap, and reflective slash logo.',
      price: 99,
      discount_price: 79,
      stock: 45,
      image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 220,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', Capacity: '22 Liters', Compatibility: 'Fits up to 17-inch Laptops', Material: 'High-Density Water-Repellent Polyester' }
    },
    {
      name: 'ASUS ROG Destrier Ergo Gaming Chair (Cyberpunk Aesthetic)',
      slug: 'asus-rog-destrier-ergo-gaming-chair',
      description: 'Exoskeleton cyborg gaming chair: acoustic acoustic elevation panel to block distractions and enhance headset audio, 360-degree rotating armrests with 14cm mobile height lift, breathable mesh.',
      price: 899,
      discount_price: 799,
      stock: 12,
      image_url: 'https://images.unsplash.com/photo-1580481077197-c81b539860b0?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1580481077197-c81b539860b0?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 95,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'ASUS', AcousticPanel: 'Detachable Acoustic Headset Panel', Armrests: '360° Rotation + 14cm Mobile Gaming Mode Elevation', Structure: 'Aluminum Exoskeleton with Breathable Mesh' }
    }
  ];
};
