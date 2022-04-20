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
          @keyup.enter="$emit('ricercaInserita', ricercaUtente)"
        />
        <button @click="$emit('ricercaInserita', ricercaUtente)">Cerca</button>
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
    border: 2px solid red;
    padding: 5px;
    input {
      padding: 5px 10px;
    }
    button {
      margin-left: 5px;
      padding: 5px 10px;
      border-radius: 5px;
      background-color: red;
      font-weight: bold;
      color: white;
    }
  }
}
</style>
