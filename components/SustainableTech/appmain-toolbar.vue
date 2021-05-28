<template>
  <section class="appBar">
    <div class="topBar text-center d-none">
      {{$t('secondtoolbar.message')}}
    </div>
    <v-navigation-drawer v-model="sidebar" temporary app v-bind:width="304">
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
          :key="'link2_'+l_idx" nuxt
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
          :key="'link3_'+l_idx"
          target="_blank"
          :href="link.url"
        >
          <v-icon class="d-block" size="24px">{{ link.icon }}</v-icon>
        </v-btn>
      </div>
    </v-navigation-drawer>

    <v-app-bar app ref="appBar" style="z-index: 4;" class="menu-bar border-bottom-2" :scroll-threshold="50" dense flat>

      <v-app-bar-nav-icon class="ml-2" @click="sidebar = !sidebar">
        <v-icon>{{ svgPath1 }}</v-icon>
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-toolbar-title class="centerabsolute v-toolbar__logo pt-2">
        <NuxtLink :to="localePath('/')" tag="span" style="cursor: pointer" class="brand">
          <div class="svglogo logo" width="140" v-html="Logo" />
        </NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <themeswitcher/>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn
          text
          class="px-0"
        >
          <AppLangSwitcher/>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </section>
</template>
<style scoped>
  .svgicon1 {
    max-width: 120px;
  }
  .svgicon2 {
    max-width: 80px;
  }
</style>
<script>
    import { mdiMenu } from '@mdi/js'
    import Logo from "~/assets/images/Warenghem-w-noparis-vf.svg?raw"
    import LogoSm from "~/assets/images/WA-mif-g-vf.svg?raw"
    export default {
        name: "appmain-toolbar",
        data() {
            return {
                Logo,LogoSm,
                svgPath1: mdiMenu,
                sidebar: false,
                goDark: false,
            }
        },
        props: {
            type: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style scoped lang="scss">

  .appBar {
    position: relative;
    z-index: 300001;

    .topBar {
      background: #0A3137;
      color: #fff;
      padding: 7px;
      font-size: 12px;
    }

    @media(min-width: 961px) {
      border-bottom: solid 1px #c0c0c080;
    }

  }
</style>
