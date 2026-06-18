import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'dental-implant': resolve(__dirname, 'dental-implant-patient-acquisition/index.html'),
        'invisalign': resolve(__dirname, 'invisalign-lead-generation/index.html'),
        'lead-routing': resolve(__dirname, 'sub-60-second-lead-routing/index.html'),
        'gdpr': resolve(__dirname, 'gdpr-dental-data-compliance/index.html'),
        'aeo': resolve(__dirname, 'answer-engine-optimisation-dental/index.html'),
        'method': resolve(__dirname, 'method/index.html'),
      },
    },
  },
});
