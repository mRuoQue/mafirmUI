import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "smallUI",
  description: "搭建属于自己的UI库，学习工作成就满满",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "更新日志",
        items: [{ text: "快速开始", link: "/markdown-examples" }],
      },
      {
        text: "开发指南",
        items: [
          { text: "安装", link: "/markdown-examples" },

          { text: "使用", link: "/markdown-examples" },
          { text: "主题", link: "/markdown-examples" },
        ],
      },

      {
        text: "基础组件",
        items: [
          {
            text: "Button",
            link: "/components/button",
          },
          {
            text: "Form",
            link: "/components/button",
          },
        ],
      },
      {
        text: "布局组件",
        items: [
          {
            text: "Layout",
            link: "/components/layout",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
