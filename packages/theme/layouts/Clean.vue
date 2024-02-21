<template>
  <CommonVue>
    <div class="container">
      <Content/>
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
  height: 100vh;
  width: 100vw;
}
</style>