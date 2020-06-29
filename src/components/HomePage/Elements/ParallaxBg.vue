<template>
   <div class="parallax-container">
      <div class="parallax"><img :src="source"></div>
   </div>
</template>

<script>
   export default {
      name: "ParallaxBg",
      props: ['source']
   }
</script>

<style scoped>

</style>
