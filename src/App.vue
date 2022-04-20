<template>
  <div id="app">
    <HeaderComponent />
    <MainComponent />
  </div>
</template>


<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
// import axios from "axios";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
  },
};
</script>

<style lang="scss">
@import "@/assets/style/import";
</style>
