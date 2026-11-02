import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages project sites, set this to '/REPOSITORY-NAME/'.
  // For a custom domain or root deployment, keep '/'.
  base: '/',
})