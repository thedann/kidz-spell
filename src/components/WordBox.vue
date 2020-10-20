<template>
  <input type="text" v-bind:class="{focused : isInFocus}" maxlength="1" v-on:change="$emit('update-text', $event, index)"/>

</template>

<script>
export default {
  name : "WordBox",
  props: {
    index: Number,
    isInFocus: Boolean
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
</style>


