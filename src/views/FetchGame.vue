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
    <div class="game-string">
      <p v-text="gameAsString"></p>
    </div>
    <div class="game-from-string">
      <ul>
        <li v-for="(item, index) in questionsFromString" :key="index">
          <div>
            <span>{{item.question}}</span>
            <span class="answer-span">{{item.answer}}</span>
          </div>
        </li>
      </ul>
    </div>
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
      code: "",
      gameAsString: "",
      questionsFromString: [],
    };
  },
  methods: {
    convertGameToString: function() {
      const urlString = convertQuestionsToShareString();
      this.gameAsString = urlString;
    },
    convertStringToGame: function() {
      const questions = convertStringIntoQuiz(this.code);
      this.questionsFromString = questions;
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

.game-string {
  margin: 2rem auto 0;
  max-width: 25rem;
  text-align: center;
  word-break: break-all;
}

</style>

