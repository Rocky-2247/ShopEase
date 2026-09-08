import { Category, Product, ProductVariant } from '../models/index.js';
import { initDatabase } from '../config/db.js';

export const seedBooksStationery = async () => {
  try {
    await initDatabase();

    // 1. Ensure Books & Stationery Category exists
    let [category] = await Category.findOrCreate({
      where: { slug: 'books-stationery' },
      defaults: {
        name: 'Books & Stationery',
        slug: 'books-stationery',
        description: 'Bestselling novels, self-help books, luxury notebooks, pens, and desk essentials',
        image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
        item_count: 10
      }
    });

    // 2. Define Books & Stationery Catalog
    const booksAndStationery = [
      {
        name: 'Atomic Habits: An Easy & Proven Way to Build Good Habits',
        slug: 'atomic-habits-james-clear',
        description: 'The #1 New York Times bestseller by James Clear. Learn how small changes deliver remarkable results with practical strategies on habit formation, overcoming lack of motivation, and designing your environment for success.',
        price: 24.00,
        discount_price: 16.99,
        stock: 150,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 420,
        is_featured: true,
        is_trending: true,
        specifications: {
          Author: 'James Clear',
          Publisher: 'Avery / Penguin Random House',
          Pages: '320 Pages',
          Language: 'English',
          Genre: 'Self-Help / Personal Productivity'
        },
        variants: [
          {
            name: 'Deluxe Hardcover Edition',
            sku: 'BOOK-ATOM-HC',
            price: 28.00,
            discount_price: 21.99,
            stock: 60,
            attributes: { format: 'Hardcover', edition: 'Collector Deluxe' },
            image_url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Standard Paperback Edition',
            sku: 'BOOK-ATOM-PB',
            price: 24.00,
            discount_price: 16.99,
            stock: 90,
            attributes: { format: 'Paperback', edition: 'Standard' },
            image_url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'The Psychology of Money: Timeless Lessons on Wealth, Greed & Happiness',
        slug: 'psychology-of-money-morgan-housel',
        description: 'Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life\'s most important topics.',
        price: 22.00,
        discount_price: 14.99,
        stock: 120,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 310,
        is_featured: true,
        is_trending: true,
        specifications: {
          Author: 'Morgan Housel',
          Publisher: 'Harriman House',
          Pages: '256 Pages',
          Language: 'English',
          Genre: 'Personal Finance & Investing'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BOOK-PSYM-PB',
            price: 22.00,
            discount_price: 14.99,
            stock: 80,
            attributes: { format: 'Paperback' },
            image_url: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Hardcover Gold Foiled Edition',
            sku: 'BOOK-PSYM-HC',
            price: 26.00,
            discount_price: 19.49,
            stock: 40,
            attributes: { format: 'Hardcover' },
            image_url: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Ikigai: The Japanese Secret to a Long and Happy Life',
        slug: 'ikigai-japanese-secret-long-happy-life',
        description: 'Discover the Japanese concept of Ikigai (a reason for being) to bring meaning and joy to all your days. Beautifully illustrated with mindful insights from the centenarians of Okinawa.',
        price: 18.99,
        discount_price: 12.49,
        stock: 95,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 260,
        is_featured: false,
        is_trending: true,
        specifications: {
          Authors: 'Héctor García and Francesc Miralles',
          Publisher: 'Penguin Life',
          Pages: '208 Pages',
          Language: 'English',
          Genre: 'Philosophy / Mindfulness'
        },
        variants: [
          {
            name: 'Hardcover Premium Gift Edition',
            sku: 'BOOK-IKI-HC',
            price: 18.99,
            discount_price: 12.49,
            stock: 95,
            attributes: { format: 'Hardcover' },
            image_url: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Rich Dad Poor Dad by Robert T. Kiyosaki',
        slug: 'rich-dad-poor-dad-robert-kiyosaki',
        description: 'What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! The #1 personal finance book of all time celebrating over 25 years of empowering millions.',
        price: 19.99,
        discount_price: 13.99,
        stock: 140,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 380,
        is_featured: true,
        is_trending: true,
        specifications: {
          Author: 'Robert T. Kiyosaki',
          Publisher: 'Plata Publishing',
          Pages: '336 Pages',
          Language: 'English',
          Edition: '25th Anniversary Edition'
        },
        variants: [
          {
            name: '25th Anniversary Paperback',
            sku: 'BOOK-RDPD-PB',
            price: 19.99,
            discount_price: 13.99,
            stock: 140,
            attributes: { format: 'Paperback' },
            image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Deep Work: Rules for Focused Success in a Distracted World',
        slug: 'deep-work-cal-newport',
        description: 'Cal Newport argues that the ability to focus without distraction is becoming increasingly rare and valuable. Master hard things and produce elite results in less time.',
        price: 21.00,
        discount_price: 15.49,
        stock: 80,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 190,
        is_featured: false,
        is_trending: true,
        specifications: {
          Author: 'Cal Newport',
          Publisher: 'Grand Central Publishing',
          Pages: '304 Pages',
          Language: 'English',
          Genre: 'Career & Self Development'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BOOK-DEEP-PB',
            price: 21.00,
            discount_price: 15.49,
            stock: 80,
            attributes: { format: 'Paperback' },
            image_url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Parker Jotter Stainless Steel Ballpoint Pen Gift Set',
        slug: 'parker-jotter-stainless-steel-pen',
        description: 'The iconic Parker Jotter with expertly crafted stainless steel barrel, signature arrow clip, and Quinkflow technology for smooth, clean, and consistent ink lines.',
        price: 26.00,
        discount_price: 19.99,
        stock: 75,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 85,
        is_featured: true,
        is_trending: false,
        specifications: {
          Brand: 'Parker Pen UK',
          PointType: 'Medium 1.0mm',
          Material: 'Surgical Grade Stainless Steel',
          Refillable: 'Yes (Parker Quink Refills)'
        },
        variants: [
          {
            name: 'Silver Chrome Trim',
            sku: 'PEN-PARK-CHR',
            price: 26.00,
            discount_price: 19.99,
            stock: 45,
            attributes: { color: 'Silver Chrome' },
            image_url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Gold Trim Edition',
            sku: 'PEN-PARK-GLD',
            price: 32.00,
            discount_price: 24.99,
            stock: 30,
            attributes: { color: 'Gold Trim' },
            image_url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Moleskine Classic Hardcover Ruled Notebook (A5)',
        slug: 'moleskine-classic-hardcover-ruled-notebook',
        description: 'The legendary notebook with ivory acid-free 70gsm paper, rounded corners, ribbon bookmark, and expandable inner back pocket for notes and cards.',
        price: 24.95,
        discount_price: 18.99,
        stock: 110,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 140,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Moleskine Italy',
          Size: 'Large A5 (5" x 8.25")',
          Pages: '240 Ruled Pages',
          Paper: 'Acid-free Ivory 70 GSM'
        },
        variants: [
          {
            name: 'Classic Black Hardcover',
            sku: 'MOL-NOTE-BLK',
            price: 24.95,
            discount_price: 18.99,
            stock: 65,
            attributes: { color: 'Black' },
            image_url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Sapphire Blue Hardcover',
            sku: 'MOL-NOTE-BLU',
            price: 24.95,
            discount_price: 18.99,
            stock: 45,
            attributes: { color: 'Sapphire Blue' },
            image_url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Pilot G2 Premium Gel Ink Rollerball Pens (Box of 12)',
        slug: 'pilot-g2-premium-gel-ink-pens-box',
        description: 'America\'s #1 Selling Gel Pen. Extra long-lasting vibrant gel ink, comfortable contoured ergonomic rubber grip, and quick-drying smear-proof writing.',
        price: 18.00,
        discount_price: 13.99,
        stock: 90,
        category_id: category.id,
        image_url: 'https://images.unsplash.com/photo-1585336261026-7f05041ff34e?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1585336261026-7f05041ff34e?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 175,
        is_featured: false,
        is_trending: true,
        specifications: {
          Brand: 'Pilot Japan',
          Quantity: 'Box of 12 Pens',
          TipSize: '0.7mm Fine Point',
          InkType: 'Archival Smear-proof Gel'
        },
        variants: [
          {
            name: 'Black Ink (12 Pack)',
            sku: 'PILOT-G2-BLK',
            price: 18.00,
            discount_price: 13.99,
            stock: 50,
            attributes: { ink: 'Black' },
            image_url: 'https://images.unsplash.com/photo-1585336261026-7f05041ff34e?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Blue Ink (12 Pack)',
            sku: 'PILOT-G2-BLU',
            price: 18.00,
            discount_price: 13.99,
            stock: 40,
            attributes: { ink: 'Blue' },
            image_url: 'https://images.unsplash.com/photo-1585336261026-7f05041ff34e?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ];

    for (const item of booksAndStationery) {
      const { variants, ...prodFields } = item;

      let [product, created] = await Product.findOrCreate({
        where: { slug: prodFields.slug },
        defaults: prodFields
      });

      if (!created) {
        await product.update(prodFields);
      }

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

    const totalBooksCount = await Product.count({ where: { category_id: category.id } });
    await category.update({ item_count: totalBooksCount });

    console.log(`📚 Successfully added ${booksAndStationery.length} Books & Stationery items (Atomic Habits, Psychology of Money, Ikigai, Rich Dad Poor Dad, Parker Jotter, Moleskine, Pilot G2)!`);
  } catch (error) {
    console.error('Error seeding books and stationery:', error);
  }
};

seedBooksStationery().then(() => process.exit(0));
