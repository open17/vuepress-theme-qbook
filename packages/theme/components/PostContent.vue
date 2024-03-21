<template>
  <div :class="{ con: !$page.frontmatter.clean_css }">
    <Content
      :class="{ 'md-content markdown-body': !$page.frontmatter.clean_css }"
      id="article-container"
    />
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    scrollOffset: {
      type: Number,
      default: 453
    }
  },
  methods: {
    loadDynamicCSS() {
      const cssText = this.$page.frontmatter.extra_css
      if (!cssText) return
      const style = document.createElement('style')
      style.type = 'text/css'
      style.id = 'qbook-dynamic-style' // id 属性用于移除
      if (style.styleSheet) {
        style.styleSheet.cssText = cssText
      } else {
        style.appendChild(document.createTextNode(cssText))
      }
      document.head.appendChild(style)
    },
    removeDynamicCSS() {
      const dynamicStyle = document.getElementById('qbook-dynamic-style')
      if (dynamicStyle) {
        document.head.removeChild(dynamicStyle)
      }
    },
    updateDynamicCSS() {
      this.$watch('$route', (to, from) => {
        // 在路由变化时执行操作
        if (to.path !== from.path) {
          this.removeDynamicCSS()
          this.loadDynamicCSS()
        }
      })
    },
    listenScroll() {
      const headings = this.$el.querySelectorAll(
        '.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6,.markdown-body .table-of-contents ul li'
      )
      headings.forEach((heading) => {
        const anchor = heading.querySelector('a')
        if (anchor) {
          anchor.addEventListener('click', (event) => {
            event.preventDefault() // 阻止默认的链接跳转行为
            const targetId = anchor.getAttribute('href') // 获取目标锚点的 ID
            const targetElement = document.querySelector(targetId) // 获取目标锚点元素
            this.$router.replace({ hash: targetId })
            if (targetElement) {
              const parentContainer = targetElement.closest('.targetContainer')
              if (parentContainer) {
                parentContainer.scrollTo({
                  top: targetElement.offsetTop + this.scrollOffset,
                  behavior: 'smooth'
                })
              }
            }
          })
        }
      })
    }
  },
  mounted() {
    this.listenScroll()
    this.loadDynamicCSS()
    this.updateDynamicCSS()
  }
}
</script>

<style scoped>
.con {
  width: 100%;
  background-color: #fff;
}
.md-content {
  padding-bottom: 15rem;
  padding-right: 3rem;
  padding-left: 3rem;
  width: auto;
}
.markdown-body >>> .katex-display {
  width: full;
  display: flex;
  justify-content: center;
  align-items: center;
}
.markdown-body >>> mtext {
  min-width: 0.5rem;
}
.markdown-body >>> .header-anchor::before {
  font-style: normal;
  color: #33a5e2;
  content: '#';
  line-height: 1;
  visibility: hidden;
  margin-left: -1.5rem;
}

.markdown-body >>> .header-anchor {
  text-decoration: none;
}

#article-container.md-content >>> pre {
  background-color: #282c34;
  color: #ece9e9;
}

#article-container.md-content >>> h1,
#article-container.md-content >>> h2,
#article-container.md-content >>> h3,
#article-container.md-content >>> h4,
#article-container.md-content >>> h5,
#article-container.md-content >>> h6 {
  color: #344c67;
  border-bottom: none;
  cursor: pointer;
}

#article-container.md-content >>> h2:hover .header-anchor::before,
#article-container.md-content >>> h3:hover .header-anchor::before,
#article-container.md-content >>> h4:hover .header-anchor::before,
#article-container.md-content >>> h5:hover .header-anchor::before,
#article-container.md-content >>> h6:hover .header-anchor::before {
  visibility: visible;
}

#article-container.md-content::before {
  content: '';
}
.md-content >>> .footnotes-sep {
  background-color: transparent;
}
.md-content >>> .custom-tip-block {
  padding: 8px 16px;
  border-radius: 4px;
  margin: 20px 0;
  font-weight: 600;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    '微软雅黑', Arial, sans-serif;
}
.md-content >>> .custom-tip-block > p,
.md-content >>> .custom-tip-block > .mycodeblock {
  margin-top: 0.2rem;
  font-weight: 400;
}
.md-content >>> .error {
  border-left: 5px solid #fe6c6f;
  background-color: #fff6f7;
}
.md-content >>> .tip {
  border-left: 5px solid #409eff;
  background-color: #d9ecff;
}
.md-content >>> .warning {
  border-left: 5px solid #e6a23c;
  background-color: #faecd8;
}
.md-content >>> .info {
  border-left: 5px solid #909399;
  background-color: #e9e9eb;
}
.md-content >>> .success {
  border-left: 5px solid #67c23a;
  background-color: #e1f3d8;
}
</style>
