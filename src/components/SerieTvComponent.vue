<template>
  <div class="container-components">
    <div class="card" v-for="singoleSerie in serieTv" :key="singoleSerie.id">
      <CardGeneral
        :titolo="singoleSerie.name"
        :titoloOriginale="singoleSerie.original_name"
        :lingua="singoleSerie.original_language"
        :voto="singoleSerie.vote_average"
        :poster="singoleSerie.poster_path"
        :info="singoleSerie.overview"
        :id="singoleSerie.id"
        :tipo="'tv'"
      />
    </div>
  </div>
</template>

<script>
import CardGeneral from "@/components/CardGeneral.vue";
export default {
  name: "SerieTvComponent",
  components: {
    CardGeneral,
  },
  props: {
    serieTv: Array,
  },
};
</script>

<style lang="scss" scoped>
// 1. Titolo
// 2. Titolo Originale
// 3. Lingua
// 4. Voto
</style>>
