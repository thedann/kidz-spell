<template>
  <div>
    <h3>Skapa ett spel</h3>
    <div class="container">
      <div class="create-question-container">
        <input
          id="new_word"
          type="text"
          class="text question"
          v-on:keyup.enter="addQuestion"
          v-model="currentQuestion"
          placeholder="skriv en fråga"
        />
        <br />
        <br />
        <input
          id="new_answer"
          type="text"
          class="text"
          v-on:keyup.enter="addQuestion"
          v-model="currentAnswer"
          placeholder="skriv ett svar"
        />
        <br />
        <span class="error" v-text="validationError" />
        <br />
        <button
          class="button positive-button"
          v-on:click="addQuestion"
          type="button"
        >
          Lägg till ord i spelet
        </button>
        <br /><br />
        <button
          class="button positive-button"
          v-on:click="convertGameToString"
          type="button"
        >
          Dela ditt spel som länk
        </button>
      </div>
      <div class="questions-container">
        <ul>
          <li v-for="(item, index) in questions" :key="index">
            <div>
              <span>{{ item.question }}</span>
              <span class="answer-span">{{ item.answer }}</span>
            </div>
            <span class="remove-item" @click="removeQuestion(index)">
              <b>X</b>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <br />
    <router-link
      v-if="questions.length > 0"
      class="button positive-button"
      to="/game"
    >
      <span>Spela</span>
    </router-link>
    <br />
    <button
      v-if="questions.length > 0"
      class="button negative-button"
      v-on:click="removeAllQuestions"
      type="button"
    >
      Rensa spelet
    </button>
    <textarea
      id="game-as-string"
      style="display:hidden"
      class="hidden-copy-area"
      v-model="this.gameAsString"
    ></textarea>
  </div>
</template>

<script>
import {
  getQuestionsFromLocalStorage,
  addQuestionToLocalStorage,
  cleanLocalStorage,
  removeQuestionFromLocalStorage,
  convertQuestionsToShareString,
  setFocus,
  copyToClipboard,
} from "@/utils/util.js";
export default {
  name: "CreateGame",
  data: () => {
    return {
      currentQuestion: "",
      currentAnswer: "",
      validationError: "",
      gameAsString: "",
      questions: getQuestionsFromLocalStorage(),
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      setFocus("new_word");
    });
  },
  methods: {
    addQuestion: function() {
      if (!this.currentQuestion || !this.currentAnswer) {
        this.validationError = "Du behöver fylla i bägge";
      } else if (this.currentQuestion) {
        addQuestionToLocalStorage(this.currentQuestion, this.currentAnswer);
        this.questions = getQuestionsFromLocalStorage();
        this.validationError = "";
        this.currentQuestion = "";
        this.currentAnswer = "";
        setFocus("new_word");
      }
    },
    removeAllQuestions: function() {
      cleanLocalStorage();
      this.questions = [];
    },
    removeQuestion: function(index) {
      removeQuestionFromLocalStorage(index);
      this.questions.splice(index, 1);
    },
    convertGameToString: function() {
      const urlString = convertQuestionsToShareString();
      this.gameAsString = urlString;
      setTimeout(() => {
        copyToClipboard('game-as-string');
      }, 100)
    },
  },
};
</script>

<style scoped>
.text {
  width: 25rem;
  height: 4rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  text-align: center;
}

.text.question {
  width: 25rem;
}

.text::placeholder {
  color: lightgray;
}

.hidden-copy-area {
  z-index: -1000;
  position: absolute;
}

ul {
  text-decoration: none;
  list-style-type: none;
  padding: 0;
  overflow: hidden;
}

ul li {
  font-size: 1.5rem;
  position: relative;
}

ul li div {
  display: flex;
  flex-direction: column;
}

.remove-item {
  position: absolute;
  top: 1.2rem;
  right: 2rem;
}

.remove-item:hover {
  cursor: pointer;
  color: lightcoral;
}

.answer-span {
  font-size: 1rem;
  color: grey;
}

@media only screen and (max-width: 600px) {
  .container {
    display: block;
  }

  .questions-container {
    display: block;
    width: auto;
  }

  .create-question-container {
    margin-left: unset;
  }

  .text {
    font-size: 1rem;
    width: 16rem;
  }

  .text.question {
    font-size: 1rem;
    width: 16rem;
  }
}
</style>
