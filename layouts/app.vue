<template>
  <v-app >

    <v-main>
      <v-container fluid class="pa-0">
      <nuxt keep-alive/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
  import { mdiMenu } from '@mdi/js'
  import Logo from "~/assets/images/Warenghem-w-noparis-vf.svg?raw"
  import LogoSm from "~/assets/images/WA-mif-g-vf.svg?raw"
  export default {
    data() {
      return {
        Logo,LogoSm,
        sidebar: false,
        svgPath: mdiMenu,
        structuredData: {
          "@context" : "http://schema.org",
          "@type" : "Organization",
          "name" : "Warenghem",
          "url" : "https://www.warenghem.com/",
          "logo" : {
          "@type":"ImageObject",
          "url":"https://ik.imagekit.io/g1noocuou2/Logos/logo-meta.png"
          },
          "sameAs": [
          "https://www.facebook.com/warenghem.studios",
          "https://www.instagram.com/warenghem.studios/",
          "https://twitter.com/warenghemparis",
          "https://www.linkedin.com/company/70254555/",
          ]
        }
      }
    },
  transition: {
    name: 'slide-fade',
    mode: 'out-in'
  },
  beforeCreate () {
        this.$vuetify.theme.dark = true;
    },
}

</script>