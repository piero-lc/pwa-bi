import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My PWA',
        short_name: 'PWA',
        description: 'My Awesome PWA!',
        theme_color: '#ffffff',
        icons: [
        ]
      },
    }),
  ],
  server: {
    port: 4900,
  },
})
