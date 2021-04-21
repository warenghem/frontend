<template>
  <v-app>
    <div id="blackContent" @click="hideModal"></div>
    <div>
    <v-app-bar style="z-index: 4;" class="menu-bar border-bottom-2 w-100" hide-on-scroll flat height="42px">
      <v-app-bar-nav-icon @click="sidebar = !sidebar" class="ml-2">
          <v-icon>{{ svgPath }}</v-icon>
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
      <v-toolbar-title class="centerabsolute v-toolbar__logo pt-1">
        <NuxtLink :to="localePath('/')" tag="span" style="cursor: pointer" class="brand">
          <div class="svglogo logo" width="140" v-html="Logo" />
        </NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          text
          class="px-0"
        >
          <AppLangSwitcher/>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="sidebar" temporary app  v-bind:width="304">
      <v-toolbar-title class="text-center py-10">
          <nuxt-link :to="localePath('/')" tag="span" style="cursor: pointer" class="brand">
            <div style="fill: #706f6f;stroke: #706f6f;width:160px" class="mx-auto" v-html="LogoSm" />
          </nuxt-link>
      </v-toolbar-title>
      <v-list>
        <v-list-item
          v-for="(link,l_idx) in $store.state.link.links"
          :class="{'current':$root.currentId===link.elId}"
          :to="localePath('/')+link.url"
          :key="'link_'+l_idx" nuxt
          class="text-uppercase"
        >
          <v-list-item-content>
            {{$t(link.name)}} 
          </v-list-item-content>
        </v-list-item>
        <div class="teradeli-medium text-center mt-5">
          {{$t('toolbar.innovationlinktitle')}}
        </div>
        <v-list-item
          v-for="(link,l_idx) in $store.state.link.innovationlinks"
          :class="{'current':$root.currentId===link.elId}"
          :to="localePath('/')+link.url"
          :key="'link_'+l_idx" nuxt
          class="text-uppercase"
        >
          <v-list-item-content>
            {{link.name}} 
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="position-absolute text-center w-100 pa-5" style="bottom:0">
        <v-btn
          v-for="(link,l_idx) in $store.state.link.sociallinks"
          class="mx-3"
          icon
          :key="'link_'+l_idx"
          target="_blank"
          :href="link.url"
        >
          <v-icon class="d-block" size="24px">{{ link.icon }}</v-icon>
        </v-btn>
      </div>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid class="pa-0">
      <nuxt/>
      </v-container>
    </v-main>
    <Footer/>
    </div>
    <LazyPlantForm v-if="$store.state.plantModal" />
    <LazyNewsletterForm v-if="$store.state.newsletterModal" />
    <LazyProductsForm v-if="$store.state.productModal" />
  </v-app>
</template>
<i18n>
{
  "fr": {
    "title": "Warenghem - Chaussures et maroquinerie en cuir végétal de vin, Made in France",
    "description": "Warenghem fabrique de la maroquinerie et des chaussures vegan Made in France en cuir végétal de vin pour homme et femme : Sacs de voyage, Sacs de ville, Sacs à dos, Portefeuille, Ceintures"
  },
  "en": {
    "title": "Warenghem - Shoes and bags made from wine leather, Made in France",
    "description": "Warenghem manufactures vegan leather goods and shoes Made in France in vegetable wine leather for men and women: Travel bags, City bags, Backpacks, Wallets, Belts"
  }
}
</i18n>
<script>
  import { mdiMenu } from '@mdi/js'
  import Logo from "~/assets/images/Warenghem-w-noparis-vf.svg?raw"
  import LogoSm from "~/assets/images/WA-mif-g-vf.svg?raw"
  export default {
    data() {
      return {
        Logo,LogoSm,
        sidebar: false,
        svgPath: mdiMenu,
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
        }
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