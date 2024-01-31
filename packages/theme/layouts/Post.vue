<template>
  <CommonVue class="post-page">
    <PostHeaderVue/>
    <Content />
  </CommonVue>
</template>

<script>
import CommonVue from '../components/Common.vue'
import PostHeaderVue from '../components/post/PostHeader.vue'

export default {
  components: {
    CommonVue,
    PostHeaderVue
  },
}
</script>

