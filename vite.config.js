import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', 
  },
  resolve: {
    alias: {
      '@': '..', // Adjust the alias based on your project structure
    },
  },
})
