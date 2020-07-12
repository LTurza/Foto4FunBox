<template>
   <ul class="hide-on-med-and-down">
      <li v-for="btn in btns" :key="btn.id" >
         <router-link :to="btn.url">
            <i :class="btn.cls"> {{ btn.icon }} </i>
            {{ btn.name }}
         </router-link>
      </li>
   </ul>
</template>

<script>
   export default {
      name: "NaviBtns",
      props: ['btns']
   }
</script>

<style scoped>
   ul {
      list-style-type: none;
   }

   a {
      text-decoration: none;
      color: ghostwhite;
      height: 100px !important;
      padding-top: 18px;
      font-size: 1rem;
   }

   a:hover {
      color: ghostwhite;
   }

   li {
      width: 50%;
   }


</style>
