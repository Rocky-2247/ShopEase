import localtunnel from 'localtunnel';
import http from 'http';

async function getPublicIP() {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip;
  } catch (e) {
    try {
      const res2 = await fetch('https://loca.lt/mytunnelpassword');
      return (await res2.text()).trim();
    } catch {
      return 'N/A';
    }
  }
}

async function startTunnel() {
  const ip = await getPublicIP();
  console.log('----------------------------------------------------');
  console.log('📡 ShopEase Live Multi-Device Access');
  console.log('----------------------------------------------------');
  console.log('📱 1. Same Wi-Fi Direct Link (Recommended for phones/tablets):');
  console.log('   http://192.168.0.9:3000');
  console.log('');

  try {
    const tunnel = await localtunnel({
      port: 3000,
      subdomain: 'shopease-store-2026'
    });

    console.log('🌐 2. Public Global Web Link (Accessible from any network):');
    console.log('   ' + tunnel.url);
    console.log('   (If loca.lt asks for "Tunnel Password", enter your IP: ' + ip + ')');
    console.log('----------------------------------------------------');

    tunnel.on('close', () => {
      console.log('⚠️ Tunnel closed. Reconnecting in 3s...');
      setTimeout(startTunnel, 3000);
    });

    tunnel.on('error', (err) => {
      console.error('⚠️ Tunnel error:', err.message);
    });
  } catch (err) {
    console.error('⚠️ Failed to start named tunnel, starting dynamic tunnel...', err.message);
    try {
      const dynamicTunnel = await localtunnel({ port: 3000 });
      console.log('🌐 2. Public Global Web Link (Dynamic):');
      console.log('   ' + dynamicTunnel.url);
      console.log('   (Tunnel Password / IP: ' + ip + ')');
      console.log('----------------------------------------------------');
    } catch (e) {
      console.error('Tunnel fatal error:', e.message);
    }
  }
}

startTunnel();
