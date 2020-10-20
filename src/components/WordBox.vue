<template>
  <input type="text" 
    v-bind:class="{focused : isInFocus, correct : isCorrect}"
    maxlength="1"
    v-bind:disabled="!isInFocus"
    v-autofocus="isInFocus"
    @keyup="$emit('update-text', $event, index)"/>

</template>

<script>
import Vue from "vue";
import autofocus from "vue-autofocus-directive";
Vue.directive("autofocus", autofocus);

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
    height: 2.5rem;
    width: 2.5rem;
    text-align: center;
    font-size: 2rem;
    border-radius: 10px;
    text-transform: uppercase;
    background: lightgray;
  }

  .focused {
    height: 3.5rem;
    width: 3.5rem;
    background: unset;
  }

  .correct {
    background: #42b983;
  }
</style>


