<template>
    <v-app-bar class="menu-bar border-bottom-2 w-100" flat height="42px">
      <v-app-bar-nav-icon @click="sidebar = !sidebar" class="ml-2">
          <v-icon>{{ svgPath }}</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-items class="d-none d-md-block" v-for="(link,l_idx) in $store.state.link.links"
                       :key="'link_btn_l_'+l_idx">
        <v-btn text class="text-uppercase item"
               :class="{'current':$root.currentId===link.elId}"
               :to="localePath('/')+link.elId" nuxt
               v-if="link.position==='left'"
        >
          {{$t(link.name)}}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title class="centerabsolute v-toolbar__logo pt-1">
        <NuxtLink :to="localePath('/')" tag="span" style="cursor: pointer" class="brand">
          <div class="svglogo logo" width="140" v-html="Logo" />
        </NuxtLink>
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
  }
</style>
