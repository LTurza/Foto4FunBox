<template>
  <div class="container">
    <table class="highlight hide-on-small-only">
      <thead>
        <tr>
          <th class="th30">Nazwa</th>
          <th class="th60">Zawartość Pakietu</th>
          <th>Cena</th>
        </tr>
      </thead>
      <app-packet
        v-for="packet in packetList"
        :key="packet.id"
        :name="packet.name"
        :price="packet.price"
        :color="packet.color"
      >
        <div v-html="packet.desc"></div>
      </app-packet>
      <app-packets-footer :name="packetFooter.name" :price="packetFooter.price">
        <div v-html="packetFooter.desc" />
      </app-packets-footer>
    </table>
    <app-packet-mobile
      v-for="packet in packetList"
      :key="packet.id"
      :color="packet.color"
      :name="packet.name"
      :price="packet.price"
      class="hide-on-med-and-up"
    >
      <div class="packet-font justify" v-html="packet.desc" />
    </app-packet-mobile>
    <app-packet-footer-mobile
      class="hide-on-med-and-up"
      :name="packetFooter.name"
      :price="packetFooter.price"
    >
      <div v-html="packetFooter.desc"></div>
    </app-packet-footer-mobile>
  </div>
</template>

<script>
import Packet from "./ElementsPackets/Packet";
import PacketsFooter from "./ElementsPackets/PacketsFooter";
import PacketMobile from "./ElementsPackets/PacketMobile";
import PacketFooterMobile from "./ElementsPackets/PacketFooterMobile";

export default {
  name: "PacketsList",
  components: {
    appPacket: Packet,
    appPacketsFooter: PacketsFooter,
    appPacketMobile: PacketMobile,
    appPacketFooterMobile: PacketFooterMobile,
  },
  data() {
    return {
      packetList: [
        {
          id: "miniBox",
          name: "Pakiet miniBox",
          desc:
            '<span class="packet-font">Wynajem Foto4funbox na 1 godzinę wraz z obsługą\n <br>' +
            "Nielimitowana liczba zdjęć\n <br>" +
            "Personalizacja zdjęcia\n" +
            "Wybór różnej ilości zdjęć i układu zdjęć na wydruku\n <br>" +
            "Zabawne rekwizyty\n <br>" +
            "\n<br> <br>" +
            "Płyta DVD ze wszystkimi zdjęciami\n <br>" +
            "Każda kolejna godzina 250zł  <br><br></span>",
          price: "450zł",
          color: "grey-text",
        },
        {
          id: "standardBox",
          name: "Pakiet standardBox",
          desc:
            '<span class="packet-font">Wynajem Foto4funbox na 2 godziny wraz z obsługą <br>' +
            "Nielimitowana liczba zdjęć <br>" +
            "Personalizacja zdjęcia <br>" +
            "Wybór różnej ilości zdjęć i układu zdjęć na wydruku <br>" +
            "Zabawne rekwizyty <br>" +
            "<br> <br>" +
            "Pendrive ze wszystkimi zdjęciami <br>" +
            "Galeria zdjęć online przez 3 miesiące<br>" +
            "Każda kolejna godzina 200zł <br><br></span>",
          price: "700zł",
          color: "yellow-text",
        },
        {
          id: "standardBox+",
          name: "Pakiet standardBox+",
          desc:
            '<span class="packet-font">Wynajem Foto4funbox na 3 godziny wraz z obsługą <br>' +
            "Nielimitowana liczba zdjęć <br>" +
            "Personalizacja zdjęcia <br>" +
            "Wybór różnej ilości zdjęć i układu zdjęć na wydruku <br>" +
            "Zabawne rekwizyty <br>" +
            "<br> <br>" +
            "Pendrive ze wszystkimi zdjęciami<br>" +
            "Galeria zdjęć online przez 6 miesięcy<br>" +
            "Każda kolejna godzina 200zł  <br><br></span>",
          price: "900zł",
          color: "pink-text",
        },
        {
          id: "vipBox",
          name: "Pakiet VIPBox",
          desc:
            '<span class="left">Liczba godzin działania Foto4funbox wraz z obsługą do uzgodnienia <br>' +
            "Nielimitowana liczba zdjęć <br>" +
            "Personalizacja zdjęcia <br>" +
            "Wybór różnej ilości i układu zdjęć na wydruku <br>" +
            "Zabawne rekwizyty <br>" +
            "Personalizacja menu do uzgodnienia <br>" +
            "Branding urządzenia do uzgodnienia <br>" +
            "<br> <br>" +
            "Pendrive ze wszystkimi zdjęciami <br>" +
            "Galeria zdjęć online przez 6 miesięcy<br>" +
            "Każda kolejna godzina do uzgodnienia <br><br></span>",
          price: "Cena do uzgodnienia",
          color: "blue-text",
        },
      ],
      packetFooter: {
        id: "tableFooter",
        name: "Dodatki",
        desc:
          "<span>Opcje dodatkowe za dopłatą: <br>" +
          "Dodatkowy pendrive ze zdjęciami - 30 PLN <br>" +
          "Dodatkowa płyta DVD ze zdjęciami - 15 PLN <br>" +
          "Indywidualny branding urządzenia (cena do uzgodnienia) <br>" +
          "Księga gości (cena zależna od wyboru albumu oraz ilości odbitek) <br>" +
          "Dodatkowy wydruk wszystkich zdjęć (1 PLN/szt. zdjęcia) <br>" +
          "Personalizacja wyglądu fotobudki (cena do uzgodnienia) <br>" +
          "Dojazd powyżej 50 km 1 PLN/1km </span>",
        price: "*podane ceny są pełnym pakietem wyjściowym do modyfikacji",
      },
    };
  },
};
</script>

<style scoped>
.th30 {
  width: 25% !important;
}

.th60 {
  width: 55% !important;
}
</style>
