<template>
  <section class="appBar">
    <div class="topBar text-center d-none">
      {{$t('secondtoolbar.message')}}
    </div>
    <v-navigation-drawer v-model="sidebar" temporary app v-bind:width="304">
      <v-toolbar-title class="text-center py-10">
          <nuxt-link to="/" tag="span" style="cursor: pointer" class="brand">
            <img src="https://ik.imagekit.io/g1noocuou2/tr:q-65,w-160,dpr-2/Logos/WA_mif_g_vf.png" width="160">
          </nuxt-link>
      </v-toolbar-title>
      <v-list>
        <v-list-item
          v-for="(link,l_idx) in $store.state.link.links"
          :class="{'current':$root.currentId===link.elId}"
          :to="'/'+$i18n.locale+link.elId" nuxt
          :key="'link_'+l_idx"
        >
          <v-list-item-content>
            {{$t(link.name)}}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat height="42px" :dark="type">

      <v-app-bar-nav-icon class="ml-1" @click="sidebar = !sidebar">
        <v-icon>{{ svgPath1 }}</v-icon>
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-toolbar-title class="centerabsolute v-toolbar__logo pt-2">
        <nuxt-link to="/" tag="span" style="cursor: pointer" class="brand">
          <img src="https://ik.imagekit.io/g1noocuou2/tr:q-65,w-140,dpr-2,r-max/Logos/Warenghem_w_noparis_vf.svg" width="140">
        </nuxt-link>
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

<script>
    import { mdiMenu } from '@mdi/js'
    export default {
        name: "appmain-toolbar",
        data() {
            return {
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
