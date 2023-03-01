import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: '/results-summary-component',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  publicDir: '../public'
});