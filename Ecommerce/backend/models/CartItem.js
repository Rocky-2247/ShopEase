import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const CartItem = sequelize.define('CartItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  session_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  variant_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1
    }
  }
}, {
  timestamps: true
});

export default CartItem;
