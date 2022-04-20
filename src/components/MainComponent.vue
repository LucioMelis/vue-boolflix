<template>
  <main>
    <div class="container-main">
      <h2>Film</h2>
      <div class="container-film">
        <div v-for="(film, index) in film" :key="index">
          <!-- devo stampare titolo, titolo originale,lingua,voto -->
          <h1>Ciao</h1>
        </div>
      </div>
      <h2>Serie Tv</h2>
      <div class="container-Serie"></div>
    </div>
  </main>
</template>


<script>
export default {
  name: "MainComponent",
  props: {
    serieTv: Array,
    film: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container-main {
  height: 100vh;
  background-image: url("@/assets/netflix-image.png");
  h2 {
    color: red;
    text-align: center;
  }
}
</style>
