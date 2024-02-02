<template>
  <CommonVue :scrollHeight="600">
    <PicCarousel />
    <CardListVue :cards="$pagination.pages" />
  </CommonVue>
</template>

<script>
import CommonVue from '../components/Common.vue'
import CardListVue from '../components/CardList.vue'
import PicCarousel from '../components/home/PicCarousel.vue'
export default {
  components: {
    CommonVue,
    PicCarousel,
    CardListVue
  },
  methods: {
    showNotify() {
      const notify=this.$themeConfig.notify
      if (notify) {
        this.$notify({
          title: notify.title,
          dangerouslyUseHTMLString: true,
          message: notify.html,
          duration: notify.duration,
          offset: 100
        })
      }
    }
  },
  mounted() {
    this.showNotify()
  }
}
</script>

<style>
</style>