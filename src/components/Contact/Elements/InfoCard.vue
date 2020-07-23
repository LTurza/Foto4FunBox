<template>
  <div class="section white black-text">
    <div class="container">
      <div class="row">
        <div class="col l4 s12 hide-on-med-and-down">
          <h1 class="left">O firmie</h1>
        </div>
        <div class="col l5 m8 s4 offset-s4 offset-m4 offset-l3">
          <h1 class="left">Dane kontaktowe</h1>
        </div>
      </div>
      <div class="row">
        <div class="col m8 s8 offset-s3 l4 offset-m4">
          <span class="left" style="font-size: 1.2rem">
            Foto4FunBox <br />
            <span style="font-size: 1rem"> Grzegorz Polizo - właściciel</span>
            <br /><br />
            <span style="font-size: 1rem"> Polowa 33, 43-600 Jaworzno</span>
            <br />
            <br />
          </span>
        </div>
        <div class="col l5 m8 s10 offset-s2 offset-m4 offset-l3">
          <span class="left" style="font-size: 1.2rem">
            <a href="mailto:info@foto4funbox.pl"
              ><i class="material-icons left">email</i
              >email:info@foto4funbox.pl</a
            >
            <br />
            <a href="tel:503783232" style="font-size: 1.2rem"
              ><i class="material-icons left">call</i>tel-1:503783232</a
            >
            <br />
            <a href="tel:513989608" style="font-size: 1.2rem"
              ><i class="material-icons left">call</i>tel-2:513989608</a
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  align-content: left;
}
span {
  text-align: left;
}
a {
  color: black;
}
</style>
