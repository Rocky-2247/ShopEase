import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🛑 Stopping ShopEase Background Services...');

try {
  execSync('taskkill /F /IM cloudflared.exe', { stdio: 'ignore' });
  console.log('✅ Stopped Cloudflare Tunnel.');
} catch {}

try {
  // Find processes on port 3000 and 5000 and kill if desired
  const pids = [];
  try {
    const p3000 = execSync('netstat -ano | findstr :3000 | findstr LISTENING', { encoding: 'utf8' });
    p3000.split('\n').forEach(line => {
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && !pids.includes(pid)) pids.push(pid);
    });
  } catch {}

  try {
    const p5000 = execSync('netstat -ano | findstr :5000 | findstr LISTENING', { encoding: 'utf8' });
    p5000.split('\n').forEach(line => {
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && !pids.includes(pid)) pids.push(pid);
    });
  } catch {}

  pids.forEach(pid => {
    try {
      execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
      console.log(`✅ Terminated service process PID: ${pid}`);
    } catch {}
  });

  const pidFile = path.join(__dirname, '.running_services.json');
  if (fs.existsSync(pidFile)) {
    fs.unlinkSync(pidFile);
  }

  console.log('🎉 All ShopEase background services cleanly stopped.');
} catch (e) {
  console.log('Error stopping services:', e.message);
}
