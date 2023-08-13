<template>
  <div
    class="flex items-center justify-between border-b-2 w-full px-5 fixed bg-white z-50"
  >
    <div class="flex items-center text-xl space-x-2">
      <img v-if="imageURL" :src="imageURL" alt="" class="h-10 w-10" />
      <!-- <div v-html="NavIcon"></div> -->
      <span class="font-bold">{{ NavTitle }}</span>
    </div>
    <div class="flex items-center justify-end space-x-1">
      <SearchBox />
      <el-menu
        :default-active="activeIndex"
        class="text-black"
        mode="horizontal"
        :router="true"
        @select="handleSelect"
      >
        <template v-for="(NavLink, index) in NavLinkGroup">
          <el-menu-item
            :index="NavLink.link"
            :key="index"
            v-if="NavLink.link"
            class="text-black"
            >{{ NavLink.text }}</el-menu-item
          >
          <template v-else>
            <el-submenu :key="index" :index="NavLink.text">
              <template slot="title">{{ NavLink.text }}</template>
              <el-menu-item
                v-for="(item, i) in NavLink.items"
                :index="item.link"
                :key="i"
                >{{ item.text }}</el-menu-item
              >
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
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = keyPath;
    },
  },
  mounted() {
    if (this.$themeConfig.NavTitle) this.NavTitle = this.$themeConfig.NavTitle;
    this.NavLinkGroup = this.$themeConfig.nav;
  },
  computed: {
    imageURL() {
      if(this.$themeConfig.logo)return this.$withBase(this.$themeConfig.logo);
      return null;
    },
  },
};
</script>

<style>
</style>