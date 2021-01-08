import colors from 'vuetify/es5/util/colors'
import axios from 'axios'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - frontend',
    title: 'frontend',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/main.css',
    '@/assets/scss/app.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/vue-leaflet', ssr: false},
    {src: '~/plugins/vue-carousel', ssr: true},
    {src: '~/plugins/lazysizes', ssr: false},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    "@nuxtjs/svg",
    '@nuxtjs/date-fns',
    '@nuxtjs/snipcart',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    'cookie-universal-nuxt',
  ],
  i18n: {
    strategy: 'prefix',
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'fr',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: 'fr',
      onlyOnRoot: true,
      useCookie: true,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieKey: 'i18n_redirected',
      cookieSecure: false
    },
    vueI18n: {
      messages: {
        fr: require('./locales/fr-fr.json'),
        en: require('./locales/en-us.json'),
      },
    },
    locales: [
      {
        code: 'en',
        iso: 'en-us',
        name: 'English',
        langFile:require('./locales/en-us.json')
      },
      {
        code: 'fr',
        iso: 'fr-fr',
        name: 'Français',
        langFile:require('./locales/fr-fr.json')
      },
    ],
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.priceEuro = document.offers ? parseFloat(document.offers.price) : null;
        let currency = [];
        if (document.priceEuro) {
          axios.get("https://api.exchangeratesapi.io/latest?base=EUR").then(res => {
            Object.entries(res.data.rates).forEach(([key, value]) => {
              if (['EUR', 'CAD', 'USD', 'GBP','CHF'].includes(key)) {
                currency.push({name: key, price: (value * document.priceEuro+document.priceEuro*0.01).toFixed(0)})
              }
            });
            document.currency = currency;
          }).catch(() => {
            document.currency = currency
          });
        }


      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://tree-nation.com/api/',
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  pwa: {
    meta: {
      mobileAppIOS: 'false',
      theme_color: '#153038',
      appleStatusBarStyle: 'black',
      author: 'Kevin Brosseau',
      description: 'Warenghem App',
      lang: 'fr',
      ogHost: 'www.warenghem.com',
      ogSiteName: 'Warenghem Studios',
      ogDescription: 'À Paris, Bags & shoes made from Wine leather - Vegan & Ecologic | Made in France | Sustainable Technologies - www.warenghem.com',
      twitterCard: 'summary',
      twitterSite: 'www.warenghem.com',
    }
  },


  snipcart: {
    // Options available
    key: "N2VkOWYwOTgtNDYxMC00YWFmLWFjYzEtMDllZmY0YzdmZmUyNjM3Mzk5NDI5MzA2MTE0MDg2",
    addProductBehavior: false,
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      disable: true,
    },
    materialIcons: true,
    css: true,
  },
  sitemap: {
    path: '/sitemapindex.xml',
    hostname: 'https://www.warenghem.com',
    i18n: true,
    gzip: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, {isDev, isClient, loaders: {vue}}) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
  }
}
