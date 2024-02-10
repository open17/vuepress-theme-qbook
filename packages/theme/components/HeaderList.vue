<template>
  <div class="header-list">
    <a
      v-for="(item, index) in list"
      :key="index"
      class="content-link-smooth"
      :href="'#' + item.slug"
      @click.prevent="scrollTo(item.slug)"
      :style="{paddingLeft: item.level + 'rem',fontWeight: item.level == 2 ? 'bold' : 'normal'}"
    >
      {{ item.title }}
    </a>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    scrollTo(slug) {
      const targetElement = document.getElementById(slug)
      const parentContainer = targetElement.closest('.targetContainer')
      if (targetElement) {
        const offset = 505 // 根据需要进行调整的偏移量
        parentContainer.scrollTo({
          top: targetElement.offsetTop + offset,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style scoped>
.header-list {
  max-height: 60vh;
  overflow-y: scroll;
}
a,
a:active,
a:hover {
  text-decoration: none;
  color: #343434;
  display: block;
  margin-bottom: 1rem;
}
.content-link-smooth {
  cursor: pointer;
}
</style>