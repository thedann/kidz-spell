<template>
  <div>
    <h3>Skapa ett spel</h3>

    <input type="text" class="text" v-model="currentInput" placeholder="skriv ett ord">
    <br>
    <button class="button" v-on:click="addQuestion" type="button">Lägg till ord i spelet</button>

    <ul>
      <li v-for="(question, index) in questions" :key="index" v-text="question"></li>
    </ul>
  </div>
</template>

<script>
import {
  getQuestionsFromLocalStorage,
  addQuestionToLocalStorage
} from "@/utils/util.js";
export default {
  name: "CreateGame",
  data: () => {
    return {
      currentInput: "",
      questions: getQuestionsFromLocalStorage(),
      newlyAddedQuestions: []
    };
  },
  computed: {},
  methods: {
    addQuestion: function() {
      addQuestionToLocalStorage(this.currentInput);
      this.questions = getQuestionsFromLocalStorage();

      //if you added your first question. Let's reload the page so the menu updates
      if (this.questions.length === 1) {
        window.location.reload();
      } else {
        this.currentInput = "";
      }
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
}

ul {
  text-decoration: none;
  list-style-type: none;
  padding: 0;
}

ul li {
  font-size: 1.5rem;
}

@media only screen and (max-width: 600px) {
  .text {
    font-size: 1rem;
    min-width: 2rem;
  }
}
</style>


