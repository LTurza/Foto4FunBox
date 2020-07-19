<template>
  <div class=" my-parallax-container" v-source>
    <!--   <img :src="source" alt="" height="150%">-->
  </div>
</template>

<script>
export default {
  name: "ParallaxBg",
  props: ["source", "imgAlt"],
  directives: {
    parallax: {
      source(el) {
        el.style.backgroundImage = "./../../../assets/index-bg-1.svg";
      },
    },
  },
};
</script>

<style scoped>
.my-parallax-container {
  background-color: black;
  /*background-image: ;*/
  background-attachment: fixed !important;
  background-size: cover;
  height: 500px;
  /*z-index: ;*/
}
</style>
