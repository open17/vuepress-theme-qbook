<template>
  <CommonVue>
    <div class="container">
      <el-empty description="404" :image-size="200"/>
    </div>
  </CommonVue>
</template>

<script>
import CommonVue from '../components/Common.vue'
export default {
  components: {
    CommonVue
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>