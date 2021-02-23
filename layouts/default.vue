<template>
  <v-app>
    <div>
    <v-app-bar style="z-index: 4;" class="menu-bar border-bottom-2 w-100" app hide-on-scroll flat height="42px">
      <v-app-bar-nav-icon @click="sidebar = !sidebar" class="ml-2">
          <v-icon>{{ svgPath }}</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-items class="d-none d-md-block" v-for="(link,l_idx) in $store.state.link.links"
                       :key="'link_btn_l_'+l_idx">
        <v-btn text class="text-uppercase item"
               :class="{'current':$root.currentId===link.elId}"
               :to="'/'+$i18n.locale+link.elId" nuxt
               v-if="link.position==='left'"
        >
          {{$t(link.name)}}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title class="centerabsolute v-toolbar__logo pt-1">
        <nuxt-link :to="'/'+$i18n.locale" tag="span" style="cursor: pointer" class="brand">
          <div class="svglogo logo" width="140" v-html="Logo" />
        </nuxt-link>
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
          <nuxt-link :to="'/'+$i18n.locale" tag="span" style="cursor: pointer" class="brand">
            <div style="fill: #706f6f;stroke: #706f6f;width:160px" class="mx-auto" v-html="LogoSm" />
          </nuxt-link>
      </v-toolbar-title>
      <v-list>
        <v-list-item
          v-for="(link,l_idx) in $store.state.link.links"
          :class="{'current':$root.currentId===link.elId}"
          :to="'/'+$i18n.locale+link.elId"
          :key="'link_'+l_idx" nuxt
          class="text-uppercase"
        >
          <v-list-item-content>
            {{$t(link.name)}}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid class="pa-0">
      <nuxt/>
      </v-container>
    </v-main>
    <Footer/>
    </div>
    <LazyPlantForm v-if="$store.state.newsletterModal" />
    <LazyHistoriesForm v-if="$store.state.historiesModal" />
    <LazyProductsForm v-if="$store.state.productModal" />
  </v-app>
</template>
<i18n>
{
  "fr": {
    "title:": "Warenghem - Chaussures et maroquinerie en cuir végétal de vin, Made in France",
    "description": "Warenghem fabrique de la maroquinerie et des chaussures vegan Made in France en cuir végétal de vin pour homme : Sacs de voyage, Sacs de ville, Sacs à dos, Portefeuille, Ceintures"
  },
  "en": {
    "title": "Warenghem - Shoes and bags made from wine leather, Made in France",
    "description": "Hola mondial!"
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