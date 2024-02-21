import ClipboardJS from 'clipboard';
import "./style.css"

export default ({ Vue, options, router, siteData }) => {
  if (typeof window !== 'undefined') {
    var conf = siteData.themeConfig;
    Object.assign(
      conf,
      Object.assign(
        {
          mdUseEventBus: true,
          mdDefaultTheme: "auto",
          mdCodeTheme: ["atom-one-dark", "atom-one-light"]
        },
        conf
      )
    );
    if (conf.mdUseEventBus && !Vue.prototype.$MdEventBus) {
      const EventBus = new Vue()
      Vue.prototype.$MdEventBus = EventBus
    }
    let css_map = {}
    const loadCSS = (path) => {
      if (!css_map[path]) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `https://cdn.jsdelivr.net/npm/highlight.js@11.8.0/styles/${path}.css`;
        css_map[path] = link
        document.head.appendChild(link);
      }
    };
    const removeCSS = (path) => {
      if (css_map[path]) {
        document.head.removeChild(css_map[path]);
        css_map[path] = null;
      }
    };
    const removeAllCSS = () => {
      for (const path in css_map) {
        removeCSS(path)
      }
    };
    function loadAllCSS(data) {
      removeAllCSS();
      data.forEach(element => {
        loadCSS(element)
      });
    }
    // 创建样式链接函数
    function createStylesheetLink(href) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      return link;
    }
    // 默认样式链接
    var defaultLink = createStylesheetLink('https://cdn.jsdelivr.net/npm/github-markdown-css@5.2.0/github-markdown.css');
    // 深色样式链接
    var darkLink = createStylesheetLink('https://cdn.jsdelivr.net/npm/github-markdown-css@5.2.0/github-markdown-dark.css');
    // 浅色样式链接
    var lightLink = createStylesheetLink('https://cdn.jsdelivr.net/npm/github-markdown-css@5.2.0/github-markdown-light.css');
    function setThemeCss(theme) {
      var head = document.head;
      // 移除当前样式链接
      var currentLink = head.querySelector('link[data-theme]');
      if (currentLink) {
        head.removeChild(currentLink);
      }
      // 选择要添加的样式链接
      var link;
      if (theme === 'dark') {
        link = darkLink;
      } else if (theme === 'light') {
        link = lightLink;
      } else {
        link = defaultLink;
      }
      // 添加新的样式链接
      head.appendChild(link);
    }

    // 加载默认样式
    loadAllCSS(conf.mdCodeTheme)
    setThemeCss(conf.mdDefaultTheme)

    if (conf.mdUseEventBus) {
      Vue.prototype.$MdEventBus.$on('loadCodeTheme', (data) => {
        loadAllCSS(data);
      });
      Vue.prototype.$MdEventBus.$on("loadTheme", function (data) {
        setThemeCss(data);
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      let clipboard = new ClipboardJS('.code-copy-button');
      if (conf.mdUseEventBus) {
        clipboard.on('success', (event) => {
          Vue.prototype.$MdEventBus.$emit('clipboard-success'); // 发送消息
        });
      }
    });
  }
};
