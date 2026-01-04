import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-transition-group/Transition': 'react-transition-group/esm/Transition.js'
    }
  },
  base: '/portfolio/' 
})
