import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/fastapi': {
        target: 'http://localhost:8000',
        secure: false,
      }
    }
  },
  resolve: {
    alias: {
      'three': path.resolve(__dirname, 'node_modules/three')
    }
  }
})
