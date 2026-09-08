import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';

import { initDatabase } from './config/db.js';
import swaggerSpec from './config/swagger.js';
import { seedDatabase } from './utils/seeder.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Route Imports
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import wishlistRoutes from './routes/wishlistRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import webhookRoutes from './routes/webhookRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Favicon handler
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Swagger API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Root Landing & API Status
app.get('/', (req, res) => {
  if (req.accepts('html')) {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ShopEase API Server</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f172a; color: #f8fafc; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; }
          .card { background: #1e293b; border: 1px solid #334155; border-radius: 20px; padding: 40px; max-width: 540px; width: 100%; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); text-align: center; }
          .badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(16, 185, 129, 0.15); color: #34d399; font-size: 13px; font-weight: 700; padding: 6px 14px; border-radius: 9999px; margin-bottom: 20px; border: 1px solid rgba(52, 211, 153, 0.3); }
          .dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block; box-shadow: 0 0 10px #10b981; }
          h1 { font-size: 26px; font-weight: 800; margin-bottom: 10px; color: #ffffff; }
          p { color: #94a3b8; font-size: 15px; line-height: 1.6; margin-bottom: 28px; }
          .btn-group { display: flex; flex-direction: column; gap: 12px; }
          .btn { display: flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 20px; border-radius: 12px; font-weight: 700; font-size: 14px; text-decoration: none; transition: all 0.2s; }
          .btn-primary { background: #4f46e5; color: white; box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4); }
          .btn-primary:hover { background: #4338ca; }
          .btn-secondary { background: #334155; color: #f1f5f9; }
          .btn-secondary:hover { background: #475569; }
          .footer-note { margin-top: 24px; font-size: 12px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="badge"><span class="dot"></span> REST API Online & Healthy</div>
          <h1>ShopEase Backend Server</h1>
          <p>The backend REST API server is up and running on port 5000. Open the storefront frontend application on port 3000 to start shopping.</p>
          <div class="btn-group">
            <a href="http://localhost:3000" class="btn btn-primary">🛍️ Open Frontend Store (localhost:3000)</a>
            <a href="/api-docs" class="btn btn-secondary">📑 Open Swagger API Docs (/api-docs)</a>
            <a href="/api/health" class="btn btn-secondary">🩺 Check Health Status (/api/health)</a>
          </div>
          <p class="footer-note">ShopEase Full Stack E-Commerce Platform • 2026</p>
        </div>
      </body>
      </html>
    `);
  } else {
    res.json({
      success: true,
      service: 'ShopEase E-Commerce REST API',
      status: 'online',
      version: '1.0.0',
      links: {
        frontend: 'http://localhost:3000',
        documentation: '/api-docs',
        health: '/api/health'
      }
    });
  }
});

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'ShopEase E-Commerce API'
  });
});

// Global DB Readiness State
let isDbReady = false;
let dbInitPromise = null;

// Async Readiness Gate Middleware: handles requests cleanly while DB is connecting (0 ECONNREFUSED)
app.use(async (req, res, next) => {
  if (isDbReady || req.path === '/favicon.ico' || req.path === '/') return next();
  try {
    if (dbInitPromise) await dbInitPromise;
    next();
  } catch (err) {
    next(err);
  }
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/webhooks', webhookRoutes);

// Error Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// 1. Start HTTP Server Immediately on port 5000 (0ms delay)
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 ShopEase Backend Server running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${PORT}`);
  console.log(`📑 API Documentation: http://localhost:${PORT}/api-docs`);
});

// 2. Initialize Database & Seed Asynchronously in Background
dbInitPromise = (async () => {
  try {
    await initDatabase();
    await seedDatabase(false);
    isDbReady = true;
  } catch (error) {
    console.error('❌ Failed to initialize database:', error);
  }
})();
