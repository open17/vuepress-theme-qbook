<template>
  <div class="card-list">
    <el-card
      class="box-card"
      v-for="(card, idx) in paginatedCards"
      :key="idx"
      :body-style="{ padding: '0px' }"
      @click="handleLink(card.path)"
    >
      <el-image
        :src="getImg(card.frontmatter.img)"
        style="width: 100%; height: 40vh"
        fit="cover"
        @click="handleLink(card.path)"
      >
        <div slot="error" class="image-slot"></div>
      </el-image>
      <div class="card-info">
        <div class="info-title">
          <el-tooltip content="置顶" placement="top">
            <i class="el-icon-s-flag" v-if="card.frontmatter.pin" style="color: red"></i>
          </el-tooltip>
          {{ card.title }}
        </div>
        <div class="info-desc" v-if="card.frontmatter.desc">{{ card.frontmatter.desc }}</div>
        <InfoTagVue :tags="card.frontmatter.tags" />
      </div>
      <div class="book-mark"></div>
    </el-card>
    <div class="pagination-box">
      <el-pagination
        class="pagination"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="cards.length"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import InfoTagVue from './InfoTag.vue'

export default {
  props: ['cards'],
  components: {
    InfoTagVue
  },
  data() {
    return {
      pageSize: 10,
      currentPage: 1
    }
  },
  computed: {
    sortedCards() {
      const pinnedCards = this.cards.filter(
        (card) => card.frontmatter && card.frontmatter.pin === true
      )
      pinnedCards.sort((a, b) => b.path.localeCompare(a.path))
      const remainingCards = this.cards.filter((card) => !pinnedCards.includes(card))
      remainingCards.sort((a, b) => b.path.localeCompare(a.path))
      return pinnedCards.concat(remainingCards)
    },
    paginatedCards() {
      const startIndex = (this.currentPage - 1) * this.pageSize
      const endIndex = startIndex + this.pageSize
      return this.sortedCards.slice(startIndex, endIndex)
    }
  },
  methods: {
    handleLink(url) {
      const currentRoute = this.$router.currentRoute
      if (currentRoute.path !== url) {
        this.$router.push(url)
      }
    },
    getImg(url) {
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return url
      }
      return this.$withBase('/' + url)
    },
    handleCurrentChange(val) {
      this.currentPage = val
    }
  },
  mounted(){
    if(this.$themeConfig.pageSize)this.pageSize=this.$themeConfig.pageSize
  }
}
</script>

<style scoped>
.card-list {
  position: relative;
  top: -5vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  cursor: pointer;
  background-image: url('../assets/wallpaper.png');
  padding-top: 10vh;
  padding-bottom: 20vh;
  margin-bottom: -5vh;
}
.box-card {
  margin-top: 2vh;
  margin-bottom: 4vh;
  margin-left: 20vw;
  margin-right: 20vw;
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
  margin-bottom: 1%;
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
</style>