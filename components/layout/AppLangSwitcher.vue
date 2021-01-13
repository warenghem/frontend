<template>
  <v-bottom-sheet v-if="availableLocales.length" v-model="sheet">
    <template v-slot:activator="{ on, attrs }">
        <v-btn
            text
            v-bind="attrs"
            v-on="on"
            :ripple="false"
            class="nohover item priceHide"
        >
            <img :src="$i18n.localeProperties"
                width="24"
                alt="lang flag"
                style="margin-top:2px"
                class="d-none"
            />
            <v-icon>{{ svgPath }}</v-icon>
            <span class="px-2">-</span>
            <div>
                {{$i18n.localeProperties.name}}
            </div>
        </v-btn>
    </template> 
    <slot name="langSwitcher">
        <div class="bg-white">
            <div style="height: 60px" class="d-flex justify-space-between align-center border-bottom-2">
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
                <v-row class="pvw bgcard">
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
                                        <img :src="locale.img"
                                            width="24"
                                            class="ml-3 d-none"
                                            alt="lang flag"
                                        />
                                        {{ locale.name }}
                                        <span class="px-2">-</span>
                                        {{ locale.currencySign }}
                                    </v-card-actions>
                                </v-card>
                            </nuxt-link>
                        </div>
                    </v-container>
                </v-row>
            </div> 
    </slot>
  </v-bottom-sheet>
</template>

<script>
import { mdiTranslate, mdiClose } from '@mdi/js'
export default {
    data() {
        return {
            svgPath: mdiTranslate,
            svgPath2: mdiClose
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