<template>
  <div class="top-bar" :class="{ 'show-bg': showBg, 'docs-bg': isDocs }">
    <!-- title -->
    <div class="topbar-title" @click="handleLink('/')">
      <img :src="$withBase($themeConfig.logo)" alt="logo" />
      {{ $title || title }}
    </div>
    <div class="flex-grow"></div>
    <!-- detail menu -->
    <div class="detail-menu">
      <div
        v-for="(item, index) in $themeConfig.nav || menuItems"
        :key="index"
        @click="handleLink(item.link)"
      >
        <i :class="item.icon || 'el-icon-news'"> {{ item.text }}</i>
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
      this.$router.push(url)
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

.topbar-title:hover {
  color: #85c3f5;
}

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
