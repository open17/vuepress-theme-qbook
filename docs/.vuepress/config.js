module.exports = {
  theme: 'vuepress-theme-qbook',
  title: 'vuepress qbook主题',
  description: 'vuepress thme qbook博客主题文档',
  head: [
    // SEO优化
    ["meta", { name: "keywords", content: "open17, 博客, vuepress, vuepress-theme-qbook, vuepress theme, vuepress主题, qbook", },],
    // PWA图标补全
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'icon/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'icon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'icon/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: 'icon/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: 'icon/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#603cba' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        //自定义PWA组件
        popupComponent: 'MySWUpdatePopup',
        updatePopup: {
          message: "铛铛铛~主题文档已更新!",
          buttonText: "立刻刷新!",
        }
      }
    ]
  ],
  themeConfig: {
    hostname: 'https://qbook.open17.vip',
    logo: "icon/android-chrome-192x192.png",
    avatar: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402180055280.webp",
    name: "qbook主题",
    desc: "vuepress博客主题示例",
    defaultPostImg: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082314316.jpg", //当博客文章未配置背景图片时文章页面的展示背景图,非必须
    defaultCardImg: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082335721.jpg", //当博客文章未配置背景图片时首页文章卡片的展示背景图,非必须
    homeWallpaper: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402100325389.webp",
    showArrow: true,
    sns: [
      {
        type: "github",
        link: "https://github.com/open17/vuepress-theme-qbook"
      },
      {
        type: "template",
        link: "https://qbook-template.open17.vip/",
        svg: `<svg t="1708322640058" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5153" width="200" height="200"><path d="M848.38 225.06c-21.61-77.78-92.89-135.1-177.48-135.1H210.33C108.69 89.96 26 172.65 26 274.29v337.28c0 94.1 70.88 171.8 162.02 182.87 21.77 78.35 93.12 134.22 177.39 134.22h448.07C915.22 928.66 998 846 998 744.38V405.92c0-88.98-64.85-164.47-149.62-180.86zM99.42 611.57V274.29c0-61.16 49.76-110.91 110.91-110.91H670.9c61.18 0 110.94 49.76 110.94 110.91v337.28c0 61.18-49.76 110.94-110.94 110.94H210.33c-61.16-0.01-110.91-49.76-110.91-110.94z m825.16 132.8c0 61.13-49.85 110.87-111.1 110.87H365.41c-42.65 0-79.76-23.77-98.28-59.32H670.9c101.66 0 184.35-82.69 184.35-184.35V303.44c40.44 16.61 69.33 56.45 69.33 102.48v338.45z" p-id="5154"></path></svg>`,
        color: "#efb336"
      },
      {
        type: "blog",
        link: "https://blog.open17.vip/",
        svg: `<svg t="1707724752793" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6562" width="400" height="400"><path d="M384 64c0 35.4 28.6 64 64 64 247.4 0 448 200.6 448 448 0 35.4 28.6 64 64 64s64-28.6 64-64C1024 257.8 766.2 0 448 0c-35.4 0-64 28.6-64 64z m0 192c0 35.4 28.6 64 64 64 141.4 0 256 114.6 256 256 0 35.4 28.6 64 64 64s64-28.6 64-64c0-212-172-384-384-384-35.4 0-64 28.6-64 64z m-192 32c0-53-43-96-96-96S0 235 0 288v448c0 159 129 288 288 288s288-129 288-288-129-288-288-288h-32v192h32c53 0 96 43 96 96s-43 96-96 96-96-43-96-96V288z" p-id="6563"></path></svg>`,
        color: "#1296db"
      },
      {
        type: "npm",
        svg: `<svg t="1707724505508" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4837" width="400" height="400"><path d="M768 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h298.666667V469.333333h170.666666v426.666667h42.666667a128 128 0 0 0 128-128V256a128 128 0 0 0-128-128z" p-id="4838"></path></svg>`,
        link: "https://www.npmjs.com/package/vuepress-theme-qbook?activeTab=readme",
        color: "#d81e06"
      }
    ],
    pics: [
      {
        img: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082335721.jpg',
        color: 'rgba(92, 101, 124, 0.2)'
      },
      {
        img: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082335237.jpg',
        color: 'rgba(92, 101, 124, 0.2)'
      },
      {
        img: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082314316.jpg',
        color: 'rgba(92, 101, 124, 0.1)'
      },
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
        text:"展示",
        link:"/post/2024/02/20/reveal-js",
        icon:"el-icon-data-board"
      },
      {
        text: '指南',
        link: '/docs/',
        icon: 'el-icon-bicycle',
        sub: [
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
          {
            text:"reavel-js",
            link:"/plugins/reveal-js"
          }
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
    mdCodeTheme: ["atom-one-dark"],
    hostname: "https://qbook.open17.vip"
  }
}