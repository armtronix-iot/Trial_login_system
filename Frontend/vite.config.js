import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This is only needed during local development
    port: 5176        // Not used in production, but fine to keep
  },
  build: {
    outDir: 'dist'
  }
});
