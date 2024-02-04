<template>
  <CommonVue>
    <el-row class="layout-container" :gutter="20">
      <el-col :span="6">
        <LayoutNavVue lass="layout-nav" />
      </el-col>
      <el-col :span="18">
        <div class="content-container targetContainer">
          <PostContentVue class="layout-content" :scrollOffset="-80"/>
        </div>
      </el-col>
    </el-row>
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
  }
}
</script>

<style scoped>
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