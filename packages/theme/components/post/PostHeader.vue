<template>
  <div class="post-header" :style="pageHeaderStyle">
    <div class="img-mask" :style="{ backgroundColor: maskColor }"></div>
    <div class="header-content">
      <InfoBoxVue :name="$page.title" :desc="$page.frontmatter.desc">
        <InfoTagVue :tags="$page.frontmatter.tags" class="tag" />
      </InfoBoxVue>
    </div>
  </div>
</template>

<script>
import InfoBoxVue from '../InfoBox.vue'
import InfoTagVue from '../InfoTag.vue'
export default {
  components: {
    InfoBoxVue,
    InfoTagVue
  },
  computed: {
    pageHeaderStyle() {
      let style = {}
      style = {
        backgroundImage: `url(${this.getImg(
          this.$page.frontmatter.img || this.$themeConfig.defaultPostImg
        )})`
      }
      return style
    },
    maskColor() {
      if (this.$page.frontmatter.mask) return this.$page.frontmatter.mask
      return '#4e4e4e63'
    }
  },
  methods: {
    getImg(url) {
      if (!url) return
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return url
      }
      return this.$withBase('/' + url)
    }
  }
}
</script>

<style scoped>
.post-header {
  height: 75vh;
  width: 100%;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    '微软雅黑', Arial, sans-serif;
}
.img-mask {
  height: 100%;
  width: 100%;
  z-index: 0;
}
.header-content {
  position: relative;
  bottom: 100%;
  height: 75vh;
  text-align: center;
  color: #e9e1e1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-content >>> .info-box {
  padding-top: 5vh;
  background-color: transparent;
}
.tag {
  margin-top: 3vh;
  margin-bottom: 2vh;
}
.tag >>> .el-tag{
  margin-top: 1vh;
} 
</style>