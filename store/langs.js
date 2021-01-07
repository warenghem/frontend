import product from "~/store/product";
const state = () => ({

  items: [
    {img: require('../assets/images/flag.jpg'),path: '/fr/', lang: '/fr', full: 'Francais', currency: 'EUR', sign: '€', iso: 'fr-fr'},
    {img: require('../assets/images/flag.jpg'),path: '/fr/', lang: '/fr', full: 'Francais', currency: 'CHF', sign: '₣', iso: 'fr-ch'},
    {img: require('../assets/images/flag.jpg'),path: '/fr/', lang: '/fr', full: 'Francais', currency: 'CAD', sign: 'C$', iso: 'fr-ca'},
    {img: require('../assets/images/united-kingdom.svg'),path: '/en/', lang: '/en', full: 'English', currency: 'GBP', sign: '£', iso: 'en-gb'},
    {img: require('../assets/images/united-kingdom.svg'),path: '/en/', lang: '/en', full: 'English', currency: 'USD', sign: '$', iso: 'en-us'},
    {img: require('../assets/images/united-kingdom.svg'),path: '/en/', lang: '/en', full: 'English', currency: 'EUR', sign: '€', iso: 'en'},
    {img: require('../assets/images/united-kingdom.svg'),path: '/en/', lang: '/en', full: 'English', currency: 'CAD', sign: 'C$', iso: 'en-ca'},
  ],
  hasSlug: false,
  currentLang:{img: require('../assets/images/flag.jpg'),path: '/fr/', lang: '/fr', full: 'Francais', currency: 'EUR', sign: '€', iso: 'fr-fr'}
});
export const mutations = {
  SET_LANG_NAV(state, Lang) {
    state.items = state.items.map(lan => {
      return {
        ...lan,
        path: Lang.find(l => '/' + l.locale === lan.lang).path
      }
    });
    state.hasSlug = true
  },

  RESET_LANG(state) {
    state.items = state.items.map(lan => {
      return {
        ...lan,
        path: lan.lang
      }
    });
    state.hasSlug = false
  },
  SET_LANG(state,data){
    state.currentLang=data
  }
};
export const actions = {
  setLang({commit,dispatch}, flag){
    this.$cookies.set('currentLang', flag);
    commit('SET_LANG',flag);
    this.$router.push({path:flag.path});
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
