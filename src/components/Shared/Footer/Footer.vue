<template>
  <footer :class="'page-footer indigo ' + color">
    <div class="row">
      <div class="col l6 s12">
        <br /><br />
        <h5>Foto4FunBox</h5>
        <br /><br />
      </div>
      <app-links :links="links" />
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2020 Łukasz Turza
      </div>
    </div>
  </footer>
</template>

<script>
import Links from "./Elements/Links";

export default {
  name: "Footer",
  components: {
    appLinks: Links,
  },
  data() {
    return {
      links: [
        {
          id: "email",
          icon: "email",
          value: "info@foto4funbox.pl",
          to: "mailto:info@foto4funbox.pl",
          name: "e-mail: ",
        },
        {
          id: "phone1",
          icon: "call",
          value: "503783232",
          to: "tel:503783232",
          name: "tel-1: ",
        },
        {
          id: "phone2",
          icon: "call",
          value: "513989608",
          to: "tel:513989608",
          name: "tel-2: ",
        },
      ],
      color: this.$route.params.color,
    };
  },
};
</script>

<style scoped></style>
