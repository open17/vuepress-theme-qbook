<template>
  <CommonVue>
    <TagImgVue />
    <div class="tagList">
      <div class="tagList-item" v-for="(item, index) in $frontmatterKey.list" :key="index">
        <router-link :to="item.path">
          <el-badge :value="item.pages.length" :max="100" >
            <el-button type="warning" round>{{ item.name }}</el-button>
          </el-badge>
        </router-link>
      </div>
    </div>
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
.tagList {
  margin-bottom: 3rem;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  min-height: 45vh;
}
.tagList > * {
  margin-right: 2vw;
}
</style>