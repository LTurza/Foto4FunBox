<template>
  <div>
    <app-bg-image img-alt="background" />
    <app-content
      v-for="content in contentTab"
      :key="content.id"
      :title="content.title"
      :url="content.image"
      :textSide="content.textSide"
      :imgSide="content.imgSide"
      :desc="content.desc"
      :id="content.id"
    >
      <div
        v-if="content.id === 1"
        class="font justify"
        v-html="content.desc"
      ></div>
    </app-content>
    <appParallaxBg cls="bg-1" class="hide-on-med-and-down" />
    <appParallaxBg cls="bg-1-mobile" class="hide-on-large-only" />

    <app-content
      v-for="content in contentTab2"
      :key="content.id"
      :title="content.title"
      :url="content.image"
      :textSide="content.textSide"
      :imgSide="content.imgSide"
      :desc="content.desc"
      :id="content.id"
    >
      <div class="font justify" v-html="content.desc"></div>
    </app-content>
    <appParallaxBg cls="bg-2" class="hide-on-med-and-down" />
    <!-- <app-paralax-bg
      :source="parallaxMobile2"
      imgAlt="parallax2"
      class="hide-on-large-only"
    /> -->
  </div>
</template>

<script>
import BgImage from "./Elements/BgImage";
import Content from "./Elements/Content";
import ParallaxBg from "../Shared/ParalaxBg/ParallaxBg";

export default {
  name: "HomePage",
  components: {
    appBgImage: BgImage,
    appContent: Content,
    appParallaxBg: ParallaxBg,
  },
  data() {
    return {
      bgImage: require("../../assets/bg2.webp"),
      parallax: "./../../../assets/index-bg-1.svg",
      parallax2: require("./../../assets/index-bg-2.svg"),
      parallaxMobile: require("./../../assets/contentMobile1.svg"),
      parallaxMobile2: require("./../../assets/contentMobile2.svg"),
      contentTab: [
        {
          id: 1,
          title: "Zróbmy sobie fote!",
          desc:
            '<span class="font">Pomysł polega na tym, że do swojej dyspozycji dostajecie fotobudkę, która umożliwi Wam wykonanie zdjęć bez udziału fotografa.\n' +
            "Uczestnicy jakiejkolwiek imprezy za pomocą ekranu dotykowego uruchamiają foto budek przyciskiem\n" +
            '<span class="indigo-text">START</span>, która wykona zdjęcie lub serie zdjęć.\n' +
            '<span class="indigo-text">Po około 10 sek.</span> Można odebrać już wydrukowane zdjęcia! Zdjęcia standardowo drukowane są o wymiarach\n' +
            '<span class="indigo-text">10x15 cm. PERSONALIZACJA:\n' +
            "</span> tła, tekstu, daty, ramki, grafiki. Wybór różnej ilości i układu zdjęć na wydruku.",
          image: require("./../../assets/content11.jpg"),
          textSide: "left",
          imgSide: "right",
        },
        {
          id: 2,
          title: "Pakiety",
          desc: [
            { cls: "grey-text ", desc: "Pakiet miniBox" },
            { cls: "yellow-text", desc: "Pakiet standardBox" },
            { cls: "pink-text", desc: "Pakiet standardBox+" },
            { cls: "indigo-text", desc: "Pakiet VIPBox" },
          ],
          image: require("./../../assets/pakiety.webp"),
          textSide: "right",
          imgSide: "left",
        },
      ],
      contentTab2: [
        {
          id: 3,
          title: "Gadżety",
          desc:
            "<ul>" +
            "<li>Do dyspozycji macie śmieszne gadżety:</li>" +
            "<li>kapelusze</li>" +
            "<li>okulary</li>" +
            "<li>wąsy</li>" +
            "<li>usta</li>" +
            "<li>peruki</li>" +
            "<li>i wiele innych, które urozmaicą waszą zabawę!</li>" +
            "</ul>",
          image: require("./../../assets/gadzety.jpg"),
          textSide: "left",
          imgSide: "right",
        },
        {
          id: 4,
          title: "Najczęstsze pytania",
          desc: "",
          textSide: "center",
        },
      ],
    };
  },
};
</script>

<style scoped>
.justify {
  text-align: justify;
}
@media only screen and (min-width: 1025px) {
  .font {
    margin-top: 15%;
  }
  .container {
    width: 100vw !important;
  }
}
</style>
