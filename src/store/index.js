import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    fruits: [
      { name: "apple", price: 30 },
      { name: "banana", price: 40 },
      { name: "mango", price: 50 },
      { name: "orange", price: 60 },
      { name: "tomato", price: 70 },
      { name: "pineapple", price: 80 }
    ]
  },
  getters: {
    upperCaseFruits: state => {
      return state.fruits.map(fruit => {
        return {
          name: `- ${fruit.name.toUpperCase()}`
        };
      });
    }
  },
  mutations: {
    discountPrice(state, payload) {
      state.fruits.forEach(fruit => {
        fruit.price *= (100 - payload.rate) / 100;
      });
    }
  },
  actions: {
    discountPrice(context, payload) {
      setTimeout(() => {
        context.commit("discountPrice", payload);
      }, 2000);
    }
  }
});
