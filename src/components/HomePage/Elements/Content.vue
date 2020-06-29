<template>
   <ul>
      <li>
         <div class="section white black-text" >
            <div class="container">
               <div class="row">
                  <div class="col s12 m12 l12">
                     <h4  class="center">{{title}}</h4>
                  </div>
                  <div :class="'col s12 m12 l6 justify ' + textSide">
                     <slot v-if="id === 1"></slot>
                     <div class="row"  v-if="id === 2">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="col l9 s8 offset-s2 offset-l3" v-for="(d,index) in desc" :key="index">
                           <i :class="'material-icons left ' + d.cls">brightness_1</i>
                           <i :class="'material-icons right ' + d.cls">brightness_1</i>
                           <span class="center">
                           {{d.desc}}
                           </span>
                           <br>
                           <br>
                        </div>
                     </div>
                  </div>
                  <div :class="'col s10 m10 l6 offset-s1 offset-m1 ' + imgSide">
                     <img :src="url" class="image z-depth-3" alt="">
                  </div>
               </div>
            </div>
         </div>
      </li>
   </ul>
</template>

<script>
   export default {
      name: "Content",
      props: ['title', 'url', 'textSide', 'imgSide','desc', 'id']
   }
</script>

<style scoped>
   .image {
      height: 100% !important;
      width: 100%;
      border-radius: 5px;

   }
   .packets{
   }

</style>
