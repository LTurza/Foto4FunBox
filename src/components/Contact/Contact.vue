<template>
  <div>
    <app-map class="map" />
    <appInfoCard />
  </div>
</template>

<script>
import Map from "./Elements/Map";
import InfoCard from "./Elements/InfoCard";

export default {
  name: "Contact",
  components: {
    appMap: Map,
    appInfoCard: InfoCard,
  },
};
</script>

<style scoped>
.map {
  margin-top: 2rem !important;
}
</style>
