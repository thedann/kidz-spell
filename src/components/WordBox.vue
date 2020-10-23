<template>
  <input
    :id=idString
    type="text"
    v-bind:class="{focused : isInFocus, correct : isCorrect, inCorrect : isInCorrect}"
    maxlength="1"
    v-bind:disabled="!isInFocus"
    @keyup="$emit('update-text', $event, index)"
  >
</template>

<script>
export default {
  name: "WordBox",
  props: {
    index: Number,
    isInFocus: Boolean,
    isCorrect: Boolean,
    isInCorrect: Boolean
  },
  computed: {
    idString() {
      return "box_" + this.index
    }
  },
  
  data: () => {
    return {};
  }
};
</script>

<style scoped>
input {
  border: 1px solid rgb(190, 184, 184);
  height: 3.5rem;
  width: 3.5rem;
  text-align: center;
  font-size: 2rem;
  border-radius: 10px;
  text-transform: uppercase;
  background: rgb(245, 240, 240);
  transition: width 0.2s, height 0.2s;
}

.focused {
  height: 4.5rem;
  width: 4.5rem;
  background: unset;
  opacity: 1;
  border: 1px solid black;

}

.correct {
  background: #42b983;
  border: 1px solid black;
  color: black;

}

.inCorrect {
  background: lightcoral;
}

@media only screen and (max-width: 600px) {
  input {
    height: 1.5rem;
    width: 1.5rem;
  }

  .correct {
    height: 2.5rem;
    width: 2.5rem;
  }

  .focused {
    height: 3rem;
    width: 3rem;
  }
}
</style>


