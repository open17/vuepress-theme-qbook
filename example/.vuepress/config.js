// .vuepress/config.js
const path = require('path')
module.exports = {
  theme: path.resolve(__dirname, '../../'),
  // Fill in the webpage title in title
  title: 'vuepress-theme-qbook',
  base: "/vuepress-theme-qbook/",
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']
  },
  themeConfig: {
    banner:true,
    nav: [
      {
        text: "Home",
        items: [
          { text: 'Chinese', link: '/cn/' },
          { text: 'English', link: '/' }
        ]
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
        text: "ChangeLog",
        link: "changelog"
      },
      {
        text:"Markdown",
        link:"markdown"
      },
    ],
    logo:"/icon.png"
  },

}