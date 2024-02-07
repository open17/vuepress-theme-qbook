<template>
  <div class="info-box">
    <div class="info-name">{{name}}</div>
    <div class="info-desc">{{ desc }}</div>
    <slot/>
  </div>
</template>

<script>
export default {
    props:["name", "desc"]
}
</script>

<style scoped>
.info-box {
  /* background: #16151572; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 0.5vh;
  padding-bottom: 0.5vh;
  border-radius: 20px;
  /* min-width: 35vw; */
  min-height: 15vh;
  margin-top: 2vh;
  color: #fff;
  font-size: x-large;
}
.info-name {
  font-size: 2.5rem;
  font-weight: bold;
}
.info-desc {
  margin-top: 2vh;
}
</style>