<template>
  <div class="sidebar h-screen fixed w-56 z-20 bg-white border-r-2 py-10 overflow-scroll">
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
          'text-gray-600': index != activeIdx && header.level == 2,
        }"
      >
        <a
          :href="`#${header.slug}`"
          class="block py-1 px-2  hover:text-blue-500"
          :class="{
          'font-extrabold py-2': header.level == 2,
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
/* .sidebar {
  display: block;
  width: 15vw;
  height: 100vh;
  overflow-y: auto;
  padding-left: 1vw;
  background-color: #556270;
  position: fixed;
  top: 5vh;
}

.sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar li {
  text-decoration: none;
}

.sidebar a {
  margin: 1vh 0;
  color: #dfe5eb;
  display: block;
  padding: 0.5vw;
  padding-left: 3vw;
  text-decoration: none;
}
.sidebar li:hover a {
  color: #59e9df;
}

.sidebar li:hover {
  outline: none;
  position: relative;
}

.unactive a::after {
  content: "";
  position: relative;
  left: 0vw;
  top: 0vh;
}
.active a::after {
  content: "";
  position: relative;
  left: 0vw;
  top: 0vh;
} */
</style>