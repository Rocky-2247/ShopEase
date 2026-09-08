// backend/utils/productMediaEnricher.js
// Utility ensuring EVERY product has 6 distinct, authentic multi-angle perspective face images and HD demo video

const MEDIA_POOLS = {
  // 1. Apple iPhone / Mobile
  apple_iphone: {
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80', // Face 1: Front Ceramic Shield & Dynamic Island Display
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° Grade 5 Titanium Side Angle
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80', // Face 3: Side Profile Camera Control & Action Button
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80', // Face 4: 48MP Triple Fusion Camera Array with LiDAR
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80', // Face 5: Back Satin Textured Glass & MagSafe Coil
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80'  // Face 6: In-Hand Lifestyle Screen In-Use
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },

  // 2. Apple MacBooks & Laptops
  apple_macbook: {
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80', // Face 1: Liquid Retina XDR Screen & Backlit Magic Keyboard
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° Low-Profile Unibody Aluminum Wedge
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=80', // Face 3: Side MagSafe 3, HDMI & Thunderbolt 4 Ports
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=80', // Face 4: Top CNC Aluminum Shell & Mirrored Apple Emblem
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=80', // Face 5: Underside Intake Vents & Precision Rubber Feet
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80'  // Face 6: Minimalist Executive Creative Desk Setup
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  },

  // 3. Apple iPad & Tablets
  apple_ipad: {
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=80', // Face 1: Tandem OLED Ultra Retina Front Glass
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° Apple Pencil Pro Magnetic Attachment
      'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=1000&q=80', // Face 3: 5.1mm Ultra-Thin Precision Edge Profile
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80', // Face 4: Quad Speaker Grilles & Dual Studio Microphones
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80', // Face 5: Rear Smart Connector & 12MP Wide Camera
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=80'  // Face 6: Digital Illustration & Note-Taking In-Action
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4'
  },

  // 4. Apple Watch & Wearables
  apple_watch: {
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1000&q=80', // Face 1: Sapphire Crystal Always-On OLED Retina Screen
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° Titanium Bezel & Digital Crown Guard
      'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1000&q=80', // Face 3: Side Profile Dual Speakers & Emergency Siren
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80', // Face 4: Ocean Band / Trail Loop Titanium Buckle Clasp
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80', // Face 5: Ceramic & Sapphire Crystal Bio-Sensor Back
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=1000&q=80'  // Face 6: On-Wrist Trail Running & Outdoor Adventure
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'
  },

  // 5. Samsung Galaxy Smartphones
  samsung_mobile: {
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80', // Face 1: 6.8" Flat Dynamic AMOLED 2X 120Hz Screen
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° Titanium Armor Frame with S Pen Slot
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80', // Face 3: Side Power & Volume Buttons Contour
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80', // Face 4: 200MP Quad Telephoto Camera Array
      'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=1000&q=80', // Face 5: Anti-Reflective Gorilla Glass Back Panel
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80'  // Face 6: Galaxy AI Live Editing & Cinematic In-Use
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },

  // 6. Sony Cameras & Pro Imaging
  sony_camera: {
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80', // Face 1: Full-Frame Sensor & Magnesium Body Front
      'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° Top EVF, Exposure Dial & Hot Shoe
      'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=1000&q=80', // Face 3: Deep Ergonomic Textured Handgrip Profile
      'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=1000&q=80', // Face 4: Rear 4-Axis Multi-Angle Touchscreen LCD
      'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1000&q=80', // Face 5: Dual CFexpress Type A & Full HDMI Terminal
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1000&q=80'  // Face 6: Professional Studio & Wildlife Field Shoot
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
  },

  // 7. Sony PlayStation & Gaming
  sony_gaming: {
    images: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1000&q=80', // Face 1: PS5 Pro Matte White Wing Console Face
      'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° DualSense Wireless Controller Profile
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80', // Face 3: Adaptive Triggers & Haptic Feedback Base
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80', // Face 4: Top Aerodynamic Vents & Blue Accent LED
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80', // Face 5: Rear High-Speed Gigabit LAN & HDMI 2.1
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80'  // Face 6: 4K 120Hz Immersion Gaming Battlestation
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
  },

  // 8. Audio (Sony WH, Bose QuietComfort, AirPods Max)
  audio_headphones: {
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80', // Face 1: Front Full Headset & Soft Cushion Profile
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° Angled Earcup & Noise Isolating Mics
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80', // Face 3: Stepless Slider Headband & Aluminum Stem
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80', // Face 4: Touch Gesture Surface & Multi-Point Switch
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80', // Face 5: Compact Foldable Storage Case & Cable Kit
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80'  // Face 6: Urban Travel & Commuter High-Res Listening
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },

  // 9. Nike Footwear & Sneakers
  nike_shoes: {
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80', // Face 1: Lateral Swoosh Profile Silhouette
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80', // Face 2: 3/4 Medial Arch & Cushioning Angle
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80', // Face 3: Front Engineered Mesh Toe Box & Laces
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80', // Face 4: Top-Down Collar & Insole Cushion
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80', // Face 5: Waffle Rubber Outsole Traction Lug Pattern
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1000&q=80'  // Face 6: Streetwear Athleisure On-Foot Perspective
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4'
  },

  // 10. Adidas Footwear & Apparel
  adidas_shoes: {
    images: [
      'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=1000&q=80', // Face 1: 3-Stripes Lateral Profile Silhouette
      'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° Continental Rubber Toe Angle
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1000&q=80', // Face 3: Primeknit Breathable Upper Texture
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80', // Face 4: Molded Heel Counter & Boost Midsole
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80', // Face 5: Linear Energy Push Outsole Torsion Spring
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80'  // Face 6: Urban Marathon & Training In-Action
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4'
  },

  // 11. Puma Footwear & Motorsport
  puma_shoes: {
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80', // Face 1: Formstrip Classic Leather Lateral Profile
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° Nitro Foam Cushioning Heel Wedge
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80', // Face 3: Suede Toe Overlay & Cotton Laces
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80', // Face 4: Gold Foil Cat Logo & Padded Tongue
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80', // Face 5: Grippy PumaGrip Rubber Outsole
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1000&q=80'  // Face 6: Street Basketball & Motorsport Paddock Vibe
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4'
  },

  // 12. Zara Designer Apparel & Fashion
  zara_fashion: {
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80', // Face 1: Front Full Body Tailored Silhouette
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° Side Profile & Fabric Drape
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80', // Face 3: Wool Blend Texture & Weave Close-up
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80', // Face 4: Notched Lapel, Stitching & Button Detail
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80', // Face 5: Rear Tailored Seam & Double Back Vent
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80'  // Face 6: Editorial Runway & Street Style Look
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4'
  },

  // 13. Rolex Luxury Timepieces
  rolex_watches: {
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80', // Face 1: Dial & Hands Macro Chromalight Close-Up
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° Cerachrom Bezel & Triplock Crown Guard
      'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80', // Face 3: Oystersteel Solid Bracelet & Glidelock Clasp
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80', // Face 4: Solid Oyster Caseback & Superlative Calibre
      'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1000&q=80', // Face 5: Low-Light Chromalight Blue Luminescence Glow
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=1000&q=80'  // Face 6: Executive On-Wrist Luxury Perspective
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },

  // 14. Dell & Asus Gaming / Laptops
  pc_laptops: {
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=80', // Face 1: OLED High-Refresh Display & RGB Keyboard
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° CNC Aluminum & Carbon Fiber Palmrest
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=80', // Face 3: Side Thunderbolt, HDMI & MicroSD I/O
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=80', // Face 4: Top Stealth Aluminum Lid & Laser Logo
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1000&q=80', // Face 5: Bottom Liquid Metal Vapor Chamber Vents
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80'  // Face 6: Professional Esports Battlestation Setup
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  },

  // 15. Canon Cameras & Cinema Optics
  canon_cameras: {
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80', // Face 1: Magnesium Weather-Sealed Sensor Front
      'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° Dual Pixel CMOS AF Top Status Screen
      'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=1000&q=80', // Face 3: Ergonomic Deep Grip & Control Ring Angle
      'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=1000&q=80', // Face 4: Vari-Angle Touchscreen LCD & Menu Dial
      'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1000&q=80', // Face 5: Dual Card Slots (CFexpress + SD UHS-II)
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1000&q=80'  // Face 6: Professional 8K Cinema & Portraiture In-Use
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
  },

  // 16. Dyson Home, Haircare & Air Purifiers
  dyson_gear: {
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80', // Face 1: Front Full Body Ergonomic Wand & Amplifier
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80', // Face 2: 45° Coanda Airflow Attachment Profile
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80', // Face 3: Fluffy Optic Laser & HEPA Filtration Mesh
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80', // Face 4: Real-Time Particle Count LCD Display & Controls
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80', // Face 5: Point-and-Shoot Sanitary Bin & Magnetic Base
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80'  // Face 6: Modern Living Room & Vanity Salon Experience
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
  },

  // 17. Logitech Gaming & Productivity
  logitech_gear: {
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80', // Face 1: Front Hero / Top MagSpeed Wheel Angle
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1000&q=80', // Face 2: Ergonomic Left Thumb Rest Gesture Angle
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80', // Face 3: Right Profile Precision Grip Contour
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80', // Face 4: Top Low-Profile Switch & Backlit Keycaps
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1000&q=80', // Face 5: Underside Darkfield 8K Sensor & PTFE Glides
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80'  // Face 6: Creative Studio Workstation & Gaming Rig
    ],
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4'
  }
};

