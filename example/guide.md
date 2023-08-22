# Theme Guide
## Introduction
### Overview

### Features
- Out of the box (supports most default theme configurations)
- Katex support
- Table of contents feature
- Code highlighting, copying
- To-do
- Highlighter
- Full-text search
- Image enhancement: zoom in and out of rotation
- Video Embed
- ...

## Quick Start
### Prerequisites
- [Node.js 10+](https://nodejs.org/en)

### Installation
> If you want to install in an existing project, please start from step 3
1. Create a project folder and switch to that folder, replace myqbook with the project name you want
    ```cmd
    mkdir myqbook && cd myqbook
    ```
2. Package manager initialization


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

3. Install vuepress-theme-qbook and vuepress (if you haven't installed it)
   
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



4. Create your first document
    ```cmd
    mkdir docs && echo '# qbook' > docs/README.md
    ```
5. Configure the theme
    Now your directory should look like this:
     ```
    .
    ├── docs
    │   └── README.md
    │   
    │ 
    └── package.json
    ```
    Now create a .vuepress folder in the docs folder and create config.js (this is the vuepress configuration file)
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
     In the config.js configuration, introduce the theme, here is the simplest configuration:
     ```js
     // .vuepress/config.js
     module.exports = {
         //Use this theme
         theme: 'qbook',
         //Fill in the web page title in title:
         title: 'your-title',
     }
     ```
6. Modify pakage.json startup command (optional but recommended)
   
   Add the following code to pakage.json:
   Here we simplify the `vuepress dev docs` command to `dev`, and simplify the `vuepress build docs` command to `build`
   
     ```json
     {
         //...The configuration generated automatically when you init earlier:
       "scripts": {
         "dev": "vuepress dev docs",
         "build": "vuepress build docs"
       }
     }
     ```

7. Done!
   - Run the page on a local server

        The following assumes that you have performed step 6, otherwise replace `dev` below with `vuepress dev docs`

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

   - Package
  
        The following assumes that you have performed step 6, otherwise replace `build` below with `vuepress build docs`

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

## Theme configuration
See [Configuration](./config)
## Plugins
### Theme built-in plugins
#### vuepress-plugin-el-img
It is used to provide enhanced functions such as zooming in, zooming out, rotating images, etc.
[Usage Guide](https://www.npmjs.com/package/vuepress-plugin-el-img)
#### vuepress-plugin-el-tab
Used to provide tabs (can be used to display multiple codes, etc.)
[Usage Guide](https://www.npmjs.com/package/vuepress-plugin-el-tab)
#### vuepress-plugin-fulltext-search
full text search
[Usage Guide](https://www.npmjs.com/package/vuepress-plugin-fulltext-search)
#### vuepress-plugin-markdown-todolist
GitHub-style todolist implementation
[Usage Guide](https://www.npmjs.com/package/vuepress-plugin-markdown-todolist)
#### vuepress-plugin-pad-markdown
Markdown basic style modification and code block enhancement
[Usage Guide](https://www.npmjs.com/package/vuepress-plugin-pad-markdown)
### Other recommended plugins
no yet
## Directory Structure

The recommended directory structure is as follows:

```
.
├── docs (root directory for storing markdown)
│   │   
│   ├── .vuepress 
│   │   │
│   │   ├── components (optional, for storing custom components)
│   │   │
│   │   │
│   │   ├── public (optional, for storing public resources)
│   │   │
│   │   ├── enhanceApp.js (optional, client-side enhancement component)
│   │   │
│   │   └── config.js (vuepress configuration)
│   │ 
│   └── README.md (home page)
│   
│ 
└── package.json

```
## Page Routing

The following is from the official VuePress documentation:

> Here we use the docs directory as targetDir (see Command Line Interface), and all "relative paths of files" below are relative to the docs directory:

| Relative path of file | Page route address |
| --------------------- | ------------------ |
| /README.md            | /                  |
| /guide/README.md      | /guide/            |
| /config.md            | /config.html       |

`README.md` will be rendered as a qbook desktop interface, and # level 1 headings will be used as small titles on the page. Currently, other content will not be rendered.


## Troubleshooting

### Module not found

If you see the error message `Module not found: Error: Can't resolve 'core-js/library/fn/object/assign'`, you can try to downgrade the core-js version to 2.5.7 to resolve this issue. The reason is referenced here: https://stackoverflow.com/questions/55308769/module-not-found-error-cant-resolve-core-js-es6#:~:text=To%20resolve%20this%20error%2C%20you%20can%20downgrade%20the,In%20my%20case%2C%20with%20Angular%2C%20this%20works%20ok..

### Relative path image cannot be displayed

Change the relative path of the image to use the public file: https://vuepress.vuejs.org/zh/guide/assets.html#%E5%85%AC%E5%85%B1%E6%96%87%E4%BB%B6 path.

I hope this is helpful! Let me know if you have any other questions.

