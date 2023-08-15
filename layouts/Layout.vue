<template>
  <!-- 长宽覆盖屏幕 -->
  <div class="h-screen w-screen " :class="isDarkMode?'bg-gray-700':'bg-white'">
    <!-- 导航栏 -->
    <TopBarVue />
    <!-- padding 保证初始化时不被导航栏覆盖 -->
    <div class="h-full w-full pt-16">
      <!-- 主页: 如果在根目录-->
      <HomeViewVue v-if="isHome" />
      <!-- 书本页面: 此外-->
      <PaperViewVue v-else />
    </div>
  </div>
</template>

<script>
// 导入组件
import TopBarVue from "../components/TopBar.vue";
import HomeViewVue from "../views/HomeView.vue";
import PaperViewVue from "../views/PaperView.vue";

export default {
  // 注册组件名
  components: {
    TopBarVue,
    HomeViewVue,
    PaperViewVue,
  },
  // 计算属性
  computed: {
    // isHome判断是否为根目录
    isHome() {
      return (
        this.$page.path.endsWith("/") || this.$page.path.endsWith("index.html")
      );
    },
  },
  data() {
    return {
      // 初始化是否黑暗模式
      isDarkMode: false,
      // 是否使用暗黑模式
      useDarkMode: true
    };
  },
  // 全局事件总线
  mounted() {
    // Get the matchMedia object
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    // Set initial value
    this.isDarkMode = darkModeMediaQuery.matches;
    this.$EventBus.$emit("isDarkMode", this.isDarkMode);

    // Listen for changes
    darkModeMediaQuery.addEventListener("change", (event) => {
      this.isDarkMode = event.matches;
      this.$EventBus.$emit("isDarkMode", this.isDarkMode);
    });
  },
};
</script>

<style>
/* 更改滚动条的宽度 */
::-webkit-scrollbar {
  width: 1px;
}

/* 更改滚动条轨道的背景颜色 */
::-webkit-scrollbar-track {
  background: gray;
}

/* 更改滚动条拇指的背景颜色和边框半径 */
::-webkit-scrollbar-thumb {
  background: whitesmoke;
  border-radius: 1px;
}

/* 更改鼠标悬停时滚动条拇指的背景颜色 */
::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>