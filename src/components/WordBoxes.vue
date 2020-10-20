<template>
  <div class="box-wrapper">
    <WordBox
      v-for="(words, index) in wordSplit"
      :key="index"
      v-on:update-text="callBack"
      :index="index"
      :isInFocus="indexInFocus === index"
    >{{words}}</WordBox>
  </div>
</template>

<script>
import WordBox from "@/components/WordBox.vue";

export default {
    components: {
    WordBox
  },
  props: {
    wordSplit: Array,
    callBack: Function,
    indexInFocus: Number
  }
}
</script>

<style scoped>
.box-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 40rem;
  min-width: 15rem;
}
</style>


