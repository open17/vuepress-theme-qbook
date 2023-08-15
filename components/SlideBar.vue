<template>
  <div
    class="sidebar h-screen fixed w-56 z-20 border-r-2 py-10 overflow-scroll"
    :class="isDarkMode ? 'bg-gray-800' : 'bg-white'"
  >
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
          'text-gray-600': !isDarkMode && index != activeIdx && header.level == 2,
          'text-gray-400': isDarkMode && index != activeIdx && header.level == 2,
        }"
      >
        <a
          :href="`#${header.slug}`"
          class="block py-1 px-2"
          :class="{
            'font-extrabold py-2': header.level == 2,
            'hover:text-blue-500': !isDarkMode,
            'hover:text-blue-400': isDarkMode,
            'text-gray-500': isDarkMode && header.level != 2,
          }"
          :style="{
            'padding-left': `${(header.level - 1) * 1.25}rem`,
            'font-size': `${17 - header.level * 1}px`,
          }"
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
      activeIdx: -1,
      isDarkMode: false,
    };
  },
  computed: {
    nextLevelTwoIndices() {
      let LevelTwoIndices = [];
      let nextLevelTwoIndex = this.headers.length;
      for (let i = this.headers.length - 1; i >= 0; i--) {
        LevelTwoIndices[i] = nextLevelTwoIndex;
        if (this.headers[i].level === 2) {
          nextLevelTwoIndex = i;
        }
      }
      return LevelTwoIndices;
    },
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
  mounted() {
        // Get the matchMedia object
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    // Set initial value
    this.isDarkMode = darkModeMediaQuery.matches;
    this.$EventBus.$on("isDarkMode", (value) => {
      this.isDarkMode = value;
    });
  },
};
</script>

<style scoped></style>
