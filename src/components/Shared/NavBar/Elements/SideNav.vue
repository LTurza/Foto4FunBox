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
    <li class="left" v-for="btn in btns" :key="btn.id">
      <router-link :to="btn.url" >
        <i :class="btn.cls"> {{ btn.icon }} </i>
        {{ btn.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SideNav",
  props: ["btns", "name"],
};
</script>

<style scoped></style>
