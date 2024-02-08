<template>
  <el-carousel
    trigger="click"
    class="hero-carousel"
    height="100vh"
    indicator-position="none"
    :interval="3000"
    :arrow="($themeConfig.showArrow || showArrow).toString()"
  >
    <el-carousel-item
      v-for="(item, index) in $themeConfig.pics || carouselItems"
      :key="index"
      class="hero-carousel-item"
    >
      <div class="img" :style="{ 'background-image': `url(${item.img})` }">
        <div
          class="img-mask"
          :style="{ backgroundColor: item.color || 'rgba(92, 101, 124, 0.1)' }"
        />
      </div>
    </el-carousel-item>
    <div class="down-icon" @click="scrollDown()">
      <DownIconVue />
    </div>

    <div class="user-info">
      <UserAvatar class="" :size="140" :src="$themeConfig.avatar" />
      <InfoBoxVue :name="$themeConfig.name || 'Hello,world!'" :desc="$themeConfig.desc" />
      <SocialButtonsVue class="social-group"/>
    </div>
  </el-carousel>
</template>

<script>
import default_img from '../../assets/default_bg.jpg'
import default_img2 from '../../assets/default_bg2.jpg'
import InfoBoxVue from '../InfoBox.vue'
import DownIconVue from '../others/DownIcon.vue'
import UserAvatar from '../UserAvatar.vue'
import SocialButtonsVue from './SocialButtons.vue'


export default {
  components: {
    DownIconVue,
    UserAvatar,
    InfoBoxVue,
  SocialButtonsVue
  },
  data() {
    return {
      carouselItems: [
        {
          img: default_img,
          color: 'rgba(92, 101, 124, 0.1)'
        },
        {
          img: default_img2,
          color: 'rgba(92, 101, 124, 0.1)'
        }
      ],
      showArrow: 'always'
    }
  },
  methods: {
    scrollDown() {
      const parentContainer = document.querySelector('.targetContainer')
      if (parentContainer) {
        parentContainer.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth' // 使用平滑滚动效果
        })
      }
    }
  },
  mounted() {
    if (this.$themeConfig.arrow === 'never') {
      this.showArrow = 'always'
    } else if (this.$themeConfig.arrow === 'hover') {
      this.showArrow = 'hover'
    }
  }
}
</script>


<style scoped>
.social-group{
  margin-top: 5%;
}
.hero-carousel {
  margin: 0;
  width: 100%;
  overflow-y: hidden;
  position: relative;
}

.down-icon {
  display: block;
  cursor: pointer;
  position: absolute;
  left: 49%;
  transform: translateX(-50%);
  color: #fff;
  top: 90%;
  z-index: 10;
  animation: bounceUpDown 1.3s ease-in-out infinite;
}

@keyframes bounceUpDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.el-carousel__arrow {
  z-index: 5;
}

.hero-carousel-item .img {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.hero-carousel >>> .el-carousel__arrow {
  height: 3.5rem;
  width: 3.5rem;
  cursor: pointer;
  font-size: 1.6rem;
}

.img-mask {
  width: 100%;
  height: 100%;
  z-index: 2;
}

.user-info {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  box-shadow: 0px 0px 15px #00000027;
  padding: 5% 2%;
  border-radius: 20px;
   backdrop-filter: blur(5px); 
}
</style>