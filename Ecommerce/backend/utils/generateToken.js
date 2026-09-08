import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'shopease_super_secret_jwt_key_2026_modern_ecommerce', {
    expiresIn: process.env.JWT_EXPIRE || '7d'
  });
};

export default generateToken;
