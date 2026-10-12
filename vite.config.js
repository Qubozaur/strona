import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base means the build works under any GitHub Pages path:
  // both user sites (username.github.io) and project sites (username.github.io/repo).
  base: './',
})
