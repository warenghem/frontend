<template>
  <section class="appBar">
    <div class="topBar text-center d-none">
      {{$t('secondtoolbar.message')}}
    </div>
    <v-navigation-drawer v-model="sidebar" clipped app class="d-md-none" v-bind:width="304">
      <v-toolbar-title class="text-center py-10">
          <nuxt-link to="/" tag="span" style="cursor: pointer" class="brand">
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

    <v-app-bar class="menu-bar border-bottom-md-2" flat height="50px" :dark="type">

      <v-app-bar-nav-icon @click="sidebar = !sidebar" class="d-md-none ml-3">
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
      <v-toolbar-title class="centerabsolute v-toolbar__logo pt-2">
        <nuxt-link to="/" tag="span" style="cursor: pointer" class="brand">
          <div class="svglogo logo" width="140" v-html="Logo" />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-md-block"
                       v-for="(link,l_idx) in $store.state.link.links"
                       :key="'link_btn_r_'+l_idx">
        <v-btn text class="text-uppercase item"
               :class="{'current':$root.currentId===link.elId}"
               :to="'/'+$i18n.locale+link.elId"
               v-if="link.position==='right'"
        >
          {{$t(link.name)}}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="d-none d-md-block">
        <v-btn
          text
          class="px-0"
        >
          <v-menu
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                v-bind="attrs"
                v-on="on"
                :ripple="false"
                class="nohover"
              >
                <div v-for="(flag,idx) in $store.state.langs.items" :key="'flag_'+idx">
                  <img :src="flag.img"
                       width="24"
                       alt="lang flag"
                       v-if="$i18n.locale===flag.lang"
                  />
                </div>

              </v-btn>
            </template>
            <slot name="langSwitcher">
              <v-list
              >
                <v-list-item
                  v-for="(flag,idx) in $store.state.langs.items"
                  :key="'flag_list_'+idx"
                >
                  <v-list-item-title class="cursor-pointer">
                    <NuxtLink :to="{path:flag.path}">
                      <img :src="flag.img"
                           width="24"
                           alt="flag"
                      />
                    </NuxtLink>

                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </slot>

          </v-menu>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </section>
</template>

<script>
    import link from './../../store/link'
    import langs from './../../store/langs'
    import { mdiMenu } from '@mdi/js'
    import Logo from "~/assets/images/warenghem.svg?raw"
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
        props: {
            type: {
                type: Boolean,
                default: false
            }
        }
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
  }
</style>
