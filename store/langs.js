import product from "~/store/product";
const state = () => ({

  items: [
    {img: require('../assets/images/flags/france.svg'),path: 'fr-FR', lang: 'fr-FR', full: 'France', currency: 'EUR', sign: '€', iso: 'fr-FR'},
    {img: require('../assets/images/flags/united-kingdom.svg'),path: 'en-GB', lang: 'en-GB', full: 'United Kingdom', currency: 'GBP', sign: '£', iso: 'en-GB'},
    {img: require('../assets/images/flags/switzerland.svg'),path: 'fr-CH', lang: 'fr-CH', full: 'Switzerland', currency: 'CHF', sign: '₣', iso: 'fr-CH'},
    {img: require('../assets/images/flags/european-union.svg'),path: 'en', lang: 'en', full: 'European-Union (English)', currency: 'EUR', sign: '€', iso: 'en'},
    {img: require('../assets/images/flags/canada.svg'),path: 'fr-CA', lang: 'fr-CA', full: 'Canada (Francais)', currency: 'CAD', sign: 'C$', iso: 'fr-CA'},
    {img: require('../assets/images/flags/canada.svg'),path: 'en-CA', lang: 'en-CA', full: 'Canada (English)', currency: 'CAD', sign: 'C$', iso: 'en-CA'},
    {img: require('../assets/images/flags/united-states-of-america.svg'),path: 'en-US', lang: 'en-US', full: 'United States', currency: 'USD', sign: '$', iso: 'en-US'},
  ],
  currentLang:{img: require('../assets/images/flags/france.svg'),path: 'fr-FR', lang: 'fr-FR', full: 'Francais', currency: 'EUR', sign: '€', iso: 'fr-FR'}
});
/*export const mutations = {
  SET_LANG_NAV(state, Lang) {
    state.items = state.items.map(lan => {
      return {
        ...lan,
        path: Lang.find(l => l.locale === lan.lang).path
      }
    });
  },

  RESET_LANG(state) {
    state.items = state.items.map(lan => {
      return {
        ...lan,
        path: lan.lang
      }
    });
  },
  SET_LANG(state,data){
    state.currentLang=data
  }
};
export const actions = {
  setLang({commit,dispatch}, flag){
    commit('SET_LANG',flag);
  },
};*/
export default {
  namespaced: true,
  state,
  /*mutations,
  actions*/
}