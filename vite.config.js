import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,webp,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /\/images\/.*\.webp$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: { maxEntries: 10, maxAgeSeconds: 365 * 24 * 60 * 60 },
            },
          },
        ],
      },
      manifest: {
        name: 'TGS Gifts - Premium Corporate Gifting',
        short_name: 'TGS Gifts',
        theme_color: '#e63946',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          { src: '/images/logo/TGS Tech_logo.webp', sizes: '192x192', type: 'image/webp' },
        ],
      },
    }),
  ],
})
