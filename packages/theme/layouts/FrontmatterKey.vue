<template>
  <CommonVue>
    <TagImgVue />
    <div class="tagList">
      <div class="tagList-item" v-for="(item, index) in $frontmatterKey.list" :key="index">
        <router-link :to="item.path">
          <el-badge :value="item.pages.length" :max="100" type="danger">
             <el-tag  type="danger">{{ item.name }}</el-tag>
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
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
}
.tagList > * {
  margin-right: 1.5vw;
  margin-bottom: 5vh;
}
.tagList >>> .el-tag {
  font-size: large;
  font-weight: 500;
  padding: 0 1rem;
  background-color: transparent;
}
.tagList >>> .el-badge{
  box-shadow: 0 0 1rem #0000001f;
}
</style>