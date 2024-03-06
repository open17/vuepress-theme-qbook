---
tags: 
    - 幻灯片
    - 功能介绍
desc: 可能...更新不定期
title: vuepress-theme-qbook主题介绍
clean_css: true
layout: Clean
test_config:
    theme: "night"  
    width: 1200
    loop: true
pin: true
---

:::reveal test_config
<section data-auto-animate>
  <h2 style="  background: -webkit-linear-gradient( 120deg, #bd34fe 30%, #41d1ff );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent">vuepress theme qbook</h2>
  <p style="margin-top:15%">按下键盘右键/点击箭头/向右滑动开始</p>
</section>
<section data-auto-animate>
<img src="/icon/android-chrome-512x512.png" width="200"/>
  <h2 style="font-weight:800;    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(202,203,72,1) 0%, rgba(0,212,255,1) 100%);;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent">vuepress theme qbook</h2>
  <p >a blog theme by open17</p>
</section>
      <section data-markdown data-auto-animate>
        <textarea data-template>
        ## Intro
        ---
        ## Intro
        - 📦 开箱即用
        - 🎨 个性化配置
        - 📚 Markdown增强
        - 🌟 多样布局,多端适配
        ---
        ## Intro
        ### 📦 开箱即用
        ---
        ### 📦 开箱即用
        最简单的配置只需7行
        ```js [1-4]
        //config.js
        module.exports = {
          theme: 'vuepress-theme-qbook',
        }
        ```
        <!-- .element: data-id="code-animation" -->
        ---
        ### 📦 开箱即用
        最简单的配置只需7行
        ```js [1-7]
        //config.js
        module.exports = {
          theme: 'vuepress-theme-qbook',
          themeConfig: {
            avatar: "https://avatars.githubusercontent.com/u/125687556?v=4"
          }
        }
        ```
        <!-- .element: data-id="code-animation" -->
        ---
        ### 📦 开箱即用
        ```js [5]
        //config.js
        module.exports = {
          theme: 'vuepress-theme-qbook',
          themeConfig: {
            avatar: "https://avatars.githubusercontent.com/u/125687556?v=4"
          }
        }
        ```
        <!-- .element: data-id="code-animation" -->
        填入你的头像图片的链接即可
        ---
        ### 📦 开箱即用
        We also provide [a quickstart template](https://github.com/open17/vuepress-theme-qbook-template) which allow you to get started with vuepress-theme-qbook and vuepress in a few minutes
        ---
        ## Intro
        ### 📦 开箱即用
        ### 🎨 个性化配置
        ---
        ### 🎨 个性化配置
        ---
        ### 🎨 个性化配置
        - sns图标
        - 首页轮播图
        - 博客卡片背景图,展示图与蒙版
        - 首页壁纸,头像,昵称与格言
        - 博客分页文字,每页展示数量等
        - 主题颜色样式
        - 导航栏侧边栏多样配置
        - 通知消息自定义
        - ...
        ---
        ## Intro
        ### 🎨 个性化配置
        ### 📚 Markdown增强
        ---
        ### 📚 Markdown增强
        ---
        ### 📚 Markdown增强
        - 幻灯片支持(基于reveal.js)
        - mermaid图表
        - 代码块高亮与复制
        - katex公式
        - footnote脚注
        - 常用容器
        - emoji
        - ...
        ---
        ## Intro
        ### 📚 Markdown增强
        ### 🌟 多样布局,多端适配
        ---
        ### 🌟 多样布局,多端适配
        ---
        ### 🌟 多样布局,多端适配
        - 支持多布局混合使用
        - PC,移动端,平板端响应式
        </textarea>
        </section>
        <section data-auto-animate>
        <section data-markdown data-auto-animate>
        <textarea data-template>
        ### 🌟 多样布局,多端适配
        向下滑动查看更多
        ---
        ### 🌟 多样布局,多端适配
        ### 🌟 布局介绍
        向下滑动查看更多
        ---
        ### 🌟 布局介绍
        #### 博客布局
        - 所有在posts文件下的都会默认为博客布局的文章  
        - 博客首页支持头像,sns,轮播背景等     
        - 支持博客文章分页展示,排序与置顶   
        - 支持tags分类,查看与搜索
        - ...   
        ---
        ### 🌟 布局介绍
        #### 文档布局
        - 所有不在posts文件夹下的会默认为文档布局
        - 文档布局会显示侧边栏
        - 同时取消文章背景图片,描述等
        - 注重简洁与可读性
        ---
        ### 🌟 布局介绍
        #### 纯净布局
        - 需要使用`layout:Clean`声明  
        - 主题自带的组件将只展示topbar   
        - 同时不再渲染css主题
        - 通常用于特殊文章的展示
        - 比如这里的幻灯片Intro就在纯净布局下  
        </textarea>
        </section>
        </section>
        <section data-markdown data-auto-animate>
        <textarea data-template>
        ## 谢谢观看
        <!-- .element:  class="fragment" data-fragment-index="1" -->
        #### [查看示例](https://blog.open17.vip/)
        <!-- .element:  class="fragment" data-fragment-index="2" -->
        #### [查看文档](/docs)
        <!-- .element:  class="fragment" data-fragment-index="3" -->
        #### [再看一遍](#/0)
        <!-- .element:  class="fragment" data-fragment-index="4" -->
        </textarea>
        </section>
  </textarea>
      </section>
:::