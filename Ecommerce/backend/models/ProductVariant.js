import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const ProductVariant = sequelize.define('ProductVariant', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
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
  attributes: {
    type: DataTypes.TEXT, // Stored as JSON string { color: 'Black', size: 'M' }
    allowNull: true,
    get() {
      const raw = this.getDataValue('attributes');
      if (!raw) return {};
      try {
        return JSON.parse(raw);
      } catch (e) {
        return {};
      }
    },
    set(val) {
      this.setDataValue('attributes', typeof val === 'string' ? val : JSON.stringify(val || {}));
    }
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true
});

export default ProductVariant;
