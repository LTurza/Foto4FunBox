<template>

      <tbody>
      <tr>
         <td> <i :class="'material-icons left ' + color  ">brightness_1</i>{{ name }} </td>
         <td> <slot></slot></td>
         <td> {{ price }} </td>
      </tr>
      </tbody>
</template>

<script>
   export default {
      name: "Packet",
      props: ['name', 'desc', 'price', 'color']
   }
</script>

<style scoped>

</style>
