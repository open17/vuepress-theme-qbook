<template>
  <el-dialog
    :visible.sync="isOpenSearch"
    :fullscreen="$root.$isMobile"
    class="search-dialog"
    :before-close="handleClose"
    :show-close="$root.$isMobile"
  >
  <div class="search-input" slot="title">
    <input
        ref="input"
        aria-label="Search"
        :value="query"
        :class="{ focused: focused }"
        placeholder="search something.."
        autocomplete="off"
        spellcheck="false"
        @input="query = $event.target.value"
        @focus="focused = true"
        @blur="focused = false"
        @keyup.enter="go(focusIndex)"
        @keyup.up="onUp"
        @keyup.down="onDown"
      />
  </div>
<div class="my-search-box" :class="{'not-mobile':!$root.$isMobile}">
      <ul v-if="showSuggestions" class="suggestions">
        <li
          v-for="(s, i) in suggestions"
          :key="i"
          class="suggestion"
          :class="{ focused: i === focusIndex }"
          @mousedown="go(i)"
          @mouseenter="focus(i)"
        >
          <a :href="s.path" @click.prevent>
            <span class="page-title">{{ s.title || s.path }}</span>
            <span v-if="s.frontmatter.subtitle" class="header">{{ s.frontmatter.subtitle }}</span>
          </a>
        </li>
      </ul>
    </div>
  </el-dialog>
</template>

<script>
import matchQuery from '@vuepress/plugin-search/match-query'

export default {
  name: 'SearchBox',
  data() {
    return {
      query: '',
      focused: false,
      focusIndex: 0,
      isOpenSearch: false
    }
  },
  mounted() {
    this.$bus.$on('openSeach', () => {
      this.isOpenSearch = true
    })
  },
  computed: {
    showSuggestions() {
      return this.suggestions && this.suggestions.length
    },

    suggestions() {
      const query = this.query.trim().toLowerCase()
      if (!query) return

      const max = this.$site.themeConfig.searchMaxSuggestions || 10
      const localePath = this.$localePath
      const res = []
      for (const p of this.$site.pages) {
        if (res.length >= max) break
        if (this.getPageLocalePath(p) !== localePath) continue
        if (!this.isSearchable(p)) continue
        if (
          matchQuery(query, p) ||
          (p.frontmatter.subtitle && matchQuery(query, p, p.frontmatter.subtitle))
        ) {
          res.push(p)
        } else if (p.headers) {
          for (const h of p.headers) {
            if (res.length >= max) break
            if (h.title && matchQuery(query, p, h.title)) {
              res.push(p)
              break
            }
          }
        }
      }
      return res
    }
  },

  methods: {
    handleClose(done) {
    //   this.isOpenSearch = false
      done()
    },
    getPageLocalePath(page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.startsWith(localePath)) {
          return localePath
        }
      }
      return '/'
    },

    isSearchable(page) {
      const searchPaths = Array.isArray(this.$site.themeConfig.searchPaths)
        ? this.$site.themeConfig.searchPaths
        : [this.$site.themeConfig.searchPaths]
      return searchPaths.some((path) => page.path.match(path))
    },

    onUp() {
      if (this.showSuggestions) {
        this.focusIndex = (this.focusIndex + this.suggestions.length - 1) % this.suggestions.length
      }
    },

    onDown() {
      if (this.showSuggestions) {
        this.focusIndex = (this.focusIndex + 1) % this.suggestions.length
      }
    },

    go(i) {
      if (!this.showSuggestions) return
      this.$router.push(this.suggestions[i].path)
      this.query = ''
      this.focusIndex = 0
      this.isOpenSearch=false
    },

    focus(i) {
      this.focusIndex = i
    }
  }
}
</script>

<style scoped>
.search-dialog >>> .el-dialog__body {
  padding-top: 0;
  padding-bottom: 0;
}
.not-mobile{
    max-height: 50vh;
}
.my-search-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

 input {
  margin: 2% 10%;
  padding: 5px;
  font-size: 28px;
  font-weight: bold;
  width: auto;
  height: auto;
  outline: none;
  border: none;
  background: transparent;
  color: var(--text-color, #333333);
}

 input::placeholder {
  color: var(--text-placeholder-color, #999999);
}

.suggestions {
  height: 70%;
  width: 100%;
  margin-top: 30px;
  overflow-y: auto;
  padding: 0;
}

.suggestion {
  padding: 0.6rem 0;
}

.suggestion a {
  white-space: normal;
  color: var(--suggestion-color, #333333);
  text-decoration: none;
}

.suggestion a .page-title {
  font-size: 20px;
  font-weight: 600;
  display: block;
}

.suggestion a .header {
  font-size: 16px;
  margin-top: 5px;
  display: block;
}

.suggestion.focused {
  background-color: var(--focused-background-color, transparent);
}

.suggestion.focused a {
  color: var(--focused-suggestion-color, #007bff);
}

@media (max-width: 768px) {
  .my-search-box {
    width: 80%;
  }
}

@media (max-width: 480px) {
  .my-search-box input {
    font-size: 24px;
  }

  .suggestions {
    margin-top: 20px;
  }

  .suggestion {
    padding: 0.4rem 0;
  }

  .suggestion a .page-title {
    font-size: 18px;
    line-height: 1.3;
  }

  .suggestion a .header {
    font-size: 14px;
    line-height: 1.3;
  }
}
</style>
