import { defineConfig } from "vitepress";
import { resolve } from "path";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
import { nav } from "./nav";
import { sidebar } from "./sidebars";

// @ts-ignore

// https://vitepress.dev/reference/site-config

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "../../../packages"),
        "@components": resolve(__dirname, "../../../packages/components"),
      },
    },
  },
  // 组件预览显示代码
  markdown: {
    config: (md) => {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  title: "smallUI",
  description: "搭建属于自己的UI库，学习工作成就满满",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
