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
    sns:[
            {
                type:"github",
                link:"https://github.com/open17"
            },
            {
                type:"linkedin",
                link:"https://www.linkedin.com/in/",
            },
            {
                type:"facebook",
                link:"https://www.facebook.com/",
            },
            {
                type:"instagram",
                link:"https://www.instagram.com/",
            },
            {
                type:"zhihu",
                link:"https://www.zhihu.com/",
            },
            {
                type:"weibo",
                link:"https://www.weibo.com/",
            },
            {
                type:"custom",
                svg:`<svg t="1707297014035" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4075" width="200" height="200"><path d="M977.2 208.2c33.4 36.2 48.8 79.4 46.6 131.4v404.8c-0.8 52.8-18.4 96.2-53 130.2-34.4 34-78.2 51.8-131 53.4H184.04c-52.9-1.6-96.42-19.6-130.56-54.4C19.364 838.8 1.534 793 0 736.4V339.6c1.534-52 19.364-95.2 53.48-131.4C87.62 175.5 131.14 157.54 184.04 156h58.76L192.1 104.38c-11.5-11.46-17.26-26-17.26-43.58 0-17.6 5.76-32.12 17.26-43.594C203.6 5.736 218.2 0 235.8 0s32.2 5.736 43.8 17.206L426.2 156h176l149-138.794C763.4 5.736 778.4 0 796 0c17.6 0 32.2 5.736 43.8 17.206 11.4 11.474 17.2 25.994 17.2 43.594 0 17.58-5.8 32.12-17.2 43.58L789.2 156h58.6c52.8 1.54 96 19.5 129.4 52.2z m-77.6 139.4c-0.8-19.2-7.4-34.8-21.4-47-10.4-12.2-28-18.8-45.4-19.6H192.1c-19.18 0.8-34.9 7.4-47.16 19.6-12.28 12.2-18.8 27.8-19.56 47v388.8c0 18.4 6.52 34 19.56 47s28.76 19.6 47.16 19.6H832.8c18.4 0 34-6.6 46.6-19.6 12.6-13 19.4-28.6 20.2-47V347.6z m-528.6 85.4c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.4 12.6-28 19-47.2 19-19.2 0-35-6.4-47.2-19-12.2-12.6-18.8-28-19.6-46.4v-66.6c0.8-18.2 7.6-33.8 20.2-46.4 12.6-12.6 26.4-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z m383 0c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.2 12.6-28 19-47.2 19-19.2 0-34.8-6.4-47.2-19-14-12.6-18.8-28-19.4-46.4v-66.6c0.6-18.2 7.4-33.8 20-46.4 12.6-12.6 28.2-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z" p-id="4076"></path></svg>`,
                link:"https://space.bilibili.com/",
                color:"rgb(66, 183, 232)"
            }
        ],
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
      clientId: 'f1ba1cc9abc5b3844b05',
      clientSecret: 'ade32ddf8c5e1ff125fcfecde535d2d3c09f6f14',
    },
    mdUseAllPlugins: true,
    mdUseEventBus: false,
    mdDefaultTheme: "light",
    mdCodeTheme: ["atom-one-dark"]
  }
}