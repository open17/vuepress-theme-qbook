<template>
  <div class="container" ref="slotContainer">
    <top-bar-vue :isScrollTop="isScrollTop" />
    <slot />
  </div>
</template>

<script>
import TopBarVue from './common/TopBar.vue'
export default {
  props: ['scrollHeight'],
  components: {
    TopBarVue
  },
  data() {
    return {
      isScrollTop: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      const slotContainer = this.$refs.slotContainer
      slotContainer.addEventListener('scroll', this.handleScroll)
    })
  },
  beforeDestroy() {
    const slotContainer = this.$refs.slotContainer
    slotContainer.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      const slotContainer = this.$refs.slotContainer
      const scrollTop = slotContainer.scrollTop
      // console.log(scrollTop)
      let h = 100
      if (this.scrollHeight) h = this.scrollHeight
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
  max-height: 100vh;
  background-color: transparent;
  /* display: block; */
  /* display: flex;
  justify-content: center;
  align-items: flex-start; */
  overflow-x: hidden;
  overflow-y: auto;
  flex-direction: column;
  padding: 0;
}
</style>