const state = () => ({
  exchange_rate: 1,
  /*recent_products: [],
  loading: true*/
});
export const mutations = {
  SET_EXCHANGE_RATE(state, data) {
    state.exchange_rate = data;
  },
  RESET_EXCHANGE_RATE(state) {
    state.exchange_rate = 1;
  },
  /*SET_LOAD(state){
    setTimeout(()=>{
      state.loading=false;
    },1000);

  },*/
/*
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
  }*/
};/*
export const actions = {
  setRecentProducts({commit, state}, data) {
    commit('recentProducts', data);
    this.$cookies.set('recent_products', state.recent_products);
  },
};*/
export default {
  namespaced: true,
  state,
  mutations,
  /*actions*/
}
