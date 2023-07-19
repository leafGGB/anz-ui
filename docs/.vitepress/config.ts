import { defineConfig } from "vitepress";
import {
  demoblockPlugin,
  demoblockVitePlugin,
} from "vitepress-theme-demoblock";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../../config/unocss";
import sidebar from "./sidebar";

export default defineConfig({
  title: "AnZ-UI",

  markdown: {
    config: (md) => {
      md.use(demoblockPlugin);
    },
  },
  vite: {
    plugins: [demoblockVitePlugin(), vueJsx(), Unocss()],
  },

  themeConfig: {
    logo: "/R-C2.jpg",
    siteTitle: "AnZ-UI",

    socialLinks: [{ icon: "github", link: "https://www.baidu.com" }],

    // 顶部右侧导航
    nav: [
      { text: "Guide", link: "/guide/" },
      {
        text: "组件",
        link: "/components/button.md",
        activeMatch: "/components",
      },
      {
        text: "相关链接",
        items: [
          {
            text: "vitejs",
            link: "https://vitejs.dev/",
          },
          {
            text: "vue3",
            link: "https://vuejs.org/",
          },
        ],
      },
    ],

    // 页脚
    footer: {
      // message: "Released under the MIT License.",
      message:
        'Released under the <a href="https://baidu.com">MIT License</a>.',
      copyright: "Copyright © 2019-present Evan You",
    },

    // 菜单栏
    // sidebar: [
    //   { text: "快速开始", link: "/guide/" },
    //   {
    //     text: "通用",
    //     items: [{ text: "Button 按钮", link: "/components/button.md" }],
    //   },
    //   { text: "导航" },
    //   { text: "反馈" },
    //   { text: "数据录入" },
    //   { text: "数据展示" },
    //   { text: "布局" },
    // ],
    sidebar,

    // 搜索
    search: {
      provider: "local",
    },
  },
});
