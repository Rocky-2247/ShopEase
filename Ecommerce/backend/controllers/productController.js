import { Op } from 'sequelize';
import { Product, ProductVariant, Category, Review, User } from '../models/index.js';

// @desc    Fetch all products with multi-facet filters, search, sort, pagination
// @route   GET /api/products
export const getProducts = async (req, res) => {
  try {
    const {
      keyword,
      category,
      brand,
      minPrice,
      maxPrice,
      rating,
      inStock,
      sort,
      page = 1,
      limit = 12
    } = req.query;

    const pageNumber = Math.max(1, parseInt(page, 10));
    const pageSize = Math.max(1, parseInt(limit, 10));
    const offset = (pageNumber - 1) * pageSize;

    const where = {};

    // Search keyword across name and description
    if (keyword && keyword.trim() !== '') {
      where[Op.or] = [
        { name: { [Op.like]: `%${keyword.trim()}%` } },
        { description: { [Op.like]: `%${keyword.trim()}%` } }
      ];
    }

    // Brand filter (across name and description)
    if (brand && brand.trim() !== '' && brand !== 'all') {
      const brandTerm = brand.trim();
      const brandCondition = [
        { name: { [Op.like]: `%${brandTerm}%` } },
        { description: { [Op.like]: `%${brandTerm}%` } }
      ];
      if (where[Op.or]) {
        where[Op.and] = [
          { [Op.or]: where[Op.or] },
          { [Op.or]: brandCondition }
        ];
        delete where[Op.or];
      } else {
        where[Op.or] = brandCondition;
      }
    }

    // Category filter (by ID or Slug)
    let categoryIncludeWhere = {};
    if (category && category !== 'all') {
      if (!isNaN(category)) {
        where.category_id = parseInt(category, 10);
      } else {
        categoryIncludeWhere = { slug: category };
      }
    }

    // Price range filter
    if (minPrice || maxPrice) {
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);
      if (!isNaN(min) || !isNaN(max)) {
        where.price = {};
        if (!isNaN(min)) where.price[Op.gte] = min;
        if (!isNaN(max)) where.price[Op.lte] = max;
      }
    }

    // Rating filter
    if (rating) {
      const parsedRating = parseFloat(rating);
      if (!isNaN(parsedRating) && parsedRating > 0) {
        where.rating = { [Op.gte]: parsedRating };
      }
    }

    // In-Stock filter
    if (inStock === 'true') {
      where.stock = { [Op.gt]: 0 };
    }

    // Sort order
    let order = [['createdAt', 'DESC']];
    if (sort === 'price-asc') {
      order = [['price', 'ASC']];
    } else if (sort === 'price-desc') {
      order = [['price', 'DESC']];
    } else if (sort === 'rating-desc') {
      order = [['rating', 'DESC']];
    } else if (sort === 'popularity' || sort === 'reviews-desc') {
      order = [['num_reviews', 'DESC']];
    } else if (sort === 'newest') {
      order = [['createdAt', 'DESC']];
    }

    const { count, rows: products } = await Product.findAndCountAll({
      where,
      include: [
        {
          model: Category,
          as: 'category',
          where: Object.keys(categoryIncludeWhere).length > 0 ? categoryIncludeWhere : undefined
        }
      ],
      order,
      limit: pageSize,
      offset,
      distinct: true
    });

    return res.json({
      success: true,
      data: {
        products,
        pagination: {
          total: count,
          page: pageNumber,
          pages: Math.ceil(count / pageSize),
          limit: pageSize
        }
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Fetch single product by ID or slug
// @route   GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const isNum = !isNaN(req.params.id);
    const where = isNum ? { id: req.params.id } : { slug: req.params.id };

    const product = await Product.findOne({
      where,
      include: [
        { model: Category, as: 'category' },
        { model: ProductVariant, as: 'variants' },
        {
          model: Review,
          as: 'reviews',
          include: [{ model: User, as: 'user', attributes: ['id', 'name'] }],
          order: [['createdAt', 'DESC']]
        }
      ]
    });

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    return res.json({ success: true, data: product });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get Featured Products
// @route   GET /api/products/featured
export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { is_featured: true },
      include: [{ model: Category, as: 'category' }],
      limit: 8
    });
    return res.json({ success: true, data: products });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get Trending Products
// @route   GET /api/products/trending
export const getTrendingProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { is_trending: true },
      include: [{ model: Category, as: 'category' }],
      limit: 8
    });
    return res.json({ success: true, data: products });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all commercial brands catalog with campaign metadata
