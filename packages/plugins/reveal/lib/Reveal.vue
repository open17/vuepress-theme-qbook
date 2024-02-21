<template>
  <div class="reveal" ref="reveal_container">
    <div class="slides">
      <slot />
    </div>
  </div>
</template>

<script>
import "reveal.js/dist/reveal.css";
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
                plugins: [Markdown.default, RevealHighlight.default, RevealMath.KaTeX],
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
              import("reveal.js/dist/theme/" + config.theme + ".css").then(
                () => {
                  Reveal.default(this.$refs.reveal_container).initialize(
                    config
                  );
                }
              );
            });
          }
        );
      });
    });
  },
  methods: {},
};
</script>

<style>
.reveal {
  width: 100%;
  height: 100vh;
}
</style>