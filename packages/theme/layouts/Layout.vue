<template>
  <CommonVue>
    <el-row class="layout-container" :gutter="20">
      <el-col :span="6">
        <LayoutNavVue lass="layout-nav"/>
      </el-col>
      <el-col :span="18">
        <PostContentVue class="layout-content" />
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
.layout-content {
  padding-top: 10vh;
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 5vh;
  width: 90%;
  max-height: 87vh;
  padding-bottom: 2vh;
  overflow-y: auto;
}
.layout-nav{
  width: 100%;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f6f6f7;
}
</style>