<template>
  <div class="start-page">
    <h1>Välkommen till KidzSpell!</h1>
    <p>
      <b>KidzSpell</b> är ett enkelt spel som hjälper barn att lära sig stava,
      samt att lära sig känna igen symboler på tangentbordet.
    </p>
    <div>
      <br /><span style="display:none" v-text="quiz"></span><br />
      <div>
        <router-link
          v-if="questions.length === 0"
          class="button positive-button"
          to="/create-game"
        >
          <span>Skapa Spel</span>
        </router-link>
        <router-link
          v-if="questions.length > 0"
          class="button positive-button"
          to="/game"
        >
          <span>Starta Spel</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  getQuestionsFromLocalStorage,
  readQuizFromQueryString,
} from "../utils/util";
export default {
  name: "Home",
  data: () => ({
    questions: getQuestionsFromLocalStorage(),
  }),
  components: {},
  computed: {
    quiz: function () {
      if(this.questions.length === 0) {
        return readQuizFromQueryString()
      } 
      return false;
    }
    // readQuizFromQueryString()
  }
};
</script>

<style scoped></style>
