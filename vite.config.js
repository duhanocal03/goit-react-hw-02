// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Depo adınızı buraya ekleyin!
// Genellikle '/<REPO_ADI>/' şeklinde olmalıdır.
const BASE_PATH = "/goit-react-hw-02/"; 

export default defineConfig({
  // **BASE YOLU EKLENDİ**
  base: BASE_PATH, 
  plugins: [react()],
})