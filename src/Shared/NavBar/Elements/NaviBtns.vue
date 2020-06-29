<template>
   <ul id="nav-mobile" class="hide-on-med-and-down">
      <li v-for="btn in btns" :key="btn.id"><a href=""> <i :class="btn.cls"> {{ btn.icon }} </i> {{ btn.name }}</a></li>
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
      color: black;
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
