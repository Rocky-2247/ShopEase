// backend/utils/seedRolex.js
// Dedicated seeder to load 140+ Official Rolex Watch Models into SQLite Database

import { sequelize, Category, Product, ProductVariant, Coupon } from '../models/index.js';
import { initDatabase } from '../config/db.js';
import { getRolexProducts } from './rolexProductsData.js';
import { getEnrichedMediaForProduct } from './productMediaEnricher.js';

export const seedRolexWatches = async () => {
  try {
    await initDatabase();
    console.log('👑 Connecting to database to seed Rolex luxury collection...');

    // 1. Ensure 'watches-jewelry' category exists
    let [category, catCreated] = await Category.findOrCreate({
      where: { slug: 'watches-jewelry' },
      defaults: {
        name: 'Watches & Jewelry',
        slug: 'watches-jewelry',
        description: 'Precision chronograph timepieces, certified luxury watches, Swiss calibres, and bespoke jewelry',
        image_url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
        item_count: 0
      }
    });

    console.log(`📁 Category 'Watches & Jewelry' resolved with ID: ${category.id}`);

    // 2. Fetch all Rolex products
    const rolexProducts = getRolexProducts(category.id);
    console.log(`📦 Preparing to seed ${rolexProducts.length} unique Rolex watch models...`);

    let createdCount = 0;
    let updatedCount = 0;

    for (const rawProd of rolexProducts) {
      const enriched = getEnrichedMediaForProduct(rawProd);
      const prodData = {
        ...rawProd,
        category_id: category.id,
        image_url: enriched.image_url,
        images: enriched.images,
        video_url: enriched.video_url
      };

      const [product, created] = await Product.findOrCreate({
        where: { slug: prodData.slug },
        defaults: prodData
      });

      if (created) {
        createdCount++;
      } else {
        await product.update({
          category_id: prodData.category_id,
          name: prodData.name,
          description: prodData.description,
          price: prodData.price,
          discount_price: prodData.discount_price,
          stock: prodData.stock,
          image_url: prodData.image_url,
          images: prodData.images,
          video_url: prodData.video_url,
          rating: prodData.rating,
          num_reviews: prodData.num_reviews,
          is_featured: prodData.is_featured,
          is_trending: prodData.is_trending,
          specifications: prodData.specifications
        });
        updatedCount++;
      }
    }

    // 3. Create Official Rolex Privilege Coupon
    await Coupon.findOrCreate({
      where: { code: 'ROLEX10' },
      defaults: {
        code: 'ROLEX10',
        discount_percentage: 10,
        max_discount: 2500,
        min_order_value: 5000,
        is_active: true
      }
    });

    // 4. Update dynamic category count
    const totalWatchesCount = await Product.count({ where: { category_id: category.id } });
    await category.update({ item_count: totalWatchesCount });

    const totalRolexInDb = await Product.count({
      where: sequelize.where(
        sequelize.fn('LOWER', sequelize.col('name')),
        'LIKE',
        '%rolex%'
      )
    });

    console.log('----------------------------------------------------');
    console.log(`✅ Rolex Seeding Complete!`);
    console.log(`✨ Created: ${createdCount} new models`);
    console.log(`🔄 Updated: ${updatedCount} existing models`);
    console.log(`👑 Total Rolex Models in Database: ${totalRolexInDb}`);
    console.log(`🏷️ Total Watches & Jewelry Items in DB: ${totalWatchesCount}`);
    console.log('----------------------------------------------------');

    return { totalRolexInDb, totalWatchesCount };
  } catch (error) {
    console.error('❌ Error seeding Rolex watches:', error);
    throw error;
  }
};

if (process.argv[2] === '--run' || process.argv[1]?.includes('seedRolex.js')) {
  seedRolexWatches().then(() => process.exit(0)).catch(() => process.exit(1));
}
