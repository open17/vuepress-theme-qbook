<template>
  <CommonVue class="post-page" :scrollHeight="400">
    <PostHeaderVue />
    <el-button
      type="success"
      icon="el-icon-menu"
      circle
      @click="dialogTableVisible = true"
      class="menu-button"
    ></el-button>
    <el-drawer
      title="目录"
      :visible.sync="dialogTableVisible"
      direction="ttb"
      size="40%"
    >
    <header-list-vue :list="$page.headers" />
    </el-drawer>
    <header-list-vue :list="$page.headers" class="menu-text" />
    <PostContentVue class="post-content">
      <Vssue :title="$page.path" class="vssue-container" />
    </PostContentVue>
  </CommonVue>
</template>

<script>
import CommonVue from '../components/Common.vue'
import HeaderListVue from '../components/HeaderList.vue'
import PostHeaderVue from '../components/post/PostHeader.vue'
import PostContentVue from '../components/PostContent.vue'
export default {
  components: {
    CommonVue,
    PostHeaderVue,
    PostContentVue,
    HeaderListVue
  },
  data() {
    return {
      dialogTableVisible: false
    }
  }
}
</script>

<style scoped>
.menu-text {
  position: sticky;
  top: 15vh;
  width: 15vw;
  height: 83vh;
  overflow-y: auto;
}
.mobile .menu-text {
  display: none;
}
.menu-button {
  position: sticky;
  top: 30vh;
  left: 3rem;
  margin-top: 3vh;
  z-index: 50;
}
.mobile .menu-button {
  left: 85vw;
  background-color: #67c23a78;
}
.mobile .menu-button {
  visibility: visible;
}
.menu-button {
  visibility: hidden;
}
* {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, PingFang SC,
    Hiragino Sans GB, STHeiti, Microsoft YaHei, Microsoft JhengHei, Source Han Sans SC,
    Noto Sans CJK SC, Source Han Sans CN, Noto Sans SC, Source Han Sans TC, Noto Sans CJK TC,
    WenQuanYi Micro Hei, SimSun, sans-serif;
}
.post-content {
  position: absolute;
  top: 70vh;
  margin-bottom: 15rem;
  padding-top: 3%;
  width: auto;
  left: 18%;
  right: 18%;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, PingFang SC,
    Hiragino Sans GB, STHeiti, Microsoft YaHei, Microsoft JhengHei, Source Han Sans SC,
    Noto Sans CJK SC, Source Han Sans CN, Noto Sans SC, Source Han Sans TC, Noto Sans CJK TC,
    WenQuanYi Micro Hei, SimSun, sans-serif;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.7rem;
}
.mobile .post-content {
  width: 100%;
  position: relative;
  top: -10vh;
  left: 0;
}
.vssue-container {
  margin-left: 2rem;
  margin-right: 2rem;
  width: auto;
}
.post-page {
  background-color: #eee;
}
</style>

