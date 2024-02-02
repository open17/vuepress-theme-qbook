<template>
  <el-carousel
    trigger="click"
    class="hero-carousel"
    height="100vh"
    :arrow="$themeConfig.showArrow||showArrow"
  >
    <el-carousel-item
      v-for="(item, index) in $themeConfig.pics||carouselItems"
      :key="index"
      class="hero-carousel-item"
    >
      <div class="img" :style="{ 'background-image': `url(${item.img})` }">
        <div class="img-mask" :style="{ backgroundColor: item.color||'rgba(92, 101, 124, 0.1)' }" />
      </div>
    </el-carousel-item>
    <DownIconVue class="down-icon" />
    <div class="user-info">
      <UserAvatar class="" :size="140" :src="$themeConfig.avatar" />
      <InfoBoxVue :name="$themeConfig.name || 'Hello,world!'" :desc="$themeConfig.desc"/>
    </div>
  </el-carousel>
</template>

<script>
import default_img from '../../assets/default_bg.jpg'
import default_img2 from '../../assets/default_bg2.jpg'
import InfoBoxVue from '../InfoBox.vue'
import DownIconVue from '../others/DownIcon.vue'
import UserAvatar from '../UserAvatar.vue'

export default {
  components: {
    DownIconVue,
    UserAvatar,
    InfoBoxVue
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
.hero-carousel {
  margin: 0;
  width: 100%;
  overflow-y: hidden;
}

.down-icon {
  position: relative;
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

.hero-carousel:deep(.el-carousel__indicators) {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 20vw;
  width: auto;
  bottom: 15vh;
  border: none;
  height: 20px;
  background-color: rgba(92, 101, 124, 0.2);
  border-radius: 50px;
  padding-left: 2%;
  padding-right: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.el-carousel__button) {
  /* 默认按钮的样式 */
  width: 8px;
  height: 8px;
  border: none;
  border-radius: 20px;
  background: #4085ec;
}

:deep(.is-active) .el-carousel__button {
  background: #fff;
  width: 16px;
  opacity: 1;
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

.img-mask {
  width: 100%;
  height: 100%;
  z-index: 2;
  position: relative;
}

.demonstration {
  color: var(--el-text-color-secondary);
}
.user-info {
  position: relative;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>