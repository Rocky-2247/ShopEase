// backend/utils/sonyProductsData.js
// 107 Unique, Non-Repeating Official Sony Devices (Alpha Cameras, G Master Lenses, PlayStation 5 Pro & VR2, Bravia XR OLED TVs, Walkman, WH/WF Audio, Xperia Phones)

export const getSonyProducts = (categoryId) => {
  return [
    // --- 1. SONY ALPHA FULL-FRAME & CINEMA LINE CAMERAS (22 Models) ---
    {
      name: 'Sony Alpha 1 Flagship Mirrorless Camera Body',
      slug: 'sony-alpha-1-flagship-mirrorless-camera-body',
      description: 'The pinnacle of imaging engineering: 50.1MP Full-Frame Exmor RS stacked CMOS sensor, 30 fps blackout-free continuous shooting, 8K 30p and 4K 120p 10-bit video, and 9.44M-dot OLED EVF with 240Hz refresh rate.',
      price: 6499,
      discount_price: 5999,
      stock: 14,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 142,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '50.1MP Full-Frame Exmor RS Stacked', Video: '8K 30p / 4K 120p 10-bit 4:2:2', Burst: '30 fps Blackout-Free', EVF: '9.44M-Dot OLED 240Hz', Mount: 'Sony E-Mount' }
    },
    {
      name: 'Sony Alpha 9 III Global Shutter Mirrorless Camera',
      slug: 'sony-alpha-9-iii-global-shutter-mirrorless-camera',
      description: 'World-first full-frame global shutter camera: 24.6MP stacked sensor captures all pixels simultaneously with zero distortion, 120 fps burst shooting with full AF/AE, 1/80,000s shutter speed with full flash sync.',
      price: 5999,
      discount_price: 5699,
      stock: 16,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 98,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '24.6MP Full-Frame Global Shutter Stacked', ShutterSpeed: 'Up to 1/80,000s Full Flash Sync', Burst: '120 fps continuous AF/AE', Autofocus: '759 Phase-Detect with AI Processing Unit' }
    },
    {
      name: 'Sony Alpha 7R V High-Resolution Mirrorless Camera',
      slug: 'sony-alpha-7r-v-high-resolution-mirrorless-camera',
      description: '61.0MP Full-Frame back-illuminated Exmor R CMOS sensor coupled with dedicated AI deep learning processing unit, 8-stop in-body 5-axis image stabilization, 8K 24p video recording, and 4-axis multi-angle LCD monitor.',
      price: 3899,
      discount_price: 3499,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 215,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '61.0MP Full-Frame Exmor R BSI', Stabilization: '8.0 Stops In-Body IS', Video: '8K 24p / 4K 60p 10-bit', AIProcessor: 'Real-time Recognition AF' }
    },
    {
      name: 'Sony Alpha 7 IV Hybrid Full-Frame Mirrorless Camera',
      slug: 'sony-alpha-7-iv-hybrid-full-frame-mirrorless-camera',
      description: 'The ultimate hybrid standard: 33.0MP Full-Frame Exmor R sensor, BIONZ XR processing engine, 4K 60p 10-bit 4:2:2 recording with S-Cinetone, Breathing Compensation, and 759-point fast hybrid autofocus with human, animal, and bird tracking.',
      price: 2499,
      discount_price: 2299,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 430,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '33.0MP Full-Frame Exmor R', Video: '4K 60p 10-Bit 4:2:2 / S-Cinetone', Autofocus: '759 AF Points with Real-time Eye AF' }
    },
    {
      name: 'Sony Alpha 7S III Low-Light Video Flagship Camera',
      slug: 'sony-alpha-7s-iii-low-light-video-flagship-camera',
      description: 'Cinema-grade low-light beast: 12.1MP Full-Frame Exmor R sensor with ultra-high sensitivity up to ISO 409,600, 15+ stops dynamic range, 4K 120p 10-bit 4:2:2 internal recording, 16-bit RAW HDMI output, and dual CFexpress Type A slots.',
      price: 3499,
      discount_price: 3199,
      stock: 18,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 189,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '12.1MP Full-Frame Exmor R BSI', ISO: '80 - 409,600', Video: '4K 120p 10-bit 4:2:2 / 16-bit RAW HDMI', DynamicRange: '15+ Stops' }
    },
    {
      name: 'Sony Alpha 7C II Compact Full-Frame Camera',
      slug: 'sony-alpha-7c-ii-compact-full-frame-camera',
      description: 'Full-frame power in an ultra-compact 514g body: 33MP Exmor R sensor, dedicated AI processing unit for next-generation subject tracking, 7.0-stop image stabilization, and 4K 60p video capture.',
      price: 2199,
      discount_price: 1999,
      stock: 28,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 156,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '33.0MP Full-Frame Exmor R', Weight: '514g Compact Chassis', Stabilization: '7.0 Stops In-Body IS', AIProcessor: 'Real-time Subject Recognition' }
    },
    {
      name: 'Sony Alpha 7CR Ultra-High-Resolution Compact Camera',
      slug: 'sony-alpha-7cr-ultra-high-resolution-compact-camera',
      description: 'Remarkable 61.0MP resolution in a pocketable travel form factor: AI-assisted autofocus, 7-stop image stabilization, bundled extension grip GP-X2, Pixel Shift Multi Shooting up to 240MP.',
      price: 2999,
      discount_price: 2799,
      stock: 15,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 84,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '61.0MP Full-Frame Exmor R', PixelShift: '240.8MP Composite Output', Weight: '515g', Grip: 'Extension Grip GP-X2 Included' }
    },
    {
      name: 'Sony Alpha 6700 Flagship APS-C Mirrorless Camera',
      slug: 'sony-alpha-6700-flagship-aps-c-mirrorless-camera',
      description: '26.0MP back-illuminated APS-C Exmor R CMOS sensor, AI processing unit for accurate pose estimation and subject tracking, 4K 120p high-frame-rate video, 5-axis optical image stabilization in body.',
      price: 1399,
      discount_price: 1299,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 260,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '26.0MP APS-C Exmor R BSI', Video: '4K 120p / 4K 60p Oversampled 6K', AIAutofocus: 'Human, Animal, Bird, Vehicle, Insect' }
    },
    {
      name: 'Sony Alpha 6400 Mirrorless Camera with 16-50mm Lens Kit',
      slug: 'sony-alpha-6400-mirrorless-camera-with-16-50mm-lens-kit',
      description: '24.2MP APS-C sensor with world-renowned 0.02s autofocus acquisition, 425 phase-detection AF points, 180-degree tiltable touch LCD for vlogging, and 4K HDR movie recording.',
      price: 999,
      discount_price: 899,
      stock: 55,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 580,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '24.2MP APS-C Exmor CMOS', Lens: 'E PZ 16-50mm f/3.5-5.6 OSS', Screen: '180° Flip Touchscreen', AFPoints: '425 Phase-Detect' }
    },
    {
      name: 'Sony Alpha 6100 Mirrorless Camera Body',
      slug: 'sony-alpha-6100-mirrorless-camera-body',
      description: 'Ideal entry point into the Sony Alpha ecosystem: 24.2MP sensor, real-time Eye AF for humans and animals, 11 fps continuous shooting, and 4K internal video.',
      price: 749,
      discount_price: 699,
      stock: 45,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.6,
      num_reviews: 310,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '24.2MP APS-C', Burst: '11 fps', Autofocus: 'Real-time Eye AF', Screen: 'Tiltable LCD' }
    },
    {
      name: 'Sony FX3 Full-Frame Cinema Line Camera',
      slug: 'sony-fx3-full-frame-cinema-line-camera',
      description: 'Approved for Netflix productions: 12.1MP Full-Frame sensor, cage-free design with 1/4"-20 mounting threads, active cooling fan for uninterrupted recording, detachable top handle with dual XLR audio inputs, and S-Cinetone color profile.',
      price: 3999,
      discount_price: 3799,
      stock: 19,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 240,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '12.1MP Full-Frame Exmor R', Audio: 'XLR Handle with 4-Channel 24-Bit', Cooling: 'Active Internal Fan', Profile: 'S-Cinetone, S-Log3' }
    },
    {
      name: 'Sony FX30 Cinema Line Super 35 Camera with XLR Handle',
      slug: 'sony-fx30-cinema-line-super-35-camera-with-xlr-handle',
      description: '26MP APS-C / Super 35 Back-Illuminated sensor, Dual Base ISO 800/2500, 4K 120p 10-bit recording, user LUT import, timecode synchronization, and full Cinema Line ergonomics.',
      price: 2199,
      discount_price: 1999,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 175,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '26.0MP Super 35 BSI CMOS', DualBaseISO: 'ISO 800 and ISO 2500', Video: '4K 120p 10-bit 4:2:2', Handle: 'XLR Audio Unit Included' }
    },
    {
      name: 'Sony FX6 Full-Frame Professional Cinema Line Camera Body',
      slug: 'sony-fx6-full-frame-professional-cinema-line-camera-body',
      description: 'Broadcast and Hollywood documentary favorite: 10.2MP Full-Frame sensor, built-in electronic variable ND filter (1/4 to 1/128 ND), 15+ stops DR, 12G-SDI output, fast hybrid AF with touch tracking.',
      price: 5999,
      discount_price: 5699,
      stock: 10,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 82,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '10.2MP Full-Frame Exmor R', NDFilter: 'Electronic Variable ND (1/4 to 1/128)', SDI: '12G-SDI & HDMI Out', Codec: 'XAVC-I 4:2:2 10-bit Class 300' }
    },
    {
      name: 'Sony ZV-E1 Full-Frame Vlog Camera',
      slug: 'sony-zv-e1-full-frame-vlog-camera',
      description: 'World’s most compact interchangeable lens full-frame vlogging camera: 12.1MP sensor, dedicated AI auto-framing that tracks subjects across the frame, dynamic active mode stabilization, and intelligent 3-capsule microphone with switchable directivity.',
      price: 2199,
      discount_price: 1999,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 165,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '12.1MP Full-Frame Exmor R', AIFeatures: 'AI Auto-Framing & Framing Stabilizer', Mic: 'Intelligent 3-Capsule Array', Video: '4K 60p / 4K 120p Upgradable' }
    },
    {
      name: 'Sony ZV-E10 II Interchangeable Lens Vlog Camera',
      slug: 'sony-zv-e10-ii-interchangeable-lens-vlog-camera',
      description: '26MP APS-C sensor, 4K 60p oversampled 5.6K, Cinematic Vlog Setting, vertical video UI orientation, high-capacity NP-FZ100 battery with all-day shooting capability.',
      price: 999,
      discount_price: 899,
      stock: 50,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 280,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '26MP APS-C BSI', Battery: 'NP-FZ100 (Up to 610 shots / 130m video)', Video: '4K 60p 10-bit 4:2:2', Color: 'S-Cinetone & Creative Looks' }
    },
    {
      name: 'Sony ZV-1 II Pocket Vlog Camera with 18-50mm Lens',
      slug: 'sony-zv-1-ii-pocket-vlog-camera-with-18-50mm-lens',
      description: 'Pocket-sized powerhouse: 20.1MP 1.0-type stacked sensor, ultra-wide 18-50mm f/1.8-4.0 optical zoom lens, optical image stabilization, Product Showcase button, and multi-face recognition.',
      price: 899,
      discount_price: 799,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 195,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '20.1MP 1.0-Type Exmor RS', Lens: 'Zeiss Vario-Sonnar T* 18-50mm f/1.8-4', ND: 'Built-in 3-Stop ND Filter' }
    },
    {
      name: 'Sony ZV-1F Ultra-Wide 20mm Vlog Camera',
      slug: 'sony-zv-1f-ultra-wide-20mm-vlog-camera',
      description: 'Designed specifically for social creators: 20mm ultra-wide f/2.0 prime lens captures full selfies with room to spare, USB-C direct streaming, background defocus button, and eye AF.',
      price: 499,
      discount_price: 449,
      stock: 60,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.6,
      num_reviews: 320,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '20.1MP 1.0-Type Exmor RS', Lens: '20mm f/2.0 Ultra-Wide Prime', Video: '4K 30p / FHD 120p slow-mo' }
    },
    {
      name: 'Sony Cyber-shot RX100 VII Premium Compact Camera',
      slug: 'sony-cyber-shot-rx100-vii-premium-compact-camera',
      description: 'Alpha 9 performance in your pocket: 20.1MP stacked sensor, Zeiss 24-200mm f/2.8-4.5 lens, 20 fps blackout-free burst with 60 AF/AE tracking calculations per second, pop-up OLED EVF, and 3.5mm mic jack.',
      price: 1299,
      discount_price: 1199,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 240,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '20.1MP 1.0-Type Stacked CMOS', Lens: 'Zeiss 24-200mm f/2.8-4.5', EVF: 'Pop-Up 2.36M-Dot OLED', Burst: '20 fps Blackout-Free' }
    },
    {
      name: 'Sony Cyber-shot RX10 IV All-in-One Superzoom Bridge Camera',
      slug: 'sony-cyber-shot-rx10-iv-all-in-one-superzoom-bridge-camera',
      description: 'Zeiss Vario-Sonnar T* 24-600mm f/2.4-4.0 ultra-telephoto optical zoom lens, 0.03s AF acquisition speed, 24 fps continuous shooting with AF/AE tracking, 4K video recording with full pixel readout.',
      price: 1699,
      discount_price: 1549,
      stock: 20,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 140,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '20.1MP 1.0-Type Exmor RS', Zoom: '25x Optical 24-600mm f/2.4-4', AFPoints: '315 Phase-Detect' }
    },
    {
      name: 'Sony Alpha 7 IV with FE 28-70mm f/3.5-5.6 OSS Zoom Kit',
      slug: 'sony-alpha-7-iv-with-fe-28-70mm-zoom-kit',
      description: 'Complete full-frame starter bundle: Sony A7 IV 33MP hybrid camera paired with FE 28-70mm optical steady shot lightweight zoom lens.',
      price: 2699,
      discount_price: 2499,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 180,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '33.0MP Full-Frame', Lens: 'FE 28-70mm f/3.5-5.6 OSS', Video: '4K 60p 10-Bit' }
    },
    {
      name: 'Sony Alpha 7R V with FE 24-70mm f/2.8 GM II Master Kit',
      slug: 'sony-alpha-7r-v-with-fe-24-70mm-gm-ii-master-kit',
      description: 'The ultimate professional commercial and studio bundle: 61MP A7R V body paired with the G Master 24-70mm f/2.8 II flagship zoom.',
      price: 6199,
      discount_price: 5699,
      stock: 12,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 65,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '61.0MP Full-Frame BSI', Lens: 'FE 24-70mm f/2.8 GM II', Resolution: '8K 24p / 4K 60p' }
    },
    {
      name: 'Sony Alpha 6700 with E 18-135mm f/3.5-5.6 OSS Kit',
      slug: 'sony-alpha-6700-with-e-18-135mm-oss-kit',
      description: 'All-in-one enthusiast travel combo: 26MP AI-powered A6700 paired with versatile 7.5x optical zoom E 18-135mm lens.',
      price: 1799,
      discount_price: 1649,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 110,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Sensor: '26MP APS-C BSI', Lens: 'E 18-135mm f/3.5-5.6 OSS', Zoom: '7.5x Optical Reach' }
    },

    // --- 2. SONY G MASTER & G SERIES LENSES (30 Models) ---
    {
      name: 'Sony FE 24-70mm f/2.8 GM II Standard Zoom Lens',
      slug: 'sony-fe-24-70mm-f2-8-gm-ii-standard-zoom-lens',
      description: 'World’s lightest and smallest f/2.8 standard zoom: 4 XD Linear Motors, aperture click switch, 22% lighter than generation 1, extreme sharpness and circular bokeh.',
      price: 2299,
      discount_price: 2199,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 280,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '24-70mm', MaxAperture: 'f/2.8 Constant', Weight: '695g', Motors: '4x XD Linear Motors' }
    },
    {
      name: 'Sony FE 70-200mm f/2.8 GM OSS II Telephoto Zoom Lens',
      slug: 'sony-fe-70-200mm-f2-8-gm-oss-ii-telephoto-zoom-lens',
      description: 'Masterpiece telephoto zoom: 29% lighter (1045g), 4x faster AF tracking, built-in Optical SteadyShot with 3 modes, and 0.4x macro magnification.',
      price: 2799,
      discount_price: 2699,
      stock: 20,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 310,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '70-200mm', MaxAperture: 'f/2.8 Constant', Weight: '1045g', Stabilization: 'Optical SteadyShot 3-Mode' }
    },
    {
      name: 'Sony FE 16-35mm f/2.8 GM II Ultra-Wide Zoom Lens',
      slug: 'sony-fe-16-35mm-f2-8-gm-ii-ultra-wide-zoom-lens',
      description: 'Completes the holy trinity of GM II zooms: 547g ultra-lightweight, 3 XA elements for edge-to-edge clarity, suppress focus breathing, de-clickable aperture ring.',
      price: 2299,
      discount_price: 2199,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 190,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '16-35mm', MaxAperture: 'f/2.8', Elements: '3x XA (Extreme Aspherical)', Weight: '547g' }
    },
    {
      name: 'Sony FE 50mm f/1.2 GM Prime Lens',
      slug: 'sony-fe-50mm-f1-2-gm-prime-lens',
      description: 'Extraordinary optical resolution with dreamy f/1.2 depth of field: 11-blade circular aperture, 4 XD Linear Motors, Nano AR Coating II, weighs only 778g.',
      price: 1999,
      discount_price: 1899,
      stock: 28,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 260,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '50mm', MaxAperture: 'f/1.2 Ultra-Fast', Diaphragm: '11-Blade Circular', Weight: '778g' }
    },
    {
      name: 'Sony FE 85mm f/1.4 GM II Portrait Prime Lens',
      slug: 'sony-fe-85mm-f1-4-gm-ii-portrait-prime-lens',
      description: 'The golden portrait standard redesigned: 3x faster autofocus tracking, lighter 642g body, dual XD Linear Motors, gorgeous rendering with zero chromatic aberration.',
      price: 1799,
      discount_price: 1699,
      stock: 24,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 140,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '85mm', MaxAperture: 'f/1.4', Weight: '642g (20% Lighter)', Motors: 'Dual XD Linear Motors' }
    },
    {
      name: 'Sony FE 135mm f/1.8 GM Telephoto Prime Lens',
      slug: 'sony-fe-135mm-f1-8-gm-telephoto-prime-lens',
      description: 'Legendary sharpness and background compression: dual front and rear XD linear motors for blistering AF speed, focus hold buttons, and dust/moisture resistance.',
      price: 2099,
      discount_price: 1949,
      stock: 18,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 175,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '135mm', MaxAperture: 'f/1.8', Coating: 'Nano AR Coating', FocusRange: '0.7m Minimum Focus' }
    },
    {
      name: 'Sony FE 24mm f/1.4 GM Wide-Angle Prime Lens',
      slug: 'sony-fe-24mm-f1-4-gm-wide-angle-prime-lens',
      description: 'Astrophotography and environmental portrait master: compact 445g design, two XA elements eliminate sagittal flare, direct drive SSM motor.',
      price: 1399,
      discount_price: 1299,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 320,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '24mm', MaxAperture: 'f/1.4', Weight: '445g Ultra-Compact', FilterSize: '67mm' }
    },
    {
      name: 'Sony FE 35mm f/1.4 GM Wide-Angle Prime Lens',
      slug: 'sony-fe-35mm-f1-4-gm-wide-angle-prime-lens',
      description: 'The ultimate documentary and street lens: dual XD linear motors, close-up 25cm minimum focus distance, physical aperture ring with de-click switch.',
      price: 1399,
      discount_price: 1299,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 410,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '35mm', MaxAperture: 'f/1.4', Weight: '524g', MinFocus: '0.25m' }
    },
    {
      name: 'Sony FE 14mm f/1.8 GM Ultra-Wide Prime Lens',
      slug: 'sony-fe-14mm-f1-8-gm-ultra-wide-prime-lens',
      description: 'Incredible 114-degree angle of view with f/1.8 speed in a 460g body: rear filter holder, linear response manual focus, zero distortion for landscapes and architecture.',
      price: 1599,
      discount_price: 1499,
      stock: 16,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 130,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '14mm Ultra-Wide', MaxAperture: 'f/1.8', AngleOfView: '114 Degrees', Weight: '460g' }
    },
    {
      name: 'Sony FE 100-400mm f/4.5-5.6 GM OSS Super-Telephoto Lens',
      slug: 'sony-fe-100-400mm-f4-5-5-6-gm-oss-super-telephoto-lens',
      description: 'Sports and wildlife perfection: double linear motor and direct drive SSM for high precision tracking, torque adjustment ring, built-in Optical SteadyShot.',
      price: 2499,
      discount_price: 2399,
      stock: 18,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 210,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '100-400mm', MaxAperture: 'f/4.5-5.6', Teleconverter: 'Compatible with 1.4x & 2.0x' }
    },
    {
      name: 'Sony FE 200-600mm f/5.6-6.3 G OSS Super-Telephoto Zoom Lens',
      slug: 'sony-fe-200-600mm-f5-6-6-3-g-oss-super-telephoto-zoom-lens',
      description: 'Internal zoom design maintains balance and weather seal: Direct Drive SSM motor, 5 ED elements, Optical SteadyShot with Mode 3 for erratic motion.',
      price: 1999,
      discount_price: 1899,
      stock: 32,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 490,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '200-600mm', MaxAperture: 'f/5.6-6.3', ZoomMechanism: 'Internal Zoom', Stabilization: 'Optical SteadyShot 3-Mode' }
    },
    {
      name: 'Sony FE 600mm f/4 GM OSS Super-Telephoto Flagship Lens',
      slug: 'sony-fe-600mm-f4-gm-oss-super-telephoto-flagship-lens',
      description: 'World’s lightest 600mm f/4 lens (3040g): fluorite and XA optical elements, dual XD linear motors, function ring with preset focus slots.',
      price: 12999,
      discount_price: 12499,
      stock: 5,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 42,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '600mm', MaxAperture: 'f/4.0', Weight: '3040g Carbon Fiber Barrel', OpticalDesign: '3 Fluorite Elements' }
    },
    {
      name: 'Sony FE 400mm f/2.8 GM OSS Super-Telephoto Prime Lens',
      slug: 'sony-fe-400mm-f2-8-gm-oss-super-telephoto-prime-lens',
      description: 'Stadium and wildlife master: 2895g lightweight front-balanced construction, dual XD linear motors, drop-in filter slot, full-time DMF support.',
      price: 11999,
      discount_price: 11499,
      stock: 6,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 58,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '400mm', MaxAperture: 'f/2.8', Weight: '2895g', Filter: 'Drop-In 40.5mm Slot' }
    },
    {
      name: 'Sony FE 300mm f/2.8 GM OSS Telephoto Prime Lens',
      slug: 'sony-fe-300mm-f2-8-gm-oss-telephoto-prime-lens',
      description: 'The lightest 300mm f/2.8 telephoto in its class at just 1470g: handheld sports shooting, dual XD linear motors, perfect center of gravity.',
      price: 5999,
      discount_price: 5799,
      stock: 10,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 74,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '300mm', MaxAperture: 'f/2.8', Weight: '1470g Ultra-Balanced', Teleconverter: '1.4x & 2.0x Support' }
    },
    {
      name: 'Sony FE 24-105mm f/4 G OSS All-in-One Standard Zoom Lens',
      slug: 'sony-fe-24-105mm-f4-g-oss-all-in-one-standard-zoom-lens',
      description: 'The definitive all-day walkaround lens: constant f/4 aperture, Optical SteadyShot, 4 aspherical elements, and lightweight 663g chassis.',
      price: 1299,
      discount_price: 1199,
      stock: 45,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 520,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '24-105mm', MaxAperture: 'f/4 Constant', Weight: '663g', Stabilization: 'Optical SteadyShot' }
    },
    {
      name: 'Sony FE 20-70mm f/4 G Ultra-Wide to Standard Zoom Lens',
      slug: 'sony-fe-20-70mm-f4-g-ultra-wide-to-standard-zoom-lens',
      description: 'Extends wide down to 20mm for immersive vlog framing and landscape coverage without changing lenses: dual XD linear motors and compact 488g form factor.',
      price: 1099,
      discount_price: 999,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 210,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '20-70mm Ultra-Wide', MaxAperture: 'f/4 Constant', Weight: '488g', ApertureRing: 'De-clickable with Iris Lock' }
    },
    {
      name: 'Sony FE 70-200mm f/4 Macro G OSS II Telephoto Lens',
      slug: 'sony-fe-70-200mm-f4-macro-g-oss-ii-telephoto-lens',
      description: 'Compact 794g telephoto zoom with 0.5x half-macro capability across the entire zoom range (1.0x with 2.0x teleconverter): 4 XD linear motors.',
      price: 1699,
      discount_price: 1599,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 160,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '70-200mm', MaxAperture: 'f/4', Macro: '0.5x Macro Across All Zoom', Weight: '794g' }
    },
    {
      name: 'Sony FE 90mm f/2.8 Macro G OSS 1:1 Macro Lens',
      slug: 'sony-fe-90mm-f2-8-macro-g-oss-1-1-macro-lens',
      description: 'Renowned for clinical microscopic sharpness: 1:1 life-size magnification, direct manual focus clutch ring, internal focus system, and Optical SteadyShot.',
      price: 1099,
      discount_price: 999,
      stock: 28,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 380,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '90mm', MaxAperture: 'f/2.8', Magnification: '1:1 True Life-Size', Clutch: 'Push-Pull Manual Focus Clutch' }
    },
    {
      name: 'Sony FE 24mm f/2.8 G Ultra-Compact Prime Lens',
      slug: 'sony-fe-24mm-f2-8-g-ultra-compact-prime-lens',
      description: 'Precision aluminum barrel weighing just 162g: dual linear motors, customizable focus hold button, and matching 49mm filter thread.',
      price: 599,
      discount_price: 549,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 140,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '24mm', MaxAperture: 'f/2.8', Weight: '162g Ultra-Light', Material: 'Machined Aluminum' }
    },
    {
      name: 'Sony FE 40mm f/2.5 G Ultra-Compact Prime Lens',
      slug: 'sony-fe-40mm-f2-5-g-ultra-compact-prime-lens',
      description: 'Natural human perspective prime: 173g aluminum body, physical aperture ring, internal focusing, dust/moisture resistance.',
      price: 599,
      discount_price: 549,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 180,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '40mm', MaxAperture: 'f/2.5', Weight: '173g', FilterSize: '49mm' }
    },
    {
      name: 'Sony FE 50mm f/2.5 G Ultra-Compact Prime Lens',
      slug: 'sony-fe-50mm-f2-5-g-ultra-compact-prime-lens',
      description: 'Everyday standard prime in a matching miniature 174g aluminum shell: 7-blade circular aperture, dual linear AF motors.',
      price: 599,
      discount_price: 549,
      stock: 32,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 195,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '50mm', MaxAperture: 'f/2.5', Weight: '174g', FilterSize: '49mm' }
    },
    {
      name: 'Sony FE PZ 16-35mm f/4 G Power Zoom Lens',
      slug: 'sony-fe-pz-16-35mm-f4-g-power-zoom-lens',
      description: 'Cinema-optimized electronic power zoom: 6 XD linear motors drive zoom and focus with smooth variable speed lever, internal zoom, 353g lightweight.',
      price: 1199,
      discount_price: 1099,
      stock: 24,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 160,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '16-35mm', MaxAperture: 'f/4', ZoomType: 'Power Zoom (PZ)', Weight: '353g' }
    },
    {
      name: 'Sony FE PZ 28-135mm f/4 G OSS Cinema Power Zoom Lens',
      slug: 'sony-fe-pz-28-135mm-f4-g-oss-cinema-power-zoom-lens',
      description: 'Professional video cinema lens: Smooth Motion Optics (SMO) minimizes optical shifts, independent control rings for zoom, focus, and iris.',
      price: 2499,
      discount_price: 2349,
      stock: 12,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 75,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '28-135mm', MaxAperture: 'f/4 Cinema Constant', Design: 'Smooth Motion Optics (SMO)', Stabilization: 'Optical SteadyShot' }
    },
    {
      name: 'Sony E 16-55mm f/2.8 G APS-C Standard Zoom Lens',
      slug: 'sony-e-16-55mm-f2-8-g-aps-c-standard-zoom-lens',
      description: 'Flagship standard zoom for Sony APS-C Alpha cameras: constant f/2.8 speed, XD linear motor, 4 aspherical elements with corner-to-corner clarity.',
      price: 1399,
      discount_price: 1299,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 140,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '16-55mm (24-82.5mm Full-Frame Equiv)', MaxAperture: 'f/2.8 Constant', Weight: '494g' }
    },
    {
      name: 'Sony E 70-350mm f/4.5-6.3 G OSS APS-C Super-Telephoto Lens',
      slug: 'sony-e-70-350mm-f4-5-6-3-g-oss-aps-c-super-telephoto-lens',
      description: 'Massive 5x telephoto reach equivalent to 105-525mm full-frame: Optical SteadyShot image stabilization and XD linear motor in a 625g tube.',
      price: 999,
      discount_price: 899,
      stock: 28,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 230,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '70-350mm (105-525mm Equivalent)', Stabilization: 'Optical SteadyShot', Weight: '625g' }
    },
    {
      name: 'Sony E 10-20mm f/4 PZ G APS-C Ultra-Wide Power Zoom Lens',
      slug: 'sony-e-10-20mm-f4-pz-g-aps-c-ultra-wide-power-zoom-lens',
      description: 'World’s smallest and lightest ultra-wide APS-C power zoom (178g): internal zoom and focus, dual linear motors for vloggers and gimbal operators.',
      price: 749,
      discount_price: 699,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 170,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '10-20mm (15-30mm Equivalent)', Weight: '178g Featherweight', Zoom: 'Internal Electronic Power Zoom' }
    },
    {
      name: 'Sony E 15mm f/1.4 G APS-C Wide-Angle Prime Lens',
      slug: 'sony-e-15mm-f1-4-g-aps-c-wide-angle-prime-lens',
      description: 'Bright f/1.4 aperture wide prime (22.5mm full-frame equivalent): 219g compact chassis, physical aperture ring, dual linear motors.',
      price: 749,
      discount_price: 699,
      stock: 26,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 185,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '15mm (22.5mm Equivalent)', MaxAperture: 'f/1.4', Weight: '219g', Diaphragm: '7-Blade Circular' }
    },
    {
      name: 'Sony E 11mm f/1.8 APS-C Ultra-Wide Prime Lens',
      slug: 'sony-e-11mm-f1-8-aps-c-ultra-wide-prime-lens',
      description: 'Dynamic 16.5mm equivalent ultra-wide field of view: lightweight 181g body, bright f/1.8 speed for low light and starry night skies.',
      price: 549,
      discount_price: 499,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 210,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', FocalLength: '11mm (16.5mm Equivalent)', MaxAperture: 'f/1.8', Weight: '181g' }
    },
    {
      name: 'Sony 1.4x Teleconverter (SEL14TC)',
      slug: 'sony-1-4x-teleconverter-sel14tc',
      description: 'Increases focal length by 1.4x with only 1-stop light loss: maintains full AF speed and Optical SteadyShot communication with compatible G Master lenses.',
      price: 549,
      discount_price: 499,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 130,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Magnification: '1.4x Extender', LightLoss: '1 EV Stop', Compatibility: 'FE 70-200mm GM, 100-400mm GM, 200-600mm G, 400mm/600mm GM' }
    },
    {
      name: 'Sony 2.0x Teleconverter (SEL20TC)',
      slug: 'sony-2-0x-teleconverter-sel20tc',
      description: 'Doubles the focal reach of your telephoto lens (e.g. transforms 70-200mm into 140-400mm) with precision optical elements.',
      price: 549,
      discount_price: 499,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 115,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Magnification: '2.0x Extender', LightLoss: '2 EV Stops', WeatherSealing: 'Dust & Moisture Resistant' }
    },

    // --- 3. SONY PLAYSTATION 5 & GAMING ECOSYSTEM (18 Models) ---
    {
      name: 'Sony PlayStation 5 Pro Console (2TB SSD)',
      slug: 'sony-playstation-5-pro-console-2tb-ssd',
      description: 'The definitive PlayStation gaming console: Upgraded GPU with 67% more Compute Units, Advanced Ray Tracing with triple reflection speeds, AI-driven PlayStation Spectral Super Resolution (PSSR), and 2TB high-speed NVMe SSD.',
      price: 699,
      discount_price: 699,
      stock: 45,
      image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 840,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Storage: '2TB Custom NVMe SSD', Technology: 'PSSR AI Upscaling & Advanced Ray Tracing', FrameRate: 'Up to 4K 120fps / 8K Support', Controller: 'DualSense Wireless Included' }
    },
    {
      name: 'Sony PlayStation 5 Slim Console (Disc Edition, 1TB SSD)',
      slug: 'sony-playstation-5-slim-console-disc-edition-1tb-ssd',
      description: 'Slimmer design with 1TB internal storage: Ultra HD Blu-ray disc drive, Tempest 3D AudioTech, ray tracing, and ultra-high-speed SSD load times.',
      price: 499,
      discount_price: 469,
      stock: 65,
      image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 1250,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Storage: '1TB NVMe SSD', Drive: 'Ultra HD Blu-ray Disc Drive', Audio: 'Tempest 3D AudioTech' }
    },
    {
      name: 'Sony PlayStation 5 Digital Edition Slim (1TB SSD)',
      slug: 'sony-playstation-5-digital-edition-slim-1tb-ssd',
      description: 'All-digital sleek console: 1TB SSD, download games directly from PlayStation Network, HDR technology, and 4K 120Hz output.',
      price: 449,
      discount_price: 419,
      stock: 50,
      image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 790,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Storage: '1TB NVMe SSD', Type: 'All-Digital Edition', Resolution: '4K 120Hz / HDR' }
    },
    {
      name: 'Sony PlayStation VR2 Virtual Reality Headset',
      slug: 'sony-playstation-vr2-virtual-reality-headset',
      description: 'Next-gen virtual reality: Dual 2000x2040 4K HDR OLED displays at up to 120Hz, 110-degree FOV, intelligent eye tracking with foveated rendering, headset vibration haptics, and PS VR2 Sense controllers.',
      price: 549,
      discount_price: 499,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 380,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Display: '4K HDR OLED (2000x2040 per eye)', RefreshRate: '90Hz / 120Hz', EyeTracking: 'Built-in IR Eye Tracking Cameras', Haptics: 'Headset Feedback & Sense Controllers' }
    },
    {
      name: 'Sony PlayStation VR2 Sense Controller Charging Station',
      slug: 'sony-playstation-vr2-sense-controller-charging-station',
      description: 'Click-in dock design quickly charges both left and right PS VR2 Sense controllers without occupying PS5 USB ports.',
      price: 49,
      discount_price: 44,
      stock: 60,
      image_url: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 210,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Charging: 'Simultaneous Dual Controller Fast Charge', Design: 'Click-in Drop Mechanism' }
    },
    {
      name: 'Sony PlayStation Portal Remote Player for PS5',
      slug: 'sony-playstation-portal-remote-player-for-ps5',
      description: 'Stream your PS5 games over home Wi-Fi: 8-inch Full HD LCD screen at 60fps, integrated DualSense haptic feedback, and adaptive trigger controls.',
      price: 199,
      discount_price: 199,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 620,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Screen: '8" 1080p 60Hz LCD', Controls: 'Full DualSense Haptics & Adaptive Triggers', Connectivity: 'Wi-Fi 5 Remote Play' }
    },
    {
      name: 'Sony DualSense Edge Wireless Pro Controller',
      slug: 'sony-dualsense-edge-wireless-pro-controller',
      description: 'High-performance pro controller: Replaceable stick modules, mappable back buttons, adjustable trigger stops, customizable stick sensitivity and dead zones, and braided USB cable with lockable housing.',
      price: 199,
      discount_price: 189,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 450,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Modularity: 'Swappable Stick Modules', BackButtons: '2 Re-mappable Lever/Half-Dome Sets', TriggerStops: '3-Position Adjustable Stops' }
    },
    {
      name: 'Sony DualSense Wireless Controller - Midnight Black',
      slug: 'sony-dualsense-wireless-controller-midnight-black',
      description: 'Haptic feedback and dynamic adaptive triggers with built-in microphone and signature stealth Midnight Black finish.',
      price: 69,
      discount_price: 59,
      stock: 80,
      image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 890,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Color: 'Midnight Black', Features: 'Haptic Feedback, Adaptive Triggers, Motion Sensor' }
    },
    {
      name: 'Sony DualSense Wireless Controller - Cosmic Red',
      slug: 'sony-dualsense-wireless-controller-cosmic-red',
      description: 'Vibrant Cosmic Red colorway inspired by the cosmos with dynamic adaptive triggers and integrated chat mic.',
      price: 74,
      discount_price: 64,
      stock: 60,
      image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 420,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Color: 'Cosmic Red', Feedback: 'Haptic Actuators' }
    },
    {
      name: 'Sony DualSense Wireless Controller - Galactic Purple',
      slug: 'sony-dualsense-wireless-controller-galactic-purple',
      description: 'Fresh Galactic Purple shade with tactile rumble, touchpad, and built-in rechargeable battery.',
      price: 74,
      discount_price: 64,
      stock: 55,
      image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 350,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Color: 'Galactic Purple', Battery: 'Built-in USB-C Rechargeable' }
    },
    {
      name: 'Sony DualSense Wireless Controller - Sterling Silver (Deep Earth)',
      slug: 'sony-dualsense-wireless-controller-sterling-silver',
      description: 'Metallic Deep Earth Collection: Sleek metallic Sterling Silver finish with premium textured grips.',
      price: 79,
      discount_price: 69,
      stock: 45,
      image_url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 290,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Collection: 'Deep Earth Metallic', Finish: 'Sterling Silver' }
    },
    {
      name: 'Sony Pulse Elite Wireless Gaming Headset',
      slug: 'sony-pulse-elite-wireless-gaming-headset',
      description: 'Audiophile planar magnetic drivers deliver lifelike game acoustics, PlayStation Link ultra-low latency wireless, AI noise-rejecting retractable boom microphone, and bundled charging hanger.',
      price: 149,
      discount_price: 139,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 340,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Drivers: 'Custom Planar Magnetic Drivers', Wireless: 'PlayStation Link Lossless Audio', Battery: 'Up to 30 Hours', Mic: 'Retractable AI-Enhanced' }
    },
    {
      name: 'Sony Pulse Explore Wireless Gaming Earbuds',
      slug: 'sony-pulse-explore-wireless-gaming-earbuds',
      description: 'First gaming earbuds with planar magnetic drivers: Dual microphones with AI-enhanced noise rejection, charging case, lossless PlayStation Link wireless and Bluetooth dual-connectivity.',
      price: 199,
      discount_price: 189,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 215,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', DriverType: 'Planar Magnetic Earbud Drivers', DualConnect: 'PS Link + Bluetooth Simultaneous', Case: 'Charging Case Included' }
    },
    {
      name: 'Sony INZONE H9 Wireless Noise Canceling Gaming Headset',
      slug: 'sony-inzone-h9-wireless-noise-canceling-gaming-headset',
      description: 'Flagship PC & PS5 gaming headset: 360 Spatial Sound for Gaming, dual sensor active noise cancellation from the 1000X series, soft leatherette ear cushions, and 32-hour battery life.',
      price: 299,
      discount_price: 249,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 260,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Audio: '360 Spatial Sound for Gaming', NoiseCanceling: 'Dual Sensor Active NC', Battery: '32 Hours with Quick Charge', Compatibility: 'PC & PlayStation 5' }
    },
    {
      name: 'Sony INZONE H5 Wireless Lightweight Gaming Headset',
      slug: 'sony-inzone-h5-wireless-lightweight-gaming-headset',
      description: 'Ultralight 260g design engineered for long competitive esports sessions: 360 Spatial Sound, bidirectional boom microphone, and 28-hour battery.',
      price: 149,
      discount_price: 129,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 145,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Weight: '260g Ultralight', Battery: '28 Hours', Mic: 'Bidirectional Boom' }
    },
    {
      name: 'Sony INZONE Buds Truly Wireless Low-Latency Gaming Earbuds',
      slug: 'sony-inzone-buds-truly-wireless-low-latency-gaming-earbuds',
      description: 'Developed with esports champion Fnatic: Ultra-low latency <30ms via USB-C transceiver, Active Noise Canceling, 12-hour earbud battery life (24h total with case).',
      price: 199,
      discount_price: 179,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 190,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Latency: '<30ms via USB-C Dongle', Battery: '12 Hours Continuous Playback', NC: 'Active Noise Cancellation' }
    },
    {
      name: 'Sony INZONE M9 27" 4K 144Hz Full Array Local Dimming Gaming Monitor',
      slug: 'sony-inzone-m9-27-4k-144hz-full-array-gaming-monitor',
      description: '27-inch 4K IPS panel with Full Array Local Dimming: DisplayHDR 600, 144Hz refresh rate, 1ms GtG response time, Auto HDR Tone Mapping for PS5, and KVM switch.',
      price: 799,
      discount_price: 699,
      stock: 20,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 155,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Panel: '27" 4K (3840x2160) IPS', Dimming: 'Full Array Local Dimming', RefreshRate: '144Hz / 1ms GtG', HDR: 'DisplayHDR 600' }
    },
    {
      name: 'Sony INZONE M3 27" Full HD 240Hz Esports Gaming Monitor',
      slug: 'sony-inzone-m3-27-full-hd-240hz-esports-gaming-monitor',
      description: 'Competitive gaming monitor: 240Hz refresh rate on Fast IPS display, 1ms GtG response time, NVIDIA G-Sync compatible, DisplayHDR 400, and PS5 auto genre picture mode.',
      price: 499,
      discount_price: 449,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 110,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Panel: '27" 1080p Fast IPS', RefreshRate: '240Hz / 1ms GtG', Sync: 'G-Sync Compatible & VRR' }
    },

    // --- 4. SONY BRAVIA HOME CINEMA & AUDIO SYSTEMS (16 Models) ---
    {
      name: 'Sony BRAVIA 9 85" Mini LED 4K HDR Flagship Google TV',
      slug: 'sony-bravia-9-85-mini-led-4k-hdr-flagship-google-tv',
      description: 'Sony’s brightest 4K TV ever: XR Backlight Master Drive with thousand-zone high-density Mini LED control, High Peak Luminance, Acoustic Multi-Audio+ with beam tweeters, and Studio Calibrated Mode.',
      price: 4999,
      discount_price: 4499,
      stock: 10,
      image_url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 95,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', ScreenSize: '85 Inch', Panel: 'QLED Mini LED with XR Backlight Master Drive', Sound: 'Acoustic Multi-Audio+ Beam Tweeters', OS: 'Google TV with Bravia Core' }
    },
    {
      name: 'Sony BRAVIA 9 75" Mini LED 4K HDR Google TV',
      slug: 'sony-bravia-9-75-mini-led-4k-hdr-google-tv',
      description: '75-inch ultimate cinematic display: XR Processor, Voice Zoom 3 for crystal dialogue, 4K 120Hz HDMI 2.1 gaming, and IMAX Enhanced certification.',
      price: 3799,
      discount_price: 3499,
      stock: 14,
      image_url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 120,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', ScreenSize: '75 Inch', Panel: 'Mini LED QLED', Gaming: '4K 120Hz, VRR, ALLM', Processor: 'XR Processor' }
    },
    {
      name: 'Sony BRAVIA 8 65" 4K HDR OLED Google TV',
      slug: 'sony-bravia-8-65-4k-hdr-oled-google-tv',
      description: 'Infinite contrast and pure blacks: 65-inch self-illuminating OLED panel, Acoustic Surface Audio+ vibrates the actual screen for sound, Dolby Vision, Dolby Atmos.',
      price: 2499,
      discount_price: 2299,
      stock: 20,
      image_url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 210,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', ScreenSize: '65 Inch', Panel: 'Pure Black OLED', Audio: 'Acoustic Surface Audio+', HDR: 'Dolby Vision & HDR10' }
    },
    {
      name: 'Sony BRAVIA 8 55" 4K HDR OLED Google TV',
      slug: 'sony-bravia-8-55-4k-hdr-oled-google-tv',
      description: '55-inch OLED masterpiece: XR Triluminos Pro, Perfect for PlayStation 5 with Auto HDR Tone Mapping, ultra-slim seamless one-slate design.',
      price: 1899,
      discount_price: 1699,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 175,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', ScreenSize: '55 Inch', Panel: 'OLED', Processor: 'XR Processor', SmartOS: 'Google TV' }
    },
    {
      name: 'Sony BRAVIA 7 75" QLED Mini LED 4K HDR Google TV',
      slug: 'sony-bravia-7-75-qled-mini-led-4k-hdr-google-tv',
      description: 'Premium home theater performance: XR Backlight Master Drive with Mini LED, XR Contrast Booster 20, Game Menu with crosshair overlay.',
      price: 2699,
      discount_price: 2499,
      stock: 18,
      image_url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 140,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', ScreenSize: '75 Inch', Panel: 'Mini LED QLED', Gaming: '4K 120Hz HDMI 2.1' }
    },
    {
      name: 'Sony BRAVIA 7 65" QLED Mini LED 4K HDR Google TV',
      slug: 'sony-bravia-7-65-qled-mini-led-4k-hdr-google-tv',
      description: '65-inch Mini LED TV offering high contrast, vivid color volume, and Apple AirPlay 2 / Chromecast built-in.',
      price: 1999,
      discount_price: 1799,
      stock: 24,
      image_url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 190,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', ScreenSize: '65 Inch', Panel: 'Mini LED QLED', Audio: 'Acoustic Multi-Audio' }
    },
    {
      name: 'Sony BRAVIA Theatre Quad Wireless Home Theater Audio System',
      slug: 'sony-bravia-theatre-quad-wireless-home-theater-audio-system',
      description: 'Four ultra-slim wireless speakers synthesize up to 16 phantom speakers around your room via 360 Spatial Sound Mapping: 16 total drivers, Dolby Atmos, DTS:X, and wireless control box.',
      price: 2499,
      discount_price: 2299,
      stock: 15,
      image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 88,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Speakers: '4 Wireless Flat Speakers (16 Drivers Total)', Technology: '360 Spatial Sound Mapping (16 Phantom Speakers)', Formats: 'Dolby Atmos, DTS:X, IMAX Enhanced' }
    },
    {
      name: 'Sony BRAVIA Theatre Bar 9 Flagship Soundbar',
      slug: 'sony-bravia-theatre-bar-9-flagship-soundbar',
      description: 'Single-bar audio masterpiece: 13 speaker units including up-firing drivers, side beam tweeters, quad subwoofers, 360 Spatial Sound Mapping, Acoustic Center Sync with BRAVIA TVs.',
      price: 1399,
      discount_price: 1299,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 145,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Drivers: '13 Speaker Units', Formats: 'Dolby Atmos, DTS:X', TVSync: 'Acoustic Center Sync & Voice Zoom 3' }
    },
    {
      name: 'Sony BRAVIA Theatre Bar 8 Soundbar',
      slug: 'sony-bravia-theatre-bar-8-soundbar',
      description: 'Compact 11-driver premium soundbar with up-firing height channels, 360 Spatial Sound Mapping, HDMI eARC with 8K and 4K 120Hz passthrough.',
      price: 999,
      discount_price: 899,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 110,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Drivers: '11 Speaker Units', Audio: 'Dolby Atmos & DTS:X', Passthrough: '4K 120Hz & 8K HDMI Passthrough' }
    },
    {
      name: 'Sony HT-A9000 Flagship Dolby Atmos Soundbar',
      slug: 'sony-ht-a9000-flagship-dolby-atmos-soundbar',
      description: 'Immersive soundbar featuring X-Balanced speaker units, integrated voice assistant, and wireless subwoofer pairing.',
      price: 1299,
      discount_price: 1199,
      stock: 18,
      image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 80,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Audio: 'Dolby Atmos 7.1.2 Virtual', Connection: 'HDMI eARC & Optical' }
    },
    {
      name: 'Sony SA-SW5 300W Wireless Subwoofer',
      slug: 'sony-sa-sw5-300w-wireless-subwoofer',
      description: '300W of deep, seismic bass with 180mm driver and passive radiator: magnetic circuit Sigma for distortion-free bassline reproduction.',
      price: 699,
      discount_price: 599,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 210,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Power: '300W Output', Driver: '180mm Driver with Passive Radiator', Connection: 'Wireless Auto Connect' }
    },
    {
      name: 'Sony SA-RS5 Wireless Rear Speakers with Built-in Battery',
      slug: 'sony-sa-rs5-wireless-rear-speakers-with-built-in-battery',
      description: '180W total wireless rear speakers with up-firing drivers, built-in battery offering 10 hours playback for cordless placement freedom.',
      price: 599,
      discount_price: 549,
      stock: 28,
      image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 175,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Battery: '10 Hours Cordless Battery', Power: '180W (90W x 2)', Drivers: 'Up-Firing Height Drivers' }
    },
    {
      name: 'Sony SRS-RA5000 Premium Wireless Home Speaker',
      slug: 'sony-srs-ra5000-premium-wireless-home-speaker',
      description: 'Ambient room-filling sound with 360 Reality Audio: 7 speaker drivers (3 up-firing, 3 mid, 1 subwoofer), High-Resolution Audio, Wi-Fi and Bluetooth streaming.',
      price: 799,
      discount_price: 699,
      stock: 16,
      image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 95,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Audio: '360 Reality Audio', Drivers: '7 Units (3 Up-Firing)', Streaming: 'Chromecast, Spotify Connect, AirPlay' }
    },
    {
      name: 'Sony STR-AN1000 7.2 Channel 8K AV Receiver',
      slug: 'sony-str-an1000-7-2-channel-8k-av-receiver',
      description: '165W per channel 7.2 AV receiver with 360 Spatial Sound Mapping, Dolby Atmos, DTS:X, dual 8K & 4K 120Hz HDMI outputs, Works with Sonos.',
      price: 899,
      discount_price: 799,
      stock: 14,
      image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 110,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Channels: '7.2 Channel (165W per channel)', Video: '8K / 4K 120Hz Passthrough', Audio: '360 Spatial Sound Mapping' }
    },
    {
      name: 'Sony UBP-X800M2 4K Ultra HD Blu-ray Player',
      slug: 'sony-ubp-x800m2-4k-ultra-hd-blu-ray-player',
      description: 'Reference 4K UHD Blu-ray player: Dolby Vision, HDR10, Hi-Res Audio playback with DSD and SACD support, rigid anti-vibration chassis structure.',
      price: 329,
      discount_price: 299,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 240,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Formats: '4K Ultra HD Blu-ray, SACD, DVD-Audio', HDR: 'Dolby Vision & HDR10', Audio: 'Hi-Res DSD Native' }
    },
    {
      name: 'Sony BRAVIA Theatre U Wearable Personal TV Neckband Speaker',
      slug: 'sony-bravia-theatre-u-wearable-personal-tv-neckband-speaker',
      description: 'Personal Dolby Atmos cinema experience on your shoulders: 360 Spatial Sound without disturbing others, 12-hour battery, dual device pairing.',
      price: 299,
      discount_price: 269,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 130,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Design: 'Ergonomic Neckband Wearable', Battery: '12 Hours with 10m Quick Charge', SpatialAudio: '360 Spatial Sound Personalizer' }
    },

    // --- 5. SONY NOISE-CANCELING AUDIO, WALKMAN & PHONES (21 Models) ---
    {
      name: 'Sony WH-1000XM5 Wireless Noise-Canceling Headphones',
      slug: 'sony-wh-1000xm5-wireless-noise-canceling-headphones',
      description: 'Industry-leading noise cancellation powered by dual V1 & QN1 processors with 8 microphones: carbon fiber composite 30mm drivers, LDAC Hi-Res Audio, 30-hour battery, and Speak-to-Chat.',
      price: 399,
      discount_price: 349,
      stock: 80,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 2400,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', NoiseCanceling: 'Auto NC Optimizer with 8 Microphones', Battery: '30 Hours (3m charge = 3 hours)', Codec: 'LDAC, AAC, SBC, Hi-Res Wireless', Weight: '250g' }
    },
    {
      name: 'Sony WH-1000XM4 Wireless Noise-Canceling Headphones',
      slug: 'sony-wh-1000xm4-wireless-noise-canceling-headphones',
      description: 'Legendary comfort and foldaway design: Dual Noise Sensor technology, Edge-AI DSEE Extreme, multipoint Bluetooth pairing, and 30-hour battery.',
      price: 349,
      discount_price: 279,
      stock: 70,
      image_url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 3800,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Design: 'Swivel & Foldable Travel Case', Battery: '30 Hours', Multipoint: 'Connect 2 Devices Simultaneously' }
    },
    {
      name: 'Sony WF-1000XM5 Truly Wireless Noise-Canceling Earbuds',
      slug: 'sony-wf-1000xm5-truly-wireless-noise-canceling-earbuds',
      description: 'The benchmark in wireless earbuds: Dynamic Driver X for wide frequency reproduction, Integrated Processor V2 + QN2e dual NC chips, bone conduction sensors, and IPX4 water resistance.',
      price: 299,
      discount_price: 269,
      stock: 65,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 1450,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Drivers: '8.4mm Dynamic Driver X', Processors: 'Integrated Processor V2 + HD QN2e', Battery: '8h Buds + 16h Case (24h Total)', WaterResistance: 'IPX4' }
    },
    {
      name: 'Sony WF-C700N Truly Wireless Noise-Canceling Earbuds',
      slug: 'sony-wf-c700n-truly-wireless-noise-canceling-earbuds',
      description: 'Compact pocket case, digital noise canceling with ambient sound mode, DSEE audio upscaling, and multipoint Bluetooth connection.',
      price: 119,
      discount_price: 99,
      stock: 60,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 510,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Battery: '15 Hours with Case', NoiseCanceling: 'Digital NC + Ambient Sound', Weight: '4.6g per Earbud' }
    },
    {
      name: 'Sony LinkBuds S Truly Wireless Noise-Canceling Earbuds',
      slug: 'sony-linkbuds-s-truly-wireless-noise-canceling-earbuds',
      description: 'Ultra-lightweight 4.8g form factor: automatically switches between noise canceling and natural ambient sound, High-Resolution Wireless Audio with LDAC.',
      price: 199,
      discount_price: 149,
      stock: 45,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 620,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Weight: '4.8g (World’s Smallest Hi-Res NC Earbud)', Battery: '20 Hours with Case', Codec: 'LDAC Hi-Res' }
    },
    {
      name: 'Sony LinkBuds Open-Ring Truly Wireless Earbuds',
      slug: 'sony-linkbuds-open-ring-truly-wireless-earbuds',
      description: 'Innovative open ring driver lets you hear your surroundings naturally while enjoying music and podcasts: compact ergonomic fit with all-day comfort.',
      price: 179,
      discount_price: 139,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.6,
      num_reviews: 410,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Design: 'Open Ring Hole Driver (12mm)', Controls: 'Wide Area Tap on Cheek', Battery: '17.5 Hours with Case' }
    },
    {
      name: 'Sony ULT WEAR Wireless Noise-Canceling Bass Headphones',
      slug: 'sony-ult-wear-wireless-noise-canceling-bass-headphones',
      description: 'Engineered for colossal bass: ULT button unlocks two deeper bass profiles (Deep Bass & Attack Bass), Integrated Processor V1, 30-hour battery.',
      price: 199,
      discount_price: 179,
      stock: 50,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 320,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Bass: 'ULT Power Sound Button (2 Modes)', Drivers: '40mm Specially Designed Drivers', Battery: '30 Hours' }
    },
    {
      name: 'Sony ULT FIELD 7 Wireless Heavy Bass Party Speaker',
      slug: 'sony-ult-field-7-wireless-heavy-bass-party-speaker',
      description: 'Unleash party sound: ULT Power Sound, 30-hour battery, IP67 waterproof, dustproof and rustproof, multi-color ambient lighting, guitar and karaoke mic input.',
      price: 499,
      discount_price: 449,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 140,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Durability: 'IP67 Waterproof, Dustproof, Rustproof', Battery: '30 Hours with Quick Charge', Inputs: 'Guitar / Mic Input' }
    },
    {
      name: 'Sony ULT FIELD 1 Portable Bluetooth Speaker',
      slug: 'sony-ult-field-1-portable-bluetooth-speaker',
      description: 'Compact grab-and-go speaker with explosive bass: IP67 waterproof & shockproof, 12-hour battery life, multi-way strap, hands-free speakerphone.',
      price: 129,
      discount_price: 99,
      stock: 65,
      image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 290,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Durability: 'IP67 & Shockproof', Battery: '12 Hours', Bass: 'ULT Power Bass Button' }
    },
    {
      name: 'Sony ULT TOWER 10 High-Power Wireless Party Audio Tower',
      slug: 'sony-ult-tower-10-high-power-wireless-party-audio-tower',
      description: 'Ultimate house-party sound system: 360-degree party sound with omnidirectional sound field, 360-degree party light show, included wireless microphone, and TV Sound Booster mode.',
      price: 1199,
      discount_price: 999,
      stock: 12,
      image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 65,
      is_featured: true,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Audio: 'Omnidirectional 360 Party Sound', Lighting: 'Synchronized 360 Party Lights', Mic: 'Wireless Microphone Included', Wheels: 'Built-in Transport Wheels' }
    },
    {
      name: 'Sony SRS-XG300 Portable Wireless Bluetooth Speaker',
      slug: 'sony-srs-xg300-portable-wireless-bluetooth-speaker',
      description: 'X-Balanced speaker units with Mega Bass: 25-hour battery, IP67 waterproof rating, ambient LED ring illumination, and retractable carry handle.',
      price: 349,
      discount_price: 249,
      stock: 30,
      image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 190,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Battery: '25 Hours', Durability: 'IP67 Waterproof', Speakers: 'X-Balanced with Front Tweeters' }
    },
    {
      name: 'Sony SRS-XB100 Compact Bluetooth Wireless Speaker',
      slug: 'sony-srs-xb100-compact-bluetooth-wireless-speaker',
      description: 'Pocket-sized powerhouse with Sound Diffusion Processor, Extra Bass, 16-hour battery, UV-coating, and IP67 waterproof protection.',
      price: 59,
      discount_price: 49,
      stock: 90,
      image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 820,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Battery: '16 Hours', Durability: 'IP67 Waterproof & Dustproof', Strap: 'Multiway Carry Strap' }
    },
    {
      name: 'Sony Walkman NW-WM1ZM2 Signature Series Hi-Res Player',
      slug: 'sony-walkman-nw-wm1zm2-signature-series-hi-res-player',
      description: 'Crown jewel of audiophile audio: 99.99% pure Oxygen-Free Copper gold-plated chassis, Kimber Kable internal wiring, S-Master HX digital amplifier, balanced 4.4mm headphone jack, and 40-hour playback.',
      price: 3699,
      discount_price: 3499,
      stock: 8,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      num_reviews: 48,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Chassis: '99.99% Oxygen-Free Gold-Plated Copper', Amp: 'S-Master HX Full Digital', Output: 'Balanced 4.4mm + Unbalanced 3.5mm', Storage: '256GB Built-in + MicroSD' }
    },
    {
      name: 'Sony Walkman NW-WM1AM2 Premium Hi-Res Digital Player',
      slug: 'sony-walkman-nw-wm1am2-premium-hi-res-digital-player',
      description: 'Solid aluminum alloy frame, DSD Remastering Engine, DSEE Ultimate with Edge-AI, Android OS with Wi-Fi streaming apps, and 40 hours battery.',
      price: 1399,
      discount_price: 1299,
      stock: 15,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 95,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Chassis: 'Rigid Aluminum Alloy Frame', Screen: '5.0" HD Touchscreen', OS: 'Android with Google Play' }
    },
    {
      name: 'Sony Walkman NW-ZX707 High-End Streaming Audio Player',
      slug: 'sony-walkman-nw-zx707-high-end-streaming-audio-player',
      description: 'Milled aluminum block with audiophile capacitors: balanced 4.4mm and 3.5mm outputs, DSD 11.2MHz native playback, USB-DAC functionality, and 25-hour battery.',
      price: 899,
      discount_price: 799,
      stock: 22,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 140,
      is_featured: false,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Display: '5.0" 720p HD Display', Audio: 'Native DSD 11.2MHz / PCM 384kHz', Battery: '25 Hours' }
    },
    {
      name: 'Sony Walkman NW-A306 Compact Hi-Res Audio Player',
      slug: 'sony-walkman-nw-a306-compact-hi-res-audio-player',
      description: 'Pocketable 113g music player: 3.6-inch touchscreen, LDAC and DSEE Ultimate, Wi-Fi streaming, 36 hours playback, and cassette tape UI screen saver.',
      price: 349,
      discount_price: 299,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 280,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Weight: '113g Pocket Size', Screen: '3.6" Touchscreen', Battery: 'Up to 36 Hours' }
    },
    {
      name: 'Sony Xperia 1 VI 5G Smartphone (512GB, Platinum Silver)',
      slug: 'sony-xperia-1-vi-5g-smartphone-512gb-platinum-silver',
      description: 'Flagship imaging phone: Snapdragon 8 Gen 3, 6.5" 1-120Hz LTPO OLED with Powered by BRAVIA processing, continuous 85-170mm true optical telephoto zoom with telemacro, 4K 120fps video on all 3 rear cameras, and 3.5mm headphone jack with dedicated amp.',
      price: 1399,
      discount_price: 1299,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 310,
      is_featured: true,
      is_trending: true,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Processor: 'Snapdragon 8 Gen 3', OpticalZoom: '85-170mm True Optical Telephoto', Display: '6.5" LTPO OLED 1-120Hz BRAVIA Powered', AudioJack: '3.5mm Hi-Res Audio Jack', Battery: '5000mAh (2-Day Battery Life)' }
    },
    {
      name: 'Sony Xperia 5 V 5G Smartphone (Black, 256GB)',
      slug: 'sony-xperia-5-v-5g-smartphone-black-256gb',
      description: 'Compact 6.1" OLED flagship: Next-gen Exmor T for mobile stacked sensor, Snapdragon 8 Gen 2, front full-stage stereo speakers, and 5000mAh battery.',
      price: 999,
      discount_price: 899,
      stock: 28,
      image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      num_reviews: 190,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Processor: 'Snapdragon 8 Gen 2', Sensor: 'Exmor T for Mobile', Display: '6.1" 21:9 OLED 120Hz' }
    },
    {
      name: 'Sony Xperia 10 VI 5G Smartphone (Light Blue)',
      slug: 'sony-xperia-10-vi-5g-smartphone-light-blue',
      description: 'Super-lightweight 164g battery endurance champion: 2-day battery life, IP68 water resistance, Gorilla Glass Victus, front stereo speakers.',
      price: 499,
      discount_price: 449,
      stock: 40,
      image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      num_reviews: 140,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Weight: '164g Ultralight', Battery: '5000mAh (Up to 2 Days)', Durability: 'IP65/68 Water Resistant' }
    },
    {
      name: 'Sony ECM-B1M Compact Shotgun Microphone',
      slug: 'sony-ecm-b1m-compact-shotgun-microphone',
      description: '8 high-performance mic capsules with advanced digital signal processing: 3 selectable directivity patterns (Super-directional, Unidirectional, Omnidirectional), cable-free direct shoe audio.',
      price: 349,
      discount_price: 319,
      stock: 35,
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 220,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', Connection: 'Digital Multi Interface Shoe (No Cables/Batteries)', Patterns: '3 Selectable Directivity Modes', NoiseFilter: 'Digital Noise Cut Filter' }
    },
    {
      name: 'Sony HVL-F60RM2 High-Speed Wireless Radio Control Flash',
      slug: 'sony-hvl-f60rm2-high-speed-wireless-radio-control-flash',
      description: 'Flagship GN60 speedlight: Quick Shift Bounce mechanism, continuous firing up to 20 fps, 1/80,000s high-speed sync support, wireless radio control up to 30m.',
      price: 549,
      discount_price: 499,
      stock: 25,
      image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      num_reviews: 110,
      is_featured: false,
      is_trending: false,
      category_id: categoryId,
      specifications: { Brand: 'Sony', GuideNumber: 'GN60', RecycleTime: '1.7 Seconds', Bounce: 'Quick Shift Bounce System' }
    }
  ];
};
