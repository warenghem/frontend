<template>
  <v-theme-provider light>
    <v-footer
      app
      padless
      absolute
    >
      <v-card
        flat
        tile
        color="bgcard"
        class="text-center w-100 px-3 px-sm-15"
      >
        <v-card-title class="px-0 pb-0 d-block d-md-flex">
          <div class="d-block d-md-flex">
            <NuxtLink :to="localePath('/')">
              <div style="width:150px" class="svglogogrey py-5 ma-auto ma-sm-0" v-html="LogoSmNp"/>
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
           <div class="d-block d-md-flex">
            <v-btn
              v-for="(link,l_idx) in $store.state.link.sociallinks"
              class="mx-3 mb-5"
              icon
              :key="'link_'+l_idx"
              target="_blank"
              :href="link.url"
            >
              <v-icon class="d-block" size="24px">{{ link.icon }}</v-icon>
            </v-btn>
           </div>
        </v-card-title>
        <v-row
          justify="center"
          no-gutters
          class="mb-2"
        >
          <v-btn
            text
            rounded
            @click="$store.state.newsletterModal=true"
            style="letter-spacing:inherit!important;text-transform: inherit;color:#767676!important"
          >
            Newsletter
          </v-btn>
          <v-btn
            v-for="(link,l_idx) in $store.state.link.footerlinks"
            text
            rounded
            :key="'link_'+l_idx"
            :to="localePath('/')+link.url" nuxt
            style="letter-spacing:inherit!important;text-transform: inherit;color:#767676!important"
          >
            {{$t(link.name)}} 
          </v-btn>
        </v-row>
        <References/>
        <v-divider></v-divider>

        <v-card-text class="greytext">
          © {{ new Date().getFullYear() }} — Warenghem
        </v-card-text>
      </v-card>
    </v-footer>
  </v-theme-provider>
</template>

<script>
    import LogoSmNp from "~/assets/images/Warenghem-w-noparis-vf.svg?raw";
    import {mdiChevronRight} from '@mdi/js'
    export default {
        name: 'mainfooter',
        data() {
          return {
                  LogoSmNp,
                  svgPath3: mdiChevronRight,
                  items: [],
              }; 
        }
      }
</script>