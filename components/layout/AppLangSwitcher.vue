<template>
  <v-bottom-sheet scrollable v-if="availableLocales.length" v-model="sheet">
    <template v-slot:activator="{ on, attrs }">
        <v-btn
            text
            v-bind="attrs"
            v-on="on"
            :ripple="false"
            class="nohover item priceHide"
        >
            <img :src="$i18n.localeProperties.img"
                width="24"
                alt="lang flag"
            />
            <span class="px-0 px-sm-2"></span>
            <div class="d-none d-sm-block" style="font-size:1.2rem">
                {{$i18n.localeProperties.currencySign}}
            </div>
        </v-btn>
    </template> 
    <slot name="langSwitcher">
        <div class="bg-white mobileoverflow">
            <div style="height: 60px;" class="d-flex justify-space-between align-center border-bottom-2">
                <div class="text-center sub-title pl-3">Choose your region</div>
                <v-btn
                    text
                    color="black"
                    @click="sheet = false"
                    style="font-size: 26px"
                    class="px-0 h-100 border-left-2 rounded-0"
                >
                    <v-icon>{{ svgPath2 }}</v-icon>
                </v-btn>
            </div>
            <v-card-text style="overflow: auto;" class="pa-0 h-100">
            <v-row class="ma-0 bgcard">
                <v-container fluid class="productgridhome">
                    <div v-for="locale in availableLocales" :key="locale.code">
                        <nuxt-link
                            :to="switchLocalePath(locale.code)"
                            class="flex items-center whitespace-no-wrap"
                            >
                            <v-card 
                                class="bg-white rounded-lg pa-5 h-100"
                                @click="sheet = false"
                                ripple
                            >
                                <v-card-actions class="justify-center h-100">
                                    <div>
                                        <img :src="locale.img"
                                            width="24"
                                            class="mr-3"
                                            alt="lang flag"
                                            style="transform: translateY(6px);"
                                        />
                                        {{ locale.name }}
                                        <span class="pr-2"></span>
                                        {{ locale.currencySign }}
                                    </div>
                                </v-card-actions>
                            </v-card>
                        </nuxt-link>
                    </div>
                </v-container>
            </v-row>
            </v-card-text>
        </div> 
    </slot>
  </v-bottom-sheet>
</template>

<script>
import { mdiClose } from '@mdi/js'
export default {
    data() {
        return {
            svgPath2: mdiClose,
            sheet:false,
            }
    },
  computed: {
    availableLocales () {
      return this.$i18n.locales/* for not displaying current lang : .filter(i => i.code !== this.$i18n.locale) + v-if="$i18n.locale !== locale.code" in nuxt link*/
    },
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
    @media (max-width: 48em) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        grid-gap: 0.5rem;
    }
    }
</style>