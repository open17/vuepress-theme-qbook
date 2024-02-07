<template>
  <div class="social-buttons" v-if="$themeConfig.sns">
    <SimpleSocialVue
      v-for="(item, idx) in $themeConfig.sns"
      :key="idx"
      :svg="item.svg"
      :link="item.link"
      :color="item.color"
      :type="item.type"
      class="social-button"
    />
  </div>
</template>

<script>
import SimpleSocialVue from './SimpleSocial.vue'

export default {
  components: {
    SimpleSocialVue
  }
}
</script>

<style scoped>
.social-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  box-shadow: 0px 0px 15px #00000027;
  padding: 15px 10px;
  border-radius: 5em;
}
</style>