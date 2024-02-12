module.exports = {
  theme: 'vuepress-theme-qbook',
  title: 'OPEN17',
  themeConfig: {
    hostname: 'https://vuepress-theme-qbook.vercel.app',
    avatar: "logo.png",
    name: "个人博客",
    desc: "qbook主题示例",
    defaultPostImg:"https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082314316.jpg", //当博客文章未配置背景图片时文章页面的展示背景图,非必须
    defaultCardImg:"https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082335721.jpg", //当博客文章未配置背景图片时首页文章卡片的展示背景图,非必须
    showArrow: true,
    logo: "/logo.png",
    sns:[
            {
                type:"github",
                link:"https://github.com/open17/vuepress-theme-qbook"
            },
            {
                type:"rss",
                link:"https://blog.open17.vip/",
                svg:`<svg t="1707724882291" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8333" width="400" height="400"><path d="M329.142857 768q0 45.714286-32 77.714286t-77.714286 32-77.714286-32-32-77.714286 32-77.714286 77.714286-32 77.714286 32 32 77.714286zm292.571429 70.285714q1.142857 16-9.714286 27.428571-10.285714 12-26.857143 12l-77.142857 0q-14.285714 0-24.571429-9.428571t-11.428571-23.714286q-12.571429-130.857143-105.428571-223.714286t-223.714286-105.428571q-14.285714-1.142857-23.714286-11.428571t-9.428571-24.571429l0-77.142857q0-16.571429 12-26.857143 9.714286-9.714286 24.571429-9.714286l2.857143 0q91.428571 7.428571 174.857143 46t148 103.714286q65.142857 64.571429 103.714286 148t46 174.857143zm292.571429 1.142857q1.142857 15.428571-10.285714 26.857143-10.285714 11.428571-26.285714 11.428571l-81.714286 0q-14.857143 0-25.428571-10t-11.142857-24.285714q-6.857143-122.857143-57.714286-233.428571t-132.285714-192-192-132.285714-233.428571-58.285714q-14.285714-0.571429-24.285714-11.142857t-10-24.857143l0-81.714286q0-16 11.428571-26.285714 10.285714-10.285714 25.142857-10.285714l1.714286 0q149.714286 7.428571 286.571429 68.571429t243.142857 168q106.857143 106.285714 168 243.142857t68.571429 286.571429z" p-id="8334"></path></svg>`,
                color:"#efb336"
            },
            {
                type:"blog",
                link:"https://blog.open17.vip/",
                svg:`<svg t="1707724752793" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6562" width="400" height="400"><path d="M384 64c0 35.4 28.6 64 64 64 247.4 0 448 200.6 448 448 0 35.4 28.6 64 64 64s64-28.6 64-64C1024 257.8 766.2 0 448 0c-35.4 0-64 28.6-64 64z m0 192c0 35.4 28.6 64 64 64 141.4 0 256 114.6 256 256 0 35.4 28.6 64 64 64s64-28.6 64-64c0-212-172-384-384-384-35.4 0-64 28.6-64 64z m-192 32c0-53-43-96-96-96S0 235 0 288v448c0 159 129 288 288 288s288-129 288-288-129-288-288-288h-32v192h32c53 0 96 43 96 96s-43 96-96 96-96-43-96-96V288z" p-id="6563"></path></svg>`,
                color:"#1296db"
            },
            {
                type:"npm",
                svg:`<svg t="1707724505508" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4837" width="400" height="400"><path d="M768 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h298.666667V469.333333h170.666666v426.666667h42.666667a128 128 0 0 0 128-128V256a128 128 0 0 0-128-128z" p-id="4838"></path></svg>`,
                link:"https://www.npmjs.com/package/vuepress-theme-qbook?activeTab=readme",
                color:"#d81e06"
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
    mdCodeTheme: ["atom-one-dark"],
    hostname:"https://qbook.open17.vip"
  }
}