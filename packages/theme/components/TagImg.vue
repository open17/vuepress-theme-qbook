<template>
  <div class="tag-img">
    <h1>Tags</h1>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/tags' }">Tags</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$title.slice(0, -$site.title.length-2)!='Tags '">{{title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
    computed: {
        title() {
            return this.$title.slice(0, -this.$site.title.length-2)
        }
    },
}
</script>

<style scoped>
.tag-img {
  width: 100%;
  height: 40vh;
  background-image: url('../assets/flat-mountains.svg');
  background-position: center;
  background-size: cover;
  text-align: center;
}
h1 {
  font-size: 7rem;
  color: #fff;
  font-weight: 700;
  margin-top: 5vh;
}
.breadcrumb{
    position: relative;
    bottom: 7vh;
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
}
.breadcrumb >>> .is-link,.breadcrumb>>>.el-breadcrumb__inner{
    color: #fff;
}
.breadcrumb>>>.el-breadcrumb__inner:hover{
   color: #fff; 
}
</style>