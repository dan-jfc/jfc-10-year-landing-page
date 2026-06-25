import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        uk: resolve(__dirname, 'uk.html'),
        na: resolve(__dirname, 'na.html')
      }
    }
  }
})
