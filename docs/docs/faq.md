# 常见问题
::: tip
如果有其他下面未提及或未解决的问题,欢迎到 [issues](https://github.com/open17/vuepress-theme-qbook/issues) 中反馈,感谢你的支持和反馈
:::


## 图片引入失败?
如果是配置内容中引入本地图片(如封面等),将图片放至`.vuepress/public`文件夹下即可,详见[官方文档-公共文件](https://vuepress.vuejs.org/zh/guide/assets.html#%E5%85%AC%E5%85%B1%E6%96%87%E4%BB%B6)

当然也可以使用图床简化工作

## dev模式可以正常运行,但是部署的时候中build失败/远程服务器部署(如vercel)报错
首先检测是否是node版本问题,注意到node版本>16时与vuepress1并不兼容

这个时候有两种方法:

### 降低到node版本至16
直接降低或使用node版本工具即可
### 使用NODE_OPTIONS=--openssl-legacy-provider
不同的系统环境(mac,windows,linux)下环境变量变量有不同的设置方法,这里推荐使用`cross-env`实现统一
然后build改为:
```json
"build": "cross-env NODE_OPTIONS=--openssl-legacy-provider vuepress build docs"
```
可参考[issue:Node 19 Error](https://github.com/vuejs/vuepress/issues/3136#issuecomment-1845352164)

## 在edge上首页轮播图切换有点卡顿?
似乎在部分电脑上edge的某些模式下对于css属性`backdrop-filter:blur(3px)`会存在性能问题,这个css提供首页的名片一个毛玻璃的效果
该现象与edge和电脑配置与环境有关并且未在其它电脑上复现,如果出现该情况你可以通过css去除这个效果

## 搜索无反应,控制台报错?
搜索基于的是vuepress的官方搜索插件,该插件搜索时会引入tags的搜索,但是如果tags中出现某些特殊的英文关键词则产生错误,推荐把tags用引号包起来作为字符串即可


[^1]: 至少在我这里是这样的,vuepres默认主题也无法build