import jwt from 'jsonwebtoken';
import { User, Address } from '../models/index.js';
import generateToken from '../utils/generateToken.js';

// @desc    Register a new user
// @route   POST /api/auth/register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields (name, email, password)' });
    }

    const userExists = await User.findOne({ where: { email: email.toLowerCase().trim() } });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'An account with this email already exists' });
    }

    const user = await User.create({
      name,
      email: email.toLowerCase().trim(),
      password,
      phone: phone || ''
    });

    return res.status(201).json({
      success: true,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        token: generateToken(user.id)
      },
      message: 'Registration successful! Welcome to ShopEase.'
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    const user = await User.findOne({ where: { email: email.toLowerCase().trim() } });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    if (user.is_blocked) {
      return res.status(403).json({ success: false, message: 'Account is blocked. Please contact customer support.' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    return res.json({
      success: true,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        token: generateToken(user.id)
      },
      message: 'Login successful'
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Address, as: 'addresses' }]
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    user.name = req.body.name || user.name;
    user.phone = req.body.phone !== undefined ? req.body.phone : user.phone;

    if (req.body.password) {
      user.password = req.body.password;
    }

    await user.save();

    return res.json({
      success: true,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        token: generateToken(user.id)
      },
      message: 'Profile updated successfully'
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Request Password Reset Link / Token
// @route   POST /api/auth/forgot-password
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Please provide an email address' });
    }

    const user = await User.findOne({ where: { email: email.toLowerCase().trim() } });
    
    let resetToken = null;
    if (user) {
      // Create 1-hour secure reset token
      resetToken = jwt.sign(
        { id: user.id, type: 'password_reset' },
        process.env.JWT_SECRET || 'shopease_super_secret_jwt_key_2026_modern_ecommerce',
        { expiresIn: '1h' }
      );
    }

    return res.json({
      success: true,
      message: 'If an account exists with this email, a password reset link has been dispatched.',
      data: resetToken ? { reset_token: resetToken, reset_url: `/reset-password/${resetToken}` } : null
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Reset Password with verified Token
// @route   POST /api/auth/reset-password
export const resetPassword = async (req, res) => {
  try {
    const token = req.body.token || req.params.token || req.query.token;
    const { password } = req.body;

    if (!token) {
      return res.status(400).json({ success: false, message: 'Password reset token is missing or invalid' });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({ success: false, message: 'New password must be at least 6 characters' });
    }

    let decoded;
    try {
      decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'shopease_super_secret_jwt_key_2026_modern_ecommerce'
      );
    } catch (err) {
      return res.status(400).json({ success: false, message: 'Password reset link has expired or is invalid. Please request a new one.' });
    }

    if (!decoded || decoded.type !== 'password_reset' || !decoded.id) {
      return res.status(400).json({ success: false, message: 'Invalid token structure' });
    }

    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User account not found' });
    }

    // Update password (triggers Sequelize beforeUpdate hook to hash with bcrypt)
    user.password = password;
    await user.save();

    return res.json({
      success: true,
      message: 'Password reset successfully! You can now sign in with your new password.',
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user.id)
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get user addresses
// @route   GET /api/auth/addresses
export const getUserAddresses = async (req, res) => {
  try {
    const addresses = await Address.findAll({
      where: { user_id: req.user.id },
      order: [['is_default', 'DESC'], ['createdAt', 'DESC']]
    });
    return res.json({ success: true, data: addresses });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Add new address
// @route   POST /api/auth/addresses
export const addAddress = async (req, res) => {
  try {
    const { full_name, phone, street, city, state, pincode, is_default } = req.body;
    
    if (is_default) {
      await Address.update({ is_default: false }, { where: { user_id: req.user.id } });
    }

    const count = await Address.count({ where: { user_id: req.user.id } });

    const address = await Address.create({
      user_id: req.user.id,
      full_name,
      phone,
      street,
      city,
      state,
      pincode,
      is_default: is_default || count === 0
    });

    return res.status(201).json({ success: true, data: address, message: 'Address saved' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update address
// @route   PUT /api/auth/addresses/:id
export const updateAddress = async (req, res) => {
  try {
    const address = await Address.findOne({ where: { id: req.params.id, user_id: req.user.id } });
    if (!address) {
      return res.status(404).json({ success: false, message: 'Address not found' });
    }

    if (req.body.is_default) {
      await Address.update({ is_default: false }, { where: { user_id: req.user.id } });
    }

    await address.update(req.body);
    return res.json({ success: true, data: address, message: 'Address updated' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete address
// @route   DELETE /api/auth/addresses/:id
export const deleteAddress = async (req, res) => {
  try {
    const address = await Address.findOne({ where: { id: req.params.id, user_id: req.user.id } });
    if (!address) {
      return res.status(404).json({ success: false, message: 'Address not found' });
    }

    await address.destroy();
    return res.json({ success: true, message: 'Address deleted successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Subscribe to email newsletter
// @route   POST /api/auth/newsletter
export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
    }
    return res.json({
      success: true,
      message: 'Subscribed successfully! Use coupon WELCOME10 for 10% off your next order.',
      coupon: 'WELCOME10',
      discount: '10%'
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

