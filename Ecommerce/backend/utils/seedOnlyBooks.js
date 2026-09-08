import { Category, Product, ProductVariant } from '../models/index.js';
import { initDatabase } from '../config/db.js';

export const seedOnlyBooks = async () => {
  try {
    await initDatabase();

    // 1. Get Categories
    const [booksCategory] = await Category.findOrCreate({
      where: { slug: 'books-stationery' },
      defaults: {
        name: 'Books & Stationery',
        slug: 'books-stationery',
        description: 'Bestselling books, novels, self-improvement, finance, science, and literature',
        image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
        item_count: 20
      }
    });

    await booksCategory.update({
      name: 'Books & Stationery',
      description: 'Bestselling books, novels, self-improvement, finance, science, and literature'
    });

    const [electronicsCategory] = await Category.findOrCreate({
      where: { slug: 'electronics' },
      defaults: {
        name: 'Electronics',
        slug: 'electronics',
        description: 'Flagship laptops, smartphones, noise-cancelling audio, consoles, and smart accessories',
        image_url: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80',
        item_count: 20
      }
    });

    // 2. Move any Samsung electronics out of Books & Stationery into Electronics
    const samsungSlugsToMove = [
      'samsung-galaxy-tab-s9-ultra-spen',
      'samsung-s-pen-pro-stylus',
      'samsung-s-pen-creator-edition',
      'samsung-notepaper-screen-protector',
      'samsung-galaxy-book4-pro-360-laptop',
      'samsung-galaxy-tab-s9-fe-plus',
      'samsung-galaxy-tab-a9-plus',
      'samsung-t7-shield-2tb-portable-ssd'
    ];

    for (const slug of samsungSlugsToMove) {
      const prod = await Product.findOne({ where: { slug } });
      if (prod) {
        await prod.update({ category_id: electronicsCategory.id });
      }
    }

    // 3. Define extensive list of ONLY BESTSELLING BOOKS for Books & Stationery
    const booksCatalog = [
      {
        name: 'Atomic Habits: An Easy & Proven Way to Build Good Habits',
        slug: 'atomic-habits-james-clear',
        description: 'No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear, one of the world\'s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
        price: 799,
        discount_price: 499,
        stock: 85,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 420,
        is_featured: true,
        is_trending: true,
        specifications: {
          Author: 'James Clear',
          Publisher: 'Penguin Random House',
          Language: 'English',
          Pages: '320 pages',
          Format: 'Paperback / Hardcover Available',
          ISBN_13: '978-0735211292'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BK-ATOM-PB-01',
            price: 699,
            discount_price: 449,
            stock: 55,
            attributes: { format: 'Paperback', language: 'English' },
            image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Deluxe Hardcover Edition',
            sku: 'BK-ATOM-HC-02',
            price: 999,
            discount_price: 749,
            stock: 30,
            attributes: { format: 'Hardcover', language: 'English' },
            image_url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'The Psychology of Money: Timeless Lessons on Wealth, Greed & Happiness',
        slug: 'psychology-of-money-morgan-housel',
        description: 'Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. Award-winning author Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of life\'s most important topics.',
        price: 599,
        discount_price: 349,
        stock: 90,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 310,
        is_featured: true,
        is_trending: true,
        specifications: {
          Author: 'Morgan Housel',
          Publisher: 'Jaico Publishing House',
          Language: 'English',
          Pages: '252 pages',
          Format: 'Paperback / Hardcover',
          ISBN_13: '978-9390166268'
        },
        variants: [
          {
            name: 'Paperback',
            sku: 'BK-PSYM-PB-01',
            price: 599,
            discount_price: 349,
            stock: 60,
            attributes: { format: 'Paperback', language: 'English' },
            image_url: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Hardcover Collector',
            sku: 'BK-PSYM-HC-02',
            price: 799,
            discount_price: 549,
            stock: 30,
            attributes: { format: 'Hardcover', language: 'English' },
            image_url: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Ikigai: The Japanese Secret to a Long and Happy Life',
        slug: 'ikigai-japanese-secret-long-happy-life',
        description: 'Bring meaning and joy to all your days with this internationally bestselling guide to the Japanese concept of Ikigai (pronounced ee-key-guy)—the art of finding satisfaction, purpose, and balance in everyday life.',
        price: 599,
        discount_price: 399,
        stock: 75,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 285,
        is_featured: false,
        is_trending: true,
        specifications: {
          Author: 'Héctor García and Francesc Miralles',
          Publisher: 'Hutchinson',
          Language: 'English',
          Pages: '208 pages',
          Format: 'Hardcover',
          ISBN_13: '978-1786330895'
        },
        variants: [
          {
            name: 'Hardcover Original',
            sku: 'BK-IKIGAI-HC',
            price: 599,
            discount_price: 399,
            stock: 75,
            attributes: { format: 'Hardcover', language: 'English' },
            image_url: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Rich Dad Poor Dad by Robert T. Kiyosaki',
        slug: 'rich-dad-poor-dad-robert-kiyosaki',
        description: 'What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Rich Dad Poor Dad is the #1 personal finance book of all time, challenging conventional wisdom and advocating the importance of financial literacy, financial independence and building wealth.',
        price: 599,
        discount_price: 389,
        stock: 95,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 350,
        is_featured: true,
        is_trending: true,
        specifications: {
          Author: 'Robert T. Kiyosaki',
          Publisher: 'Plata Publishing',
          Language: 'English',
          Pages: '336 pages',
          Format: 'Paperback 25th Anniversary Edition',
          ISBN_13: '978-1612680194'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BK-RDPD-PB',
            price: 599,
            discount_price: 389,
            stock: 95,
            attributes: { format: 'Paperback', language: 'English' },
            image_url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Deep Work: Rules for Focused Success in a Distracted World',
        slug: 'deep-work-cal-newport',
        description: 'Deep work is the ability to focus without distraction on a cognitively demanding task. Wall Street Journal business bestseller by Cal Newport, providing an indispensable guide for anyone seeking focused success in an increasingly noisy world.',
        price: 699,
        discount_price: 449,
        stock: 50,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 195,
        is_featured: false,
        is_trending: true,
        specifications: {
          Author: 'Cal Newport',
          Publisher: 'Grand Central Publishing',
          Language: 'English',
          Pages: '304 pages',
          Format: 'Paperback',
          ISBN_13: '978-1455586691'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BK-DPWK-PB',
            price: 699,
            discount_price: 449,
            stock: 50,
            attributes: { format: 'Paperback', language: 'English' },
            image_url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'The Alchemist: A Fable About Following Your Dream',
        slug: 'the-alchemist-paulo-coelho',
        description: 'Paulo Coelho\'s enchanting novel has inspired millions of people around the world. The story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.',
        price: 499,
        discount_price: 299,
        stock: 110,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 512,
        is_featured: true,
        is_trending: true,
        specifications: {
          Author: 'Paulo Coelho',
          Publisher: 'HarperOne',
          Language: 'English',
          Pages: '208 pages',
          Format: 'Paperback / Hardcover',
          ISBN_13: '978-0062315007'
        },
        variants: [
          {
            name: 'Paperback',
            sku: 'BK-ALCH-PB',
            price: 499,
            discount_price: 299,
            stock: 70,
            attributes: { format: 'Paperback' },
            image_url: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80'
          },
          {
            name: 'Hardcover 25th Anniversary Edition',
            sku: 'BK-ALCH-HC',
            price: 799,
            discount_price: 499,
            stock: 40,
            attributes: { format: 'Hardcover' },
            image_url: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Sapiens: A Brief History of Humankind',
        slug: 'sapiens-brief-history-of-humankind',
        description: 'Explore the history of human species from the Stone Age to the modern day. Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical—and sometimes devastating—breakthroughs of the Cognitive, Agricultural and Scientific Revolutions.',
        price: 899,
        discount_price: 549,
        stock: 65,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 430,
        is_featured: true,
        is_trending: true,
        specifications: {
          Author: 'Yuval Noah Harari',
          Publisher: 'Harper',
          Language: 'English',
          Pages: '464 pages',
          Format: 'Paperback',
          ISBN_13: '978-0062316097'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BK-SAPIENS-PB',
            price: 899,
            discount_price: 549,
            stock: 65,
            attributes: { format: 'Paperback', language: 'English' },
            image_url: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Thinking, Fast and Slow by Daniel Kahneman',
        slug: 'thinking-fast-and-slow-daniel-kahneman',
        description: 'The phenomenal international bestseller by Nobel Memorial Prize winner Daniel Kahneman. Offers a whole new look at the two systems that drive the way we think: System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical.',
        price: 799,
        discount_price: 499,
        stock: 55,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 260,
        is_featured: false,
        is_trending: true,
        specifications: {
          Author: 'Daniel Kahneman',
          Publisher: 'Farrar, Straus and Giroux',
          Language: 'English',
          Pages: '512 pages',
          Format: 'Paperback',
          ISBN_13: '978-0374533557'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BK-THKFS-PB',
            price: 799,
            discount_price: 499,
            stock: 55,
            attributes: { format: 'Paperback', language: 'English' },
            image_url: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'The 48 Laws of Power by Robert Greene',
        slug: 'the-48-laws-of-power-robert-greene',
        description: 'Amoral, cunning, ruthless, and instructive, this multi-million-copy New York Times bestseller is the definitive manual for anyone interested in gaining, observing, or defending against ultimate control.',
        price: 999,
        discount_price: 699,
        stock: 60,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 380,
        is_featured: true,
        is_trending: true,
        specifications: {
          Author: 'Robert Greene',
          Publisher: 'Penguin Books',
          Language: 'English',
          Pages: '480 pages',
          Format: 'Paperback / Hardcover',
          ISBN_13: '978-0140280197'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BK-48LOP-PB',
            price: 999,
            discount_price: 699,
            stock: 60,
            attributes: { format: 'Paperback', language: 'English' },
            image_url: 'https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Can\'t Hurt Me: Master Your Mind and Defy the Odds',
        slug: 'cant-hurt-me-david-goggins',
        description: 'For David Goggins, childhood was a nightmare—poverty, prejudice, and physical abuse colored his days and haunted his nights. But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man into a U.S. Armed Forces icon and one of the world\'s top endurance athletes.',
        price: 899,
        discount_price: 599,
        stock: 70,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 395,
        is_featured: false,
        is_trending: true,
        specifications: {
          Author: 'David Goggins',
          Publisher: 'Lioncrest Publishing',
          Language: 'English',
          Pages: '364 pages',
          Format: 'Paperback / Clean Edition',
          ISBN_13: '978-1544512280'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BK-CHME-PB',
            price: 899,
            discount_price: 599,
            stock: 70,
            attributes: { format: 'Paperback' },
            image_url: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'The Power of Your Subconscious Mind by Dr. Joseph Murphy',
        slug: 'the-power-of-your-subconscious-mind-dr-joseph-murphy',
        description: 'One of the most promising self-improvement books in history. Millions have benefited from Dr. Murphy\'s remarkable book in finding the keys to unlock spiritual, emotional and financial success through the latent powers of the mind.',
        price: 399,
        discount_price: 219,
        stock: 120,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 340,
        is_featured: false,
        is_trending: true,
        specifications: {
          Author: 'Dr. Joseph Murphy',
          Publisher: 'Fingerprint! Publishing',
          Language: 'English',
          Pages: '312 pages',
          Format: 'Paperback',
          ISBN_13: '978-8172345662'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BK-POYSM-PB',
            price: 399,
            discount_price: 219,
            stock: 120,
            attributes: { format: 'Paperback' },
            image_url: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Wings of Fire: An Autobiography of Dr. A.P.J. Abdul Kalam',
        slug: 'wings-of-fire-apj-abdul-kalam',
        description: 'An inspirational autobiography of visionary scientist and 11th President of India, Dr. A.P.J. Abdul Kalam. Chronicles his humble origins in Rameswaram, his journey at ISRO and DRDO, and how self-belief propelled India into the nuclear and space age.',
        price: 499,
        discount_price: 299,
        stock: 90,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 470,
        is_featured: true,
        is_trending: true,
        specifications: {
          Author: 'Dr. A.P.J. Abdul Kalam & Arun Tiwari',
          Publisher: 'Universities Press',
          Language: 'English',
          Pages: '180 pages',
          Format: 'Paperback',
          ISBN_13: '978-8173711466'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BK-WOF-KALAM',
            price: 499,
            discount_price: 299,
            stock: 90,
            attributes: { format: 'Paperback' },
            image_url: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'The Courage to Be Disliked: How to Free Yourself and Change Your Life',
        slug: 'the-courage-to-be-disliked',
        description: 'Using the theories of Alfred Adler, one of the three giants of 19th-century psychology alongside Freud and Jung, this book follows an illuminating dialogue between a philosopher and a young man, unlocking the power of self-determination.',
        price: 599,
        discount_price: 399,
        stock: 55,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 210,
        is_featured: false,
        is_trending: true,
        specifications: {
          Author: 'Ichiro Kishimi and Fumitake Koga',
          Publisher: 'Allen & Unwin',
          Language: 'English',
          Pages: '288 pages',
          Format: 'Paperback',
          ISBN_13: '978-1760630737'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BK-CTBD-PB',
            price: 599,
            discount_price: 399,
            stock: 55,
            attributes: { format: 'Paperback' },
            image_url: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'The Subtle Art of Not Giving a F*ck by Mark Manson',
        slug: 'the-subtle-art-of-not-giving-a-f-mark-manson',
        description: 'In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be "positive" all the time so that we can truly become better, happier people.',
        price: 599,
        discount_price: 379,
        stock: 80,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 320,
        is_featured: false,
        is_trending: true,
        specifications: {
          Author: 'Mark Manson',
          Publisher: 'Harper',
          Language: 'English',
          Pages: '224 pages',
          Format: 'Paperback',
          ISBN_13: '978-0062457714'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BK-TSAON-PB',
            price: 599,
            discount_price: 379,
            stock: 80,
            attributes: { format: 'Paperback' },
            image_url: 'https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Think and Grow Rich by Napoleon Hill',
        slug: 'think-and-grow-rich-napoleon-hill',
        description: 'The classic guide to success that has sold over 100 million copies worldwide. Napoleon Hill interviewed the 500 most successful individuals of his time—including Andrew Carnegie, Henry Ford, and Thomas Edison—to distill the philosophy of personal achievement.',
        price: 399,
        discount_price: 249,
        stock: 90,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        num_reviews: 290,
        is_featured: false,
        is_trending: true,
        specifications: {
          Author: 'Napoleon Hill',
          Publisher: 'TarcherPerigee',
          Language: 'English',
          Pages: '320 pages',
          Format: 'Paperback Original',
          ISBN_13: '978-1585424337'
        },
        variants: [
          {
            name: 'Paperback Original',
            sku: 'BK-TAGR-PB',
            price: 399,
            discount_price: 249,
            stock: 90,
            attributes: { format: 'Paperback' },
            image_url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Do It Today: Overcome Procrastination and Improve Productivity',
        slug: 'do-it-today-darius-foroux',
        description: 'Are you also tired of putting off your most important tasks? Darius Foroux outlines practical advice and clear frameworks to beat procrastination, stay focused, and achieve your goals without burnout.',
        price: 299,
        discount_price: 199,
        stock: 85,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.7,
        num_reviews: 175,
        is_featured: false,
        is_trending: true,
        specifications: {
          Author: 'Darius Foroux',
          Publisher: 'Penguin Ananda',
          Language: 'English',
          Pages: '176 pages',
          Format: 'Paperback',
          ISBN_13: '978-0143452126'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BK-DIT-PB',
            price: 299,
            discount_price: 199,
            stock: 85,
            attributes: { format: 'Paperback' },
            image_url: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        name: 'Steve Jobs: The Exclusive Biography by Walter Isaacson',
        slug: 'steve-jobs-biography-walter-isaacson',
        description: 'Based on more than forty interviews with Steve Jobs conducted over two years—as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues—Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries.',
        price: 999,
        discount_price: 649,
        stock: 45,
        category_id: booksCategory.id,
        image_url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.9,
        num_reviews: 310,
        is_featured: false,
        is_trending: true,
        specifications: {
          Author: 'Walter Isaacson',
          Publisher: 'Simon & Schuster',
          Language: 'English',
          Pages: '656 pages',
          Format: 'Paperback / Hardcover',
          ISBN_13: '978-1451648539'
        },
        variants: [
          {
            name: 'Paperback Edition',
            sku: 'BK-SJB-PB',
            price: 999,
            discount_price: 649,
            stock: 45,
            attributes: { format: 'Paperback' },
            image_url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ];

    for (const book of booksCatalog) {
      const { variants, ...prodFields } = book;

      let [product, created] = await Product.findOrCreate({
        where: { slug: prodFields.slug },
        defaults: prodFields
      });

      // Ensure category_id is set to booksCategory.id and update fields
      await product.update({
        ...prodFields,
        category_id: booksCategory.id
      });

      if (variants && variants.length > 0) {
        for (const v of variants) {
          let [variant, vCreated] = await ProductVariant.findOrCreate({
            where: { sku: v.sku },
            defaults: {
              ...v,
              product_id: product.id
            }
          });

          if (!vCreated) {
            await variant.update({
              ...v,
              product_id: product.id
            });
          }
        }
      }
    }

    // 4. Update Category Item Counts
    const booksCount = await Product.count({ where: { category_id: booksCategory.id } });
    await booksCategory.update({ item_count: booksCount });

    const elecCount = await Product.count({ where: { category_id: electronicsCategory.id } });
    await electronicsCategory.update({ item_count: elecCount });

    console.log(`✅ Books & Stationery now strictly contains ONLY BOOKS (${booksCount} bestselling books)!`);
    console.log(`✅ Electronics category updated with all tech products (${elecCount} tech items)!`);
  } catch (error) {
    console.error('Error seeding only books:', error);
  }
};

seedOnlyBooks().then(() => process.exit(0));
