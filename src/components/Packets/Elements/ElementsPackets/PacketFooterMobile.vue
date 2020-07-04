<template>
   <div class="row">
      <strong>
         <div class="col s12">
            <h4>{{ name }}</h4>
         </div>
         <div class="col s12">
            <slot></slot>
         </div>
         <br><br>
         <div class="col s12">
            <span> Cena pakietu: {{ price }} </span>
         </div>
      </strong>
   </div>

</template>

<script>
   export default {
      name: "PacketFooterMobile",
      props: ['name', 'price']
   }
</script>

<style scoped>

</style>
