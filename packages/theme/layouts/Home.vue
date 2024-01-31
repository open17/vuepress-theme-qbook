<template>
  <CommonVue>
    <PicCarousel/>
    <CardListVue :cards="$pagination.pages"/>
  </CommonVue>
</template>

<script>
import CommonVue from '../components/Common.vue'
import CardListVue from '../components/CardList.vue'
import PicCarousel from '../components/home/PicCarousel.vue'
export default {
    components:{
        CommonVue,
        PicCarousel,
        CardListVue
    }
}
</script>

<style>

</style>