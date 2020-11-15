<template>
  <div class="fetch-game">
    <h2>Hämta ett KidzSpell-spel som någon annan skapat</h2>
    <br>
    <input class="text">
    <br>
    <br>
    <button
      class="button positive-button"
      v-on:click="fetchGame"
      type="button"
    >Hämta någons spel</button>
    <br>
    <br>
    <button
      class="button positive-button"
      v-on:click="sendGame"
      type="button"
    >Dela ditt spel som länk</button>
    <span></span>
  </div>
</template>

<style scoped>
.text {
  width: 20rem;
  height: 4rem;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
}
</style>

