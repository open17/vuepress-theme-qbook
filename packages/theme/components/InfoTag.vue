<template>
  <div class="info-tags">
    <template v-if="isArray(tags)">
      <el-tag
        v-for="(text, i) in tags"
        :key="i"
        effect="dark"
        :type="getType(i)"
        style="margin-left: 1rem"
        @click="handleTagClick(text)"
        >{{ text }}</el-tag
      >
    </template>
    <el-tag effect="dark" @click="handleTagClick(tags)" v-else>{{ tags }}</el-tag>
  </div>
</template>

<script>
export default {
  props: ['tags'],
  data() {
    return {
      types: ['success', 'info', 'danger', 'warning']
    }
  },
  methods: {
    isArray(arr) {
      return Array.isArray(arr)
    },
    getType(idx) {
      return this.types[idx % this.types.length]
    },
    handleTagClick(text) {
      this.$router.push('/tags/' + text)
    }
  }
}
</script>

<style scoped>
.info-tags {
    cursor: pointer;
}
.info-tags >>> .el-tag {
  font-size: large;
  font-weight: 500;
}
</style>