<template>
  <CommonVue class="post-page" :scrollHeight="400">
    <PostHeaderVue />
    <el-button type="success" icon="el-icon-menu" circle @click="dialogTableVisible = true" class="menu-button"></el-button>
    <el-dialog title="目录" :visible.sync="dialogTableVisible">
      <header-list-vue :list="$page.headers" />
    </el-dialog>
    <PostContentVue class="post-content" />
    <Vssue :title="$page.path" class="vssue-container" />
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
  data(){
    return{
      dialogTableVisible: false
    }
  }
}
</script>

<style scoped>
.menu-button{
  position: sticky;
  top: 30vh;
  left: 3rem;
  margin-top:  3vh;
}
*{
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, PingFang SC,
    Hiragino Sans GB, STHeiti, Microsoft YaHei, Microsoft JhengHei, Source Han Sans SC,
    Noto Sans CJK SC, Source Han Sans CN, Noto Sans SC, Source Han Sans TC, Noto Sans CJK TC,
    WenQuanYi Micro Hei, SimSun, sans-serif;
}
.post-content {
  position: relative;
  padding-top: 3%;
  width: 60%;
  left: 20%;
  right: 20%;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, PingFang SC,
    Hiragino Sans GB, STHeiti, Microsoft YaHei, Microsoft JhengHei, Source Han Sans SC,
    Noto Sans CJK SC, Source Han Sans CN, Noto Sans SC, Source Han Sans TC, Noto Sans CJK TC,
    WenQuanYi Micro Hei, SimSun, sans-serif;
}
.vssue-container {
  margin-left: 20vw;
  width: 60vw;
  margin-right: 20vw;
}
</style>

