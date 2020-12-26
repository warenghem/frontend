<template>
    <v-toolbar-bar class="menubar d-flex pa-0 filter-bar">
      <Backbutton/>
      <div class="pl-5 d-flex border-left-2">
        <div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
          {{$t('title')}}
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-tabs
        v-model="tab"
        right
        show-arrows
      >
        <v-tabs-slider color="#0081a7"></v-tabs-slider>

        <v-tab
          v-for="(tab,t_idx) in tabs"
          :key="t_idx"
        >
          {{ tab.menu }}
        </v-tab>
      </v-tabs>
    </v-toolbar-bar>
</template>

<script>

export default {
        name: "calender-section",
        data() {
            return {
                tabs: this.$t('tabs'),
            }
        },
        i18n: {
            messages: {
                en: {
                    title: "Legal",
                    tabs: [
                        {
                            menu: 'Politique de protection des données',
                        },
                        {
                            menu: 'Confitions générales de ventes',
                        },
                        {
                            menu: 'Mentions Légales',
                        },
                    ]
                },
                fr: {
                    title: "Mentions Légales",
                    tabs: [
                        {
                            menu: 'Politique de protection des données',
                        },
                        {
                            menu: 'Confitions générales de ventes',
                        },
                        {
                            menu: 'Mentions Légales',
                        },
                    ]
                },
            }
        },
}
</script>

<style scoped lang="scss">
</style>
