<template>
  <div>
    <appParallaxBg cls="bg-3" class="hide-on-med-and-down" />
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Promocja</th>
            <th>W ofercie</th>
            <th>Od</th>
            <th>Do</th>
          </tr>
        </thead>
        <app-promo
          v-for="promo in promoList"
          :key="promo.id"
          :name="promo.name"
          :offers="promo.offers"
          :from="promo.from"
          :to="promo.to"
        />
      </table>
    </div>
  </div>
</template>

<script>
import ParallaxBg from "../Shared/ParalaxBg/ParallaxBg";
import Promo from "./Elements/Promo";

export default {
  name: "Promotion",
  components: {
    appParallaxBg: ParallaxBg,
    appPromo: Promo,
  },
  data() {
    return {
      parallaxSource: require("./../../assets/index-bg-3.svg"),
      promoList: [
        {
          id: 1,
          name: "Brak aktualnych promocji",
          offers: "---",
          from: "--",
          to: "--",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
