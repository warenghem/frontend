<template>
  <v-app>
    <div>
      <slot name="header">
        <MainToolbar/>
      </slot>
      <slot name="content">
        <nuxt/>
      </slot>
      <Footer/>
    </div>
  </v-app>
</template>
<script>
    export default {
        mounted() {
            if (this.$i18n.getLocaleCookie()) {
                const lang = this.$store.state.langs.items.find(lan => lan.lang === this.$i18n.getLocaleCookie());
                if(lang.iso) {
                    this.$store.commit('langs/SET_LANG', lang);
                    this.$store.commit('product/SET_LOAD')
                }
            }


        },

    }
</script>
