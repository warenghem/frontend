import product from "~/store/product";
const state = () => ({

  items: [
    {img: require('../assets/images/flags/france.svg'),path: 'fr', lang: 'fr', full: 'France', currency: 'EUR', sign: '€', iso: 'fr-fr'},
    {img: require('../assets/images/flags/united-kingdom.svg'),path: 'en', lang: 'en', full: 'United Kingdom', currency: 'GBP', sign: '£', iso: 'en-gb'},
    {img: require('../assets/images/flags/switzerland.svg'),path: 'fr', lang: 'fr', full: 'Switzerland', currency: 'CHF', sign: '₣', iso: 'fr-ch'},
    {img: require('../assets/images/flags/european-union.svg'),path: 'en', lang: 'en', full: 'European-Union (English)', currency: 'EUR', sign: '€', iso: 'en'},
    {img: require('../assets/images/flags/canada.svg'),path: 'fr', lang: 'fr', full: 'Canada (Francais)', currency: 'CAD', sign: 'C$', iso: 'fr-ca'},
    {img: require('../assets/images/flags/canada.svg'),path: 'en', lang: 'en', full: 'Canada (English)', currency: 'CAD', sign: 'C$', iso: 'en-ca'},
    {img: require('../assets/images/flags/united-states-of-america.svg'),path: 'en', lang: 'en', full: 'United States', currency: 'USD', sign: '$', iso: 'en-us'},
  ],
  currentLang:{img: require('../assets/images/flag.jpg'),path: 'fr', lang: 'fr', full: 'Francais', currency: 'EUR', sign: '€', iso: 'fr-fr'}
});
export const mutations = {
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
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
