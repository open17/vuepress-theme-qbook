<template>
  <div class="reveal" ref="reveal_container" v-if="isLoaded">
    <div class="slides">
      <slot />
    </div>
  </div>
  <div class="loader-container" v-else>
    <div class="loader"></div>
  </div>
</template>

<script>
import "reveal.js/dist/reveal.css";
import "reveal.js/plugin/highlight/monokai.css";
export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  props: ["config_name", "global_config"],
  mounted() {
    this.initReveal();
  },
  methods: {
    initReveal() {
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
                let theme_path =
                  "https://cdn.jsdelivr.net/npm/reveal.js@4.6.1/dist/theme/" +
                  config.theme +
                  ".css";
                let link = this.loadCSS(theme_path);
                link.addEventListener("load", () => {
                  setTimeout(() => {
                    this.isLoaded = true; // 延时一段时间后设置isLoaded为true
                    this.$nextTick(() => {
                      Reveal.default(this.$refs.reveal_container).initialize(
                        config
                      );
                    });
                  }, 2000); // 延时时间为2秒（2000毫秒）
                });
              });
            }
          );
        });
      });
    },
    loadCSS(href) {
      var link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
      return link;
    },
  },
};
</script>

<style scoped>
.reveal {
  width: 100%;
  height: 100vh;
}

.loader-container{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1b1b;
}

.loader {
  position: absolute;
  width: 120px;
  height: 90px;
  margin: 0 auto;
}

.loader:before {
  content: "";
  position: absolute;
  bottom: 30px;
  left: 50px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #2a9d8f;
  animation: loading-bounce 0.5s ease-in-out infinite alternate;
}

.loader:after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  height: 7px;
  width: 45px;
  border-radius: 4px;
  box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;
  animation: loading-step 1s ease-in-out infinite;
}

@keyframes loading-bounce {
  0% {
    transform: scale(1, 0.7);
  }

  40% {
    transform: scale(0.8, 1.2);
  }

  60% {
    transform: scale(1, 1);
  }

  100% {
    bottom: 140px;
  }
}

@keyframes loading-step {
  0% {
    box-shadow: 0 10px 0 rgba(0, 0, 0, 0), 0 10px 0 #f2f2f2,
      -35px 50px 0 #f2f2f2, -70px 90px 0 #f2f2f2;
  }

  100% {
    box-shadow: 0 10px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 90px 0 #f2f2f2,
      -70px 90px 0 rgba(0, 0, 0, 0);
  }
}
</style>