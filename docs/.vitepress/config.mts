import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "赵育坤的个人博客",
  description: "---",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "个人介绍", link: "/introduce-myself" },
      { text: "工作总结", link: "/work" },
      { text: "学习总结", link: "/learning" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "工作总结",
        items: [{ text: "什么是 RSA 加密", link: "/work/rsa" }],
      },
      {
        text: "学习总结",
        items: [
          { text: "如何编写一个 Babel 插件", link: "/learning/babel/1" },
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
