<template>
   <footer class="page-footer indigo">
      <div class="row">
         <div class="col l6">
            <h5>Foto4FunBox</h5>
         </div>

         <app-links :links="links"/>
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
         appLinks: Links
      },
      data () {
         return {
            links: [
               {id: 'email', icon: 'email', value: 'info@foto4funbox.pl'},
               {id: 'phone1', icon: 'call', value: '503783232'},
               {id: 'phone2', icon: 'call', value: '513989608'},
            ]
         }
      }

   }
</script>

<style scoped>

</style>
