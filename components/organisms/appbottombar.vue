<template>
    <v-bottom-navigation
        shift
        grow
        fixed
    >
        <v-btn to='/sustainabletech/tracabilite/' nuxt>
            <span>Home</span>
            <v-icon>mdi-home-variant</v-icon>
        </v-btn>

        <v-btn to='/sustainabletech/tracabilite/informations' nuxt>
            <span>Trace</span>
            <v-icon>mdi-information-outline</v-icon>
        </v-btn>

    </v-bottom-navigation>
</template>

<style scoped>
  .appBar {
    background: transparent !important;
  }
</style>