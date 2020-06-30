<template>
   <div class="parallax-container bg">
      <div class="parallax"><img :src="source" :alt="imgAlt"></div>
   </div>
</template>

<script>
   export default {
      name: "BgImage",
      props: ['source', 'imgAlt']
   }
</script>

<style scoped>
   .bg {
      height: 100vh;
      background-color: black;
      z-index: 100 !important;
   }
   img{
      z-index: 1000 !important;
   }
   @media only screen and (max-width: 411px) {
      .bg {
         width: 411px;
         overflow: hidden !important;
      }
   }
   @media only screen and (max-width: 375px) {
      .bg {
         width: 375px;
         overflow: hidden !important;
      }
   }
   @media only screen and (max-width: 360px) {
      .bg {
         width: 360px;
         overflow: hidden !important;
      }
   }

</style>
