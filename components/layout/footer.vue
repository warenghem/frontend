<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      color="wablack"
      class="white--text text-center w-100 px-3 px-sm-15"
    >
      <v-card-title class="px-0 pb-0 d-block d-md-flex">
        <div class="d-block d-md-flex">
          <div style="fill: #ffffff;stroke: #ffffff;width:140px" class="py-5 ma-auto ma-sm-0" v-html="LogoSmNp"/>
          <!--<v-breadcrumbs class="justify-center" style="margin-bottom:5px" dark :items="crumbs">
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item
                nuxt
                ripple
                :disabled="item.disabled"
              >
                <a :href="item.to" class="text-white">
                  {{ item.title }}
                </a>
              </v-breadcrumbs-item>
            </template>
            <template v-slot:divider>
              <v-icon small>{{ svgPath3 }}</v-icon>
            </template>
          </v-breadcrumbs>-->
        </div>
        <v-spacer></v-spacer>

          <v-btn
            class="mx-3"
            dark
            icon
            target="_blank"
            href="https://www.instagram.com/warenghem.studios/"
          >
            <v-icon class="d-block" size="24px">{{ svgPath }}</v-icon>
          </v-btn>
          <v-btn
            class="mx-3"
            dark
            icon
            target="_blank"
            href="https://www.facebook.com/warenghem.studios/"
          >
            <v-icon class="d-block" size="24px">{{ svgPath2 }}</v-icon>
          </v-btn>
      </v-card-title>
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
          @click="$store.state.plantModal=true"
        >
          Newsletter
        </v-btn>
        <v-btn
          v-for="link in links" :key="link.title"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url" nuxt
        >
          {{ link.title }}
        </v-btn>
      </v-row>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        © {{ new Date().getFullYear() }} — Warenghem
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
    import LogoSmNp from "~/assets/images/Logo-w-noparis-vf.svg?raw";
    import {mdiInstagram, mdiFacebook, mdiChevronRight} from '@mdi/js'
    export default {
      data: function () {
          return {
                  LogoSmNp,
                  svgPath: mdiInstagram,
                  svgPath2: mdiFacebook,
                  svgPath3: mdiChevronRight,
                  links: [
                      {title: this.$i18n.t('protection'), url: "/legal/"},
                  ],
                  items: [],
                  socials: [
                      {name: "instagram", icon: "'svgPath'", url: "https://www.instagram.com/warenghem.studios/"},
                      {name: "facebook", icon: "'svgPath2'", url: "https://www.facebook.com/warenghem.studios/"},
                  ],
              };
          }
      }
</script>
<i18n>
{
	"en": {
		"protection": "Legal notices and Data policy"
	},
	"fr": {
		"protection": "Mentions légales et Données personnelles"
	}
}
</i18n>