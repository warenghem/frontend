import Vue from 'vue'
import groupBy from 'lodash.groupby'

import link from './link'
import picture from './picture'
import product from './product'

export const state = () => ({
  tree_count: 0,
  co2_compensated: 0,
  reforest: 0,
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
  async getForestDetail({$axios, commit}) {

    try {
      const res = await this.$axios.$get("/forests/145764");
      commit("SET_FOREST_DETAILS", res);
    } catch (e) {
      commit("SET_FOREST_DETAILS", {tree_count: 0, co2_compensated: 0});
    }
  },
  async nuxtServerInit({dispatch,commit}) {
    await dispatch('getForestDetail');
  },
};

export const modules = {
  link, picture, product
};
