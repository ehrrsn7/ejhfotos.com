import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx(/* jsxImportSource: …, otherOptions… */)
  ],
  server: {
    host: "0.0.0.0"
  }
})
