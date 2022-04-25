<template>
  <header>
    <div class="container-header">
      <div class="container-img">
        <img src="@/assets/Logonetflix.png" alt="Logo" />
      </div>
      <div class="container-input">
        <input
          type="text"
          placeholder="Ricerca Film-Serie Tv"
          v-model="ricercaUtente"
          @keyup.enter="emitInput"
        />
        <button @click="emitInput">Cerca</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      ricercaUtente: "",
    };
  },
  methods: {
    emitInput() {
      this.$emit("ricercaInserita", this.ricercaUtente);
      this.ricercaUtente = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container-header {
  background-color: black;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  .container-img {
    width: 200px;
    img {
      width: 100%;
    }
  }
  .container-input {
    border: 1px solid red;
    padding: 5px;
    input {
      padding: 4px 10px;
      border-radius: 5px;
    }
    button {
      margin-left: 5px;
      padding: 5px 10px;
      border-radius: 5px;
      background-color: red;
      font-weight: bold;
      color: white;
      border: none;
      &:hover {
        outline: 1px solid red;
        outline-offset: 2px;
      }
      &:active {
        background-color: rgb(169, 16, 16);
      }
    }
  }
}
</style>
