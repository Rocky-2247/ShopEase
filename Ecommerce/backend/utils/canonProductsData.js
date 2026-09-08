// Comprehensive dataset of 105+ Official Canon Store Devices (EOS R Cameras, Cinema EOS, RF Lenses, PowerShot, imagePROGRAF, PIXMA & Speedlites)

export const getCanonProducts = (categoryId) => {
  // 1. Canon EOS R Full-Frame & APS-C Mirrorless Cameras - 25 SKUs
  const eosR = [
    {
      name: 'Canon EOS R1 Flagship Mirrorless Camera (Body Only, 24.2MP Stacked CMOS, 40fps, 6K RAW)',
      slug: 'canon-eos-r1-flagship-mirrorless-body',
      description: 'The pinnacle of imaging technology for photojournalists and sports photographers. 24.2MP full-frame back-illuminated stacked Dual Pixel Intelligent CMOS sensor, dual DIGIC Accelerator + DIGIC X processors, cross-type autofocus with Action Priority AI, up to 40fps electronic shutter, 6K 60p RAW in-camera video, and dual CFexpress Type B card slots.',
      price: 6299.00, discount_price: 5999.00, stock: 10, rating: 5.0, num_reviews: 48, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'
      ],
      specifications: { Brand: 'Canon', Model: 'EOS R1', Sensor: '24.2MP Full-Frame Back-Illuminated Stacked CMOS', Processor: 'DIGIC Accelerator + DIGIC X Dual Engine', Autofocus: 'Cross-Type Dual Pixel Intelligent AF with Action Priority & Eye Control', ContinuousShooting: 'Up to 40 fps Electronic Shutter / Pre-Continuous Shooting', Video: '6K 60p RAW / 4K 120p 10-bit Canon Log 2/3', MemorySlots: 'Dual CFexpress Type B Slots', Durability: 'Integrated Vertical Grip & Magnesium Weather-Sealed Body' }
    },
    {
      name: 'Canon EOS R5 Mark II Mirrorless Camera (Body Only, 45MP Stacked CMOS, Eye Control AF, 8K RAW)',
      slug: 'canon-eos-r5-mark-ii-body',
      description: 'Supreme 45MP back-illuminated stacked CMOS camera with next-generation Eye Control AF, 8K 60p RAW Light recording, 4K 120p, up to 30fps continuous burst, up to 8.5 stops In-Body Image Stabilization (IBIS), and in-camera neural network upscaling to 179MP.',
      price: 4299.00, discount_price: 3999.00, stock: 18, rating: 5.0, num_reviews: 95, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R5 Mark II', Sensor: '45MP Full-Frame Back-Illuminated Stacked CMOS', Video: '8K 60p RAW Light / 4K 120p 10-Bit 4:2:2', Stabilization: 'Up to 8.5-Stops Coordinated In-Body IS', AF: 'Accelerated Capture Dual Pixel AF with Eye Control', Burst: 'Up to 30 fps Electronic Shutter' }
    },
    {
      name: 'Canon EOS R5 Mark II with RF 24-105mm f/4L IS USM Lens Kit',
      slug: 'canon-eos-r5-mark-ii-24-105-kit',
      description: 'Professional cinema and stills kit combining the 45MP EOS R5 Mark II with the legendary weather-sealed RF 24-105mm f/4L IS USM zoom lens.',
      price: 5399.00, discount_price: 4999.00, stock: 12, rating: 5.0, num_reviews: 42, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R5 Mark II Kit', Lens: 'Canon RF 24-105mm f/4L IS USM', Sensor: '45MP Stacked Full-Frame' }
    },
    {
      name: 'Canon EOS R5 Mirrorless Camera (Body Only, 45MP, 8K 30p RAW, IBIS)',
      slug: 'canon-eos-r5-body',
      description: 'The revolutionary benchmark 45MP full-frame mirrorless camera with 8K 30p RAW recording, Dual Pixel CMOS AF II with animal eye tracking, 8-stop image stabilization, and magnesium alloy build.',
      price: 3399.00, discount_price: 2999.00, stock: 25, rating: 4.9, num_reviews: 310, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R5', Sensor: '45MP Full-Frame CMOS', Video: '8K 30p RAW / 4K 120p 10-Bit', Stabilization: '8.0 Stops In-Body IS', Slots: '1x CFexpress Type B + 1x SD UHS-II' }
    },
    {
      name: 'Canon EOS R5 with RF 24-105mm f/4L IS USM Lens Kit',
      slug: 'canon-eos-r5-24-105mm-kit',
      description: 'Flagship all-round package featuring 45MP EOS R5 body and the versatile L-series RF 24-105mm f/4L IS USM standard zoom.',
      price: 4399.00, discount_price: 3899.00, stock: 20, rating: 4.9, num_reviews: 180, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R5 Kit', Lens: 'RF 24-105mm f/4L IS USM', Sensor: '45MP Full-Frame' }
    },
    {
      name: 'Canon EOS R6 Mark II Mirrorless Camera (Body Only, 24.2MP, 40fps, 6K Oversampled 4K 60p)',
      slug: 'canon-eos-r6-mark-ii-body',
      description: 'Lightning-fast hybrid all-rounder. 24.2MP full-frame CMOS sensor, blisteringly fast 40fps electronic shutter burst, 6K oversampled uncropped 4K 60p video, 8.0-stop in-body stabilization, and AI subject detection for aircraft, horses, trains, and vehicles.',
      price: 2499.00, discount_price: 2199.00, stock: 40, rating: 4.9, num_reviews: 260, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R6 Mark II', Sensor: '24.2MP Full-Frame CMOS', ContinuousBurst: 'Up to 40 fps Electronic / 12 fps Mechanical', Video: '6K Oversampled 4K 60p Uncropped & FHD 180p Slow-Mo', InBodyIS: 'Up to 8.0 Stops Coordinated IS', DualSlots: 'Dual SD UHS-II Card Slots' }
    },
    {
      name: 'Canon EOS R6 Mark II with RF 24-105mm f/4L IS USM Lens Kit',
      slug: 'canon-eos-r6-mark-ii-24-105-l-kit',
      description: 'Wedding and event creator kit pairing the 40fps EOS R6 Mark II with the pro weather-sealed L-series zoom lens.',
      price: 3599.00, discount_price: 3199.00, stock: 25, rating: 4.9, num_reviews: 140, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R6 Mark II Kit', Lens: 'RF 24-105mm f/4L IS USM', Sensor: '24.2MP Full-Frame' }
    },
    {
      name: 'Canon EOS R6 Mark II with RF 24-105mm f/4-7.1 IS STM Lens Kit',
      slug: 'canon-eos-r6-mark-ii-24-105-stm-kit',
      description: 'Versatile starter bundle with compact and lightweight RF 24-105mm IS STM walkaround lens.',
      price: 2799.00, discount_price: 2499.00, stock: 35, rating: 4.8, num_reviews: 115, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R6 Mark II STM Kit', Lens: 'RF 24-105mm f/4-7.1 IS STM' }
    },
    {
      name: 'Canon EOS R3 Pro Sports & Wildlife Mirrorless Camera (Body Only, 24.1MP Stacked BSI, Integrated Grip, 30fps)',
      slug: 'canon-eos-r3-pro-sports-body',
      description: 'The master of speed and endurance. Integrated dual-battery vertical grip, 24.1MP back-illuminated stacked CMOS, revolutionary Eye Control AF, 30fps RAW burst, 6K 60p RAW internal video, and full weather sealing.',
      price: 5499.00, discount_price: 4999.00, stock: 8, rating: 5.0, num_reviews: 62, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R3', Sensor: '24.1MP Full-Frame Stacked BSI CMOS', Autofocus: 'Eye Control AF + Dual Pixel CMOS AF II', Burst: '30 fps Blackout-Free Electronic Shutter', Video: '6K 60p RAW Internal Recording', Build: 'Rugged Magnesium Body with Integrated Grip' }
    },
    {
      name: 'Canon EOS R8 Ultra-Compact Full-Frame Mirrorless Camera (Body Only, 24.2MP, 4K 60p, 461g)',
      slug: 'canon-eos-r8-full-frame-body',
      description: 'Worlds lightest full-frame mirrorless camera at just 461g, packing the same flagship 24.2MP sensor and Dual Pixel AF II system as the R6 Mark II with uncropped 4K 60p 10-bit Canon Log 3.',
      price: 1499.00, discount_price: 1299.00, stock: 55, rating: 4.8, num_reviews: 195, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R8', Sensor: '24.2MP Full-Frame CMOS', Weight: '461 g (Ultra-Lightweight Body)', Video: '6K Oversampled 4K 60p Uncropped with Canon Log 3', Autofocus: 'Dual Pixel AF II with Deep Learning Subject Detect' }
    },
    {
      name: 'Canon EOS R8 with RF 24-50mm f/4.5-6.3 IS STM Lens Kit',
      slug: 'canon-eos-r8-24-50mm-kit',
      description: 'Ultra-portable travel kit pairing the featherweight R8 full-frame body with the retractable RF 24-50mm wide-to-standard zoom.',
      price: 1699.00, discount_price: 1499.00, stock: 45, rating: 4.8, num_reviews: 120, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R8 Kit', Lens: 'RF 24-50mm f/4.5-6.3 IS STM', Sensor: '24.2MP Full-Frame' }
    },
    {
      name: 'Canon EOS RP Entry Full-Frame Mirrorless Camera (Body Only, 26.2MP, Vari-Angle Touch)',
      slug: 'canon-eos-rp-body',
      description: 'Exceptional full-frame value in a 485g body with 26.2MP sensor, Dual Pixel CMOS AF, flip-out Vari-angle touch LCD, and 4K video.',
      price: 999.00, discount_price: 899.00, stock: 70, rating: 4.7, num_reviews: 380, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS RP', Sensor: '26.2MP Full-Frame CMOS', Display: '3.0" Vari-Angle Touchscreen', Weight: '485 g' }
    },
    {
      name: 'Canon EOS RP with RF 24-105mm f/4-7.1 IS STM Lens Kit',
      slug: 'canon-eos-rp-24-105-kit',
      description: 'The ultimate accessible full-frame starter bundle with 24-105mm image-stabilized versatile lens.',
      price: 1299.00, discount_price: 1149.00, stock: 50, rating: 4.7, num_reviews: 210, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS RP Kit', Lens: 'RF 24-105mm f/4-7.1 IS STM', Sensor: '26.2MP Full-Frame' }
    },
    {
      name: 'Canon EOS R7 Flagship APS-C Mirrorless Camera (Body Only, 32.5MP, 30fps, 8-Stop IBIS, Dual SD)',
      slug: 'canon-eos-r7-body',
      description: 'The ultimate wildlife and action APS-C mirrorless camera with 32.5MP high-resolution sensor, 1.6x crop reach advantage, 30fps electronic shutter, 8.0-stop in-body IS, and 4K 60p fine 7K oversampled video.',
      price: 1499.00, discount_price: 1349.00, stock: 45, rating: 4.9, num_reviews: 230, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R7', Sensor: '32.5MP APS-C CMOS (1.6x Telephoto Multiplier)', ContinuousShooting: '30 fps Electronic / 15 fps Mechanical', InBodyIS: 'Up to 8.0 Stops In-Body Image Stabilization', Video: '7K Oversampled 4K 60p / 4K 30p Fine', Slots: 'Dual SD UHS-II Card Slots' }
    },
    {
      name: 'Canon EOS R7 with RF-S 18-150mm f/3.5-6.3 IS STM All-in-One Lens Kit',
      slug: 'canon-eos-r7-18-150mm-kit',
      description: 'Superb travel & safari zoom kit covering 29-240mm equivalent focal range with 32.5MP resolution and 8-stop stabilization.',
      price: 1899.00, discount_price: 1699.00, stock: 35, rating: 4.9, num_reviews: 145, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R7 Kit', Lens: 'RF-S 18-150mm f/3.5-6.3 IS STM (8.3x Zoom)', Sensor: '32.5MP APS-C' }
    },
    {
      name: 'Canon EOS R10 Advanced Content Creator Mirrorless Camera (Body Only, 24.2MP, 23fps, 4K 60p)',
      slug: 'canon-eos-r10-body',
      description: 'Compact creative powerhouse with 24.2MP APS-C sensor, 23fps electronic burst, 6K oversampled 4K 30p, Deep Learning autofocus, and built-in pop-up flash.',
      price: 979.00, discount_price: 849.00, stock: 60, rating: 4.8, num_reviews: 175, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R10', Sensor: '24.2MP APS-C CMOS', Burst: 'Up to 23 fps Electronic / 15 fps Mechanical', Video: '4K 60p (Crop) & 4K 30p (Uncropped 6K Oversample)', Flash: 'Integrated Pop-up Flash' }
    },
    {
      name: 'Canon EOS R10 with RF-S 18-45mm f/4.5-6.3 IS STM Lens Kit',
      slug: 'canon-eos-r10-18-45mm-kit',
      description: 'Everyday lightweight zoom kit ideal for travel, family, and YouTube creator content.',
      price: 1099.00, discount_price: 949.00, stock: 50, rating: 4.8, num_reviews: 130, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R10 Kit', Lens: 'RF-S 18-45mm f/4.5-6.3 IS STM' }
    },
    {
      name: 'Canon EOS R10 with RF-S 18-150mm f/3.5-6.3 IS STM Kit',
      slug: 'canon-eos-r10-18-150mm-kit',
      description: 'Extended reach 8.3x zoom kit with 24.2MP high-speed shooting and advanced AI autofocus.',
      price: 1379.00, discount_price: 1199.00, stock: 40, rating: 4.8, num_reviews: 85, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R10 Kit', Lens: 'RF-S 18-150mm IS STM' }
    },
    {
      name: 'Canon EOS R50 Content Creator Vlogging Camera (Body Only, Black, 24.2MP, Vertical Video)',
      slug: 'canon-eos-r50-body-black',
      description: 'Designed specifically for content creators and vloggers. 24.2MP sensor, Movie for Close-Up Demos mode, vertical video support, USB-C plug-and-play UVC streaming webcam, and flip-out touchscreen.',
      price: 679.00, discount_price: 579.00, stock: 85, rating: 4.8, num_reviews: 320, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R50', Sensor: '24.2MP APS-C CMOS', Features: 'Movie for Close-Up Demos & Vertical Video Recording', Webcam: 'Direct USB-C Plug-and-Play Streaming (UVC/UAC)', Weight: '375 g' }
    },
    {
      name: 'Canon EOS R50 with RF-S 18-45mm f/4.5-6.3 IS STM Lens Kit (White Edition)',
      slug: 'canon-eos-r50-white-kit',
      description: 'Chic White Edition EOS R50 with matching silver/white compact zoom lens, perfect for beauty vloggers and travel creators.',
      price: 799.00, discount_price: 699.00, stock: 65, rating: 4.8, num_reviews: 210, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R50 White Kit', Color: 'Pure White with Silver Trim', Lens: 'RF-S 18-45mm IS STM' }
    },
    {
      name: 'Canon EOS R50 Creator Kit (with Stereo Mic DM-E100 & Tripod Grip HG-100TBR)',
      slug: 'canon-eos-r50-creator-kit',
      description: 'Complete all-in-one vlogging kit with EOS R50, 18-45mm lens, directional stereo microphone, and Bluetooth wireless tripod grip.',
      price: 949.00, discount_price: 829.00, stock: 45, rating: 4.9, num_reviews: 160, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R50 Creator Kit', Includes: 'Camera, 18-45mm Lens, DM-E100 Mic, HG-100TBR Grip' }
    },
    {
      name: 'Canon EOS R100 Compact Entry Mirrorless Camera with RF-S 18-45mm IS STM Lens',
      slug: 'canon-eos-r100-18-45mm-kit',
      description: 'The most affordable entry point to the EOS R ecosystem with 24.1MP APS-C sensor, Eye Detection AF, Full HD 60p, and Creative Assist presets.',
      price: 479.00, discount_price: 399.00, stock: 95, rating: 4.6, num_reviews: 290, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R100', Sensor: '24.1MP APS-C CMOS', Autofocus: 'Dual Pixel CMOS AF with Eye Detect', Weight: '356 g (Super Compact)' }
    },
    {
      name: 'Canon EOS R100 Double Zoom Lens Kit (RF-S 18-45mm + RF-S 55-210mm IS STM)',
      slug: 'canon-eos-r100-double-zoom-kit',
      description: 'Two-lens complete telephoto package offering seamless 29mm to 336mm equivalent zoom coverage.',
      price: 699.00, discount_price: 579.00, stock: 60, rating: 4.7, num_reviews: 140, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R100 Dual Lens Kit', Lenses: 'RF-S 18-45mm IS STM + RF-S 55-210mm IS STM' }
    },
    {
      name: 'Canon EOS Ra Astrophotography Full-Frame Mirrorless Camera (30.3MP, 4x H-Alpha IR Filter)',
      slug: 'canon-eos-ra-astrophotography',
      description: 'Specialized deep-sky astrophotography camera with modified infrared-cut filter providing 4x higher transmission of hydrogen-alpha (H-alpha) 656nm wavelengths and 30x EVF magnification.',
      price: 2499.00, discount_price: 2249.00, stock: 12, rating: 4.9, num_reviews: 35, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS Ra', Sensor: '30.3MP Full-Frame with Custom Astrophotography Optical Filter', Features: '4x H-Alpha (656nm) Sensitivity & 30x Magnification' }
    },
    {
      name: 'Canon EOS R5 C Full-Frame Cinema & Photo Hybrid Camera (8K 60p RAW, Active Cooling Fan)',
      slug: 'canon-eos-r5-c-cinema-hybrid',
      description: 'True Cinema EOS and EOS R hybrid. Built-in thermal active cooling fan for non-stop 8K 60p Cinema RAW Light recording, 45MP high-resolution photo mode, dual operating systems, and Timecode terminal.',
      price: 4499.00, discount_price: 3999.00, stock: 15, rating: 5.0, num_reviews: 74, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'EOS R5 C', Cooling: 'Active Internal Exhaust Fan for Unlimited 8K Recording', Video: '8K 60p Cinema RAW Light / 4K 120p 4:2:2 10-Bit', Stills: '45MP High-Resolution 20 fps Burst', DualOS: 'Dedicated Cinema EOS & Photo OS Switch' }
    }
  ];

  // 2. Canon Cinema EOS & Professional Video Camcorders - 12 SKUs
  const cinema = [
    {
      name: 'Canon Cinema EOS C400 6K Full-Frame Cinema Camera (RF Mount, BSI Stacked CMOS, Triple-Base ISO)',
      slug: 'canon-cinema-eos-c400-6k',
      description: 'Next-generation RF-mount cinema production powerhouse. 6K full-frame back-illuminated stacked CMOS sensor, Triple-Base ISO (800 / 3200 / 12800), Dual Pixel AF II, 12G-SDI, Mini XLR, and integrated mechanical ND filters.',
      price: 7999.00, discount_price: 7499.00, stock: 6, rating: 5.0, num_reviews: 24, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'Cinema EOS C400', Sensor: '6K Full-Frame Back-Illuminated Stacked CMOS', ISO: 'Triple Base ISO 800 / 3200 / 12800', Outputs: '12G-SDI, HDMI, Dual Mini-XLR, Timecode, Genlock', Filters: 'Motorized Clear, 2, 4, 6, 8, 10 Stops Optical ND' }
    },
    {
      name: 'Canon Cinema EOS C300 Mark III Digital Cinema Camera (EF Mount, 4K Super 35 DGO, 16+ Stops)',
      slug: 'canon-cinema-eos-c300-mark-iii',
      description: 'Industry broadcast workhorse featuring 4K Super 35mm Dual Gain Output (DGO) sensor with 16+ stops dynamic range, 4K 120p, Cinema RAW Light, and modular configuration.',
      price: 8999.00, discount_price: 7999.00, stock: 5, rating: 5.0, num_reviews: 38, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'Cinema EOS C300 Mark III', Sensor: '4K Super 35mm Dual Gain Output (DGO) Sensor', DynamicRange: '16+ Stops High Dynamic Range in Canon Log 2', FrameRates: '4K 120 fps / 2K 180 fps High Frame Rate' }
    },
    {
      name: 'Canon Cinema EOS C70 4K Super 35mm RF-Mount Cinema Camera (DGO, 4K 120p, Built-in ND)',
      slug: 'canon-cinema-eos-c70',
      description: 'Compact handheld cinema revolution with Super 35mm DGO sensor, 16+ stops dynamic range, 4K 120p, built-in motorized ND filters, dual SD slots, and dual mini XLR inputs.',
      price: 5499.00, discount_price: 4999.00, stock: 15, rating: 5.0, num_reviews: 95, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'Cinema EOS C70', Sensor: 'Super 35mm Dual Gain Output (DGO) CMOS', Mount: 'Native Canon RF Lens Mount', Recording: '4K 120p 10-bit 4:2:2 XF-AVC / 4K 60p RAW Light' }
    },
    {
      name: 'Canon Cinema EOS C500 Mark II 5.9K Full-Frame Cinema Camera (Interchangeable Mounts)',
      slug: 'canon-cinema-eos-c500-mark-ii',
      description: 'Cinema blockbuster camera featuring 5.9K Full-Frame sensor, user-interchangeable EF/PL/Locking mounts, 12-bit Cinema RAW Light, and dual CFexpress slots.',
      price: 15999.00, discount_price: 14499.00, stock: 3, rating: 5.0, num_reviews: 18, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'Cinema EOS C500 Mark II', Sensor: '5.9K Full-Frame CMOS (38.1 x 20.1 mm)', RAW: '5.9K 60p / 4K 120p Internal Cinema RAW Light' }
    },
    {
      name: 'Canon Cinema EOS C80 6K Full-Frame Cinema Camera (RF Mount, BSI Stacked CMOS, 12G-SDI)',
      slug: 'canon-cinema-eos-c80-6k',
      description: 'Handheld 6K full-frame cinema camera with BSI stacked CMOS sensor, 12G-SDI output, Dual Pixel AF II, and motorized ND filters.',
      price: 5499.00, discount_price: 4999.00, stock: 10, rating: 5.0, num_reviews: 28, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'Cinema EOS C80', Sensor: '6K Full-Frame BSI Stacked CMOS', Video: '6K 30p RAW / 4K 120p', Output: '12G-SDI & HDMI' }
    },
    {
      name: 'Canon XF605 4K 1" CMOS UHD Professional Camcorder (15x L-Series Zoom, 4K 60p, 12G-SDI)',
      slug: 'canon-xf605-4k-pro-camcorder',
      description: 'Broadcast ENG camcorder with 1.0" Type 4K CMOS sensor, 15x Optical L-Series zoom with independent 3-ring control, Dual Pixel AF with Eye Tracking, 12G-SDI, and live IP streaming.',
      price: 4499.00, discount_price: 3999.00, stock: 12, rating: 4.9, num_reviews: 45, is_featured: true, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'XF605', Sensor: '1.0-inch 4K UHD CMOS Sensor', Lens: '15x Optical L-Series Zoom (25.5-382.5mm equivalent)', Broadcast: '12G-SDI, Ethernet IP Streaming, Canon Multi-Camera Protocol' }
    },
    {
      name: 'Canon XA75 4K 1" CMOS Compact Professional Camcorder (15x Zoom, Dual Pixel AF, 3G-SDI)',
      slug: 'canon-xa75-4k-pro-camcorder',
      description: 'Compact 4K UHD pro camcorder with 1.0-inch CMOS sensor, 15x optical zoom, Dual Pixel CMOS AF, 3G-SDI output, and detachable XLR audio handle.',
      price: 2999.00, discount_price: 2699.00, stock: 18, rating: 4.8, num_reviews: 55, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'XA75', Sensor: '1.0" 4K CMOS Sensor', Lens: '15x Optical Zoom', Audio: 'Dual XLR Audio Inputs with +48V Phantom Power' }
    },
    {
      name: 'Canon XA70 4K 1" CMOS UHD Camcorder (15x Zoom, 5-Axis Optical IS, Dual SD)',
      slug: 'canon-xa70-4k-uhd-camcorder',
      description: 'Documentary and corporate camcorder with 1" CMOS sensor, 5-axis dynamic stabilization, infrared night capture, and dual SD relay recording.',
      price: 2499.00, discount_price: 2249.00, stock: 20, rating: 4.8, num_reviews: 40, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'XA70', Sensor: '1.0" 4K CMOS', Zoom: '15x Optical Zoom (25.5-382.5mm)' }
    },
    {
      name: 'Canon XA65 4K Compact Professional Camcorder (20x Optical Zoom, 3G-SDI, Dual XLR)',
      slug: 'canon-xa65-4k-compact-camcorder',
      description: 'Lightweight handheld news & court reporting camcorder with 20x optical zoom lens, 3G-SDI output, and dual XLR audio.',
      price: 2299.00, discount_price: 2049.00, stock: 22, rating: 4.7, num_reviews: 48, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'XA65', Sensor: '1/2.84" 4K UHD CMOS', Lens: '20x Optical Zoom (29.3-601mm equivalent)', VideoOut: '3G-SDI + HDMI' }
    },
    {
      name: 'Canon XA60 4K UHD Pro Camcorder (20x Zoom, USB-C UVC Live Streaming)',
      slug: 'canon-xa60-4k-uhd-camcorder',
      description: 'Budget professional camcorder with 20x optical zoom, USB-C UVC direct streaming to PC/Mac, and 5-axis dynamic stabilization.',
      price: 1799.00, discount_price: 1599.00, stock: 30, rating: 4.7, num_reviews: 65, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'XA60', Sensor: '1/2.84" 4K CMOS', Streaming: 'USB Type-C UVC Plug-and-Play Streaming' }
    },
    {
      name: 'Canon CR-N500 4K PTZ Remote Camera (1" CMOS, 15x Optical Zoom, NDI|HX, FreeD, 12G-SDI)',
      slug: 'canon-cr-n500-4k-ptz-camera',
      description: 'Flagship studio broadcast PTZ camera with 1" 4K CMOS sensor, Dual Pixel CMOS AF, NDI|HX, FreeD virtual studio tracking, and 12G-SDI.',
      price: 5399.00, discount_price: 4899.00, stock: 8, rating: 4.9, num_reviews: 20, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'CR-N500', Sensor: '1.0" 4K CMOS with Dual Pixel AF', Zoom: '15x Optical Zoom', Protocols: 'NDI|HX, SRT, RTMP/RTMPS, FreeD, Canon XC' }
    },
    {
      name: 'Canon CR-N300 4K PTZ Remote Streaming Camera (1/2.3" CMOS, 20x Zoom, HDMI/SDI/IP)',
      slug: 'canon-cr-n300-4k-ptz-camera',
      description: 'House of worship and education broadcast 4K PTZ camera with 20x optical zoom, smooth pan/tilt, and NDI|HX streaming.',
      price: 2699.00, discount_price: 2399.00, stock: 15, rating: 4.8, num_reviews: 32, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'CR-N300', Sensor: '1/2.3" 4K CMOS', Zoom: '20x Optical Zoom', Connectivity: 'HDMI, 3G-SDI, IP (PoE+), USB' }
    }
  ];

  // 3. Canon RF & RF-S Professional Camera Lenses - 30 SKUs
  const lenses = [
    {
      name: 'Canon RF 28-70mm f/2L USM Zoom Lens (Constant f/2, L-Series Red Ring Optical Masterpiece)',
      slug: 'canon-rf-28-70mm-f2l-usm',
      description: 'Worlds first constant f/2 standard zoom lens. Replaces four fast prime lenses (28mm, 35mm, 50mm, 70mm f/2) with stunning corner-to-corner resolution, Subwavelength Structure Coating, configurable Control Ring, and weather sealing.',
      price: 3099.00, discount_price: 2799.00, stock: 18, rating: 5.0, num_reviews: 165, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 28-70mm f/2L USM', Aperture: 'Constant f/2 Maximum Aperture (9 Rounded Blades)', Optics: '4 Aspherical, 2 UD, 1 Super UD Elements', Motor: 'Ring-Type Ultrasonic Motor (USM)', FilterThread: '95 mm' }
    },
    {
      name: 'Canon RF 24-70mm f/2.8L IS USM Standard Zoom Lens (5-Stop Optical IS, Nano USM)',
      slug: 'canon-rf-24-70mm-f2-8l-is-usm',
      description: 'The definitive professional trinity standard zoom. Constant f/2.8 aperture, 5-stop optical Image Stabilizer, dual Nano USM motors for silent video AF, and fluorine coatings.',
      price: 2399.00, discount_price: 2199.00, stock: 35, rating: 5.0, num_reviews: 280, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 24-70mm f/2.8L IS USM', Aperture: 'Constant f/2.8', Stabilization: '5.0 Stops Optical IS (8 Stops with IBIS)', Autofocus: 'Nano USM Motor' }
    },
    {
      name: 'Canon RF 70-200mm f/2.8L IS USM Telephoto Zoom Lens (Compact Retracting Design, 5-Stop IS)',
      slug: 'canon-rf-70-200mm-f2-8l-is-usm',
      description: 'Game-changing compact design 27% shorter and 28% lighter than EF predecessor. Constant f/2.8, dual Nano USM motors, 5-stop IS, and removable tripod collar.',
      price: 2799.00, discount_price: 2499.00, stock: 30, rating: 5.0, num_reviews: 240, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 70-200mm f/2.8L IS USM', Weight: '1070 g (Ultra-Lightweight 70-200)', Aperture: 'Constant f/2.8', Stabilization: '5-Stop IS' }
    },
    {
      name: 'Canon RF 70-200mm f/4L IS USM Ultra-Compact Telephoto Zoom Lens (Only 695g, 5-Stop IS)',
      slug: 'canon-rf-70-200mm-f4l-is-usm',
      description: 'Worlds shortest and lightest 70-200mm f/4 lens at only 695g. 5-stop optical IS, dual Nano USM, and L-series weather sealing.',
      price: 1599.00, discount_price: 1399.00, stock: 40, rating: 4.9, num_reviews: 165, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 70-200mm f/4L IS USM', Weight: '695 g', Length: '119 mm', Stabilization: '5-Stop Optical IS' }
    },
    {
      name: 'Canon RF 15-35mm f/2.8L IS USM Ultra-Wide Angle Zoom Lens (Constant f/2.8, 5-Stop IS)',
      slug: 'canon-rf-15-35mm-f2-8l-is-usm',
      description: 'Trinity ultra-wide landscape and architectural zoom. Constant f/2.8 aperture, 5-stop image stabilization, 3 aspherical elements, and front 82mm filter thread.',
      price: 2399.00, discount_price: 2199.00, stock: 25, rating: 4.9, num_reviews: 195, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 15-35mm f/2.8L IS USM', AngleOfView: '110° to 63° Ultra-Wide', FilterThread: '82 mm', Stabilization: '5.0 Stops' }
    },
    {
      name: 'Canon RF 10-20mm f/4L IS STM Ultra-Wide Zoom Lens (Widest Full-Frame AF Zoom, 570g)',
      slug: 'canon-rf-10-20mm-f4l-is-stm',
      description: 'Worlds widest full-frame autofocus zoom lens starting at an astonishing 10mm (130° angle of view) with peripheral control image stabilization and weighing just 570g.',
      price: 2299.00, discount_price: 2099.00, stock: 20, rating: 5.0, num_reviews: 88, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 10-20mm f/4L IS STM', FocalLength: '10-20mm (130° Angle of View)', Weight: '570 g', Stabilization: '5-Stop IS with Peripheral Control' }
    },
    {
      name: 'Canon RF 24-105mm f/4L IS USM Standard Zoom Lens (Nano USM, 5-Stop IS)',
      slug: 'canon-rf-24-105mm-f4l-is-usm-lens',
      description: 'The quintessential everyday professional workhorse zoom lens with constant f/4 aperture, 5-stop optical IS, and rapid Nano USM autofocus.',
      price: 1299.00, discount_price: 1149.00, stock: 50, rating: 4.8, num_reviews: 320, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 24-105mm f/4L IS USM', Aperture: 'Constant f/4', Weight: '700 g', FilterThread: '77 mm' }
    },
    {
      name: 'Canon RF 24-105mm f/2.8L IS USM Z Hybrid Cinema/Stills Lens (Constant f/2.8, Iris Ring)',
      slug: 'canon-rf-24-105mm-f2-8l-is-usm-z',
      description: 'Groundbreaking hybrid lens with constant f/2.8 across 24-105mm range, dedicated manual stepless iris ring, and optional Power Zoom Adapter support.',
      price: 2999.00, discount_price: 2799.00, stock: 15, rating: 5.0, num_reviews: 72, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 24-105mm f/2.8L IS USM Z', Aperture: 'Constant f/2.8 with Manual Iris Ring', Features: 'Supports Power Zoom Adapter PZ-E2', Stabilization: '5.5-Stop IS' }
    },
    {
      name: 'Canon RF 100-500mm f/4.5-7.1L IS USM Super-Telephoto Zoom Lens (Dual Nano USM, 5-Stop IS)',
      slug: 'canon-rf-100-500mm-f4-5-7-1l-is-usm',
      description: 'Premier wildlife and sports super-telephoto zoom lens. 100-500mm reach, 5-stop optical IS, 1 Super UD and 6 UD elements, and heat shield white barrel.',
      price: 2899.00, discount_price: 2599.00, stock: 25, rating: 5.0, num_reviews: 190, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 100-500mm f/4.5-7.1L IS USM', FocalRange: '100-500mm (Extendable with RF 1.4x/2.0x)', Stabilization: '5.0-Stop Optical IS', Weight: '1370 g' }
    },
    {
      name: 'Canon RF 200-800mm f/6.3-9 IS USM Super-Telephoto Zoom Lens (800mm Reach, 5.5-Stop IS)',
      slug: 'canon-rf-200-800mm-f6-3-9-is-usm',
      description: 'Unprecedented 800mm handheld zoom reach for birding, airshows, and distant wildlife with 5.5-stop optical IS and Nano USM motor.',
      price: 1899.00, discount_price: 1699.00, stock: 30, rating: 4.9, num_reviews: 145, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 200-800mm f/6.3-9 IS USM', FocalLength: '200-800mm (Up to 1600mm with RF 2x Extender)', Stabilization: '5.5-Stop IS' }
    },
    {
      name: 'Canon RF 50mm f/1.2L USM Prime Lens (10-Blade Circular Aperture, Weather-Sealed)',
      slug: 'canon-rf-50mm-f1-2l-usm',
      description: 'The standard prime redefined. Supreme optical clarity wide open at f/1.2, breathtaking subject separation, Ring-Type USM, and three aspherical elements.',
      price: 2299.00, discount_price: 2099.00, stock: 25, rating: 5.0, num_reviews: 215, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 50mm f/1.2L USM', Aperture: 'Ultra-Fast f/1.2 Maximum Aperture', Blades: '10-Blade Circular Aperture' }
    },
    {
      name: 'Canon RF 85mm f/1.2L USM Portrait Prime Lens (Blue Spectrum Refractive BR Optics)',
      slug: 'canon-rf-85mm-f1-2l-usm',
      description: 'The reigning king of portrait photography. Blue Spectrum Refractive (BR) optics virtually eliminate chromatic aberration at f/1.2 with otherworldly bokeh.',
      price: 2799.00, discount_price: 2599.00, stock: 20, rating: 5.0, num_reviews: 185, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 85mm f/1.2L USM', Optics: 'Blue Spectrum Refractive (BR) Optical Element', Aperture: 'f/1.2 Ultra-Fast' }
    },
    {
      name: 'Canon RF 85mm f/1.2L USM DS Portrait Lens (Defocus Smoothing Coating)',
      slug: 'canon-rf-85mm-f1-2l-usm-ds',
      description: 'Features specialized Defocus Smoothing (DS) apodization coating on internal glass elements for creamy, feather-soft out-of-focus background rendering.',
      price: 3099.00, discount_price: 2899.00, stock: 12, rating: 5.0, num_reviews: 65, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 85mm f/1.2L USM DS', Coating: 'Defocus Smoothing (DS) Coating for Creamy Bokeh' }
    },
    {
      name: 'Canon RF 135mm f/1.8L IS USM Medium Telephoto Portrait Prime (5.5-Stop IS, Nano USM)',
      slug: 'canon-rf-135mm-f1-8l-is-usm',
      description: 'Legendary portrait and indoor sports prime with f/1.8 speed, 5.5-stop optical IS, dual custom function buttons, and 3 UD elements.',
      price: 2099.00, discount_price: 1899.00, stock: 20, rating: 5.0, num_reviews: 110, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 135mm f/1.8L IS USM', Aperture: 'f/1.8 Maximum Aperture', Stabilization: '5.5-Stop Optical IS (8.0 with IBIS)' }
    },
    {
      name: 'Canon RF 35mm f/1.4L VCM Hybrid Prime Lens (Voice Coil Motor + Nano USM, Iris Ring)',
      slug: 'canon-rf-35mm-f1-4l-vcm',
      description: 'Hybrid photo/video master with Voice Coil Motor (VCM) for high-thrust autofocus, manual iris ring, minimal focus breathing, and 555g weight.',
      price: 1499.00, discount_price: 1349.00, stock: 35, rating: 5.0, num_reviews: 95, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 35mm f/1.4L VCM', Motor: 'Voice Coil Motor (VCM) + Nano USM Dual Drive', Controls: 'Manual Stepless Iris Ring' }
    },
    {
      name: 'Canon RF 50mm f/1.8 STM Compact "Nifty Fifty" Prime Lens (Weighs only 160g)',
      slug: 'canon-rf-50mm-f1-8-stm',
      description: 'The must-have compact budget prime with bright f/1.8 aperture for low light and portrait blur, weighing a mere 160 grams with a metal mount.',
      price: 199.00, discount_price: 169.00, stock: 150, rating: 4.8, num_reviews: 580, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 50mm f/1.8 STM', Weight: '160 g', Mount: 'Metal Lens Mount', Aperture: 'f/1.8' }
    },
    {
      name: 'Canon RF 35mm f/1.8 Macro IS STM Prime Lens (0.5x Macro, 5-Stop Hybrid IS)',
      slug: 'canon-rf-35mm-f1-8-macro-is-stm',
      description: 'Versatile wide-angle street and macro prime with 1:2 half-life-size magnification, 5-stop Hybrid IS for close-up steady shooting.',
      price: 499.00, discount_price: 429.00, stock: 65, rating: 4.8, num_reviews: 290, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 35mm f/1.8 Macro IS STM', Magnification: '0.5x Macro (1:2)', Stabilization: '5.0-Stop Hybrid IS' }
    },
    {
      name: 'Canon RF 85mm f/2 Macro IS STM Portrait & Macro Lens (0.5x Macro, 5-Stop IS)',
      slug: 'canon-rf-85mm-f2-macro-is-stm',
      description: 'Lightweight portrait and macro lens with 0.5x reproduction ratio, 5-stop Hybrid IS, and beautiful subject isolation.',
      price: 599.00, discount_price: 499.00, stock: 55, rating: 4.8, num_reviews: 210, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 85mm f/2 Macro IS STM', Aperture: 'f/2 Maximum Aperture', Magnification: '0.5x Macro' }
    },
    {
      name: 'Canon RF 16mm f/2.8 STM Ultra-Wide Compact Prime Lens (108° Angle, 165g)',
      slug: 'canon-rf-16mm-f2-8-stm',
      description: 'Ultra-wide pocket lens with 108-degree field of view for vlogging, architecture, and astrophotography weighing only 165g.',
      price: 299.00, discount_price: 249.00, stock: 85, rating: 4.7, num_reviews: 240, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 16mm f/2.8 STM', FieldOfView: '108° Ultra-Wide', Weight: '165 g' }
    },
    {
      name: 'Canon RF 28mm f/2.8 STM Ultra-Slim Pancake Lens (Less than 1" Thick, 120g)',
      slug: 'canon-rf-28mm-f2-8-stm-pancake',
      description: 'Tiny pancake lens measuring just 24.7mm thick with full-frame coverage, 3 aspherical elements, and fast stepper motor.',
      price: 299.00, discount_price: 259.00, stock: 90, rating: 4.8, num_reviews: 180, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 28mm f/2.8 STM', Thickness: '24.7 mm', Weight: '120 g (Ultra-Pancake)' }
    },
    {
      name: 'Canon RF 100mm f/2.8L Macro IS USM Lens (1.4x Magnification, Spherical Aberration SA Ring)',
      slug: 'canon-rf-100mm-f2-8l-macro-is-usm',
      description: 'Worlds first 1.4x magnification medium telephoto macro lens with revolutionary Spherical Aberration (SA) control ring to customize bokeh and soft-focus effects.',
      price: 1399.00, discount_price: 1199.00, stock: 35, rating: 5.0, num_reviews: 175, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 100mm f/2.8L Macro IS USM', Magnification: '1.4x (Greater Than Life-Size)', Control: 'Spherical Aberration (SA) Control Ring', Stabilization: '5-Stop Hybrid IS' }
    },
    {
      name: 'Canon RF 600mm f/4L IS USM Super-Telephoto Prime Lens (5.5-Stop IS, Dual Power Drive AF)',
      slug: 'canon-rf-600mm-f4l-is-usm',
      description: 'The definitive pro wildlife and sports super-telephoto lens with Fluorite & Super UD elements, 5.5-stop optical IS, customizable preset focus positions, and magnesium alloy body.',
      price: 12999.00, discount_price: 11999.00, stock: 4, rating: 5.0, num_reviews: 28, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 600mm f/4L IS USM', FocalLength: '600mm (Extendable to 1200mm with RF 2x)', Optics: 'Fluorite & Super UD Elements with Air Sphere Coating' }
    },
    {
      name: 'Canon RF 800mm f/5.6L IS USM Super-Telephoto Lens (Lightweight Magnesium)',
      slug: 'canon-rf-800mm-f5-6l-is-usm',
      description: 'Ultra-telephoto prime for birding and safari with 800mm f/5.6 reach, weighing only 3140g with 4.5-stop optical IS.',
      price: 16999.00, discount_price: 15499.00, stock: 3, rating: 5.0, num_reviews: 15, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 800mm f/5.6L IS USM', FocalLength: '800mm Super-Telephoto', Stabilization: '4.5-Stop IS' }
    },
    {
      name: 'Canon RF 1200mm f/8L IS USM Super-Telephoto Lens (Longest Native AF Lens)',
      slug: 'canon-rf-1200mm-f8l-is-usm',
      description: 'The longest native full-frame autofocus lens in the world. 1200mm reach, drop-in 52mm filter holder, and L-series weather sealing.',
      price: 19999.00, discount_price: 18499.00, stock: 2, rating: 5.0, num_reviews: 10, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 1200mm f/8L IS USM', FocalLength: '1200mm Extreme Reach (Up to 2400mm with RF 2x Extender)' }
    },
    {
      name: 'Canon RF 600mm f/11 IS STM Compact Lightweight Super-Telephoto Lens (DO Optics, 930g)',
      slug: 'canon-rf-600mm-f11-is-stm',
      description: 'Handheld 600mm telephoto lens utilizing gapless Diffractive Optics (DO) to weigh only 930g with retractable barrel and 5-stop IS.',
      price: 799.00, discount_price: 699.00, stock: 45, rating: 4.7, num_reviews: 160, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 600mm f/11 IS STM', Weight: '930 g', Optics: 'Gapless Dual-Layer Diffractive Optics (DO)' }
    },
    {
      name: 'Canon RF 800mm f/11 IS STM Super-Telephoto Lens (4-Stop Optical IS, Handheld Birding, 1260g)',
      slug: 'canon-rf-800mm-f11-is-stm',
      description: 'Accessible 800mm reach for aviation and birding enthusiast photographers with compact retractable mechanism.',
      price: 999.00, discount_price: 899.00, stock: 40, rating: 4.7, num_reviews: 135, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 800mm f/11 IS STM', Weight: '1260 g', Stabilization: '4-Stop IS' }
    },
    {
      name: 'Canon RF 5.2mm f/2.8L Dual Fisheye 3D VR Lens (Stereoscopic 180° VR Capture)',
      slug: 'canon-rf-5-2mm-f2-8l-dual-fisheye-vr',
      description: 'Worlds first digital interchangeable dual fisheye lens for stereoscopic 180° 8K 3D VR content creation directly on EOS R5/R5 C for Apple Vision Pro & Meta Quest.',
      price: 1999.00, discount_price: 1799.00, stock: 15, rating: 4.9, num_reviews: 58, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF 5.2mm f/2.8L Dual Fisheye', Format: 'Stereoscopic 3D 180° VR', Compatibility: 'Canon EOS R5 / R5 C / R5 Mark II' }
    },
    {
      name: 'Canon RF-S 10-18mm f/4.5-6.3 IS STM Ultra-Wide Zoom Lens (4-Stop IS, 150g)',
      slug: 'canon-rf-s-10-18mm-f4-5-6-3-is-stm',
      description: 'Ultra-compact APS-C vlogging and landscape lens covering 16-29mm full-frame equivalent at a tiny 150 grams.',
      price: 329.00, discount_price: 289.00, stock: 75, rating: 4.8, num_reviews: 110, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF-S 10-18mm IS STM', Format: 'APS-C Ultra-Wide (16-29mm Eq.)', Weight: '150 g' }
    },
    {
      name: 'Canon RF-S 18-150mm f/3.5-6.3 IS STM All-in-One Travel Zoom Lens (8.3x Zoom, 4.5-Stop IS)',
      slug: 'canon-rf-s-18-150mm-is-stm-lens',
      description: 'The single do-it-all travel lens covering wide angle to telephoto with close-focus center macro capability.',
      price: 499.00, discount_price: 429.00, stock: 65, rating: 4.8, num_reviews: 175, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'RF-S 18-150mm IS STM', ZoomRange: '8.3x Optical Zoom', Stabilization: '4.5-Stop IS' }
    },
    {
      name: 'Canon Extender RF 2x Teleconverter (Doubles Focal Length, Weather-Sealed)',
      slug: 'canon-extender-rf-2x',
      description: 'High-precision optical teleconverter that doubles the focal length of compatible RF telephoto lenses with zero degradation in weather sealing.',
      price: 599.00, discount_price: 529.00, stock: 40, rating: 4.8, num_reviews: 95, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'Extender RF 2x', Magnification: '2.0x Focal Multiplier' }
    }
  ];

  // 4. Canon PowerShot Vlogging & Compact Cameras - 10 SKUs
  const powershot = [
    {
      name: 'Canon PowerShot V10 Pocket 4K Vlogging Camera (Black, 1" CMOS, Built-in Stand, Stereo Mic)',
      slug: 'canon-powershot-v10-black',
      description: 'Pocket-sized upright 4K vlogging studio. 1.0-inch CMOS sensor, 19mm wide lens, built-in multi-angle kickstand, omnidirectional stereo microphones, vertical video capture, and UVC USB-C plug-and-play webcam.',
      price: 429.00, discount_price: 379.00, stock: 65, rating: 4.8, num_reviews: 180, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PowerShot V10', Sensor: '1.0-inch CMOS', Lens: '19mm Wide-Angle Lens (f/2.8)', Stand: 'Built-in Multi-Angle Kickstand (Up to 30°)', Audio: 'Large Omnidirectional Stereo Microphones' }
    },
    {
      name: 'Canon PowerShot V10 Pocket 4K Vlogging Camera (Silver Vlog Starter Kit with Windscreen & Case)',
      slug: 'canon-powershot-v10-silver-starter-kit',
      description: 'Silver edition pocket vlogging kit with magnetic windscreen muffs, protective slipcase, and USB-C cable.',
      price: 469.00, discount_price: 419.00, stock: 45, rating: 4.8, num_reviews: 110, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PowerShot V10 Silver Kit', Color: 'Silver', Includes: 'Magnetic Windscreen + Travel Pouch' }
    },
    {
      name: 'Canon PowerShot G7 X Mark III Premium Compact Camera (20.1MP 1", 4K 30p, YouTube Live)',
      slug: 'canon-powershot-g7-x-mark-iii',
      description: 'The definitive creator compact. 20.1MP 1.0" Stacked CMOS sensor, 4.2x f/1.8-2.8 optical zoom, uncropped 4K 30p video, 3.5mm external mic input, and direct YouTube Live streaming.',
      price: 749.00, discount_price: 679.00, stock: 50, rating: 4.9, num_reviews: 420, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PowerShot G7 X Mark III', Sensor: '20.1MP 1.0" Stacked CMOS', Lens: '4.2x Optical Zoom (24-100mm f/1.8-2.8)', Streaming: 'Direct YouTube Live Streaming via Wi-Fi' }
    },
    {
      name: 'Canon PowerShot G5 X Mark II Enthusiast Camera (20.1MP 1", 5x Zoom 24-120mm, Pop-up OLED EVF)',
      slug: 'canon-powershot-g5-x-mark-ii',
      description: 'Premium travel camera with 5x optical zoom (24-120mm f/1.8-2.8), pop-up 2.36M-dot OLED electronic viewfinder, and 30fps RAW burst.',
      price: 899.00, discount_price: 799.00, stock: 30, rating: 4.8, num_reviews: 135, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PowerShot G5 X Mark II', Viewfinder: 'Pop-Up 0.39" OLED Electronic Viewfinder (2.36M Dots)', Zoom: '5x f/1.8-2.8 (24-120mm equivalent)' }
    },
    {
      name: 'Canon PowerShot SX740 HS Travel Superzoom Camera (20.3MP, 40x Optical Zoom 24-960mm, 4K)',
      slug: 'canon-powershot-sx740-hs',
      description: 'Pocket superzoom marvel with 40x optical zoom (24-960mm), 4K video recording, 180° flip-up selfie LCD, and built-in Wi-Fi/Bluetooth.',
      price: 429.00, discount_price: 379.00, stock: 60, rating: 4.7, num_reviews: 210, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PowerShot SX740 HS', Zoom: '40x Optical Zoom (24-960mm)', Video: '4K 30p Video' }
    },
    {
      name: 'Canon PowerShot SX70 HS Bridge Superzoom Camera (65x Optical Zoom 21-1365mm, 4K, OLED EVF)',
      slug: 'canon-powershot-sx70-hs',
      description: 'DSLR-styled bridge camera with gargantuan 65x optical zoom lens (21-1365mm), 0cm macro, 4K video, and eye-level OLED viewfinder.',
      price: 599.00, discount_price: 529.00, stock: 40, rating: 4.7, num_reviews: 175, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PowerShot SX70 HS', Zoom: '65x Optical Zoom (21-1365mm)', EVF: 'OLED Electronic Viewfinder' }
    },
    {
      name: 'Canon PowerShot ZOOM Digital Monocular Telephoto Camera (100/400/800mm Instant Step-Zoom, 145g)',
      slug: 'canon-powershot-zoom-monocular',
      description: 'Pocketable 145g monocular camera that switches instantly between 100mm, 400mm optical, and 800mm digital zoom for birding and stadium sports.',
      price: 319.00, discount_price: 279.00, stock: 55, rating: 4.6, num_reviews: 140, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PowerShot ZOOM', ZoomSteps: '100mm, 400mm Optical / 800mm Digital', Weight: '145 g' }
    },
    {
      name: 'Canon PowerShot PICK AI Auto-Tracking PTZ Camera (Autonomous Subject Framing, Voice Control)',
      slug: 'canon-powershot-pick-ai-camera',
      description: 'Smart robotic camera that automatically recognizes faces, pans 360°, tilts 110°, zooms, and autonomously captures spontaneous family moments.',
      price: 499.00, discount_price: 429.00, stock: 35, rating: 4.7, num_reviews: 80, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PowerShot PICK', Autonomy: 'AI Automatic Tracking, Panning & Photo Triggering' }
    },
    {
      name: 'Canon PowerShot ELPH 360 HS Slim Digital Camera (20.2MP, 12x Zoom, Wi-Fi, Purple)',
      slug: 'canon-powershot-elph-360-hs',
      description: 'Ultra-slim pocket classic in Purple with 12x optical zoom, 20.2MP CMOS sensor, Intelligent IS, and wireless transfer to smartphones.',
      price: 379.00, discount_price: 329.00, stock: 70, rating: 4.6, num_reviews: 310, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PowerShot ELPH 360 HS', Zoom: '12x Optical Zoom (25-300mm)', Color: 'Purple' }
    },
    {
      name: 'Canon IVY CLIQ+ 2 Instant Camera & Portable Photo Printer (Ring Light Selfie Mirror, ZINK Prints)',
      slug: 'canon-ivy-cliq-plus-2-printer',
      description: 'Fun instant 2-in-1 camera and pocket printer with 2"x3" peel-and-stick ZINK prints, LED ring light mirror, and Bluetooth customization app.',
      price: 159.00, discount_price: 129.00, stock: 90, rating: 4.7, num_reviews: 240, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'IVY CLIQ+ 2', Technology: 'ZINK Zero Ink 2x3" Sticky-Backed Prints' }
    }
  ];

  // 5. Canon imagePROGRAF & PIXMA Professional & Home Printers, Scanners & Accessories - 28 SKUs
  const printersAndAccessories = [
    {
      name: 'Canon imagePROGRAF PRO-1000 17" Professional Photo Inkjet Printer (12 LUCIA PRO Pigment Inks)',
      slug: 'canon-imageprograf-pro-1000-printer',
      description: 'The gallery standard fine art printer. 12-color LUCIA PRO pigment ink system with Chroma Optimizer, vacuum air feeding system for flat paper transport, borderless prints up to 17" wide / A2, and archival print longevity exceeding 200 years.',
      price: 1299.00, discount_price: 1149.00, stock: 15, rating: 5.0, num_reviews: 140, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'imagePROGRAF PRO-1000', Inks: '12-Color LUCIA PRO Pigment Inks (80ml Tanks)', MaxPrintWidth: '17 Inches (A2 / 432mm) Borderless', PaperFeed: 'Air Feeding System with Skew Correction' }
    },
    {
      name: 'Canon imagePROGRAF PRO-300 13" A3+ Professional Photo Printer (10 LUCIA PRO Inks, Matte Black High-Density)',
      slug: 'canon-imageprograf-pro-300-printer',
      description: 'Compact 13" wide fine art desktop printer with 10 pigment inks, high-density matte black for deeper D-Max on fine art papers, 3.0" color LCD, and custom media profiles.',
      price: 899.00, discount_price: 799.00, stock: 25, rating: 4.9, num_reviews: 180, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'imagePROGRAF PRO-300', Inks: '10-Color LUCIA PRO Pigment System', MaxWidth: '13 Inches (A3+ / 330mm)' }
    },
    {
      name: 'Canon imagePROGRAF PRO-2100 24" Large Format Fine Art & Photo Plotter (12-Color Pigment, 500GB HDD)',
      slug: 'canon-imageprograf-pro-2100-plotter',
      description: 'Commercial 24" large format roll printer for photo studios and art galleries with 500GB encrypted hard drive and intelligent roll paper loading.',
      price: 2995.00, discount_price: 2695.00, stock: 6, rating: 5.0, num_reviews: 28, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'imagePROGRAF PRO-2100', RollWidth: '24 Inches Roll & Cut Sheet', Inks: '12-Color LUCIA PRO (Up to 700ml Tanks)' }
    },
    {
      name: 'Canon PIXMA PRO-200 13" A3+ Wireless Professional Dye-Ink Photo Printer (8 Colors, Glossy Master)',
      slug: 'canon-pixma-pro-200-printer',
      description: 'The champion of glossy photo printing with 8-color dye ink system for rich vibrant colors, 3.0" LCD display, and fast 90-second A3+ print speeds.',
      price: 599.00, discount_price: 529.00, stock: 35, rating: 4.9, num_reviews: 210, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PIXMA PRO-200', Inks: '8-Color ChromaLife100+ Dye Inks', Width: '13" (A3+)' }
    },
    {
      name: 'Canon PIXMA G620 MegaTank All-in-One 6-Color Wireless Photo Printer (Up to 3800 4x6" Photos)',
      slug: 'canon-pixma-g620-megatank',
      description: 'Refillable 6-color dye ink tank printer delivering ultra-low photo printing costs (up to 3,800 4x6" photos from one ink bottle set) with print, scan, and copy.',
      price: 329.00, discount_price: 279.00, stock: 55, rating: 4.8, num_reviews: 310, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PIXMA G620 MegaTank', Inks: '6 Refillable Dye Ink Tanks (Includes Red & Gray)', Yield: 'Up to 3,800 4x6" Photos per Fill' }
    },
    {
      name: 'Canon PIXMA G7020 MegaTank All-in-One Office Printer (Auto Duplex, ADF, Ethernet & Wi-Fi)',
      slug: 'canon-pixma-g7020-megatank-office',
      description: 'High-volume business MegaTank all-in-one with auto 2-sided printing, 35-sheet auto document feeder, 350-sheet plain paper capacity, and fax.',
      price: 379.00, discount_price: 319.00, stock: 45, rating: 4.7, num_reviews: 240, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PIXMA G7020', Yield: 'Up to 6,000 Black / 7,700 Color Pages', ADF: '35-Sheet Auto Document Feeder' }
    },
    {
      name: 'Canon PIXMA G3270 All-in-One MegaTank Color Inkjet Printer (Low Cost-Per-Page, Wi-Fi)',
      slug: 'canon-pixma-g3270-megatank',
      description: 'Simple and reliable refillable ink tank printer for homes and students with print speeds up to 11 ipm and easy smartphone setup.',
      price: 229.00, discount_price: 189.00, stock: 80, rating: 4.7, num_reviews: 195, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PIXMA G3270', Connectivity: 'Wi-Fi & Apple AirPrint', Inks: '4 High-Yield Refillable Ink Bottles' }
    },
    {
      name: 'Canon PIXMA TR8620a All-in-One Home Office Printer (5 Individual Inks, 4.3" Touchscreen, Duplex)',
      slug: 'canon-pixma-tr8620a-home-office',
      description: 'Compact home office printer with 4.3" LCD touchscreen, 5-individual ink system, 20-sheet ADF, auto duplex, and SD card slot.',
      price: 199.00, discount_price: 159.00, stock: 65, rating: 4.7, num_reviews: 280, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PIXMA TR8620a', Display: '4.3" Color LCD Touchscreen', Inks: '5-Color Individual Ink System' }
    },
    {
      name: 'Canon PIXMA TS9520 All-in-One Crafting & Photo Printer (11"x17" Wide Format Support)',
      slug: 'canon-pixma-ts9520-crafting-printer',
      description: 'The crafters dream printer supporting 11" x 17" wide prints, booklet layout, greeting cards, multi-purpose tray for printable nail stickers, and SD card slot.',
      price: 299.00, discount_price: 249.00, stock: 40, rating: 4.8, num_reviews: 165, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PIXMA TS9520', MaxFormat: '11" x 17" (Tabloid / Ledger) Printing', SpecialFeatures: 'Cardstock, Sticker & Craft Media Support' }
    },
    {
      name: 'Canon PIXMA TS6420a Wireless All-in-One Compact Printer (OLED Status Bar, Dual Paper Feed)',
      slug: 'canon-pixma-ts6420a-printer',
      description: 'Sleek compact printer with 1.44" OLED status display, front and rear paper feeds, and automatic 2-sided printing.',
      price: 129.00, discount_price: 99.00, stock: 90, rating: 4.6, num_reviews: 210, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'PIXMA TS6420a', Display: '1.44" OLED Display & Status Bar' }
    },
    {
      name: 'Canon imageCLASS MF465dw Monochrome Laser All-in-One (Print/Scan/Copy/Fax 42 ppm, 5" Touch)',
      slug: 'canon-imageclass-mf465dw-laser',
      description: 'Heavy enterprise black & white laser all-in-one with 42 ppm print speed, 50-sheet dual-pass single-scan duplex ADF, and 900-sheet max capacity.',
      price: 499.00, discount_price: 429.00, stock: 35, rating: 4.8, num_reviews: 145, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'imageCLASS MF465dw', Speed: 'Up to 42 ppm (Letter)', ADF: 'Single-Pass 2-Sided Duplex ADF' }
    },
    {
      name: 'Canon imageCLASS LBP632Cdw Color Laser Printer (22 ppm, Auto Duplex, Wi-Fi Direct, Gigabit)',
      slug: 'canon-imageclass-lbp632cdw-color-laser',
      description: 'High-quality color laser desktop printer delivering up to 22 ppm with automatic duplexing and expandable high-yield toner cartridges.',
      price: 349.00, discount_price: 299.00, stock: 40, rating: 4.7, num_reviews: 120, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'imageCLASS LBP632Cdw', Type: 'Single Function Color Laser', Speed: '22 ppm Color & B/W' }
    },
    {
      name: 'Canon imageCLASS MF753Cdw Color All-in-One Laser (35 ppm, 50-Sheet Single-Pass Duplex ADF)',
      slug: 'canon-imageclass-mf753cdw-color-laser',
      description: 'Workgroup flagship color laser all-in-one with 35 ppm print speeds, 5.0" color touchscreen, and cloud printing support.',
      price: 649.00, discount_price: 549.00, stock: 25, rating: 4.8, num_reviews: 95, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'imageCLASS MF753Cdw', Functions: 'Print, Scan, Copy, Fax', Speed: '35 ppm Color/BW' }
    },
    {
      name: 'Canon SELPHY CP1500 Compact Wireless Photo Printer (White, 300 dpi Dye-Sublimation, 100-Year Life)',
      slug: 'canon-selphy-cp1500-white',
      description: 'Instant dye-sublimation 4x6" photo lab with water-resistant 100-year archival prints, 3.5" LCD screen, USB-C, SD card slot, and smartphone party shuffle print.',
      price: 139.00, discount_price: 119.00, stock: 110, rating: 4.9, num_reviews: 450, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'SELPHY CP1500', Technology: 'Dye-Sublimation Thermal Transfer (300 x 300 dpi)', PrintSize: 'Postcard 4" x 6", Card, Square Stickers' }
    },
    {
      name: 'Canon SELPHY Square QX10 Portable Mobile Photo Printer (Pink, 2.7" Square Stickers, Rechargeable)',
      slug: 'canon-selphy-square-qx10-pink',
      description: 'Pocket-sized square photo printer creating smudge-proof 2.7" x 2.7" peel-and-stick photos with built-in battery.',
      price: 149.00, discount_price: 129.00, stock: 85, rating: 4.8, num_reviews: 190, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'SELPHY Square QX10', Color: 'Pastel Pink', Paper: '2.7" x 2.7" Square Adhesive Paper' }
    },
    {
      name: 'Canon CanoScan LiDE 400 Slim Color Image Scanner (4800 dpi, 8-Sec Scan, USB-C Powered, Stand)',
      slug: 'canon-canoscan-lide-400-scanner',
      description: 'Sleek 1.7" ultra-slim flatbed scanner with 4800 x 4800 dpi optical resolution, 8-second rapid scanning, USB Type-C single cable power, and vertical upright stand.',
      price: 99.00, discount_price: 84.00, stock: 120, rating: 4.8, num_reviews: 340, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'CanoScan LiDE 400', OpticalResolution: '4800 x 4800 dpi', ScanSpeed: 'Approx. 8 Seconds (300 dpi A4 Color)', Power: 'USB Type-C Bus Powered' }
    },
    {
      name: 'Canon imageFORMULA R40 Office Document Scanner (40 ppm Duplex, 60-Sheet ADF, Single-Touch PDF)',
      slug: 'canon-imageformula-r40-scanner',
      description: 'Rapid 40 ppm / 80 ipm double-sided desktop document scanner with 60-sheet ADF, multi-page receipt scanning, and one-touch OCR searchable PDF.',
      price: 329.00, discount_price: 279.00, stock: 50, rating: 4.8, num_reviews: 160, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'imageFORMULA R40', ScanSpeed: '40 ppm / 80 ipm Duplex', Capacity: '60-Sheet Feeder' }
    },
    {
      name: 'Canon imageFORMULA P-215II Mobile Document Scanner (USB-Powered, 15 ppm Duplex, Card Reader)',
      slug: 'canon-imageformula-p215ii-scanner',
      description: 'Ultra-compact portable scanner powered entirely by USB with 15 ppm duplex speeds and dedicated embossed card slot.',
      price: 249.00, discount_price: 219.00, stock: 65, rating: 4.7, num_reviews: 110, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'imageFORMULA P-215II', FormFactor: 'Mobile Portable Scanner', Power: 'USB Powered' }
    },
    {
      name: 'Canon Speedlite EL-1 Flagship Radio Wireless Flash (Active Cooling, 0.9s Recycle, Li-ion)',
      slug: 'canon-speedlite-el-1-flash',
      description: 'The worlds most advanced on-camera flash. Built-in active cooling fan delivering up to 160 continuous full-power bursts, 0.9s recycle time, 1/8192 micro power control, and high-capacity LP-EL battery.',
      price: 1099.00, discount_price: 999.00, stock: 20, rating: 5.0, num_reviews: 45, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'Speedlite EL-1', GuideNumber: '60 (m @ ISO 100 200mm)', Cooling: 'Active Internal Fan Cooling (160+ Continuous Full Flashes)', PowerRange: '1/1 to 1/8192 Micro Power' }
    },
    {
      name: 'Canon Speedlite EL-5 High-Performance Multi-Function Shoe Flash (LP-EL Battery, Modeling Lamps)',
      slug: 'canon-speedlite-el-5-flash',
      description: 'High-speed wireless flash for EOS R cameras utilizing the Multi-Function Shoe, LP-EL Li-ion battery, 0.1s recycle times, and dual white LED modeling lamps.',
      price: 399.00, discount_price: 349.00, stock: 45, rating: 4.9, num_reviews: 120, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'Speedlite EL-5', GuideNumber: '60 (m @ ISO 100)', Shoe: 'Multi-Function Shoe (EOS R System Exclusive)' }
    },
    {
      name: 'Canon Speedlite 430EX III-RT Compact Radio Wireless Flash (Guide No. 43, 2.4GHz Triggering)',
      slug: 'canon-speedlite-430ex-iii-rt',
      description: 'Compact and versatile radio wireless Speedlite with guide number 43, 24-105mm auto zoom head, catchlight reflector panel, and color filter.',
      price: 299.00, discount_price: 249.00, stock: 60, rating: 4.8, num_reviews: 180, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'Speedlite 430EX III-RT', Wireless: '2.4GHz Radio Transmission + Optical Slave' }
    },
    {
      name: 'Canon Macro Twin Lite MT-26EX-RT (Dual Independent Flash Heads, High-Output LED Lamps)',
      slug: 'canon-macro-twin-lite-mt-26ex-rt',
      description: 'Professional macro, medical, and dental flash system with twin independent flash heads rotatable around lens front, high-output LED focusing lights, and radio wireless control.',
      price: 989.00, discount_price: 899.00, stock: 15, rating: 5.0, num_reviews: 32, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'Macro Twin Lite MT-26EX-RT', Heads: 'Twin Independently Positionable Flash Tubes with Removable Diffusers' }
    },
    {
      name: 'Canon Speedlite Transmitter ST-E3-RT (Version 2, Radio Wireless Control for 15 Flashes)',
      slug: 'canon-speedlite-transmitter-st-e3-rt-v2',
      description: 'Radio commander triggering up to 15 Speedlites across 5 groups up to 30 meters away with high-speed sync and wireless second-curtain sync.',
      price: 299.00, discount_price: 249.00, stock: 40, rating: 4.8, num_reviews: 65, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'ST-E3-RT (Ver. 2)', Control: 'Controls up to 15 Speedlites across 5 Groups (30m Range)' }
    },
    {
      name: 'Canon 10x42 L IS WP Waterproof Image Stabilized Binoculars (Fluorite Glass, All-Weather)',
      slug: 'canon-10x42-l-is-wp-binoculars',
      description: 'Worlds premier waterproof Image Stabilized binoculars featuring Canon L-series Fluorite lenses, dual field-flatteners, and rock-steady active vibration compensation.',
      price: 1499.00, discount_price: 1349.00, stock: 20, rating: 5.0, num_reviews: 88, is_featured: true, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: '10x42 L IS WP', Magnification: '10x with 42mm Objective Lenses', Stabilization: 'Active Optical Image Stabilizer', Waterproofing: 'JIS Grade 7 Submersible Waterproof' }
    },
    {
      name: 'Canon 12x36 IS III High-Magnification Image Stabilized Binoculars (Powered IS, Field Flattener)',
      slug: 'canon-12x36-is-iii-binoculars',
      description: 'High 12x magnification binoculars with Powered Image Stabilization for stargazing, birding, and marine observation.',
      price: 849.00, discount_price: 749.00, stock: 25, rating: 4.8, num_reviews: 70, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: '12x36 IS III', Magnification: '12x Optical Magnification', Stabilization: 'Vari-Angle Prism Optical Image Stabilizer' }
    },
    {
      name: 'Canon Tripod Grip HG-100TBR with Detachable Wireless Remote (Tabletop Tripod & Vlogging Handle)',
      slug: 'canon-tripod-grip-hg-100tbr',
      description: 'Versatile handheld shooting grip that converts into a stable tabletop tripod with detachable BR-E1 wireless Bluetooth remote control.',
      price: 129.00, discount_price: 99.00, stock: 85, rating: 4.8, num_reviews: 140, is_featured: false, is_trending: true,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'HG-100TBR', Features: 'Includes Detachable Wireless Bluetooth Remote BR-E1' }
    },
    {
      name: 'Canon Directional Stereo Microphone DM-E1D (Multi-Function Shoe Powered, Shotgun & 120° Stereo)',
      slug: 'canon-dm-e1d-stereo-microphone',
      description: 'Cable-free digital microphone powered directly by EOS R Multi-Function shoe with Shotgun (directional), 90°, and 120° stereo polar patterns.',
      price: 299.00, discount_price: 249.00, stock: 50, rating: 4.8, num_reviews: 75, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'DM-E1D', Connection: 'Multi-Function Shoe (Battery-Free & Cable-Free Digital Audio)', Patterns: 'Shotgun, 90° Stereo, 120° Stereo' }
    },
    {
      name: 'Canon Battery Grip BG-R10 for EOS R5/R6 Series (Holds 2x LP-E6NH Batteries, Vertical Controls)',
      slug: 'canon-battery-grip-bg-r10',
      description: 'Double battery endurance grip for EOS R5, R5 Mark II, R6, and R6 Mark II with vertical shutter button, multi-controller, and control dials.',
      price: 349.00, discount_price: 299.00, stock: 60, rating: 4.9, num_reviews: 110, is_featured: false, is_trending: false,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      specifications: { Brand: 'Canon', Model: 'BG-R10', Compatibility: 'Canon EOS R5, R5 C, R5 Mark II, R6, R6 Mark II', Capacity: 'Holds Two LP-E6NH / LP-E6N Batteries' }
    }
  ];

  // Combine and assign category_id
  const allDevices = [...eosR, ...cinema, ...lenses, ...powershot, ...printersAndAccessories];

  return allDevices.map((d) => ({
    ...d,
    category_id: categoryId
  }));
};
