<template>
  <div class="container-components">
    <div
      class="card slit-in-vertical"
      v-for="singoliFilm in film"
      :key="singoliFilm.id"
    >
      <CardGeneral
        :titolo="singoliFilm.title"
        :titoloOriginale="singoliFilm.original_title"
        :lingua="singoliFilm.original_language"
        :voto="singoliFilm.vote_average"
        :poster="singoliFilm.poster_path"
        :info="singoliFilm.overview"
        :id="singoliFilm.id"
        :tipo="'movie'"
      />
    </div>
  </div>
</template>

<script>
import CardGeneral from "@/components/CardGeneral.vue";
export default {
  name: "FilmComponent",
  components: {
    CardGeneral,
  },
  props: {
    film: Array,
  },
};
</script>

<style lang="scss" scoped>
// 1. Titolo
// 2. Titolo Originale
// 3. Lingua
// 4. Voto
</style>>