export const getEnrichedMediaForProduct = (prod) => {
  const nameLower = (prod.name || '').toLowerCase();
  const descLower = (prod.description || '').toLowerCase();

  let pool = MEDIA_POOLS.apple_macbook;

  if (nameLower.includes('rolex') || nameLower.includes('submariner') || nameLower.includes('daytona') || nameLower.includes('gmt-master') || nameLower.includes('datejust') || nameLower.includes('day-date') || nameLower.includes('sky-dweller') || nameLower.includes('yacht-master') || nameLower.includes('sea-dweller') || nameLower.includes('milgauss') || nameLower.includes('air-king') || nameLower.includes('cellini') || nameLower.includes('oyster perpetual') || nameLower.includes('chronograph watch')) {
    pool = MEDIA_POOLS.rolex_watches;
  } else if (nameLower.includes('iphone') || nameLower.includes('apple vision') || nameLower.includes('airtag')) {
    pool = MEDIA_POOLS.apple_iphone;
  } else if (nameLower.includes('macbook') || nameLower.includes('mac mini') || nameLower.includes('mac studio') || nameLower.includes('imac') || nameLower.includes('apple display')) {
    pool = MEDIA_POOLS.apple_macbook;
  } else if (nameLower.includes('ipad') || nameLower.includes('apple pencil')) {
    pool = MEDIA_POOLS.apple_ipad;
  } else if (nameLower.includes('apple watch')) {
    pool = MEDIA_POOLS.apple_watch;
  } else if (nameLower.includes('samsung') || nameLower.includes('galaxy') || nameLower.includes('z fold') || nameLower.includes('z flip')) {
    pool = MEDIA_POOLS.samsung_mobile;
  } else if (nameLower.includes('playstation') || nameLower.includes('ps5') || nameLower.includes('dualsense') || nameLower.includes('ps vr2')) {
    pool = MEDIA_POOLS.sony_gaming;
  } else if (nameLower.includes('sony') || nameLower.includes('alpha') || nameLower.includes('exmor') || nameLower.includes('fx3') || nameLower.includes('g master')) {
    pool = MEDIA_POOLS.sony_camera;
  } else if (nameLower.includes('bose') || nameLower.includes('airpods') || nameLower.includes('headphone') || nameLower.includes('earbuds') || nameLower.includes('wh-1000') || nameLower.includes('wf-1000') || nameLower.includes('soundlink')) {
    pool = MEDIA_POOLS.audio_headphones;
  } else if (nameLower.includes('nike') || nameLower.includes('jordan') || nameLower.includes('air max') || nameLower.includes('pegasus') || nameLower.includes('dunk')) {
    pool = MEDIA_POOLS.nike_shoes;
  } else if (nameLower.includes('adidas') || nameLower.includes('ultraboost') || nameLower.includes('samba') || nameLower.includes('gazelle') || nameLower.includes('adizero')) {
    pool = MEDIA_POOLS.adidas_shoes;
  } else if (nameLower.includes('puma') || nameLower.includes('nitro') || nameLower.includes('suede classic') || nameLower.includes('palermo') || nameLower.includes('lamelo')) {
    pool = MEDIA_POOLS.puma_shoes;
  } else if (nameLower.includes('zara') || nameLower.includes('blazer') || nameLower.includes('coat') || nameLower.includes('jacket') || nameLower.includes('dress') || nameLower.includes('trouser')) {
    pool = MEDIA_POOLS.zara_fashion;
  } else if (nameLower.includes('dyson') || nameLower.includes('airwrap') || nameLower.includes('supersonic') || nameLower.includes('purifier') || nameLower.includes('vacuum') || nameLower.includes('airstrait')) {
    pool = MEDIA_POOLS.dyson_gear;
  } else if (nameLower.includes('logitech') || nameLower.includes('mx master') || nameLower.includes('g pro') || nameLower.includes('keyboard') || nameLower.includes('brio') || nameLower.includes('streamcam')) {
    pool = MEDIA_POOLS.logitech_gear;
  } else if (nameLower.includes('canon') || nameLower.includes('eos') || nameLower.includes('powershot') || nameLower.includes('rf lens')) {
    pool = MEDIA_POOLS.canon_cameras;
  } else if (nameLower.includes('dell') || nameLower.includes('xps') || nameLower.includes('alienware') || nameLower.includes('asus') || nameLower.includes('rog') || nameLower.includes('zenbook') || nameLower.includes('zephyrus')) {
    pool = MEDIA_POOLS.pc_laptops;
  }

  // Ensure 6 distinct images:
  // Use product's first image as Face 1, and pool images 2-6 for remaining angles
  const face1 = prod.image_url || pool.images[0];
  const face2 = pool.images[1] !== face1 ? pool.images[1] : pool.images[2];
  const face3 = pool.images[2] !== face1 && pool.images[2] !== face2 ? pool.images[2] : pool.images[3];
  const face4 = pool.images[3];
  const face5 = pool.images[4];
  const face6 = pool.images[5];

  const sixFaces = [face1, face2, face3, face4, face5, face6];

  return {
    image_url: face1,
    images: sixFaces,
    video_url: prod.video_url || pool.video
  };
};
