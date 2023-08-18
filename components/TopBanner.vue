<template>
  <div v-if="!isHide">
    <div
      class="isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 z-50 sm:px-3.5 sm:before:flex-1 bg-gradient-to-r from-blue-300 to-indigo-400 bottom-1 fixed top-14 h-14 w-full"
    >
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p class="text-sm leading-6 text-gray-900">
          <strong class="font-semibold">{{ strong }}</strong
          ><svg
            viewBox="0 0 2 2"
            class="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" /></svg
          >{{ text }}
        </p>
        <a
          href="changelog"
          target="_blank"
          class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >{{ button }} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div class="flex flex-1 justify-end">
        <button
          type="button"
          class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          @click="cc"
        >
          <span class="sr-only">Dismiss</span>
          <svg
            class="h-5 w-5 text-gray-900"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHide: false,
    };
  },
  mounted() {
    if (this.$themeConfig.banner) {this.isHide = false;}
    else this.isHide = true;
  },
  computed:{
    strong(){
      return this.$page.frontmatter.banner_strong||"New Version is coming!";
    },
    text(){
      return this.$page.frontmatter.banner_text||"Click the right button to see what’s coming next?";
    },
    button(){
      return this.$page.frontmatter.banner_button||"Click me";
    }
  },
  methods: {
    cc() {
      this.isHide = true;
    },
  },
};
</script>

<style>
</style>