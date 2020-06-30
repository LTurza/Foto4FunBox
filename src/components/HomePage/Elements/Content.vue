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
                     <slot v-if="id !== 2"></slot>
                     <div class="row  packets"  v-if="id === 2">
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
                  <div  v-if="id !== 4" :class="'col s10 m10 l6 offset-s1 offset-m1 img' + imgSide">
                     <img :src="url" class="image z-depth-3" alt="image">
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
      width: 100%;
      border-radius: 5px;

   }
   @media only screen and (max-width: 360px) {
      .img {
         float: left !important;
         height: 100% !important;
      }
   }
   @media only screen and (max-width: 1024px) {
      .packets {
         margin-top: 1%;
      }
      .image {
         margin-top: 5% !important;
      }
   }
   @media only screen and (min-width: 1025px) {
      .packets {
         margin-top: 10%;
      }
   }
   .section {
      margin-top: 0 !important;
   }


</style>
