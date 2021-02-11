<template>
  <section class="appBar">
    <div class="topBar text-center d-none">
      {{$t('secondtoolbar.message')}}
    </div>
    <v-navigation-drawer v-model="sidebar" temporary app v-bind:width="304">
      <v-toolbar-title class="text-center py-10">
          <nuxt-link :to="'/'+$i18n.locale" tag="span" style="cursor: pointer" class="brand">
            <div style="fill: #706f6f;stroke: #706f6f;width:160px" class="mx-auto" v-html="LogoSm" />
          </nuxt-link>
      </v-toolbar-title>
      <v-list>
        <v-list-item
          v-for="(link,l_idx) in $store.state.link.links"
          :class="{'current':$root.currentId===link.elId}"
          :to="'/'+$i18n.locale+link.elId"
          :key="'link_'+l_idx" nuxt
        >
          <v-list-item-content>
            {{$t(link.name)}}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar clipped-left class="menu-bar border-bottom-2" flat height="42px">

      <v-app-bar-nav-icon @click="sidebar = !sidebar" class="ml-2">
          <v-icon>{{ svgPath }}</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-items class="d-none d-md-block" v-for="(link,l_idx) in $store.state.link.links"
                       :key="'link_btn_l_'+l_idx">
        <v-btn text class="text-uppercase item"
               :class="{'current':$root.currentId===link.elId}"
               :to="'/'+$i18n.locale+link.elId" nuxt
               v-if="link.position==='left'"
        >
          {{$t(link.name)}}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title class="centerabsolute v-toolbar__logo pt-1">
        <nuxt-link :to="'/'+$i18n.locale" tag="span" style="cursor: pointer" class="brand">
          <div class="svglogo logo" width="140" v-html="Logo" />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
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

<script>
    import { mdiMenu } from '@mdi/js'
    import Logo from "~/assets/images/Warenghem-w-noparis-vf.svg?raw"
    import LogoSm from "~/assets/images/WA-mif-g-vf.svg?raw"
    export default {
        name: "main-toolbar",
        data() {
            return {
                Logo,LogoSm,
                sidebar: false,
                svgPath: mdiMenu
              }
        },

    }
</script>

<style scoped lang="scss">

  .menu-bar {
    z-index: 6;
    position: relative;

    .topBar {
      background: #0A3137;
      color: #fff;
      padding: 7px;
      font-size: 12px;
    }
  }
</style>
