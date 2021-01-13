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

/* From Nuxt Team */
  categories: {},
});

export const mutations = {
  SET_FOREST_DETAILS(state, payload) {
    state.tree_count = payload.tree_count;
    state.co2_compensated = payload.co2_compensated;
    state.reforest = (parseInt(state.tree_count, 10) / 1000).toFixed(3).toLocaleString();
  },

/* From Nuxt Team */
  SET_CATEGORIES (state, categories) {
    // Vue Reactivity rules since we add a nested object
    Vue.set(state.categories, this.$i18n.locale, categories)
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
