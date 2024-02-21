<template>
  <div class="reveal" ref="reveal_container">
    <div class="slides">
      <slot />
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.js";
import RevealMath from "reveal.js/plugin/math/math.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/plugin/highlight/monokai.css";
export default {
  props: ["config_name", "global_config"],
  mounted() {
    let config = {
      plugins: [Markdown, RevealHighlight, RevealMath.KaTeX],
      width: 960,
      height: 700,
      margin: 0.04,
      minScale: 0.2,
      maxScale: 2.0,
      embedded: true,
      theme: "dracula",
    };
    Object.assign(config,this.global_config,this.$page.frontmatter[this.config_name]);
    console.log(config,this.$page.frontmatter[this.config_name])
    import("reveal.js/dist/theme/"+config.theme+".css").then(() => {
      this.initReveal(config);
    });
  },
  methods: {
    initReveal(config) {
      Reveal(this.$refs.reveal_container).initialize(config);
    }
  }
};
</script>

<style>
.reveal {
  width: 100%;
  height: 100vh;
}
</style>