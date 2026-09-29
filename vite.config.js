import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

const page = (name) => fileURLToPath(new URL(name, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  base: '/RIQS_Website/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // Two static pages beside the app. Building them as entries (rather
      // than dropping HTML into public/) lets them share the site's
      // stylesheet and get the right asset paths for whichever base the
      // build uses. 404.html is what GitHub Pages and Cloudflare Pages
      // serve for an unknown URL.
      input: {
        main: page('index.html'),
        privacy: page('privacy.html'),
        notFound: page('404.html'),
      },
    },
  },
})
