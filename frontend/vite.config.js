import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
 
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      '/users': {
        target: 'http://localhost:3000', // Your backend
        changeOrigin: true,
        secure: false,
      },
      '/transaction': {
        target: 'http://localhost:3000', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
