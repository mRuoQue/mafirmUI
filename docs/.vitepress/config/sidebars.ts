import { basic, other } from "./constant.ts";
function getSidebar() {
  const sidebar = [
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

    basic,
    other,
  ];
  return sidebar;
}
export const sidebar = getSidebar();
