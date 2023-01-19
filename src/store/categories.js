const GET_COLLECTION_STARTED = "GET_COLLECTION_STARTED";
const GET_COLLECTION_SUCCESS = "GET_COLLECTION_SUCCESS";
const GET_COLLECTION_FAILED = "GET_COLLECTION_FAILED";

export default {
  namespaced: true,
  state: {
    isRequestPending: false,
    isRequestFailed: false,
    collection: [],
  },
  getters: {},
  mutations: {
    [GET_COLLECTION_STARTED](state) {
      state.isRequestPending = true;
      state.collection = [];
      state.isRequestFailed = false;
    },
    [GET_COLLECTION_SUCCESS](state, list) {
      state.isRequestPending = false;
      state.collection = list;
      state.isRequestFailed = false;
    },
    [GET_COLLECTION_FAILED](state) {
      state.isRequestPending = false;
      state.collection = [];
      state.isRequestFailed = true;
    },
  },
  actions: {
    async getCollection({commit}) {
      commit(GET_COLLECTION_STARTED);
      try {
        const list = await fetch("https://fakestoreapi.com/products/categories").then(
          res => res.json()
        );
        commit(GET_COLLECTION_SUCCESS, list);
      } catch (e) {
        commit(GET_COLLECTION_FAILED);
        throw e;
      }
    },
  },
};
