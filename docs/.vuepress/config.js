module.exports = {
  theme: 'vuepress-theme-qbook',
  title: '我的博客',
  themeConfig: {
    hostname: 'https://vuepress-theme-qbook.vercel.app',
    avatar: "logo.png",
    name: "个人博客",
    desc: "qbook主题示例",
    showArrow: true,
    logo: "/logo.png",
    nav: [
      {
        text: '主页',
        link: '/',
        icon: 'el-icon-cold-drink'
      },
      {
        text: '标签',
        link: '/tags/',
      },
      {
        text: '指南',
        link: '/docs/',
        icon: 'el-icon-bicycle'
      },
      {
        text: '插件',
        link: '/plugins/',
        icon: 'el-icon-coffee-cup'
      }
    ],
    sideBar: [
      {
        title: "主题",
        icon: "el-icon-chat-line-square",
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
        icon: "el-icon-dish",
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
    comment: {
      // 设置 `platform` 而不是 `api`
      platform: 'github',
      // 存储 issue 和评论的库的所有者名称。
      owner: 'open17',
      // 用于存储 issue 和评论的存储库的名称。
      repo: 'vuepress-theme-qbook',
      // 从 OAuth2 规范中引入的 clientId 和 clientSecret。
      clientId: 'e262f99ff317b8f2d87d',
      clientSecret: 'e38cbbdb2693f7c2267d285ecf53ab88f0535cb0',
    },
    mdUseAllPlugins: true,
    mdUseEventBus: false,
    mdDefaultTheme: "light",
    mdCodeTheme: ["atom-one-dark"]
  }
}