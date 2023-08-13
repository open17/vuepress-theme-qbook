<template>
  <div class="sidebar h-screen fixed w-56 z-20 bg-white dark:bg-gray-800 border-r-2 py-10 overflow-scroll">
    <ul>
      <li
        v-for="(header, index) in headers"
        :key="index"
        @click="handleClick(index)"
        v-show="
          header.level <= 2 ||
          (activeIdx >= 0 && index > activeIdx && index < nextLevelTwoIndex)
        "
        :class="{
          'text-blue-500': index == activeIdx,
          'text-gray-600 dark:text-gray-400': index != activeIdx && header.level == 2,
        }"
      >
        <a
          :href="`#${header.slug}`"
          class="block py-1 px-2 hover:text-blue-500 dark:hover:text-blue-400"
          :class="{
            'font-extrabold py-2': header.level == 2,
            'dark:text-gray-500': header.level != 2
          }"
          :style="{ 'padding-left': `${(header.level - 1) * 1.25 }rem`,'font-size': `${17 - header.level*1}px` }"
        >
          {{ header.title }}
        </a>
      </li>
    </ul>
  </div>
</template>





<script>
export default {
  props: {
    headers: {
      type: Array,
    },
  },
  data() {
    return {
      activeIdx: 0,
      nextLevelTwoIndices: [],
    };
  },
  created() {
    let nextLevelTwoIndex = this.headers.length;
    for (let i = this.headers.length - 1; i >= 0; i--) {
      this.nextLevelTwoIndices[i] = nextLevelTwoIndex;
      if (this.headers[i].level === 2) {
        nextLevelTwoIndex = i;
      }
    }
  },
  computed: {
    nextLevelTwoIndex() {
      if (this.activeIdx >= 0) {
        return this.nextLevelTwoIndices[this.activeIdx];
      }
      return this.headers.length;
    },
  },
  methods: {
    handleClick(index) {
      if (this.headers[index].level === 2) {
        if (this.activeIdx === index) {
          this.activeIdx = -1;
        } else {
          this.activeIdx = index;
        }
      }
    },
  },
};
</script>


<style scoped>
</style>