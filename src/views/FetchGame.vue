<template>
  <div class="fetch-game">
    <h2>Hämta ett KidzSpell-spel som någon annan skapat</h2>
    <br>
    <input class="text" v-model="code">
    <br>
    <br>
    <button
      class="button positive-button"
      v-on:click="convertStringToGame"
      type="button"
    >Hämta någons spel</button>
    <br>
    <br>
    <button
      class="button positive-button"
      v-on:click="convertGameToString"
      type="button"
    >Dela ditt spel som länk</button>
    <span></span>
  </div>
</template>

<script>
import {
  convertQuestionsToShareString,
  convertStringIntoQuiz
} from "@/utils/util.js";

export default {
  name: "FetchGame",
  props: {},
  data: () => {
    return {
      code: ""
    };
  },
  methods: {
    convertGameToString: function() {
      const urlString = convertQuestionsToShareString();
      console.log("url string ", urlString);
    },
    convertStringToGame: function() {
      const questions = convertStringIntoQuiz(this.code);
      console.log(questions);
    }
  }
};
</script>


<style scoped>
.text {
  width: 20rem;
  height: 4rem;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
}
</style>

