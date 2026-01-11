import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  // 打包配置
  build: {
    outDir: "dist/umd",
    lib: {
      entry: resolve(__dirname, "packages/index.ts"),
      // 全局变量
      name: "mafirmUI",
      fileName: "mafirmUI",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "style.css") {
            return "index.css";
          }
          return chunkInfo.name as string;
        },
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue(),
    // 打包ts文件规则
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "packages"),
      "@components": resolve(__dirname, "packages/components"),
    },
  },
});
