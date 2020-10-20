<template>
  <div class="box-wrapper" :key="word">
    <WordBox
      v-for="(words, index) in lettersInWord"
      :key="index"
      v-on:update-text="checkCorrect"
      :index="index"
      :isInFocus="indexInFocus === index"
      :isCorrect="correctIndexes.includes(index)"
    >{{words}}</WordBox>
  </div>
</template>

<script>
import WordBox from "@/components/WordBox.vue";
import { makeEmptyArray } from "@/utils/util.js";

export default {
  components: {
    WordBox
  },
  props: {
    word: String,
    callBack: Function
  },
  data: () => {
    return {
      correctIndexes: [],
      inputWord: [],
      indexInFocus: 0
    };
  },
  computed: {
    lettersInWord: function() {
      return this.word.split("");
    }
  },
  methods: {
    checkCorrect(el, index) {
      const wordSplit = this.word.split("");
      if (this.inputWord.length === 0) {
        this.inputWord = makeEmptyArray(wordSplit);
      }
      const inputLetter = el.target.value.toUpperCase();
      if (inputLetter === wordSplit[index]) {
        this.correctIndexes.push(index);
        this.indexInFocus = index + 1;
        this.inputWord[index] = inputLetter;
        const yourWord = this.inputWord.join("");
        if (yourWord === this.word) {
          this.callBack(yourWord);
          this.indexInFocus = 0;
          this.correctIndexes = [];
        }
      }
    }
  }
};
</script>

<style scoped>
.box-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 40rem;
  min-width: 15rem;
}
</style>


