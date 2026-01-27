import { defineConfig } from 'vite'
import taillwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    taillwindcss()
  ],
})
