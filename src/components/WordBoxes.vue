<template>
  <transition-group name="slide" class="box-wrapper" :key="word">
    <WordBox
      v-for="(words, index) in lettersInWord"
      :key="index"
      v-on:update-text="checkCorrect"
      :index="index"
      :isInFocus="indexInFocus === index"
      :isCorrect="correctIndexes.includes(index)"
      :isInCorrect="inCorrectIndexes.includes(index)"
    >{{words}}</WordBox>
  </transition-group>
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
      inCorrectIndexes: [],
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
      const inputLetter = el.target.value.toUpperCase();
      if (inputLetter) {
        const wordSplit = this.word.split("");
        if (this.inputWord.length === 0) {
          this.inputWord = makeEmptyArray(wordSplit);
        }
        if (inputLetter === wordSplit[index]) {
          this.inCorrectIndexes = [];
          this.correctIndexes.push(index);
          this.indexInFocus = index + 1;
          this.inputWord[index] = inputLetter;
          const yourWord = this.inputWord.join("");
          if (yourWord === this.word) {
            this.callBack(yourWord);
            this.indexInFocus = 0;
            this.correctIndexes = [];
          }
        } else {
          this.inCorrectIndexes.push(index);
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.box-wrapper input {
  margin-right: 1.5rem;
}

.box-wrapper input:last-child {
  margin-right: 0;
}

@media only screen and (max-width: 600px) {
  .box-wrapper {
    max-width: 320px;
  }

  .box-wrapper input {
    margin-right: 0.5rem;
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>


