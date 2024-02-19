<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div class="cookies-card" v-if="enabled">
      <p class="cookie-heading">{{ message }}</p>
      <p class="cookie-para"> 
      </p>
      <div class="button-wrapper">
        <button class="accept cookie-button" @click="reload">
          {{ buttonText }}
        </button>
        <button class="reject cookie-button">再想想</button>
      </div>
      <button class="exit-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 162 162"
          class="svgIconCross"
        >
          <path
            stroke-linecap="round"
            stroke-width="17"
            stroke="black"
            d="M9.01074 8.98926L153.021 153"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="17"
            stroke="black"
            d="M9.01074 153L153.021 8.98926"
          ></path>
        </svg>
      </button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from "@vuepress/plugin-pwa/lib/SWUpdatePopup.vue";

export default {
  components: { SWUpdatePopup },
};
</script>

<style scoped>
.cookies-card {
  z-index: 10000;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 280px;
  height: fit-content;
  background-color: rgb(255, 250, 250);
  border-radius: 10px;
  border: 1px solid rgb(206, 206, 206);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  gap: 15px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.066);
}

.cookie-heading {
  color: rgb(34, 34, 34);
  font-weight: 800;
}
.cookie-para {
  font-size: 11px;
  font-weight: 400;
  color: rgb(51, 51, 51);
}
.button-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.cookie-button {
  width: 50%;
  padding: 8px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.accept {
  background-color: rgb(34, 34, 34);
  color: white;
}
.reject {
  background-color: #ececec;
  color: rgb(34, 34, 34);
}
.accept:hover {
  background-color: rgb(0, 0, 0);
}
.reject:hover {
  background-color: #ddd;
}
.exit-button {
  position: absolute;
  top: 17px;
  right: 17px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.exit-button:hover {
  background-color: #ddd;
  color: white;
}
.svgIconCross {
  height: 10px;
}
</style>
