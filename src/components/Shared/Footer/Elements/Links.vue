<template>
  <div>
    <div class="col l3 offset-l2 s12">
      <h5 class="white-text">Kontakt</h5>
    </div>
    <div
      class="col l3 offset-l1 s12 offset-s2 m5 offset-m4 links"
      v-for="link in links"
      :key="link.id"
    >
      <ul>
        <li class="left">
          <a class="white-text" :href="link.to">
            <i class="material-icons left"> {{ link.icon }} </i>
            {{ link.name }} {{ link.value }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Links",
  props: ["links"],
};
</script>

<style scoped>
@media only screen and (min-width: 1024px) {
  .links {
    margin-left: 23% !important;
  }
}
</style>
