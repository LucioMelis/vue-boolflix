<template>
  <div id="app">
    <HeaderComponent @ricercaInserita="chiamataApi" />
    <MainComponent :serieTv="arraySerieTv" :film="arrayFilm" />
  </div>
</template>


<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import axios from "axios";
import { apiKey } from "@/api";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      apiUrl: "https://api.themoviedb.org/3/search/",
      apiKey: apiKey,
      arraySerieTv: [],
      arrayFilm: [],
    };
  },
  methods: {
    // filtro per il dato ricevuto in emit e per dare il valore
    // corrispondente a query
    chiamataApi(ricerca) {
      if (ricerca !== "") {
        const params = {
          query: ricerca,
          api_key: this.apiKey,
          language: "it-IT",
        };
        // *********** chiamata Serie Tv **********
        axios
          .get(this.apiUrl + "tv", { params })
          .then((response) => {
            // console.log(response.data.results);
            this.arraySerieTv = response.data.results;
            // console.log(this.arraySerieTv);
          })
          .catch((error) => {
            console.log(error);
          });
        // *********** chiamata Film *************
        axios
          .get(this.apiUrl + "movie", { params })
          .then((response) => {
            // console.log(response.data.results);
            this.arrayFilm = response.data.results;
            // console.log(this.arrayFilm);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/style/import";
</style>
