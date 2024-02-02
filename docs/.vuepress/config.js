module.exports = {
  theme: 'vuepress-theme-qbook',
  title: 'Blog of open17',
  themeConfig: {
    avatar: "https://avatars.githubusercontent.com/u/125687556?v=4",
    name: "个人博客",
    desc: "qbook主题示例",
    showArrow:true,
    logo:"/logo.png",
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Docs',
        link: '/docs/',
        icon: 'el-icon-notebook-1'
      },
      {
        text: 'Tags',
        link: '/tags/',
        icon: 'el-icon-collection-tag'
      },
      {
        text: 'Plugins',
        link:'/plugins/',
        icon: 'el-icon-umbrella'
      }
    ],
    sideBar: [
      {
        title: "主题",
        icon: "el-icon-collection",
        links: [
          {
            text: "介绍",
            link: "/docs/",
          },
          {
            text: "安装",
            link: "/docs/install/",
          },
          {
            text: "使用",
            link: "/docs/use/",
          },
          {
            text: "配置",
            link: "/docs/config/",
          },
          {
            text: "更新",
            link: "/docs/update/",
          },
          {
            text: "常见问题",
            link: "/docs/faq/",
          },
        ]
      },
      {
        title: "插件",
        icon: "el-icon-postcard",
        links: [
          {
            text: "介绍",
            link: "/plugins/",
          },
          {
            text: "pad-markdown",
            link: "/plugins/pad-markdown",
          },
        ]
      }
    ],
    mdUseAllPlugins: true,
    mdUseEventBus: false,
    mdDefaultTheme: "light",
    mdCodeTheme: ["atom-one-dark", "atom-one-light"]
  }
}