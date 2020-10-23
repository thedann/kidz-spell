<template>
  <div>
    <div v-if="words.length === 0">
      <h3>Du har inte skapat ett spel ännu</h3>
      <p>Vänligen gå in på <b>Skapa ett spel</b> för att skapa ett spel</p>
    </div>
    <div v-if="words">
      <div v-if="!complete">
        <h1 v-text="this.currentWord"></h1>
        <transition name="slide" v-if="this.clearedWord">
          <span class="congratz">Hurra🙌! Du stavade rätt till {{this.currentWord}}</span>
        </transition>
        <div class="wrapper" >
          <transition name="fade" v-if="!this.clearedWord">
            <WordBoxes :callBack="this.updateScore" :word="this.currentWord"></WordBoxes>
          </transition>
        </div>
      </div>
      <transition name="fade">
        <div v-if="complete">
          <h1>Hurra! Du stavade rätt till alla ord!</h1>
          <h1>⭐️</h1>
        </div>
      </transition>
      <div class="scoreBoard">
        <span class="score-label">Poäng:</span>
        <span>{{score}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import WordBoxes from "@/components/WordBoxes.vue";
import { getQuestionsFromLocalStorage } from "@/utils/util.js";

export default {
  components: {
    WordBoxes
  },
  data: () => {
    return {
      score: 0,
      words: getQuestionsFromLocalStorage(),
      currentWordIndex: 0,
      complete: false,
      clearedWord: false
    };
  },
  computed: {
    currentWord: function() {
      return this.words[this.currentWordIndex];
    }
  },
  methods: {
    updateScore(input) {
      const correctWord = this.words[this.currentWordIndex];
      if (input === correctWord) {
        this.score++;
        if (this.words.length > this.currentWordIndex + 1) {
          this.clearedWord = true;
          setTimeout(() => {
            this.currentWordIndex++;
            this.clearedWord = false;
          }, 1500);
        } else {
          this.complete = true;
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

.congratz {
  font-size: 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* .slide-enter-active,
.slide-leace-active {
  transition: 
} */
</style>


