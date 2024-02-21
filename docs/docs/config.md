# 配置
::: tip 目录
[[toc]]
:::

:::info 图标与颜色与图片
在配置中你可能经常看见这三种配置,如果没有特殊说明的话:
- 图标默认为element-ui的图标库,只需要将图标名称传入即可
- 颜色支持十六进制、RGB、RGBA、HSL 和 HSLA 等格式的字符串形式传入
- 图片在配置中推荐使用网络路径(图床等),如需要使用本地图片,请将确保图片在public文件夹下,详见[常见问题](./faq)
:::

## 布局介绍
### 🌟 博客布局
- 所有在posts文件下的都会默认为博客布局的文章  
- 博客首页支持头像,sns,轮播背景等     
- 支持博客文章分页展示,排序与置顶   
- 支持tags分类,查看与搜索   
- 可以使用`layout:Post`强制切换为博客文章布局
### 🌟文档布局
- 所有不在posts文件夹下的会默认为文档布局
- 文档布局会显示侧边栏
- 同时取消文章背景图片,描述等
- 注重简洁与可读性
- - 可以使用`layout:Layout`强制切换为文档布局
### 🌟纯净布局
- 需要使用`layout:Clean`声明切换  
- 主题自带的组件将只展示topbar
- 同时不再渲染css主题   
- 通常用于特殊文章的展示,比如[这个幻灯片](http://localhost:8080/post/2024/02/20/reveal-js/)

## 博客主页<sup><el-tag type="danger" size="mini" effect="dark" style="border-radius: 10px">1.1.9更新</el-tag></sup>
配置在.vuepress下config.js文件中,其中如果背景图片太亮,可以加上蒙版颜色调节视觉效果
::: error 注意
如没有特别说明,配置均在.vuepress下config.js文件
:::
::: success 更新
自v1.1.8起,现在可以配置sns图标啦
sns数组内部数据中的type为图标,内置支持"github","linkedin","facebook","instgram","zhihu","weibo"
type设为custom的时候可以配置svg和color(图标颜色)
你可以在[阿里巴巴](https://www.iconfont.cn/search/)搜索想要的图标,然后复制svg代码到下面即可
```js
{
  type: "custom", 
  link:"#",
  svg:"<svg></svg>"
  color:"#fff"
}
```
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
    defaultPostImg:"https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082314316.jpg", //当博客文章未配置背景图片时文章页面的展示背景图,非必须
    defaultCardImg:"https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082335721.jpg", //当博客文章未配置背景图片时首页文章卡片的展示背景图,非必须
    homeWallpaper:"https://cdn.jsdelivr.net/gh/open17/Pic/img/202402100325389.webp", //非必须,首页展示博客列表的壁纸
    prevText:"上一页", //分页按钮的文字提示,默认"prev"和"next",非必须
    nextText:"下一页",
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
    sns:[ // 社交图标,非必须,为空则不展示,默认为空,
            {
                type:"github",   // 图标类型,内置支持"github","linkedin","facebook","instgram","zhihu","weibo"
                link:"https://github.com/open17" //跳转链接
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
                type:"custom",  //如果想使用自定义的图标,需要设置type为custom,然后设置svg的值和填充的颜色color值
                svg:`<svg t="1707297014035" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4075" width="200" height="200"><path d="M977.2 208.2c33.4 36.2 48.8 79.4 46.6 131.4v404.8c-0.8 52.8-18.4 96.2-53 130.2-34.4 34-78.2 51.8-131 53.4H184.04c-52.9-1.6-96.42-19.6-130.56-54.4C19.364 838.8 1.534 793 0 736.4V339.6c1.534-52 19.364-95.2 53.48-131.4C87.62 175.5 131.14 157.54 184.04 156h58.76L192.1 104.38c-11.5-11.46-17.26-26-17.26-43.58 0-17.6 5.76-32.12 17.26-43.594C203.6 5.736 218.2 0 235.8 0s32.2 5.736 43.8 17.206L426.2 156h176l149-138.794C763.4 5.736 778.4 0 796 0c17.6 0 32.2 5.736 43.8 17.206 11.4 11.474 17.2 25.994 17.2 43.594 0 17.58-5.8 32.12-17.2 43.58L789.2 156h58.6c52.8 1.54 96 19.5 129.4 52.2z m-77.6 139.4c-0.8-19.2-7.4-34.8-21.4-47-10.4-12.2-28-18.8-45.4-19.6H192.1c-19.18 0.8-34.9 7.4-47.16 19.6-12.28 12.2-18.8 27.8-19.56 47v388.8c0 18.4 6.52 34 19.56 47s28.76 19.6 47.16 19.6H832.8c18.4 0 34-6.6 46.6-19.6 12.6-13 19.4-28.6 20.2-47V347.6z m-528.6 85.4c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.4 12.6-28 19-47.2 19-19.2 0-35-6.4-47.2-19-12.2-12.6-18.8-28-19.6-46.4v-66.6c0.8-18.2 7.6-33.8 20.2-46.4 12.6-12.6 26.4-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z m383 0c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.2 12.6-28 19-47.2 19-19.2 0-34.8-6.4-47.2-19-14-12.6-18.8-28-19.4-46.4v-66.6c0.6-18.2 7.4-33.8 20-46.4 12.6-12.6 28.2-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z" p-id="4076"></path></svg>`,
                link:"https://space.bilibili.com/",
                color:"rgb(66, 183, 232)"
            }
        ],
  }
}
```
## 导航栏<sup><el-tag type="danger" size="mini" effect="dark" style="border-radius: 10px">1.1.7更新</el-tag></sup>
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
      {
        text: '链接',
        icon: 'el-icon-link',
        sub:[                  //嵌套子栏
            {
                text:'友链',
                link:'/link/friend'
            },
            {
                text:'关于',
                link:'/link/about',
                icon:'el-icon-ice-cream'
            }
        ]
      }
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
## 通知<sup><el-tag type="danger" size="mini" effect="dark" style="border-radius: 10px"><i class='el-icon-magic-stick' style="font-size:14px;font-weight:900">试验</i></el-tag></sup>
::: warning 试验性
标题右侧存在<el-tag type="danger" size="mini" effect="dark" style="border-radius: 10px"><i class='el-icon-magic-stick' style="font-size:14px;font-weight:900">试验</i></el-tag>表示目前该配置处于实验性阶段,可能会有改动
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
        mdCodeTheme: ["atom-one-dark", "atom-one-light"] // 默认使用的markdown代码主题,非必须,
    }
}
```
## 幻灯片配置
```js
module.exports = {
    // ... 
    themeConfig: {
        // revealConfig,非必须,详见vuepress-theme-reveal-js
        revealConfig:{
            theme:"black"
        }
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

## 评论
基于[vssue](https://vssue.js.org/zh/guide/),配置如下,选项请参考[这里](https://vssue.js.org/zh/guide/vuepress.html)
```js
module.exports = {
    // ... 
    themeConfig: {
        comment: {
          // 设置 `platform` 而不是 `api`
          platform: 'github',
          // 存储 issue 和评论的库的所有者名称。
          owner: 'open17',
          // 用于存储 issue 和评论的存储库的名称。
          repo: 'vuepress-theme-qbook',
          // 从 OAuth2 规范中引入的 clientId 和 clientSecret。
          clientId: 'xxxxxx',
          clientSecret: 'xxxxxxxxxxxxxxxx',
      },
    }
}
```

## 分页
自1.1.7起可以配置博客首页的分页功能每页的数量,默认一页展示10个博客
```js
module.exports = {
    // ... 
    themeConfig: {
        pageSize:5 // 每页展示5个博客
      },
}   
```
## 首页置顶博客
自1.1.6起博客按照时间排序
要注意在本主题中你无需配置时间,因为你在创建博客文件名的时候本身就引入了时间,如`2024-1-20-log.md`,主题会根据文件名自行排序(新到旧)
而想要置顶某个博客,只需要像[博客内容](#博客内容)的配置介绍部分一样在markdown顶部中加入`pin: true`即可,默认为`false`
多个置顶博客依然按照时间排序
```yaml
---
pin: true
---
```

## sitemap与rss
配置honstname即可自动生成
```js
module.exports = {
    // ... 
    themeConfig: {
        hostname: "https://pake.web.id", //非必须,默认网址,填入部署的网址
      },
}   

```

## 纯净css
在文章中会使用github-markdown-css来渲染markdown,而github-markdown-css默认会加载一些css,如果你想要一个更纯净的展示,
你可以使用`clean_css: true`来关闭默认的css加载