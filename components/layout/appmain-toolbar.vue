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

    <v-app-bar flat height="50px" :dark="type">

      <v-app-bar-nav-icon class="ml-1" @click="sidebar = !sidebar">
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-toolbar-title class="centerabsolute v-toolbar__logo pt-2">
        <nuxt-link to="/" tag="span" style="cursor: pointer" class="brand">
          <img src="https://ik.imagekit.io/g1noocuou2/tr:q-65,w-140,dpr-2,r-max/Logos/Warenghem_w_vf.svg" width="140">
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <themeswitcher/>
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

    export default {
        name: "appmain-toolbar",
        data() {
            return {
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
