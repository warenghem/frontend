<template>
  <v-app >
    <div id="blackContent" @click="hideModal"></div>
    <div>
      <v-app-bar ref="appBar" style="z-index: 4;" class="menu-bar border-bottom-2" :scroll-threshold="50" dense app hide-on-scroll scroll-off-screen flat>
        <v-app-bar-nav-icon @click="sidebar = !sidebar" class="ml-2">
            <v-icon>{{ hamburgerIcon }}</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-items class="d-none d-lg-block" v-for="(link,l_idx) in $store.state.link.links"
                        :key="'link_btn_l_'+l_idx">
          <v-btn text class="text-uppercase item"
                :class="{'current':$root.currentId===link.url}"
                :to="localePath('/')+link.url" nuxt
                v-if="link.position==='left'"
          >
            {{$t(link.name)}}
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-title class="centerabsolute v-toolbar__logo pt-2">
          <AtomsLogoMain class="py-5 ma-auto ma-sm-0 logo"/>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            text
            class="text-uppercase item d-none"
          >
            <MoleculesBtnCart/>
          </v-btn>
          <LayoutAppLangSwitcher/>
        </v-toolbar-items>
      </v-app-bar>
      <v-navigation-drawer v-model="sidebar" temporary app  v-bind:width="304">
        <v-toolbar-title class="text-center py-10">
            <AtomsLogoWA class="logoGrey"/>
        </v-toolbar-title>
        <v-list>
          <v-list-item
            v-for="(link,l_idx) in $store.state.link.links"
            :class="{'current':$root.currentId===link.elId}"
            :to="localePath('/')+link.url"
            :key="'link1_'+l_idx" nuxt
            class="text-uppercase"
          >
            <v-list-item-content>
              {{$t(link.name)}}
            </v-list-item-content>
          </v-list-item>
          <div class="teradeli-medium text-center mt-5 mb-3 greytext">
            {{$t('toolbar.innovationlinktitle')}}
          </div>
          <v-list-item
            v-for="(link,l_idx) in $store.state.link.innovationlinks"
            :class="{'current':$root.currentId===link.elId}"
            :to="localePath('/')+link.url"
            :key="'link2_'+l_idx" nuxt
            class="text-uppercase"
          >
            <v-list-item-content>
              <div class="svglogo text-center" :class="link.class" v-html="require(`~/assets/images/`+link.name+`.svg?raw`)" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div class="position-absolute text-center w-100 pa-5" style="bottom:0">
          <MoleculesBtnSocials />
        </div>
      </v-navigation-drawer>
      <v-main>
        <v-container fluid class="pa-0">
        <nuxt keep-alive/>
        </v-container>
      </v-main>
      <LayoutFooter/>
    </div>
    <LazyLayoutPlantForm v-if="$store.state.plantModal" />
    <LazyLayoutNewsletterForm v-if="$store.state.newsletterModal" />
    <LazyLayoutProductsForm v-if="$store.state.productModal" />
  </v-app>
</template>
<i18n>
{
  "fr": {
    "title": "Warenghem - Sacs et maroquinerie en cuir végétal de vin, Made in France",
    "description": "Warenghem fabrique de la maroquinerie vegan Made in France en cuir végétal de vin pour homme et femme : Sacs de voyage, Sacs de ville, Sacs à dos, Portefeuilles, Ceintures"
  },
  "en": {
    "title": "Warenghem - Bags and leather goods made from wine leather, Made in France",
    "description": "Warenghem manufactures vegan bags and leather goods Made in France in vegetable wine leather for men and women: Travel bags, City bags, Backpacks, Wallets, Belts"
  }
}
</i18n>
<style scoped>
  .svgicon1 {
    max-width: 120px;
  }
  .svgicon2 {
    max-width: 80px;
  }
</style>
<script>
  import { mdiMenu } from '@mdi/js'
  export default {
    data() {
      return {
        sidebar: false,
        hamburgerIcon: mdiMenu,
        structuredData: {
          "@context" : "http://schema.org",
          "@type" : "Organization",
          "name" : "Warenghem",
          "url" : "https://www.warenghem.com/",
          "logo" : {
          "@type":"ImageObject",
          "url":"https://ik.imagekit.io/g1noocuou2/Logos/logo-meta.png"
          },
          "sameAs": [
          "https://www.facebook.com/warenghem.studios",
          "https://www.instagram.com/warenghem.studios/",
          "https://twitter.com/warenghemparis",
          "https://www.linkedin.com/company/70254555/",
          ]
        }
      }
    },
    mounted () {
      const bootcurrency = this.$i18n.localeProperties.currency.toLowerCase()
      document.addEventListener('snipcart.ready', function () {
        window.Snipcart.events.on(window.Snipcart.api.session.setCurrency(bootcurrency))
      })
    },
    head () {
      const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
      return {
        script: [{ type: 'application/ld+json', json: this.structuredData }],
        htmlAttrs: {
          myAttribute: 'My Value',
          ...i18nHead.htmlAttrs
        },
        title: this.$t('title'),
        script: [
          {
            src:"//code.tidio.co/ogztu1mmmiluq02pe5ixizermbxx9irg.js",
            defer: true
            }
        ],
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('description'),
          },
          ...i18nHead.meta
        ],
        link: [
          {
            hid: 'apple-touch-icon',
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png'
          },
          ...i18nHead.link
      ]
      }
    },
      methods:{
           hideModal() {
              document.querySelector('.indianforest').classList.remove('active');
              document.querySelector('.mgforest').classList.remove('active');
              document.getElementById('blackContent').classList.remove('overlay');
              const el = document.body;
              el.classList.remove('modal-open');
              document.documentElement.style.overflowY = 'auto'
          },
        },
      beforeMount () {
            this.$vuetify.theme.light = true;
        },
      beforeCreate () {
            this.$vuetify.theme.light = true;
        },
/*    mounted() {
        if (this.$i18n.getLocaleCookie()) {
            const lang = this.$store.state.langs.items.find(lan => lan.lang === this.$i18n.getLocaleCookie());
            if (lang.iso) {
                this.$store.commit('langs/SET_LANG', lang);
            }
        }
        this.$store.commit('product/SET_LOAD')

    },*/

  }
</script>
