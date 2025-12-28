import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Only use base path in production (for GitHub Pages)
  // In development, use root path for easier testing
  base: process.env.NODE_ENV === 'production' ? '/gmgn-ai/' : '/',
})

