const state = () => ({
  productPayModal: false,
  exchange_rate: [],
  currency_default: "EUR",
  recent_products: []
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
    state.exchange_rate = [];
  },
  SET_CURRENCY(state, data) {
    state.currency_default = data;

  },
  RESET_CURRENCY(state) {
    state.currency_default = 'EUR';
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

  }
};
export const actions = {
  setCurrency({commit}, data) {
    this.$cookies.set('currency_default', data);
    commit('SET_CURRENCY', data)
  },

  async getAllExchangeRate({$axios, commit}) {
    const allCurrency = ['EUR', 'USD', 'GBP', 'CAD'];
    let exchange = [];
    this.$axios.$get("https://api.exchangeratesapi.io/latest?base=EUR").then(res => {
      allCurrency.forEach(curr => {
        if (curr === 'EUR') {
          exchange.push({currency: curr, rate: 1})
        } else {
          Object.keys(res.rates).forEach((obj, idx) => {
            if (obj === curr) {
              exchange.push({currency: curr, rate: Object.values(res.rates)[idx]})
            }
          })
        }
      })
    }).catch(() => {
      allCurrency.forEach(curr => {
        exchange.push({currency: curr, rate: 1})
      })
    });
    commit("SET_EXCHANGE_RATE", exchange);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
