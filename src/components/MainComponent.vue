<template>
  <main>
    <div class="container-main">
      <h1 v-if="film.length > 0">FILM</h1>
      <FilmComponent :film="film" />
      <h1 v-if="serieTv.length > 0">SERIE TV</h1>
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
      color: rgb(218, 5, 5);
      width: 200px;
      margin: 5px auto;
      text-align: center;
      background-color: black;
      border-radius: 10px;
    }
  }
}
</style>
