import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/specs/**/*.spec.js'],
    globals: true,
    environment: 'jsdom'
  }
});