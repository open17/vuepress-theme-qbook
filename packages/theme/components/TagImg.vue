<template>
  <div class="tag-img">
    <h1>Tags</h1>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/tags' }">Tags</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$title.slice(0, -$site.title.length - 2) != 'Tags '">{{
        title
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$title.slice(0, -this.$site.title.length - 2)
    }
  }
}
</script>

<style scoped>
.tag-img {
  position: relative;
  top: -5vh;
  width: 100%;
  height: 45vh;
  background-image: url('../assets/flat-mountains.svg');
  background-position: center;
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    '微软雅黑', Arial, sans-serif;
}
h1 {
  font-size: 4rem;
  color: #fff;
  font-weight: 400;
  margin-top: 7vh;
}
.breadcrumb {
  position: relative;
  bottom: 2vh;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
}
.breadcrumb >>> .is-link,
.breadcrumb >>> .el-breadcrumb__inner {
  color: #fff;
}
.breadcrumb >>> .el-breadcrumb__inner:hover {
  color: #fff;
}
</style>