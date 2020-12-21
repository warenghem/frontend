import langs from "~/store/langs";

const state = () => ({
  productPayModal: false,
  exchange_rate: 1,
  exchange_currency:'EUR',
});
export const mutations = {
  OPEN_PAY_MODAL(state) {
    state.productPayModal = true;
  },
  CLOSE_PAY_MODAL(state) {
    state.productPayModal = false;
  },
  SET_EXCHANGE_RATE(state, data) {
    state.exchange_rate = data.rate;
    state.exchange_currency = data.currency;
  },
  RESET_EXCHANGE_RATE(state) {
    state.exchange_rate = 1;
    state.exchange_currency = 'EUR';
  }
};
export const actions = {
  async getExchangeRate({$axios, commit}, lang) {
    try {
      const currency = langs.state().items.find(l => l.lang === '/' + lang).currency;
      if (currency !== 'EUR') {
        const res = await this.$axios.$get("https://api.exchangeratesapi.io/latest?base=EUR&symbols=" + currency);
        commit("SET_EXCHANGE_RATE", {rate:Object.values(res.rates)[0].toFixed(2),currency:currency});
      }else{
        commit("RESET_EXCHANGE_RATE");
      }

    } catch (e) {
      commit("RESET_EXCHANGE_RATE");
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
