<template>
  <div class="avatar">
    <el-avatar :size="size" :src="src" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
    </el-avatar>
  </div>
</template>
<script>
export default {
  props: ['size', 'src'],
  methods: {
    errorHandler() {
      return true
    }
  }
}
</script>
<style scoped>
.avatar >>> .el-avatar {
  background: #C0C4CC24;
  box-shadow: 0px 0px 10px #c3c3c3;
  transition: transform 0.5s;
  cursor: pointer;
}
.avatar >>> .el-avatar:hover {
  animation: rotate 0.5s forwards;
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
