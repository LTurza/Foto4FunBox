<template>
   <div>
      <app-map class="map"/>
   </div>
</template>

<script>
   import Map from "./Elements/Map";

   export default {
      name: "Contact",
      components: {
         appMap: Map
      }
   }
</script>

<style scoped>
   .map {
      margin-top: 2rem !important;
   }
</style>
