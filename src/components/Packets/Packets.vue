<template>
   <div>
      <app-paralax-bg :source="parallaxSource" />
      <app-packets/>
   </div>
</template>

<script>
   import ParallaxBg from "../Shared/ParalaxBg/ParallaxBg";
   import Packets from "./Elements/PacketsList";

   export default {
      name: "Packets",
      components: {
         appParalaxBg: ParallaxBg,
         appPackets: Packets,
      },
      data () {
         return {
            parallaxSource: require('./../../assets/index-bg-2.svg')
         }
      }
   }
</script>

<style scoped>

</style>
