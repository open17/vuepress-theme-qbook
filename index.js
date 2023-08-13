module.exports = (options, ctx) => {
  const { siteConfig } = ctx;
  siteConfig.postcss = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer')
    ]
  };
  siteConfig.themeConfig.searchMaxSuggestions=10;
  return {
    plugins: [
      ['fulltext-search'],
      ['pad-markdown'],
      ['markdown-todolist']
    ],
  }
}
