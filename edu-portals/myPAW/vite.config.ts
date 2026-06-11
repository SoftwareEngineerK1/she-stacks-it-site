import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // CRUCIAL: Changes your asset compiling to use relative paths instead of hardcoded strings
  build: {
    outDir: 'dist'
  }
})
