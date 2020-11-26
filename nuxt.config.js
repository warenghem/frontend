import colors from 'vuetify/es5/util/colors'

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
    {src: '~/plugins/imagekit', ssr: false},
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
    'nuxt-purgecss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
    '@nuxtjs/color-mode',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://tree-nation.com/api/',
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  purgeCSS: {
    // your settings here
   },

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

  i18n: {
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-us',
        name: 'English',
      },
      {
        code: 'fr',
        iso: 'fr-fr',
        name: 'Français',
      },
    ],
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

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
