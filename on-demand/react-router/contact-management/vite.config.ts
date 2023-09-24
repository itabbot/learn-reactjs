import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    // 将 React 插件应用到 Vite 构建过程
    plugins: [react()],
})
