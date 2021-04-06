const state = () => ({
    links: [
        {name: 'toolbar.shop', elId: '/shop/', position: 'left'},
        {name: 'toolbar.help', elId: '/help/', position: 'left'},
        {name: 'toolbar.studios', elId: '/studios/', position: 'left'},
    ],
});
export default {
    namespaced: true,
    state,
}
