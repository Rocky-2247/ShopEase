import { Category, Product, ProductVariant } from '../models/index.js';
import { initDatabase } from '../config/db.js';

export const seedBeautyProducts = async () => {
  try {
    await initDatabase();

    // 1. Ensure Beauty & Personal Care Category Exists
    let [beautyCategory] = await Category.findOrCreate({
      where: { slug: 'beauty-care' },
      defaults: {
        name: 'Beauty & Personal Care',
        slug: 'beauty-care',
        description: 'Skincare, herbal cosmetics, haircare essentials, and daily grooming',
        image_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
        item_count: 8
      }
    });

    // 2. Define Beauty Products
    const beautyProducts = [
      {
        name: 'Himalaya Purifying Neem Face Wash',
        slug: 'himalaya-purifying-neem-face-wash',
        description: 'Formulated with pure Neem and Turmeric extracts. Clinically proven to combat acne, purify deep pores, and prevent breakouts with soap-free natural gentle cleansing.',
        price: 8.99,
        discount_price: 6.99,
        stock: 120,
        category_id: beautyCategory.id,
        image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1556228722-d0b8d5a1b32f?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 142,
        is_featured: true,
        is_trending: true,
        specifications: {
          Brand: 'Himalaya Herbals',
          KeyIngredients: 'Neem Extract, Organic Turmeric',
          SkinType: 'Acne-Prone & All Skin Types',
          Formula: '100% Soap-Free & Paraben-Free'
        },
        variants: [
          {
            name: '150 ml Flip-Cap Bottle',
            sku: 'HIM-NEEM-150',
            price: 8.99,
            discount_price: 6.99,
            stock: 75,
            attributes: { size: '150 ml' },
            image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: '200 ml Pump Mega Pack',
            sku: 'HIM-NEEM-200',
            price: 11.99,
            discount_price: 9.49,
            stock: 45,
            attributes: { size: '200 ml' },
            image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Mamaearth Onion Hair Oil for Hair Fall Control',
        slug: 'mamaearth-onion-hair-oil-hair-fall-control',
        description: 'Enriched with Red Onion Seed Oil, Plant Keratin, and Blend of 8 Essential Oils to nourish scalp roots, reduce hair fall, and stimulate thick healthy regrowth. 100% Toxin-Free.',
        price: 16.99,
        discount_price: 12.99,
        stock: 90,
        category_id: beautyCategory.id,
        image_url: 'https://images.unsplash.com/photo-1608248597359-00f0119e735e?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1608248597359-00f0119e735e?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 210,
        is_featured: true,
        is_trending: true,
        specifications: {
          Brand: 'Mamaearth',
          KeyIngredients: 'Red Onion Oil, Plant Keratin, Almond Oil',
          HairType: 'For All Hair Types & Hair Fall Control',
          Certification: 'MadeSafe Certified & Dermatologist Tested'
        },
        variants: [
          {
            name: '150 ml Bottle with Comb Applicator',
            sku: 'MAMA-OIL-150',
            price: 16.99,
            discount_price: 12.99,
            stock: 50,
            attributes: { volume: '150 ml' },
            image_url: 'https://images.unsplash.com/photo-1608248597359-00f0119e735e?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: '250 ml Value Family Pack',
            sku: 'MAMA-OIL-250',
            price: 22.99,
            discount_price: 17.99,
            stock: 40,
            attributes: { volume: '250 ml' },
            image_url: 'https://images.unsplash.com/photo-1608248597359-00f0119e735e?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Glow & Lovely Advanced Multi-Vitamin Face Cream',
        slug: 'glow-and-lovely-advanced-multi-vitamin-face-cream',
        description: 'Advanced Multi-Vitamin formula (Fair & Lovely) with Vitamin B3, Vitamin C, and Vitamin E to brighten skin, fade dark spots, and provide glowing even skin tone with SPF 15 sun defense.',
        price: 7.99,
        discount_price: 5.49,
        stock: 150,
        category_id: beautyCategory.id,
        image_url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 180,
        is_featured: true,
        is_trending: false,
        specifications: {
          Brand: 'Glow & Lovely (Fair & Lovely)',
          Vitamins: 'Vitamin B3 (Niacinamide), Vitamin C, Vitamin E',
          SunProtection: 'SPF 15 Protection',
          Usage: 'Daily Radiance Day Cream'
        },
        variants: [
          {
            name: '50 g Travel Tube',
            sku: 'GLOW-CRM-50',
            price: 7.99,
            discount_price: 5.49,
            stock: 90,
            attributes: { weight: '50 g' },
            image_url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: '100 g Value Mega Tube',
            sku: 'GLOW-CRM-100',
            price: 11.99,
            discount_price: 8.99,
            stock: 60,
            attributes: { weight: '100 g' },
            image_url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Mamaearth Ubtan Natural Face Wash with Turmeric & Saffron',
        slug: 'mamaearth-ubtan-natural-face-wash',
        description: 'Infused with traditional Ayurvedic Ubtan, Turmeric, Walnut beads, and Saffron. Gently exfoliates dead cells, removes sun tan, and restores natural radiant glow.',
        price: 9.99,
        discount_price: 7.49,
        stock: 110,
        category_id: beautyCategory.id,
        image_url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 165,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Mamaearth',
          Ingredients: 'Turmeric, Saffron, Walnut Beads, Carrot Seed Oil',
          Benefit: 'Tan Removal & Radiant Skin',
          Type: 'SLS & Paraben Free'
        },
        variants: [
          {
            name: '100 ml Tube',
            sku: 'MAMA-UBT-100',
            price: 9.99,
            discount_price: 7.49,
            stock: 65,
            attributes: { size: '100 ml' },
            image_url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: '150 ml Economy Pack',
            sku: 'MAMA-UBT-150',
            price: 13.99,
            discount_price: 10.49,
            stock: 45,
            attributes: { size: '150 ml' },
            image_url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Himalaya Herbals Nourishing Skin Cream with Aloe Vera',
        slug: 'himalaya-herbals-nourishing-skin-cream',
        description: 'All-day light and non-greasy moisturizing cream enriched with Aloe Vera, Winter Cherry, and Indian Kino Tree to shield skin from dryness, cold weather, and pollution.',
        price: 7.49,
        discount_price: 5.99,
        stock: 130,
        category_id: beautyCategory.id,
        image_url: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.6,
        num_reviews: 98,
        is_featured: false,
        is_trending: false,
        specifications: {
          Brand: 'Himalaya Herbals',
          KeyActives: 'Aloe Vera, Winter Cherry, Centella',
          Application: 'Face and Body All-Day Hydration',
          Finish: 'Non-Greasy Velvet Texture'
        },
        variants: [
          {
            name: '100 ml Tub',
            sku: 'HIM-NOUR-100',
            price: 7.49,
            discount_price: 5.99,
            stock: 80,
            attributes: { volume: '100 ml' },
            image_url: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: '200 ml Family Tub',
            sku: 'HIM-NOUR-200',
            price: 11.49,
            discount_price: 8.99,
            stock: 50,
            attributes: { volume: '200 ml' },
            image_url: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Minimalist 10% Niacinamide Serum with Zinc',
        slug: 'minimalist-10-niacinamide-serum-zinc',
        description: 'Pure Niacinamide (Vitamin B3) formulated with EU-sourced Niacinamide and Zinc PCA to minimize enlarged pores, regulate excess sebum production, and fade acne spots.',
        price: 15.99,
        discount_price: 12.99,
        stock: 85,
        category_id: beautyCategory.id,
        image_url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 245,
        is_featured: true,
        is_trending: true,
        specifications: {
          Brand: 'Minimalist',
          Concentration: '10% Pure Niacinamide + 1% Zinc PCA',
          SkinType: 'Oily, Combination & Blemish-Prone',
          Volume: '30 ml Dropper Bottle'
        },
        variants: [
          {
            name: '30 ml Dropper Glass Bottle',
            sku: 'MIN-NIA-30',
            price: 15.99,
            discount_price: 12.99,
            stock: 85,
            attributes: { volume: '30 ml' },
            image_url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Dot & Key Vitamin C + E Super Bright Moisturizer',
        slug: 'dot-and-key-vitamin-c-super-bright-moisturizer',
        description: 'Sorbet-textured lightweight daily cream loaded with 3 types of Vitamin C, Kakadu Plum, Blood Orange, and Vitamin E to deeply hydrate skin and boost natural collagen.',
        price: 19.99,
        discount_price: 15.99,
        stock: 60,
        category_id: beautyCategory.id,
        image_url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 112,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Dot & Key',
          Ingredients: 'Kakadu Plum, Ethyl Ascorbic Acid, Vitamin E',
          Texture: 'Lightweight Sorbet Gel Cream',
          Volume: '60 ml Glass Jar'
        },
        variants: [
          {
            name: '60 ml Glass Jar',
            sku: 'DOT-VITC-60',
            price: 19.99,
            discount_price: 15.99,
            stock: 60,
            attributes: { volume: '60 ml' },
            image_url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Nivea Soft Light Moisturizing Cream with Jojoba Oil',
        slug: 'nivea-soft-light-moisturizing-cream-jojoba',
        description: 'Refreshingly soft moisturizing cream with Jojoba Oil and Vitamin E that absorbs quickly into face, hands, and body for 24h supple softness and clean fresh scent.',
        price: 8.50,
        discount_price: 6.49,
        stock: 140,
        category_id: beautyCategory.id,
        image_url: 'https://images.unsplash.com/photo-1556228722-d0b8d5a1b32f?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1556228722-d0b8d5a1b32f?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 130,
        is_featured: false,
        is_trending: false,
        specifications: {
          Brand: 'Nivea',
          KeyIngredients: 'Jojoba Oil, Vitamin E',
          Application: 'Face, Body, and Hands',
          Dermatology: 'Dermatologically Approved'
        },
        variants: [
          {
            name: '100 ml Jar',
            sku: 'NIV-SOFT-100',
            price: 8.50,
            discount_price: 6.49,
            stock: 90,
            attributes: { volume: '100 ml' },
            image_url: 'https://images.unsplash.com/photo-1556228722-d0b8d5a1b32f?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: '300 ml Mega Family Tub',
            sku: 'NIV-SOFT-300',
            price: 15.00,
            discount_price: 11.99,
            stock: 50,
            attributes: { volume: '300 ml' },
            image_url: 'https://images.unsplash.com/photo-1556228722-d0b8d5a1b32f?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ];

    for (const prodData of beautyProducts) {
      const { variants, ...prodFields } = prodData;
      
      let [product, created] = await Product.findOrCreate({
        where: { slug: prodFields.slug },
        defaults: prodFields
      });

      if (!created) {
        // Update product data to ensure latest specs & image
        await product.update(prodFields);
      }

      // Seed Variants
      if (variants && variants.length > 0) {
        for (const v of variants) {
          await ProductVariant.findOrCreate({
            where: { sku: v.sku },
            defaults: {
              ...v,
              product_id: product.id
            }
          });
        }
      }
    }

    // Update category item_count
    const totalBeautyCount = await Product.count({ where: { category_id: beautyCategory.id } });
    await beautyCategory.update({ item_count: totalBeautyCount });

    console.log(`✨ Successfully added ${beautyProducts.length} Beauty & Personal Care items (Himalaya, Mamaearth, Glow & Lovely, Minimalist, Dot & Key, Nivea) with complete variants!`);
  } catch (error) {
    console.error('Error seeding beauty products:', error);
  }
};

seedBeautyProducts().then(() => process.exit(0));
