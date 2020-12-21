<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="grey darken-4 lighten-1 white--text text-center w-100 px-15"
    >
        <v-card-title class="px-0 d-block d-md-flex">
            <v-text flat tile class="d-block d-md-flex" >
                <img src="https://ik.imagekit.io/g1noocuou2/Logos/Warenghem_w_noparis_vf.svg" class="py-5" width="140">
                <v-breadcrumbs dark :items="items">
                    <template v-slot:divider>
                        <v-icon>mdi-forward</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-text>

            <v-spacer></v-spacer>
            <v-text>
                <a target="_blank" v-bind:href="social.url" v-for="social in socials" :key="social.name">
                    <v-btn
                        class="mx-3"
                        dark
                        icon
                    >
                        <v-icon class="d-block" size="24px">{{ social.icon }}</v-icon>
                    </v-btn>
                </a>
            </v-text>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="white--text">
            ® {{ new Date().getFullYear() }} — Warenghem
        </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
    socials: [
      {name:"instagram", icon:"mdi-instagram", url:"https://www.instagram.com/warenghem.studios/"},
      {name:"facebook", icon:"mdi-facebook", url:"https://www.facebook.com/warenghem.studios/"},
    ],
        items:[]
    }),
  }
</script>
