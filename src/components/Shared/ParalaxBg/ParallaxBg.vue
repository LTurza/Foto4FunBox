<template>
  <div :class="'my-parallax-container ' + cls"></div>
</template>

<script>
export default {
  name: "ParallaxBg",
  props: ["cls"],
};
</script>

<style scoped>
.my-parallax-container {
  height: 400px;
  background: #000 no-repeat;
  background-size: cover;
  z-index: 100;
  background-attachment: fixed;
}
.bg-1 {
  background-image: url("./../../../assets/index-bg-1.svg");
}
.bg-2 {
  background-image: url("./../../../assets/index-bg-2.svg");
}
.bg-3 {
  background-image: url("./../../../assets/index-bg-3.svg");
}
.bg-1-mobile {
  background-image: url("./../../../assets/contentMobile1.svg");
  background-size: 300%;
}
</style>
