import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './public',
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api/login': 'http://localhost:3000',
      '/api/feed': 'http://localhost:3000',
      '/api/profile': 'http://localhost:3000',
      '/api/settings': 'http://localhost:3000',
      '/api/subscribers': 'http://localhost:3000',
    },
  },
});
