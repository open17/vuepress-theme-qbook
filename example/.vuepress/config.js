// .vuepress/config.js
const path = require('path')
module.exports = {
  theme: path.resolve(__dirname, '../../'),
  // Fill in the webpage title in title
  title: 'your-title',
  base: "/vuepress-theme-qbook/",
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']
  },
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Config",
        link: "config",
      },
      {
        text: "Guide",
        link: "guide",
      },
      {
        text: "language",
        items: [
          { text: 'Chinese', link: '/cn/' },
          { text: 'English', link: '/' }
        ]
      },
    ],
    logo:"/icon.png"
  },

}