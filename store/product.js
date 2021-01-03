const state = () => ({
  productPayModal: false,
  exchange_rate: [],
  currency_default: "EUR",
  recent_products: [],
  loading:false
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
    state.loading = true;
    state.currency_default = data;
    setTimeout(function(){
     state.loading = false;
    },1000)

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
    if(state.recent_products.length>15){
      state.recent_products=state.recent_products.slice(0,15)
    }
  }
};
export const actions = {
  setCurrency({commit}, data) {
    this.$cookies.set('currency_default', data);
    commit('SET_CURRENCY', data)
  },
  setRecentProducts({commit, state}, data) {
    commit('recentProducts', data);
    this.$cookies.set('recent_products', state.recent_products);
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
