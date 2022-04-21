<template>
  <main>
    <div class="container-main">
      <h1 v-if="film.length > 0">Film</h1>
      <FilmComponent :film="film" />
      <h1 v-if="serieTv.length > 0">Serie Tv</h1>
      <SerieTvComponent :serieTv="serieTv" />
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
main {
  height: calc(100vh - 105px);
  overflow-y: auto;
  .container-main {
    h1 {
      color: red;
      text-align: center;
    }
  }
}
</style>
