const state = () => ({
  items: [
    {img: require('../assets/images/flag.jpg'), path: '/fr/', lang: '/fr', full: 'Francais', currency: 'EUR'},
    {img: require('../assets/images/united-kingdom.svg'), path: '/en/', lang: '/en', full: 'English', currency: 'USD'}
  ],
  currencies: [
    {path: '/fr/', lang: '/fr', full: 'Francais', currency: 'EUR', sign: '€', iso: 'fr-fr'},
    {path: '/fr/', lang: '/fr', full: 'Francais', currency: 'CHF', sign: '₣', iso: 'fr-ch'},
    {path: '/fr/', lang: '/fr', full: 'Francais', currency: 'CAD', sign: 'C$', iso: 'fr-ca'},
    {path: '/en/', lang: '/en', full: 'English', currency: 'GBP', sign: '£', iso: 'en-gb'},
    {path: '/en/', lang: '/en', full: 'English', currency: 'USD', sign: '$', iso: 'en-us'},
    {path: '/en/', lang: '/en', full: 'English', currency: 'EUR', sign: '€', iso: 'en'},
    {path: '/en/', lang: '/en', full: 'English', currency: 'CAD', sign: 'C$', iso: 'en-ca'},

  ],
  hasSlug: false,
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
  }
};
export default {
  namespaced: true,
  state,
  mutations
}
