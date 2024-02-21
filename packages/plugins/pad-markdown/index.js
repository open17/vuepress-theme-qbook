const path = require("path");
const copy_plugin = require("./libs/markdown-it-copy-plugin");

module.exports = (options, ctx) => {
  return {
    name: "vuepress-plugin-pad-markdown",
    enhanceAppFiles: path.resolve(__dirname, './enhanceApp.js'),
    extendMarkdown: md => {
      if (options.break || options.useAllPlugins) {
        md.set({ breaks: true });
      }
      if (options.katex || options.useAllPlugins) md.use(require('markdown-it-katex'));
      if (options.footnote || options.useAllPlugins) md.use(require('markdown-it-footnote'));
      if (options.mark || options.useAllPlugins) md.use(require("markdown-it-mark"))
      if (options.copy || options.useAllPlugins) md.use(copy_plugin);
    }
  };
};