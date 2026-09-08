import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    token = req.query.token;
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (token) {
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'shopease_super_secret_jwt_key_2026_modern_ecommerce'
      );
      
      const user = await User.findByPk(decoded.id, {
        attributes: { exclude: ['password'] }
      });

      if (!user) {
        return res.status(401).json({ success: false, message: 'User not found' });
      }

      if (user.is_blocked) {
        return res.status(403).json({ success: false, message: 'Account is blocked. Please contact customer support.' });
      }

      req.user = user;
      return next();
    } catch (error) {
      console.error('Auth verification error:', error.message);
      return res.status(401).json({ success: false, message: 'Not authorized, token failed or expired' });
    }
  }

  return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
};

export const optionalAuth = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'shopease_super_secret_jwt_key_2026_modern_ecommerce');
      req.user = await User.findByPk(decoded.id, {
        attributes: { exclude: ['password'] }
      });
    } catch (error) {
      // Ignored for optional auth
    }
  }
  next();
};
