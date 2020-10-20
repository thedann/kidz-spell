<template>
  <input type="text" 
    v-bind:class="{focused : isInFocus, correct : isCorrect}"
    maxlength="1"
    v-bind:disabled="!isInFocus"
    @keyup="$emit('update-text', $event, index)"/>

</template>

<script>
export default {
  name : "WordBox",
  props: {
    index: Number,
    isInFocus: Boolean,
    isCorrect: Boolean
  },
  data: () => {
    return {
    }
  }
}
</script>

<style scoped>
  input {
    border: 1px solid black;
    height: 3.5rem;
    width: 3.5rem;
    text-align: center;
    font-size: 2rem;
    border-radius: 10px;
    text-transform: uppercase;
    background: lightgray;
    opacity: 0.2;
    transition: width 0.2s, height 0.2s;
  }



  .focused {
    height: 4.5rem;
    width: 4.5rem;
    background: unset;
    opacity: 1;
  }

  .correct {
    background: #42b983;
    opacity: 1;
  }
</style>


