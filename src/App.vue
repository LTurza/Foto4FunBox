<template>
  <div id="app">
    <app-nav-bar :key="rerender" />
    <transition name="slide-left-fade" mode="out-in">
      <router-view />
    </transition>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      :css="false"
      mode="out-in"
      appear
    >
      <app-footer :key="rerender" />
    </transition>
  </div>
</template>

<script>
import NavBar from "./components/Shared/NavBar/NavBar";
import Footer from "./components/Shared/Footer/Footer";

export default {
  name: "App",
  components: {
    appNavBar: NavBar,
    appFooter: Footer,
  },
  data() {
    return {
      color: "",
    };
  },
  computed: {
    rerender() {
      return this.$route.params.color;
    },
  },
  methods: {
    beforeEnter(el) {
      this.elementWidth = 0;
      el.style.opacity = this.elementWidth + "%";
      el.style.transform = "translateY( 4rem )";
    },
    enter(el, done) {
      setInterval(null, 1);
      let round = 1;
      let trenslate = 4;
      const interval = setInterval(() => {
        el.style.opacity = this.elementWidth + round * 10 + "%";
        trenslate -= 0.4;
        el.style.transform = "translateY(" + trenslate + "rem )";

        round++;
        if (round > 10) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
  },
};
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
  transition: all 0.5s ease;
}

.slide-up-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-up-fade-enter,
.slide-up-fade-leave-to {
  transform: translatey(4rem);
  opacity: 0;
}

.slide-left-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-left-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-fade-enter,
.slide-left-fade-leave-to {
  transform: translateX(2rem);
  opacity: 0;
}
</style>
