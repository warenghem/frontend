
const state = () => ({
  productPayModal: false,
  exchange_rate: [],
  currency_default: 'EUR'
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
  }
};
export const actions = {
  async getAllExchangeRate({$axios, commit}) {
    const allCurrency = ['EUR', 'USD', 'GBP'];
    var rate =[];
    allCurrency.forEach(currency => {
      let exchange = [];
      this.$axios.$get("https://api.exchangeratesapi.io/latest?base=" + currency).then(res => {
        allCurrency.forEach(curr => {
          if (curr === currency) {
            exchange.push({currency:curr,rate:1})
          } else {
             Object.keys(res.rates).forEach((obj,idx)=>{
               if(obj === curr){
                 exchange.push({currency:curr,rate:Object.values(res.rates)[idx]})
               }

             })
          }
        })
      });
      rate.push({from:currency,exchange_r:exchange})
    });
    commit("SET_EXCHANGE_RATE", rate);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
