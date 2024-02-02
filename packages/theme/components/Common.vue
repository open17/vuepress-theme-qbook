<template>
  <div class="container">
    <top-bar-vue :isScrollTop="isScrollTop" />
    <slot/>
  </div>
</template>

<script>
import TopBarVue from './common/TopBar.vue'
export default {
  props:["scrollHeight"],
  components: {
    TopBarVue
  },
  data() {
    return {
      isScrollTop: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      const scrollTop =  window.pageYOffset || document.documentElement.scrollTop
      let h=100
      if(this.scrollHeight)h=this.scrollHeight
      if (scrollTop < h) {
        this.isScrollTop = true
      } else {
        this.isScrollTop = false
      }
    }
  }
}
</script>

<style>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  flex-direction: column;
  padding: 0;
}
</style>