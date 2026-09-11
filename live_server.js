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

  // 1. Start Java Spring Boot Backend Server
  console.log('🔹 [1/3] Initializing Java 21 + Spring Boot 3.3 Backend (Port 5000)...');
  const backendDir = path.join(__dirname, 'Ecommerce', 'backend');
  const backendLogPath = path.join(logsDir, 'backend.log');
  const backendLog = fs.openSync(backendLogPath, 'a');

  let isPort5000Open = false;
  try {
    const jarPath = path.join(backendDir, 'target', 'shopease-backend-1.0.0.jar');
    let backendProc;
    if (fs.existsSync(jarPath)) {
      backendProc = spawn('java', ['-jar', 'target/shopease-backend-1.0.0.jar'], {
        cwd: backendDir,
        stdio: ['ignore', backendLog, backendLog]
      });
    } else if (process.platform === 'win32') {
      backendProc = spawn('cmd.exe', ['/c', 'mvnw.cmd spring-boot:run'], {
        cwd: backendDir,
        stdio: ['ignore', backendLog, backendLog]
      });
    } else {
      backendProc = spawn('./mvnw', ['spring-boot:run'], {
        cwd: backendDir,
        stdio: ['ignore', backendLog, backendLog]
      });
    }
    backendProc.unref();

    // Poll until Spring Boot is ready on port 5000
    for (let i = 0; i < 25; i++) {
      await new Promise((r) => setTimeout(r, 1000));
      try {
        const check = await fetch('http://127.0.0.1:5000/api/health');
        if (check.ok || check.status === 200) {
          isPort5000Open = true;
          break;
        }
      } catch {}
    }
  } catch (err) {
    console.log('   ℹ️ Backend initialization notice:', err.message);
  }

  if (isPort5000Open) {
    console.log('   ✅ Spring Boot Backend active on http://127.0.0.1:5000');
  } else {
    console.log('   ℹ️ Spring Boot Backend process started on http://127.0.0.1:5000 (see .service_logs/backend.log)');
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
