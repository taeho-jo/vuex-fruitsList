<template>
  <div id="app">
    <h1 id="app-title">Fruits List</h1>
    <div id="fruits-table">
      <FruitsList></FruitsList>
      <FruitsPrice></FruitsPrice>
    </div>
    <BtnDiscount></BtnDiscount>
  </div>
</template>

<script>
import FruitsList from "./components/FruitsList";
import FruitsPrice from "./components/FruitsPrice";
import BtnDiscount from "./components/BtnDiscount";

export default {
  components: {
    FruitsList,
    FruitsPrice,
    BtnDiscount
  }
};
</script>
<style lang="scss" src="@/styles/components/app.scss"></style>
