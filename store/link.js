const state = () => ({
    links: [
        {name: 'toolbar.shop', elId: '/shop', position: 'left'},
        {name: 'toolbar.help', elId: '/help', position: 'left'},
    ],
});
export default {
    namespaced: true,
    state,
}
