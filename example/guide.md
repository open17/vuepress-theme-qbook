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


    ```sh
    npm init
    ```

    Or if you prefer yarn  

    ```
    yarn init 
    ```
3. Install vuepress-theme-qbook and vuepress (if you haven't installed it)
    ```
    npm i vuepress-theme-qbook vuepress -D
    ```

    Or

    ```
    yarn add vuepress-theme-qbook vuepress -D
    ```
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

        The following assumes that you have performed <h-lighter setcolor="#dafbe1">step 6</h-lighter>, otherwise replace `dev` below with `vuepress dev docs`

        ```
        npm run dev
        ```
        Or:
        ```
        yarn dev
        ```
   - Package
  
        The following assumes that you have performed <h-lighter setcolor="#dafbe1">step 6</h-lighter>, otherwise replace `build` below with `vuepress build docs`

        ```
        npm build dev
        ```
        Or:
        ```
        yarn build
        ```

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

|Relative path of file | Page route address |
| ---                  | ---                |
|/README.md	         | /                  |
|/guide/README.md      | /guide/            | 
|/config.md	         | /config.html       |

`README.md` will be rendered as a qbook desktop interface, and # level 1 headings will be used as small titles on the page. Currently, other content will not be rendered.

## Problems
### Module not found
When you see this:`babel-runtime/core-js/object/assign.js Module not found: Error: Can't resolve 'core-js/library/fn/object/assign'`,you can downgrade the core-js version to 2.5.7 to fix it.Maybe it is related to [this](https://stackoverflow.com/questions/55308769/module-not-found-error-cant-resolve-core-js-es6#:~:text=To%20resolve%20this%20error%2C%20you%20can%20downgrade%20the,In%20my%20case%2C%20with%20Angular%2C%20this%20works%20ok.)

### Redirected
Although the vuepress redirect is working as expected, due to the mechanism of elementui itself, it will treat the redirect as an error and report it, so the console error `Redirected when going from "xxx" to "xx" via a navigation guard.` may not necessarily be a problem.