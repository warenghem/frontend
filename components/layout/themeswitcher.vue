<template>
    <v-tooltip v-if="!$vuetify.theme.dark" bottom>
    <template v-slot:activator="{ on }">
        <v-btn v-on="on" depressed @click="darkMode">
        <v-icon class="mr-1">{{ svgPath1 }}</v-icon>
        </v-btn>
    </template>
    <span>Dark Mode On</span>
    </v-tooltip>
    <v-tooltip v-else bottom>
    <template v-slot:activator="{ on }">
        <v-btn v-on="on" depressed @click="darkMode">
        <v-icon >{{ svgPath2 }}</v-icon>
        </v-btn>
    </template>
    <span>Dark Mode Off</span>
    </v-tooltip>
</template>

<script>
    import { mdiWhiteBalanceSunny, mdiMoonWaxingCrescent } from '@mdi/js'
    export default {
        name: "themeswitcher",
        data() {
            return {
                svgPath1: mdiMoonWaxingCrescent,
                svgPath2: mdiWhiteBalanceSunny
              }
        },
        methods: {
          darkMode() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
          }
        }
    }
</script>