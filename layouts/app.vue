<template>
  <v-app >
    <v-main>
      <v-container fluid :class="{ 'trip' : page.includes('trip'), 'carbon' : page.includes('carbon') }" class="pa-0">
      <nuxt keep-alive/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { mapState } from 'vuex'

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
  computed: mapState('transitions',['page'])
}

</script>
<style lang="scss" scoped>
  .cardHeader {
    z-index: 2;
    transform: translateY(0px);
    margin-top: 0px;
    transition: all 0.5s ease;
    .btnCard, .cardText {
      visibility: visible;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .v-avatar {
      transition: all 0.5s ease;
    }
  }
  #btnCard, #mapCount {
    opacity: 1 ;
    transition: all 0.5s ease;
  }
::v-deep .trip, ::v-deep .carbon {
    .btnCard, .cardText  {
      display: none;
      transition: all 0.5s ease;
    }
    .cardHeader  .v-avatar{
      border-radius: 100% !important;
      height: 70px !important;
      min-width: 70px !important;
      width: 70px !important;
      margin:0!important;
      transition: all 0.5s ease;
    }
}
::v-deep .carbon {
  #trip, #general  {
    display: none;
    transition: all 0.5s ease;
  }
  .cardHeader {
    z-index: 2;
    transform: translateY(100px) translateX(15px);
    margin-top: -70px;
    transition: transform margin 0.5s ease;
    background: none!important;
  }
}
::v-deep .general {
  #trip, #carbon  {
    display: none;
    transition: all 0.5s ease;
  }
}
::v-deep .trip {
  #carbon, #general  {
    display: none;
    transition: all 0.5s ease;
  }
  .cardHeader {
    z-index: 2;
    transform: translateY(110px);
    margin-top: -95px;
    transition: transform margin 0.5s ease;
    background: none!important;
  }
  #header {
    position: fixed;
    width: 100vw;
    height: 100vh;
    transition: all 0.5s ease;
      #map{
        margin: 0px;
        height: 100%!important;
        border-radius: 0px !important;
        transition: all 0.5s ease;
      }
    }
    #btnCard, #mapCount {
      opacity: 0 ;
      transition: all 0.5s ease;
    }
    #trip {
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }
</style>