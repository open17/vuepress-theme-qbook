<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container{
    position:absolute;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>