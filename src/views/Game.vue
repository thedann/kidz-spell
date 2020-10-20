<template>
  <div>
    <h3 v-text="wordSplit.join('')"></h3>
    <div class="wrapper">
      <div class>
        <WordBoxes
          :indexInFocus="this.indexInFocus"
          :callBack="this.checkCorrect"
          :wordSplit="this.wordSplit"
        ></WordBoxes>
      </div>
    </div>
    <div class="scoreBoard">
      <span class="score-label">Poäng:</span>
      <span>{{score}}</span>
    </div>
  </div>
</template>

<script>
import WordBoxes from "@/components/WordBoxes.vue";

import { makeEmptyArray } from "@/utils/util.js";

export default {
  components: {
    WordBoxes
  },
  data: () => {
    return {
      wordSplit: ["H", "E", "J"],
      inputWord: [],
      score: 0,
      indexInFocus: 0
    };
  },
  methods: {
    checkCorrect(el, index) {
      if (this.inputWord.length === 0) {
        this.inputWord = makeEmptyArray(this.wordSplit);
      }
      const inputLetter = el.target.value.toUpperCase();
      if (inputLetter === this.wordSplit[index]) {
        this.indexInFocus = index + 1;
        this.inputWord[index] = inputLetter;
        const yourWord = this.inputWord.join();
        const theAnswer = this.wordSplit.join();
        if (yourWord === theAnswer) {
          this.score++;
        }
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}

.scoreBoard {
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
}

.scoreBoard span {
  font-size: 5rem;
}

.scoreBoard .score-label {
  font-size: 3rem;
}
</style>


