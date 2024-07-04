import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const config: UserConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      shared: '/src/shared',
    },
  },
};
export default defineConfig(config);
