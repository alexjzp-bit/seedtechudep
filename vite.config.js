import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Raíz del sitio. Netlify, Vercel y un dominio propio usan '/'.
  // Para publicar en un subdirectorio (GitHub Pages, hosting UDEP en /seedtech/),
  // define VITE_BASE al compilar:  VITE_BASE=/seedtech/ npm run build
  base: process.env.VITE_BASE || '/',
})
