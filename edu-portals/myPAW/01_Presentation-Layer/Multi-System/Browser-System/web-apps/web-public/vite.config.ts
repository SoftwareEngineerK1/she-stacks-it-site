import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/edu-portals/myPAW/', // Tells Vite to prepend this prefix to all scripts and styles
  build: {
    // CRUCIAL: Forces Vite to output the compiled files straight into your lobby path root
    outDir: resolve(__dirname, '../../../../../../../edu-portals/myPAW'),
    emptyOutDir: true
  }
})
