<template>
  <div class="top-bar" :class="{ 'show-bg': showBg, 'docs-bg': isDocs }">
    <!-- title -->
    <div class="topbar-title" @click="handleLink('/')">
      <img :src="$withBase($themeConfig.logo)" alt="logo" />
      {{ $site.title || title }}
    </div>
    <div class="flex-grow"></div>
    <!-- detail menu -->
    <div class="detail-menu">
      <div
        v-for="(item, index) in $themeConfig.nav || menuItems"
        :key="index"
        @click="handelLinkWithSub(item)"
        :class="{ 'nav-dropdown': item.sub }"
      >
        <div :class="item.icon || 'el-icon-news'">
          {{ item.text }} <i class="el-icon-caret-bottom" v-if="item.sub"></i>
        </div>
        <!-- 容器防止hover因间隔失去焦点 -->
        <div class="nav-dropdown-container">
          <div class="nav-dropdown-items" v-if="item.sub">
            <div
              v-for="(itm, idx) in item.sub"
              :key="itm.toString() + '-' + idx.toString()"
              @click="handleLink(itm.link)"
            >
              <i :class="itm.icon || item.icon || 'el-icon-date'" style="margin-right: 0.5rem">{{
                itm.text
              }}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isScrollTop: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: 'qbook',
      menuItems: [
        {
          text: 'Home',
          link: '/'
        },
        {
          text: 'Tags',
          link: '/tags/'
        }
      ]
    }
  },
  methods: {
    handleLink(url) {
      if (!url) return
      const currentRoute = this.$router.currentRoute
      if (currentRoute.path !== url) {
        this.$router.push(url)
      }
    },
    handelLinkWithSub(item) {
      if (item.sub) return
      this.handleLink(item.link)
    }
  },
  computed: {
    showBg() {
      return !this.isScrollTop || this.isDocs
    },
    isDocs() {
      let path = this.$page.path.split('/')[1]
      return !(path == 'post' || path == 'tags' || path == '')
    }
  }
}
</script>

<style scoped>
.nav-dropdown-container{
  position: absolute;
  display: none;
  width: 100%;
  padding: 0.7rem 0;
}
.nav-dropdown {
  position: relative;
}
.nav-dropdown:hover .nav-dropdown-container {
  display: flex;
}
.nav-dropdown-items > * {
  margin-top: 5%;
  margin-bottom: 5%;
  cursor: pointer;
}
.nav-dropdown-items {
  padding: 3% 6%;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c7c3c384;
  min-width: 100%;
  font-weight: 550;
  border-radius: 5px;
  border: 1px solid #bfbfbf;
}
.topbar-title {
  font-weight: 550;
  font-size: large;
  color: #fff;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60vw;
}

/* .topbar-title:hover {
  color: #85c3f5;
} */

.topbar-title img {
  max-width: 5rem;
  margin-right: 0.25rem;
  max-height: 100%;
  object-fit: cover;
}

.flex-grow {
  flex-grow: 1;
}

.top-bar {
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  color: #fff;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: large;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    '微软雅黑', Arial, sans-serif;
}

.detail-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  cursor: pointer;
}

.detail-menu > * {
  margin-right: 2rem;
}

.show-bg {
  background: rgba(238, 238, 238, 0.563);
  backdrop-filter: blur(3px);
}

.docs-bg {
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.show-bg .detail-menu,
.show-bg .topbar-title {
  color: rgb(36, 33, 33);
}
</style>
