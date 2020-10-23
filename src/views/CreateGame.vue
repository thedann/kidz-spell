<template>
  <div>
    <h3>Skapa ett spel</h3>

    <input
      id="new_word"
      type="text"
      class="text"
      v-on:keyup.enter="addQuestion"
      v-model="currentInput"
      placeholder="skriv ett ord"
    >
    <br>
    <button
      class="button positive-button"
      v-on:click="addQuestion"
      type="button"
    >Lägg till ord i spelet</button>

    <ul>
      <li v-for="(question, index) in questions" :key="index">
        {{question}}
        <span class="remove-item" @click="removeQuestion(index)">
          <b>X</b>
        </span>
      </li>
    </ul>

    <br>
    <router-link v-if="questions.length > 0" class="button positive-button" to="/game">
      <span>Spela</span>
    </router-link>
    <br>
    <button
      v-if="questions.length > 0"
      class="button negative-button"
      v-on:click="removeAllQuestions"
      type="button"
    >Rensa spelet</button>
  </div>
</template>

<script>
import {
  getQuestionsFromLocalStorage,
  addQuestionToLocalStorage,
  cleanLocalStorage,
  removeQuestionFromLocalStorage,
  setFocus
} from "@/utils/util.js";
export default {
  name: "CreateGame",
  data: () => {
    return {
      currentInput: "",
      questions: getQuestionsFromLocalStorage()
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      setFocus("new_word");
    });
  },
  methods: {
    addQuestion: function() {
      if (this.currentInput) {
        addQuestionToLocalStorage(this.currentInput);
        this.questions = getQuestionsFromLocalStorage();
        this.currentInput = "";
      }
    },
    removeAllQuestions: function() {
      cleanLocalStorage();
      this.questions = [];
    },
    removeQuestion: function(index) {
      removeQuestionFromLocalStorage(index);
      this.questions.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.text {
  min-width: 20rem;
  min-height: 4rem;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
}

.text::placeholder {
  color: lightgray;
}

.button {
  min-height: 3rem;
  min-width: 15rem;
  margin-top: 1rem;
  border-radius: 10px;
  background: transparent;
  text-decoration: none;
}

a.button {
  padding: 0.5rem 2rem;
  color: black;
  margin-bottom: 2rem;
}

.button:hover {
  background: #42b983;
  cursor: pointer;
}

.positive-button {
  border: 5px solid #42b983;
}

.negative-button {
  border: 5px solid lightcoral;
  min-width: 10rem;
  margin-top: 3rem;
}

.negative-button:hover {
  background: lightcoral;
}

ul {
  text-decoration: none;
  list-style-type: none;
  padding: 0;
}

ul li {
  font-size: 1.5rem;
}

.remove-item:hover {
  cursor: pointer;
  color: lightcoral;
}

@media only screen and (max-width: 600px) {
  .text {
    font-size: 1rem;
    min-width: 2rem;
  }
}
</style>


