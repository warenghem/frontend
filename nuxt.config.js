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
    asyncScripts: true,
    bundleRenderer: {
      shouldPreload: (_, type) => {
        return type === 'image'
      }
    },
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7
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
    '@nuxtjs/svg',
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ],
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

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    theme: {
      options: {
        customProperties: true,
      },
      themes: {
        dark: {
          background: '#000',
          bgcard: {
            base: '#1E1E1F',
            darken3: '#161617'
          },
          primary: {
            base: '#ffffff',
            lighten3: '#ffb700',
            darken3: '#ff6200'
          },
          secondary: {
            base: '#ffffff',
            lighten3: '#FBFBFD'
          },
          tertiary: {
            base: '#ffffff',
          },
          accent: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base, 
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          darkbugattiblue: '#153038',
          lightbugattiblue: '#3D8EBE',
          wablack: '#19110b'
        },
        light: {
          background: colors.white,
          bgcard: {
            base: '#f6f5f3',
            lighten3: '#ffb700',
            darken3: '#161617'
          },
          primary: {
            base: '#19110b',
            lighten3: '#ffb700',
            darken3: '#ff6200'
          },
          secondary: {
            base: '#86868b',
            lighten3: '#4696bf',
            darken3: '#466ebf'
          },
          tertiary: {
            base: '#4682bf',
            lighten3: '#4696bf',
            darken3: '#466ebf'
          },
          accent: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          darkbugattiblue: '#153038',
          lightbugattiblue: '#3D8EBE',
          wablack: '#19110b'
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
              greedy: [/leaflet/,/^lazy/,/^ls/,/^mediabox/]
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