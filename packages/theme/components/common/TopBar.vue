<template>
  <div class="all">
    <!-- 搜索弹窗 -->
    <el-dialog title="搜索" :visible.sync="dialogTableVisible" :fullscreen="isMobile">
      <div class="search-container">
        <SearchBox />
      </div>
    </el-dialog>
    <!-- 主导航栏 -->
    <div class="top-bar" :class="{ 'show-bg': showBg, 'docs-bg': isDocs }">
      <!-- 标题与图片 点击返回主页 -->
      <div class="topbar-title" @click="handleLink('/')">
        <img :src="$withBase('/'+$themeConfig.logo)" alt="logo" v-if="!isMobile" />
        {{ $site.title || title }}
      </div>
      <div class="flex-grow"></div>
      <!-- nav主体 -->
      <div class="detail-menu">
        <!-- 移动端显示 展开抽屉导航按钮 -->
        <div class="navbar-simple" @click="showDrawer = true" v-if="isMobile">
          <div class="el-icon-menu"></div>
        </div>
        <!-- 固定搜索栏 -->
        <div class="navbar-simple" @click="dialogTableVisible = true">
          <div class="el-icon-search" v-if="!isMobile">&nbsp;搜索</div>
          <i class="el-icon-search" v-else></i>
        </div>
        <!-- 用户自定nav -->
        <template v-if="!isMobile">
          <div
            v-for="(item, index) in $themeConfig.nav || menuItems"
            :key="index"
            @click="handelLinkWithSub(item)"
            :class="{ 'nav-dropdown': item.sub, 'nav-simple': !item.sub }"
          >
            <div :class="item.icon || 'el-icon-news'">
              {{ item.text }} <i class="el-icon-caret-bottom" v-if="item.sub"></i>
            </div>
            <!-- 容器防止hover因间隔失去焦点 -->
            <div class="nav-dropdown-container">
              <!-- 子菜单栏 -->
              <div class="nav-dropdown-items" v-if="item.sub">
                <div
                  v-for="(itm, idx) in item.sub"
                  :key="itm.toString() + '-' + idx.toString()"
                  @click="handleLink(itm.link)"
                >
                  <div :class="itm.icon || 'default'">{{ itm.text }}</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!-- 移动端抽屉副导航栏 -->
    <el-drawer :visible.sync="showDrawer" :with-header="false" size="80%">
      <div class="info-container">
        <UserAvatarVue class="" :size="140" :src="$themeConfig.avatar" />
        <SocialButtonsVue class="social-group"/>
      </div>
      <el-menu class="el-menu-vertical-demo">
        <template v-for="(item, index) in $themeConfig.nav || menuItems">
          <!-- 存在子栏 -->
          <el-submenu :index="index.toString()" :key="index" v-if="item.sub">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.text }}</span>
            </template>
            <el-menu-item
              v-for="(itm, idx) in item.sub"
              :key="index.toString() + '-' + idx.toString()"
              @click="handleLink(itm.link)"
              :index="index.toString() + '-' + idx.toString()"
            >
              <i :class="itm.icon || 'default'"></i>
              <span slot="title">{{ itm.text }} </span>
            </el-menu-item>
          </el-submenu>
          <!-- 不存在子栏 -->
          <el-menu-item
            :index="index.toString()"
            :key="index"
            @click="handleLink(item.link)"
            v-else
          >
            <i :class="item.icon || 'el-icon-news'"></i>
            <span slot="title">{{ item.text }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script>
import SearchBox from '@SearchBox'
import UserAvatarVue from '../UserAvatar.vue'
import SocialButtonsVue from '../home/SocialButtons.vue'

export default {
  props: {
    isScrollTop: {
      type: Boolean,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  components: { SearchBox, UserAvatarVue,SocialButtonsVue },
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
      ],
      dialogTableVisible: false,
      showDrawer: false
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
      return !(path == 'post' || path == 'tags' || path == 'page' || path == '')
    }
  }
}
</script>

<style scoped>
.el-menu {
  border-right: none;
  background: transparent;
  width: 100%;
}
.all {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    '微软雅黑', Arial, sans-serif;
}
.search-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-container {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.info-container >>> .social-buttons {
  box-shadow: none;
  width: 100%;
  overflow-x: scroll;
  border: none;
}

.mobile .search-container >>> .suggestions {
  position: absolute;
  left: 0;
  right: 0;
}

.mobile .search-container >>> .search-box input {
  width: 75vw;
  height: 2rem;
  border: 1px solid #bfbfbf;
}

.default {
  font-weight: normal;
}
.nav-simple :hover {
  color: deepskyblue;
}
.nav-dropdown-container {
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
  margin-bottom: 10%;
  cursor: pointer;
}
.nav-dropdown-items > *:hover {
  color: dodgerblue;
}
.nav-dropdown-items {
  padding: 3% 6%;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8a8a8a4d;
  backdrop-filter: blur(5px);
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
  background: rgba(255, 255, 255, 0.436);
  box-shadow: 0 5px 5px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
}

.docs-bg {
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: none;
}

.show-bg .nav-dropdown-items {
  background-color: #ffffff7e;
}

.show-bg .detail-menu,
.show-bg .topbar-title {
  color: rgb(36, 33, 33);
}

.nav-dropdown-items >>> i::before {
  position: relative;
  left: -5%;
}

.mobile {
}
</style>
