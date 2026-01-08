/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    // deps: {
    //   interopDefault: true,
    // },
    globals: true,
    environment: "jsdom", // jsdmon v27+ 不兼容require导入方式 会报错
    include: ["packages/**/*.test.ts"],
    setupFiles: ["./vitest.setup.ts"],

    // 添加环境变量配置
    // environmentOptions: {
    //   jsdom: {
    //     resources: "usable",
    //   },
    // },
  },
  define: {
    global: "globalThis",
  },
});
