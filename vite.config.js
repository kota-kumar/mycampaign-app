import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mycampaign-app/',  // use the exact repo name here!
  plugins: [react()],
})