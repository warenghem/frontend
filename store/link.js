const state = () => ({
    links: [
        {name: 'toolbar.shop', url: 'shop/', position: 'left'},
        {name: 'toolbar.help', url: 'help/', position: 'left'},
        {name: 'toolbar.studios', url: 'studios/', position: 'left'},
    ],
    footerlinks: [
        {name: 'toolbar.studios', url: 'studios/', position: 'left'},
        {name: 'toolbar.help', url: 'help/', position: 'left'},
        {name: 'toolbar.payments', url: 'payments/', position: 'left'},
        {name: 'toolbar.shipping', url: 'shipping/', position: 'left'},
        {name: 'toolbar.partnership', url: 'partnership/', position: 'left'},
        {name: 'toolbar.protection', url: 'legal/', position: 'left'},
    ],
    innovationlinks: [
        {name: 'Dionysos', url: 'dionysos/', class: 'svgicon1'},
        {name: 'Origin', url: 'sustainabletech/origin/', class: 'svgicon2'},
    ],
    sociallinks: [
        {name: 'instagram', icon: mdiInstagram, url: "https://www.instagram.com/warenghem.studios/"},
        {name: 'facebook', icon: mdiFacebook, url: "https://www.facebook.com/warenghem.studios/"},
    ],
});
import {mdiInstagram, mdiFacebook} from '@mdi/js'
export default {
    namespaced: true,
    state
}
