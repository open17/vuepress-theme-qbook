<template>
  <div class="">
    <SlideBarVue :headers="PageHeader" />
    <Content class="markdown-body px-5 pl-64  w-full pb-16 min-h-screen" />

    <el-backtop class="fixed z-20"></el-backtop>
  </div>
</template>

<script>
import SlideBarVue from "../components/SlideBar.vue";

export default {
  components: {
    SlideBarVue,
  },
  computed:{
    PageHeader(){
      return this.$page.headers;
    }
  }
};
</script>

<style>
.markdown-body ul {
  list-style-type: disc !important;
}
.markdown-body ol {
  list-style-type: decimal !important;
}
a.header-anchor {
  opacity: 0;
}
h1,h2,h3,h4,h5,h6{
  position: relative;
  right: 1.2rem;
}
h1:hover a.header-anchor,
h2:hover a.header-anchor,
h3:hover a.header-anchor,
h4:hover a.header-anchor,
h5:hover a.header-anchor,
h6:hover a.header-anchor {
  opacity: 100;
}
</style>