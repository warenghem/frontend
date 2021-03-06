import getSiteMeta from './utils/getSiteMeta'
const meta = getSiteMeta()
import axios from 'axios'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  head: {
    titleTemplate: '%s' + ' | Warenghem',
    title: 'Somewhere...',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:site_name', content: 'Warenghem Studios' },
      {
        hid: 'description',
        name: 'description',
        content:
          "À Paris, Bags & shoes made from Wine leather - Vegan & Ecologic | Made in France | Sustainable Technologies - www.warenghem.com'"
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: '@warenghemparis' },
      {
        name: 'twitter:card',
        content: 'https://ik.imagekit.io/g1noocuou2/logo-meta.png'
      }
    ],
    link: [
      /*{
        hid: "canonical",
        rel: "canonical",
        href: process.env.BASE_URL,
      },*/
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://ik.imagekit.io', crossorigin: true },
      {
        rel: 'preconnect',
        href: 'https://app.snipcart.com',
        crossorigin: true
      },
      {
        rel: 'preconnect',
        href: 'https://cdn.snipcart.com',
        crossorigin: true
      },
      {
        rel: 'preconnect',
        href: 'd33wubrfki0l68.cloudfront.net',
        crossorigin: true
      },
      { rel: 'preconnect', href: 'www.google-analytics.com', crossorigin: true }
    ]
  },
  pageTransition: {
    transition(to, from) {
      if (!from) {
        return 'slide-left'
      }
      return +to.params.id < +from.params.id ? 'slide-right' : 'slide-left'
    }
  },
  render: {
    /*asyncScripts: true,
    bundleRenderer: {
      shouldPreload: (_, type) => {
        return type === 'image'
      }
    },*/
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/main.css', '@/assets/scss/app.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    /*'~/plugins/router',*/
    { src: '~/plugins/lazysizes', ssr: false },
    { src: '~/plugins/vee-validate', ssr: false },
    { src: '~/plugins/aos', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/svg',
    '@nuxtjs/google-analytics',
    '@nuxtjs/snipcart',
    '@nuxt/postcss8'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ],
    '@nuxtjs/robots',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxt/content',
    '@nuxtjs/gtm',
    'cookie-universal-nuxt',
    '@nuxtjs/sitemap'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  robots: {
    UserAgent: '*',
    Disallow: ['/admin', '/partners', '/filter', '/sustainabletech'],
    Sitemap: 'https://www.warenghem.com/sitemapindex.xml'
  },
  pwa: {
    meta: {
      mobileAppIOS: 'false',
      theme_color: '#153038',
      appleStatusBarStyle: 'black',
      author: 'Kevin Brosseau',
      description: 'Warenghem',
      lang: 'fr-fr',
      ogHost: 'www.warenghem.com',
      ogSiteName: 'Warenghem Studios',
      ogDescription:
        'À Paris, Bags & shoes made from Wine leather - Vegan & Ecologic | Made in France | Sustainable Technologies - www.warenghem.com',
      twitterCard: 'summary',
      twitterSite: 'www.warenghem.com'
    }
  },

  i18n: {
    strategy: 'prefix_except_default',
    baseUrl: 'https://www.warenghem.com',
    seo: false,
    lazy: true,
    vueI18nLoader: true,
    langDir: 'locales/',
    defaultLocale: 'fr-fr',
    detectBrowserLanguage: false,
    /*skipSettingLocaleOnNavigate: true, issue, see next release
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      onlyOnRoot: true,
    },*/
    locales: [
      {
        code: 'en-gb',
        iso: 'en-GB',
        name: 'United Kingdom',
        language: 'English',
        region: 'Europe',
        file: 'en-us.json',
        currency: 'GBP',
        currencySign: '£',
        img: '/flags/united-kingdom.svg'
      },
      {
        code: 'fr-ch',
        iso: 'fr-CH',
        name: 'Switzerland (Francais)',
        language: 'Francais',
        region: 'Europe',
        file: 'fr-fr.json',
        currency: 'CHF',
        currencySign: '₣',
        img: '/flags/switzerland.svg'
      },
      {
        code: 'en-us',
        iso: 'en-US',
        name: 'United States',
        language: 'English',
        file: 'en-us.json',
        region: 'Americas',
        currency: 'USD',
        currencySign: '$',
        img: '/flags/united-states-of-america.svg',
        isCatchallLocale: true
      },
      {
        code: 'en-ie',
        iso: 'en-IE',
        name: 'Other European Union Regions (English)',
        language: 'English',
        region: 'Europe',
        file: 'en-us.json',
        currency: 'EUR',
        currencySign: '€',
        img: '/flags/european-union.svg'
      },
      {
        code: 'fr-ca',
        iso: 'fr-CA',
        name: 'Canada (Francais)',
        language: 'Francais',
        region: 'Americas',
        file: 'fr-fr.json',
        currency: 'CAD',
        currencySign: 'C$',
        img: '/flags/canada.svg'
      },
      {
        code: 'en-ca',
        iso: 'en-CA',
        name: 'Canada (English)',
        language: 'English',
        region: 'Americas',
        file: 'en-us.json',
        currency: 'CAD',
        currencySign: 'C$',
        img: '/flags/canada.svg'
      },
      {
        code: 'en',
        iso: 'en',
        name: 'Other World Regions (English)',
        language: 'English',
        region: 'Other',
        file: 'en-us.json',
        currency: 'USD',
        currencySign: '$',
        img: '/flags/monde.svg'
      },
      {
        code: 'fr-fr',
        iso: 'fr-FR',
        name: 'France',
        language: 'Francais',
        region: 'Europe',
        file: 'fr-fr.json',
        currency: 'EUR',
        currencySign: '€',
        img: '/flags/france.svg',
        isCatchallLocale: true
      }
    ],
    vueI18n: {
      messages: {
        fr: require('./locales/fr-fr.json'),
        en: require('./locales/en-us.json')
      },
      silentFallbackWarn: true,
      numberFormats: {
        'fr-fr': {
          currency: {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0
          }
        },
        'en-gb': {
          currency: {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 0
          }
        },
        'fr-ch': {
          currency: {
            style: 'currency',
            currency: 'CHF',
            minimumFractionDigits: 0
          }
        },
        'en-ie': {
          currency: {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0
          }
        },
        'en-us': {
          currency: {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          }
        },
        'fr-ca': {
          currency: {
            style: 'currency',
            currency: 'CAD',
            minimumFractionDigits: 0
          }
        },
        'en-ca': {
          currency: {
            style: 'currency',
            currency: 'CAD',
            minimumFractionDigits: 0
          }
        },
        en: {
          currency: {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          }
        }
      },
      dateTimeFormats: {
        'fr-fr': {
          short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          },
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric'
          }
        },
        'en-gb': {
          short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          },
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric'
          }
        },
        'fr-ch': {
          short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          },
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric'
          }
        },
        'en-ie': {
          short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          },
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric'
          }
        },
        'en-us': {
          short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          },
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric'
          }
        },
        'fr-ca': {
          short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          },
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric'
          }
        },
        'en-ca': {
          short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          },
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric'
          }
        },
        en: {
          short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          },
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric'
          }
        }
      }
    }
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.priceEuro = document.offers
          ? parseFloat(document.offers.price)
          : null
        let currency = []
        let snipCurrency = {}
        if (document.priceEuro) {
          /*250 per month axios.get("http://api.exchangeratesapi.io/v1/latest?access_key=64ac053a7427164393210fab8ef82178&base=EUR").then(res => {*/
          /*1000 per month axios.get("http://data.fixer.io/api/latest?access_key=c92c63715229ad0c6cbc84a09a4fcd66&base=EUR").then(res => {*/
          /*unlimited per month*/
          axios
            .get('https://api.exchangerate.host/latest?base=EUR')
            .then((res) => {
              Object.entries(res.data.rates).forEach(([key, value]) => {
                if (['EUR', 'CAD', 'USD', 'GBP', 'CHF'].includes(key)) {
                  if (key !== 'EUR') {
                    currency.push({
                      name: key,
                      price: (
                        value * document.priceEuro +
                        document.priceEuro * 0.01
                      ).toFixed(0)
                    })
                    snipCurrency[key.toLowerCase()] = parseInt(
                      (
                        value * document.priceEuro +
                        document.priceEuro * 0.01
                      ).toFixed(0)
                    )
                  } else {
                    currency.push({
                      name: key,
                      price: document.priceEuro.toFixed(0)
                    })
                    snipCurrency[key.toLowerCase()] = parseInt(
                      document.priceEuro.toFixed(0)
                    )
                  }
                }
              })
              document.currency = currency
              document.snipCurrency = snipCurrency
            })
            .catch(() => {
              document.currency = currency
              document.snipCurrency = {}
            })
        }
      }
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    lang: {},
    theme: {
      options: {
        customProperties: true,
        variations: false
      },
      themes: {
        dark: {
          systemBackground: '#000',
          systemTopNavigation: '#1D1D1D',
          systemBottomNavigation: '#161616',
          systemGray: '#1C1C1E',
          systemGray2: '#2C2C2E',
          systemGray3: '#3A3A3C',
          systemGray4: '#48484A',
          systemGray5: '#636366',
          systemGray6: '#8E8E93',
          systemYellow: '#ffd60a',
          systemOrange: '#ff9f0a',
          systemRed: '#ff453a',
          systemGreen: '#30d158',
          darkbugattiblue: '#153038',
          lightbugattiblue: '#3D8EBE',
          primary: 'ffffff',
          secondary: 'ebebf5',
          anchor: '#3D8EBE'
        },
        light: {
          systemBackground: '#ffffff',
          systemGray: '#F2F2F7',
          systemGray2: '#E5E5EA',
          systemGray3: '#D1D1D6',
          systemGray4: '#C7C7CC',
          systemGray5: '#AEAEB2',
          systemGray6: '#8E8E93',
          systemYellow: '#ffcc00',
          systemOrange: '#ff9500',
          systemRed: '#ff3b30',
          systemGreen: '#34c759',
          darkbugattiblue: '#153038',
          lightbugattiblue: '#3D8EBE',
          primary: '000000',
          secondary: '#86868b',
          anchor: '#3D8EBE'
        }
      }
    },
    css: false
  },
  snipcart: {
    key:
      'N2VkOWYwOTgtNDYxMC00YWFmLWFjYzEtMDllZmY0YzdmZmUyNjM3Mzk5NDI5MzA2MTE0MDg2'
  },
  sitemap: {
    path: '/sitemapindex.xml',
    hostname: 'https://www.warenghem.com',
    i18n: true,
    gzip: true,
    trailingSlash: true,
    exclude: ['^.*api.*$', '^.*filter.*$'],
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const files = await $content(`router`, { deep: true })
        .only(['path', 'slug'])
        .fetch()
      /*return files.map(file => file.path === '/index' ? '/' : file.path)*/

      return files.map((file) => ({
        url: file.path.split('/')[1] === 'en' ? file.slug : file.path,
        links: [
          { lang: 'en', url: `en/${file.slug}/` },
          { lang: 'en-ca', url: `en-ca/${file.slug}/` },
          { lang: 'en-gb', url: `en-ca/${file.slug}/` },
          { lang: 'en-ie', url: `en-ie/${file.slug}/` },
          { lang: 'en-us', url: `en-us/${file.slug}/` },
          { lang: 'fr-ca', url: `fr-ca/${file.slug}/` },
          { lang: 'fr-ch', url: `fr-ch/${file.slug}/` },
          /*{ lang: 'fr-fr', url: `fr-fr/${file.slug}/` },*/
          { lang: 'x-default', url: `${file.slug}/` }
        ]
      }))
    },
    filter({ routes }) {
      return routes.map((route) => {
        if (!route.name) return route
        const page = route.name.split('__')[0]
        return {
          url: route.url,
          links: route.links.concat([
            {
              lang: 'x-default',
              url: page === 'index' ? '/' : page
            }
          ])
        }
      })
    }
  },

  googleAnalytics: {
    id: 'UA-156842548-1'
  },

  gtm: {
    id: 'GTM-NXPG4SV',
    scriptDefer: true,
    pageTracking: false,
    respectDoNotTrack: false,
    variables: {
      test: '1'
    }
  },
  router: {
    trailingSlash: true,
    middleware: 'pages'
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
    postcss: {
      hideNothingWarning: true,
      plugins: {
        lost: {},
        '@fullhuman/postcss-purgecss': {
          content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'node_modules/vuetify/src/**/*.ts'
          ],
          styleExtensions: ['.css'],
          safelist: {
            standard: [
              'body',
              'html',
              'nuxt-progress',
              /col-*/,
              /v-dialog*/,
              /^vue-foldable/,
              /^slide-left/,
              'aos-init',
              'aos-animate',
              'data-aos-delay',
              'data-aos-duration'
            ],
            deep: [
              /page-enter/,
              /page-leave/,
              /.*-transition/,
              /dialog-transition/,
              /tab-transition/,
              /tab-reversetransition/,
              /slide-fade/,
              /bottom-sheet-transition/,
              /dialog-bottom-transition/,
              /^vue-foldable/,
              /^viewer/,
              /^slide-left/
            ],
            greedy: [
              /leaflet/,
              /^lazy/,
              /^ls/,
              /^mediabox/,
              /^slick/,
              /^viewer/,
              /^vue-foldable/,
              /^slide-left/
            ]
          }
        }
      }
    }
  },
  generate: {
    exclude: [/^.*api.*$/, /^.*filter.*$/]
  }
}
