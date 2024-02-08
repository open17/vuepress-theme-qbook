<template>
  <CommonVue>
    <TagImgVue />
    <CardListVue :cards="$pagination.pages" class="list" />
  </CommonVue>
</template>

<script>
import CommonVue from '../components/Common.vue'
import CardListVue from '../components/CardList.vue'
import TagImgVue from '../components/TagImg.vue'
export default {
  components: {
    CommonVue,
    CardListVue,
    TagImgVue
  }
}
</script>

<style scoped>
.list {
  position: relative;

}
</style>