<template>
   <div class="parallax-container">
      <div class="parallax"><img :src="source" :alt="imgAlt" height="200%"></div>
   </div>
</template>

<script>
   export default {
      name: "ParallaxBg",
      props: ['source', 'imgAlt']
   }
</script>

<style scoped>
   .parallax {
      background-color: black !important;
      z-index: 100 !important;
   }
   img{
      z-index: 1000 !important;
   }
</style>
