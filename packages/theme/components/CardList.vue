<template>
  <div class="card-list" :style="{ 'background-image': `url(${wallpaper})` }">
    <div
      class="box-card"
      v-for="(card, idx) in cards"
      :key="idx"
      :class="{'odd-card':idx&1}"
    >
      <el-image
        :src="getImg(card.frontmatter.img) || $themeConfig.defaultCardImg"
        fit="cover"
        @click="handleLink(card.path)"
      >
        <div slot="error" class="image-slot"></div>
      </el-image>
      <div class="card-info" @click="handleLink(card.path)">
        <div class="info-title" >
          <el-tooltip content="置顶" placement="top">
            <i class="el-icon-s-flag" v-if="card.frontmatter.pin" style="color: red"></i>
          </el-tooltip>
          {{ card.title }}
        </div>
        <div class="info-desc" v-if="card.frontmatter.desc">
          {{ card.frontmatter.desc }}
        </div>
        <InfoTagVue :tags="card.frontmatter.tags" size="mini" class="tags"/>
      </div>
    </div>
    <div class="pagination-box">
      <Pagination />
    </div>
  </div>
</template>

<script>
import InfoTagVue from './InfoTag.vue'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
import defaultWallpaper from '../assets/wallpaper.png'
export default {
  props: ['cards'],
  components: {
    InfoTagVue,
    Pagination
  },
  data() {
    return {
      wallpaper: defaultWallpaper
    }
  },
  computed: {},
  methods: {
    handleLink(url) {
      const currentRoute = this.$router.currentRoute
      if (currentRoute.path !== url) {
        this.$router.push(url)
      }
    },
    getImg(url) {
      if (!url) return
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return url
      }
      return this.$withBase('/' + url)
    }
  },
  mounted() {
    if (this.$themeConfig.homeWallpaper) {
      this.wallpaper = this.$themeConfig.homeWallpaper
    }
  }
}
</script>

<style scoped>
.odd-card{
  flex-direction: row-reverse;
  justify-content: end;
}

.odd-card .el-image >>> .el-image__inner{
  border-radius: 0 20px 20px 0;
}

.mobile .odd-card .el-image >>> .el-image__inner,.mobile .el-image >>> .el-image__inner{
  border-radius: 20px 20px 0px 0px;
}

.card-list {
  position: relative;
  top: 0vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  cursor: pointer;
  padding-top: 10vh;
  padding-bottom: 20vh;
  margin-bottom: -5vh;
}
.box-card {
  width: 55rem;
  margin: auto;
  margin-top: 2vh;
  margin-bottom: 4vh;
  border-radius: 20px;
  display: flex;
  justify-content:space-between;
  background-color: #ffffffb9;
  backdrop-filter: blur(10px) saturate(180%);
  box-shadow: 0 3px 8px 6px rgba(7,17,27,0.05);
}

.mobile .box-card {
  flex-direction: column;
  width: 98%;
}

.box-card >>> .el-card__body {
  width: 100%;
}

.card-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 30rem;
  box-sizing: border-box;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  /* padding-bottom: 2rem; */
  /* padding-top: 2rem; */
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    '微软雅黑', Arial, sans-serif;
}

.mobile .card-info {
  width: 100%;
  padding-bottom: 1rem;
}


.card-info > * {
  margin-top: 1rem;
}
.info-title {
  font-size: x-large;
}
.info-desc{
  font-size: large;
  color: rgba(7,17,27,1);
}

.mobile .info-title {
  font-size: larger;
}

.mobile .info-desc {
  font-size:small;
}


.pagination-box {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 20vw;
  right: 20vw;
  width: 60vw;
}

.mobile .pagination-box {
  left: 5vw;
  right: 5vw;
  width: 90vw;
}


.el-image >>> .el-image__inner {
  border-radius: 20px 0 0px 20px;
  width: 22rem;
  height: 15rem;
}

.mobile .el-image >>> .el-image__inner {
  width: 100%;
}
.el-image >>> .image-slot {
  height: 1vh;
}

.tags  >>> .el-tag{
  margin-top: 1rem;
  font-weight: 200;
}

.mobile .tags  >>> .el-tag{
  font-size: smaller;
}
</style>