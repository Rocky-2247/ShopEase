// Comprehensive dataset of 105+ Official Dell Store Devices (XPS, Alienware, Latitude, Precision, UltraSharp, Monitors & Accessories)

export const getDellProducts = (categoryId) => {
  // 1. Dell XPS Series (Flagship Ultrabooks, 2-in-1s & Desktops) - 20 SKUs
  const xps = [
    {
      name: 'Dell XPS 16 (9640, Intel Core Ultra 9 185H, RTX 4070 8GB, 4K+ OLED Touch, 64GB RAM, 2TB SSD, Platinum)',
      slug: 'dell-xps-16-ultra-9-rtx-4070-64gb-2tb',
      description: 'Supreme precision-machined CNC aluminum flagship workstation with 16.3" 4K+ (3840x2400) InfinityEdge OLED Touchscreen, Intel Core Ultra 9 AI processor, NVIDIA GeForce RTX 4070 8GB, seamless glass haptic touchpad, and 130W Type-C fast charging.',
      price: 3399.00, discount_price: 3099.00, stock: 20, rating: 4.9, num_reviews: 145, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      specifications: { Brand: 'Dell', Model: 'XPS 16 (9640)', Processor: 'Intel Core Ultra 9 185H (16 Cores, 22 Threads, up to 5.1 GHz, NPU)', Graphics: 'NVIDIA GeForce RTX 4070 8GB GDDR6 (60W)', Display: '16.3" 4K+ (3840x2400) OLED Touch 400 nits 100% DCI-P3', RAM: '64GB LPDDR5X 7467MHz Dual Channel', Storage: '2TB PCIe 4.0 NVMe M.2 SSD', Audio: 'Studio 4-Speaker Design (10W Total) with Waves MaxxAudio', Battery: '99.5 Whr Battery' }
    },
    {
      name: 'Dell XPS 16 (9640, Intel Core Ultra 7 155H, RTX 4060, FHD+ 500 nits, 32GB RAM, 1TB SSD, Graphite)',
      slug: 'dell-xps-16-ultra-7-rtx-4060-32gb-1tb',
      description: 'Sophisticated Graphite finished 16.3" laptop featuring Intel Core Ultra 7 with AI Engine, RTX 4060 discrete graphics, 500 nits 120Hz display, and capacitive touch function row.',
      price: 2499.00, discount_price: 2299.00, stock: 35, rating: 4.8, num_reviews: 110, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 16 (9640)', Processor: 'Intel Core Ultra 7 155H', Graphics: 'NVIDIA RTX 4060 8GB', Display: '16.3" FHD+ (1920x1200) 120Hz 500 nits', RAM: '32GB LPDDR5X', Storage: '1TB NVMe SSD', Color: 'Graphite' }
    },
    {
      name: 'Dell XPS 16 (9640, Intel Core Ultra 7 155H, RTX 4050, 32GB RAM, 1TB SSD, Platinum)',
      slug: 'dell-xps-16-ultra-7-rtx-4050-32gb-1tb',
      description: 'Premium Platinum CNC aluminum creator laptop with 16.3" InfinityEdge display, RTX 4050 GPU, seamless glass touchpad, and 3x Thunderbolt 4 ports.',
      price: 2199.00, discount_price: 1999.00, stock: 30, rating: 4.8, num_reviews: 88, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 16 (9640)', Processor: 'Intel Core Ultra 7 155H', Graphics: 'NVIDIA RTX 4050 6GB', Display: '16.3" FHD+ 500 nits', RAM: '32GB LPDDR5X', Storage: '1TB SSD' }
    },
    {
      name: 'Dell XPS 14 (9440, Intel Core Ultra 7 155H, RTX 4050, 3.2K OLED Touch, 32GB RAM, 1TB SSD, Platinum)',
      slug: 'dell-xps-14-ultra-7-3-2k-oled-rtx-4050',
      description: 'The sweet spot of ultra-portability and heavy performance. 14.5" 3.2K (3200x2000) 120Hz OLED Touchscreen with Gorilla Glass 3, Intel Core Ultra 7 with built-in NPU, RTX 4050, and zero-lattice backlit keyboard.',
      price: 2399.00, discount_price: 2149.00, stock: 40, rating: 4.9, num_reviews: 160, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 14 (9440)', Processor: 'Intel Core Ultra 7 155H (16 Cores)', Graphics: 'NVIDIA GeForce RTX 4050 6GB GDDR6 (30W)', Display: '14.5" 3.2K (3200x2000) OLED Touch 120Hz 400 nits', RAM: '32GB LPDDR5X 7467MHz', Storage: '1TB PCIe 4.0 SSD', Weight: '1.68 kg' }
    },
    {
      name: 'Dell XPS 14 (9440, Intel Core Ultra 7 155H, Intel Arc, FHD+ InfinityEdge, 16GB RAM, 512GB SSD, Graphite)',
      slug: 'dell-xps-14-ultra-7-arc-16gb-512gb',
      description: 'Thin and light all-day 14.5" laptop in Graphite with Intel Arc integrated GPU, 500 nits 120Hz display, and up to 21 hours battery life.',
      price: 1699.00, discount_price: 1549.00, stock: 50, rating: 4.8, num_reviews: 92, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 14 (9440)', Processor: 'Intel Core Ultra 7 155H', Graphics: 'Intel Arc Graphics', Display: '14.5" FHD+ (1920x1200) 120Hz', RAM: '16GB LPDDR5X', Storage: '512GB SSD', Color: 'Graphite' }
    },
    {
      name: 'Dell XPS 14 (9440, Intel Core Ultra 7 165H, RTX 4050, 64GB RAM, 2TB SSD, Platinum)',
      slug: 'dell-xps-14-ultra-7-64gb-2tb-platinum',
      description: 'Max-spec 14-inch executive powerhouse with 64GB unified memory, 2TB NVMe SSD, 3.2K OLED Touch, and Wi-Fi 7.',
      price: 2799.00, discount_price: 2549.00, stock: 25, rating: 4.9, num_reviews: 65, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 14 (9440)', Processor: 'Intel Core Ultra 7 165H', Graphics: 'NVIDIA RTX 4050 6GB', Display: '14.5" 3.2K OLED Touch', RAM: '64GB LPDDR5X', Storage: '2TB SSD' }
    },
    {
      name: 'Dell XPS 13 (9340, Intel Core Ultra 7 155H, 3K+ Tandem OLED Touch, 32GB RAM, 1TB SSD, Graphite)',
      slug: 'dell-xps-13-ultra-7-3k-oled-32gb-1tb',
      description: 'Ultra-futuristic 13.4" sub-1.2kg ultrabook with 3K+ (2880x1800) Tandem OLED Touchscreen, Intel Core Ultra 7 AI processor, invisible haptic trackpad, and CNC machined aluminum.',
      price: 1899.00, discount_price: 1699.00, stock: 60, rating: 4.9, num_reviews: 210, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 13 (9340)', Processor: 'Intel Core Ultra 7 155H (16 Cores)', Graphics: 'Intel Arc Graphics', Display: '13.4" 3K+ (2880x1800) OLED Touch 60Hz 400 nits', RAM: '32GB LPDDR5X 7467MHz', Storage: '1TB PCIe 4.0 SSD', Weight: '1.19 kg' }
    },
    {
      name: 'Dell XPS 13 (9340, Intel Core Ultra 7 155H, FHD+ 120Hz, 16GB RAM, 512GB SSD, Platinum)',
      slug: 'dell-xps-13-ultra-7-fhd-16gb-512gb',
      description: 'Featherweight 13.4" laptop in Platinum with 120Hz FHD+ InfinityEdge screen, Intel Core Ultra 7, touch function row, and 18h battery life.',
      price: 1399.00, discount_price: 1249.00, stock: 75, rating: 4.8, num_reviews: 178, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 13 (9340)', Processor: 'Intel Core Ultra 7 155H', Display: '13.4" FHD+ (1920x1200) 120Hz 500 nits', RAM: '16GB LPDDR5X', Storage: '512GB SSD', Color: 'Platinum' }
    },
    {
      name: 'Dell XPS 13 (9340, Intel Core Ultra 5 125H, FHD+ Non-touch, 16GB RAM, 512GB SSD, Graphite)',
      slug: 'dell-xps-13-ultra-5-16gb-512gb-graphite',
      description: 'Compact daily executive companion with Intel Core Ultra 5, 16GB RAM, 512GB SSD, and dual Thunderbolt 4 ports.',
      price: 1199.00, discount_price: 1049.00, stock: 80, rating: 4.7, num_reviews: 135, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 13 (9340)', Processor: 'Intel Core Ultra 5 125H', Display: '13.4" FHD+ 120Hz', RAM: '16GB', Storage: '512GB SSD' }
    },
    {
      name: 'Dell XPS 13 Plus (9320, Intel Core i7-1360P, 3.5K OLED, 32GB RAM, 1TB SSD, Zero-Lattice, Platinum)',
      slug: 'dell-xps-13-plus-i7-3-5k-oled-32gb',
      description: 'Iconic minimalist redesign featuring zero-lattice keyboard, capacitive touch media bar, seamless glass touchpad, 3.5K OLED screen, and 28W 13th Gen Intel Core i7.',
      price: 1799.00, discount_price: 1549.00, stock: 45, rating: 4.8, num_reviews: 190, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 13 Plus (9320)', Processor: 'Intel Core i7-1360P (12 Cores)', Display: '13.4" 3.5K (3456x2160) OLED Touch 400 nits', RAM: '32GB LPDDR5', Storage: '1TB NVMe SSD', Design: 'Zero-Lattice Keyboard & Glass Trackpad' }
    },
    {
      name: 'Dell XPS 13 Plus (9320, Intel Core i7-1360P, 4K UHD+ Touch, 16GB RAM, 512GB SSD, Graphite)',
      slug: 'dell-xps-13-plus-i7-4k-16gb-512gb',
      description: 'Graphite XPS 13 Plus with ultra-dense 4K UHD+ (3840x2400) Touch display, 16GB RAM, and capacitive media row.',
      price: 1599.00, discount_price: 1399.00, stock: 40, rating: 4.8, num_reviews: 120, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 13 Plus (9320)', Processor: 'Intel Core i7-1360P', Display: '13.4" 4K UHD+ (3840x2400) Touch 500 nits', RAM: '16GB', Storage: '512GB SSD' }
    },
    {
      name: 'Dell XPS 15 (9530, Intel Core i9-13900H, RTX 4070, 3.5K OLED Touch, 64GB RAM, 2TB SSD, Silver/Black)',
      slug: 'dell-xps-15-i9-rtx-4070-64gb-2tb-oled',
      description: 'Classic high-performance multimedia workhorse with carbon fiber palm rest, 15.6" 3.5K OLED Touch screen, 14-core i9-13900H, RTX 4070, and full-size SD card slot.',
      price: 2999.00, discount_price: 2699.00, stock: 25, rating: 4.9, num_reviews: 240, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 15 (9530)', Processor: 'Intel Core i9-13900H (14 Cores, 20 Threads, up to 5.4 GHz)', Graphics: 'NVIDIA GeForce RTX 4070 8GB GDDR6 (40W)', Display: '15.6" 3.5K (3456x2160) OLED Touch 400 nits', RAM: '64GB DDR5 4800MHz', Storage: '2TB PCIe NVMe SSD', PalmRest: 'Black Carbon Fiber Composite' }
    },
    {
      name: 'Dell XPS 15 (9530, Intel Core i7-13700H, RTX 4060, FHD+ 500 nits, 32GB RAM, 1TB SSD)',
      slug: 'dell-xps-15-i7-rtx-4060-32gb-1tb',
      description: 'Balanced performance 15.6" creator laptop with 500 nits anti-glare screen, RTX 4060 GPU, 32GB RAM, and 86Whr long-life battery.',
      price: 2099.00, discount_price: 1899.00, stock: 35, rating: 4.8, num_reviews: 165, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 15 (9530)', Processor: 'Intel Core i7-13700H', Graphics: 'NVIDIA RTX 4060 8GB', Display: '15.6" FHD+ (1920x1200) 500 nits', RAM: '32GB DDR5', Storage: '1TB SSD' }
    },
    {
      name: 'Dell XPS 15 (9530, Intel Core i7-13700H, Intel Arc A370M, 16GB RAM, 512GB SSD)',
      slug: 'dell-xps-15-i7-arc-16gb-512gb',
      description: 'Solid entry 15.6" laptop for business and photo editing with Intel Core i7, 16GB memory, and carbon fiber deck.',
      price: 1599.00, discount_price: 1399.00, stock: 45, rating: 4.7, num_reviews: 110, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 15 (9530)', Processor: 'Intel Core i7-13700H', Graphics: 'Intel Arc A370M 4GB', Display: '15.6" FHD+', RAM: '16GB DDR5', Storage: '512GB SSD' }
    },
    {
      name: 'Dell XPS 17 (9730, Intel Core i9-13900H, RTX 4080 12GB, 4K UHD+ Touch, 64GB RAM, 4TB SSD)',
      slug: 'dell-xps-17-i9-rtx-4080-64gb-4tb-4k',
      description: 'Gigantic 17.0" 4K UHD+ (3840x2400) 500 nits Touch creative powerhouse with NVIDIA GeForce RTX 4080 12GB (60W), 64GB RAM, 4TB high-speed storage, and vapor chamber cooling.',
      price: 3899.00, discount_price: 3499.00, stock: 15, rating: 5.0, num_reviews: 82, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 17 (9730)', Processor: 'Intel Core i9-13900H (14 Cores, up to 5.4 GHz)', Graphics: 'NVIDIA GeForce RTX 4080 12GB GDDR6', Display: '17.0" 4K UHD+ (3840x2400) Touch 500 nits 100% Adobe RGB', RAM: '64GB DDR5 4800MHz', Storage: '4TB (2x 2TB RAID 0) NVMe SSD', Cooling: 'Vapor Chamber Dual Opposite Outlet Fans' }
    },
    {
      name: 'Dell XPS 17 (9730, Intel Core i7-13700H, RTX 4070, 4K UHD+ Touch, 32GB RAM, 1TB SSD)',
      slug: 'dell-xps-17-i7-rtx-4070-32gb-1tb',
      description: 'Immersive 17.0" 4K InfinityEdge laptop with RTX 4070, 32GB RAM, quad-speaker studio sound, and 4x Thunderbolt 4 ports.',
      price: 2799.00, discount_price: 2499.00, stock: 25, rating: 4.8, num_reviews: 95, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 17 (9730)', Processor: 'Intel Core i7-13700H', Graphics: 'NVIDIA RTX 4070 8GB', Display: '17.0" 4K UHD+ Touch', RAM: '32GB DDR5', Storage: '1TB SSD' }
    },
    {
      name: 'Dell XPS 13 2-in-1 (9315, Intel Core i7-1250U, 3K Touch Folio with Active Pen, 16GB RAM, 512GB SSD, Sky Blue)',
      slug: 'dell-xps-13-2in1-i7-3k-touch-folio',
      description: 'Versatile detachable 2-in-1 tablet with 13.0" 3K (2880x1920) 500 nits Touchscreen, magnetic XPS Folio Keyboard, XPS Stylus Pen, 11MP 4K rear camera, and aerospace aluminum unibody.',
      price: 1399.00, discount_price: 1199.00, stock: 35, rating: 4.7, num_reviews: 120, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 13 2-in-1 (9315)', Processor: 'Intel Core i7-1250U (10 Cores)', Display: '13.0" 3K (2880x1920) 500 nits 100% sRGB Touch', RAM: '16GB LPDDR4x', Storage: '512GB NVMe SSD', Accessories: 'XPS Folio Keyboard & Stylus Included', Color: 'Sky Blue' }
    },
    {
      name: 'Dell XPS 13 2-in-1 (9315, Intel Core i5-1230U, 3K 500 nits, 16GB RAM, 256GB SSD, Umber)',
      slug: 'dell-xps-13-2in1-i5-3k-touch-umber',
      description: 'Sleek dark Umber detachable tablet for note-taking, sketching, and mobility with 3K Gorilla Glass 7 display and dual Thunderbolt 4.',
      price: 1099.00, discount_price: 949.00, stock: 40, rating: 4.6, num_reviews: 80, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS 13 2-in-1 (9315)', Processor: 'Intel Core i5-1230U', Display: '13.0" 3K 500 nits', RAM: '16GB', Storage: '256GB SSD', Color: 'Umber' }
    },
    {
      name: 'Dell XPS Desktop Special Edition (8960, Intel Core i9-14900K, Liquid Cooled, RTX 4090 24GB, 64GB DDR5, 2TB SSD + 2TB HDD, Platinum Silver)',
      slug: 'dell-xps-desktop-8960-i9-14900k-rtx-4090',
      description: 'Maximum desktop workstation power disguised in an elegant minimalist Platinum aluminum chassis. 24-core Intel Core i9-14900K, liquid cooling, NVIDIA GeForce RTX 4090 24GB, 1000W 80-Plus Gold power, and tool-less chassis.',
      price: 4299.00, discount_price: 3899.00, stock: 12, rating: 5.0, num_reviews: 64, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS Desktop (8960)', Processor: 'Intel Core i9-14900K (24 Cores, 32 Threads, up to 6.0 GHz)', Cooling: 'High-Performance Liquid Cooling with 120mm Radiator', Graphics: 'NVIDIA GeForce RTX 4090 24GB GDDR6X', RAM: '64GB DDR5 5600MHz (Up to 128GB)', Storage: '2TB PCIe NVMe SSD + 2TB 7200RPM HDD', PSU: '1000W 80 Plus Gold' }
    },
    {
      name: 'Dell XPS Desktop (8960, Intel Core i7-14700, RTX 4070 Ti Super, 32GB DDR5, 1TB SSD, Graphite)',
      slug: 'dell-xps-desktop-8960-i7-rtx-4070ti-super',
      description: 'High-performance creation and gaming tower in Graphite with 20-core i7-14700, RTX 4070 Ti Super 16GB, 32GB DDR5, and Wi-Fi 6E.',
      price: 2399.00, discount_price: 2149.00, stock: 25, rating: 4.8, num_reviews: 85, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'XPS Desktop (8960)', Processor: 'Intel Core i7-14700 (20 Cores)', Graphics: 'NVIDIA RTX 4070 Ti Super 16GB', RAM: '32GB DDR5', Storage: '1TB NVMe SSD', Color: 'Graphite' }
    }
  ];

  // 2. Dell Alienware High-Performance Gaming Series - 22 SKUs
  const alienware = [
    {
      name: 'Dell Alienware m18 R2 Gaming Laptop (Intel Core i9-14900HX, RTX 4090 16GB 175W, 18" QHD+ 165Hz, CherryMX, 64GB DDR5, 4TB SSD, Dark Metallic Moon)',
      slug: 'dell-alienware-m18-r2-i9-rtx-4090-64gb-4tb',
      description: 'The apex 18-inch desktop replacement gaming behemoth. 24-core Intel Core i9-14900HX, maximum 175W NVIDIA RTX 4090 16GB, 18" QHD+ (2560x1600) 165Hz 100% DCI-P3 display with G-Sync, ultra-low profile CherryMX mechanical keyboard, Cryo-tech vapor chamber cooling with Element 31 thermal paste, and 4TB RAID 0 PCIe 4.0 SSD.',
      price: 4499.00, discount_price: 4199.00, stock: 10, rating: 5.0, num_reviews: 78, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80'
      ],
      specifications: { Brand: 'Dell', Model: 'Alienware m18 R2', Processor: 'Intel Core i9-14900HX (24 Cores, 32 Threads, up to 5.8 GHz)', Graphics: 'NVIDIA GeForce RTX 4090 16GB GDDR6 (175W Max TGP)', Display: '18" QHD+ (2560x1600) 165Hz 3ms ComfortView Plus G-Sync', Keyboard: 'Alienware CherryMX Ultra-Low Profile Mechanical with Per-Key AlienFX RGB', RAM: '64GB DDR5 5600MHz Dual Channel', Storage: '4TB (2x 2TB RAID 0) NVMe M.2 SSD', Cooling: 'Alienware Cryo-Tech with Element 31 & Quad Fans' }
    },
    {
      name: 'Dell Alienware m18 R2 Gaming Laptop (Intel Core i9-14900HX, RTX 4080 12GB, 18" FHD+ 480Hz, 32GB DDR5, 2TB SSD)',
      slug: 'dell-alienware-m18-r2-i9-rtx-4080-480hz',
      description: 'Esports tournament monster with ultra-fast 18" FHD+ 480Hz panel, RTX 4080 GPU, 32GB DDR5, and quad fan exhaust.',
      price: 3299.00, discount_price: 2999.00, stock: 15, rating: 4.9, num_reviews: 55, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware m18 R2', Processor: 'Intel Core i9-14900HX', Graphics: 'NVIDIA RTX 4080 12GB (175W)', Display: '18" FHD+ (1920x1200) 480Hz 3ms', RAM: '32GB DDR5', Storage: '2TB SSD' }
    },
    {
      name: 'Dell Alienware m16 R2 Gaming Laptop (Intel Core Ultra 9 185H, RTX 4070, 16" QHD+ 240Hz, Stealth Mode, 32GB DDR5, 1TB SSD)',
      slug: 'dell-alienware-m16-r2-ultra-9-rtx-4070-240hz',
      description: 'Redesigned 15% smaller footprint chassis with Stealth Mode button for classroom/office, Intel Core Ultra 9 with NPU, RTX 4070, and 240Hz QHD+ screen.',
      price: 2199.00, discount_price: 1999.00, stock: 30, rating: 4.9, num_reviews: 125, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware m16 R2', Processor: 'Intel Core Ultra 9 185H (16 Cores)', Graphics: 'NVIDIA GeForce RTX 4070 8GB GDDR6 (140W)', Display: '16" QHD+ (2560x1600) 240Hz 100% sRGB G-Sync', Features: 'One-Touch Stealth Mode Key & AlienFX RGB Trackpad', RAM: '32GB DDR5 5600MHz', Storage: '1TB PCIe 4.0 SSD' }
    },
    {
      name: 'Dell Alienware m16 R2 Gaming Laptop (Intel Core Ultra 7 155H, RTX 4060, 16" QHD+ 240Hz, 16GB DDR5, 1TB SSD)',
      slug: 'dell-alienware-m16-r2-ultra-7-rtx-4060',
      description: 'Popular sweet spot gaming laptop with Intel Core Ultra 7, RTX 4060, 240Hz QHD+ display, and Cryo-tech cooling.',
      price: 1799.00, discount_price: 1599.00, stock: 45, rating: 4.8, num_reviews: 95, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware m16 R2', Processor: 'Intel Core Ultra 7 155H', Graphics: 'NVIDIA RTX 4060 8GB (140W)', Display: '16" QHD+ 240Hz', RAM: '16GB DDR5', Storage: '1TB SSD' }
    },
    {
      name: 'Dell Alienware x16 R2 Ultra-Thin Gaming Laptop (Intel Core Ultra 9 185H, RTX 4090, Lunar Silver Anodized, 32GB RAM, 2TB SSD, RGB Trackpad)',
      slug: 'dell-alienware-x16-r2-ultra-9-rtx-4090-silver',
      description: 'World-class craftsmanship in Lunar Silver micro-blasted aluminum with 100-micro LED AlienFX stadium lighting, RTX 4090 in a 18.5mm thin unibody, 6-speaker spatial audio, and CherryMX keyboard.',
      price: 3799.00, discount_price: 3499.00, stock: 12, rating: 5.0, num_reviews: 62, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware x16 R2', Processor: 'Intel Core Ultra 9 185H', Graphics: 'NVIDIA GeForce RTX 4090 16GB (175W)', Display: '16" QHD+ (2560x1600) 240Hz 3ms 100% DCI-P3', Chassis: 'All-Metal Anodized Lunar Silver with Magnesium Deck', RAM: '32GB LPDDR5X 7467MHz', Storage: '2TB PCIe SSD', Audio: '6 Stereo Speakers with Dolby Atmos' }
    },
    {
      name: 'Dell Alienware x16 R2 (Intel Core Ultra 7 155H, RTX 4080, 16" QHD+ 240Hz, 32GB RAM, 1TB SSD)',
      slug: 'dell-alienware-x16-r2-ultra-7-rtx-4080',
      description: 'Ultra-thin Lunar Silver luxury gaming laptop with RTX 4080 GPU, Cryo-tech quad fans, and AlienFX illuminated glass touchpad.',
      price: 2999.00, discount_price: 2749.00, stock: 20, rating: 4.9, num_reviews: 48, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware x16 R2', Processor: 'Intel Core Ultra 7 155H', Graphics: 'NVIDIA RTX 4080 12GB', Display: '16" QHD+ 240Hz', RAM: '32GB LPDDR5X', Storage: '1TB SSD' }
    },
    {
      name: 'Dell Alienware x14 R2 (Worlds Thinnest 14" Gaming Laptop, Intel Core i7-13620H, RTX 4060, QHD+ 165Hz, 32GB RAM, 1TB SSD)',
      slug: 'dell-alienware-x14-r2-i7-rtx-4060-14inch',
      description: 'Impossibly thin 14.5mm gaming ultraportable weighing only 1.9kg, featuring patent-pending dual-torque hinge, RTX 4060, QHD+ 165Hz screen, and 130W Type-C charging.',
      price: 1999.00, discount_price: 1799.00, stock: 30, rating: 4.8, num_reviews: 84, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware x14 R2', Processor: 'Intel Core i7-13620H', Graphics: 'NVIDIA GeForce RTX 4060 8GB (85W)', Display: '14.0" QHD+ (2560x1600) 165Hz 3ms G-Sync', Thickness: '14.5 mm (Thinnest 14" Gaming Laptop)', RAM: '32GB LPDDR5', Storage: '1TB SSD' }
    },
    {
      name: 'Dell Alienware Aurora R16 Gaming Desktop (Intel Core i9-14900KF, Liquid Cooled, RTX 4090 24GB, 64GB DDR5, 2TB SSD + 2TB HDD, Legend 3.0)',
      slug: 'dell-alienware-aurora-r16-i9-14900kf-rtx-4090',
      description: 'Legend 3.0 airflow redesigned desktop that runs 20% quieter and 10% cooler. 24-core Intel Core i9-14900KF, 240mm liquid heat exchanger, NVIDIA GeForce RTX 4090 24GB, 64GB DDR5 5600MHz, 1000W Platinum PSU, and clear side panel with AlienFX ring lighting.',
      price: 3999.00, discount_price: 3699.00, stock: 15, rating: 5.0, num_reviews: 95, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware Aurora R16', Processor: 'Intel Core i9-14900KF (24 Cores, up to 6.0 GHz Turbo)', Cooling: '240mm Alienware Cryo-Tech Liquid Cooler', Graphics: 'NVIDIA GeForce RTX 4090 24GB GDDR6X', RAM: '64GB DDR5 5600MHz XMP', Storage: '2TB NVMe M.2 SSD + 2TB 7200RPM HDD', Case: 'Legend 3.0 Stadium Lighting with Clear EMI-Coated Side Door', PSU: '1000W 80 Plus Platinum' }
    },
    {
      name: 'Dell Alienware Aurora R16 Gaming Desktop (Intel Core i7-14700F, RTX 4070 Super 12GB, 32GB DDR5, 1TB NVMe SSD)',
      slug: 'dell-alienware-aurora-r16-i7-rtx-4070-super',
      description: 'High-value powerhouse gaming desktop with 20-core i7-14700F, RTX 4070 Super 12GB, 32GB DDR5, liquid cooling, and ultra-quiet 28dB acoustics.',
      price: 2199.00, discount_price: 1999.00, stock: 25, rating: 4.9, num_reviews: 110, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware Aurora R16', Processor: 'Intel Core i7-14700F', Graphics: 'NVIDIA RTX 4070 Super 12GB', RAM: '32GB DDR5', Storage: '1TB NVMe SSD', Cooling: 'Liquid Cooled' }
    },
    {
      name: 'Dell Alienware Aurora R16 Gaming Desktop (Intel Core i9-14900F, RTX 4080 Super 16GB, 32GB DDR5, 2TB SSD)',
      slug: 'dell-alienware-aurora-r16-i9-rtx-4080-super',
      description: '4K ray tracing ready gaming rig featuring RTX 4080 Super 16GB, 24-core i9-14900F, 2TB SSD, and 1000W Platinum power.',
      price: 2999.00, discount_price: 2749.00, stock: 18, rating: 4.9, num_reviews: 74, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware Aurora R16', Processor: 'Intel Core i9-14900F', Graphics: 'NVIDIA RTX 4080 Super 16GB', RAM: '32GB DDR5', Storage: '2TB SSD' }
    },
    {
      name: 'Dell Alienware 32" 4K QD-OLED Gaming Monitor (AW3225QF, 240Hz, 0.03ms, Curved 1700R, Dolby Vision, G-Sync)',
      slug: 'dell-alienware-32-4k-qd-oled-aw3225qf',
      description: 'The holy grail of gaming displays. Worlds first 4K QD-OLED gaming monitor with 3840x2160 resolution, 240Hz refresh rate, 0.03ms response time, gentle 1700R curvature, Dolby Vision HDR, eARC soundbar port, and 3-Year OLED burn-in warranty.',
      price: 1199.00, discount_price: 1099.00, stock: 35, rating: 5.0, num_reviews: 215, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware AW3225QF', Display: '31.6" Quantum Dot OLED (3840x2160 4K UHD) 1700R Curved', RefreshRate: '240Hz (0.03ms GtG response)', HDR: 'Dolby Vision & VESA DisplayHDR True Black 400 (1000 nits peak)', Ports: '2x DP 1.4, 2x HDMI 2.1 (FRL with eARC), 5x USB 3.2', Warranty: '3-Year Premium Panel Exchange with OLED Burn-in Coverage' }
    },
    {
      name: 'Dell Alienware 27" 360Hz QD-OLED Gaming Monitor (AW2725DF, 2560x1440, 0.03ms, HDR True Black 400)',
      slug: 'dell-alienware-27-360hz-qd-oled-aw2725df',
      description: 'Competitive esports pinnacle display with flat 27" QHD (2560x1440) Quantum Dot OLED panel, blinding 360Hz speed, 0.03ms instant response, and 99.3% DCI-P3 color.',
      price: 899.00, discount_price: 799.00, stock: 40, rating: 4.9, num_reviews: 180, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware AW2725DF', Display: '26.7" Flat Quantum Dot OLED (2560x1440 QHD)', RefreshRate: '360Hz (0.03ms GtG)', Color: '99.3% DCI-P3 & Delta E < 2 Factory Calibrated', Sync: 'AMD FreeSync Premium Pro & VESA AdaptiveSync 360' }
    },
    {
      name: 'Dell Alienware 34" Curved QD-OLED Gaming Monitor (AW3423DWF, WQHD 3440x1440, 165Hz, AlienFX)',
      slug: 'dell-alienware-34-curved-qd-oled-aw3423dwf',
      description: 'Legendary 34" 21:9 ultrawide QD-OLED with 1800R curve, 165Hz, infinite 1,000,000:1 contrast ratio, joystick OSD control, and AlienFX rear RGB lighting.',
      price: 899.00, discount_price: 749.00, stock: 50, rating: 4.9, num_reviews: 320, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware AW3423DWF', Display: '34.18" Curved 1800R QD-OLED (3440x1440 WQHD 21:9)', RefreshRate: '165Hz Native (0.1ms GtG)', HDR: 'VESA DisplayHDR True Black 400 (1000 nits peak)', Sync: 'AMD FreeSync Premium Pro' }
    },
    {
      name: 'Dell Alienware 25" 500Hz Fast IPS Gaming Monitor (AW2524H, 0.5ms, NVIDIA Reflex Analyzer)',
      slug: 'dell-alienware-25-500hz-gaming-monitor-aw2524h',
      description: 'World record 500Hz (OC) Fast IPS monitor engineered for Valorant, CS2, and Apex Legends with built-in NVIDIA Reflex Latency Analyzer and sRGB 99%.',
      price: 699.00, discount_price: 599.00, stock: 35, rating: 4.8, num_reviews: 95, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware AW2524H', Display: '24.5" Fast IPS (1920x1080 Full HD)', RefreshRate: '500Hz Overclocked / 480Hz Native (0.5ms min GtG)', Features: 'NVIDIA G-Sync Dedicated Module & NVIDIA Reflex Latency Analyzer' }
    },
    {
      name: 'Dell Alienware Pro Wireless Gaming Keyboard (75% Form Factor, Hot-Swappable Linear Switches, PBT)',
      slug: 'dell-alienware-pro-wireless-gaming-keyboard',
      description: 'Engineered with team Liquid pros. 75% compact wireless tournament keyboard with factory-lubed custom Alienware Linear switches, dual-layer silicone sound dampening, doubleshot PBT keycaps, and 72h battery.',
      price: 199.00, discount_price: 169.00, stock: 65, rating: 4.8, num_reviews: 140, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware Pro Wireless Keyboard', Switches: 'Alienware Custom Linear (40g Actuation) Hot-Swappable 5-Pin', Connectivity: '2.4GHz Wireless (1KHz Polling), Bluetooth 5.1, USB-C', Battery: 'Up to 72 Hours with RGB' }
    },
    {
      name: 'Dell Alienware Pro Wireless Gaming Mouse (4K/8K Polling Rate, 26000 DPI Optical, 60g Lightweight)',
      slug: 'dell-alienware-pro-wireless-gaming-mouse',
      description: 'Ultra-lightweight 60-gram tournament mouse featuring 4KHz wireless and 8KHz wired polling rate, Alienware Optical Switches rated for 70M clicks, and 100% PTFE feet.',
      price: 149.00, discount_price: 129.00, stock: 80, rating: 4.9, num_reviews: 185, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware Pro Wireless Mouse', Sensor: '26,000 DPI 650 IPS 50G Optical Sensor', PollingRate: '4000Hz Wireless / 8000Hz Wired', Weight: '< 60 Grams', Switches: 'Magnetic Optical Clicks (70M Lifespan)' }
    },
    {
      name: 'Dell Alienware Dual-Mode Wireless Gaming Headset (AW720H, Dolby Atmos, AI Mic, Hi-Res)',
      slug: 'dell-alienware-aw720h-wireless-gaming-headset',
      description: 'Comfortable memory foam ear cushions with breathable fabric, 40mm Hi-Res certified drivers, Dolby Atmos spatial sound, AI noise-canceling boom mic, and 30h battery.',
      price: 149.00, discount_price: 119.00, stock: 70, rating: 4.7, num_reviews: 115, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware AW720H', Audio: '40mm Hi-Res Drivers with Dolby Atmos Virtual Surround', Mic: 'AI Noise-Canceling Retractable Boom Mic', Battery: 'Up to 30 Hours (Fast Charge 15m for 6h)' }
    },
    {
      name: 'Dell Alienware Tri-Mode Wireless Gaming Headset (AW920H, Active Noise Cancellation, Bluetooth 5.2)',
      slug: 'dell-alienware-aw920h-anc-wireless-headset',
      description: 'Flagship headset with hybrid Active Noise Cancellation, touch controls on earcups, Tri-mode connectivity (2.4G/BT/3.5mm), and AlienFX RGB logo.',
      price: 199.00, discount_price: 169.00, stock: 45, rating: 4.8, num_reviews: 82, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware AW920H', ANC: 'Active Noise Cancelling', Drivers: '40mm Hi-Res Certified Drivers', Connectivity: '2.4GHz + Bluetooth 5.2 + 3.5mm Aux' }
    },
    {
      name: 'Dell Alienware Horizon Commuter Backpack (Fits 17" Laptops, Weather-Resistant, RFID)',
      slug: 'dell-alienware-horizon-commuter-backpack',
      description: 'Sleek weather-resistant GalaxyWeave fabric backpack with foam 360-degree EVA cushioning for up to 17" Alienware laptops, RFID pocket, and luggage pass-through.',
      price: 89.00, discount_price: 69.00, stock: 90, rating: 4.8, num_reviews: 140, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware Horizon Commuter Backpack', Compatibility: 'Fits Up to 17" Laptops', Material: 'Alienware GalaxyWeave 840D Fabric' }
    },
    {
      name: 'Dell Alienware Horizon Utility Backpack (28L Heavy Duty, Ballistic Nylon, Thermal Protected)',
      slug: 'dell-alienware-horizon-utility-backpack',
      description: 'Massive 28L top-loading tactical gaming backpack with thermal-shield front pocket, ballistic nylon construction, and Nylex-lined laptop sleeve for 18" laptops.',
      price: 119.00, discount_price: 99.00, stock: 60, rating: 4.9, num_reviews: 98, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware Horizon Utility Backpack', Capacity: '28 Liters (Fits m18 and x16)', Protection: '360° EVA Foam & Ballistic Nylon' }
    },
    {
      name: 'Dell Alienware Tenkeyless Mechanical Gaming Keyboard (AW420K, Cherry MX Red, AlienFX RGB)',
      slug: 'dell-alienware-aw420k-tkl-keyboard',
      description: 'Compact TKL form factor wired tournament keyboard with authentic Cherry MX Red linear switches, double-shot PBT keycaps, and integrated cable routing channels.',
      price: 129.00, discount_price: 99.00, stock: 75, rating: 4.7, num_reviews: 130, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware AW420K', Switches: 'Cherry MX Red Linear (100M Keystrokes)', Layout: 'Tenkeyless (TKL) with Detachable USB-C Paracord' }
    },
    {
      name: 'Dell Alienware 610M Wired/Wireless Gaming Mouse (16000 DPI, 350h Battery, 7 Buttons)',
      slug: 'dell-alienware-610m-gaming-mouse',
      description: 'Ergonomic sculptured dual-mode mouse with 16,000 DPI optical sensor, adjustable scroll wheel tension, and up to 350 hours of battery life.',
      price: 79.00, discount_price: 59.00, stock: 85, rating: 4.6, num_reviews: 110, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Alienware 610M', Sensor: '16,000 DPI Optical', Battery: 'Up to 350 Hours Wireless', Lighting: 'AlienFX 16.8M RGB' }
    }
  ];

  // 3. Dell Latitude & Vostro Commercial Business Laptops - 22 SKUs
  const business = [
    {
      name: 'Dell Latitude 9450 2-in-1 (Intel Core Ultra 7 165U vPro, 14" QHD+ Touch, Haptic Collaboration Trackpad, 32GB RAM, 1TB SSD, 5G LTE)',
      slug: 'dell-latitude-9450-2in1-ultra-7-5g',
      description: 'The worlds premier ultra-premium commercial 2-in-1 convertible. 14.0" QHD+ (2560x1600) 500 nits Touchscreen, Intel Core Ultra 7 vPro, world-first haptic collaboration touchpad with Zoom & Teams icons, Zero-Lattice mini-LED backlit keyboard, 5G eSIM connectivity, and CNC machined graphite aluminum.',
      price: 2699.00, discount_price: 2399.00, stock: 25, rating: 4.9, num_reviews: 88, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 9450 2-in-1', Processor: 'Intel Core Ultra 7 165U vPro Enterprise (12 Cores, up to 4.9 GHz)', Display: '14.0" QHD+ (2560x1600) 16:10 Touch 500 nits ComfortView Plus', Touchpad: 'Haptic Collaboration Touchpad with Zoom/Teams LED Icons', Connectivity: 'Qualcomm Snapdragon 5G LTE + Wi-Fi 7 + Bluetooth 5.4', RAM: '32GB LPDDR5X 7467MHz', Storage: '1TB PCIe NVMe Class 35 SSD', Security: 'FIPS TPM 2.0, SafeID, SafeBIOS, IR Camera Windows Hello' }
    },
    {
      name: 'Dell Latitude 9440 2-in-1 (Intel Core i7-1365U vPro, QHD+ 500 nits, Haptic Trackpad, 32GB RAM, 512GB SSD)',
      slug: 'dell-latitude-9440-2in1-i7-32gb-512gb',
      description: 'Executive 14" convertible in dark graphite with collaboration glass trackpad, zero-lattice keyboard, and Intel vPro security.',
      price: 2199.00, discount_price: 1899.00, stock: 30, rating: 4.8, num_reviews: 72, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 9440 2-in-1', Processor: 'Intel Core i7-1365U vPro', Display: '14.0" QHD+ Touch 500 nits', RAM: '32GB LPDDR5x', Storage: '512GB SSD' }
    },
    {
      name: 'Dell Latitude 7450 Ultralight (Magnesium Chassis under 1kg, Intel Core Ultra 7 155U, 14" FHD+ 400 nits, 32GB RAM, 1TB SSD)',
      slug: 'dell-latitude-7450-ultralight-ultra-7-32gb',
      description: 'Impossibly lightweight commercial laptop made from ultralight magnesium chassis weighing only 0.98kg with Intel Core Ultra 7, 32GB RAM, 1TB SSD, and 57Whr battery.',
      price: 1999.00, discount_price: 1749.00, stock: 40, rating: 4.9, num_reviews: 110, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 7450 Ultralight', Processor: 'Intel Core Ultra 7 155U', Weight: '0.98 kg (Under 1kg Ultra-Portable)', Display: '14.0" FHD+ (1920x1200) 400 nits Super Low Power', RAM: '32GB LPDDR5X', Storage: '1TB PCIe SSD' }
    },
    {
      name: 'Dell Latitude 7350 Detachable 2-in-1 (Intel Core Ultra 7, 13" 3K Touchscreen with Folio & Pen, 16GB RAM, 512GB SSD)',
      slug: 'dell-latitude-7350-detachable-ultra-7',
      description: 'Worlds most versatile commercial detachable tablet with 13" 3K 500 nits display, 8MP front & 8MP HDR rear cameras, and collaboration folio.',
      price: 1899.00, discount_price: 1649.00, stock: 35, rating: 4.8, num_reviews: 64, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 7350 Detachable', Processor: 'Intel Core Ultra 7 164U', Display: '13.0" 3K (2880x1920) 500 nits Touch', RAM: '16GB LPDDR5X', Storage: '512GB SSD' }
    },
    {
      name: 'Dell Latitude 5550 Business Laptop (Intel Core Ultra 7 155H, 15.6" FHD, NVIDIA MX570A, 32GB DDR5, 1TB SSD, Numeric Keypad)',
      slug: 'dell-latitude-5550-ultra-7-32gb-1tb-mx570a',
      description: 'Enterprise workhorse with 15.6" anti-glare screen, dedicated number pad, NVIDIA discrete graphics, 32GB upgradeable DDR5 memory, and RJ45 ethernet.',
      price: 1699.00, discount_price: 1499.00, stock: 55, rating: 4.8, num_reviews: 130, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 5550', Processor: 'Intel Core Ultra 7 155H', Graphics: 'NVIDIA GeForce MX570A 2GB', Display: '15.6" FHD (1920x1080) 400 nits', RAM: '32GB DDR5 5600MHz (Dual SODIMM)', Storage: '1TB NVMe SSD' }
    },
    {
      name: 'Dell Latitude 5450 Enterprise Laptop (Intel Core Ultra 5 135U vPro, 14" FHD Anti-Glare, 16GB DDR5, 512GB SSD, SmartCard)',
      slug: 'dell-latitude-5450-ultra-5-vpro-16gb',
      description: 'The standard issue fleet laptop for global enterprises with Intel vPro Management, SmartCard reader, fingerprint power button, and Wi-Fi 6E.',
      price: 1299.00, discount_price: 1149.00, stock: 85, rating: 4.7, num_reviews: 210, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 5450', Processor: 'Intel Core Ultra 5 135U vPro', Display: '14.0" FHD (1920x1080) Anti-Glare', RAM: '16GB DDR5', Storage: '512GB SSD', Security: 'SmartCard Contacted & Contactless' }
    },
    {
      name: 'Dell Latitude 5350 2-in-1 (Intel Core Ultra 5 125U, 13.3" FHD Touch 360-degree Hinge, 16GB RAM, 512GB SSD)',
      slug: 'dell-latitude-5350-2in1-ultra-5-16gb',
      description: 'Flexible 13.3" 360-degree convertible with active pen support, FHD touch display, and all-day battery.',
      price: 1399.00, discount_price: 1219.00, stock: 50, rating: 4.7, num_reviews: 95, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 5350 2-in-1', Processor: 'Intel Core Ultra 5 125U', Display: '13.3" FHD Touch 300 nits', RAM: '16GB LPDDR5X', Storage: '512GB SSD' }
    },
    {
      name: 'Dell Latitude 3550 Mainstream Business Laptop (Intel Core i5-1335U, 15.6" FHD, 16GB RAM, 512GB SSD)',
      slug: 'dell-latitude-3550-i5-16gb-512gb',
      description: 'Affordable commercial laptop with 15.6" screen, full keyboard with numpad, 16GB RAM, and durable construction.',
      price: 899.00, discount_price: 779.00, stock: 90, rating: 4.6, num_reviews: 140, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 3550', Processor: 'Intel Core i5-1335U', Display: '15.6" FHD (1920x1080)', RAM: '16GB DDR5', Storage: '512GB SSD' }
    },
    {
      name: 'Dell Latitude 3450 Everyday Business Laptop (Intel Core i3-1315U, 14" FHD, 8GB RAM, 256GB SSD)',
      slug: 'dell-latitude-3450-i3-8gb-256gb',
      description: 'Essential small business laptop with reliable Intel Core i3, lightweight 1.5kg body, and TPM 2.0 security.',
      price: 649.00, discount_price: 549.00, stock: 100, rating: 4.5, num_reviews: 88, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 3450', Processor: 'Intel Core i3-1315U', Display: '14.0" FHD', RAM: '8GB DDR5', Storage: '256GB SSD' }
    },
    {
      name: 'Dell Latitude 7650 16" Large Business Laptop (Intel Core Ultra 7 165H, 16" QHD+ 500 nits, 32GB RAM, 1TB SSD)',
      slug: 'dell-latitude-7650-16-ultra-7-32gb',
      description: 'Large canvas 16.0" QHD+ business powerhouse with Intel Core Ultra 7, 32GB RAM, and 5G option.',
      price: 2199.00, discount_price: 1949.00, stock: 35, rating: 4.8, num_reviews: 58, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 7650', Processor: 'Intel Core Ultra 7 165H', Display: '16.0" QHD+ (2560x1600) 500 nits', RAM: '32GB LPDDR5X', Storage: '1TB SSD' }
    },
    {
      name: 'Dell Vostro 16 (5630, Intel Core i7-1360P, RTX 2050 4GB, 16" FHD+ 16:10, 16GB RAM, 1TB SSD, Titan Gray)',
      slug: 'dell-vostro-16-5630-i7-rtx-2050-16gb',
      description: 'Professional small-business laptop with 16" 16:10 large display, dedicated RTX 2050 graphics, aluminum exterior lid, and numeric keypad.',
      price: 1199.00, discount_price: 999.00, stock: 65, rating: 4.7, num_reviews: 155, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Vostro 16 (5630)', Processor: 'Intel Core i7-1360P', Graphics: 'NVIDIA GeForce RTX 2050 4GB', Display: '16.0" FHD+ (1920x1200) 16:10', RAM: '16GB LPDDR5', Storage: '1TB NVMe SSD' }
    },
    {
      name: 'Dell Vostro 15 (3530, Intel Core i5-1334U, 15.6" 120Hz FHD, 16GB RAM, 512GB SSD, Carbon Black)',
      slug: 'dell-vostro-15-3530-i5-120hz-16gb',
      description: 'Smooth 120Hz 15.6" productivity screen with lift-hinge ergonomic design, Intel Core i5, and fast charge to 80% in 60 mins.',
      price: 799.00, discount_price: 649.00, stock: 95, rating: 4.6, num_reviews: 180, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Vostro 15 (3530)', Processor: 'Intel Core i5-1334U', Display: '15.6" FHD (1920x1080) 120Hz', RAM: '16GB DDR4', Storage: '512GB SSD' }
    },
    {
      name: 'Dell Vostro 14 (3430, Intel Core i5-1335U, 14" FHD, 16GB RAM, 512GB SSD)',
      slug: 'dell-vostro-14-3430-i5-16gb-512gb',
      description: 'Compact 14" office laptop with 3-sided narrow borders, Spill-resistant keyboard, and hardware TPM 2.0 security.',
      price: 749.00, discount_price: 599.00, stock: 80, rating: 4.6, num_reviews: 95, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Vostro 14 (3430)', Processor: 'Intel Core i5-1335U', Display: '14.0" FHD', RAM: '16GB', Storage: '512GB SSD' }
    },
    {
      name: 'Dell Vostro 3020 Small Desktop (Intel Core i5-13400, 16GB DDR4, 512GB NVMe SSD, Wi-Fi 6, DVD-RW)',
      slug: 'dell-vostro-3020-small-desktop-i5',
      description: 'Space-saving small form factor office desktop with 10-core Intel Core i5-13400, 16GB RAM, optical DVD drive, and Wi-Fi 6.',
      price: 799.00, discount_price: 669.00, stock: 50, rating: 4.6, num_reviews: 74, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Vostro 3020 SFF', Processor: 'Intel Core i5-13400 (10 Cores)', RAM: '16GB DDR4', Storage: '512GB NVMe SSD', FormFactor: 'Small Form Factor (SFF)' }
    },
    {
      name: 'Dell Vostro 3020 Tower Desktop (Intel Core i7-13700, 32GB DDR4, 1TB SSD + 1TB HDD, Windows 11 Pro)',
      slug: 'dell-vostro-3020-tower-i7-32gb',
      description: 'Expandable business mini-tower desktop with 16-core i7-13700, dual drive storage, and Windows 11 Pro.',
      price: 1299.00, discount_price: 1099.00, stock: 35, rating: 4.7, num_reviews: 62, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Vostro 3020 Tower', Processor: 'Intel Core i7-13700 (16 Cores)', RAM: '32GB DDR4', Storage: '1TB SSD + 1TB HDD' }
    },
    {
      name: 'Dell Latitude 7440 Ultralight Business Laptop (Intel Core i7-1365U, 14" FHD+ 400 nits, 16GB RAM, 512GB SSD)',
      slug: 'dell-latitude-7440-ultralight-i7-16gb',
      description: 'Featherweight 14" magnesium business laptop with Intel Core i7, 400 nits low power screen, and Wi-Fi 6E.',
      price: 1699.00, discount_price: 1449.00, stock: 45, rating: 4.8, num_reviews: 105, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 7440 Ultralight', Processor: 'Intel Core i7-1365U', RAM: '16GB LPDDR5', Storage: '512GB SSD', Weight: '1.05 kg' }
    },
    {
      name: 'Dell Latitude 5440 Rugged Extreme Laptop (Mil-STD 810H & IP-65 Certified, 14" Outdoor Touch, Hot-Swap Dual Battery)',
      slug: 'dell-latitude-5440-rugged-extreme',
      description: 'Indestructible semi-rugged laptop built for field engineers, military, and first responders. Drops from 3 feet, IP-53 water/dust ingress, 14" 1000 nits glove-touch outdoor screen, and dual hot-swappable batteries.',
      price: 2499.00, discount_price: 2249.00, stock: 20, rating: 4.9, num_reviews: 45, is_featured: true, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 5440 Rugged', Durability: 'MIL-STD-810H & IP-53 Ingress Protection', Display: '14.0" FHD 1000 nits Outdoor-Readable Glove Touch', Processor: 'Intel Core i7-1370P vPro', Batteries: 'Dual Hot-Swappable Batteries' }
    },
    {
      name: 'Dell Latitude 7230 Rugged Extreme Tablet (12" 1200 nits Glove-Touch Gorilla Glass, Intel Core i7, Dual Hot-Swap, Barcode)',
      slug: 'dell-latitude-7230-rugged-extreme-tablet',
      description: 'Worlds lightest and most powerful 12" fully-rugged tablet. IP-65 waterproof, 1200 nits direct sunlight screen, integrated 1D/2D barcode scanner, and dual hot-swap batteries.',
      price: 2799.00, discount_price: 2499.00, stock: 15, rating: 5.0, num_reviews: 32, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 7230 Rugged Tablet', Durability: 'MIL-STD-810H Drop Tested from 4 Feet & IP-65 Dust/Waterproof', Display: '12.0" 1200 nits Direct Sunlight Readable Glove-Touch', Processor: 'Intel Core i7-1265U vPro' }
    },
    {
      name: 'Dell Latitude 7340 13.3" Ultralight (Intel Core i7-1355U, 16GB LPDDR5, 512GB NVMe SSD, 0.98 kg)',
      slug: 'dell-latitude-7340-ultralight-i7',
      description: 'Ultralight magnesium alloy 13.3" laptop for frequent flyers with Intel Core i7, 512GB SSD, and FHD webcam.',
      price: 1599.00, discount_price: 1399.00, stock: 45, rating: 4.8, num_reviews: 78, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 7340', Processor: 'Intel Core i7-1355U', RAM: '16GB', Storage: '512GB SSD', Weight: '0.98 kg' }
    },
    {
      name: 'Dell Latitude 5540 15.6" (Intel Core i7-1355U, 32GB DDR5, 1TB SSD, Intel Iris Xe, Fingerprint)',
      slug: 'dell-latitude-5540-i7-32gb-1tb',
      description: 'Spacious 15.6" corporate laptop with 32GB memory, numeric keypad, and IR camera.',
      price: 1499.00, discount_price: 1299.00, stock: 50, rating: 4.7, num_reviews: 110, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 5540', Processor: 'Intel Core i7-1355U', RAM: '32GB DDR5', Storage: '1TB SSD' }
    },
    {
      name: 'Dell Latitude 3340 Education Laptop (Intel Core i3-1315U, Rugged Rubberized Bumper, Spill-Resistant, 8GB RAM, 256GB SSD)',
      slug: 'dell-latitude-3340-education-i3',
      description: 'Durable student laptop engineered for classrooms with captive keys, rubberized bumper edges, and drop protection.',
      price: 599.00, discount_price: 499.00, stock: 110, rating: 4.5, num_reviews: 95, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 3340', Durability: 'Rubberized Base & Spill-Resistant Keyboard', RAM: '8GB', Storage: '256GB SSD' }
    },
    {
      name: 'Dell Latitude 5430 Chromebook Enterprise (Intel Core i5-1235U, 14" QHD Touch, 16GB RAM, 256GB SSD, ChromeOS)',
      slug: 'dell-latitude-5430-chromebook-enterprise',
      description: 'Premium cloud-first business laptop powered by ChromeOS Enterprise with 14" QHD Touch display, Intel Core i5, and Google Titan C security.',
      price: 899.00, discount_price: 749.00, stock: 40, rating: 4.6, num_reviews: 54, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Latitude 5430 Chromebook', OS: 'ChromeOS Enterprise Upgrade', Processor: 'Intel Core i5-1235U', Display: '14.0" QHD Touch' }
    }
  ];

  // 4. Dell Precision Mobile & Tower Workstations - 18 SKUs
  const precision = [
    {
      name: 'Dell Precision 7780 17.3" Mobile Workstation (Intel Core i9-13950HX, NVIDIA RTX 5000 Ada 16GB, 17.3" 4K 120Hz, 128GB CAMM, 4TB SSD)',
      slug: 'dell-precision-7780-i9-rtx-5000-ada-128gb',
      description: 'The most powerful mobile workstation on earth for CAD, AI, simulation, and VFX. 24-core Intel Core i9-13950HX vPro, NVIDIA RTX 5000 Ada Generation 16GB, 17.3" 4K UHD (3840x2160) 120Hz 100% DCI-P3 500 nits screen, revolutionary 128GB DDR5 CAMM memory module, and 4TB PCIe 4.0 NVMe SSD.',
      price: 5999.00, discount_price: 5499.00, stock: 8, rating: 5.0, num_reviews: 42, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 7780', Processor: 'Intel Core i9-13950HX vPro (24 Cores, 32 Threads, up to 5.5 GHz)', Graphics: 'NVIDIA RTX 5000 Ada Generation 16GB GDDR6 ECC', Display: '17.3" 4K UHD (3840x2160) 120Hz 500 nits 100% DCI-P3 Anti-Glare', Memory: '128GB DDR5 CAMM (Compression Attached Memory Module)', Storage: '4TB (2x 2TB RAID 0) PCIe Gen 4 SSD', ISVCertifications: 'Certified for Autodesk, SolidWorks, Siemens NX, Adobe, DaVinci' }
    },
    {
      name: 'Dell Precision 7680 16" Mobile Workstation (Intel Core i9-13950HX, NVIDIA RTX 4000 Ada 12GB, 16" OLED 4K Touch, 64GB CAMM, 2TB SSD)',
      slug: 'dell-precision-7680-i9-rtx-4000-ada-oled',
      description: 'Compact 16" heavy workstation with OLED 4K Touch panel, RTX 4000 Ada, 64GB CAMM memory, and aluminum chassis.',
      price: 4399.00, discount_price: 3999.00, stock: 12, rating: 4.9, num_reviews: 58, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 7680', Processor: 'Intel Core i9-13950HX', Graphics: 'NVIDIA RTX 4000 Ada 12GB', Display: '16.0" 4K OLED Touch 400 nits', RAM: '64GB DDR5 CAMM', Storage: '2TB SSD' }
    },
    {
      name: 'Dell Precision 5690 16" AI Mobile Workstation (Intel Core Ultra 9 185H with NPU, NVIDIA RTX 5000 Ada 16GB, 16" 4K OLED Touch, 64GB RAM, 2TB SSD)',
      slug: 'dell-precision-5690-ultra-9-rtx-5000-ada',
      description: 'World-first AI workstation laptop with Intel Core Ultra 9 NPU and NVIDIA RTX 5000 Ada Generation, 16" 4K OLED Touchscreen, 4-speaker haptic spatial audio, and dual Thunderbolt 4.',
      price: 4799.00, discount_price: 4399.00, stock: 10, rating: 5.0, num_reviews: 38, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 5690', Processor: 'Intel Core Ultra 9 185H with Dedicated AI NPU Engine', Graphics: 'NVIDIA RTX 5000 Ada Generation 16GB GDDR6', Display: '16.0" 4K UHD+ (3840x2400) OLED Touch 100% DCI-P3 400 nits', RAM: '64GB LPDDR5X 7467MHz', Storage: '2TB PCIe 4.0 SSD' }
    },
    {
      name: 'Dell Precision 5680 16" Workstation (Intel Core i9-13900H, NVIDIA RTX 3500 Ada 12GB, 32GB RAM, 1TB SSD)',
      slug: 'dell-precision-5680-i9-rtx-3500-ada',
      description: 'Thin-bezel 16.0" workstation with RTX 3500 Ada, 32GB RAM, 1TB NVMe, and full-size HDMI 2.0.',
      price: 3299.00, discount_price: 2999.00, stock: 18, rating: 4.9, num_reviews: 50, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 5680', Processor: 'Intel Core i9-13900H', Graphics: 'NVIDIA RTX 3500 Ada 12GB', RAM: '32GB DDR5', Storage: '1TB SSD' }
    },
    {
      name: 'Dell Precision 5490 14" Ultra-Compact Workstation (Intel Core Ultra 9 185H, NVIDIA RTX 3000 Ada 8GB, 14" QHD+ Touch, 64GB RAM, 2TB SSD)',
      slug: 'dell-precision-5490-ultra-9-rtx-3000-64gb',
      description: 'Worlds most powerful 14" mobile workstation. Intel Core Ultra 9 with AI Boost, NVIDIA RTX 3000 Ada, 64GB LPDDR5X memory, and 14" QHD+ Touch in a 1.48kg chassis.',
      price: 3499.00, discount_price: 3199.00, stock: 15, rating: 4.9, num_reviews: 44, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 5490', Processor: 'Intel Core Ultra 9 185H', Graphics: 'NVIDIA RTX 3000 Ada 8GB', Display: '14.0" QHD+ (2560x1600) Touch 500 nits', RAM: '64GB LPDDR5X', Storage: '2TB SSD', Weight: '1.48 kg' }
    },
    {
      name: 'Dell Precision 3591 15.6" Entry Workstation (Intel Core Ultra 7 155H, NVIDIA RTX 2000 Ada 8GB, 32GB DDR5, 1TB SSD)',
      slug: 'dell-precision-3591-ultra-7-rtx-2000-ada',
      description: 'Reliable engineering student & professional workstation with Intel Core Ultra 7, RTX 2000 Ada 8GB, 32GB DDR5, and numeric keypad.',
      price: 1999.00, discount_price: 1799.00, stock: 30, rating: 4.8, num_reviews: 76, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 3591', Processor: 'Intel Core Ultra 7 155H', Graphics: 'NVIDIA RTX 2000 Ada 8GB', RAM: '32GB DDR5', Storage: '1TB SSD' }
    },
    {
      name: 'Dell Precision 3490 14" Mobile Workstation (Intel Core Ultra 7 155U, NVIDIA RTX 500 Ada 4GB, 16GB DDR5, 512GB SSD)',
      slug: 'dell-precision-3490-ultra-7-rtx-500',
      description: 'Lightweight entry 2D/3D CAD laptop with Intel Core Ultra 7, RTX 500 Ada, and 14" FHD screen.',
      price: 1499.00, discount_price: 1329.00, stock: 40, rating: 4.7, num_reviews: 60, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 3490', Processor: 'Intel Core Ultra 7 155U', Graphics: 'NVIDIA RTX 500 Ada 4GB', RAM: '16GB DDR5', Storage: '512GB SSD' }
    },
    {
      name: 'Dell Precision 3680 Tower Workstation (Intel Core i9-14900K, NVIDIA RTX 4500 Ada 24GB, 64GB ECC DDR5, 2TB SSD + 4TB HDD, 1000W)',
      slug: 'dell-precision-3680-tower-i9-rtx-4500-ada',
      description: 'Single-socket mini-tower powerhouse for VR, architectural rendering, and engineering. 24-core i9-14900K, RTX 4500 Ada 24GB, 64GB ECC RAM, and 1000W Gold PSU.',
      price: 4999.00, discount_price: 4599.00, stock: 10, rating: 5.0, num_reviews: 35, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 3680 Tower', Processor: 'Intel Core i9-14900K (24 Cores, 6.0 GHz)', Graphics: 'NVIDIA RTX 4500 Ada Generation 24GB GDDR6', RAM: '64GB (2x32GB) DDR5 4800MHz ECC', Storage: '2TB NVMe SSD + 4TB Enterprise 7200RPM HDD' }
    },
    {
      name: 'Dell Precision 5860 Tower Workstation (Intel Xeon w7-2495X 24 Cores, NVIDIA RTX 6000 Ada 48GB, 128GB ECC DDR5, 4TB SSD, Dual 10GbE)',
      slug: 'dell-precision-5860-xeon-rtx-6000-ada',
      description: 'Enterprise AI training and cinematic rendering mid-tower. Intel Xeon w7-2495X with 24 cores/48 threads, gargantuan 48GB NVIDIA RTX 6000 Ada Generation GPU, 128GB Quad-Channel ECC DDR5, and Dual 10GbE LAN.',
      price: 11999.00, discount_price: 10899.00, stock: 5, rating: 5.0, num_reviews: 20, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 5860 Tower', Processor: 'Intel Xeon w7-2495X (24 Cores, 48 Threads, 45MB Cache)', Graphics: 'NVIDIA RTX 6000 Ada Generation 48GB GDDR6 with ECC', RAM: '128GB (4x32GB) DDR5 4800MHz RDIMM ECC', Storage: '4TB NVMe Class 50 SSD', Networking: 'Integrated 10GbE + 1GbE Ethernet' }
    },
    {
      name: 'Dell Precision 7960 Tower Workstation (Intel Xeon w9-3495X 56 Cores, Dual NVIDIA RTX 6000 Ada 96GB Total, 256GB ECC DDR5, 8TB SSD, 2200W)',
      slug: 'dell-precision-7960-xeon-dual-rtx-6000',
      description: 'The ultimate computational monster. 56-core Intel Xeon w9-3495X processor, Dual NVIDIA RTX 6000 Ada 48GB cards (96GB VRAM total), 256GB 8-Channel ECC DDR5, 8TB NVMe M.2 RAID, and 2200W redundant power.',
      price: 24999.00, discount_price: 22999.00, stock: 3, rating: 5.0, num_reviews: 14, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 7960 Tower', Processor: 'Intel Xeon w9-3495X (56 Cores, 112 Threads, 105MB Cache)', Graphics: '2x NVIDIA RTX 6000 Ada Generation (96GB Combined VRAM)', RAM: '256GB (8x32GB) DDR5 4800MHz 8-Channel ECC', Storage: '8TB (4x 2TB RAID 0) NVMe SSD', PSU: '2200W High Efficiency' }
    },
    {
      name: 'Dell Precision 3280 Compact Workstation (Micro-Form-Factor, Intel Core i9-14900, NVIDIA RTX 4000 SFF Ada 20GB, 64GB DDR5, 2TB SSD)',
      slug: 'dell-precision-3280-compact-i9-rtx-4000',
      description: 'Ultra-small 2.9-liter micro chassis packing desktop i9-14900 and 20GB RTX 4000 SFF Ada GPU for compact workspaces and control rooms.',
      price: 3499.00, discount_price: 3199.00, stock: 15, rating: 4.9, num_reviews: 32, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 3280 Compact', Volume: '2.9 Liters (Ultra-Compact Form Factor)', Processor: 'Intel Core i9-14900 (24 Cores)', Graphics: 'NVIDIA RTX 4000 SFF Ada 20GB', RAM: '64GB DDR5', Storage: '2TB SSD' }
    },
    {
      name: 'Dell Precision 3930 1U Rack Workstation (Intel Xeon E-2388G, NVIDIA RTX A4000, 64GB ECC RAM, Redundant Power)',
      slug: 'dell-precision-3930-1u-rack-workstation',
      description: '1U server-rackable remote workstation with Intel Xeon, RTX A4000 16GB, Teradici PCoIP remote access support, and iDRAC9 management.',
      price: 3899.00, discount_price: 3499.00, stock: 8, rating: 4.9, num_reviews: 22, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 3930 Rack', FormFactor: '1U Rackmount Server', Processor: 'Intel Xeon E-2388G (8 Cores, 16 Threads)', Graphics: 'NVIDIA RTX A4000 16GB', Management: 'Integrated iDRAC9 Enterprise' }
    },
    {
      name: 'Dell Precision 7875 Tower Workstation (AMD Ryzen Threadripper PRO 7995WX 96 Cores, NVIDIA RTX 6000 Ada, 256GB DDR5, 4TB NVMe)',
      slug: 'dell-precision-7875-threadripper-7995wx',
      description: 'Worlds fastest 96-core AMD Ryzen Threadripper PRO workstation with RTX 6000 Ada 48GB and 256GB 8-channel ECC RAM.',
      price: 18999.00, discount_price: 17499.00, stock: 4, rating: 5.0, num_reviews: 16, is_featured: true, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 7875 Tower', Processor: 'AMD Ryzen Threadripper PRO 7995WX (96 Cores, 192 Threads, 384MB L3 Cache)', Graphics: 'NVIDIA RTX 6000 Ada Generation 48GB', RAM: '256GB DDR5 ECC' }
    },
    {
      name: 'Dell Precision 7865 Tower (AMD Threadripper PRO 5995WX 64 Cores, Dual RTX A6000, 128GB RAM, 4TB SSD)',
      slug: 'dell-precision-7865-threadripper-5995wx',
      description: '64-Core Threadripper workstation with dual NVIDIA RTX A6000 graphics cards and liquid cooling.',
      price: 13999.00, discount_price: 12499.00, stock: 6, rating: 5.0, num_reviews: 24, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 7865 Tower', Processor: 'AMD Threadripper PRO 5995WX (64 Cores)', Graphics: '2x NVIDIA RTX A6000 (96GB VRAM Total)', RAM: '128GB ECC' }
    },
    {
      name: 'Dell Precision 3480 14" Workstation (Intel Core i7-1360P, NVIDIA RTX A500 4GB, 32GB RAM, 1TB SSD)',
      slug: 'dell-precision-3480-i7-rtx-a500-32gb',
      description: 'Portable entry workstation for Revit, AutoCAD, and SolidWorks with Core i7 and RTX A500.',
      price: 1599.00, discount_price: 1399.00, stock: 35, rating: 4.7, num_reviews: 68, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 3480', Processor: 'Intel Core i7-1360P', Graphics: 'NVIDIA RTX A500 4GB', RAM: '32GB DDR5', Storage: '1TB SSD' }
    },
    {
      name: 'Dell Precision 3581 15.6" Workstation (Intel Core i7-13800H, NVIDIA RTX 2000 Ada 8GB, 32GB RAM, 1TB SSD)',
      slug: 'dell-precision-3581-i7-rtx-2000-ada',
      description: 'High-performance 15.6" CAD laptop with Intel Core i7-13800H 45W CPU, RTX 2000 Ada, and 32GB memory.',
      price: 2099.00, discount_price: 1849.00, stock: 25, rating: 4.8, num_reviews: 80, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 3581', Processor: 'Intel Core i7-13800H vPro', Graphics: 'NVIDIA RTX 2000 Ada 8GB', RAM: '32GB DDR5', Storage: '1TB SSD' }
    },
    {
      name: 'Dell Precision 5480 14" Workstation (Intel Core i9-13900H, NVIDIA RTX 3000 Ada 8GB, 32GB RAM, 1TB SSD)',
      slug: 'dell-precision-5480-i9-rtx-3000-ada',
      description: '14" 4K+ Touch compact workhorse with Core i9, RTX 3000 Ada 8GB, and premium aluminum enclosure.',
      price: 3199.00, discount_price: 2899.00, stock: 20, rating: 4.9, num_reviews: 52, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 5480', Processor: 'Intel Core i9-13900H', Graphics: 'NVIDIA RTX 3000 Ada 8GB', RAM: '32GB', Storage: '1TB SSD' }
    },
    {
      name: 'Dell Precision 7920 Dual Xeon Scalable Workstation (Dual Intel Xeon Gold 6248R 48 Cores, 192GB ECC, Dual Quadro RTX 8000)',
      slug: 'dell-precision-7920-dual-xeon-gold',
      description: 'Dual-processor massive workstation with 48 physical cores, 192GB ECC RAM, dual Quadro RTX 8000 48GB GPUs, and SAS RAID.',
      price: 16999.00, discount_price: 15499.00, stock: 3, rating: 5.0, num_reviews: 18, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Precision 7920', Processors: '2x Intel Xeon Gold 6248R (48 Cores Total)', Graphics: '2x NVIDIA Quadro RTX 8000 (96GB VRAM)', RAM: '192GB DDR4 ECC RDIMM' }
    }
  ];

  // 5. Dell UltraSharp & Professional Monitors, Docks & Accessories - 25 SKUs
  const monitorsAndDocks = [
    {
      name: 'Dell UltraSharp 40" Curved Thunderbolt Hub Monitor (U4025QW, 5120x2160 5K2K, 120Hz, IPS Black, 140W PD, RJ45)',
      slug: 'dell-ultrasharp-40-5k2k-u4025qw',
      description: 'Worlds first 40" 5K2K (5120x2160) 120Hz monitor with IPS Black technology (2000:1 contrast), single-cable 140W Thunderbolt 4 hub, 2.5GbE RJ45 ethernet, KVM switch, internal stereo speakers, and 99% DCI-P3 color.',
      price: 2399.00, discount_price: 2099.00, stock: 20, rating: 5.0, num_reviews: 110, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'UltraSharp U4025QW', Display: '39.7" Curved 2500R IPS Black (5120x2160 5K2K 21:9)', RefreshRate: '120Hz ComfortView Plus (TUV 5-Star Eye Comfort)', Hub: 'Thunderbolt 4 with 140W Power Delivery, 2.5Gbps RJ45 Ethernet, 5x USB-A/C', Color: '99% DCI-P3, Display P3 & 100% sRGB Delta E < 2' }
    },
    {
      name: 'Dell UltraSharp 38" Curved USB-C Hub Monitor (U3824DW, WQHD+ 3840x1600, IPS Black, KVM, 90W PD)',
      slug: 'dell-ultrasharp-38-wqhd-u3824dw',
      description: 'Expansive 37.5" 21:9 WQHD+ (3840x1600) curved productivity monitor with IPS Black 2000:1 contrast, 90W USB-C PD, RJ45 2.5G port, and Auto KVM.',
      price: 1499.00, discount_price: 1299.00, stock: 25, rating: 4.9, num_reviews: 85, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'UltraSharp U3824DW', Display: '37.5" Curved 2300R IPS Black (3840x1600 WQHD+)', Features: 'Built-in KVM, 2.5GbE Ethernet, 90W USB-C Charging' }
    },
    {
      name: 'Dell UltraSharp 34" Curved USB-C Hub Monitor (U3425WE, 3440x1440, 120Hz, IPS Black, Thunderbolt 4)',
      slug: 'dell-ultrasharp-34-curved-u3425we',
      description: 'Ultrawide 34" 120Hz curved display with IPS Black technology, Thunderbolt 4 90W host charging, 2.5GbE LAN, and 98% DCI-P3.',
      price: 1099.00, discount_price: 949.00, stock: 35, rating: 4.9, num_reviews: 140, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'UltraSharp U3425WE', Display: '34.14" Curved 1900R IPS Black (3440x1440 WQHD)', RefreshRate: '120Hz', Hub: 'Thunderbolt 4 Hub with 90W PD' }
    },
    {
      name: 'Dell UltraSharp 32" 6K Monitor (U3224KB, 6144x3456, IPS Black, Built-in 4K HDR Webcam, Thunderbolt 4)',
      slug: 'dell-ultrasharp-32-6k-u3224kb',
      description: 'Worlds first 6K monitor with IPS Black technology. 6144x3456 pixels (150% more pixels than 4K), integrated 4K HDR dual-gain webcam with AI auto-framing, dual 14W speakers, and 140W Thunderbolt 4 hub.',
      price: 3199.00, discount_price: 2799.00, stock: 15, rating: 5.0, num_reviews: 64, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'UltraSharp U3224KB', Display: '31.5" 6K (6144x3456) IPS Black 2000:1 Contrast', Camera: 'Built-in 4K Dual-Gain HDR Webcam with SafeShutter', Audio: 'Dual 14W High-Fidelity Speakers + Noise-Canceling Mics', Hub: 'Thunderbolt 4 with 140W EPR Power Delivery' }
    },
    {
      name: 'Dell UltraSharp 32" 4K QD-Mini LED Monitor (UP3221Q, 2000 Mini-LED Zones, Built-in Calman Colorimeter, 1000 nits)',
      slug: 'dell-ultrasharp-32-mini-led-up3221q',
      description: 'Reference color grading monitor with 2000 Mini-LED local dimming zones, built-in Calman motorized colorimeter, 99.8% DCI-P3, and 1000 nits peak HDR.',
      price: 4499.00, discount_price: 3999.00, stock: 8, rating: 5.0, num_reviews: 28, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'UltraSharp PremierColor UP3221Q', Display: '31.5" 4K (3840x2160) 2000 Mini-LED Zones', Colorimeter: 'Integrated Motorized Calman Colorimeter', Color: '99.8% DCI-P3 & 93% Adobe RGB' }
    },
    {
      name: 'Dell UltraSharp 32" 4K USB-C Hub Monitor (U3223QE, 3840x2160 IPS Black, 2000:1 Contrast, 90W PD, RJ45)',
      slug: 'dell-ultrasharp-32-4k-u3223qe',
      description: 'Industry-standard 31.5" 4K IPS Black monitor with 2000:1 contrast, 90W USB-C hub, RJ45 Ethernet, and daisy chain DisplayPort-out.',
      price: 899.00, discount_price: 749.00, stock: 50, rating: 4.9, num_reviews: 280, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'UltraSharp U3223QE', Display: '31.5" 4K UHD (3840x2160) IPS Black', Contrast: '2000:1 True Black Contrast', Hub: 'USB-C 90W PD, RJ45 LAN, KVM, DisplayPort Out MST' }
    },
    {
      name: 'Dell UltraSharp 27" 4K USB-C Hub Monitor (U2723QE, 3840x2160 IPS Black, 98% DCI-P3, HDR 400)',
      slug: 'dell-ultrasharp-27-4k-u2723qe',
      description: 'Top-selling 27" 4K monitor with IPS Black panel, 98% DCI-P3 wide color, 90W USB-C power delivery, and KVM.',
      price: 649.00, discount_price: 529.00, stock: 75, rating: 4.9, num_reviews: 410, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'UltraSharp U2723QE', Display: '27" 4K (3840x2160) IPS Black 2000:1', Color: '98% DCI-P3, Delta E < 2', Hub: '90W USB-C PD, RJ45 Ethernet' }
    },
    {
      name: 'Dell UltraSharp 27" Thunderbolt 4 Hub Monitor (U2724DE, 2560x1440 QHD, 120Hz, IPS Black, Ambient Sensor)',
      slug: 'dell-ultrasharp-27-120hz-u2724de',
      description: 'First 27" 120Hz QHD UltraSharp with IPS Black, ambient light auto-brightness sensor, 90W Thunderbolt 4 hub, and 2.5GbE network.',
      price: 599.00, discount_price: 499.00, stock: 60, rating: 4.8, num_reviews: 165, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'UltraSharp U2724DE', Display: '27" QHD (2560x1440) 120Hz IPS Black', Sensor: 'Built-in Ambient Light Sensor', Hub: 'Thunderbolt 4 Hub 90W PD & 2.5GbE' }
    },
    {
      name: 'Dell UltraSharp 24" USB-C Hub Monitor (U2424HE, 1920x1080, 120Hz, RJ45, ComfortView Plus)',
      slug: 'dell-ultrasharp-24-120hz-u2424he',
      description: 'Ergonomic 23.8" 120Hz FHD monitor with 90W USB-C hub, RJ45 LAN, and eye comfort certification.',
      price: 379.00, discount_price: 319.00, stock: 80, rating: 4.8, num_reviews: 190, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'UltraSharp U2424HE', Display: '23.8" FHD 120Hz (1920x1080)', Hub: '90W USB-C, RJ45 Ethernet' }
    },
    {
      name: 'Dell 27" 4K Video Conferencing Monitor (P2724DEB, Pop-up 2K QHD Webcam, Dual 5W Speakers, USB-C)',
      slug: 'dell-p2724deb-video-conferencing-monitor',
      description: 'Certified for Microsoft Teams & Zoom. Integrated pop-up 2K QHD webcam with Sony STARVIS sensor, dual 5W speakers, and noise-canceling dual mics.',
      price: 699.00, discount_price: 579.00, stock: 45, rating: 4.8, num_reviews: 115, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'P2724DEB', Display: '27" QHD (2560x1440) IPS', Camera: 'Pop-up 2K QHD Webcam with Windows Hello', Audio: 'Dual 5W Speakers + Dual Noise-Canceling Mics' }
    },
    {
      name: 'Dell 34" Curved Video Conferencing Monitor (C3422WE, 5MP IR Camera with Windows Hello, Teams Certified)',
      slug: 'dell-c3422we-curved-conferencing-monitor',
      description: 'Dedicated 34" 21:9 curved conference monitor with one-touch Microsoft Teams button, 5MP IR pop-up webcam, and 90W USB-C.',
      price: 999.00, discount_price: 829.00, stock: 30, rating: 4.8, num_reviews: 74, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'C3422WE', Display: '34.14" Curved WQHD (3440x1440)', Camera: '5MP Pop-up IR Camera', Certification: 'Certified for Microsoft Teams' }
    },
    {
      name: 'Dell 24" Touch Monitor (P2424HT, 10-Point Articulating Touchscreen, 90W USB-C, Height-Adjustable)',
      slug: 'dell-p2424ht-touch-monitor',
      description: 'Worlds first 23.8" touch monitor with RJ45 connectivity and articulating stand that tilts from vertical to flat desk angle.',
      price: 519.00, discount_price: 429.00, stock: 35, rating: 4.7, num_reviews: 62, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'P2424HT', Display: '23.8" FHD 10-Point Touch', Stand: 'Articulating Downward Tilting Stand', Hub: '90W USB-C & RJ45 Ethernet' }
    },
    {
      name: 'Dell Thunderbolt 4 Dock (WD22TB4, Dual 4K/Single 8K, 130W Power Delivery, Modular Upgradable)',
      slug: 'dell-thunderbolt-4-dock-wd22tb4',
      description: 'Universal workstation dock delivering up to 130W to Dell laptops (90W non-Dell), dual Thunderbolt 4 ports, modular swappable I/O, and quad 4K display output.',
      price: 329.00, discount_price: 279.00, stock: 90, rating: 4.8, num_reviews: 260, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'WD22TB4', PowerDelivery: '130W Dell ExpressCharge (90W Universal)', Ports: '2x TB4, 2x DP 1.4, 1x HDMI 2.0, 3x USB-A 3.2, 2x USB-C, Gigabit RJ45', MultiDisplay: 'Supports up to 4x 4K Monitors' }
    },
    {
      name: 'Dell Dual Charge Dock (HD22Q, Qi Wireless Fast Charging Stand, 4-Port USB-C Hub, 90W PD)',
      slug: 'dell-dual-charge-dock-hd22q',
      description: 'Compact desktop dock with integrated Qi fast wireless smartphone charging pad, 90W USB-C laptop power, and dual monitor support.',
      price: 199.00, discount_price: 169.00, stock: 70, rating: 4.8, num_reviews: 145, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'HD22Q Dual Charge Dock', WirelessCharging: '12W Qi Fast Wireless Stand', Power: '90W Power Delivery to Laptop', Displays: 'Dual Monitor (HDMI 2.1 + DP 1.4)' }
    },
    {
      name: 'Dell Universal Dock (UD22, DisplayLink Quad 4K Monitor Support, 96W PD, Mac & Windows)',
      slug: 'dell-universal-dock-ud22',
      description: 'DisplayLink powered universal dock driving up to 4x 4K displays on any Mac (M1/M2/M3) or Windows laptop with 96W power delivery.',
      price: 289.00, discount_price: 249.00, stock: 65, rating: 4.8, num_reviews: 180, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'UD22 Universal Dock', Technology: 'DisplayLink Quad 4K (Mac & Windows Compatible)', Power: '96W USB-C PD' }
    },
    {
      name: 'Dell Performance Dock (WD19DCS, Dual USB-C 210W Power Delivery for Precision Workstations)',
      slug: 'dell-performance-dock-wd19dcs',
      description: 'Heavy duty dock with dual USB-C connectors delivering up to 210W power for Dell Precision 7000 mobile workstations.',
      price: 379.00, discount_price: 329.00, stock: 40, rating: 4.9, num_reviews: 90, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'WD19DCS', Power: '210W Dual USB-C Power Delivery', Compatibility: 'Dell Precision 7000/7780/7680/7770' }
    },
    {
      name: 'Dell Premier Wireless ANC Headset (WL7024, AI Active Noise Cancellation, Bluetooth 5.3)',
      slug: 'dell-premier-wl7024-wireless-anc-headset',
      description: 'Smart AI noise cancellation headset with automatic on-head detection, discrete boom mic, charging stand, and 80 hours battery life.',
      price: 299.00, discount_price: 249.00, stock: 55, rating: 4.8, num_reviews: 88, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'WL7024', ANC: 'Adaptive Active Noise Cancelling with AI Mic Processing', Battery: 'Up to 80 Hours (ANC Off) / 55 Hours (ANC On)', Stand: 'Magnetic Charging Stand Included' }
    },
    {
      name: 'Dell Pro 2K Webcam (WB5023, 2K QHD 60fps, Sony STARVIS Sensor, Digital Overlap HDR, AI Framing)',
      slug: 'dell-pro-2k-webcam-wb5023',
      description: 'Broadcast quality 2K QHD webcam with large Sony STARVIS sensor for superior low-light performance, AI facial framing, and magnetic privacy cap.',
      price: 139.00, discount_price: 109.00, stock: 85, rating: 4.8, num_reviews: 175, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'WB5023', Resolution: '2K QHD @ 60fps / 1080p @ 60fps', Sensor: 'Sony STARVIS Sensor with DOL-HDR', FieldOfView: 'Adjustable 65° / 78°' }
    },
    {
      name: 'Dell UltraSharp 4K Webcam (WB7022, 4K 30fps / 1080p 60fps, Large 4K Sony Sensor, AI Auto-Framing)',
      slug: 'dell-ultrasharp-4k-webcam-wb7022',
      description: 'Worlds most intelligent 4K webcam featuring Digital Overlap HDR, seamless AI auto-framing, Windows Hello facial login, and aluminum barrel.',
      price: 199.00, discount_price: 159.00, stock: 60, rating: 4.9, num_reviews: 230, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'UltraSharp WB7022', Resolution: '4K UHD (3840x2160) @ 30fps / 1080p @ 60fps', Sensor: 'Large 4K Sony STARVIS CMOS Sensor', Security: 'Windows Hello Facial Recognition & ExpressSign-in' }
    },
    {
      name: 'Dell Premier Collaboration Keyboard and Mouse (KM900, Zoom/Teams Touch Controls, Scissor Keys, Track-on-Glass)',
      slug: 'dell-premier-km900-collaboration-set',
      description: 'Dedicated Zoom/Teams touch control icons on keyboard, smart backlighting with hand proximity detection, and 8000 DPI track-on-glass mouse.',
      price: 249.00, discount_price: 209.00, stock: 70, rating: 4.9, num_reviews: 140, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'Premier KM900', Features: 'Touch Zoom/Teams Mute & Video Controls on Keyboard', Mouse: 'Track-on-Glass 8000 DPI Mouse with Horizontal Scroll', Battery: 'USB-C Rechargeable' }
    },
    {
      name: 'Dell Pro Wireless Keyboard and Mouse (KM5221W, 36-Month Battery Life, 4000 DPI Mouse)',
      slug: 'dell-pro-wireless-km5221w-combo',
      description: 'Incredible 36-month battery lifespan, silent scissor keystrokes, 12 programmable shortcut keys, and 4000 DPI adjustable mouse.',
      price: 59.00, discount_price: 44.00, stock: 120, rating: 4.8, num_reviews: 310, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'KM5221W', BatteryLife: 'Up to 36 Months on AA Batteries', Connectivity: '2.4GHz Wireless with 128-Bit AES Encryption' }
    },
    {
      name: 'Dell Active Pen (PN5122W, 4096 Levels Pressure, Tilt Sensing, Magnetic Attachment, Wacom AES 2.0)',
      slug: 'dell-active-pen-pn5122w',
      description: 'Natural writing and drawing with 4096 pressure levels, tilt recognition, magnetic storage on Latitude & XPS 2-in-1s, and 12-month battery life.',
      price: 69.00, discount_price: 54.00, stock: 95, rating: 4.7, num_reviews: 120, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'PN5122W Active Pen', Protocol: 'Wacom AES 1.0/2.0 & Microsoft Pen Protocol (MPP 1.51)', Pressure: '4096 Levels' }
    },
    {
      name: 'Dell Premier Rechargeable Active Pen (PN7522W, Tile Location Tracking, USB-C Fast Charge, 4096 Pressure)',
      slug: 'dell-premier-rechargeable-active-pen-pn7522w',
      description: 'Integrated Tile Bluetooth tracking so you never lose your pen, USB-C rechargeable in 20 minutes with 40 days battery life, and programmable buttons.',
      price: 99.00, discount_price: 79.00, stock: 75, rating: 4.8, num_reviews: 85, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'PN7522W', SpecialFeature: 'Built-in Tile Find My Pen Tracking', Charging: 'USB-C Rechargeable (20 mins full charge)' }
    },
    {
      name: 'Dell EcoLoop Premier Backpack 15 (Weather-Resistant OceanCycle Recycled Plastic, TSA-Friendly Flat-Lay)',
      slug: 'dell-ecoloop-premier-backpack-15',
      description: 'Executive 15.6" laptop backpack crafted from 100% recycled ocean-bound plastic with EVA foam protection, TSA checkpoint friendly fold-out, and water resistance.',
      price: 79.00, discount_price: 59.00, stock: 110, rating: 4.8, num_reviews: 195, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'EcoLoop Premier Backpack 15', Material: '100% Ocean-Bound Recycled Plastic Fabric', LaptopFit: 'Up to 15.6" Laptops' }
    },
    {
      name: 'Dell 7-in-1 USB-C Multiport Mobile Adapter (DA310, Compact Hockey Puck Design, 4K HDMI, DP, VGA, LAN)',
      slug: 'dell-7-in-1-usb-c-mobile-adapter-da310',
      description: 'Ingenious retractable cable puck with 4K HDMI, DisplayPort, VGA, Gigabit Ethernet, 2x USB-A 10Gbps, and 90W USB-C power pass-through.',
      price: 99.00, discount_price: 79.00, stock: 130, rating: 4.9, num_reviews: 320, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Dell', Model: 'DA310 Multiport Adapter', Ports: 'HDMI 2.0 (4K 60Hz), DP 1.4, VGA, Gigabit RJ45, 2x USB-A 10Gbps, 1x USB-C Pass-through (90W)', Design: 'Patented Rotating Retractable Cable' }
    }
  ];

  // Combine and assign category_id
  const allDevices = [...xps, ...alienware, ...business, ...precision, ...monitorsAndDocks];

  return allDevices.map((d) => ({
    ...d,
    category_id: categoryId
  }));
};
