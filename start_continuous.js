import { spawn, execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logsDir = path.join(__dirname, '.service_logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const pidFile = path.join(__dirname, '.running_services.json');

async function isPortListening(port) {
  try {
    const res = execSync(`netstat -ano | findstr :${port} | findstr LISTENING`, { encoding: 'utf8' });
    return res.trim().length > 0;
  } catch {
    return false;
  }
}

async function waitForPort(port, maxSeconds = 15) {
  for (let i = 0; i < maxSeconds * 2; i++) {
    if (await isPortListening(port)) return true;
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

async function main() {
  console.log('========================================================');
  console.log('🚀 ShopEase Continuous Background Service Manager');
  console.log('========================================================\n');

  const pids = {};

  // 1. Start Backend if not already listening on port 5000
  if (!(await isPortListening(5000))) {
    console.log('🔹 Launching Backend API (Port 5000)...');
    const backendLog = fs.openSync(path.join(logsDir, 'backend.log'), 'a');
    const backendProc = spawn(process.execPath, ['server.js'], {
      cwd: path.join(__dirname, 'Ecommerce', 'backend'),
      detached: true,
      stdio: ['ignore', backendLog, backendLog]
    });
    backendProc.unref();
    pids.backend = backendProc.pid;
    const ok = await waitForPort(5000);
    console.log(`   ${ok ? '✅' : '⚠️'} Backend status: Port 5000 ${ok ? 'ONLINE' : 'WAITING'} (PID: ${backendProc.pid})`);
  } else {
    console.log('   ℹ️ Backend is already active on Port 5000.');
  }

  // 2. Start Frontend if not already listening on port 3000
  if (!(await isPortListening(3000))) {
    console.log('🔹 Launching Frontend UI (Port 3000)...');
    const frontendLog = fs.openSync(path.join(logsDir, 'frontend.log'), 'a');
    const viteBin = path.join(__dirname, 'Ecommerce', 'frontend', 'node_modules', 'vite', 'bin', 'vite.js');
    const frontendProc = spawn(process.execPath, [viteBin, '--host', '--port', '3000'], {
      cwd: path.join(__dirname, 'Ecommerce', 'frontend'),
      detached: true,
      stdio: ['ignore', frontendLog, frontendLog]
    });
    frontendProc.unref();
    pids.frontend = frontendProc.pid;
    const ok = await waitForPort(3000);
    console.log(`   ${ok ? '✅' : '⚠️'} Frontend status: Port 3000 ${ok ? 'ONLINE' : 'WAITING'} (PID: ${frontendProc.pid})`);
  } else {
    console.log('   ℹ️ Frontend is already active on Port 3000.');
  }

  // 3. Start Cloudflare Tunnel
  console.log('🔹 Launching Cloudflare Live Tunnel (trycloudflare.com)...');
  const tunnelLogPath = path.join(logsDir, 'tunnel.log');
  const tunnelLog = fs.openSync(tunnelLogPath, 'w');
  const cloudflaredExe = path.join(__dirname, 'cloudflared.exe');

  const tunnelProc = spawn(cloudflaredExe, ['tunnel', '--url', 'http://127.0.0.1:3000'], {
    cwd: __dirname,
    detached: true,
    stdio: ['ignore', tunnelLog, tunnelLog]
  });
  tunnelProc.unref();
  pids.tunnel = tunnelProc.pid;
  console.log(`   ✅ Cloudflare Tunnel running in background (PID: ${tunnelProc.pid})`);

  fs.writeFileSync(pidFile, JSON.stringify(pids, null, 2));

  console.log('\n⏳ Establishing public HTTPS tunnel URL...');

  let tunnelUrl = null;
  for (let i = 0; i < 20; i++) {
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
  console.log('🎉 All Services Are Running Continuously in Background!');
  console.log('========================================================');
  console.log('Even if you close this terminal or press Ctrl+C, the');
  console.log('services will STAY ALIVE and NEVER TERMINATE.\n');
  if (tunnelUrl) {
    console.log('🌐 Direct Live Public Web Link (No password / No warning screen):');
    console.log('   ' + tunnelUrl);
  } else {
    console.log('🌐 Public Tunnel is initializing. Check .service_logs/tunnel.log');
  }
  console.log('\n📱 Local Wi-Fi Network Link (Instant, zero-lag on your Wi-Fi):');
  console.log('   http://192.168.0.9:3000');
  console.log('\n💻 Localhost URL:');
  console.log('   http://localhost:3000');
  console.log('========================================================\n');
}

main().catch(console.error);
