<template>
    <v-bottom-navigation
        shift
        grow
        fixed
    >
        <v-btn to='/sustainabletech/origin/' nuxt>
            <span>Home</span>
            <v-icon>{{ svgPath1 }}</v-icon>
        </v-btn>

        <v-btn to='/sustainabletech/origin/journey/' nuxt>
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
</style>