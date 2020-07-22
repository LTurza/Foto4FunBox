<template>
  <div>
    <appParallaxBg cls="bg-2" class="hide-on-med-and-down" />
    <app-packets />
  </div>
</template>

<script>
import ParallaxBg from "../Shared/ParalaxBg/ParallaxBg";
import Packets from "./Elements/PacketsList";

export default {
  name: "Packets",
  components: {
    appParallaxBg: ParallaxBg,
    appPackets: Packets,
  },
  data() {
    return {
      parallaxSource: require("./../../assets/index-bg-2.svg"),
    };
  },
};
</script>

<style scoped></style>
