import DefaultTheme from "vitepress/theme";

// 加载全局组件css样式文件
import "@/styles/index.css";

// 组件预览显示代码片段
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    app.component("demo-preview", ElementPlusContainer);
    // app.component("ElementPlusContainer", ElementPlusContainer);
    // app.component("NaiveUIContainer", NaiveUIContainer);
  },
};
