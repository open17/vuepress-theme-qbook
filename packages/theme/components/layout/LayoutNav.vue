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
        item: Object
      },
      render(h) {
        const menuItemStyle = {
          fontSize: '1rem',
          fontWeight: 400
        }
        return h('li', { class: 'sidebar-item' }, [
          h(
            'span',
            {
              class: 'sidebar-title',
              style: menuItemStyle
            },
            decodeURIComponent(this.item.text)
          ),
          this.item.links
            ? h(
                'ul',
                this.item.links.map((link, idx) => {
                  if (link.links) {
                    return h(this.$options.components.RecursiveMenu, {
                      props: { item: link },
                      key: idx
                    })
                  } else {
                    return h('li', { key: idx, class: 'submenu-item' }, [
                      h(
                        'router-link',
                        {
                          attrs: { to: link.link },
                          class: 'submenu-link',
                          style: menuItemStyle
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
.sidebar >>> ul,
.sidebar >>> li {
  list-style-type: none;
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

.sidebar >>> .sidebar-title {
  font-weight: bold;
  color: #343434;
  display: block;
  padding: 0.5rem 0rem;
  transition: color 0.3s ease;
}

.sidebar >>> .submenu-link {
  color: #343434;
  text-decoration: none;
  display: block;
  padding: 0.2rem 0rem;
  transition: color 0.3s ease;
}

.sidebar >>> .submenu-link:hover {
  color: #409eff;
}

/* Adjust styles for different levels */
</style>


