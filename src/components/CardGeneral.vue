<template>
  <div class="content-card">
    <h2>{{ title }}</h2>
    <h4>Titolo originale: {{ titoloOriginale }}</h4>
    <p>Lingua:{{ lingua }}</p>
    <p>Voto: {{ voto }}</p>
  </div>
</template>

<script>
export default {
  name: "CardGeneral",
  props: {
    title: String,
    titoloOriginale: String,
    lingua: String,
    voto: Number,
  },
};
</script>

<style lang="scss" scoped>
</style>