// @route   GET /api/products/brands
export const getBrands = async (req, res) => {
  try {
    const brandsList = [
      {
        name: 'Apple',
        slug: 'apple',
        keyword: 'Apple',
        storeName: 'Apple Official Store',
        logo: '🍎',
        category: 'Tech & Mobiles',
        discount: '0% No-Cost EMI',
        badge: 'Authorized Reseller',
        tagline: 'Apple Intelligence Ecosystem. Supercharged by Apple Silicon.',
        description: 'Explore authentic Apple devices including iPhone, MacBook Pro, iPad Pro, and AirPods with official warranty and AppleCare+ support.',
        coupon: 'APPLE20',
        couponText: 'Extra 20% OFF (Up to $250)',
        color: 'from-slate-700 to-slate-900',
        perks: [
          { title: 'Up to 25%', subtitle: 'Instant Trade-In Value' },
          { title: '2 Years', subtitle: 'AppleCare+ Privilege' },
          { title: '0% APR', subtitle: 'No-Cost Monthly Installments' }
        ],
        popular: 'MacBook Pro, iPhone 16 Pro, Apple Vision Pro, AirPods Max',
        featured: true
      },
      {
        name: 'Samsung',
        slug: 'samsung',
        keyword: 'Samsung',
        storeName: 'Galaxy AI Official Store',
        logo: '🌌',
        category: 'Electronics & Tech',
        discount: 'Up to 35% OFF',
        badge: 'Official Partner',
        tagline: 'Next-Gen Galaxy Ecosystem. Intelligent Performance & OLED Brilliance.',
        description: 'Experience seamless synergy with Galaxy Book4, Galaxy S24 Ultra, and Galaxy Buds with spatial audio and exclusive launch privileges.',
        coupon: 'SAMSUNG20',
        couponText: 'Extra 20% OFF (Up to $200)',
        color: 'from-blue-600 to-indigo-700',
        perks: [
          { title: 'Up to 35%', subtitle: 'Instant Discount' },
          { title: '2 Years', subtitle: 'Samsung Care+ Included' },
          { title: '0% EMI', subtitle: 'No-Cost Payment Option' }
        ],
        popular: 'Galaxy Book4 Pro, S24 Ultra, Neo QLED TV',
        featured: true
      },
      {
        name: 'Sony',
        slug: 'sony',
        keyword: 'Sony',
        storeName: 'Sony Center',
        logo: '🎧',
        category: 'Audio & Vision',
        discount: 'Flat ₹5,000 OFF',
        badge: 'Official Partner',
        tagline: 'Spatial Audio & Cinema Imaging. Mastered for Pure Precision.',
        description: 'Award-winning noise-cancelling headphones, Bravia OLED displays, and alpha mirrorless optics for creators and audiophiles.',
        coupon: 'SONY20',
        couponText: 'Flat 20% Savings',
        color: 'from-purple-600 to-indigo-800',
        perks: [
          { title: 'Flat ₹5,000', subtitle: 'Instant Cashback' },
          { title: 'Hi-Res', subtitle: 'LDAC Certified Audio' },
          { title: '3 Years', subtitle: 'Extended Panel Warranty' }
        ],
        popular: 'WH-1000XM5, Bravia XR, PlayStation 5',
        featured: true
      },
      {
        name: 'Nike',
        slug: 'nike',
        keyword: 'Nike',
        storeName: 'Nike Pro Store',
        logo: '⚡',
        category: 'Sports & Activewear',
        discount: 'Extra 15% OFF',
        badge: 'Top Performance',
        tagline: 'Bring Your Best. Engineered for Peak Athletic Performance.',
        description: 'Iconic footwear, breathable running apparel, and cutting-edge sportswear designed for athletes worldwide.',
        coupon: 'NIKE20',
        couponText: 'Extra 20% OFF Activewear',
        color: 'from-amber-600 to-orange-700',
        perks: [
          { title: 'Extra 15%', subtitle: 'Member Discount' },
          { title: 'Free', subtitle: '30-Day Wear Test' },
          { title: 'Express', subtitle: 'Priority Delivery' }
        ],
        popular: 'Air Jordan, Pegasus 41, Dri-FIT Pro',
        featured: true
      },
      {
        name: 'Adidas',
        slug: 'adidas',
        keyword: 'Adidas',
        storeName: 'Adidas Originals Flagship',
        logo: '👟',
        category: 'Footwear & Originals',
        discount: 'Buy 2 Get 20% OFF',
        badge: 'Top Seller',
        tagline: 'Originals Never Settle. Iconic Streetwear & Performance.',
        description: 'Timeless lifestyle footwear and high-performance running innovations powered by Boost technology.',
        coupon: 'ADIDAS20',
        couponText: 'Buy 2 Get 20% OFF',
        color: 'from-cyan-600 to-blue-800',
        perks: [
          { title: 'Buy 2', subtitle: 'Get 20% OFF' },
          { title: 'AdiClub', subtitle: 'Double Points Multiplier' },
          { title: 'Free', subtitle: 'Standard Returns' }
        ],
        popular: 'Ultraboost Light, Samba OG, Adicolor',
        featured: true
      },
      {
        name: 'Dyson',
        slug: 'dyson',
        keyword: 'Dyson',
        storeName: 'Dyson Direct',
        logo: '🌪️',
        category: 'Home & Grooming',
        discount: 'Free Express Delivery',
        badge: 'Official Store',
        tagline: 'Pioneering Airflow Science & Intelligent Home Technology.',
        description: 'Cordless vacuum innovation, intelligent hair styling without extreme heat, and HEPA air purification.',
        coupon: 'DYSON20',
        couponText: 'Exclusive VIP Offer',
        color: 'from-pink-600 to-rose-800',
        perks: [
          { title: 'VIP Gift', subtitle: 'Styling Travel Case' },
          { title: '2 Years', subtitle: 'Comprehensive Warranty' },
          { title: 'Free', subtitle: 'Express Dispatch' }
        ],
        popular: 'Supersonic Nural, Airwrap, V15 Detect',
        featured: true
      },
      {
        name: 'Bose',
        slug: 'bose',
        keyword: 'Bose',
        storeName: 'Bose Sound Lounge',
        logo: '🎵',
        category: 'Premium Audio',
        discount: 'Save ₹4,000 Today',
        badge: 'Official Partner',
        tagline: 'Sound is Power. World-Class QuietComfort Acoustics.',
        description: 'Industry-standard active noise cancelling headphones and immersive smart soundbars for audiophiles.',
        coupon: 'BOSE20',
        couponText: 'Save ₹4,000 Today',
        color: 'from-emerald-600 to-teal-800',
        perks: [
          { title: '₹4,000', subtitle: 'Instant Price Drop' },
          { title: 'Spatial', subtitle: 'CustomTune Audio' },
          { title: '90-Day', subtitle: 'Risk-Free Trial' }
        ],
        popular: 'QuietComfort Ultra, Smart Soundbar',
        featured: true
      },
      {
        name: "Levi's",
        slug: 'levis',
        keyword: 'Levis',
        storeName: "Levi's Heritage Store",
        logo: '👖',
        category: 'Denim & Streetwear',
        discount: 'Instant ₹500 Voucher',
        badge: 'Heritage Brand',
        tagline: 'Authentic Denim Since 1873. Iconic Fits & Modern Silhouettes.',
        description: 'World-renowned 501 jeans, durable trucker jackets, and sustainable casual wear.',
        coupon: 'LEVIS20',
        couponText: 'Instant ₹500 Voucher',
        color: 'from-red-600 to-rose-800',
        perks: [
          { title: '₹500 OFF', subtitle: 'First Denim Order' },
          { title: '100%', subtitle: 'Premium Cotton' },
          { title: 'Tailored', subtitle: 'Free Hemming Service' }
        ],
        popular: '501 Original, Trucker Jacket, Relaxed Tees',
        featured: true
      },
      {
        name: 'Logitech',
        slug: 'logitech',
        keyword: 'Logitech',
        storeName: 'Logitech G & Workspace',
        logo: '🖱️',
        category: 'Gaming & Work',
        discount: 'Up to 30% OFF',
        badge: 'Pro Gear',
        tagline: 'Work Seamlessly. Game Masterfully with Pro Gear.',
        description: 'Ergonomic MX Master mice, mechanical switches, and high-precision LIGHTSPEED gaming gear.',
        coupon: 'LOGITECH20',
        couponText: 'Extra 20% Gaming Gear',
        color: 'from-teal-600 to-cyan-800',
        perks: [
          { title: 'Up to 30%', subtitle: 'On MX Workspace' },
          { title: 'LIGHTSPEED', subtitle: 'Wireless Zero Lag' },
          { title: '2 Years', subtitle: 'Hardware Warranty' }
        ],
        popular: 'MX Master 3S, G Pro X Superlight, MX Keys',
        featured: true
      },
      {
        name: 'Dell',
        slug: 'dell',
        keyword: 'Dell',
        storeName: 'Dell Technologies Store',
        logo: '💻',
        category: 'Laptops & Monitors',
        discount: 'Save Up to 25%',
        badge: 'Official Store',
        tagline: 'Unmatched Productivity. XPS Precision & Alienware Power.',
        description: 'Premium infinity-edge displays, ultra-portable performance laptops, and ultra-sharp 4K monitors.',
        coupon: 'DELL20',
        couponText: 'Save Up to 25% Today',
        color: 'from-sky-700 to-blue-900',
        perks: [
          { title: 'Save 25%', subtitle: 'On XPS & Monitors' },
          { title: 'Next-Day', subtitle: 'Onsite Support' },
          { title: '0% EMI', subtitle: 'Flexible Corporate Plans' }
        ],
        popular: 'XPS 15, UltraSharp 4K, Alienware M16',
        featured: true
      },
      {
        name: 'Rolex',
        slug: 'rolex',
        keyword: 'Rolex',
        storeName: 'Rolex Certified Boutique',
        logo: '👑',
        category: 'Luxury Watches',
        discount: 'Certified Authentic',
        badge: 'Luxury Partner',
        tagline: 'A Crown for Every Achievement. Precision Swiss Horology.',
        description: 'Masterpieces of horological art, chronometer-certified calibers, and iconic Oystersteel elegance.',
        coupon: 'ROLEX20',
        couponText: 'Exclusive Privilege',
        color: 'from-emerald-800 to-amber-900',
        perks: [
          { title: 'Certified', subtitle: 'Authenticity Guarantee' },
          { title: '5 Years', subtitle: 'International Warranty' },
          { title: 'White-Glove', subtitle: 'Insured Delivery' }
        ],
        popular: 'Submariner Date, Daytona, Datejust 41',
        featured: true
      },
      {
        name: 'Puma',
        slug: 'puma',
        keyword: 'Puma',
        storeName: 'Puma Performance & Speed',
        logo: '🐆',
        category: 'Athletics & Shoes',
        discount: 'Extra 20% OFF',
        badge: 'Official Partner',
        tagline: 'Forever Faster. Street Culture Meets High-Octane Speed.',
        description: 'Nitro-cushioned marathon shoes, motorsport lifestyle apparel, and training gear.',
        coupon: 'PUMA20',
        couponText: 'Extra 20% OFF',
        color: 'from-red-600 to-slate-900',
        perks: [
          { title: 'Extra 20%', subtitle: 'On Nitro Series' },
          { title: 'Motorsport', subtitle: 'Scuderia Ferrari Collabs' },
          { title: 'Express', subtitle: 'Free Shipping Available' }
        ],
        popular: 'Deviate Nitro 2, Suede Classic, F1 Collection',
        featured: true
      },
      {
        name: 'Philips',
        slug: 'philips',
        keyword: 'Philips',
        storeName: 'Philips Innovation Store',
        logo: '💡',
        category: 'Personal Care & Home',
        discount: 'Up to 40% OFF',
        badge: 'Official Store',
        tagline: 'Innovation & You. Smart Grooming & Ambient Lighting.',
        description: 'Sonicare electric toothbrushes, OneBlade precision groomers, and Hue ambient home lighting.',
        coupon: 'PHILIPS20',
        couponText: 'Up to 40% OFF',
        color: 'from-blue-700 to-slate-800',
        perks: [
          { title: 'Up to 40%', subtitle: 'Smart Grooming Deals' },
          { title: 'Hue Sync', subtitle: 'Smart Ambient Lighting' },
          { title: '2 Years', subtitle: 'Replacement Guarantee' }
        ],
        popular: 'OneBlade Pro, Sonicare 9900, Hue Bridge Kit',
        featured: true
      },
      {
        name: 'Canon',
        slug: 'canon',
        keyword: 'Canon',
        storeName: 'Canon EOS Pro Studio',
        logo: '📷',
        category: 'Cameras & Optics',
        discount: 'Special Bundle Deals',
        badge: 'Pro Visual',
        tagline: 'Delighting You Always. Legendary Mirrorless Photography.',
        description: 'EOS R full-frame mirrorless cameras, RF L-series cinema lenses, and professional 8K video.',
        coupon: 'CANON20',
        couponText: 'Special Bundle Deals',
        color: 'from-red-700 to-stone-900',
        perks: [
          { title: 'Bundle Gift', subtitle: 'Free 128GB Pro SD Card' },
          { title: '8K Video', subtitle: 'Raw Recording Capable' },
          { title: '3 Years', subtitle: 'Sensor Service Warranty' }
        ],
        popular: 'EOS R5 Mark II, RF 24-70mm f/2.8L, EOS R6',
        featured: true
      },
      {
        name: 'Asus',
        slug: 'asus',
        keyword: 'Asus',
        storeName: 'Republic of Gamers (ROG)',
        logo: '🎮',
        category: 'ROG Gaming & Tech',
        discount: 'Extra ₹3,000 OFF',
        badge: 'Gaming Partner',
        tagline: 'For Those Who Dare. Republic of Gamers Dominance.',
        description: 'ROG Zephyrus gaming powerhouses, ROG Ally handheld gaming, and 240Hz OLED gaming monitors.',
        coupon: 'ASUS20',
        couponText: 'Extra ₹3,000 OFF',
        color: 'from-rose-600 to-purple-900',
        perks: [
          { title: '₹3,000 OFF', subtitle: 'On ROG & TUF Series' },
          { title: 'Nebula OLED', subtitle: '0.2ms Response Displays' },
          { title: '3 Months', subtitle: 'Xbox Game Pass Ultimate' }
        ],
        popular: 'ROG Zephyrus G16, ROG Ally X, Zenbook Duo OLED',
        featured: true
      },
      {
        name: 'Zara',
        slug: 'zara',
        keyword: 'Zara',
        storeName: 'Zara Haute Atelier',
        logo: '✨',
        category: 'Fashion & Style',
        discount: 'New Season 2026',
        badge: 'Designer Store',
        tagline: 'Contemporary Fashion. Runway Elegance for Every Wardrobe.',
        description: 'Tailored blazers, premium knitwear, sophisticated outerwear, and seasonal capsule collections.',
        coupon: 'ZARA20',
        couponText: 'New Season 2026 Privilege',
        color: 'from-stone-700 to-stone-900',
        perks: [
          { title: 'New Season', subtitle: 'Capsule Drops Weekly' },
          { title: 'Sustainable', subtitle: 'Join Life Eco Fabrics' },
          { title: 'Free', subtitle: 'Boutique Pickup & Returns' }
        ],
        popular: 'Oversized Wool Blazer, Silk Blend Shirt, Tailored Trousers',
        featured: true
      }
    ];

    return res.json({ success: true, data: brandsList });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get Related Products by Category
// @route   GET /api/products/:id/related
export const getRelatedProducts = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const related = await Product.findAll({
      where: {
        category_id: product.category_id,
        id: { [Op.ne]: product.id }
      },
      include: [{ model: Category, as: 'category' }],
      limit: 4
    });

    return res.json({ success: true, data: related });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create a product (Admin)
// @route   POST /api/products
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discount_price,
      stock,
      category_id,
      image_url,
      video_url,
      images,
      is_featured,
      is_trending,
      specifications
    } = req.body;

    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') + '-' + Date.now().toString().slice(-4);

    const product = await Product.create({
      name,
      slug,
      description,
      price: parseFloat(price),
      discount_price: discount_price ? parseFloat(discount_price) : null,
      stock: parseInt(stock, 10) || 0,
      category_id: parseInt(category_id, 10),
      image_url: image_url || (images && images.length > 0 ? images[0] : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'),
      video_url: video_url || null,
      images: images || [],
      is_featured: !!is_featured,
      is_trending: !!is_trending,
      specifications: specifications || {}
    });

    // Update item_count on category
    await Category.increment('item_count', { by: 1, where: { id: category_id } });

    const created = await Product.findByPk(product.id, {
      include: [{ model: Category, as: 'category' }]
    });

    return res.status(201).json({ success: true, data: created, message: 'Product created successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update a product (Admin)
// @route   PUT /api/products/:id
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const {
      name,
      description,
      price,
      discount_price,
      stock,
      category_id,
      image_url,
      video_url,
      images,
      is_featured,
      is_trending,
      specifications
    } = req.body;

    if (name) product.name = name;
    if (description) product.description = description;
    if (price !== undefined) product.price = parseFloat(price);
    if (discount_price !== undefined) product.discount_price = discount_price ? parseFloat(discount_price) : null;
    if (stock !== undefined) product.stock = parseInt(stock, 10);
    if (category_id) product.category_id = parseInt(category_id, 10);
    if (image_url) product.image_url = image_url;
    if (video_url !== undefined) product.video_url = video_url;
    if (images) product.images = images;
    if (is_featured !== undefined) product.is_featured = !!is_featured;
    if (is_trending !== undefined) product.is_trending = !!is_trending;
    if (specifications) product.specifications = specifications;

    await product.save();

    const updated = await Product.findByPk(product.id, {
      include: [{ model: Category, as: 'category' }]
    });

    return res.json({ success: true, data: updated, message: 'Product updated successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete a product (Admin)
// @route   DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const categoryId = product.category_id;
    await product.destroy();

    // Decrement item_count on category
    await Category.decrement('item_count', { by: 1, where: { id: categoryId } });

    return res.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
