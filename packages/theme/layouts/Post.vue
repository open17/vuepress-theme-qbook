<template>
  <CommonVue class="post-page" :scrollHeight="400">
    <PostHeaderVue />
    <PostContentVue class="post-content" />
    <Vssue :title="$title" class="vssue-container"/>
  </CommonVue>
</template>

<script>
import CommonVue from '../components/Common.vue'
import PostHeaderVue from '../components/post/PostHeader.vue'
import PostContentVue from '../components/PostContent.vue'
// import { Comment } from '@vuepress/plugin-blog/lib/client/components'
export default {
  components: {
    // Comment,
    CommonVue,
    PostHeaderVue,
    PostContentVue
  },
}
</script>

<style scoped>
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
.vssue-container{
  margin-left: 20vw;
  width: 60vw;
  margin-right: 20vw;
}
</style>

