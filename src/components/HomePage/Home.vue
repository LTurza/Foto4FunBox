<template>
   <div>
      <app-bg-image :source="source"/>
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
         <div v-if="content.id === 1" class="font justify" v-html="content.desc"></div>
      </app-content>
      <app-paralax-bg :source="source"/>
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
         <div v-if="content.id === 1" class="font justify" v-html="content.desc"></div>
      </app-content>
   </div>
</template>

<script>
   import BgImage from "./Elements/BgImage";
   import Content from "./Elements/Content";
   import ParallaxBg from "./Elements/ParallaxBg";

   export default {
      name: "HomePage",
      data() {
         return {
            source: require('./../../assets/bg.jpg'),
            contentTab: [
               {
                  id: 1,
                  title: 'Zróbmy sobie fote!',
                  desc: '<span class="font">Pomysł polega na tym, że do swojej dyspozycji dostajecie fotobudkę, która umożliwi Wam wykonanie zdjęć bez udziału fotografa.\n' +
                      'Uczestnicy jakiejkolwiek imprezy za pomocą ekranu dotykowego uruchamiają foto budek przyciskiem\n' +
                      '<span class="indigo-text">START</span>, która wykona zdjęcie lub serie zdjęć.\n' +
                      '<span class="indigo-text">Po około 10 sek.</span> Można odebrać już wydrukowane zdjęcia! Zdjęcia standardowo drukowane są o wymiarach\n' +
                      '<span class="indigo-text">10x15 cm. PERSONALIZACJA:\n' +
                      '</span> tła, tekstu, daty, ramki, grafiki. Wybór różnej ilości i układu zdjęć na wydruku.',
                  image: require('./../../assets/bg.jpg'),
                  textSide: 'left',
                  imgSide: 'right'
               },
               {
                  id: 2,
                  title: 'Pakiety',
                  desc: [
                     { cls: 'grey-text', desc: 'Pakiet miniBox'},
                     { cls: 'yellow-text', desc: 'Pakiet standardBox'},
                     { cls: 'pink-text', desc: 'Pakiet standardBox+'},
                     { cls: 'indigo-text', desc: 'Pakiet VIPBox'}
                  ],
                  image: require('./../../assets/bg.jpg'),
                  textSide: 'right',
                  imgSide: 'left',
               }
            ]
         }
      },
      components: {
         appBgImage: BgImage,
         appContent: Content,
         appParalaxBg: ParallaxBg
      }
   }
</script>

<style scoped>
   .justify {
      text-align: justify;
   }
   .font {
      font-size: 1.2rem;
   }
   @media only screen and (max-width: 1024px) {
      .font {
         font-size: 1rem !important;
      }
   }
   @media only screen and (min-width: 1025px) {
      .font {
         margin-top: 5%;
      }
   }

</style>
