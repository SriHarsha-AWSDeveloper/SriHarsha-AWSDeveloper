// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react({
    include: '/\.(mdx|js|jsx|ts|tsx)$/',
    exclude: ['node_modules', 'dist'],
    babel:{
        preset: ["@babel/preset-react"],
        plugins: ["@babel/plugin-transform-typescript"],

    }
  }),  tailwindcss(),
],
})