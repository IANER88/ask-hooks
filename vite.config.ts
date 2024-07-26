import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 输出文件夹
    outDir: 'dist',
    lib: {
      // 源码的入口文件
      entry: path.resolve(__dirname, 'src/index.ts'),
      // 名称
      name: 'ask_hooks',
      // 文件名称
      fileName: 'ask',
      // 打包格式
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // 排除不相关的依赖
      external: ['react', 'react-dom'],
    },
  },
})

