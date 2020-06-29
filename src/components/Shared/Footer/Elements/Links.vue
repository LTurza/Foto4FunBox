<template>
   <div>
      <h6 class="col l2 offset-l2 left">Kontakt</h6>
      <div class="col l2 offset-l8" v-for="link in links"
           :key="link.id">

         <span
               class="left"
         >
         <i class="material-icons left">
            {{link.icon}}
         </i>
         {{link.value}}
      </span>
      </div>
   </div>
</template>

<script>
   export default {
      name: "Links",
      props: ['links']
   }
</script>

<style scoped>

</style>
