<template>
<div>
    <v-btn
        @click="$store.state.langModal=true"
        text

        class="px-0 nohover item priceHide h-100 w-100 rounded-0"
    >
        <img :src="$i18n.localeProperties.img"
            width="24"
            alt="lang flag"
            class="rounded-lg"
        />
        <span class="px-0 px-sm-1"></span>
        <div class="d-none d-sm-block" style="margin-bottom: -1px;">
            {{$i18n.localeProperties.currencySign}}
        </div>
    </v-btn>
    <v-dialog
            v-model="$store.state.langModal"
            persistent
            transition="dialog-bottom-transition"
            content-class="bg-white bottom-dialog rounded-b-0 rounded-t-lg w-100"
            style="transform-origin: center center;margin: 0;!important"
    >
        <div style="overflow: auto;" class="bg-white toolbar">
            <div style="height: 50px;position: fixed;width: 100%;z-index: 2;" class="d-flex justify-space-between align-center border-bottom-2">
                <div class="text-center sub-title pl-3">Choose your region</div>
                <v-btn
                    text
                    color="black"
                    @click="$store.state.langModal = false"
                    style="font-size: 26px"
                    class="px-0 h-100 border-left-2 rounded-0"
                >
                    <v-icon>{{ svgPath2 }}</v-icon>
                </v-btn>
            </div>
            <v-card-text style="margin-top:50px" class="pa-0 h-100">
                <v-row class="ma-0">
                    <div class="titlesmall teradeli-medium primary--text pa-5 pb-0">Europe</div>
                    <v-container fluid class="productgridhome">
                        <div v-for="locale in europeavailableLocales" :key="locale.code">
                            <nuxt-link
                                :to="switchLocalePath(locale.code)"
                                class="flex items-center whitespace-no-wrap"
                                @click.native="$snipcart.setLanguage(locale.code); switchCurrencyFunc(locale.currency)"
                                >
                                <v-card 
                                    class="bg-white rounded-pill px-3"
                                    @click="$store.state.langModal = false"
                                    ripple
                                    style="height:70px"
                                >
                                    <v-card-actions class="justify-center h-100 text-center">
                                        <div>
                                            <span  style="height:24px">
                                                <img :src="locale.img"
                                                    width="24"
                                                    class="mr-3 rounded-lg"
                                                    alt="lang flag"
                                                    style="transform: translateY(7px);"
                                                />
                                            </span>
                                            {{ locale.name }}
                                            <span class="pr-2"></span>
                                            {{ locale.currencySign }}
                                        </div>
                                    </v-card-actions>
                                </v-card>
                            </nuxt-link>
                        </div>
                    </v-container>
                    <div class="titlesmall teradeli-medium primary--text pa-5 pb-0 pt-0">Americas</div>
                    <v-container fluid class="productgridhome">
                        <div v-for="locale in americasavailableLocales" :key="locale.code">
                            <nuxt-link
                                :to="switchLocalePath(locale.code)"
                                class="flex items-center whitespace-no-wrap"
                                @click.native="$snipcart.setLanguage(locale.code); switchCurrencyFunc(locale.currency)"
                                >
                                <v-card 
                                    class="bg-white rounded-pill px-3"
                                    @click="sheet = false"
                                    style="height:70px"
                                    ripple
                                >
                                    <v-card-actions class="justify-center h-100 text-center">
                                        <div>
                                            <span  style="height:24px">
                                                <img :src="locale.img"
                                                    width="24"
                                                    class="mr-3 rounded-lg"
                                                    alt="lang flag"
                                                    style="transform: translateY(7px);"
                                                />
                                            </span>
                                            {{ locale.name }}
                                            <span class="pr-2"></span>
                                            {{ locale.currencySign }}
                                        </div>
                                    </v-card-actions>
                                </v-card>
                            </nuxt-link>
                        </div>
                    </v-container>
                    <div class="pa-5 pt-0">
                        <span class="titlesmall teradeli-medium primary--text">Other Regions : </span>
                        <span @click="sheet = false" v-for="locale in otheravailableLocales" :key="locale.code">
                            <nuxt-link
                                :to="switchLocalePath(locale.code)"
                                @click.native="$snipcart.setLanguage(locale.code); switchCurrencyFunc(locale.currency)"
                                >
                                {{ locale.name }}
                                <span class="pr-2"></span>
                                {{ locale.currencySign }}
                            </nuxt-link>
                        </span>
                    </div>
                </v-row>
            </v-card-text>
        </div> 
    </v-dialog>
</div>
</template>

<script>
import { mdiClose } from '@mdi/js'
export default {
    name: 'langswitcher',
    data() {
        return {
            svgPath2: mdiClose,
            }
    },
  computed: {
    europeavailableLocales () {
      return this.$i18n.locales.filter(function (locale) {
        return locale.region == 'Europe'
        })
    /* for not displaying current lang : .filter(i => i.code !== this.$i18n.locale) + v-if="$i18n.locale !== locale.code" in nuxt link */
    },
    americasavailableLocales () {
      return this.$i18n.locales.filter(function (locale) {
        return locale.region == 'Americas'
        })
    /* for not displaying current lang : .filter(i => i.code !== this.$i18n.locale) + v-if="$i18n.locale !== locale.code" in nuxt link */
    },
    otheravailableLocales () {
      return this.$i18n.locales.filter(function (locale) {
        return locale.region == 'Other'
        })
    /* for not displaying current lang : .filter(i => i.code !== this.$i18n.locale) + v-if="$i18n.locale !== locale.code" in nuxt link */
    },
  },
  methods: {
    switchCurrencyFunc (currency) {
        window.Snipcart.api.session.setCurrency(currency)
        }
    }
}
</script>
<style scoped lang="scss">
    .productgridhome {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    padding: 1rem!important;
    grid-gap: 1rem;
        @media #{map-get($display-breakpoints, 'xs-only')} {
            grid-template-columns: repeat(1, minmax(0, 1fr));
            grid-gap: 0.5rem;
        }
    }
</style>