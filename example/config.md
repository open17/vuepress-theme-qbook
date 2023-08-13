# Configuration
> Unless otherwise specified, the configuration is for the theme and should be placed in themeConfig
## Description
## Configuration Migration
### Migrating from the default theme
To reduce configuration complexity, this theme supports most of the default theme's configurations  
Configurations that need to be changed:
    - The details of features in the homepage configuration are changed from a string to an array, and each element of the array is a line of strings
New configurations:
    - Navigation bar title setting
    - Icon configuration is supported in features of homepage configuration
### Migrating from an old version
> No changes yet
## Navigation Bar Configuration
### Navigation Bar Title
NavTitle
- Type: `str`
- Default value: `"Vuepress Theme QBook"`
### Navigation Bar Links
nav
- Type: `array`
- Default value: `null`
- `text`: Navigation text
- `link`: Page route address
- `items`: Embedded drop-down navigation
- Example:
    ```js
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Chapter 1",
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
### Navigation Bar Logo
logo
- Type:`str`
- Default value: `null`
Fill in the corresponding icon/picture [public file](https://vuepress.vuejs.org/guide/assets.html#public-files) path.
## Homepage Configuration
### Example:
```yml
---
heroText: Vuepress Theme QBook
heroImage: /icon.png
description: A doc book that shows you how to use this theme.
features:
  - title: Markdown Enhancement
    details: [omitted]
    icon: '<i class="text-xl el-icon-table-lamp"></i>'
  - title: Experience Enhancement
    details: [omitted]
    icon: '<i class="text-xl el-icon-collection"></i>'
actionText: Get Started → 
actionLink: guide
---
```

## Complete Example:
```

```