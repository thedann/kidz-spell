<template>
  <div>
    <div v-if="words.length === 0">
      <h3>Du har inte skapat ett spel ännu</h3>
      <p>
        Vänligen gå in på
        <b>Skapa ett spel</b> för att skapa ett spel
      </p>
    </div>
    <div v-if="words">
      <div v-if="!complete">
        <h1 v-text="this.currentQuestion"></h1>
        <transition name="slide" v-if="this.clearedWord">
          <span class="congratz" v-text="this.wellDonePhrase"></span>
        </transition>
        <div class="wrapper">
          <transition name="fade" v-if="!this.clearedWord">
            <WordBoxes :callBack="this.updateScore" :word="this.currentAnswer"></WordBoxes>
          </transition>
        </div>
      </div>
      <transition name="fade">
        <div v-if="complete">
          <h1>Hurra! Du klarade alla frågor! Bra jobbat!</h1>
          <h1>⭐️</h1>
        </div>
      </transition>
      <div class="scoreBoard" v-if="words.length > 0">
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
      currentQuestionIndex: 0,
      complete: false,
      clearedWord: false,
      wellDonePhrase: ""
    };
  },
  computed: {
    currentQuestion: function() {
      const item = this.words[this.currentQuestionIndex];
      if (item) {
        return item.question;
      }
      return "";
    },
    currentAnswer: function() {
      const item = this.words[this.currentQuestionIndex];
      if (item) {
        return item.answer;
      }
      return "";
    }
  },
  methods: {
    updateScore(input) {
      const currentItem = this.words[this.currentQuestionIndex];
      const correctAnswer = currentItem.answer;
      if (input === correctAnswer) {
        this.score++;
        this.wellDonePhrase = generateWellDonePhrase();
        if (this.words.length > this.currentQuestionIndex + 1) {
          this.clearedWord = true;
          setTimeout(() => {
            this.currentQuestionIndex++;
            this.clearedWord = false;
          }, 1500);
        } else {
          this.complete = true;
        }
      }
    }
  }
};

function generateWellDonePhrase() {
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  let phrase = "";

  switch (randomNumber) {
    case 1:
      phrase = "Snyggt👍 Du svarade rätt";
      break;
    case 2:
      phrase = "Bra där🙌 Du svarade rätt";
      break;
    case 3:
      phrase = "Du kan ju💪 Du svarade rätt";
      break;
    case 4:
      phrase = "Bra jobbat✍️ Du svarade rätt";
      break;
    case 5:
      phrase = "Kalas🍰 Du svarade rätt";
      break;
    default:
      phrase = "Nice😎 Du svarade rätt";
      break;
  }
  return phrase;
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}

.scoreBoard {
  position: absolute;
  right: 1.5rem;
  bottom: 5.5rem;
  z-index: 5;
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
</style>


