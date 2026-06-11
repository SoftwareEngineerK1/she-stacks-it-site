import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/edu-portals/myPAW/', // Crucial: This tells Vite to output asset tags that match your redirect routes
  build: {
    outDir: 'dist'
  }
})
