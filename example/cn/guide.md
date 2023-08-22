# 主题指南
## 介绍
### 概述
### 功能
- 开箱即用(支持大多数默认主题配置)
- katex支持
- 目录功能
- 代码高亮,复制
- To-do
- 荧光笔
- 全文搜索
- 返回顶部
- 白天/黑夜模式(自动)
- 图片增强:放大缩小旋转
- 视频嵌入
- ...

## 快速开始
### 前置环境
- [Node.js 10+](https://nodejs.org/en)

### 安装
#### 自动安装
#### 手动安装
> 如果要在已有的项目安装,请从第三步开始
1. 创建一个项目文件夹并切换到该文件夹,把myqbook替换为你想要的项目名
    ```cmd
    mkdir myqbook && cd myqbook
    ```
2. 包管理器初始化


    @tab

    <[npm]

    ```sh
    npm init
    ```

    <()

    <[yarn]

    ```
    yarn init 
    ```
    <()

    @@tab

3. 安装vuepress-theme-qbook和vuepress(如果你没安装的话)
   

    @tab

    <[npm]

    ```
    npm i vuepress-theme-qbook vuepress -D
    ```

    <()

    <[yarn]

    ```
    yarn add vuepress-theme-qbook vuepress -D
    ```

    <()

    @@tab




4. 创建你的第一篇文档
    ```cmd
    mkdir docs && echo '# qbook' > docs/README.md
    ```
5. 配置主题
    现在您的目录应该类似如下结构
     ```
    .
    ├── docs
    │   └── README.md
    │   
    │ 
    └── package.json
    ```
    现在在docs文件夹中创建.vuepress文件夹,并创建config.js(这是vuepress的配置文件)
    ```
    .
    ├── docs
    │   ├── .vuepress 
    │   │   │
    │   │   └── config.js
    │   │ 
    │   └── README.md
    │   
    │ 
    └── package.json
    ```
    在config.js配置中引入主题,下面是最简单的配置
    ```js
    // .vuepress/config.js
    module.exports = {
        //使用本主题
        theme: 'qbook',
        //title中填入网页标题
        title: 'your-title',
    }
    ```
6. 修改pakage.json启动命令(可选但推荐)
   
   在pakage.json加入以下代码
   这里我们把`vuepress dev docs`命令简化成`dev`,`vuepress build docs`命令简化成`build`
   
    ```json
    {
        //...你前面的init时自动生成配置
      "scripts": {
        "dev": "vuepress dev docs",
        "build": "vuepress build docs"
      }
    }
    ```

7. 完成!
   - 在本地服务器中运行页面

        已下均假设你进行了步骤6,否则将下面的`dev`替换为`vuepress dev docs`

        @tab

        <[npm]

        ```
        npm run dev
        ```

        <()

        <[yarn]

        ```
        yarn dev
        ```
        <()

        @@tab
       
   - 打包

        已下均假设你进行了步骤6,否则将下面的`build`替换为`vuepress build docs`

        @tab

        <[npm]

        ```
        npm run build
        ```

        <()

        <[yarn]

        ```
        yarn build
        ```
        <()

        @@tab
## 主题配置
请见[配置](./config)
## 插件
### 主题内置插件
#### vuepress-plugin-el-img
用于提供图片的放大缩小旋转等增强功能
[使用指南](https://www.npmjs.com/package/vuepress-plugin-el-img)
#### vuepress-plugin-el-tab
用于提供选项卡(可用于多代码等展示)
[使用指南](https://www.npmjs.com/package/vuepress-plugin-el-tab)
#### vuepress-plugin-fulltext-search
提供全文搜索
[使用指南](https://www.npmjs.com/package/vuepress-plugin-fulltext-search)
#### vuepress-plugin-markdown-todolist
github风格的todolist实现
[使用指南](https://www.npmjs.com/package/vuepress-plugin-markdown-todolist)
#### vuepress-plugin-pad-markdown
markdown基本样式修改与代码块增强
[使用指南](https://www.npmjs.com/package/vuepress-plugin-pad-markdown)
### 其他推荐插件
暂无
## 目录结构
建议的目录结构如下:
```
.
├── docs(存放markdown的根目录)
│   │   
│   ├── .vuepress 
│   │   │
│   │   ├── components(可选的,存放自定义组件)
│   │   │
│   │   │
│   │   ├── public (可选的,存放公共资源)
│   │   │
│   │   ├── enhanceApp.js (可选的,客户端增强组件)
│   │   │
│   │   └── config.js (vuepress配置)
│   │ 
│   └── README.md (主页)
│   
│ 
└── package.json
```
## 页面路由

下面源自vuepress官方文档

> 此处我们把 docs 目录作为 targetDir （参考 命令行接口），下面所有的“文件的相对路径”都是相对于 docs 目录的

|文件的相对路径	   |页面路由地址  |
| ---              | ---          |
|/README.md	       |   /          |
|/guide/README.md  |  /guide/     | 
|/config.md	       | /config.html |

`README.md`会作为qbook桌面界面渲染,#一级标题会作为页面的小title,目前其他内容不会被渲染


## 异常排查
### Module not found
当你看到:`babel-runtime/core-js/object/assign.js Module not found: Error: Can't resolve 'core-js/library/fn/object/assign'`,你可以尝试降低core-js版本到2.5.7来解决这个问题.原因参考[这里](https://stackoverflow.com/questions/55308769/module-not-found-error-cant-resolve-core-js-es6#:~:text=To%20resolve%20this%20error%2C%20you%20can%20downgrade%20the,In%20my%20case%2C%20with%20Angular%2C%20this%20works%20ok.)

### 相对路径图片无法显示
将图片的相对路径改为使用[公共文件](https://vuepress.vuejs.org/zh/guide/assets.html#%E5%85%AC%E5%85%B1%E6%96%87%E4%BB%B6)路径