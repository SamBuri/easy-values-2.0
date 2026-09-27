import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';
import Vuetify from 'vite-plugin-vuetify';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [Vue(), Vuetify({ autoImport: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  test: {
    include: ['tests/specs/**/*.spec.js'],
    globals: true,
    environment: 'jsdom',
    css: true,
    server: {
      deps: {
        inline: ['vuetify', 'saburi-vue-utils'],
      },
    },
  }
});