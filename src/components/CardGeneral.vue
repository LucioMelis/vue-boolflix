<template>
  <div class="content-card">
    <div>
      <img class="poster" :src="ricercaPoster(poster)" :alt="titolo" />
    </div>
    <h2>{{ titolo }}</h2>
    <p>Titolo originale: {{ titoloOriginale }}</p>
    <p>
      Lingua:
      <img :src="ricercaBandiera(lingua)" :alt="lingua" />
    </p>
    <p>Voto: {{ voto }}</p>
  </div>
</template>

<script>
export default {
  name: "CardGeneral",
  props: {
    titolo: String,
    titoloOriginale: String,
    lingua: String,
    voto: Number,
    poster: String,
  },
  methods: {
    ricercaPoster(img) {
      return `https://image.tmdb.org/t/p/original/${img}`;
    },
    ricercaBandiera(nomebandiera) {
      if (nomebandiera === "en") {
        return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/GB.svg`;
      } else if (nomebandiera === "ja") {
        return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/JP.svg`;
      } else if (nomebandiera === "ko") {
        return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/KR.svg`;
      } else if (nomebandiera === "da") {
        return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/DK.svg`;
      } else if (nomebandiera === "te") {
        return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/IN.svg`;
      }
      return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/${nomebandiera.toUpperCase()}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
p > img {
  width: 20px;
}
.poster {
  width: 100%;
  aspect-ratio: 2/3;
}
</style>
