<template>
  <div class="btn" v-on:click="discountPrice(discountData)">DISCOUNT PRICE</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      discountData: {
        rate: 20
      }
    };
  },
  methods: {
    ...mapActions(["discountPrice"])
  }
};
</script>

<style scoped lang="scss">
.btn {
  max-width: 660px;
  margin: 10px auto;
  padding: 10px 0;
  color: #ffffff;
  text-align: center;
  background: salmon;
  border-radius: 6px;
  cursor: pointer;
}
</style>
