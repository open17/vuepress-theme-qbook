<template>
  <CommonVue>
    <div class="container">
      <el-empty description="404" :image-size="200" />
      1
    </div>
  </CommonVue>
</template>

<script>
import CommonVue from '../components/Common.vue'
export default {
  components: {
    CommonVue
  },
  mounted() {
    this.$router.push(this.$route.params.pathMatch)
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