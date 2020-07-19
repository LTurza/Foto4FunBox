<template>
  <ul class="sidenav" id="mobile">
    <li>
      <div class="user-view">
        <a href="index.html">
          <span class="black-text name"> {{ name }} </span>
        </a>
      </div>
    </li>
    <li>
      <div class="divider"></div>
    </li>
    <li class="left" v-for="tab in tabs" :key="tab.id">
      <a href="#">
        <i class="material-icons"> {{ tab.icon }} </i>
        {{ tab.name }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SideNav",
  props: ["tabs", "name"],
};
</script>

<style scoped></style>
