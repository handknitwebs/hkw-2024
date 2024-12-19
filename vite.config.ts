import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  // remove base and run build if pushing to bluehost -- grab files from dist 
  root,
  base: "/hkw-2024/",
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        policy: resolve(root, 'policy', 'index.html'),
      }
    }
  }
})
