<template>
   <ul class="sidenav" id="mobile">
      <li>
         <div class="user-view">
            <a href="index.html"><span class="black-text name"> Foto4FunBox </span></a>
         </div>
      </li>
      <li><div class="divider"></div></li>
      <li class="left"  v-for="tab in tabs" :key="tab.id"><a href="index.html"> <i class="material-icons"> {{tab.icon}} </i> {{ tab.name }} </a></li>

   </ul>
</template>

<script>
   export default {
      name: "SideNav",
      props: ['tabs']
   }
</script>

<style scoped>

</style>
