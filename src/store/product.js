const GET_PRODUCT_STARTED = "GET_PRODUCT_STARTED";
const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
const GET_PRODUCT_FAILED = "GET_PRODUCT_FAILED";

export default {
  namespaced: true,
  state: {
    isRequestPending: false,
    isRequestFailed: false,
    product: null,
  },
  getters: {},
  mutations: {
    [GET_PRODUCT_STARTED](state) {
      state.isRequestPending = true;
      state.product = null;
      state.isRequestFailed = false;
    },
    [GET_PRODUCT_SUCCESS](state, list) {
      state.isRequestPending = false;
      state.product = list;
      state.isRequestFailed = false;
    },
    [GET_PRODUCT_FAILED](state) {
      state.isRequestPending = false;
      state.product = null;
      state.isRequestFailed = true;
    },
  },
  actions: {
    async getProduct({commit}, id) {
      commit(GET_PRODUCT_STARTED);
      try {
        const list = await fetch(`https://fakestoreapi.com/products/${id}`).then(
          res => res.json()
        );
        commit(GET_PRODUCT_SUCCESS, list);
      } catch (e) {
        commit(GET_PRODUCT_FAILED);
        throw e;
      }
    },
  },
};
