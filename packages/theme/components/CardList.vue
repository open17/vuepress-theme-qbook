<template>
  <div class="card-list" :style=" {'background-image': `url(${wallpaper})`}">
    <el-card
      class="box-card"
      v-for="(card, idx) in cards"
      :key="idx"
      :body-style="{ padding: '0px' }"
    >
      <el-image
        :src="getImg(card.frontmatter.img)||$themeConfig.defaultCardImg"
        fit="cover"
        @click="handleLink(card.path)"
        style="width: 100%"
      >
        <div slot="error" class="image-slot"></div>
      </el-image>
      <div class="card-info">
        <div class="info-title" @click="handleLink(card.path)">
          <el-tooltip content="置顶" placement="top">
            <i class="el-icon-s-flag" v-if="card.frontmatter.pin" style="color: red"></i>
          </el-tooltip>
          {{ card.title }}
        </div>
        <div class="info-desc" v-if="card.frontmatter.desc" @click="handleLink(card.path)">
          {{ card.frontmatter.desc }}
        </div>
        <InfoTagVue :tags="card.frontmatter.tags" />
      </div>
      <div class="book-mark"></div>
    </el-card>
    <div class="pagination-box">
      <Pagination/>
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
  computed: {
    
  },
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
    },
  },
  mounted(){
    if(this.$themeConfig.homeWallpaper){
      this.wallpaper = this.$themeConfig.homeWallpaper
    }
  }
}
</script>

<style scoped>
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
  margin-top: 2vh;
  margin-bottom: 4vh;
  margin-left: 22vw;
  margin-right: 22vw;
  border-radius: 20px;
  text-align: center;
}
.image {
  width: 100%;
  display: block;
}
.card-info {
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 3%;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    '微软雅黑', Arial, sans-serif;
}
.card-info > * {
  margin-top: 1rem;
}
.info-title {
  font-size: xx-large;
}
.pagination-box {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 20vw;
  right: 20vw;
  width: 60vw;
}
.el-image >>> .el-image__inner {
  width: 100%;
  height: 40vh;
}
.el-image >>> .image-slot {
  height: 1vh;
}
</style>