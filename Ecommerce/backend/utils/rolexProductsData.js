// backend/utils/rolexProductsData.js
// Comprehensive dataset of 145+ Authentic Official Rolex Watch Models across all iconic collections

export const getRolexProducts = (categoryId) => {
  return [
    // =========================================================================
    // 1. ROLEX SUBMARINER & SUBMARINER DATE (14 Models)
    // =========================================================================
    {
      name: 'Rolex Submariner No-Date 41mm (Oystersteel 124060)',
      slug: 'rolex-submariner-no-date-41mm-124060',
      description: 'The quintessential diver\'s watch. Crafted in robust Oystersteel with a black Cerachrom ceramic unidirectional rotatable bezel, striking black dial, luminescent Chromalight display with long-lasting blue glow, and driven by the in-house Calibre 3230 Superlative Chronometer.',
      price: 9100, discount_price: 8650, stock: 15, rating: 5.0, num_reviews: 420, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'Submariner (No-Date)', Reference: '124060', Case_Diameter: '41 mm', Material: 'Oystersteel (904L)', Bezel: 'Unidirectional rotatable 60-minute graduated, Cerachrom insert in black ceramic', Dial: 'Intense Black with Chromalight display', Calibre: 'Rolex Calibre 3230 Automatic', Power_Reserve: 'Approx. 70 Hours', Water_Resistance: '300 metres / 1,000 feet', Bracelet: 'Oyster, three-piece solid links with Oysterlock safety clasp and Rolex Glidelock extension' }
    },
    {
      name: 'Rolex Submariner Date 41mm Black Dial (Oystersteel 126610LN)',
      slug: 'rolex-submariner-date-41mm-126610ln',
      description: 'The world\'s most recognized luxury diving chronometer. Features a date aperture with Cyclops magnifying lens at 3 o\'clock, black Cerachrom bezel with platinum-coated numerals, Oystersteel case, and the high-precision Rolex Calibre 3235 movement.',
      price: 10250, discount_price: 9750, stock: 20, rating: 5.0, num_reviews: 680, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Submariner Date', Reference: '126610LN', Case_Diameter: '41 mm', Material: 'Oystersteel', Bezel: 'Black Cerachrom Ceramic 60-Min', Dial: 'Black with Chromalight Hands & Hour Markers', Calibre: 'Rolex Calibre 3235 Superlative Chronometer', Power_Reserve: '70 Hours', Water_Resistance: '300 metres / 1,000 feet', Bracelet: 'Oystersteel Oyster with Glidelock' }
    },
    {
      name: 'Rolex Submariner Date "Starbucks / Cermit" Green Bezel (Oystersteel 126610LV)',
      slug: 'rolex-submariner-date-starbucks-green-126610lv',
      description: 'The iconic modern successor to the 50th anniversary Kermit. Features an emerald green Cerachrom ceramic bezel paired with an intense black dial, 41mm Oystersteel case, and instantaneous date change.',
      price: 10800, discount_price: 10250, stock: 12, rating: 5.0, num_reviews: 540, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Submariner Date "Starbucks"', Reference: '126610LV', Case_Diameter: '41 mm', Material: 'Oystersteel', Bezel: 'Green Cerachrom Ceramic', Dial: 'Intense Black', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '300m / 1000ft', Bracelet: 'Oyster Bracelet with Glidelock' }
    },
    {
      name: 'Rolex Submariner Date "Hulk" Sunburst Green Dial (Oystersteel 116610LV)',
      slug: 'rolex-submariner-date-hulk-green-116610lv',
      description: 'Legendary collector favorite "The Hulk" featuring an all-green Cerachrom ceramic bezel and shimmering sunburst emerald green dial in an Oystersteel maxi case with Calibre 3135.',
      price: 21500, discount_price: 20500, stock: 6, rating: 5.0, num_reviews: 790, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Submariner Date "Hulk"', Reference: '116610LV', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Green Cerachrom Ceramic', Dial: 'Sunburst Green Dial', Calibre: 'Calibre 3135', Power_Reserve: '48 Hours', Water_Resistance: '300m / 1000ft', Bracelet: 'Oyster Bracelet' }
    },
    {
      name: 'Rolex Submariner Date "Bluesy" Two-Tone Royal Blue (Yellow Rolesor 126613LB)',
      slug: 'rolex-submariner-date-bluesy-two-tone-126613lb',
      description: 'Unmistakable luxury tool watch blending Oystersteel and 18k yellow gold (Yellow Rolesor) with a royal blue Cerachrom bezel and hypnotic sunray blue dial with gold lettering.',
      price: 15600, discount_price: 14850, stock: 10, rating: 5.0, num_reviews: 490, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Submariner Date "Bluesy"', Reference: '126613LB', Case_Diameter: '41 mm', Material: 'Yellow Rolesor (Oystersteel and 18k Yellow Gold)', Bezel: 'Blue Cerachrom with 18k Gold coated numerals', Dial: 'Royal Blue Sunray', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '300m / 1000ft', Bracelet: 'Two-Tone Yellow Rolesor Oyster' }
    },
    {
      name: 'Rolex Submariner Date Two-Tone Black Dial (Yellow Rolesor 126613LN)',
      slug: 'rolex-submariner-date-two-tone-black-126613ln',
      description: 'Sophisticated contrast of 18k yellow gold and Oystersteel, featuring a deep gloss black dial, black Cerachrom bezel with gold markings, and luminous 18k gold hour markers.',
      price: 15600, discount_price: 14900, stock: 10, rating: 4.9, num_reviews: 310, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Submariner Date Two-Tone', Reference: '126613LN', Case_Diameter: '41 mm', Material: 'Yellow Rolesor', Bezel: 'Black Cerachrom Ceramic with Gold inlays', Dial: 'Intense Black', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '300m / 1000ft', Bracelet: 'Yellow Rolesor Oyster' }
    },
    {
      name: 'Rolex Submariner Date "Cookie Monster" Blue Bezel (18k White Gold 126619LB)',
      slug: 'rolex-submariner-date-cookie-monster-white-gold-126619lb',
      description: 'Understated ultra-luxury crafted in solid 18k white gold. Fitted with a rich cobalt blue Cerachrom ceramic bezel and midnight black lacquer dial with solid white gold hands.',
      price: 42000, discount_price: 39900, stock: 5, rating: 5.0, num_reviews: 180, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Submariner Date "Cookie Monster"', Reference: '126619LB', Case_Diameter: '41 mm', Material: '18k White Gold', Bezel: 'Blue Cerachrom Ceramic', Dial: 'Black Lacquer', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '300m / 1000ft', Bracelet: '18k White Gold Oyster with Glidelock' }
    },
    {
      name: 'Rolex Submariner Date 18k Yellow Gold Blue Dial (126618LB)',
      slug: 'rolex-submariner-date-yellow-gold-blue-126618lb',
      description: 'The pinnacle of maritime luxury. Full solid 18k yellow gold construction with a mesmerizing sunray royal blue dial, matching blue Cerachrom ceramic bezel, and hefty solid gold Oyster bracelet.',
      price: 39000, discount_price: 37200, stock: 6, rating: 5.0, num_reviews: 260, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Submariner Date Full Gold', Reference: '126618LB', Case_Diameter: '41 mm', Material: '18k Yellow Gold', Bezel: 'Blue Cerachrom Ceramic', Dial: 'Royal Blue Sunray', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '300m / 1000ft', Bracelet: 'Solid 18k Yellow Gold Oyster' }
    },
    {
      name: 'Rolex Submariner Date 18k Yellow Gold Black Dial (126618LN)',
      slug: 'rolex-submariner-date-yellow-gold-black-126618ln',
      description: 'Full solid 18k yellow gold case paired with an intense black dial and matching black Cerachrom bezel for a majestic, authoritative presence.',
      price: 39000, discount_price: 37200, stock: 5, rating: 4.9, num_reviews: 195, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Submariner Date Full Gold Black', Reference: '126618LN', Case_Diameter: '41 mm', Material: '18k Yellow Gold', Bezel: 'Black Cerachrom Ceramic', Dial: 'Intense Black', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '300m / 1000ft', Bracelet: 'Solid 18k Yellow Gold Oyster' }
    },
    {
      name: 'Rolex Submariner Date "Smurf" 18k White Gold Blue Dial (116619LB)',
      slug: 'rolex-submariner-date-smurf-white-gold-116619lb',
      description: 'The coveted predecessor "Smurf" crafted in 18k white gold featuring a flat electric blue lacquered dial and matching blue ceramic bezel.',
      price: 38500, discount_price: 36900, stock: 4, rating: 5.0, num_reviews: 210, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Submariner Date "Smurf"', Reference: '116619LB', Case_Diameter: '40 mm', Material: '18k White Gold', Bezel: 'Blue Cerachrom Ceramic', Dial: 'Flat Electric Blue', Calibre: 'Calibre 3135', Power_Reserve: '48 Hours', Water_Resistance: '300m / 1000ft', Bracelet: '18k White Gold Oyster' }
    },
    {
      name: 'Rolex Submariner Military "MilSub" Heritage Tribute (Ref. 5513 Edition)',
      slug: 'rolex-submariner-milsub-heritage-5513',
      description: 'Historical homage to the British Royal Navy MilSub with sword hands, full 60-minute graduated aluminum bezel, fixed spring bars, and vintage T-circle dial marking.',
      price: 28500, discount_price: 27000, stock: 3, rating: 5.0, num_reviews: 140, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Submariner "MilSub" Heritage', Reference: '5513-MIL', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Full 60-Min Graduated Black Bezel', Dial: 'Matte Black with Sword Hands', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '300m / 1000ft', Bracelet: 'NATO & Oystersteel Bracelet' }
    },
    {
      name: 'Rolex Submariner Date "Red Sub" Heritage Single Red 1680 Edition',
      slug: 'rolex-submariner-date-red-sub-single-red-1680',
      description: 'Tribute to the first Submariner with a date window from 1969, featuring the iconic single red "SUBMARINER" text on the matte dial with warm vintage patina hour plots.',
      price: 24500, discount_price: 23200, stock: 4, rating: 5.0, num_reviews: 165, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Submariner Date "Red Sub"', Reference: '1680-HERITAGE', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Black Ceramic Bezel', Dial: 'Matte Black with Single Red Script', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '300m / 1000ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Submariner Date 50th Anniversary "Kermit" Flat 4 (16610LV)',
      slug: 'rolex-submariner-date-kermit-anniversary-16610lv',
      description: 'The original 2003 50th anniversary reference with olive-green aluminum bezel insert, maxi dial indices, and classic 40mm proportions with Rolex Calibre 3135.',
      price: 18500, discount_price: 17500, stock: 5, rating: 5.0, num_reviews: 380, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Submariner "Kermit"', Reference: '16610LV', Case_Diameter: '40 mm', Material: 'Oystersteel (904L)', Bezel: 'Anniversary Olive Green Aluminum Insert', Dial: 'Gloss Black Maxi Dial', Calibre: 'Calibre 3135', Power_Reserve: '48 Hours', Water_Resistance: '300m / 1000ft', Bracelet: 'Oyster with Fliplock Clasp' }
    },
    {
      name: 'Rolex Submariner Date Bespoke Diamond & Sapphire Pavé Edition',
      slug: 'rolex-submariner-date-bespoke-diamond-sapphire-pave',
      description: 'Master jeweler edition featuring baguette-cut blue sapphires and brilliant-cut diamonds across the rotating bezel and lugs, set on a solid 18k white gold case.',
      price: 68000, discount_price: 64500, stock: 2, rating: 5.0, num_reviews: 75, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Submariner Date Haute Joaillerie', Reference: '126619-GEM', Case_Diameter: '41 mm', Material: '18k White Gold with Diamonds', Bezel: 'Baguette Blue Sapphire & Diamond Set', Dial: 'Full Diamond Pavé Dial', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '300m / 1000ft', Bracelet: '18k White Gold Oyster' }
    },

    // =========================================================================
    // 2. ROLEX COSMOGRAPH DAYTONA (18 Models)
    // =========================================================================
    {
      name: 'Rolex Cosmograph Daytona "Panda" White Dial (Oystersteel 126500LN)',
      slug: 'rolex-cosmograph-daytona-panda-white-126500ln',
      description: 'The holy grail of modern chronographs. Features an iconic white lacquer dial with contrasting black snailed chronograph rings ("Panda"), black monobloc Cerachrom ceramic bezel with molded tachymetric scale in platinum, and the latest generation in-house Calibre 4131 with Chronergy escapement.',
      price: 15100, discount_price: 14400, stock: 8, rating: 5.0, num_reviews: 1250, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'Cosmograph Daytona "Panda"', Reference: '126500LN', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Black Cerachrom with Tachymeter', Dial: 'White Lacquer with Black Subdials', Calibre: 'Rolex Calibre 4131 Superlative Chronometer', Power_Reserve: '72 Hours', Water_Resistance: '100 metres / 330 feet', Bracelet: 'Oystersteel Oyster with Easylink' }
    },
    {
      name: 'Rolex Cosmograph Daytona "Reverse Panda" Black Dial (Oystersteel 126500LN)',
      slug: 'rolex-cosmograph-daytona-reverse-panda-black-126500ln',
      description: 'Stealth racing perfection. Intense black gloss dial with silver-edged white subdial counters, black Cerachrom bezel, and refined case geometry with Calibre 4131 column-wheel chronograph.',
      price: 15100, discount_price: 14400, stock: 10, rating: 5.0, num_reviews: 980, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Cosmograph Daytona Black', Reference: '126500LN-0002', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Black Cerachrom Ceramic Tachymeter', Dial: 'Intense Black with Silver Subdials', Calibre: 'Rolex Calibre 4131', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Cosmograph Daytona "Ghost" 18k White Gold Oysterflex (126519LN)',
      slug: 'rolex-cosmograph-daytona-ghost-white-gold-126519ln',
      description: 'Nicknamed "The Ghost", this striking chronograph combines an 18k white gold case, steel-grey sunray dial with black subdials, black Cerachrom tachymetric bezel, and the patented Oysterflex high-performance elastomer bracelet.',
      price: 32500, discount_price: 31000, stock: 6, rating: 5.0, num_reviews: 620, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Cosmograph Daytona "Ghost"', Reference: '126519LN', Case_Diameter: '40 mm', Material: '18k White Gold', Bezel: 'Black Cerachrom Ceramic', Dial: 'Steel & Bright Black Sunray', Calibre: 'Calibre 4131', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oysterflex High-Performance Elastomer' }
    },
    {
      name: 'Rolex Cosmograph Daytona "John Mayer / Pikachu" Green Dial (18k Yellow Gold 116508)',
      slug: 'rolex-cosmograph-daytona-john-mayer-green-116508',
      description: 'One of the most celebrated modern grails in horology. Solid 18k yellow gold case and bracelet with an electric emerald green sunburst dial accented by red subdial borders and gold hands.',
      price: 78000, discount_price: 74500, stock: 3, rating: 5.0, num_reviews: 840, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Cosmograph Daytona "John Mayer"', Reference: '116508-GREEN', Case_Diameter: '40 mm', Material: '18k Yellow Gold', Bezel: 'Engraved 18k Yellow Gold Tachymetric Scale', Dial: 'Emerald Green Sunburst with Red Accents', Calibre: 'Calibre 4130', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 18k Yellow Gold Oyster' }
    },
    {
      name: 'Rolex Cosmograph Daytona "Le Mans" 100th Anniversary Edition (18k White Gold 126529LN)',
      slug: 'rolex-cosmograph-daytona-le-mans-100th-anniversary-126529ln',
      description: 'Created to honor the centenary of the 24 Hours of Le Mans endurance race. Features a red ceramic "100" marker on the black Cerachrom bezel, Paul Newman-style vintage subdial font, open sapphire crystal caseback, and exclusive Calibre 4132 with 24-hour chronograph counter.',
      price: 95000, discount_price: 89500, stock: 2, rating: 5.0, num_reviews: 950, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Cosmograph Daytona "Le Mans 100th"', Reference: '126529LN', Case_Diameter: '40 mm', Material: '18k White Gold', Bezel: 'Black Cerachrom with Red Ceramic "100" Marker', Dial: 'Reverse Panda Vintage Exotic Subdials', Calibre: 'Rolex Calibre 4132 (24-Hour Chronograph)', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k White Gold Oyster', Caseback: 'Exhibition Sapphire Crystal' }
    },
    {
      name: 'Rolex Cosmograph Daytona 950 Platinum Ice Blue Dial (126506)',
      slug: 'rolex-cosmograph-daytona-platinum-ice-blue-126506',
      description: 'The heavyweight monarch of Rolex sports watches. Crafted in solid 950 platinum with the exclusive ice blue sunray dial, chestnut brown Cerachrom bezel, brown subdial rings, and a transparent sapphire crystal exhibition caseback showcasing Calibre 4131 with 18k yellow gold oscillating weight.',
      price: 82000, discount_price: 78500, stock: 4, rating: 5.0, num_reviews: 430, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Cosmograph Daytona Platinum', Reference: '126506', Case_Diameter: '40 mm', Material: '950 Platinum', Bezel: 'Chestnut Brown Cerachrom Ceramic', Dial: 'Ice Blue Sunray Dial', Calibre: 'Rolex Calibre 4131', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 950 Platinum Oyster', Caseback: 'Transparent Exhibition Sapphire Crystal' }
    },
    {
      name: 'Rolex Cosmograph Daytona Platinum Ice Blue Baguette Diamond Markers (126506TBR)',
      slug: 'rolex-cosmograph-daytona-platinum-ice-blue-baguette-126506tbr',
      description: 'Solid 950 platinum with ice blue dial elevated by 11 baguette-cut diamond hour indices, chestnut brown Cerachrom bezel, and sapphire caseback.',
      price: 98000, discount_price: 94000, stock: 3, rating: 5.0, num_reviews: 290, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Daytona Platinum Baguette Diamond', Reference: '126506-0002', Case_Diameter: '40 mm', Material: '950 Platinum', Bezel: 'Chestnut Brown Cerachrom', Dial: 'Ice Blue with Baguette Diamond Hour Markers', Calibre: 'Calibre 4131', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: '950 Platinum Oyster' }
    },
    {
      name: 'Rolex Cosmograph Daytona 18k Everose Gold Sundust Dial (126505)',
      slug: 'rolex-cosmograph-daytona-everose-gold-sundust-126505',
      description: 'Rolex exclusive 18k Everose gold case and bracelet, paired with a shimmering sundust dial and black snailed subdials, powered by Calibre 4131.',
      price: 43500, discount_price: 41800, stock: 5, rating: 5.0, num_reviews: 380, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Daytona Everose Gold', Reference: '126505', Case_Diameter: '40 mm', Material: '18k Everose Gold', Bezel: '18k Everose Gold Engraved Tachymeter', Dial: 'Sundust and Bright Black', Calibre: 'Calibre 4131', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k Everose Gold Oyster' }
    },
    {
      name: 'Rolex Cosmograph Daytona Everose Gold Chocolate & Black Dial Oysterflex (126515LN)',
      slug: 'rolex-cosmograph-daytona-everose-chocolate-oysterflex-126515ln',
      description: 'Sensational combination of 18k Everose gold, rich chocolate sunburst dial with black subdials, black Cerachrom bezel, and comfortable Oysterflex bracelet.',
      price: 33500, discount_price: 32000, stock: 6, rating: 5.0, num_reviews: 410, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Daytona Everose Oysterflex', Reference: '126515LN', Case_Diameter: '40 mm', Material: '18k Everose Gold', Bezel: 'Black Cerachrom Ceramic', Dial: 'Chocolate Sunburst with Black Subdials', Calibre: 'Calibre 4131', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oysterflex Elastomer' }
    },
    {
      name: 'Rolex Cosmograph Daytona 18k Yellow Gold Champagne Dial (126508)',
      slug: 'rolex-cosmograph-daytona-yellow-gold-champagne-126508',
      description: 'Solid 18k yellow gold casing and bracelet paired with a classic champagne sunray dial and black subdials for pure motorsport distinction.',
      price: 40500, discount_price: 38800, stock: 7, rating: 4.9, num_reviews: 320, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Daytona Yellow Gold Champagne', Reference: '126508-0001', Case_Diameter: '40 mm', Material: '18k Yellow Gold', Bezel: 'Engraved 18k Gold Tachymeter', Dial: 'Champagne with Black Subdials', Calibre: 'Calibre 4131', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 18k Yellow Gold Oyster' }
    },
    {
      name: 'Rolex Cosmograph Daytona Two-Tone White Dial (Yellow Rolesor 126503)',
      slug: 'rolex-cosmograph-daytona-two-tone-white-126503',
      description: 'Oystersteel and 18k yellow gold fusion with a crisp white dial, yellow gold hands and hour markers, yellow gold engraved tachymeter bezel, and two-tone Oyster bracelet.',
      price: 19500, discount_price: 18600, stock: 8, rating: 4.9, num_reviews: 290, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Daytona Two-Tone White', Reference: '126503-WHITE', Case_Diameter: '40 mm', Material: 'Yellow Rolesor (Oystersteel & 18k Gold)', Bezel: '18k Gold Engraved Bezel', Dial: 'White Lacquer with Gold Rings', Calibre: 'Calibre 4131', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Two-Tone Yellow Rolesor Oyster' }
    },
    {
      name: 'Rolex Cosmograph Daytona Two-Tone Black Dial (Yellow Rolesor 126503)',
      slug: 'rolex-cosmograph-daytona-two-tone-black-126503',
      description: 'Deep glossy black dial contrasted against 18k yellow gold chronograph subdials and indices, mounted on an Oystersteel and 18k yellow gold case.',
      price: 19500, discount_price: 18600, stock: 7, rating: 4.9, num_reviews: 260, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Daytona Two-Tone Black', Reference: '126503-BLACK', Case_Diameter: '40 mm', Material: 'Yellow Rolesor', Bezel: '18k Gold Tachymeter', Dial: 'Black with Gold Snailed Rings', Calibre: 'Calibre 4131', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Yellow Rolesor Oyster' }
    },
    {
      name: 'Rolex Cosmograph Daytona "Meteorite Dial" 18k White Gold (116519LN Meteorite)',
      slug: 'rolex-cosmograph-daytona-meteorite-white-gold-116519ln',
      description: 'Extraterrestrial luxury featuring an authentic Gibeon meteorite slice dial with unique natural Widmanstätten crystalline patterns, black Cerachrom bezel, and Oysterflex bracelet.',
      price: 86000, discount_price: 82000, stock: 2, rating: 5.0, num_reviews: 490, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Daytona Meteorite Dial', Reference: '116519LN-METEOR', Case_Diameter: '40 mm', Material: '18k White Gold', Bezel: 'Black Cerachrom Ceramic', Dial: 'Authentic Gibeon Meteorite with Black Subdials', Calibre: 'Calibre 4130', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oysterflex Elastomer' }
    },
    {
      name: 'Rolex Cosmograph Daytona "Rainbow" Gem-Set Bezel (18k Everose Gold 116595RBOW)',
      slug: 'rolex-cosmograph-daytona-rainbow-everose-116595rbow',
      description: 'The pinnacle of high-jewelry horology. Set with 36 baguette-cut sapphires in a gradient rainbow spectrum around the bezel, 56 brilliant-cut diamonds on the case and lugs, and 11 baguette sapphire hour markers.',
      price: 240000, discount_price: 228000, stock: 1, rating: 5.0, num_reviews: 1400, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Cosmograph Daytona "Rainbow"', Reference: '116595RBOW', Case_Diameter: '40 mm', Material: '18k Everose Gold with Pavé Diamonds', Bezel: '36 Baguette Gradient Colored Sapphires', Dial: 'Black Lacquer with Gold Crystals & Baguette Sapphires', Calibre: 'Calibre 4130', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k Everose Gold Oyster' }
    },
    {
      name: 'Rolex Cosmograph Daytona "Eye of the Tiger" Gem-Set (18k Yellow Gold 116588TBR)',
      slug: 'rolex-cosmograph-daytona-eye-of-the-tiger-116588tbr',
      description: 'Extraordinary exotic masterpiece featuring 36 trapeze-cut diamonds on the bezel and a yellow gold and black lacquer wave dial paved with 243 diamonds reminiscent of a tiger\'s coat.',
      price: 185000, discount_price: 175000, stock: 1, rating: 5.0, num_reviews: 670, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Daytona "Eye of the Tiger"', Reference: '116588TBR', Case_Diameter: '40 mm', Material: '18k Yellow Gold', Bezel: '36 Trapeze-Cut Diamonds', Dial: 'Tiger Wave Motif with Diamonds & Black Lacquer', Calibre: 'Calibre 4130', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oysterflex High-Performance Elastomer' }
    },
    {
      name: 'Rolex Cosmograph Daytona Paul Newman "Exotic Dial" Tribute (Ref. 6239 Heritage)',
      slug: 'rolex-cosmograph-daytona-paul-newman-6239-tribute',
      description: 'Historical tribute to the legendary reference 6239 owned by Paul Newman, featuring art deco font, crosshair subdials with square markers, and stainless steel tachymetric bezel.',
      price: 65000, discount_price: 62000, stock: 2, rating: 5.0, num_reviews: 820, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Daytona "Paul Newman" Tribute', Reference: '6239-HERITAGE', Case_Diameter: '39 mm', Material: 'Oystersteel', Bezel: 'Steel Tachymeter Bezel', Dial: 'Exotic Cream & Black Art Deco Subdials', Calibre: 'Calibre 4131', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Riveted Oystersteel Oyster' }
    },
    {
      name: 'Rolex Cosmograph Daytona 18k Everose Gold Diamond Pavé Dial (126505-PAVE)',
      slug: 'rolex-cosmograph-daytona-everose-diamond-pave-126505',
      description: 'Solid 18k Everose gold with full brilliant-cut diamond paved dial, black snailed sub-counters, and baguette diamond hour indices.',
      price: 62000, discount_price: 59000, stock: 3, rating: 5.0, num_reviews: 190, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Daytona Everose Diamond Pavé', Reference: '126505-PAVE', Case_Diameter: '40 mm', Material: '18k Everose Gold', Bezel: 'Engraved 18k Everose Tachymeter', Dial: 'Full Diamond Pavé Dial with Black Rings', Calibre: 'Calibre 4131', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k Everose Gold Oyster' }
    },
    {
      name: 'Rolex Cosmograph Daytona Yellow Gold Bright Black / Golden Sundust Dial (126518LN)',
      slug: 'rolex-cosmograph-daytona-yellow-gold-black-gold-oysterflex-126518ln',
      description: 'Solid 18k yellow gold case, black Cerachrom bezel, bright black dial with golden champagne subdials, mounted on the sporty Oysterflex bracelet.',
      price: 31500, discount_price: 30000, stock: 5, rating: 4.9, num_reviews: 310, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Daytona Yellow Gold Oysterflex', Reference: '126518LN', Case_Diameter: '40 mm', Material: '18k Yellow Gold', Bezel: 'Black Cerachrom Ceramic', Dial: 'Bright Black with Golden Sundust Subdials', Calibre: 'Calibre 4131', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oysterflex Elastomer' }
    },

    // =========================================================================
    // 3. ROLEX GMT-MASTER II (14 Models)
    // =========================================================================
    {
      name: 'Rolex GMT-Master II "Pepsi" Red & Blue Cerachrom Jubilee (Oystersteel 126710BLRO)',
      slug: 'rolex-gmt-master-ii-pepsi-jubilee-126710blro',
      description: 'The world traveler\'s champion. Bicolor red and blue Cerachrom ceramic 24-hour rotatable bezel ("Pepsi"), black lacquer dial, 24-hour arrow hand in red, five-link Jubilee bracelet, and Rolex Calibre 3285 movement allowing independent local hour setting.',
      price: 10900, discount_price: 10350, stock: 12, rating: 5.0, num_reviews: 1100, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II "Pepsi"', Reference: '126710BLRO', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Bidirectional 24h Red & Blue Cerachrom Ceramic', Dial: 'Black Lacquer with Chromalight display', Calibre: 'Rolex Calibre 3285 Automatic Dual-Time', Power_Reserve: '70 Hours', Water_Resistance: '100 metres / 330 feet', Bracelet: 'Jubilee, five-piece links with Oysterlock' }
    },
    {
      name: 'Rolex GMT-Master II "Pepsi" Red & Blue Cerachrom Oyster (Oystersteel 126710BLRO-Oyster)',
      slug: 'rolex-gmt-master-ii-pepsi-oyster-126710blro',
      description: 'The classic Pepsi GMT configured with the sportier three-piece solid link Oyster bracelet with Easylink 5mm comfort extension link.',
      price: 10700, discount_price: 10150, stock: 14, rating: 5.0, num_reviews: 820, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II "Pepsi" Oyster', Reference: '126710BLRO-0002', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Red & Blue Cerachrom Ceramic', Dial: 'Intense Black', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster Bracelet' }
    },
    {
      name: 'Rolex GMT-Master II "Batgirl" Blue & Black Cerachrom Jubilee (Oystersteel 126710BLNR)',
      slug: 'rolex-gmt-master-ii-batgirl-jubilee-126710blnr',
      description: 'Nicknamed "Batgirl" for its five-link Jubilee bracelet and mesmerizing blue and black Cerachrom ceramic 24-hour bezel with vivid blue GMT hand.',
      price: 10900, discount_price: 10350, stock: 15, rating: 5.0, num_reviews: 990, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II "Batgirl"', Reference: '126710BLNR', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Blue & Black Cerachrom Ceramic', Dial: 'Intense Black with Blue 24h Hand', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Jubilee Five-Link Bracelet' }
    },
    {
      name: 'Rolex GMT-Master II "Batman" Blue & Black Cerachrom Oyster (Oystersteel 126710BLNR-Oyster)',
      slug: 'rolex-gmt-master-ii-batman-oyster-126710blnr',
      description: 'The athletic "Batman" pairing the blue and black Cerachrom bezel with an Oystersteel three-link Oyster bracelet.',
      price: 10700, discount_price: 10150, stock: 12, rating: 5.0, num_reviews: 870, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II "Batman"', Reference: '126710BLNR-0002', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Blue & Black Cerachrom', Dial: 'Intense Black', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster Bracelet' }
    },
    {
      name: 'Rolex GMT-Master II "Sprite / Destro" Left-Handed Green & Black (Oystersteel 126720VTNR)',
      slug: 'rolex-gmt-master-ii-sprite-destro-126720vtnr',
      description: 'Revolutionary left-handed (Destro) edition with the winding crown and date aperture positioned at 9 o\'clock, green and black Cerachrom bezel, and green 24-hour arrow hand on Oyster bracelet.',
      price: 11250, discount_price: 10700, stock: 10, rating: 5.0, num_reviews: 740, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II "Sprite Destro"', Reference: '126720VTNR', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Green & Black Cerachrom Ceramic', Dial: 'Black with Crown & Date at 9 O\'clock', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster Bracelet' }
    },
    {
      name: 'Rolex GMT-Master II "Sprite" Left-Handed Jubilee Bracelet (Oystersteel 126720VTNR-Jubilee)',
      slug: 'rolex-gmt-master-ii-sprite-jubilee-126720vtnr',
      description: 'The left-handed green and black Sprite GMT matched with the comfortable and dressy five-link Jubilee bracelet.',
      price: 11450, discount_price: 10900, stock: 9, rating: 5.0, num_reviews: 630, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II "Sprite Jubilee"', Reference: '126720VTNR-0002', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Green & Black Cerachrom', Dial: 'Black with 9 O\'clock Crown', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Jubilee Five-Link Bracelet' }
    },
    {
      name: 'Rolex GMT-Master II "Bruce Wayne" Grey & Black Cerachrom Jubilee (Oystersteel 126710GRNR)',
      slug: 'rolex-gmt-master-ii-bruce-wayne-jubilee-126710grnr',
      description: 'Latest 2024 novelty "Bruce Wayne" featuring a two-color grey and black Cerachrom bezel, green 24-hour hand and "GMT-Master II" green dial text, fitted to a Jubilee bracelet.',
      price: 10900, discount_price: 10350, stock: 14, rating: 5.0, num_reviews: 860, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II "Bruce Wayne"', Reference: '126710GRNR', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Grey & Black Cerachrom Ceramic 24h', Dial: 'Intense Black with Green Script', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Jubilee Five-Piece Bracelet' }
    },
    {
      name: 'Rolex GMT-Master II "Bruce Wayne" Oyster Bracelet (Oystersteel 126710GRNR-Oyster)',
      slug: 'rolex-gmt-master-ii-bruce-wayne-oyster-126710grnr',
      description: 'The subtle monochrome grey-and-black Cerachrom "Bruce Wayne" mounted on a robust Oystersteel Oyster bracelet.',
      price: 10700, discount_price: 10150, stock: 11, rating: 4.9, num_reviews: 520, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II "Bruce Wayne" Oyster', Reference: '126710GRNR-0002', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Grey & Black Cerachrom', Dial: 'Black with Green 24h Hand', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster Bracelet' }
    },
    {
      name: 'Rolex GMT-Master II "Root Beer" Two-Tone Everose Rolesor (126711CHNR)',
      slug: 'rolex-gmt-master-ii-root-beer-two-tone-126711chnr',
      description: 'Warm luxury aesthetic blending Oystersteel and 18k Everose gold, featuring a black and brown Cerachrom bezel ("Root Beer"), black dial with Everose gold indices and hands.',
      price: 16150, discount_price: 15350, stock: 8, rating: 5.0, num_reviews: 710, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II "Root Beer"', Reference: '126711CHNR', Case_Diameter: '40 mm', Material: 'Everose Rolesor (Oystersteel & 18k Everose Gold)', Bezel: 'Brown & Black Cerachrom Ceramic', Dial: 'Intense Black with Everose Gold Markers', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Everose Rolesor Oyster' }
    },
    {
      name: 'Rolex GMT-Master II "Root Beer" Full 18k Everose Gold (126715CHNR)',
      slug: 'rolex-gmt-master-ii-root-beer-full-everose-126715chnr',
      description: 'Heavy solid 18k Everose gold case and Oyster bracelet paired with the brown and black Cerachrom bezel and 18k Everose gold hands.',
      price: 41500, discount_price: 39500, stock: 4, rating: 5.0, num_reviews: 380, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II Full Everose Gold', Reference: '126715CHNR', Case_Diameter: '40 mm', Material: 'Solid 18k Everose Gold', Bezel: 'Brown & Black Cerachrom Ceramic', Dial: 'Black with Everose Gold Markers', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 18k Everose Gold Oyster' }
    },
    {
      name: 'Rolex GMT-Master II 18k Yellow Gold Grey & Black Bezel Jubilee (126718GRNR)',
      slug: 'rolex-gmt-master-ii-yellow-gold-grey-black-jubilee-126718grnr',
      description: 'Radiant solid 18k yellow gold GMT with two-tone grey and black Cerachrom bezel, black lacquer dial, and solid 18k yellow gold Jubilee bracelet.',
      price: 39500, discount_price: 37600, stock: 4, rating: 5.0, num_reviews: 290, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II Yellow Gold Jubilee', Reference: '126718GRNR', Case_Diameter: '40 mm', Material: 'Solid 18k Yellow Gold', Bezel: 'Grey & Black Cerachrom', Dial: 'Intense Black', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 18k Yellow Gold Jubilee' }
    },
    {
      name: 'Rolex GMT-Master II Yellow Rolesor Grey & Black Bezel Jubilee (126713GRNR)',
      slug: 'rolex-gmt-master-ii-yellow-rolesor-grey-black-126713grnr',
      description: 'Two-tone Oystersteel and 18k yellow gold pairing with grey and black ceramic bezel, gold crown, and two-tone Jubilee bracelet.',
      price: 16450, discount_price: 15650, stock: 7, rating: 4.9, num_reviews: 340, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II Yellow Rolesor', Reference: '126713GRNR', Case_Diameter: '40 mm', Material: 'Yellow Rolesor (Steel & Gold)', Bezel: 'Grey & Black Cerachrom', Dial: 'Intense Black with Gold Accents', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Yellow Rolesor Jubilee' }
    },
    {
      name: 'Rolex GMT-Master II "Meteorite Dial" 18k White Gold Pepsi (126719BLRO-Meteorite)',
      slug: 'rolex-gmt-master-ii-meteorite-white-gold-pepsi-126719blro',
      description: 'Ultra-rare collector\'s GMT in 18k white gold featuring an organic meteorite dial with shimmering galactic textures, red and blue Cerachrom Pepsi bezel, and white gold Oyster bracelet.',
      price: 43500, discount_price: 41500, stock: 3, rating: 5.0, num_reviews: 640, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II White Gold Meteorite', Reference: '126719BLRO-METEOR', Case_Diameter: '40 mm', Material: '18k White Gold', Bezel: 'Red & Blue Cerachrom Pepsi', Dial: 'Natural Gibeon Meteorite', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 18k White Gold Oyster' }
    },
    {
      name: 'Rolex GMT-Master II 18k White Gold Midnight Blue Dial Pepsi (126719BLRO-Blue)',
      slug: 'rolex-gmt-master-ii-white-gold-midnight-blue-pepsi-126719blro',
      description: 'Solid 18k white gold case and Oyster bracelet paired with a deep midnight blue sunray dial and red/blue Pepsi Cerachrom bezel.',
      price: 40500, discount_price: 38500, stock: 4, rating: 5.0, num_reviews: 310, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'GMT-Master II White Gold Blue Dial', Reference: '126719BLRO-0003', Case_Diameter: '40 mm', Material: '18k White Gold', Bezel: 'Red & Blue Cerachrom Ceramic', Dial: 'Midnight Blue Sunray', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k White Gold Oyster' }
    },

    // =========================================================================
    // 4. ROLEX DATEJUST (41mm & 36mm & 31mm) (16 Models)
    // =========================================================================
    {
      name: 'Rolex Datejust 41 "Wimbledon" Slate Dial Fluted Bezel Jubilee (White Rolesor 126334)',
      slug: 'rolex-datejust-41-wimbledon-slate-jubilee-126334',
      description: 'The tennis classic. Slate grey sunray dial with dark green Roman numerals outlined in black, 18k white gold fluted bezel, Oystersteel case, and five-link Jubilee bracelet powered by Calibre 3235.',
      price: 10500, discount_price: 9950, stock: 18, rating: 5.0, num_reviews: 890, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'Datejust 41 "Wimbledon"', Reference: '126334-WIMBLEDON', Case_Diameter: '41 mm', Material: 'White Rolesor (Oystersteel & 18k White Gold)', Bezel: 'Fluted 18k White Gold', Dial: 'Slate with Green Roman Numerals and 9 O\'clock Lume Marker', Calibre: 'Rolex Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100 metres / 330 feet', Bracelet: 'Jubilee Five-Link with Easylink' }
    },
    {
      name: 'Rolex Datejust 41 "Wimbledon" Two-Tone Yellow Gold Fluted Jubilee (Rolesor 126333)',
      slug: 'rolex-datejust-41-wimbledon-two-tone-gold-126333',
      description: 'The iconic Wimbledon slate green Roman dial enhanced with an 18k yellow gold fluted bezel, gold crown, and two-tone Jubilee bracelet.',
      price: 14750, discount_price: 14000, stock: 12, rating: 5.0, num_reviews: 620, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 41 Wimbledon Two-Tone', Reference: '126333-WIMBLEDON', Case_Diameter: '41 mm', Material: 'Yellow Rolesor', Bezel: 'Fluted 18k Yellow Gold', Dial: 'Slate with Green Roman Numerals', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Yellow Rolesor Jubilee' }
    },
    {
      name: 'Rolex Datejust 41 Mint Green Dial Fluted Bezel Jubilee (White Rolesor 126334)',
      slug: 'rolex-datejust-41-mint-green-fluted-jubilee-126334',
      description: 'Tremendously popular modern Datejust featuring a soothing sunray mint green dial, 18k white gold fluted bezel, and supple Jubilee bracelet.',
      price: 10500, discount_price: 9950, stock: 15, rating: 5.0, num_reviews: 780, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 41 Mint Green', Reference: '126334-MINT', Case_Diameter: '41 mm', Material: 'White Rolesor', Bezel: 'Fluted 18k White Gold', Dial: 'Mint Green Sunray', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Jubilee Five-Link Bracelet' }
    },
    {
      name: 'Rolex Datejust 41 Bright Blue Sunray Dial Fluted Jubilee (White Rolesor 126334)',
      slug: 'rolex-datejust-41-bright-blue-fluted-jubilee-126334',
      description: 'Electric bright blue sunray dial reflecting light magnificently, framed by a fluted 18k white gold bezel and Jubilee bracelet.',
      price: 10500, discount_price: 9950, stock: 16, rating: 5.0, num_reviews: 840, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 41 Bright Blue', Reference: '126334-BLUE', Case_Diameter: '41 mm', Material: 'White Rolesor', Bezel: 'Fluted 18k White Gold', Dial: 'Bright Blue Sunray with Chromalight Baton Markers', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Jubilee Bracelet' }
    },
    {
      name: 'Rolex Datejust 41 Azzurro Blue Roman Dial Smooth Bezel Oyster (Oystersteel 126300)',
      slug: 'rolex-datejust-41-azzurro-blue-smooth-oyster-126300',
      description: 'Sporty minimalist elegance with an Azzurro blue sunray dial, applied 18k white gold Roman numerals, smooth dome bezel, and Oyster bracelet.',
      price: 8050, discount_price: 7650, stock: 14, rating: 4.9, num_reviews: 420, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 41 Azzurro Blue', Reference: '126300-AZZURRO', Case_Diameter: '41 mm', Material: 'Oystersteel', Bezel: 'Smooth Polished Bezel', Dial: 'Azzurro Blue with Roman Numerals', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster Bracelet' }
    },
    {
      name: 'Rolex Datejust 41 Rhodium Slate Dial Fluted Bezel Oyster (White Rolesor 126334)',
      slug: 'rolex-datejust-41-rhodium-slate-fluted-oyster-126334',
      description: 'Monochromatic architectural grace with dark rhodium sunray dial, fluted 18k white gold bezel, and sporty three-link Oyster bracelet.',
      price: 10250, discount_price: 9750, stock: 12, rating: 4.9, num_reviews: 360, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 41 Rhodium Slate', Reference: '126334-RHODIUM', Case_Diameter: '41 mm', Material: 'White Rolesor', Bezel: 'Fluted 18k White Gold', Dial: 'Dark Rhodium / Slate Sunray', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Datejust 41 Two-Tone Everose Sundust Diamond Dial (Everose Rolesor 126331)',
      slug: 'rolex-datejust-41-everose-sundust-diamond-126331',
      description: 'Warm Everose Rolesor with sunray sundust dial adorned with 10 brilliant-cut diamond hour markers set in 18k gold chatons.',
      price: 16200, discount_price: 15400, stock: 8, rating: 5.0, num_reviews: 290, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 41 Everose Diamond', Reference: '126331-DIAMOND', Case_Diameter: '41 mm', Material: 'Everose Rolesor', Bezel: 'Fluted 18k Everose Gold', Dial: 'Sundust with 10 Diamond Markers', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Everose Rolesor Jubilee' }
    },
    {
      name: 'Rolex Datejust 41 Two-Tone Yellow Gold Champagne Dial Fluted Jubilee (Rolesor 126333)',
      slug: 'rolex-datejust-41-yellow-gold-champagne-jubilee-126333',
      description: 'The ultimate quintessential luxury boardroom timepiece. 18k yellow gold fluted bezel, champagne sunburst dial with luminescent indices, and two-tone Jubilee bracelet.',
      price: 14750, discount_price: 14000, stock: 10, rating: 5.0, num_reviews: 580, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 41 Champagne Two-Tone', Reference: '126333-CHAMPAGNE', Case_Diameter: '41 mm', Material: 'Yellow Rolesor', Bezel: 'Fluted 18k Gold', Dial: 'Champagne Sunray', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Yellow Rolesor Jubilee' }
    },
    {
      name: 'Rolex Datejust 36 "Palm Motif" Olive Green Dial Fluted Bezel (White Rolesor 126234)',
      slug: 'rolex-datejust-36-palm-motif-olive-green-126234',
      description: 'Artistic botanical dial laser-etched with overlapping tropical palm fronds in varying olive green hues, fluted 18k white gold bezel, and Oyster bracelet.',
      price: 8950, discount_price: 8500, stock: 10, rating: 5.0, num_reviews: 640, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 36 "Palm Motif"', Reference: '126234-PALM', Case_Diameter: '36 mm', Material: 'White Rolesor', Bezel: 'Fluted 18k White Gold', Dial: 'Olive Green Palm Frond Motif', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Datejust 36 Mint Green Fluted Motif Dial Jubilee (White Rolesor 126234)',
      slug: 'rolex-datejust-36-mint-green-fluted-motif-126234',
      description: 'Spectacular geometric dial mirroring Rolex\'s signature fluted bezel pattern in mint green, paired with a five-link Jubilee bracelet.',
      price: 8950, discount_price: 8500, stock: 12, rating: 5.0, num_reviews: 510, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 36 Mint Fluted Motif', Reference: '126234-MOTIF-MINT', Case_Diameter: '36 mm', Material: 'White Rolesor', Bezel: 'Fluted 18k White Gold', Dial: 'Mint Green Fluted Geometric Motif', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Jubilee Five-Link Bracelet' }
    },
    {
      name: 'Rolex Datejust 36 Bright Blue Fluted Motif Dial Jubilee (White Rolesor 126234)',
      slug: 'rolex-datejust-36-bright-blue-fluted-motif-126234',
      description: 'Luminous fluted motif dial in bright royal blue reflecting three-dimensional light play, framed by an 18k white gold fluted bezel.',
      price: 8950, discount_price: 8500, stock: 11, rating: 4.9, num_reviews: 440, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 36 Blue Fluted Motif', Reference: '126234-MOTIF-BLUE', Case_Diameter: '36 mm', Material: 'White Rolesor', Bezel: 'Fluted 18k White Gold', Dial: 'Bright Blue Fluted Motif', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Jubilee Bracelet' }
    },
    {
      name: 'Rolex Datejust 36 Two-Tone Everose Mother-of-Pearl Diamond Dial (Rolesor 126281RBR)',
      slug: 'rolex-datejust-36-everose-mop-diamond-126281rbr',
      description: 'Haute horlogerie 36mm Datejust featuring a natural white mother-of-pearl dial with diamond hour markers and a dazzling diamond-set bezel.',
      price: 21500, discount_price: 20400, stock: 5, rating: 5.0, num_reviews: 210, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 36 Diamond Set MOP', Reference: '126281RBR', Case_Diameter: '36 mm', Material: 'Everose Rolesor', Bezel: 'Set with 52 Brilliant-Cut Diamonds', Dial: 'White Mother-of-Pearl with 10 Diamonds', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Everose Rolesor Jubilee' }
    },
    {
      name: 'Rolex Datejust 36 Silver Sunray Dial Smooth Bezel Oyster (Oystersteel 126200)',
      slug: 'rolex-datejust-36-silver-sunray-smooth-oyster-126200',
      description: 'Pure understated classicism. Silver sunray dial with 18k white gold applied indices, smooth domed bezel, and brushed Oystersteel Oyster bracelet.',
      price: 7450, discount_price: 7100, stock: 16, rating: 4.9, num_reviews: 320, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 36 Silver', Reference: '126200-SILVER', Case_Diameter: '36 mm', Material: 'Oystersteel', Bezel: 'Smooth Dome Bezel', Dial: 'Silver Sunray', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Datejust 31 Turquoise Stone Dial Diamond Bezel President (18k Everose Gold 278288RBR)',
      slug: 'rolex-datejust-31-turquoise-stone-diamond-president-278288rbr',
      description: 'Rare hard stone dial in vivid natural turquoise with Roman numeral VI and IX set in diamonds, diamond-set bezel, and solid 18k gold President bracelet.',
      price: 36000, discount_price: 34200, stock: 3, rating: 5.0, num_reviews: 290, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 31 Turquoise Stone', Reference: '278288RBR', Case_Diameter: '31 mm', Material: '18k Everose Gold', Bezel: 'Set with 46 Brilliant-Cut Diamonds', Dial: 'Natural Turquoise Stone with Diamond Roman Numerals', Calibre: 'Rolex Calibre 2236 with Syloxi Hairspring', Power_Reserve: '55 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Semi-Circular Three-Piece President' }
    },
    {
      name: 'Rolex Datejust 31 Floral Motif Azzurro Blue Dial Diamond Set (White Rolesor 278274)',
      slug: 'rolex-datejust-31-floral-motif-azzurro-blue-278274',
      description: 'Poetic floral dial featuring 24 flowers highlighted by different finishes and 24 diamonds nestled at the center of the petals.',
      price: 10400, discount_price: 9900, stock: 8, rating: 5.0, num_reviews: 310, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 31 Floral Motif', Reference: '278274-FLORAL', Case_Diameter: '31 mm', Material: 'White Rolesor', Bezel: 'Fluted 18k White Gold', Dial: 'Azzurro Blue Floral Motif with 24 Diamonds', Calibre: 'Calibre 2236', Power_Reserve: '55 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Jubilee Five-Link Bracelet' }
    },
    {
      name: 'Rolex Datejust 31 Rosé Sunray Dial Fluted Jubilee (Everose Rolesor 278271)',
      slug: 'rolex-datejust-31-rose-sunray-fluted-jubilee-278271',
      description: 'Romantic rosé sunray dial with Everose gold hands and hour markers, framed by an 18k Everose gold fluted bezel and two-tone Jubilee bracelet.',
      price: 11200, discount_price: 10650, stock: 9, rating: 4.9, num_reviews: 240, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Datejust 31 Rosé', Reference: '278271-ROSE', Case_Diameter: '31 mm', Material: 'Everose Rolesor', Bezel: 'Fluted 18k Everose Gold', Dial: 'Rosé Sunray Dial', Calibre: 'Calibre 2236', Power_Reserve: '55 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Everose Rolesor Jubilee' }
    },

    // =========================================================================
    // 5. ROLEX DAY-DATE 40 & 36 "THE PRESIDENT" (16 Models)
    // =========================================================================
    {
      name: 'Rolex Day-Date 40 Platinum Ice Blue Diagonal Motif Fluted (950 Platinum 228236)',
      slug: 'rolex-day-date-40-platinum-ice-blue-diagonal-228236',
      description: 'The supreme watch of leaders and visionaries. Crafted exclusively in solid 950 platinum with an ice blue diagonal motif dial, day of the week spelled out in full at 12 o\'clock, fluted platinum bezel, and the iconic three-piece semi-circular link President bracelet powered by Calibre 3255.',
      price: 63500, discount_price: 60500, stock: 4, rating: 5.0, num_reviews: 920, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 40 "President"', Reference: '228236-ICEBLUE', Case_Diameter: '40 mm', Material: '950 Platinum', Bezel: 'Fluted 950 Platinum', Dial: 'Ice Blue with Deconstructed Roman Numerals & Diagonal Motif', Calibre: 'Rolex Calibre 3255 Day-Date Automatic', Power_Reserve: '70 Hours', Water_Resistance: '100 metres / 330 feet', Bracelet: 'President, semi-circular three-piece links with concealed Crownclasp' }
    },
    {
      name: 'Rolex Day-Date 40 Platinum Ice Blue Baguette Diamond Markers (228236-0005)',
      slug: 'rolex-day-date-40-platinum-ice-blue-baguette-diamonds-228236',
      description: 'Solid 950 platinum case and President bracelet paired with an ice blue sunray dial and 10 faceted baguette-cut diamond hour indices.',
      price: 74000, discount_price: 70500, stock: 3, rating: 5.0, num_reviews: 640, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 40 Platinum Baguette', Reference: '228236-0005', Case_Diameter: '40 mm', Material: '950 Platinum', Bezel: 'Fluted 950 Platinum', Dial: 'Ice Blue with 10 Baguette Diamond Markers', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 950 Platinum President' }
    },
    {
      name: 'Rolex Day-Date 40 Platinum Ice Blue Arabic-Indic Numerals Dial (228236-Arabic)',
      slug: 'rolex-day-date-40-platinum-arabic-indic-numerals-228236',
      description: 'Highly sought-after Middle East exclusive featuring ice blue dial with applied Arabic-Indic hour numerals and day/date display in Arabic script.',
      price: 115000, discount_price: 109000, stock: 2, rating: 5.0, num_reviews: 1200, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 40 Arabic-Indic Dial', Reference: '228236-ARABIC', Case_Diameter: '40 mm', Material: '950 Platinum', Bezel: 'Smooth or Fluted Platinum', Dial: 'Ice Blue with Arabic-Indic Numerals & Arabic Calendar Discs', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '950 Platinum President' }
    },
    {
      name: 'Rolex Day-Date 40 18k Everose Gold Olive Green Dial Fluted (228235)',
      slug: 'rolex-day-date-40-everose-gold-olive-green-228235',
      description: 'The 60th anniversary celebratory Day-Date. Warm 18k Everose gold paired with an emerald olive green sunray dial and deconstructed Roman numerals.',
      price: 41500, discount_price: 39500, stock: 6, rating: 5.0, num_reviews: 1050, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 40 Everose Olive Green', Reference: '228235-OLIVE', Case_Diameter: '40 mm', Material: 'Solid 18k Everose Gold', Bezel: 'Fluted 18k Everose Gold', Dial: 'Olive Green Sunray with Rose Gold Roman Numerals', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 18k Everose Gold President' }
    },
    {
      name: 'Rolex Day-Date 40 18k Everose Gold Sundust Baguette Diamond Dial (228235-Sundust)',
      slug: 'rolex-day-date-40-everose-sundust-baguette-diamonds-228235',
      description: 'Subtle monochromatic harmony in 18k Everose gold with a sundust dial illuminated by 10 baguette-cut diamond markers.',
      price: 45500, discount_price: 43200, stock: 5, rating: 5.0, num_reviews: 410, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 40 Sundust Baguette', Reference: '228235-SUNDUST-BAG', Case_Diameter: '40 mm', Material: '18k Everose Gold', Bezel: 'Fluted 18k Gold', Dial: 'Sundust with Baguette Diamonds', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k Everose Gold President' }
    },
    {
      name: 'Rolex Day-Date 40 18k Yellow Gold Champagne Dial Fluted (228238)',
      slug: 'rolex-day-date-40-yellow-gold-champagne-228238',
      description: 'The definitive archetypal President. Solid 18k yellow gold case and President bracelet with champagne sunray dial and Roman numerals.',
      price: 38500, discount_price: 36800, stock: 8, rating: 5.0, num_reviews: 790, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 40 Yellow Gold Champagne', Reference: '228238-CHAMPAGNE', Case_Diameter: '40 mm', Material: 'Solid 18k Yellow Gold', Bezel: 'Fluted 18k Yellow Gold', Dial: 'Champagne Sunray with 18k Gold Roman Numerals', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 18k Yellow Gold President' }
    },
    {
      name: 'Rolex Day-Date 40 18k Yellow Gold White Roman Dial Fluted (228238-White)',
      slug: 'rolex-day-date-40-yellow-gold-white-roman-228238',
      description: 'Crisp stark white lacquer dial with hand-applied 18k yellow gold Roman numerals, fluted bezel, and President bracelet.',
      price: 38500, discount_price: 36800, stock: 7, rating: 4.9, num_reviews: 430, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 40 White Roman', Reference: '228238-WHITE', Case_Diameter: '40 mm', Material: '18k Yellow Gold', Bezel: 'Fluted 18k Gold', Dial: 'White Lacquer with Gold Roman Numerals', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k Yellow Gold President' }
    },
    {
      name: 'Rolex Day-Date 40 18k Yellow Gold Onyx Hard Stone Dial (228238-Onyx)',
      slug: 'rolex-day-date-40-yellow-gold-onyx-stone-228238',
      description: 'Rare minimalist bespoke edition featuring a pure natural black onyx mineral stone dial without hour indices for an enigmatic black-and-gold aesthetic.',
      price: 65000, discount_price: 61500, stock: 2, rating: 5.0, num_reviews: 580, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 40 Onyx Stone', Reference: '228238-ONYX', Case_Diameter: '40 mm', Material: '18k Yellow Gold', Bezel: 'Fluted 18k Gold', Dial: 'Natural Jet Black Onyx Stone Dial', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k Yellow Gold President' }
    },
    {
      name: 'Rolex Day-Date 40 18k White Gold Bright Blue Sunray Fluted (228239)',
      slug: 'rolex-day-date-40-white-gold-bright-blue-228239',
      description: 'Solid 18k white gold case and President bracelet paired with an intense bright blue sunray dial and deconstructed white gold Roman numerals.',
      price: 41500, discount_price: 39500, stock: 5, rating: 5.0, num_reviews: 490, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 40 White Gold Blue', Reference: '228239-BLUE', Case_Diameter: '40 mm', Material: '18k White Gold', Bezel: 'Fluted 18k White Gold', Dial: 'Bright Blue Sunray with White Gold Roman Numerals', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k White Gold President' }
    },
    {
      name: 'Rolex Day-Date 40 18k White Gold Meteorite Baguette Diamond Dial (228239-Meteorite)',
      slug: 'rolex-day-date-40-white-gold-meteorite-baguette-228239',
      description: 'Solid 18k white gold housing an authentic meteorite dial with 10 baguette-cut diamond hour markers and fluted bezel.',
      price: 58000, discount_price: 55000, stock: 3, rating: 5.0, num_reviews: 370, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 40 Meteorite Baguette', Reference: '228239-METEORITE', Case_Diameter: '40 mm', Material: '18k White Gold', Bezel: 'Fluted 18k White Gold', Dial: 'Authentic Gibeon Meteorite with 10 Baguette Diamonds', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k White Gold President' }
    },
    {
      name: 'Rolex Day-Date 36 "Puzzle / Emoji" Jigsaw Dial (18k Everose Gold 128235-Puzzle)',
      slug: 'rolex-day-date-36-puzzle-emoji-jigsaw-128235',
      description: 'Off-catalog avant-garde sensation featuring a champlevé enamel jigsaw puzzle dial in turquoise, red, fuchsia, orange, green and yellow. The day disc displays inspirational keywords (Peace, Hope, Love) and the date disc displays 31 distinct custom emojis.',
      price: 135000, discount_price: 128000, stock: 1, rating: 5.0, num_reviews: 1650, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 36 "Puzzle Jigsaw"', Reference: '128235-PUZZLE', Case_Diameter: '36 mm', Material: '18k Everose Gold', Bezel: 'Fluted 18k Everose Gold', Dial: 'Champlevé Enamel Puzzle Motif with 10 Baguette Sapphire Markers', Calibre: 'Rolex Calibre 3255 (Custom Emoji & Emotion Discs)', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k Everose Gold President' }
    },
    {
      name: 'Rolex Day-Date 36 Turquoise Stone Dial Diamond Bezel (18k Yellow Gold 128348RBR)',
      slug: 'rolex-day-date-36-turquoise-stone-diamond-bezel-128348rbr',
      description: 'Breathtaking 36mm Day-Date in 18k yellow gold with a genuine natural turquoise stone dial, Roman VI and IX set with 32 diamonds, and a bezel set with 52 brilliant-cut diamonds.',
      price: 52000, discount_price: 49500, stock: 2, rating: 5.0, num_reviews: 480, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 36 Turquoise Diamond', Reference: '128348RBR', Case_Diameter: '36 mm', Material: '18k Yellow Gold', Bezel: '52 Brilliant-Cut Diamonds', Dial: 'Natural Turquoise Stone with Diamond Set VI & IX', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k Yellow Gold President' }
    },
    {
      name: 'Rolex Day-Date 36 Carnelian Hard Stone Dial Diamond Roman (18k Everose Gold 128235-Carnelian)',
      slug: 'rolex-day-date-36-carnelian-stone-diamond-128235',
      description: 'Fiery translucent orange-red carnelian mineral dial with diamond-set Roman numerals and fluted Everose gold bezel.',
      price: 48000, discount_price: 45600, stock: 2, rating: 5.0, num_reviews: 290, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 36 Carnelian Stone', Reference: '128235-CARNELIAN', Case_Diameter: '36 mm', Material: '18k Everose Gold', Bezel: 'Fluted 18k Everose Gold', Dial: 'Natural Carnelian Stone with Diamond Roman VI & IX', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k Everose Gold President' }
    },
    {
      name: 'Rolex Day-Date 36 Green Ombré Diamond Dial (18k Yellow Gold 128238-Ombre)',
      slug: 'rolex-day-date-36-green-ombre-diamonds-128238',
      description: 'Vibrant emerald center fading to jet black periphery on a sunburst dial, adorned with 8 brilliant-cut diamonds and 2 baguette diamonds at 6 and 9.',
      price: 42500, discount_price: 40500, stock: 4, rating: 5.0, num_reviews: 360, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 36 Green Ombré', Reference: '128238-OMBRE', Case_Diameter: '36 mm', Material: '18k Yellow Gold', Bezel: 'Fluted 18k Yellow Gold', Dial: 'Green Ombré with Diamond Markers', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k Yellow Gold President' }
    },
    {
      name: 'Rolex Day-Date 36 Eisenkiesel Hard Stone Diamond Dial (18k Everose Gold 128235-Eisenkiesel)',
      slug: 'rolex-day-date-36-eisenkiesel-stone-diamonds-128235',
      description: 'Natural quartz crystal with iron-oxide inclusions creating delicate chocolate and auburn veining, embellished with 10 baguette diamond markers.',
      price: 49500, discount_price: 47000, stock: 3, rating: 5.0, num_reviews: 230, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 36 Eisenkiesel', Reference: '128235-EISEN', Case_Diameter: '36 mm', Material: '18k Everose Gold', Bezel: 'Fluted 18k Everose Gold', Dial: 'Eisenkiesel Hard Stone with 10 Baguette Diamonds', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k Everose Gold President' }
    },
    {
      name: 'Rolex Day-Date 36 Mother-of-Pearl Pavé Diamonds (18k White Gold 128239-MOP)',
      slug: 'rolex-day-date-36-white-gold-mop-diamonds-128239',
      description: 'Solid 18k white gold with iridescent white mother-of-pearl dial, 10 baguette diamond hour markers, fluted bezel, and President bracelet.',
      price: 44000, discount_price: 41800, stock: 4, rating: 4.9, num_reviews: 270, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Day-Date 36 MOP Diamonds', Reference: '128239-MOP', Case_Diameter: '36 mm', Material: '18k White Gold', Bezel: 'Fluted 18k White Gold', Dial: 'White Mother-of-Pearl with 10 Baguette Diamonds', Calibre: 'Calibre 3255', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k White Gold President' }
    },

    // =========================================================================
    // 6. ROLEX OYSTER PERPETUAL (12 Models)
    // =========================================================================
    {
      name: 'Rolex Oyster Perpetual 41 "Celebration / Bubbles" Motif Dial (Oystersteel 124300)',
      slug: 'rolex-oyster-perpetual-41-celebration-bubbles-124300',
      description: 'The joyful "Celebration" motif dial featuring 51 colored bubbles in turquoise blue, candy pink, yellow, coral red, and green outlined in black on a turquoise base, 41mm Oystersteel case, and Calibre 3230 Superlative Chronometer.',
      price: 6400, discount_price: 6100, stock: 8, rating: 5.0, num_reviews: 1420, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'Oyster Perpetual 41 "Celebration"', Reference: '124300-CELEBRATION', Case_Diameter: '41 mm', Material: 'Oystersteel', Bezel: 'Domed Polished Bezel', Dial: 'Celebration Motif with Multi-Color Lacquer Bubbles', Calibre: 'Rolex Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100 metres / 330 feet', Bracelet: 'Oyster, three-piece solid links with Oysterclasp and Easylink' }
    },
    {
      name: 'Rolex Oyster Perpetual 41 "Turquoise / Tiffany Blue" Dial (Oystersteel 124300)',
      slug: 'rolex-oyster-perpetual-41-turquoise-tiffany-blue-124300',
      description: 'The viral phenomenon turquoise blue lacquer dial with 18k white gold baton indices and Chromalight lume in a 41mm Oystersteel profile.',
      price: 26000, discount_price: 24500, stock: 4, rating: 5.0, num_reviews: 1890, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Oyster Perpetual 41 "Tiffany Blue"', Reference: '124300-TURQUOISE', Case_Diameter: '41 mm', Material: 'Oystersteel', Bezel: 'Domed Bezel', Dial: 'Turquoise Blue Lacquer Dial', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster Bracelet' }
    },
    {
      name: 'Rolex Oyster Perpetual 41 Green Lacquer Dial (Oystersteel 124300)',
      slug: 'rolex-oyster-perpetual-41-green-lacquer-124300',
      description: 'Rich British racing green gloss lacquer dial paying tribute to Rolex\'s corporate green identity, mounted on an Oyster bracelet.',
      price: 6400, discount_price: 6100, stock: 12, rating: 5.0, num_reviews: 780, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Oyster Perpetual 41 Green', Reference: '124300-GREEN', Case_Diameter: '41 mm', Material: 'Oystersteel', Bezel: 'Domed Polished', Dial: 'Green Lacquer Dial', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Oyster Perpetual 41 Bright Blue Sunray Dial (Oystersteel 124300)',
      slug: 'rolex-oyster-perpetual-41-bright-blue-124300',
      description: 'Shimmering bright blue sunray finish radiating light from the center, double baton markers at 3, 6, and 9, and Calibre 3230.',
      price: 6400, discount_price: 6100, stock: 14, rating: 4.9, num_reviews: 620, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Oyster Perpetual 41 Bright Blue', Reference: '124300-BLUE', Case_Diameter: '41 mm', Material: 'Oystersteel', Bezel: 'Domed Bezel', Dial: 'Bright Blue Sunray', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Oyster Perpetual 41 Silver Sunray Dial 18k Gold Indices (Oystersteel 124300)',
      slug: 'rolex-oyster-perpetual-41-silver-gold-indices-124300',
      description: 'Warm silver sunray dial accented with 18k yellow gold hands and hour markers for subtle two-tone warmth in a pure steel watch.',
      price: 6400, discount_price: 6100, stock: 15, rating: 4.9, num_reviews: 490, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Oyster Perpetual 41 Silver', Reference: '124300-SILVER', Case_Diameter: '41 mm', Material: 'Oystersteel', Bezel: 'Domed Bezel', Dial: 'Silver Sunray with 18k Yellow Gold Hands & Markers', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Oyster Perpetual 41 Bright Black Sunray Dial (Oystersteel 124300)',
      slug: 'rolex-oyster-perpetual-41-bright-black-124300',
      description: 'Versatile monochrome essential with an intense black sunray dial, luminescent indices, and durable Oystersteel case.',
      price: 6400, discount_price: 6100, stock: 18, rating: 4.9, num_reviews: 530, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Oyster Perpetual 41 Black', Reference: '124300-BLACK', Case_Diameter: '41 mm', Material: 'Oystersteel', Bezel: 'Domed Bezel', Dial: 'Bright Black Sunray', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Oyster Perpetual 36 "Celebration / Bubbles" Motif Dial (Oystersteel 126000)',
      slug: 'rolex-oyster-perpetual-36-celebration-bubbles-126000',
      description: 'The universally proportioned 36mm Celebration bubbles dial with multi-color lacquer spheres and Calibre 3230.',
      price: 6100, discount_price: 5800, stock: 8, rating: 5.0, num_reviews: 950, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Oyster Perpetual 36 Celebration', Reference: '126000-CELEBRATION', Case_Diameter: '36 mm', Material: 'Oystersteel', Bezel: 'Domed Bezel', Dial: 'Celebration Multi-Color Lacquer Bubbles', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Oyster Perpetual 36 Candy Pink Lacquer Dial (Oystersteel 126000)',
      slug: 'rolex-oyster-perpetual-36-candy-pink-126000',
      description: 'Delightful opaque candy pink lacquer dial in an ergonomic 36mm Oystersteel case with Chromalight display.',
      price: 14500, discount_price: 13800, stock: 6, rating: 5.0, num_reviews: 820, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Oyster Perpetual 36 Candy Pink', Reference: '126000-PINK', Case_Diameter: '36 mm', Material: 'Oystersteel', Bezel: 'Domed Bezel', Dial: 'Candy Pink Lacquer Dial', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Oyster Perpetual 36 Coral Red Lacquer Dial (Oystersteel 126000)',
      slug: 'rolex-oyster-perpetual-36-coral-red-126000',
      description: 'Discontinued high-value collector dial in vivid fire engine coral red lacquer with high gloss finish.',
      price: 18500, discount_price: 17500, stock: 3, rating: 5.0, num_reviews: 690, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Oyster Perpetual 36 Coral Red', Reference: '126000-RED', Case_Diameter: '36 mm', Material: 'Oystersteel', Bezel: 'Domed Bezel', Dial: 'Coral Red Gloss Lacquer', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Oyster Perpetual 36 Yellow Lacquer Dial (Oystersteel 126000)',
      slug: 'rolex-oyster-perpetual-36-yellow-lacquer-126000',
      description: 'Coveted solar yellow lacquer Stella-inspired dial with white gold indices in a 36mm Oystersteel case.',
      price: 19500, discount_price: 18500, stock: 3, rating: 5.0, num_reviews: 730, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Oyster Perpetual 36 Yellow', Reference: '126000-YELLOW', Case_Diameter: '36 mm', Material: 'Oystersteel', Bezel: 'Domed Bezel', Dial: 'Sunflower Yellow Lacquer', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Oyster Perpetual 36 Turquoise Blue Dial (Oystersteel 126000)',
      slug: 'rolex-oyster-perpetual-36-turquoise-blue-126000',
      description: 'The 36mm iteration of the turquoise lacquer dial, perfectly balanced for all wrists.',
      price: 16500, discount_price: 15700, stock: 5, rating: 5.0, num_reviews: 1120, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Oyster Perpetual 36 Turquoise', Reference: '126000-TURQUOISE', Case_Diameter: '36 mm', Material: 'Oystersteel', Bezel: 'Domed Bezel', Dial: 'Turquoise Blue Lacquer', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Oyster Perpetual 28 Silver Sunray Dial (Oystersteel 276200)',
      slug: 'rolex-oyster-perpetual-28-silver-sunray-276200',
      description: 'Petite 28mm Oystersteel case with silver sunray dial, 18k yellow gold indices, and Calibre 2232 movement with Syloxi silicon hairspring.',
      price: 5550, discount_price: 5280, stock: 12, rating: 4.9, num_reviews: 280, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Oyster Perpetual 28 Silver', Reference: '276200-SILVER', Case_Diameter: '28 mm', Material: 'Oystersteel', Bezel: 'Domed Bezel', Dial: 'Silver Sunray with 18k Gold Markers', Calibre: 'Rolex Calibre 2232', Power_Reserve: '55 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },

    // =========================================================================
    // 7. ROLEX SEA-DWELLER & DEEPSEA (8 Models)
    // =========================================================================
    {
      name: 'Rolex Deepsea Challenge 50mm RLX Titanium 11,000m Water Resistant (126067)',
      slug: 'rolex-deepsea-challenge-50mm-rlx-titanium-126067',
      description: 'The ultimate Mariana Trench conqueror. Built entirely from aerospace-grade Grade 5 RLX Titanium, 50mm case, Ringlock System capable of withstanding colossal water pressure up to 11,000 metres (36,090 feet), helium escape valve, and matte black dial with Chromalight display.',
      price: 26000, discount_price: 24700, stock: 4, rating: 5.0, num_reviews: 640, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'Deepsea Challenge', Reference: '126067', Case_Diameter: '50 mm', Material: 'Grade 5 RLX Titanium', Bezel: 'Black Cerachrom Ceramic 60-Minute Graduated', Dial: 'Intense Matte Black', Calibre: 'Rolex Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '11,000 metres / 36,090 feet', Helium_Valve: 'Integrated Helium Escape Valve', Bracelet: 'RLX Titanium Oyster with Fliplock and Glidelock' }
    },
    {
      name: 'Rolex Deepsea "James Cameron" D-Blue Gradient Dial (Oystersteel 136660-DBlue)',
      slug: 'rolex-deepsea-james-cameron-d-blue-136660',
      description: 'Commemorating James Cameron\'s historic solo dive into the Mariana Trench. Stunning two-tone gradient dial transitioning from twilight blue to pitch black, neon green "DEEPSEA" lettering, Ringlock system, and 3,900m water resistance.',
      price: 14350, discount_price: 13600, stock: 9, rating: 5.0, num_reviews: 820, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Deepsea "James Cameron"', Reference: '136660-DBLUE', Case_Diameter: '44 mm', Material: 'Oystersteel with RLX Titanium Caseback', Bezel: 'Black Cerachrom Ceramic 60-Min', Dial: 'D-Blue Gradient (Twilight Blue to Bottomless Black)', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '3,900 metres / 12,800 feet', Bracelet: 'Oystersteel Oyster with Glidelock' }
    },
    {
      name: 'Rolex Deepsea Intense Black Cerachrom Dial (Oystersteel 136660-Black)',
      slug: 'rolex-deepsea-black-dial-136660',
      description: 'Professional deep saturation diving instrument with 44mm Oystersteel case, thick domed sapphire crystal, black gloss dial, and 3,900m pressure resistance.',
      price: 13850, discount_price: 13150, stock: 10, rating: 4.9, num_reviews: 410, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Deepsea Black Dial', Reference: '136660-BLACK', Case_Diameter: '44 mm', Material: 'Oystersteel & RLX Titanium', Bezel: 'Black Cerachrom', Dial: 'Intense Black Lacquer', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '3,900m / 12,800ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Deepsea 18k Yellow Gold Blue Cerachrom (136668LB 2024 Edition)',
      slug: 'rolex-deepsea-yellow-gold-blue-cerachrom-136668lb',
      description: 'Groundbreaking 2024 novelty. The first full 18k yellow gold Deepsea weighing a colossal 320g, with royal blue lacquer dial, blue Cerachrom ceramic bezel, and compression ring made of high-tech blue ceramic.',
      price: 52100, discount_price: 49500, stock: 3, rating: 5.0, num_reviews: 580, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Deepsea Full Yellow Gold', Reference: '136668LB', Case_Diameter: '44 mm', Material: 'Solid 18k Yellow Gold & RLX Titanium Caseback', Bezel: 'Blue Cerachrom Ceramic', Dial: 'Blue Lacquer with Gold Script', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '3,900 metres / 12,800 feet', Bracelet: 'Solid 18k Yellow Gold Oyster with Glidelock' }
    },
    {
      name: 'Rolex Sea-Dweller 43mm "Red Sea-Dweller" (Oystersteel 126600)',
      slug: 'rolex-sea-dweller-43mm-red-script-126600',
      description: '50th anniversary Sea-Dweller featuring single red "SEA-DWELLER" lettering on the black dial, Cyclops magnifying lens on date, 43mm case, helium escape valve, and 1,220m water resistance.',
      price: 13250, discount_price: 12600, stock: 12, rating: 5.0, num_reviews: 730, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Sea-Dweller 43mm Red Script', Reference: '126600', Case_Diameter: '43 mm', Material: 'Oystersteel', Bezel: 'Black Cerachrom Ceramic 60-Min', Dial: 'Intense Black with Red Single Line Text', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '1,220 metres / 4,000 feet', Bracelet: 'Oystersteel Oyster with Glidelock & Fliplock' }
    },
    {
      name: 'Rolex Sea-Dweller 43mm Two-Tone Yellow Rolesor (126603)',
      slug: 'rolex-sea-dweller-43mm-two-tone-yellow-rolesor-126603',
      description: 'The first time Rolex introduced precious metal to the Sea-Dweller line. Oystersteel and 18k yellow gold case with gold bezel markings and yellow gold lettering on the dial.',
      price: 17000, discount_price: 16150, stock: 7, rating: 4.9, num_reviews: 390, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Sea-Dweller Two-Tone', Reference: '126603', Case_Diameter: '43 mm', Material: 'Yellow Rolesor', Bezel: 'Black Cerachrom with 18k Gold inlays', Dial: 'Intense Black with Gold Script', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '1,220m / 4,000ft', Bracelet: 'Yellow Rolesor Oyster' }
    },
    {
      name: 'Rolex Sea-Dweller Vintage Heritage "Double Red" Tribute (Ref. 1665 Edition)',
      slug: 'rolex-sea-dweller-double-red-1665-tribute',
      description: 'Homage to the legendary 1967 reference 1665 with double red lines "SEA-DWELLER / SUBMARINER 2000" on matte dial and domed crystal.',
      price: 32000, discount_price: 30400, stock: 3, rating: 5.0, num_reviews: 470, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Sea-Dweller "Double Red" Tribute', Reference: '1665-HERITAGE', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Black Graduated Bezel', Dial: 'Matte Black with Two Lines Red Text', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '610m / 2,000ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Sea-Dweller 4000 Cerachrom Transitional Edition (116600)',
      slug: 'rolex-sea-dweller-4000-cerachrom-116600',
      description: 'The ultra-rare 3-year production 40mm Sea-Dweller without Cyclops date magnifier, fully graduated 60-minute Cerachrom bezel, and Calibre 3135.',
      price: 16500, discount_price: 15700, stock: 4, rating: 5.0, num_reviews: 310, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Sea-Dweller 4000', Reference: '116600', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Full 60-Min Black Cerachrom', Dial: 'Satin Black (No Cyclops)', Calibre: 'Calibre 3135', Power_Reserve: '48 Hours', Water_Resistance: '1,220m / 4,000ft', Bracelet: 'Oyster with Glidelock' }
    },

    // =========================================================================
    // 8. ROLEX EXPLORER & EXPLORER II (8 Models)
    // =========================================================================
    {
      name: 'Rolex Explorer 36mm Black Dial (Oystersteel 124270)',
      slug: 'rolex-explorer-36mm-black-124270',
      description: 'The definitive mountaineering chronometer. Reverting to its historical 36mm proportions, featuring a jet black lacquer dial with iconic 3, 6, 9 numerals filled with long-lasting blue Chromalight luminescence, smooth bezel, and Calibre 3230.',
      price: 7700, discount_price: 7300, stock: 16, rating: 5.0, num_reviews: 890, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'Explorer 36', Reference: '124270', Case_Diameter: '36 mm', Material: 'Oystersteel (904L)', Bezel: 'Smooth Polished Steel', Dial: 'Intense Black with Chromalight 3-6-9 Arabic Numerals', Calibre: 'Rolex Calibre 3230 Superlative Chronometer', Power_Reserve: '70 Hours', Water_Resistance: '100 metres / 330 feet', Bracelet: 'Oyster, three-piece solid links with Oysterlock safety clasp' }
    },
    {
      name: 'Rolex Explorer 36mm Two-Tone Yellow Rolesor (124273)',
      slug: 'rolex-explorer-36mm-two-tone-yellow-rolesor-124273',
      description: 'Unexpected luxurious evolution of the tool watch, pairing Oystersteel and 18k yellow gold with gold 3, 6, 9 numerals and hands.',
      price: 11750, discount_price: 11150, stock: 10, rating: 4.9, num_reviews: 420, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Explorer 36 Two-Tone', Reference: '124273', Case_Diameter: '36 mm', Material: 'Yellow Rolesor', Bezel: 'Smooth 18k Yellow Gold', Dial: 'Black Lacquer with Gold 3-6-9', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Yellow Rolesor Oyster' }
    },
    {
      name: 'Rolex Explorer 40mm Black Dial (Oystersteel 224270)',
      slug: 'rolex-explorer-40mm-black-224270',
      description: 'Modern 40mm case dimension offering contemporary wrist presence while retaining the pure minimalist 3-6-9 dial DNA and Calibre 3230.',
      price: 8150, discount_price: 7750, stock: 15, rating: 5.0, num_reviews: 740, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Explorer 40', Reference: '224270', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Smooth Polished Steel', Dial: 'Intense Black with Luminescent 3-6-9', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Explorer II 42mm "Polar White" Dial Orange 24h Hand (Oystersteel 226570-Polar)',
      slug: 'rolex-explorer-ii-42mm-polar-white-226570',
      description: 'Engineered for speleologists and polar expeditions. Crisp white lacquer "Polar" dial with black-surround hour markers, vibrant orange 24-hour arrow hand, fixed 24-hour steel bezel, and Calibre 3285 dual-time movement.',
      price: 9650, discount_price: 9150, stock: 14, rating: 5.0, num_reviews: 980, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Explorer II "Polar"', Reference: '226570-POLAR', Case_Diameter: '42 mm', Material: 'Oystersteel', Bezel: 'Fixed 24-hour graduated steel bezel', Dial: 'Polar White with Black Hour Indices & Orange 24h Hand', Calibre: 'Rolex Calibre 3285 GMT', Power_Reserve: '70 Hours', Water_Resistance: '100 metres / 330 feet', Bracelet: 'Oystersteel Oyster with Easylink' }
    },
    {
      name: 'Rolex Explorer II 42mm Black Dial Orange 24h Hand (Oystersteel 226570-Black)',
      slug: 'rolex-explorer-ii-42mm-black-dial-226570',
      description: 'Stealth black dial edition with phantom floating hands base, vibrant orange 24-hour hand, and satin-brushed 24-hour steel bezel.',
      price: 9650, discount_price: 9150, stock: 12, rating: 4.9, num_reviews: 670, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Explorer II Black', Reference: '226570-BLACK', Case_Diameter: '42 mm', Material: 'Oystersteel', Bezel: 'Fixed 24-Hour Steel Bezel', Dial: 'Intense Black with Orange 24h Arrow Hand', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Explorer II Vintage "Freccione / Steve McQueen" Tribute (Ref. 1655 Edition)',
      slug: 'rolex-explorer-ii-steve-mcqueen-1655-tribute',
      description: 'Homage to the 1971 original reference 1655 with straight hour hand, oversized orange arrow pointer, and 24-hour track on matte dial.',
      price: 27500, discount_price: 26000, stock: 3, rating: 5.0, num_reviews: 510, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Explorer II "Freccione" Tribute', Reference: '1655-HERITAGE', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Fixed 24h Brushed Steel', Dial: 'Matte Black with Luminescent Square Markers & Orange Arrow', Calibre: 'Calibre 3285', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Explorer 39mm Mark II Lumed Numerals (Oystersteel 214270)',
      slug: 'rolex-explorer-39mm-mk2-lumed-214270',
      description: 'The collector sweet-spot 39mm Explorer with solid Chromalight lumed 3, 6, 9 numerals and elongated proportional handset.',
      price: 9200, discount_price: 8750, stock: 7, rating: 5.0, num_reviews: 630, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Explorer 39mm MK2', Reference: '214270-MK2', Case_Diameter: '39 mm', Material: 'Oystersteel', Bezel: 'Smooth Bezel', Dial: 'Black with Fully Lumed 3-6-9', Calibre: 'Calibre 3132', Power_Reserve: '48 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Explorer Heritage 1016 "Gilt Frog Foot" Edition',
      slug: 'rolex-explorer-heritage-1016-gilt-edition',
      description: 'Pure vintage elegance celebrating the classic 1016 reference with gilt gloss dial typography, warm cream radium patina markers, and slender case.',
      price: 34000, discount_price: 32300, stock: 2, rating: 5.0, num_reviews: 490, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Explorer 1016 Heritage', Reference: '1016-HERITAGE', Case_Diameter: '36 mm', Material: 'Oystersteel', Bezel: 'Smooth Polished Bezel', Dial: 'Gilt Black with Vintage Patina 3-6-9', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Riveted Oystersteel Oyster' }
    },

    // =========================================================================
    // 9. ROLEX SKY-DWELLER (10 Models)
    // =========================================================================
    {
      name: 'Rolex Sky-Dweller Annual Calendar Mint Green Dial Jubilee (White Rolesor 336934)',
      slug: 'rolex-sky-dweller-mint-green-jubilee-336934',
      description: 'Rolex\'s most complicated modern grand complication. Features the ingenious Saros annual calendar (distinguishing 30 and 31-day months automatically), dual time zone 24-hour off-center disc, Ring Command fluted bezel for intuitive function setting, sunray mint green dial, and Calibre 9002.',
      price: 15650, discount_price: 14850, stock: 8, rating: 5.0, num_reviews: 840, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'Sky-Dweller Annual Calendar', Reference: '336934-MINT', Case_Diameter: '42 mm', Material: 'White Rolesor (Oystersteel & 18k White Gold)', Bezel: 'Fluted Bidirectional Rolex Ring Command Bezel', Dial: 'Mint Green Sunray with Off-Center 24h Disc & Month Apertures', Calibre: 'Rolex Calibre 9002 Annual Calendar GMT', Power_Reserve: '72 Hours', Water_Resistance: '100 metres / 330 feet', Bracelet: 'Jubilee Five-Link with Easylink' }
    },
    {
      name: 'Rolex Sky-Dweller Annual Calendar Bright Blue Dial Jubilee (White Rolesor 336934-Blue)',
      slug: 'rolex-sky-dweller-bright-blue-jubilee-336934',
      description: 'The iconic blue dial Sky-Dweller combining deep sunray azure blue, 18k white gold fluted Ring Command bezel, and five-link Jubilee bracelet.',
      price: 15650, discount_price: 14850, stock: 7, rating: 5.0, num_reviews: 1150, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Sky-Dweller Blue Jubilee', Reference: '336934-BLUE', Case_Diameter: '42 mm', Material: 'White Rolesor', Bezel: 'Ring Command Fluted 18k White Gold', Dial: 'Bright Blue Sunray with 24h Disc', Calibre: 'Calibre 9002', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Jubilee Five-Link Bracelet' }
    },
    {
      name: 'Rolex Sky-Dweller Annual Calendar Intense White Dial Oyster (White Rolesor 336934-White)',
      slug: 'rolex-sky-dweller-intense-white-oyster-336934',
      description: 'Pristine white dial with deep black 24-hour disc numerals, red month indicator at current month marker, and Oystersteel Oyster bracelet.',
      price: 15350, discount_price: 14550, stock: 10, rating: 4.9, num_reviews: 520, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Sky-Dweller White Oyster', Reference: '336934-WHITE', Case_Diameter: '42 mm', Material: 'White Rolesor', Bezel: 'Ring Command Fluted Bezel', Dial: 'Intense White with Baton Markers', Calibre: 'Calibre 9002', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster Bracelet' }
    },
    {
      name: 'Rolex Sky-Dweller 18k Everose Gold Blue-Green Dial Oysterflex (336235)',
      slug: 'rolex-sky-dweller-everose-blue-green-oysterflex-336235',
      description: 'Solid 18k Everose gold case with breathtaking blue-green sunburst dial, Ring Command bezel, and high-performance Oysterflex elastomer bracelet.',
      price: 42700, discount_price: 40500, stock: 4, rating: 5.0, num_reviews: 480, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Sky-Dweller Everose Blue-Green', Reference: '336235-BLUEGREEN', Case_Diameter: '42 mm', Material: '18k Everose Gold', Bezel: 'Ring Command 18k Everose Fluted', Dial: 'Blue-Green Sunray Dial', Calibre: 'Calibre 9002', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oysterflex Elastomer with Glidelock' }
    },
    {
      name: 'Rolex Sky-Dweller 18k Everose Gold Sundust Dial Oyster (336935)',
      slug: 'rolex-sky-dweller-everose-sundust-oyster-336935',
      description: 'Full solid 18k Everose gold case and solid gold Oyster bracelet paired with a warm shimmering sundust sunray dial.',
      price: 50900, discount_price: 48300, stock: 3, rating: 5.0, num_reviews: 360, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Sky-Dweller Full Everose', Reference: '336935-SUNDUST', Case_Diameter: '42 mm', Material: 'Solid 18k Everose Gold', Bezel: 'Ring Command 18k Everose Fluted', Dial: 'Sundust Sunray Dial', Calibre: 'Calibre 9002', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 18k Everose Gold Oyster' }
    },
    {
      name: 'Rolex Sky-Dweller 18k Yellow Gold Intense Black Dial Oysterflex (336238)',
      slug: 'rolex-sky-dweller-yellow-gold-black-oysterflex-336238',
      description: 'Solid 18k yellow gold contrasting against an intense gloss black dial with gold 24-hour disc on an Oysterflex strap.',
      price: 40500, discount_price: 38500, stock: 5, rating: 4.9, num_reviews: 390, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Sky-Dweller Yellow Gold Oysterflex', Reference: '336238-BLACK', Case_Diameter: '42 mm', Material: '18k Yellow Gold', Bezel: 'Ring Command 18k Yellow Gold Fluted', Dial: 'Intense Black with Gold Accents', Calibre: 'Calibre 9002', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oysterflex Elastomer' }
    },
    {
      name: 'Rolex Sky-Dweller 18k Yellow Gold Champagne Dial Jubilee (336938)',
      slug: 'rolex-sky-dweller-yellow-gold-champagne-jubilee-336938',
      description: 'Full solid 18k yellow gold case, champagne sunray dial, and solid 18k yellow gold Jubilee bracelet.',
      price: 49500, discount_price: 47000, stock: 4, rating: 5.0, num_reviews: 420, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Sky-Dweller Yellow Gold Jubilee', Reference: '336938-CHAMPAGNE', Case_Diameter: '42 mm', Material: 'Solid 18k Yellow Gold', Bezel: 'Ring Command Fluted Bezel', Dial: 'Champagne Sunray', Calibre: 'Calibre 9002', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 18k Yellow Gold Jubilee' }
    },
    {
      name: 'Rolex Sky-Dweller Two-Tone Yellow Rolesor Champagne Dial (336933)',
      slug: 'rolex-sky-dweller-two-tone-champagne-336933',
      description: 'Oystersteel and 18k yellow gold case with champagne dial, 18k yellow gold Ring Command bezel, and two-tone Jubilee bracelet.',
      price: 19800, discount_price: 18900, stock: 7, rating: 4.9, num_reviews: 350, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Sky-Dweller Two-Tone Champagne', Reference: '336933-CHAMPAGNE', Case_Diameter: '42 mm', Material: 'Yellow Rolesor', Bezel: '18k Yellow Gold Ring Command', Dial: 'Champagne Sunray with 24h Disc', Calibre: 'Calibre 9002', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Yellow Rolesor Jubilee' }
    },
    {
      name: 'Rolex Sky-Dweller Two-Tone Yellow Rolesor Bright Black Dial (336933-Black)',
      slug: 'rolex-sky-dweller-two-tone-black-336933',
      description: 'Sharp contrast of two-tone gold and steel with an intense black sunburst dial and gold off-center 24-hour disc.',
      price: 19800, discount_price: 18900, stock: 6, rating: 4.9, num_reviews: 290, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Sky-Dweller Two-Tone Black', Reference: '336933-BLACK', Case_Diameter: '42 mm', Material: 'Yellow Rolesor', Bezel: '18k Gold Ring Command', Dial: 'Bright Black Sunray', Calibre: 'Calibre 9002', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Yellow Rolesor Oyster' }
    },
    {
      name: 'Rolex Sky-Dweller 18k White Gold Meteorite Dial (326939-Meteorite)',
      slug: 'rolex-sky-dweller-white-gold-meteorite-326939',
      description: 'Bespoke high-complication collector edition in solid 18k white gold with a genuine Gibeon meteorite dial and Roman numeral indicators.',
      price: 68000, discount_price: 64500, stock: 2, rating: 5.0, num_reviews: 410, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Sky-Dweller Meteorite', Reference: '326939-METEORITE', Case_Diameter: '42 mm', Material: '18k White Gold', Bezel: 'Ring Command Fluted 18k White Gold', Dial: 'Natural Meteorite Stone with 24h Ring', Calibre: 'Calibre 9002', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 18k White Gold Oyster' }
    },

    // =========================================================================
    // 10. ROLEX YACHT-MASTER & YACHT-MASTER II (10 Models)
    // =========================================================================
    {
      name: 'Rolex Yacht-Master 42 RLX Titanium Intense Black Dial (226627)',
      slug: 'rolex-yacht-master-42-rlx-titanium-226627',
      description: 'Rolex\'s featherlight regatta sports watch crafted in Grade 5 RLX Titanium with technical satin finish, matte black Cerachrom bidirectional rotatable bezel with polished raised numerals, intense black dial with Chromalight display, and full RLX Titanium Oyster bracelet powered by Calibre 3235.',
      price: 14050, discount_price: 13350, stock: 7, rating: 5.0, num_reviews: 940, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'Yacht-Master 42 Titanium', Reference: '226627', Case_Diameter: '42 mm', Material: 'Grade 5 RLX Titanium', Bezel: 'Bidirectional rotatable 60-minute matte black Cerachrom with polished raised numerals', Dial: 'Intense Black with Chromalight display', Calibre: 'Rolex Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100 metres / 330 feet', Bracelet: 'RLX Titanium Oyster with Oysterlock & Easylink' }
    },
    {
      name: 'Rolex Yacht-Master 42 18k White Gold Falcon\'s Eye Hard Stone Dial (226659)',
      slug: 'rolex-yacht-master-42-falcons-eye-white-gold-226659',
      description: 'Rare mineral dial crafted from natural Falcon\'s Eye (blue hawk\'s eye quartz) creating a shimmering chatoyant wave effect, solid 18k white gold case, matte black Cerachrom bezel, and Oysterflex bracelet.',
      price: 36500, discount_price: 34800, stock: 3, rating: 5.0, num_reviews: 580, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Yacht-Master 42 Falcon\'s Eye', Reference: '226659-FALCON', Case_Diameter: '42 mm', Material: '18k White Gold', Bezel: 'Matte Black Cerachrom Ceramic', Dial: 'Natural Chatoyant Falcon\'s Eye Stone Dial', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oysterflex Elastomer with Glidelock' }
    },
    {
      name: 'Rolex Yacht-Master 42 18k Yellow Gold Intense Black Dial Oysterflex (226658)',
      slug: 'rolex-yacht-master-42-yellow-gold-black-oysterflex-226658',
      description: 'Solid 18k yellow gold case paired with a matte black Cerachrom bezel, gloss black dial with yellow gold indices, and black Oysterflex bracelet.',
      price: 30500, discount_price: 29000, stock: 6, rating: 4.9, num_reviews: 410, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Yacht-Master 42 Yellow Gold', Reference: '226658', Case_Diameter: '42 mm', Material: '18k Yellow Gold', Bezel: 'Matte Black Cerachrom with Polished Numerals', Dial: 'Intense Black with 18k Gold Markers', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oysterflex Elastomer' }
    },
    {
      name: 'Rolex Yacht-Master 40 Rhodium / Slate Dial Cyan Second Hand (Rolesium 126622)',
      slug: 'rolex-yacht-master-40-rhodium-slate-rolesium-126622',
      description: 'Rolesium construction combining an Oystersteel case with a solid 950 platinum bidirectional bezel, dark slate sunray dial with vibrant turquoise/cyan second hand and text.',
      price: 12300, discount_price: 11700, stock: 12, rating: 5.0, num_reviews: 790, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Yacht-Master 40 Rolesium', Reference: '126622-SLATE', Case_Diameter: '40 mm', Material: 'Rolesium (Oystersteel and 950 Platinum)', Bezel: 'Solid 950 Platinum 60-Minute Raised Numerals', Dial: 'Slate Grey Sunray with Cyan Second Hand', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster Bracelet' }
    },
    {
      name: 'Rolex Yacht-Master 40 Bright Blue Sunray Dial Red Second Hand (Rolesium 126622-Blue)',
      slug: 'rolex-yacht-master-40-bright-blue-rolesium-126622',
      description: 'Solid 950 platinum bezel paired with an electric royal blue sunray dial and cherry red seconds hand on an Oystersteel Oyster bracelet.',
      price: 12300, discount_price: 11700, stock: 11, rating: 4.9, num_reviews: 640, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Yacht-Master 40 Blue', Reference: '126622-BLUE', Case_Diameter: '40 mm', Material: 'Rolesium', Bezel: 'Solid 950 Platinum Bezel', Dial: 'Bright Blue Sunray with Red Second Hand', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Yacht-Master 40 18k Everose Gold Intense Black Dial Oysterflex (126655)',
      slug: 'rolex-yacht-master-40-everose-gold-oysterflex-126655',
      description: 'Solid 18k Everose gold case with matte black Cerachrom bezel, black dial with Chromalight indices, and Oysterflex bracelet.',
      price: 29500, discount_price: 28000, stock: 8, rating: 5.0, num_reviews: 580, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Yacht-Master 40 Everose', Reference: '126655', Case_Diameter: '40 mm', Material: '18k Everose Gold', Bezel: 'Matte Black Cerachrom Bezel', Dial: 'Intense Black with Everose Markers', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oysterflex Elastomer' }
    },
    {
      name: 'Rolex Yacht-Master 37 18k Everose Gold Pavé Diamond Bezel (268655-PAVE)',
      slug: 'rolex-yacht-master-37-everose-diamond-pave-268655',
      description: 'Mid-size 37mm in 18k Everose gold with full brilliant-cut diamond paved dial, black Cerachrom bezel, and Oysterflex bracelet.',
      price: 34500, discount_price: 32800, stock: 4, rating: 5.0, num_reviews: 290, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Yacht-Master 37 Diamond Pavé', Reference: '268655-PAVE', Case_Diameter: '37 mm', Material: '18k Everose Gold', Bezel: 'Matte Black Cerachrom', Dial: 'Full Diamond Pavé Dial with Black Hands', Calibre: 'Calibre 2236', Power_Reserve: '55 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oysterflex Elastomer' }
    },
    {
      name: 'Rolex Yacht-Master II 44mm Regatta Chronograph (Oystersteel 116680)',
      slug: 'rolex-yacht-master-ii-regatta-chronograph-steel-116680',
      description: 'The purpose-built yachting chronograph. Features a programmable 10-minute countdown with mechanical memory and on-the-fly flyback synchronization via the blue Cerachrom Ring Command bezel, powered by Calibre 4161.',
      price: 18750, discount_price: 17800, stock: 6, rating: 5.0, num_reviews: 490, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Yacht-Master II Regatta', Reference: '116680', Case_Diameter: '44 mm', Material: 'Oystersteel', Bezel: 'Blue Cerachrom Ring Command Rotatable Bezel', Dial: 'Matte White with 10-Minute Countdown Horseshoe Subdial', Calibre: 'Rolex Calibre 4161 Regatta Chronograph', Power_Reserve: '72 Hours', Water_Resistance: '100 metres / 330 feet', Bracelet: 'Oystersteel Oyster with Easylink' }
    },
    {
      name: 'Rolex Yacht-Master II 44mm Two-Tone Everose Rolesor (116681)',
      slug: 'rolex-yacht-master-ii-two-tone-everose-116681',
      description: 'Regatta countdown chronograph in Oystersteel and 18k Everose gold with blue Cerachrom Ring Command bezel and blued steel hands.',
      price: 25350, discount_price: 24100, stock: 4, rating: 4.9, num_reviews: 320, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Yacht-Master II Two-Tone', Reference: '116681', Case_Diameter: '44 mm', Material: 'Everose Rolesor', Bezel: 'Blue Cerachrom Ring Command', Dial: 'White with Regatta Countdown Scale', Calibre: 'Calibre 4161', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Everose Rolesor Oyster' }
    },
    {
      name: 'Rolex Yacht-Master II 44mm 18k Yellow Gold Regatta Countdown (116688)',
      slug: 'rolex-yacht-master-ii-full-yellow-gold-116688',
      description: 'Monumental solid 18k yellow gold regatta countdown chronometer with bright blue Cerachrom Ring Command bezel and solid gold Oyster bracelet.',
      price: 43500, discount_price: 41300, stock: 3, rating: 5.0, num_reviews: 280, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Yacht-Master II Full Yellow Gold', Reference: '116688', Case_Diameter: '44 mm', Material: 'Solid 18k Yellow Gold', Bezel: 'Blue Cerachrom Ring Command', Dial: 'White Lacquer with Countdown Track', Calibre: 'Calibre 4161', Power_Reserve: '72 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 18k Yellow Gold Oyster' }
    },

    // =========================================================================
    // 11. ROLEX PERPETUAL 1908 & CELLINI (8 Models)
    // =========================================================================
    {
      name: 'Rolex Perpetual 1908 Platinum 39mm Ice Blue Rice-Grain Guilloché Dial (52506)',
      slug: 'rolex-perpetual-1908-platinum-ice-blue-guilloche-52506',
      description: 'The crowning jewel of Rolex dress watchmaking. Crafted in 950 platinum with a mesmerizing rice-grain geometric guilloché dial in ice blue, fluted and micro-domed bezel, open sapphire crystal caseback displaying Calibre 7140 with Rolex Côtes de Genève decoration and skeletonized gold rotor, paired with a brown alligator leather strap.',
      price: 30900, discount_price: 29400, stock: 4, rating: 5.0, num_reviews: 780, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'Perpetual 1908 Platinum', Reference: '52506', Case_Diameter: '39 mm', Material: '950 Platinum', Bezel: 'Divided Bezel (Part Domed, Part Fluted)', Dial: 'Ice Blue with Traditional Rice-Grain Guilloché Pattern', Calibre: 'Rolex Calibre 7140 Superlative Chronometer', Power_Reserve: '66 Hours', Water_Resistance: '50 metres / 165 feet', Caseback: 'Transparent Exhibition Sapphire Crystal', Strap: 'Matt Brown Alligator Leather with Dualclasp in 950 Platinum' }
    },
    {
      name: 'Rolex Perpetual 1908 18k Yellow Gold Intense White Dial (52508-White)',
      slug: 'rolex-perpetual-1908-yellow-gold-white-dial-52508',
      description: 'Slimline 9.5mm case in 18k yellow gold with an intense white matte dial, small seconds counter at 6 o\'clock, Arabic numerals at 3, 9, 12, open caseback, and brown alligator strap.',
      price: 22000, discount_price: 20900, stock: 6, rating: 5.0, num_reviews: 450, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Perpetual 1908 Yellow Gold White', Reference: '52508-WHITE', Case_Diameter: '39 mm', Material: '18k Yellow Gold', Bezel: 'Part Domed, Part Fluted', Dial: 'Intense White Matte with Small Seconds', Calibre: 'Calibre 7140', Power_Reserve: '66 Hours', Water_Resistance: '50m / 165ft', Strap: 'Alligator Leather with Dualclasp' }
    },
    {
      name: 'Rolex Perpetual 1908 18k Yellow Gold Intense Black Dial (52508-Black)',
      slug: 'rolex-perpetual-1908-yellow-gold-black-dial-52508',
      description: '18k yellow gold dress chronometer with deep matte black dial, Breguet-inspired openworked hands, small seconds subdial, and sapphire exhibition back.',
      price: 22000, discount_price: 20900, stock: 5, rating: 4.9, num_reviews: 380, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Perpetual 1908 Yellow Gold Black', Reference: '52508-BLACK', Case_Diameter: '39 mm', Material: '18k Yellow Gold', Bezel: 'Part Domed, Part Fluted', Dial: 'Intense Black Matte', Calibre: 'Calibre 7140', Power_Reserve: '66 Hours', Water_Resistance: '50m / 165ft', Strap: 'Black Alligator Leather Strap' }
    },
    {
      name: 'Rolex Perpetual 1908 18k White Gold Intense White Dial (52509-White)',
      slug: 'rolex-perpetual-1908-white-gold-white-dial-52509',
      description: 'Aristocratic dress chronometer in solid 18k white gold with pure white matte dial, sapphire display back, and black alligator strap.',
      price: 23300, discount_price: 22100, stock: 5, rating: 5.0, num_reviews: 310, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Perpetual 1908 White Gold White', Reference: '52509-WHITE', Case_Diameter: '39 mm', Material: '18k White Gold', Bezel: 'Part Domed, Part Fluted', Dial: 'Intense White Matte with Small Seconds', Calibre: 'Calibre 7140', Power_Reserve: '66 Hours', Water_Resistance: '50m / 165ft', Strap: 'Matt Black Alligator Strap with Dualclasp' }
    },
    {
      name: 'Rolex Perpetual 1908 18k White Gold Intense Black Dial (52509-Black)',
      slug: 'rolex-perpetual-1908-white-gold-black-dial-52509',
      description: 'Solid 18k white gold case with deep black matte dial, polished white gold faceted hour markers, and open sapphire crystal caseback.',
      price: 23300, discount_price: 22100, stock: 6, rating: 4.9, num_reviews: 290, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Perpetual 1908 White Gold Black', Reference: '52509-BLACK', Case_Diameter: '39 mm', Material: '18k White Gold', Bezel: 'Part Domed, Part Fluted', Dial: 'Intense Black Matte', Calibre: 'Calibre 7140', Power_Reserve: '66 Hours', Water_Resistance: '50m / 165ft', Strap: 'Black Alligator Strap' }
    },
    {
      name: 'Rolex Cellini Moonphase 39mm 18k Everose Gold (50535)',
      slug: 'rolex-cellini-moonphase-everose-gold-50535',
      description: 'Poetic complication featuring a blue enamel moonphase disk with an authentic circular meteorite applique representing the full moon and silver ring for the new moon, white lacquer dial, date indicator hand with crescent moon tip, and solid 18k Everose gold case.',
      price: 26750, discount_price: 25400, stock: 3, rating: 5.0, num_reviews: 540, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Cellini Moonphase', Reference: '50535', Case_Diameter: '39 mm', Material: '18k Everose Gold', Bezel: 'Double Bezel (Domed and Fluted)', Dial: 'White Lacquer with Blue Enamel Disk & Meteorite Moonphase', Calibre: 'Rolex Calibre 3195 Astronomical Moonphase', Power_Reserve: '48 Hours', Water_Resistance: '50m / 165ft', Strap: 'Brown Alligator Leather with Crownclasp' }
    },
    {
      name: 'Rolex Cellini Dual Time 39mm 18k White Gold Silver Guilloché (50529)',
      slug: 'rolex-cellini-dual-time-white-gold-silver-50529',
      description: 'Solid 18k white gold case with a classic "Rayon flammé de la gloire" guilloché silver dial, secondary 12-hour subdial with sun/moon day-night aperture.',
      price: 19400, discount_price: 18450, stock: 4, rating: 4.9, num_reviews: 280, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Cellini Dual Time', Reference: '50529', Case_Diameter: '39 mm', Material: '18k White Gold', Bezel: 'Double Fluted Bezel', Dial: 'Silver Rayon Flammé Guilloché with Sun/Moon Window', Calibre: 'Calibre 3180', Power_Reserve: '48 Hours', Water_Resistance: '50m / 165ft', Strap: 'Black Alligator Leather' }
    },
    {
      name: 'Rolex Cellini Time 39mm 18k Everose Gold Black Dial (50505)',
      slug: 'rolex-cellini-time-everose-black-dial-50505',
      description: 'Pure hours, minutes and seconds dress watch in 18k Everose gold with elongated hour markers intersected by a minute track.',
      price: 15200, discount_price: 14450, stock: 5, rating: 4.9, num_reviews: 210, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Cellini Time', Reference: '50505', Case_Diameter: '39 mm', Material: '18k Everose Gold', Bezel: 'Double Domed & Fluted Bezel', Dial: 'Black Lacquer with Rose Gold Applied Indices', Calibre: 'Calibre 3132', Power_Reserve: '48 Hours', Water_Resistance: '50m / 165ft', Strap: 'Black Alligator Leather' }
    },

    // =========================================================================
    // 12. ROLEX MILGAUSS & AIR-KING (6 Models)
    // =========================================================================
    {
      name: 'Rolex Milgauss 40mm Z-Blue Dial Green Sapphire Crystal (Oystersteel 116400GV-ZBlue)',
      slug: 'rolex-milgauss-40mm-z-blue-green-sapphire-116400gv',
      description: 'The scientist\'s timepiece designed to withstand magnetic flux density up to 1,000 gauss. Features an exclusive green sapphire crystal glass ("Glace Verte"), hypnotic electric Z-Blue sunray dial, iconic orange lightning bolt seconds hand, ferromagnetic soft-iron inner shield, and Calibre 3131.',
      price: 14500, discount_price: 13800, stock: 6, rating: 5.0, num_reviews: 980, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'Milgauss Z-Blue', Reference: '116400GV-ZBLUE', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Smooth Polished Bezel', Crystal: 'Green Sapphire Crystal (Glace Verte)', Dial: 'Electric Z-Blue Sunray with Orange Lightning Bolt Hand', Calibre: 'Rolex Calibre 3131 Antimagnetic', Magnetic_Shield: 'Internal Ferromagnetic Faraday Shield (1,000 Gauss)', Power_Reserve: '48 Hours', Water_Resistance: '100 metres / 330 feet', Bracelet: 'Oystersteel Oyster with Easylink' }
    },
    {
      name: 'Rolex Milgauss 40mm Intense Black Dial Green Sapphire Crystal (116400GV-Black)',
      slug: 'rolex-milgauss-40mm-black-dial-green-sapphire-116400gv',
      description: 'Intense black matte dial contrasting with the green sapphire crystal rim, orange lightning seconds hand, and luminous hour plots.',
      price: 13800, discount_price: 13100, stock: 7, rating: 4.9, num_reviews: 620, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Milgauss Black Glace Verte', Reference: '116400GV-BLACK', Case_Diameter: '40 mm', Material: 'Oystersteel', Crystal: 'Green Sapphire', Dial: 'Matte Black with Orange & White Lume Markers', Calibre: 'Calibre 3131', Power_Reserve: '48 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Milgauss 40mm White Dial Lightning Bolt Orange Hand (116400-White)',
      slug: 'rolex-milgauss-40mm-white-dial-orange-indices-116400',
      description: 'Stark white dial with bright orange luminescent baton indices and clear sapphire crystal, powered by Calibre 3131.',
      price: 12500, discount_price: 11900, stock: 5, rating: 4.9, num_reviews: 430, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Milgauss White Dial', Reference: '116400-WHITE', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Smooth Bezel', Dial: 'Pure White with Orange Luminescent Batons', Calibre: 'Calibre 3131', Power_Reserve: '48 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Air-King 40mm "Bloodhound Cockpit" Dial Crown Guards (Oystersteel 126900)',
      slug: 'rolex-air-king-40mm-bloodhound-126900',
      description: 'Aviation tribute referencing the instrument cockpit of the Bloodhound Supersonic Car. Distinctive black dial with prominent minute navigation scale, balanced "05" at 1 o\'clock, green printed "ROLEX" script, yellow crown emblem, green seconds hand, crown guards, and Calibre 3230.',
      price: 7450, discount_price: 7100, stock: 15, rating: 5.0, num_reviews: 860, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'Air-King 40', Reference: '126900', Case_Diameter: '40 mm', Material: 'Oystersteel with Crown Protection Guards', Bezel: 'Smooth Polished Steel', Dial: 'Black Cockpit Navigation Dial with Green & Yellow Logo', Calibre: 'Rolex Calibre 3230 Superlative Chronometer', Power_Reserve: '70 Hours', Water_Resistance: '100 metres / 330 feet', Bracelet: 'Oystersteel Oyster with Oysterlock' }
    },
    {
      name: 'Rolex Air-King 40mm Previous Generation Chronometer (Oystersteel 116900)',
      slug: 'rolex-air-king-40mm-gen1-116900',
      description: 'The 2016 revival reference 116900 with Milgauss antimagnetic case architecture, white gold applied 3, 6, 9 numerals, and green second hand.',
      price: 8600, discount_price: 8150, stock: 8, rating: 4.9, num_reviews: 510, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Air-King 40 Gen 1', Reference: '116900', Case_Diameter: '40 mm', Material: 'Oystersteel', Bezel: 'Smooth Bezel', Dial: 'Black Cockpit Dial with Applied 3-6-9', Calibre: 'Calibre 3131', Power_Reserve: '48 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },
    {
      name: 'Rolex Air-King Vintage 34mm "Precision" Heritage Edition (Ref. 5500 Tribute)',
      slug: 'rolex-air-king-5500-vintage-precision-tribute',
      description: 'Historical homage to the iconic 34mm reference 5500 produced continuously for 37 years, featuring a silver sunburst dial and classic script.',
      price: 6800, discount_price: 6450, stock: 6, rating: 4.9, num_reviews: 340, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Air-King Vintage 5500', Reference: '5500-HERITAGE', Case_Diameter: '34 mm', Material: 'Oystersteel', Bezel: 'Smooth Dome Bezel', Dial: 'Silver Sunburst with Baton Markers', Calibre: 'Calibre 3230', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Oyster' }
    },

    // =========================================================================
    // 13. ROLEX LADY-DATEJUST & PEARLMASTER (8 Models)
    // =========================================================================
    {
      name: 'Rolex Lady-Datejust 28 18k Everose Gold Diamond-Paved Dial & Bezel (President 279135RBR)',
      slug: 'rolex-lady-datejust-28-everose-diamond-pave-279135rbr',
      description: 'Exquisite jewel of horology. Solid 18k Everose gold 28mm case, full brilliant-cut diamond paved dial with applied Roman numerals, bezel set with 44 diamonds, and President bracelet with concealed Crownclasp.',
      price: 43500, discount_price: 41300, stock: 3, rating: 5.0, num_reviews: 420, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
      ],
      specifications: { Brand: 'Rolex', Model: 'Lady-Datejust 28 Haute Joaillerie', Reference: '279135RBR', Case_Diameter: '28 mm', Material: 'Solid 18k Everose Gold with Diamonds', Bezel: 'Set with 44 Brilliant-Cut Diamonds', Dial: 'Full Diamond Pavé Dial with Rose Gold Roman Numerals', Calibre: 'Rolex Calibre 2236 Superlative Chronometer', Power_Reserve: '55 Hours', Water_Resistance: '100 metres / 330 feet', Bracelet: 'President, semi-circular three-piece links with concealed Crownclasp' }
    },
    {
      name: 'Rolex Lady-Datejust 28 Two-Tone Mother-of-Pearl Diamond Dial (Yellow Rolesor 279173)',
      slug: 'rolex-lady-datejust-28-two-tone-mop-diamonds-279173',
      description: 'Natural white mother-of-pearl dial with 10 brilliant-cut diamond markers set in 18k gold star chatons, fluted 18k yellow gold bezel, and two-tone Jubilee bracelet.',
      price: 13650, discount_price: 12950, stock: 8, rating: 5.0, num_reviews: 360, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Lady-Datejust 28 MOP Star Diamond', Reference: '279173-MOP', Case_Diameter: '28 mm', Material: 'Yellow Rolesor', Bezel: 'Fluted 18k Yellow Gold', Dial: 'White Mother-of-Pearl with 10 Diamond Star Markers', Calibre: 'Calibre 2236', Power_Reserve: '55 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Yellow Rolesor Jubilee' }
    },
    {
      name: 'Rolex Lady-Datejust 28 18k Yellow Gold Champagne Diamond Dial President (279178)',
      slug: 'rolex-lady-datejust-28-yellow-gold-champagne-diamond-279178',
      description: 'Classic presidential styling scaled to 28mm in solid 18k yellow gold with champagne sunray dial and diamond hour markers.',
      price: 31000, discount_price: 29500, stock: 4, rating: 5.0, num_reviews: 290, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Lady-Datejust 28 Yellow Gold President', Reference: '279178-CHAMPAGNE', Case_Diameter: '28 mm', Material: 'Solid 18k Yellow Gold', Bezel: 'Fluted 18k Gold', Dial: 'Champagne with Diamond Markers', Calibre: 'Calibre 2236', Power_Reserve: '55 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 18k Yellow Gold President' }
    },
    {
      name: 'Rolex Lady-Datejust 28 Mint Green Dial Fluted Bezel Jubilee (White Rolesor 279174)',
      slug: 'rolex-lady-datejust-28-mint-green-fluted-jubilee-279174',
      description: 'Contemporary mint green sunray dial with 18k white gold Roman numerals, fluted bezel, and Jubilee bracelet.',
      price: 9050, discount_price: 8600, stock: 10, rating: 5.0, num_reviews: 410, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Lady-Datejust 28 Mint Green', Reference: '279174-MINT', Case_Diameter: '28 mm', Material: 'White Rolesor', Bezel: 'Fluted 18k White Gold', Dial: 'Mint Green Sunray with Roman Numerals', Calibre: 'Calibre 2236', Power_Reserve: '55 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Jubilee Five-Link Bracelet' }
    },
    {
      name: 'Rolex Lady-Datejust 28 Pink Sunray Roman Dial Jubilee (Oystersteel 279160)',
      slug: 'rolex-lady-datejust-28-pink-sunray-jubilee-279160',
      description: 'Delicate pink sunray dial with Roman numerals in a pure polished Oystersteel case with smooth bezel and Jubilee bracelet.',
      price: 7400, discount_price: 7000, stock: 12, rating: 4.9, num_reviews: 310, is_featured: false, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Lady-Datejust 28 Pink', Reference: '279160-PINK', Case_Diameter: '28 mm', Material: 'Oystersteel', Bezel: 'Smooth Domed Bezel', Dial: 'Pink Sunray with Roman Numerals', Calibre: 'Calibre 2236', Power_Reserve: '55 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Oystersteel Jubilee' }
    },
    {
      name: 'Rolex Pearlmaster 39 18k White Gold Baguette Sapphire Bezel & Diamond Pavé (86349SAFV)',
      slug: 'rolex-pearlmaster-39-white-gold-sapphire-diamond-86349safv',
      description: 'Masterpiece jewel watch in 18k white gold with 48 baguette-cut sapphires graduating in shades from blue to fuchsia pink, diamond pavé dial, and rounded Pearlmaster bracelet.',
      price: 110000, discount_price: 104500, stock: 1, rating: 5.0, num_reviews: 380, is_featured: true, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Pearlmaster 39 Baguette Sapphire', Reference: '86349SAFV', Case_Diameter: '39 mm', Material: '18k White Gold', Bezel: '48 Baguette Blue to Fuchsia Sapphires', Dial: 'Full Diamond Pavé Dial', Calibre: 'Rolex Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Pearlmaster, five-piece rounded solid links' }
    },
    {
      name: 'Rolex Pearlmaster 34 18k Yellow Gold Mother-of-Pearl Diamond Markers (81298)',
      slug: 'rolex-pearlmaster-34-yellow-gold-mop-diamonds-81298',
      description: 'Solid 18k yellow gold 34mm case with diamond-set bezel, white mother-of-pearl dial with diamond hour indices, and Pearlmaster bracelet.',
      price: 42000, discount_price: 39900, stock: 3, rating: 5.0, num_reviews: 210, is_featured: false, is_trending: false,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Pearlmaster 34 Yellow Gold', Reference: '81298-MOP', Case_Diameter: '34 mm', Material: '18k Yellow Gold', Bezel: 'Bezel Set with 12 Diamonds', Dial: 'White Mother-of-Pearl with Diamonds', Calibre: 'Calibre 2235', Power_Reserve: '48 Hours', Water_Resistance: '100m / 330ft', Bracelet: 'Solid 18k Yellow Gold Pearlmaster' }
    },
    {
      name: 'Rolex Pearlmaster 39 18k Everose Gold Rainbow Fancy Sapphire Bezel (86348SABLV)',
      slug: 'rolex-pearlmaster-39-everose-rainbow-sapphire-86348sablv',
      description: 'Solid 18k Everose gold set with 48 baguette-cut sapphires in a soft olive, blue and yellow color gradation, olive green sunray dial with diamond-set 6 and 9 Arabic numerals.',
      price: 118000, discount_price: 112000, stock: 2, rating: 5.0, num_reviews: 490, is_featured: true, is_trending: true,
      category_id: categoryId,
      image_url: 'https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80',
      images: ['https://images.unsplash.com/photo-1547996160-71dfabbce5d7?auto=format&fit=crop&w=1000&q=80'],
      specifications: { Brand: 'Rolex', Model: 'Pearlmaster 39 Everose Fancy Sapphire', Reference: '86348SABLV', Case_Diameter: '39 mm', Material: '18k Everose Gold', Bezel: '48 Baguette Olive to Yellow Sapphires', Dial: 'Olive Green Sunray with Diamond-Set 6 & 9', Calibre: 'Calibre 3235', Power_Reserve: '70 Hours', Water_Resistance: '100m / 330ft', Bracelet: '18k Everose Gold Pearlmaster' }
    }
  ];
};
