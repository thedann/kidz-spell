<template>
  <div>
    <h1 v-text="this.currentWord"></h1>
    <div class="wrapper">
      <div class>
        <WordBoxes
          :callBack="this.updateScore"
          :word="this.currentWord"
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
import { setTimeout } from 'timers';


export default {
  components: {
    WordBoxes
  },
  data: () => {
    return {
      score: 0,
      words: ["HEJ", "SOL", "FÅR", "BOLL", "FRÖKEN"],
      currentWordIndex: 0,
    
    };
  },
  computed: {
    currentWord: function() {
      return this.words[this.currentWordIndex]
    }
  },
  methods: {
    updateScore(input) {
      const correctWord = this.words[this.currentWordIndex]
      if (input === correctWord) {
        this.score++;
        setTimeout(() => {
          this.currentWordIndex++;
        }, 200)
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


