<template>
    <v-tooltip v-if="!$vuetify.theme.dark" bottom>
    <template v-slot:activator="{ on }">
        <v-btn v-on="on" depressed @click="darkMode">
        <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
        </v-btn>
    </template>
    <span>Dark Mode On</span>
    </v-tooltip>
    <v-tooltip v-else bottom>
    <template v-slot:activator="{ on }">
        <v-btn v-on="on" depressed @click="darkMode">
        <v-icon >mdi-white-balance-sunny</v-icon>
        </v-btn>
    </template>
    <span>Dark Mode Off</span>
    </v-tooltip>
</template>

<script>
    export default {
        name: "themeswitcher",
        methods: {
          darkMode() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
          }
        }
    }
</script>