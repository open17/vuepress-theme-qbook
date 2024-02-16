<template>
  <a target="_blank" :href="link" class="github" v-if="type == 'github'">
    <github-icon-vue />
  </a>
  <a target="_blank" :href="link" class="linkedin" v-else-if="type == 'linkedin'">
    <LinkedinIconVue />
  </a>
  <a target="_blank" :href="link" class="facebook" v-else-if="type == 'facebook'">
    <FacebookIconVue />
  </a>
  <a target="_blank" :href="link" class="instagram" v-else-if="type == 'instagram'">
    <InstagramIconVue />
  </a>
  <a target="_blank" :href="link" class="zhihu" v-else-if="type == 'zhihu'">
    <zhihu-icon-vue />
  </a>
  <a target="_blank" :href="link" class="weibo" v-else-if="type == 'weibo'">
    <weibo-icon-vue />
  </a>
  <a
    target="_blank"
    :href="link"
    v-else
    :style="{ backgroundColor: getColor }"
    class="custom"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <div v-html="svg" :style="{ fill: getFillColor }"></div>
  </a>
</template>
<script>
import FacebookIconVue from '../others/FacebookIcon.vue'
import GithubIconVue from '../others/GithubIcon.vue'
import InstagramIconVue from '../others/InstagramIcon.vue'
import LinkedinIconVue from '../others/LinkedinIcon.vue'
import WeiboIconVue from '../others/WeiboIcon.vue'
import ZhihuIconVue from '../others/ZhihuIcon.vue'

export default {
  props: ['type', 'link', 'color', 'svg'],
  components: {
    GithubIconVue,
    LinkedinIconVue,
    FacebookIconVue,
    InstagramIconVue,
    ZhihuIconVue,
    WeiboIconVue
  },
  methods: {},
  data() {
    return {
      isHover: false
    }
  },
  computed: {
    getColor() {
      if (this.isHover) return '#fff'
      return this.color || 'rgba(92, 101, 124, 0.8)'
    },
    getFillColor() {
      if (this.isHover) return this.color
      return '#f2f2f2'
    }
  }
}
</script>

<style scoped>
.custom div {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom div >>> svg {
  transition: 0.3s;
}
.social-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 10px;
  background-color: #fff;
  box-shadow: 0px 0px 4px #00000027;
  transition: 0.3s;
}

.social-button:hover {
  background-color: #f2f2f2;
  box-shadow: 0px 0px 6px 3px #00000027;
}

.social-buttons svg {
  fill: #f2f2f2;
  transition: 0.3s;
  height: 20px;
}
.facebook {
  background-color: #3b5998;
}

.facebook svg {
  fill: #f2f2f2;
}

.facebook:hover svg {
  fill: #3b5998;
}

.github {
  background-color: #333;
}

.github svg {
  width: 30px;
  height: 30px;
  fill: #f2f2f2;
}

.github:hover svg {
  fill: #333;
}

.linkedin {
  background-color: #0077b5;
}

.linkedin svg {
  fill: #f2f2f2;
}

.linkedin:hover svg {
  fill: #0077b5;
}

.instagram {
  background-color: #c13584;
}

.instagram svg {
  fill: #f2f2f2;
}

.instagram:hover svg {
  fill: #c13584;
}

.zhihu {
  background-color: #0077b5;
}
.zhihu svg {
  fill: #fff;
  width: 25px;
  height: 25px;
}
.zhihu:hover svg {
  fill: #0077b5;
}

.weibo {
  background-color: rgb(183, 17, 17);
}
.weibo:hover svg {
  fill: rgb(183, 17, 17);
}
</style>