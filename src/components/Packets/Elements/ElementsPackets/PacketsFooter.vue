<template>
  <tfoot>
    <tr>
      <th>{{ name }}</th>
      <th><slot></slot></th>
      <th>{{ price }}</th>
    </tr>
  </tfoot>
</template>

<script>
export default {
  name: "PacketsFooter",
  props: ["name", "price"],
};
</script>

<style scoped></style>
