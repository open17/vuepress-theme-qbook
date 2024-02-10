<template>
  <div class="layout-nav">
    <el-menu default-active="2" class="el-nav">
      <el-submenu v-for="(item, i) in $themeConfig.sideBar" :key="i" :index="i.toString()">
        <template slot="title">
          <i :class="item.icon" class="icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="(lk, idx) in item.links"
          :key="i.toString() + '-' + idx.toString()"
          :index="lk.link"
        >
        <router-link :to="lk.link">
          {{ lk.text }}
        </router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.layout-nav{
  height: 100vh;
  overflow-y: scroll;
}
.el-nav {
  position: relative;
  top: 10vh;
  font-size: large;
  font-weight: bold;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    '微软雅黑', Arial, sans-serif;
}
.el-menu {
  border-right: none;
  background: transparent;
}
.el-nav >>> .icon{
    color: #344c67;
    font-size:1.3rem;
    margin-right: 2px;
}
.el-nav >>> .el-submenu__title{
    font-size: 1rem;
}

.el-nav >>> .el-menu,
.el-nav >>> .el-submenu__title,
.el-nav >>> .el-menu-item {
  background-color: transparent;
}
.el-nav >>> .is-active {
  color: #4e66bf;
}

.el-nav >>> a{
  text-decoration: none;
  color: inherit;
}
</style>