<template>
  <CommonVue>
    <el-row class="layout-container" :gutter="20">
      <el-col :span="6">
        <LayoutNavVue lass="layout-nav" />
      </el-col>
      <el-col :span="18">
        <div class="content-container targetContainer">
          <PostContentVue class="layout-content" :scrollOffset="-80" />
        </div>
      </el-col>
    </el-row>
    <el-button
      type="success"
      icon="el-icon-menu"
      circle
      @click="dialogTableVisible = true"
      class="menu-button"
    ></el-button>
    <div class="content-container targetContainer mobile-container">
      <PostContentVue class="layout-content" :scrollOffset="-80" />
    </div>
    <el-dialog title="目录" :visible.sync="dialogTableVisible">
      <LayoutNavVue lass="layout-nav" />
    </el-dialog>
  </CommonVue>
</template>

<script>
import CommonVue from '../components/Common.vue'
import LayoutNavVue from '../components/layout/LayoutNav.vue'
import PostContentVue from '../components/PostContent.vue'

export default {
  components: {
    CommonVue,
    PostContentVue,
    LayoutNavVue
  },
  data() {
    return {
      dialogTableVisible: false
    }
  }
}
</script>

<style scoped>
.mobile >>> .el-dialog{
  width: 100vw;
}
*{
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, PingFang SC,
    Hiragino Sans GB, STHeiti, Microsoft YaHei, Microsoft JhengHei, Source Han Sans SC,
    Noto Sans CJK SC, Source Han Sans CN, Noto Sans SC, Source Han Sans TC, Noto Sans CJK TC,
    WenQuanYi Micro Hei, SimSun, sans-serif;
}
.menu-button {
  display: none;
}
.mobile .menu-button {
  display: block;
  position: fixed;
  bottom: 2rem;
  left: 85vw;
  background-color: #67c23a78;
}
.mobile .layout-container {
  display: none;
}
.mobile-container {
  display: none;
}
.mobile .mobile-container {
  display: block;
}

.layout-container {
  width: 100vw;
  height: 100vh;
}
.content-container {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}
.layout-content {
  padding-top: 10vh;
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 5vh;
  padding-bottom: 2vh;
  overflow-y: hidden;
}
.layout-nav {
  width: 100%;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f6f6f7;
}
</style>