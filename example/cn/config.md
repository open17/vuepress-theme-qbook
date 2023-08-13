# 配置
> 如没有特别说明,配置均为主题配置,应放在themeConfig中
## 说明
## 配置迁移
### 从默认主题迁移
为减少配置复杂度,本主题支持大多数默认主题的配置  
需要更改的配置:
    - 主页配置中features的details由字符串改为数组,数组每个元素为一行字符串
新增的配置:
    - 导航栏title设置
    - 主页配置中features支持icon配置
### 从旧版本迁移
> 暂无更改
## 导航栏配置
### 导航栏标题
NavTitle
- 类型: `str`
- 默认值: `"Vuepress Theme QBook"`
### 导航栏链接
nav
- 类型: `array`
- 默认值: `null`
- `text`: 导航文字
- `link`: 页面路由地址
- `items`: 嵌入下拉导航
- 示例
    ```js
    nav: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "章节1",
        link: "Ct1",
      },
      {
        text: "ddd",
        items: [
          { text: 'Chinese', link: '/cn/' },
          { text: 'Japanese', link: '/jp/' }
        ]
      },
    ],
    ```
### 导航栏logo
logo
- 类型:`str`
- 默认值: `null`
填入对应图标/图片[公共文件](https://vuepress.vuejs.org/zh/guide/assets.html#%E5%85%AC%E5%85%B1%E6%96%87%E4%BB%B6)路径
## 主页配置
### 示例
```yml
---
heroText: Vuepress Theme QBook
heroImage: /icon.png
description: A doc book that show you how to use this theme.
features:
  - title: Markdown增强
    details: [略]
    icon: '<i class="text-xl el-icon-table-lamp"></i>'
  - title: 体验提升
    details: [略]
    icon: '<i class="text-xl el-icon-collection"></i>'
actionText: 一键开始 →
actionLink: guide
---
```

## 完整示例
```

```