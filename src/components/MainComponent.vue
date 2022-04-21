<template>
  <main>
    <div class="container-main">
      <h2>Film</h2>
      <div class="container-film">
        <FilmComponent />
      </div>
      <h2>Serie Tv</h2>
      <div class="container-Serie">
        <SerieTvComponent />
      </div>
    </div>
  </main>
</template>


<script>
import FilmComponent from "@/components/FilmComponent.vue";
import SerieTvComponent from "@/components/SerieTvComponent.vue";
export default {
  name: "MainComponent",
  props: {
    serieTv: Array,
    film: Array,
  },
  components: {
    FilmComponent,
    SerieTvComponent,
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
