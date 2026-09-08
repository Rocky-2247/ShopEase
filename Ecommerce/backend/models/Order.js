import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  order_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total_amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  discount_amount: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  shipping_charge: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  final_amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  coupon_code: {
    type: DataTypes.STRING,
    allowNull: true
  },
  payment_method: {
    type: DataTypes.STRING, // 'COD', 'UPI', 'CARD', 'RAZORPAY'
    defaultValue: 'COD'
  },
  payment_status: {
    type: DataTypes.ENUM('Pending', 'Paid', 'Failed'),
    defaultValue: 'Pending'
  },
  order_status: {
    type: DataTypes.ENUM('Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'),
    defaultValue: 'Pending'
  },
  shipping_address_snapshot: {
    type: DataTypes.TEXT, // Stored as JSON string
    allowNull: false,
    get() {
      const raw = this.getDataValue('shipping_address_snapshot');
      if (!raw) return {};
      try {
        return JSON.parse(raw);
      } catch (e) {
        return {};
      }
    },
    set(val) {
      this.setDataValue('shipping_address_snapshot', typeof val === 'string' ? val : JSON.stringify(val || {}));
    }
  },
  razorpay_order_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  razorpay_payment_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  delivery_date: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  timestamps: true
});

export default Order;
