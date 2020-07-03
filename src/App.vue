<template>
   <div id="app">

         <app-nav-bar/>
      <transition name="slide-left-fade" mode="out-in">
         <router-view/>
      </transition>
      <transition name="slide-up-fade" appear mode="out-in">
         <app-footer/>
      </transition>
   </div>
</template>

<script>

   import NavBar from "./components/Shared/NavBar/NavBar";
   import Footer from "./components/Shared/Footer/Footer";

   export default {
      name: 'App',
      components: {
         appNavBar: NavBar,
         appFooter: Footer,
      },
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

   .slide-up-fade-enter-active {
      transition: all .5s ease;
   }

   .slide-up-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }

   .slide-up-fade-enter, .slide-up-fade-leave-to {
      transform: translatey(4rem);
      opacity: 0;
   }

   .slide-left-fade-enter-active {
      transition: all .5s ease;
   }

   .slide-left-fade-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }

   .slide-left-fade-enter, .slide-left-fade-leave-to {
      transform: translateX(2rem);
      opacity: 0;
   }
</style>
