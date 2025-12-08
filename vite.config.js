// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // << Bu eklenti hayati

export default defineConfig({
  plugins: [react()], // << Doğru yüklenmeli
  // ... diğer ayarlar
  base:"/goit-react-hw-02/"
})