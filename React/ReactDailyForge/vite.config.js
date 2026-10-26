import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/daily-work/26-10-2026(ReactTestingBuildGit)/testing/test-utils/setupTests.js",
  },
})
