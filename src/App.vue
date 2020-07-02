<template>
  <div id="app">
    <app-nav-bar/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>

import NavBar from "./components/Shared/NavBar/NavBar";
import Footer from "./components/Shared/Footer/Footer";

export default {
  name: 'App',
  components: {
  appNavBar: NavBar,
    appFooter: Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-display: swap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 1.2rem;
}
@media only screen and (max-width: 1024px) {
  .font {
    font-size: 1rem !important;
  }
}
</style>
