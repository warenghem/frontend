<template>
  <v-app>
    <div>
      <!--<slot name="header">-->
        <MainToolbar/>
      <!--</slot>-->
      <!--<slot name="content">-->
        <v-content>
          <nuxt/>
        </v-content>
      <!--</slot>-->
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
  export default {
    data() {
      return {
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