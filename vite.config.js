import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 5173 is often taken by another project on the same machine, so this one
    // starts on 5175 to avoid the "port in use" shuffle.
    port: 5175,
    // The API and the SQLite database live in server/; in dev they run on
    // their own port and Vite forwards /api across.
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
