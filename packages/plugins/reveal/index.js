const path = require("path");

module.exports = (options, ctx) => {
  return {
    name: "vuepress-plugin-reveal-js",
    enhanceAppFiles: path.resolve(__dirname, "./enhanceApp.js"),
    plugins: [
      [
        'vuepress-plugin-container',
        {
          type: 'reveal',
          before: info => `<Reveal config_name="${info}" global_config="${options}">`,
          after: '</Reveal>',
        },
      ],
    ],
  };
};
