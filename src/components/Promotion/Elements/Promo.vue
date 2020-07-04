<template>
   <tbody>
      <tr>
         <td>{{ name }}</td>
         <td>{{ offers }}</td>
         <td>{{ from }}</td>
         <td>{{ to }}</td>
      </tr>
   </tbody>
</template>

<script>
   export default {
      name: "Promo",
      props: ['name', 'offers', 'from', 'to']
   }
</script>

<style scoped>

</style>
