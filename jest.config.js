module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  collectCoverageFrom: [
    "**/src/**/*.{ts,vue}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/cypress/**",
    "!**/*/registerServiceWorker.ts",
    "!**/*/App.vue",
    "!**/*/main.ts",
  ],
};
