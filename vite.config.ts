/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  test: {
    reporters: ['verbose', 'vitest-sonar-reporter'],
    outputFile: {
      'vitest-sonar-reporter': './coverage/test-report.xml',
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts', './src/tests/vitest-canvas-mock.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: ['html', 'text', 'lcov'],
    },
    testTimeout: 60000,
  }
})  
