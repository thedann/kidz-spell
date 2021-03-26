<template>
  <div>
    <h3>Du har redan hämtat ett spel</h3>
    <p>
      Om du har hämtat ett spel från en länk så kan du inte ändra i det spelet.
      För att skapa ett nytt spel så behöver du rensa de frågor du har sparat
      just nu
    </p>
    <button
      class="button negative-button"
      v-on:click="removeAllQuestions"
      type="button"
    >
      Rensa spelet
    </button>
  </div>
</template>

<script>
import {
  cleanLocalStorage,
} from "@/utils/util.js";

export default {
  name: "AlreadyHasGameLoaded",
  methods: {
    removeAllQuestions: function() {
      cleanLocalStorage();
      this.questions = [];
    },
  },
};
</script>
