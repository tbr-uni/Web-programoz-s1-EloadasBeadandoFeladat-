import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/axios/', 
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './axios.html', 
      },
    },
  },
})