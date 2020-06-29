<template>
  <div id="app">
    <app-nav-bar/>
    <router-view/>
  </div>
</template>

<script>

import NavBar from "./components/Shared/NavBar/NavBar";

export default {
  name: 'App',
  components: {
  appNavBar: NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
