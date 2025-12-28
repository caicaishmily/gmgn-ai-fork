import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use base path for GitHub Pages deployment
  base: process.env.NODE_ENV === 'production' ? '/gmgn-ai-fork/' : '/',
  // Copy 404.html to dist for GitHub Pages SPA support (even though we use HashRouter now)
  publicDir: 'public',
})

