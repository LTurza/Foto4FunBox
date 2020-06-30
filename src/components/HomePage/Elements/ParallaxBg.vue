<template>
   <div class="parallax-container">
      <div class="parallax"><img :src="source" :alt="imgAlt"></div>
   </div>
</template>

<script>
   export default {
      name: "ParallaxBg",
      props: ['source', 'imgAlt']
   }
</script>

<style scoped>

</style>
