<template>
  <div class="row">
    <div class="col s12">
      <i :class="'material-icons center circle-size ' + color">brightness_1</i>
    </div>
    <div class="col s12">
      <h4>{{ name }}</h4>
    </div>
    <div class="col s12">
      <slot></slot>
    </div>
    <br /><br />
    <div class="col s12">
      <span> Cena pakietu: {{ price }} </span>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "PacketMobile",
  props: ["color", "name", "price"],
};
</script>

<style scoped>
.circle-size {
  font-size: 5rem;
}
</style>
