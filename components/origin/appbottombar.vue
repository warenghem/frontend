<template>
    <v-bottom-navigation
        app
        grow
        class="border-top-2"
    >
        <v-btn :to="localePath('/origin/'+productId+'/'+productIndex+'/main/')" nuxt>
            <span>Your bag</span>
            <v-icon>{{ svgPath1 }}</v-icon>
        </v-btn>

        <v-btn :to="localePath('/origin/'+productId+'/'+productIndex+'/trip/')" nuxt>
            <span>Bag's trip</span>
            <v-icon>{{ svgPath2 }}</v-icon>
        </v-btn>

        <v-btn :to="localePath('/origin/'+productId+'/'+productIndex+'/carbon/')" nuxt>
            <span>CO2 compensation</span>
            <v-icon>{{ svgPath2 }}</v-icon>
        </v-btn>
    </v-bottom-navigation>    
</template>

<script>
    import { mdiHomeVariant, mdiInformationOutline } from '@mdi/js'
    export default {
        name: "appbottombar",
        data() {
            return {
                svgPath1: mdiHomeVariant,
                svgPath2: mdiInformationOutline,
            }
        },
        props: {
            productId: {
                type: String,
            },
            productIndex: {
                type: String,
                default: ''
            }
        },
    }
</script>

<style scoped>
  .appBar {
    background: transparent !important;
  }
    .v-bottom-navigation {
        box-shadow: none!important;
    }
</style>