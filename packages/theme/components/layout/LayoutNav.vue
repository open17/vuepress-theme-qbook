<template>
  <div class="sidebar">
    <nav>
      <ul>
        <recursive-menu v-for="(item, index) in $themeConfig.sidebar" :item="item" :key="index" />
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'Sidebar',
  components: {
    RecursiveMenu: {
      name: 'RecursiveMenu',
      props: {
        item: Object,
        level: Number
      },
      methods: {
        getFontStyle(level) {
          const fontSize = `${1.2 - 0.1 * level}rem`
          const fontWeight = 500
          if (level === 0) {
            let color = '#532fb6'
            return {
              fontSize: fontSize,
              fontWeight: fontWeight,
              color: color
            }
          }
          return {
            fontSize: fontSize,
            fontWeight: fontWeight
          }
        }
      },

      render(h) {
        return h('li', { class: 'sidebar-item' }, [
          h(
            'span',
            {
              class: 'sidebar-title',
              style: this.getFontStyle(this.level || 0)
            },
            decodeURIComponent(this.item.text)
          ),
          this.item.links
            ? h(
                'ul',
                this.item.links.map((link, idx) => {
                  if (link.links) {
                    return h(this.$options.components.RecursiveMenu, {
                      props: { item: link, level: (this.level || 0) + 1 },
                      key: idx
                    })
                  } else {
                    return h('li', { key: idx, class: 'submenu-item' }, [
                      h(
                        'router-link',
                        {
                          attrs: { to: link.link },
                          class: 'submenu-link',
                          style: this.getFontStyle((this.level || 0) + 1)
                        },
                        link.text
                      )
                    ])
                  }
                })
              )
            : null
        ])
      }
    }
  }
}
</script>





<style scoped>
* {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    Arial, sans-serif;
}
.sidebar >>> ul,
.sidebar >>> li {
  list-style-type: none;
  padding-left: 0.5rem;
}

.sidebar {
  padding-top: 10vh;
  height: calc(90vh);
  width: auto;
  overflow-x: hidden;
  overflow-y: auto;
  border-right: 1px solid #e6e6e6;
}

::-webkit-scrollbar {
  display: none;
}

.sidebar >>> .sidebar-title,
.sidebar >>> .submenu-link {
  color: #343434;
  text-decoration: none;
  display: block;
  padding: 0.2rem 0rem;
  margin-left: 0.5rem;
}

.sidebar >>> .submenu-link:hover {
  color: #532fb6;
}

/* Adjust styles for different levels */
</style>


