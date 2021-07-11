
import link from './link'
import product from './product'
import modals from './modals'
import transitions from './transitions'
export const modules = {
  link, product, modals, transitions
};

export const state = () => ({
  tree_count: 0,
  co2_compensated: 0,
  reforest: 0,
  langModal: false,
  plantModal: false,
  newsletterModal: false,
  productModal: false,
});

export const mutations = {
  SET_FOREST_DETAILS(state, payload) {
    state.tree_count = payload.tree_count;
    state.co2_compensated = payload.co2_compensated;
    state.reforest = (parseInt(state.tree_count, 10) / 1000).toFixed(0).toLocaleString();
  },
};

export const actions = {
  async getForestDetail({commit}) {
    try {
      const res = await this.$axios.$get("https://tree-nation.com/api/forests/145764");
      commit("SET_FOREST_DETAILS", res);
    } catch (e) {
      commit("SET_FOREST_DETAILS", {tree_count: 0, co2_compensated: 0});
    }
  },
  async nuxtServerInit({dispatch}) {
    await dispatch('getForestDetail');
  },
};