<template>
  <Content class="md-content markdown-body" id="article-container" />
</template>

<script>
export default {
  props: {
    scrollOffset: {
      type: Number,
      default: 453
    }
  },
  mounted() {
    // const offset = 450 // 偏移量大小
    const headings = this.$el.querySelectorAll(
      '.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6'
    )
    headings.forEach((heading) => {
      const anchor = heading.querySelector('a')
      if (anchor) {
        anchor.addEventListener('click', (event) => {
          event.preventDefault() // 阻止默认的链接跳转行为
          const targetId = anchor.getAttribute('href') // 获取目标锚点的 ID
          const targetElement = document.querySelector(targetId) // 获取目标锚点元素
          this.$router.replace({ hash: targetId });
          console.log(targetElement.offsetTop)
          if (targetElement) {
            const parentContainer = targetElement.closest('.targetContainer')
            // console.log(parentContainer)
            if (parentContainer) {
                parentContainer.scrollTo({
                  top: targetElement.offsetTop + this.scrollOffset,
                  behavior: 'smooth' // 使用平滑滚动效果
              })
            }
          }
        })
      }
    })
  }
}
</script>

<style scoped>
.md-content {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, PingFang SC,
    Hiragino Sans GB, STHeiti, Microsoft YaHei, Microsoft JhengHei, Source Han Sans SC,
    Noto Sans CJK SC, Source Han Sans CN, Noto Sans SC, Source Han Sans TC, Noto Sans CJK TC,
    WenQuanYi Micro Hei, SimSun, sans-serif;
  padding-bottom: 8vh;
}
/* markdown样式更改 取消#符号 */
.markdown-body >>> .header-anchor::before {
  font-family: element-icons !important;
  font-style: normal;
  color: #f47466;
  content: '\e7ba';
  line-height: 1;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.markdown-body >>> .header-anchor:hover {
  color: #f47466;
}

#article-container >>> pre {
  background-color: #282c34;
  color: #ece9e9;
}

#article-container.md-content >>> h1 {
  color: #344c67;
}
#article-container.md-content >>> h2,
#article-container.md-content >>> h3,
#article-container.md-content >>> h4,
#article-container.md-content >>> h5,
#article-container.md-content >>> h6 {
  color: #344c67;
  border-bottom: none;
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
.md-content >>> .custom-tip-block > p,.md-content >>> .custom-tip-block > .mycodeblock {
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
