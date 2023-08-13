<template>
  <div class="items-center pl-14">
    <div class="flex items-center space-x-14 my-14">
      <div class="h-128 w-96 ml-14 z-10">
        <img v-if="imageURL" :src="imageURL" alt="" class="h-full w-full" />
        <img v-else src="../assets/default_cover.png" alt="" class="h-full w-full" />
      </div>
      <div class="items-center space-y-8 w-128">
        <h1 class="text-4xl font-extrabold">{{ title }}</h1>
        <div class="items-center text-base text-gray-600 flex">
          {{ description }}
        </div>
        <el-collapse accordion>
          <el-collapse-item
            v-for="(item, index) in features"
            :key="index"
            :name="index + 1"
          >
            <template slot="title">
              <div class="items-center justify-start flex space-x-1">
                <div v-html="item.icon"></div>
                <div class="text-xl">
                  {{ item.title }}
                </div>
              </div>
            </template>
            <div v-for="(content, index) in item.details" :key="index">
              {{ content }}
            </div>
          </el-collapse-item>
        </el-collapse>
         <router-link :to="buttonLink" class="block">
        <el-button type="primary"> {{buttonText}}</el-button>
         </router-link>
      </div>
    </div>

    <div class="absolute left-0 top-0 h-full bg-purple-500 w-64 z-0 "></div>
  </div>
</template>

<script>
export default {
  components: {},
   computed: {
    title() {
      return this.$page.frontmatter.heroText || 'Vuepress Theme QBook';
    },
    description() {
      return this.$page.frontmatter.description || 'A doc book that show you how to use this theme.';
    },
    features() {
      return this.$page.frontmatter.features || [];
    },
     imageURL() {
      if(this.$page.frontmatter.heroImage)return this.$withBase(this.$page.frontmatter.heroImage);
      return null;
    },
    buttonLink(){
       if(this.$page.frontmatter.actionLink)return this.$page.frontmatter.actionLink;
      return '/';
    },
    buttonText(){
       if(this.$page.frontmatter.actionText)return this.$page.frontmatter.actionText;
      return "Get Started →";
    }
  },
};
</script>

<style></style>
