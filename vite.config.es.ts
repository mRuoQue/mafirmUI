import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts";
export default defineConfig({
  // 打包配置
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__dirname, "packages/index.ts"),
      // 全局变量
      name: "mafirmUI",
      fileName: "mafirmUI",
      formats: ["es"],
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
      },
    },
  },
  plugins: [
    vue(),
    // 打包ts文件规则
    dts({
      outDir: "dist/types",
      tsconfigPath: "./tsconfig.build.json",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "packages"),
      "@components": resolve(__dirname, "packages/components"),
    },
  },
});
