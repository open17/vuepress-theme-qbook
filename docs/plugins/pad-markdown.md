# pad-markdwon
> vuepress-plugin-pad-markdwon

用于markdown增强的vuepress1.x插件

[![npm version](https://img.shields.io/npm/v/vuepress-plugin-pad-markdown.svg)](https://www.npmjs.com/package/vuepress-plugin-pad-markdown) [![npm downloads](https://img.shields.io/npm/dt/vuepress-plugin-pad-markdown.svg)](https://www.npmjs.com/package/vuepress-plugin-pad-markdown) [![license](https://img.shields.io/npm/l/vuepress-plugin-pad-markdown.svg)](https://github.com/open17/vuepress-plugin-pad-markdown/blob/master/LICENSE)  

## 功能

- markdown主题支持
- 代码高亮支持
- 主题和高亮均支持静态/动态切换配置
- 代码复制按钮与成功提示
- katex支持
- 回车换行

## 安装

使用npm安装插件：
```
npm i vuepress-plugin-pad-markdown
``` 

或者使用yarn安装插件：
```
yarn add vuepress-plugin-pad-markdown
```


## 快速使用

在VuePress配置文件中启用插件：
```js
//.vuepress/config.js
module.exports = {
    plugins: [
      [
        "pad-markdown",
        {
          useAllPlugins:true // 是否启用所有插件
        }
      ]
    ],
  }
```
现在已经开始使用啦!  

其他配置如下
```js
//.vuepress/config.js
module.exports = {
    plugins: [
      [
        "pad-markdown",
        {
          useAllPlugins:false, // 是否启用所有插件
          katex:true, // 是否启用katex
          footnote:true, // 是否启用footnote
          copy:true, // 是否启用复制按钮
          mark:true, // 是否启用高亮
          marmaid:true, // 是否启用marmaid
        }
      ]
    ],
  }
```
## 更多配置
完整配置示例:
```js
//.vuepress/config.js
module.exports = {
    plugins: [
      [
        "pad-markdown",
        {
          useAllPlugins:false, // 是否启用所有插件
          katex:true, // 是否启用katex
          footnote:true, // 是否启用footnote
          copy:true, // 是否启用复制按钮
          mark:true, // 是否启用高亮
          marmaid:true, // 是否启用marmaid
        }
      ]
    ],
    themeConfig: {
        mdUseEventBus: true, // 是否启用主题事件总线(支持动态配置) 默认为true
        mdDefaultTheme: "light", // 默认主题 light/dark/auto
        mdCodeTheme: ["atom-one-dark", "atom-one-light"] // 默认代码高亮主题
    }
  }
```
- 事件总线为`Vue.prototype.$MdEventBus`
- 代码复制成功触发`Vue.prototype.$MdEventBus.$emit('clipboard-success')`
- 切换代码块高亮请使用`Vue.prototype.$MdEventBus.$on('loadCodeTheme', (data))`,传入字符串数组,高亮选项请参考`hightlight.js/css`
- 切换主题请使用`Vue.prototype.$MdEventBus.$on('loadTheme', (data))`,传入字符串"light"或"dark"或"auto"

## 更新日志
### v1.1.6
- 优化代码逻辑与结构
- 解决与`@renovamen/vuepress-plugin-mermaid`的冲突问题
- 现在复制按钮只会加载在`highlight.js`支持的语言上