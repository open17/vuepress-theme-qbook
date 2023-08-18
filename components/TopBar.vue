<template>
  <div
    class="flex items-center justify-between  w-full px-5 fixed z-50"
    :class="isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-200 to-yellow-200'"
  >
    <div class="flex items-center text-xl space-x-2">
      <img v-if="imageURL" :src="imageURL" alt="" class="h-10 w-10" />
      <!-- <div v-html="NavIcon"></div> -->
      <span
        class="font-bold"
        :class="isDarkMode ? 'text-gray-100' : 'text-gray-900'"
      >
        {{ NavTitle }}
      </span>
    </div>
    <div class="flex items-center justify-end space-x-1">
      <SearchBox />
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        :router="false"
        @select="handleSelect"
        background-color="transparent"
        :text-color="isDarkMode ? '#fff' : '#000'"
        :active-text-color="isDarkMode ? '#ffd04b' : '#409EFF'"
      >
        <template v-for="(NavLink, index) in NavLinkGroup">
          <el-menu-item :index="NavLink.link" :key="index" v-if="NavLink.link">
            <router-link :to="NavLink.link" class="h-full w-full block">
              {{ NavLink.text }}
            </router-link>
          </el-menu-item>
          <template v-else>
            <el-submenu :key="index" :index="NavLink.text">
              <template slot="title">{{ NavLink.text }}</template>
              <el-menu-item
                v-for="(item, i) in NavLink.items"
                :index="item.link"
                :key="i"
              >
                <router-link :to="item.link" class="h-full w-full block">
                  {{ item.text }}
                </router-link>
              </el-menu-item>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import SearchBox from "@SearchBox";
export default {
  components: {
    SearchBox,
  },
  data() {
    return {
      activeIndex: "/",
      NavTitle: "Vuepress Theme QBook",
      NavLinkGroup: [],
      isDarkMode: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = keyPath[0];
    },
  },
  mounted() {
    if (this.$themeConfig.NavTitle) this.NavTitle = this.$themeConfig.NavTitle;
    this.NavLinkGroup = this.$themeConfig.nav;
    // Get the matchMedia object
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    // Set initial value
    this.isDarkMode = darkModeMediaQuery.matches;
    this.$EventBus.$on("isDarkMode", (value) => {
      this.isDarkMode = value;
    });
  },
  computed: {
    imageURL() {
      if (this.$themeConfig.logo) return this.$withBase(this.$themeConfig.logo);
      return null;
    },
  },
};
</script>

<style>
.el-menu-item li{
  padding: 0 !important;
}
.el-menu.el-menu--horizontal{
  border-bottom:none !important;
}
.el-menu-item:hover {
  background: transparent !important;
}
.el-submenu__title:hover {
  background: transparent !important;
}
.el-menu--popup li {
  color: black !important;
  background-color: #fff !important;
}
.el-menu--popup li:hover {
  background-color: #fff !important;
  color: skyblue !important;
}
</style>
