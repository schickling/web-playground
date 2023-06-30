// @ts-check

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// const isProdBuild = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3030,
    host: '0.0.0.0',
  },
  plugins: [react()],
})
