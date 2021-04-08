<template>
  <v-theme-provider dark>
    <v-footer
      app
      padless
      absolute
    >
      <v-card
        flat
        tile
        color="#000000"
        class="text-center w-100 px-3 px-sm-15"
      >
        <v-card-title class="px-0 pb-0 d-block d-md-flex">
          <div class="d-block d-md-flex">
            <NuxtLink :to="localePath('/')">
              <div style="fill: #ffffff;stroke: #ffffff;width:140px" class="py-5 ma-auto ma-sm-0" v-html="LogoSmNp"/>
            </NuxtLink>
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
              icon
              target="_blank"
              href="https://www.instagram.com/warenghem.studios/"
            >
              <v-icon class="d-block" size="24px">{{ svgPath }}</v-icon>
            </v-btn>
            <v-btn
              class="mx-3"
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
            color="#666666"
            text
            rounded
            @click="$store.state.newsletterModal=true"
            style="letter-spacing:inherit!important;text-transform: inherit;"
            class="font-weight-bold"
          >
            Newsletter
          </v-btn>
          <v-btn
            v-for="(link,p_idx) in links"
            :key="p_idx"
            color="#666666"
            text
            rounded
            :to="link.url" nuxt
            style="letter-spacing:inherit!important;text-transform: inherit;"
            class="font-weight-bold"
          >
            {{$t(link.title)}}
          </v-btn>
        </v-row>

        <v-divider></v-divider>

        <v-card-text color="#666666">
          © {{ new Date().getFullYear() }} — Warenghem
        </v-card-text>
      </v-card>
    </v-footer>
  </v-theme-provider>
</template>

<script>
    import LogoSmNp from "~/assets/images/Logo-w-noparis-vf.svg?raw";
    import {mdiInstagram, mdiFacebook, mdiChevronRight} from '@mdi/js'
    export default {
        name: 'mainfooter',
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
                    { title: this.$i18n.t('toolbar.studios'), url: this.localePath('/studios/') },
                    { title: this.$i18n.t('toolbar.help'), url: this.localePath('/help/') }, 
                    { title: this.$i18n.t('toolbar.payments'), url: this.localePath('/payments/') },
                    { title: this.$i18n.t('toolbar.shipping'), url: this.localePath('/shipping/') },
                    { title: this.$i18n.t('toolbar.partnership'), url: this.localePath('/partnership/') },
                    { title: this.$i18n.t('toolbar.protection'), url: this.localePath('/legal/') },
                  ];
                }
          }
      }
</script>