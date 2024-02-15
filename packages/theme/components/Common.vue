<template>
  <div class="container targetContainer" ref="slotContainer">
    <top-bar-vue :isScrollTop="isScrollTop" :isMobile="isMobile" />
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
      isScrollTop: true,
      mobileWidthThreshold: 768, // 设定的移动设备宽度阈值
      isMobile:false
    }
  },
  mounted() {
    this.$nextTick(() => {
      const slotContainer = this.$refs.slotContainer
      slotContainer.addEventListener('scroll', this.handleScroll)
      this.checkIsMobile()
      window.addEventListener('resize', this.checkIsMobile) // 监听窗口大小变化
    })
  },
  beforeDestroy() {
    const slotContainer = this.$refs.slotContainer
    slotContainer.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.checkIsMobile)
  },
  methods: {
    handleScroll(event) {
      const slotContainer = this.$refs.slotContainer
      const scrollTop = slotContainer.scrollTop
      let h = 100
      if (this.scrollHeight) h = this.scrollHeight
      if (scrollTop < h) {
        this.isScrollTop = true
      } else {
        this.isScrollTop = false
      }
    },
    checkIsMobile() {
      this.isMobile = window.innerWidth < this.mobileWidthThreshold
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