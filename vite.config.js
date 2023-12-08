import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   proxy: {
  //     '/': {
  //       target: 'http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com',
  //       changeOrigin: true,
  //     },
  //   }
  // }
})
