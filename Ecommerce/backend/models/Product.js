import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  discount_price: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  video_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  images: {
    type: DataTypes.TEXT, // Stored as JSON stringified array of images
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('images');
      if (!rawValue) return [];
      try {
        return JSON.parse(rawValue);
      } catch (e) {
        return [rawValue];
      }
    },
    set(val) {
      this.setDataValue('images', typeof val === 'string' ? val : JSON.stringify(val || []));
    }
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  num_reviews: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  is_featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  is_trending: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  specifications: {
    type: DataTypes.TEXT, // Stored as JSON string
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('specifications');
      if (!rawValue) return {};
      try {
        return JSON.parse(rawValue);
      } catch (e) {
        return {};
      }
    },
    set(val) {
      this.setDataValue('specifications', typeof val === 'string' ? val : JSON.stringify(val || {}));
    }
  }
}, {
  timestamps: true
});

export default Product;
