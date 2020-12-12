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
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: "preconnect", href: "https://ik.imagekit.io", crossorigin: true},
      {rel: "preconnect", href: "https://app.snipcart.com", crossorigin: true},
      {rel: "preconnect", href: "https://cdn.snipcart.com", crossorigin: true},
      {rel: "preconnect", href: "d33wubrfki0l68.cloudfront.net", crossorigin: true},
      {rel: "preconnect", href: "www.google-analytics.com", crossorigin: true},
    ]
  },
  render: {
    bundleRenderer: {
      shouldPreload: (_, type) => {
        return type === 'image'
      }
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/main.css',
    '@/assets/scss/app.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/lazysizes', ssr: false},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    "@nuxtjs/svg",
    '@nuxtjs/snipcart',
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/component-cache',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
  ],

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

  i18n: {
    strategy: 'prefix_and_default',
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
      },
      {
        code: 'fr',
        iso: 'fr-fr',
        name: 'Français',
      },
    ],
  },

  snipcart: {
    // Options available
    key: "N2VkOWYwOTgtNDYxMC00YWFmLWFjYzEtMDllZmY0YzdmZmUyNjM3Mzk5NDI5MzA2MTE0MDg2",
    addProductBehavior: false,
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    theme: {
      options: {
        customProperties: true
      },
      light: true,
      themes: {
        dark: {
          background: '#000000',

        },
        light: {
          background: colors.white,

        }
      }
    },
    css: true,
  },
  sitemap: {
    path: '/sitemapindex.xml',
    hostname: 'https://www.warenghem.com',
    i18n: true,
    gzip: true,
  },

  googleAnalytics: {
    id: 'UA-156842548-1'
  },

  gtm: {
    id: '	GTM-NXPG4SV'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
    postcss: {
      plugins: {
          "@fullhuman/postcss-purgecss": {
            content: [
              'components/**/*.vue',
              'layouts/**/*.vue',
              'pages/**/*.vue',
              'plugins/**/*.js',
              'node_modules/vuetify/src/**/*.ts',
            ],
            styleExtensions: ['.css'],
            safelist: {
              standard: [
                "body",
                "html",
                "nuxt-progress",
                /col-*/,
              ],
              deep: [
                /page-enter/,
                /page-leave/,
                /dialog-transition/,
                /tab-transition/,
                /tab-reversetransition/
              ],
              greedy: [/leaflet/]
            }
          }
        }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
  
}