<template>
  <div class="header-list">
    <a
      v-for="(item, index) in list"
      :key="index"
      class="content-link-smooth"
      :href="'#' + item.slug"
      @click.prevent="scrollTo(item.slug)"
      :style="{ paddingLeft: item.level + 'rem', fontWeight: item.level == 2 ? 'bold' : 'normal' }"
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
  padding-right: 1rem;
}
/* WebKit browsers */
::-webkit-scrollbar {
  width: 4px; /* 设置滚动条的宽度 */
}

::-webkit-scrollbar-track {
  background: #f1f1f1; /* 设置滚动条的背景颜色 */
}

::-webkit-scrollbar-thumb {
  background: #888; /* 设置滚动条滑块的颜色 */
}

::-webkit-scrollbar-thumb:hover {
  background: #555; /* 设置滑块在鼠标悬停时的颜色 */
}

/* Firefox */
::-moz-scrollbar {
  width: 4px; /* 设置滚动条的宽度 */
}

::-moz-scrollbar-track {
  background: #f1f1f1; /* 设置滚动条的背景颜色 */
}

::-moz-scrollbar-thumb {
  background: #888; /* 设置滚动条滑块的颜色 */
}

::-moz-scrollbar-thumb:hover {
  background: #555; /* 设置滑块在鼠标悬停时的颜色 */
}

a,
a:active {
  text-decoration: none;
  color: #343434;
  display: block;
  margin-bottom: 0.7rem;
}

a:hover {
  color: rgb(44, 164, 213);
}

.content-link-smooth {
  cursor: pointer;
}
</style>