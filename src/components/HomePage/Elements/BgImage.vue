<template>
   <div class="bg">
      <img :src="source" alt="" class="img" width="50%">
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
      height: 100vh;

   }
   /*@media only screen and (max-width: 411px) {*/
   /*   .bg {*/
   /*      width: 411px;*/
   /*      overflow: hidden !important;*/
   /*   }*/
   /*}*/
   /*@media only screen and (max-width: 375px) {*/
   /*   .bg {*/
   /*      width: 375px;*/
   /*      overflow: hidden !important;*/
   /*   }*/
   /*}*/
   /*@media only screen and (max-width: 360px) {*/
   /*   .bg {*/
   /*      width: 360px;*/
   /*      overflow: hidden !important;*/
   /*   }*/
   /*}*/


</style>
