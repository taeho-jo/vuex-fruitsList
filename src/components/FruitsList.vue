<template>
  <div id="fruits-list">
    <h1>Fruits Name</h1>
    <ul>
      <li v-for="(fruit, index) in upperCaseFruits" :key="index">
        {{ fruit.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["fruits"]),
    ...mapGetters(["upperCaseFruits"])
  }
};
</script>

<style scoped></style>
