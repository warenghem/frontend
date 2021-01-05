const state = () => ({
  productPayModal: false,
  exchange_rate: 1,
  currency_default: "EUR",
  recent_products: [],
  loading: false
});
export const mutations = {
  OPEN_PAY_MODAL(state) {
    state.productPayModal = true;
  },
  CLOSE_PAY_MODAL(state) {
    state.productPayModal = false;
  },
  SET_EXCHANGE_RATE(state, data) {
    state.exchange_rate = data;
  },
  RESET_EXCHANGE_RATE(state) {
    state.exchange_rate = 1;
  },
  SET_CURRENCY(state, data) {
    state.currency_default = data;

  },
  RESET_CURRENCY(state) {
    state.currency_default = 'EUR';
  },
  initRecentProduct(state, data) {
    state.recent_products = data
  },
  recentProducts(state, data) {
    if (state.recent_products.includes(data)) {
      var index = state.recent_products.indexOf(data);
      if (index !== -1) {
        state.recent_products.splice(index, 1);
      }
      state.recent_products.unshift(data)
    } else {
      state.recent_products.unshift(data)
    }
    if (state.recent_products.length > 15) {
      state.recent_products = state.recent_products.slice(0, 15)
    }
  }
};
export const actions = {
  setRecentProducts({commit, state}, data) {
    commit('recentProducts', data);
    this.$cookies.set('recent_products', state.recent_products);
  },
  async setCurrency({ commit}, toLang) {
    this.$cookies.set('currency_default', toLang);
    commit('SET_CURRENCY', toLang);
  },
  // async getExchangeRate({$axios, commit}, toLang) {
  //   this.$cookies.set('currency_default', toLang);
  //   commit('SET_CURRENCY', toLang);
  //   if (toLang !== 'EUR') {
  //     this.$axios.$get("https://api.exchangeratesapi.io/latest?base=EUR&symbols=" + toLang).then(res => {
  //       commit("SET_EXCHANGE_RATE", Object.values(res.rates)[0]);
  //     }).catch(() => {
  //       commit("SET_EXCHANGE_RATE", 1);
  //     });
  //   } else {
  //     commit("SET_EXCHANGE_RATE", 1);
  //   }
  //
  // },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
