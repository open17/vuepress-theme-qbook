<template>
  <div id="root-container">
    <div
      class="container targetContainer"
      ref="slotContainer"
      :class="{ mobile: isMobile }"
      v-show="isLoaded"
    >
      <top-bar-vue :isScrollTop="isScrollTop" :isMobile="isMobile" />
      <slot />
    </div>
    <load-comm-vue v-if="!isLoaded" />
  </div>
</template>

<script>
import LoadCommVue from './common/LoadComm.vue'
import TopBarVue from './common/TopBar.vue'
export default {
  props: ['scrollHeight'],
  components: {
    TopBarVue,
    LoadCommVue
  },
  data() {
    return {
      isScrollTop: true,
      mobileWidthThreshold: 768, // 设定的移动设备宽度阈值
      isMobile: false,
      isLoaded: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      const waitForLoad = setTimeout(() => {
        this.isLoaded = true
      }, 10000)
      if (document.readyState === 'complete') {
        this.isLoaded = true
        clearTimeout(waitForLoad)
      } else {
        window.onload = (event) => {
          this.isLoaded = true
          clearTimeout(waitForLoad)
        }
      }
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
      this.$root.$isMobile = this.isMobile
    }
  }
}
</script>

<style>
#root-container,
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: block;
  background-color: transparent;
  overflow-x: hidden;
  overflow-y: auto;
  flex-direction: column;
  padding: 0;
}
</style>