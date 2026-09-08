import { createServer as createViteServer } from './Ecommerce/frontend/node_modules/vite/dist/node/index.js';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logsDir = path.join(__dirname, '.service_logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

async function run() {
  console.log('========================================================');
  console.log('🚀 Starting ShopEase Continuous Server System');
  console.log('========================================================\n');

  // 1. Start Backend Server
  console.log('🔹 [1/3] Initializing Express & MySQL Backend (Port 5000)...');
  try {
    await import('./Ecommerce/backend/server.js');
    console.log('   ✅ Backend active on http://127.0.0.1:5000');
  } catch (err) {
    console.log('   ℹ️ Backend already running or initialized:', err.message);
  }

  // 2. Start Vite Frontend Server
  console.log('🔹 [2/3] Initializing Vite React Frontend (Port 3000)...');
  const viteServer = await createViteServer({
    root: path.join(__dirname, 'Ecommerce', 'frontend'),
    configFile: path.join(__dirname, 'Ecommerce', 'frontend', 'vite.config.js'),
    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: true
    }
  });
  await viteServer.listen();
  console.log('   ✅ Frontend active on http://127.0.0.1:3000');

  // 3. Start Cloudflare Tunnel
  console.log('🔹 [3/3] Launching Direct Cloudflare Tunnel (trycloudflare.com)...');
  const tunnelLogPath = path.join(logsDir, 'tunnel.log');
  const tunnelLog = fs.openSync(tunnelLogPath, 'w');
  const cloudflaredExe = path.join(__dirname, 'cloudflared.exe');

  const tunnelProc = spawn(cloudflaredExe, ['tunnel', '--url', 'http://127.0.0.1:3000'], {
    cwd: __dirname,
    stdio: ['ignore', tunnelLog, tunnelLog]
  });

  let tunnelUrl = null;
  for (let i = 0; i < 25; i++) {
    await new Promise((r) => setTimeout(r, 1000));
    if (fs.existsSync(tunnelLogPath)) {
      const content = fs.readFileSync(tunnelLogPath, 'utf8');
      const match = content.match(/https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/);
      if (match) {
        tunnelUrl = match[0];
        break;
      }
    }
  }

  console.log('\n========================================================');
  console.log('🎉 Full E-Commerce System Is Running Live & Continuous!');
  console.log('========================================================\n');
  if (tunnelUrl) {
    console.log('🌐 Direct Live Public Web Link (No password / No warning screen):');
    console.log('   ' + tunnelUrl);
  } else {
    console.log('🌐 Tunnel URL initializing... check .service_logs/tunnel.log');
  }
  console.log('\n📱 Local Wi-Fi Link (Ultra-fast direct connection):');
  console.log('   http://192.168.0.9:3000');
  console.log('\n💻 Localhost URL:');
  console.log('   http://localhost:3000');
  console.log('========================================================\n');
}

run().catch(console.error);
