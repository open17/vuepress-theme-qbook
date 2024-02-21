<template>
  <div class="reveal" ref="reveal_container">
    <div class="slides">
      <slot />
    </div>
  </div>
</template>

<script>
import "reveal.js/plugin/highlight/monokai.css";
export default {
  props: ["config_name", "global_config"],
  mounted() {
    import("reveal.js").then((Reveal) => {
      import("reveal.js/plugin/markdown/markdown.esm.js").then((Markdown) => {
        import("reveal.js/plugin/highlight/highlight.js").then(
          (RevealHighlight) => {
            import("reveal.js/plugin/math/math.js").then((RevealMath) => {
              let config = {
                plugins: [
                  Markdown.default,
                  RevealHighlight.default,
                  RevealMath.KaTeX,
                ],
                width: 960,
                height: 700,
                margin: 0.04,
                minScale: 0.2,
                maxScale: 2.0,
                embedded: true,
                theme: "dracula",
              };
              Object.assign(
                config,
                this.global_config,
                this.$page.frontmatter[this.config_name]
              );
              let theme_path="https://cdn.jsdelivr.net/npm/reveal.js@4.6.1/dist/theme/" + config.theme + ".css";
              this.loadCSS(theme_path);
              Reveal.default(this.$refs.reveal_container).initialize(config);
            });
          }
        );
      });
    });
  },
  methods: {
    loadCSS(href) {
      var link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    },
  },
};
</script>

<style>
@import url("../node_modules/reveal.js/dist/reveal.css");
.reveal {
  width: 100%;
  height: 100vh;
}
</style>