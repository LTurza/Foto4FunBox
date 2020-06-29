<template>
   <div class="parallax-container bg">
      <div class="parallax"><img :src="source"></div>
   </div>
</template>

<script>
   export default {
      name: "BgImage",
      props: ['source']
   }
</script>

<style scoped>
   .bg {
      height: 90vh;
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
