<template>
   <img :src="source" class="bg" width="100%">
</template>

<script>
   export default {
      name: "BgImage",
      props: ['source']
   }
</script>

<style scoped>
   .bg {
      height: 100vh;
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
