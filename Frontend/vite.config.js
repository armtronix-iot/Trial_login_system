import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',        // Allow external access (e.g., via IP or domain)
    port: 5176,             // Match your frontend port
    allowedHosts: ['team.armtronix.net'], // ✅ Allow requests from this domain
  },
});
