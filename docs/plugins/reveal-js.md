---
your_config_name:
    theme: "night"  
clean_css: true
extra_css: "#article-container  pre {
  background-color: #282c34;
  color: #ece9e9;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}/* 默认链接样式 */
a {
  color: skyblue;
  text-decoration: none; /* 去掉下划线 */
  transition: color 0.3s; /* 添加过渡效果 */
}

/* 鼠标悬停时的样式 */
a:hover {
  color: red; /* 改变颜色 */
  text-decoration: underline; /* 添加下划线 */
}

/* 激活状态的样式 */
a:active {
  color: skyblue; /* 改变颜色 */
}"


---

# vuepress-plugin-reveal-js

:::reveal your_config_name
<section>
  <h2>vuepress theme qbook</h2>
</section>
<section>
  <p>a blog theme by open17</p>
</section>
:::

支持在vuepress中使用reveal.js

[demo](https://qbook.open17.vip/post/2024/02/20/reveal-js/)

## 安装

使用npm安装插件：
```
npm i vuepress-plugin-reveal-js
``` 

或者使用yarn安装插件：
```
yarn add vuepress-plugin-reveal-js
```

## 快速使用

在VuePress配置文件中启用插件：
```js
//.vuepress/config.js
module.exports = {
    plugins: [["reveal-js"]]
  }
```
现在已经开始使用啦!  

在markdown文件中使用reveal.js:
```markdown
:::reveal
<section>
  <h2>vuepress theme qbook</h2>
</section>
<section>
  <p>a blog theme by open17</p>
</section>
:::
```

## 更多配置
### 全局配置
在插件中传入的配置为全局配置,对所有markdown中的reveal容器都起作用
```js
//.vuepress/config.js
module.exports = {
    plugins: [
      [
        "pad-markdown",
        {
          theme: "dracula", //主题,见 https://revealjs.com/themes/
          plugins: [Markdown.default, RevealHighlight.default, RevealMath.KaTeX], //插件,目前仅支持官方插件
          //... 同样支持reveal原生配置,详见 https://revealjs.com/config/
        }
      ]
    ],
  }
```
### 局部配置
在markdown文件中使用局部配置,对当前markdown文件中的某个reveal容器起作用
局部配置通过frontmatter传入,传入的配置会覆盖全局配置
```markdown
---
your_config_name:
    theme: "night"  
    width: 1200
    autoSlide: 5000
    loop: true

---
:::reveal your_config_name
<section>
  <h2>vuepress theme qbook</h2>
</section>
<section>
  <p>a blog theme by open17</p>
</section>
:::
```
你可以在一个页面多个reveal容器中使用不同的局部配置,只需传入对应的名字即可
```markdown
---
config_a:
    theme: "night"  

config_b:
    theme: "dark"  
---
:::reveal config_a
<section>
  <h2>vuepress theme qbook</h2>
</section>
<section>
  <p>a blog theme by open17</p>
</section>
:::

:::reveal config_b
<section>
  <h2>vuepress theme qbook</h2>
</section>
<section>
  <p>a blog theme by open17</p>
</section>
:::
```
### 配置优先级
当你不传入配置时,默认配置为:
```js
let config = {
  plugins: [Markdown.default, RevealHighlight.default, RevealMath.KaTeX],
  width: 960,
  height: 700,
  margin: 0.04,
  minScale: 0.2,
  maxScale: 2.0,
  embedded: true,
  theme: "dracula",
};
```
当配置中有重复的项将会按照优先级覆盖:  

局部配置>全局配置>默认配置

```markdown
:::reveal your_config_name
<section>
  <h2>vuepress theme qbook</h2>
</section>
<section>
  <p>a blog theme by open17</p>
</section>
:::
```
