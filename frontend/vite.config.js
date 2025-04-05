import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: 'frontend',
  plugins: [react()],
  server:{port: 5173},
  build: {
    rollupOptions: {
      external: ['mongoose'],
      input: 'index.html'
    }
  }
});

