# 配置
::: tip 目录
[[toc]]
:::
## 博客主页
配置在.vuepress下config.js文件中,其中如果背景图片太亮,可以加上蒙版颜色调节视觉效果
::: error 注意
如没有特别说明,配置均在.vuepress下config.js文件
:::
```js
module.exports = {
  theme: 'vuepress-theme-qbook', // 使用本主题,不可修改
  title: 'Blog of open17', //标题
    //   ....其他配置
  themeConfig: {
    avatar: "https://avatars.githubusercontent.com/u/125687556?v=4", //你的头像,用于展示在博客首页,必须
    name: "个人博客", // 你的名字,用于展示在博客首页,默认为Hello,world!
    desc: "qbook主题示例", // 你的博客描述,用于展示在博客首页,非必须,默认为空
    showArrow:true,  //轮播图左右的箭头是否显示,非必须,默认为true
    // 轮播背景大图 ,非必须,默认为两张主题图片
    pics:[
        {
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fedcce72d-6192-43d1-901d-b8c28c7534a4%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1709445902&t=ef885c88d77adf07c8bdf7de21d352e6',
          color: 'rgba(92, 101, 124, 0.1)' //蒙版颜色,非必须,默认为rgba(92, 101, 124, 0.1)
        },
        {
          img: 'https://img0.baidu.com/it/u=2282554270,2171227023&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
          color: 'rgba(92, 101, 124, 0.1)'
        }
      ],
  }
}
```
## 导航栏
```js
module.exports = {
  theme: 'vuepress-theme-qbook', // 使用本主题,不可修改
  title: 'Blog of open17', //标题
    //   ....其他配置
  themeConfig: {
    // 导航栏配置,非必须,默认配置如下
    logo:"/logo.png",  //导航栏图标,仅支持本地
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Tags',
        link: '/tags/',
        icon: 'el-icon-collection-tag' //导航栏接受的icon图标,非必须,默认为el-icon-news
      },
    ],
  }
}
```
## 侧边栏
```js
module.exports = {
  theme: 'vuepress-theme-qbook', // 使用本主题,不可修改
  title: 'Blog of open17', //标题
    //   ....其他配置
  themeConfig: {
    // 侧边栏配置,非必须,示例如下
    sideBar: [
      {
        title: "主题",
        icon: "el-icon-collection",
        links: [
          {
            text: "介绍",
            link: "/docs/",
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
  }
}
```
## 通知<sup><el-tag type="danger" size="mini" effect="dark" style="border-radius: 10px"><i class='el-icon-magic-stick' style="font-size:14px;font-weight:900"></i></el-tag></sup>
::: warning 实验
标题右侧存在<el-tag type="danger" size="mini" effect="dark" style="border-radius: 10px"><i class='el-icon-magic-stick' style="font-size:14px;font-weight:900"></i></el-tag>表示目前该配置处于实验性阶段,可能会有改动
:::
配置通知后,每次打开主页的时候都会弹出通知,通知内容配置如下:
```js
module.exports = {
    // ... 
    themeConfig: {
        // ...
        notify: {
            title: "标题", // 通知标题
            html: "<div style='color:black'>我是一个通知</div>", // 通知内容的html
            duration: 0 // 通知自动关闭倒计时，特别的0为一直不自动关闭(用户可手动关闭)
        }
    }
}
```
## markdown增强
```js
module.exports = {
    // ... 
    themeConfig: {
        // markdown增强配置,非必须,默认配置如下,详见pad-markdown插件
        mdUseAllPlugins: true, // 是否启用所有markdown增强插件,非必须,默认为true
        mdDefaultTheme: "light", // 默认使用的markdown主题,非必须,默认为light,可选dark/light/autp
        mdCodeTheme: ["atom-one-dark", "atom-one-light"] // 默认使用的markdown代码主题,非必须
    }
}
```
## 博客内容
该在对应博客的markdown文件的最开头部分配置
格式如下,其中mask是颜色蒙版,非必须,默认为`rgba(92, 101, 124, 0.1)`
```yaml
---
img: xxx.yyy
desc: zzzzzzz
tags: 
    - your-tag1
    - your-tag2
mask: 'xxx'
---
```
::: info 例如
示例如下:
```yaml
---
tags:
    - test
    - theme
img: blog3.jpg
desc: 这是一个测试文档,用于展示各种页面和功能
mask: 'rgba(74, 106, 67, 0.45)'
---

# 你的文章标题
> 你的文章正文

```
:::
