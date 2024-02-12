# 常见问题
::: tip
如果有其他下面未提及或未解决的问题,欢迎到 [issues](https://github.com/open17/vuepress-theme-qbook/issues) 中反馈,感谢你的支持和反馈
:::
## 一. vuepress1.9.x启动报错?
似乎目前本主题依赖的官方博客插件在1.9.x版本中存在冲突,导致启动报错。
推荐使用1.8.2版本

## 二. 图片引入失败?
如果是配置内容中引入本地图片(如封面等),将图片放至`.vuepress/public`文件夹下即可,详见[官方文档-公共文件](https://vuepress.vuejs.org/zh/guide/assets.html#%E5%85%AC%E5%85%B1%E6%96%87%E4%BB%B6)

当然也可以使用图床简化工作

## 三. dev模式可以正常运行,但是部署的时候中build失败/远程服务器部署(如vercel)报错
首先检测是否是node版本问题,注意到node版本为18时vuepress本身build时会发生错误[^1],因此推荐将node版本降级到16

## 四. 在edge上首页轮播图切换有点卡顿?
似乎在部分电脑上edge的某些模式下对于css属性`backdrop-filter:blur(3px)`会存在性能问题,这个css提供首页的名片一个毛玻璃的效果
该现象与edge和电脑配置与环境有关并且未在其它电脑上复现,如果出现该情况你可以通过css去除这个效果

## 五. 搜索报错?
搜索基于的是vuepress的官方搜索插件,该插件搜索时会引入tags的搜索,但是如果tags中出现某些特殊的英文关键词则产生错误,推荐把tags用引号包起来作为字符串即可



[^1]: 至少在我这里是这样的,vuepres默认主题也无法build