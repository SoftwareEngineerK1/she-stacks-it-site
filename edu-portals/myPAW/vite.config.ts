import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue, svelte, etc.

export default defineConfig({
  plugins: [react()],
  base: '/edu-portals/myPAW/', // Crucial: matching your public URL path
  build: {
    outDir: 'dist',
  }
})
