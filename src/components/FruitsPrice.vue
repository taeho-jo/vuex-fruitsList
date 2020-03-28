<template>
  <div id="fruits-price">
    <h1>Fruits Price</h1>
    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">{{ fruit.price }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["fruits"])
  }
};
</script>

<style></style>
