import {createStore} from "vuex";
import products from "./products";
import product from "./product";
import categories from "./categories";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    product,
    products,
    categories
  },
});
