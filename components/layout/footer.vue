<template>
  <v-footer
    app
    dark
    padless
    absolute
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
        class="mb-2"
      >
        <v-btn
          color="white"
          text
          rounded
          class="text-capitalize"
          @click="$store.state.newsletterModal=true"
          style="letter-spacing:inherit!important"
        >
          Newsletter
        </v-btn>
        <v-btn
          v-for="(link,p_idx) in links"
          :key="p_idx"
          color="white"
          text
          rounded
          class="text-capitalize"
          :to="link.url" nuxt
          style="letter-spacing:inherit!important"
        >
          {{$t(link.title)}}
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
        data() {
          return {
                  LogoSmNp,
                  svgPath: mdiInstagram,
                  svgPath2: mdiFacebook,
                  svgPath3: mdiChevronRight,
                  items: [],
                  socials: [
                      {name: "instagram", icon: "'svgPath'", url: "https://www.instagram.com/warenghem.studios/"},
                      {name: "facebook", icon: "'svgPath2'", url: "https://www.facebook.com/warenghem.studios/"},
                  ],
              };
        },
          computed: {
            links() {
                  return [
                    { title: this.$i18n.t('toolbar.help'), url: "/help/" },
                    { title: this.$i18n.t('toolbar.protection'), url: "/legal/" },
                  ];
                }
          }
      }
</script>