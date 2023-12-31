import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
   VitePWA({
     srcDir: "/",
     filename: "sw.js",
     registerType: 'autoUpdate',
     devOptions: {
       enabled: true,
       type: 'module',
     },
     strategies: "injectManifest",
     injectRegister: false,
     manifest: false,
     injectManifest: {
       injectionPoint: null,
     },
   }),
  ],
  build: {
    minify: true,
    sourceMap: false
  },
})
