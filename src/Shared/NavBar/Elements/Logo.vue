<template>
   <img :src="source" alt="" height="80">
</template>

<script>
   export default {
      name: "Logo",
      props: ['source']
   }
</script>

<style scoped>
   img {
      padding-top: 10px !important;
   }
</style>
