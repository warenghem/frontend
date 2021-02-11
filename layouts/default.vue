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

<script>
  export default {
    head () {
        return this.$nuxtI18nSeo()
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