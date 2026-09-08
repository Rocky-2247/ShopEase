import { Op } from 'sequelize';
import { User, Product, Order, OrderItem, Category, Coupon } from '../models/index.js';

// @desc    Get Admin Dashboard KPIs, charts data & low stock alerts
// @route   GET /api/admin/dashboard
export const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.count({ where: { role: 'customer' } });
    const totalProducts = await Product.count();
    const totalOrders = await Order.count();

    const revenueResult = await Order.sum('final_amount', {
      where: {
        order_status: { [Op.ne]: 'Cancelled' }
      }
    });
    const totalRevenue = revenueResult || 0;

    // Recent 5 Orders
    const recentOrders = await Order.findAll({
      limit: 5,
      order: [['createdAt', 'DESC']],
      include: [
        { model: User, as: 'user', attributes: ['id', 'name', 'email'] },
        { model: OrderItem, as: 'items' }
      ]
    });

    // Low stock items (< 10)
    const lowStockProducts = await Product.findAll({
      where: { stock: { [Op.lte]: 10 } },
      limit: 6,
      order: [['stock', 'ASC']],
      include: [{ model: Category, as: 'category' }]
    });

    // Monthly Sales aggregation for charts
    const ordersList = await Order.findAll({
      where: { order_status: { [Op.ne]: 'Cancelled' } },
      attributes: ['final_amount', 'createdAt']
    });

    const monthMap = {};
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Default initialize months
    const currentMonth = new Date().getMonth();
    for (let i = 5; i >= 0; i--) {
      const mIndex = (currentMonth - i + 12) % 12;
      monthMap[months[mIndex]] = { name: months[mIndex], revenue: 0, orders: 0 };
    }

    ordersList.forEach(ord => {
      const mName = months[new Date(ord.createdAt).getMonth()];
      if (monthMap[mName]) {
        monthMap[mName].revenue += ord.final_amount;
        monthMap[mName].orders += 1;
      }
    });

    const monthlySales = Object.values(monthMap);

    // Category distribution
    const categories = await Category.findAll({
      include: [{ model: Product, as: 'products', attributes: ['id'] }]
    });

    const categoryDistribution = categories.map(cat => ({
      name: cat.name,
      value: cat.products ? cat.products.length : 0
    }));

    return res.json({
      success: true,
      data: {
        metrics: {
          totalUsers,
          totalProducts,
          totalOrders,
          totalRevenue: parseFloat(totalRevenue.toFixed(2))
        },
        recentOrders,
        lowStockProducts,
        monthlySales,
        categoryDistribution
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Admin: Get all users
// @route   GET /api/admin/users
export const getUsersList = async (req, res) => {
  try {
    const { search, role, page = 1, limit = 15 } = req.query;
    const pageNum = Math.max(1, parseInt(page, 10));
    const pageSize = Math.max(1, parseInt(limit, 10));
    const offset = (pageNum - 1) * pageSize;

    const where = {};
    if (search && search.trim() !== '') {
      where[Op.or] = [
        { name: { [Op.like]: `%${search.trim()}%` } },
        { email: { [Op.like]: `%${search.trim()}%` } }
      ];
    }
    if (role && role !== 'all') {
      where.role = role;
    }

    const { count, rows: users } = await User.findAndCountAll({
      where,
      attributes: { exclude: ['password'] },
      order: [['createdAt', 'DESC']],
      limit: pageSize,
      offset
    });

    return res.json({
      success: true,
      data: {
        users,
        pagination: {
          total: count,
          page: pageNum,
          pages: Math.ceil(count / pageSize),
          limit: pageSize
        }
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Admin: Toggle user blocked status
// @route   PUT /api/admin/users/:id/toggle-block
export const toggleBlockUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (user.id === req.user.id) {
      return res.status(400).json({ success: false, message: 'You cannot block your own admin account' });
    }

    user.is_blocked = !user.is_blocked;
    await user.save();

    return res.json({
      success: true,
      message: `User account is now ${user.is_blocked ? 'BLOCKED' : 'ACTIVE'}`,
      data: { id: user.id, is_blocked: user.is_blocked }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Admin: Toggle user role
// @route   PUT /api/admin/users/:id/toggle-role
export const toggleUserRole = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (user.id === req.user.id) {
      return res.status(400).json({ success: false, message: 'You cannot change your own admin role' });
    }

    user.role = user.role === 'admin' ? 'customer' : 'admin';
    await user.save();

    return res.json({
      success: true,
      message: `User role updated to ${user.role.toUpperCase()}`,
      data: { id: user.id, role: user.role }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Admin: Get all coupons
// @route   GET /api/admin/coupons
export const getCouponsList = async (req, res) => {
  try {
    const coupons = await Coupon.findAll({
      order: [['createdAt', 'DESC']]
    });
    return res.json({ success: true, data: coupons });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Admin: Create new discount coupon
// @route   POST /api/admin/coupons
export const createCoupon = async (req, res) => {
  try {
    const { code, discount_percentage, max_discount, min_order_value, expires_at } = req.body;
    if (!code || !discount_percentage) {
      return res.status(400).json({ success: false, message: 'Coupon code and discount percentage are required' });
    }

    const cleanCode = code.toUpperCase().trim();
    const exists = await Coupon.findOne({ where: { code: cleanCode } });
    if (exists) {
      return res.status(400).json({ success: false, message: `Coupon code "${cleanCode}" already exists` });
    }

    const coupon = await Coupon.create({
      code: cleanCode,
      discount_percentage: parseFloat(discount_percentage),
      max_discount: max_discount ? parseFloat(max_discount) : null,
      min_order_value: min_order_value ? parseFloat(min_order_value) : 0,
      is_active: true,
      expires_at: expires_at ? new Date(expires_at) : null
    });

    return res.status(201).json({
      success: true,
      message: `Coupon "${coupon.code}" created successfully`,
      data: coupon
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Admin: Update discount coupon
// @route   PUT /api/admin/coupons/:id
export const updateCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByPk(req.params.id);
    if (!coupon) {
      return res.status(404).json({ success: false, message: 'Coupon not found' });
    }

    const { code, discount_percentage, max_discount, min_order_value, expires_at, is_active } = req.body;
    if (code) coupon.code = code.toUpperCase().trim();
    if (discount_percentage !== undefined) coupon.discount_percentage = parseFloat(discount_percentage);
    if (max_discount !== undefined) coupon.max_discount = max_discount ? parseFloat(max_discount) : null;
    if (min_order_value !== undefined) coupon.min_order_value = parseFloat(min_order_value);
    if (expires_at !== undefined) coupon.expires_at = expires_at ? new Date(expires_at) : null;
    if (is_active !== undefined) coupon.is_active = Boolean(is_active);

    await coupon.save();

    return res.json({
      success: true,
      message: `Coupon "${coupon.code}" updated successfully`,
      data: coupon
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Admin: Delete coupon
// @route   DELETE /api/admin/coupons/:id
export const deleteCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByPk(req.params.id);
    if (!coupon) {
      return res.status(404).json({ success: false, message: 'Coupon not found' });
    }

    await coupon.destroy();
    return res.json({ success: true, message: `Coupon "${coupon.code}" deleted successfully` });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Admin: Toggle coupon active status
// @route   PUT /api/admin/coupons/:id/toggle
export const toggleCouponStatus = async (req, res) => {
  try {
    const coupon = await Coupon.findByPk(req.params.id);
    if (!coupon) {
      return res.status(404).json({ success: false, message: 'Coupon not found' });
    }

    coupon.is_active = !coupon.is_active;
    await coupon.save();

    return res.json({
      success: true,
      message: `Coupon "${coupon.code}" is now ${coupon.is_active ? 'ACTIVE' : 'DEACTIVATED'}`,
      data: coupon
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
