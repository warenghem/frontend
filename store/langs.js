
const state = () => ({
  items: [
    {img: require('../assets/images/flag.jpg'), path: '/fr/', lang: 'fr', full: 'Francais'},
    {img: require('../assets/images/united-kingdom.svg'), path: '/en/', lang: 'en', full: 'English'}
  ],
  hasSlug:false,
});
export const mutations = {
  // SET_LANG_NAV(state, Lang) {
  //   state.items = state.items.map(lan => {
  //     return {
  //       ...lan,
  //       path: Lang.find(l => l.locale === lan.lang).path
  //     }
  //   });
  //   state.hasSlug=true
  // },
  // RESET_LANG(state) {
  //   state.items = state.items.map(lan => {
  //     return {
  //       ...lan,
  //       path: lan.lang
  //     }
  //   });
  //   state.hasSlug=false
  // }
};
export default {
  namespaced: true,
  state,
  mutations
}
