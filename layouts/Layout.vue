<template>
  <!-- 长宽覆盖屏幕 -->
  <div class="h-screen w-screen">
    <!-- 导航栏 -->
    <TopBarVue/>
    <!-- padding 保证初始化时不被导航栏覆盖 -->
    <div class="h-full w-full pt-16">
      <!-- 主页: 如果在根目录-->
      <HomeViewVue v-if="isHome"/>
      <!-- 书本页面: 此外-->
      <PaperViewVue v-else/>
    </div>
    
  </div>
</template>

<script>
// 导入组件
import TopBarVue from '../components/TopBar.vue';
import HomeViewVue from '../views/HomeView.vue';
import PaperViewVue from '../views/PaperView.vue';

export default {
  // 注册组件名
  components:{
    TopBarVue,
    HomeViewVue,
    PaperViewVue
  },
  // 计算属性
  computed: {
    // isHome判断是否为根目录
    isHome() {
      return this.$page.path.endsWith('/') || this.$page.path.endsWith('index.html');
    },
  },
};
</script>

<style>
</style>