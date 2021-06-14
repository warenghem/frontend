<template>
  <v-app >
    <div id="blackContent" @click="hideModal"></div>
    <div>
    <v-app-bar ref="appBar" style="z-index: 4;" class="menu-bar border-bottom-2" :scroll-threshold="50" dense app scroll-off-screen flat>
      <v-app-bar-nav-icon @click="sidebar = !sidebar" class="ml-2">
          <v-icon>{{ svgPath }}</v-icon>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="centerabsolute v-toolbar__logo pt-2">
        <NuxtLink :to="localePath('/')" tag="span" style="cursor: pointer" class="brand">
          <div class="svglogo logo" width="140" v-html="Logo" />
        </NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          text
          class="text-uppercase item d-none"
        >
          <Cartbutton/>
        </v-btn>
        <AppLangSwitcher/>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="sidebar" temporary app  v-bind:width="304">
      <v-toolbar-title class="text-center py-10">
          <nuxt-link :to="localePath('/')" tag="span" style="cursor: pointer" class="brand">
            <div style="fill: #706f6f;stroke: #706f6f;width:160px" class="mx-auto" v-html="LogoSm" />
          </nuxt-link>
      </v-toolbar-title>
      <v-list>
        <v-list-item
          v-for="(link,l_idx) in $store.state.link.links"
          :class="{'current':$root.currentId===link.elId}"
          :to="localePath('/')+link.url"
          :key="'link_'+l_idx" nuxt
          class="text-uppercase"
        >
          <v-list-item-content>
            {{$t(link.name)}}
          </v-list-item-content>
        </v-list-item>
        <div class="teradeli-medium text-center mt-5 mb-3 greytext">
          {{$t('toolbar.innovationlinktitle')}}
        </div>
        <v-list-item
          v-for="(link,l_idx) in $store.state.link.innovationlinks"
          :class="{'current':$root.currentId===link.elId}"
          :to="localePath('/')+link.url"
          :key="'link_'+l_idx" nuxt
          class="text-uppercase"
        >
          <v-list-item-content>
            <div class="svglogo text-center" :class="link.class" v-html="require(`~/assets/images/`+link.name+`.svg?raw`)" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="position-absolute text-center w-100 pa-5" style="bottom:0">
        <v-btn
          v-for="(link,l_idx) in $store.state.link.sociallinks"
          class="mx-3"
          icon
          :key="'link_'+l_idx"
          target="_blank"
          :href="link.url"
        >
          <v-icon class="d-block" size="24px">{{ link.icon }}</v-icon>
        </v-btn>
      </div>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid class="pa-0">
      <nuxt keep-alive/>
      </v-container>
    </v-main>
    </div>
    <LazyPlantForm v-if="$store.state.plantModal" />
    <LazyNewsletterForm v-if="$store.state.newsletterModal" />
    <LazyProductsForm v-if="$store.state.productModal" />
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