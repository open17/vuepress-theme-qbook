// Theme API.
module.exports = (options, ctx) => {
  const { siteConfig } = ctx;
  if (!siteConfig.themeConfig) siteConfig.themeConfig = {};
  if (!siteConfig.themeConfig.searchMaxSuggestions) siteConfig.themeConfig.searchMaxSuggestions = 50;
  if (!siteConfig.themeConfig.title) siteConfig.themeConfig.title = siteConfig.title;
  siteConfig.themeConfig.mdUseEventBus = false;
  if (!siteConfig.markdown) siteConfig.markdown = {};
  siteConfig.markdown.anchor = { permalink: true, permalinkBefore: true, permalinkSymbol: '' };
  // default theme config
  Object.assign(
    options,
    Object.assign(
      {
        mdUseAllPlugins: true,
        mdUseMermaid: true,
        comment: false,
        pageSize: 10,
        prevText: "Prev",
        nextText: "Next",
        searchMaxSuggestions: 10,
        hostname: "https://pake.web.id",
        revealConfig:{}
      },
      options
    )
  );
  let blogConfig = {
    permalink: "/:regular",
    frontmatters: [
      {
        id: "tags",
        keys: ["tags"],
        path: "/tags/",
      }
    ],
    directories: [
      {
        id: "posts",
        dirname: "posts",
        path: "/",
        layout: "Home",
        itemPermalink: "/post/:year/:month/:day/:slug",
        itemLayout: "Post",
        pagination: {
          layout: "Home",
          prevText: options.prevText,
          nextText: options.nextText,
          lengthPerPage: options.pageSize,
          sorter: (a, b) => {
            const isPinA = a.frontmatter.pin === true;
            const isPinB = b.frontmatter.pin === true;

            if (isPinA && !isPinB) {
              return -1; // a排在b之前
            } else if (!isPinA && isPinB) {
              return 1; // b排在a之前
            } else {
              return b.path.localeCompare(a.path); // 根据路径排序
            }
          }

        },
        sitemap: {

        },
        feed: {

        },
      }
    ]
  }

  return {
    name: "vuepress-theme-qbook",
    chainWebpack: (config) => {
      config.resolve.alias.set('core-js/library/fn', 'core-js/features');
    },
    plugins: [
      ["vuepress-plugin-reveal-js",options.revealConfig],
      ['sitemap', {
        hostname: options.hostname,
      }],
      [
        "feed1",
        {
          hostname: options.hostname,
          count:5000
        },
      ],
      ['@vuepress/nprogress'],
      ['@vuepress/search', {
        searchMaxSuggestions: options.searchMaxSuggestions
      }],
      [
        "@vssue/vuepress-plugin-vssue",
        options.comment
      ],
      [
        "@vuepress/plugin-blog",
        blogConfig
      ],
      [
        "pad-markdown",
        {
          useAllPlugins: options.mdUseAllPlugins
        }
      ],
      [
        '@renovamen/vuepress-plugin-mermaid', options.mdUseMermaid
      ],
      [
        'vuepress-plugin-container',
        {
          type: 'warning',
          before: info => `<div class="custom-tip-block warning">${info}`,
          after: '</div>',
        },
      ],
      [
        'vuepress-plugin-container',
        {
          type: 'tip',
          before: info => `<div class="custom-tip-block tip">${info}`,
          after: '</div>',
        },
      ],
      [
        'vuepress-plugin-container',
        {
          type: 'collapse',
          before: info => `<el-collapse> <el-collapse-item title="${info}" name="1">`,
          after: '</el-collapse-item></el-collapse>',
        },
      ],
      [
        'vuepress-plugin-container',
        {
          type: 'error',
          before: info => `<div class="custom-tip-block error">${info}`,
          after: '</div>',
        },
      ],
      [
        'vuepress-plugin-container',
        {
          type: 'info',
          before: info => `<div class="custom-tip-block info">${info}`,
          after: '</div>',
        },
      ],
      [
        'vuepress-plugin-container',
        {
          type: 'success',
          before: info => `<div class="custom-tip-block success">${info}`,
          after: '</div>',
        },
      ],
      [
        'vuepress-plugin-container',
        {
          type: 'tab',
          before: info => `<el-tab-pane label="${info}">`,
          after: '</el-tab-pane>',
        },
      ],
    ],

    chainMarkdown(config) {
      const { PLUGINS } = require("@vuepress/markdown");
      const originalLinkPlugin = require("@vuepress/markdown/lib/link.js");

      config.plugins.delete(PLUGINS.CONVERT_ROUTER_LINK);

      const linkPlugin = function (md) {
        const result = originalLinkPlugin.apply(this, arguments);
        const close = md.renderer.rules.link_close;
        md.renderer.rules.link_close = function () {
          return close.apply(this, arguments).replace("<OutboundLink/>", "");
        };
        return result;
      };

      config.plugin(PLUGINS.CONVERT_ROUTER_LINK).use(linkPlugin, [
        {
          // The config.markdown.externalLinks options https://vuepress.vuejs.org/config/#markdown-externallinks
          target: "_blank",
          rel: "noopener noreferrer"
        }
      ]);
    }
  };
};
