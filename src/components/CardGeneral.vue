<template>
  <!-- Contenitore immagine  -->
  <div
    class="content-card"
    @mouseover="cambioValoreOver"
    @mouseleave="cambioValoreLeave"
  >
    <div class="container-img" v-if="!active">
      <img
        class="poster"
        :src="ricercaPoster(poster)"
        :alt="titolo"
        @error="imgNonTrovata"
      />
    </div>
    <!-- Contenitore Info  -->
    <div class="container-info" v-else>
      <!-- titolo  -->
      <h2>{{ titolo }}</h2>
      <!-- titolo originale  -->
      <p>
        Titolo originale: <span class="block">{{ titoloOriginale }}</span>
      </p>
      <p>
        <!-- lingua  -->
        Lingua:
        <img
          :src="ricercaBandiera(lingua)"
          :alt="lingua"
          @error="bandieraNonTrovata"
        />
      </p>
      <p>
        Voto: <span>{{ votoIntero }}</span>
        <font-awesome-icon
          v-for="(stella, index) in 5"
          :key="index"
          :icon="[inserisciStella(index), 'fa-star']"
        />
      </p>
      <p>
        Trama:
        <span class="block">{{ info }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardGeneral",
  data() {
    return {
      active: false,
    };
  },
  props: {
    titolo: String,
    titoloOriginale: String,
    lingua: String,
    voto: Number,
    poster: String,
    info: String,
  },
  computed: {
    votoIntero() {
      return Math.ceil(this.voto / 2);
    },
  },
  methods: {
    cambioValoreOver() {
      this.active = true;
    },
    cambioValoreLeave() {
      this.active = false;
    },
    ricercaPoster(img) {
      return `https://image.tmdb.org/t/p/original/${img}`;
    },
    imgNonTrovata(error) {
      error.target.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png";
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
    bandieraNonTrovata(error) {
      error.target.src =
        "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found-300x225.jpg";
    },
    inserisciStella(indice) {
      if (this.votoIntero <= indice) {
        return "fa-regular";
      }
      return "fa-solid";
    },
  },
};
</script>

<style lang="scss" scoped>
.container-img {
  width: 100%;
  .poster {
    width: 100%;
    aspect-ratio: 2/3;
  }
}
.container-info {
  height: 100%;
  padding-left: 8px;
  padding-top: 5px;
  border-radius: 10px;
  p > img {
    width: 20px;
  }
  .fa-star {
    color: orange;
  }
  p {
    font-weight: bold;
    font-size: 15px;
    span {
      font-size: 13px;
      font-weight: normal;
    }
    .block {
      display: block;
    }
  }
}
</style>
