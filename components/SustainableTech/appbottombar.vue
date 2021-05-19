<template>
    <v-bottom-navigation
        shift
        grow
        fixed
        class="border-top-2"
    >
        <v-btn to='/origin/' nuxt>
            <span>Home</span>
            <v-icon>{{ svgPath1 }}</v-icon>
        </v-btn>

        <v-btn to='/origin/journey/' nuxt>
            <span>Trace</span>
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