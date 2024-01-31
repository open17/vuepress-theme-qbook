module.exports = {
  theme: 'vuepress-theme-qbook',
  title: 'Blog of open17',
  themeConfig: {
    avatar: "https://avatars.githubusercontent.com/u/125687556?v=4",
    name: "个人博客",
    desc: "qbook主题示例",
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Docs',
        link: '/docs/',
        icon:'el-icon-notebook-1'
      },
      {
        text: 'Tags',
        link: '/tags/',
        icon:'el-icon-collection-tag'
      },
    ]
  }
}