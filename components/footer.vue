<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="lighten-1 white--text text-center w-100 px-3 px-sm-15"
      color="#19110b"
    >
        <v-card-title class="px-0 pb-0 d-block d-md-flex">
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
                    <v-btn
                        class="mx-3"
                        dark
                        icon
                        target="_blank" v-bind:href="social.url" v-for="social in socials" :key="social"
                    >
                        <v-icon class="d-block" size="24px">{{ social.icon }}</v-icon>
                    </v-btn>
            </v-text>
        </v-card-title>
        <v-row
          justify="center"
          no-gutters
        >
            <v-btn
            v-for="link in links" :key="link"
              color="white"
              text
              rounded
              class="my-2"
              :href="link.url"
            >
              {{ link.title }}
            </v-btn>
            <v-btn
              color="white"
              text
              rounded
              class="my-2"
              @click="$store.state.plantModal=true"
            >
              NEWSLETTER
            </v-btn>
        </v-row>

        <v-divider></v-divider>

        <v-card-text class="white--text">
            © {{ new Date().getFullYear() }} — Warenghem
        </v-card-text>
    </v-card>
  </v-footer>
</template>

      <!--'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',-->

<script>
  export default {
    data: () => ({
    links: [
      {title:"HOME", url:"/"},
    ],
    socials: [
      {name:"instagram", icon:"mdi-instagram", url:"https://www.instagram.com/warenghem.studios/"},
      {name:"facebook", icon:"mdi-facebook", url:"https://www.facebook.com/warenghem.studios/"},
    ],
    }),
  }
</script>