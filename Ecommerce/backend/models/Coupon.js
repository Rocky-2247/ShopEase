import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Coupon = sequelize.define('Coupon', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  discount_percentage: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  max_discount: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  min_order_value: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  expires_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  timestamps: true
});

export default Coupon;
