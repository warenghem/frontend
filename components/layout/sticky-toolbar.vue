<template>
    <section class="appBar" v-bind:class="{ 'active': fixedOnScroll}">
        <!--<v-navigation-drawer v-model="sidebar" dark app class="d-md-none" v-bind:width="304">
          <v-toolbar-title class="text-center py-10">
              <nuxt-link :to="'/'+$i18n.locale" tag="span" style="cursor: pointer" class="brand">
                <div style="fill: #706f6f;stroke: #706f6f;width:160px" class="mx-auto" v-html="LogoSm" />
              </nuxt-link>
          </v-toolbar-title>         
            <v-list>
                <v-list-item
                        v-for="(link,l_idx) in $store.state.link.links"
                        
                        :to="'/'+$i18n.locale+link.elId"
                        :key="'slink_'+l_idx"
                >
                    <v-list-item-content>
                        {{$t(link.name)}}
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>-->

        <v-app-bar flat class="border-bottom-2" height="48px">
            <!--<v-app-bar-nav-icon @click="sidebar = !sidebar" class="d-md-none ml-2">
              <v-icon>{{ svgPath }}</v-icon>
            </v-app-bar-nav-icon>-->
            <v-toolbar-title class="d-md-block px-4 d-none">
                <nuxt-link :to="'/'+$i18n.locale" tag="span" style="cursor: pointer" class="brand">
                  <div style="fill: #19110b;stroke: #19110b;width:35px" v-html="LogoSmSm" />
                </nuxt-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-spacer style="flex-grow: 1.8!important;" class="d-none d-md-block"></v-spacer>
            <v-spacer class="d-md-none"></v-spacer>
            <v-toolbar-items class="toolbarcta py-1 mr-3">
                <treebutton/>
            </v-toolbar-items>
        </v-app-bar>
    </section>
</template>

<script>
import { mdiMenu } from '@mdi/js'
import LogoSm from "~/assets/images/WA-mif-g-vf.svg?raw";
import LogoSmSm from "~/assets/images/WAshort-w-vf.svg?raw";
export default {
  name: 'sticky-toolbar',
  data: function () {
    return {
      LogoSm,LogoSmSm,
      fixedOnScroll: false,
      sidebar: false,
      svgPath: mdiMenu,
    }
  },
  methods: {
    handleScroll () {
      if (window.scrollY >= 200) {
        this.fixedOnScroll = true
      } else {
        this.fixedOnScroll = false
      }
    }
  },
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  beforeUpdate () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style scoped lang="scss">
    .appBar {

        .topBar {
            background: #0A3137;
            color: #fff;
            padding: 7px;
            font-size: 12px;
        }

        /* .menu-bar {
            border-bottom: none !important;
            backdrop-filter: saturate(180%) blur(20px);
            background: rgba(29,29,31,0.9) !important;
            background: #161617!important; 

            &.whiteBack {
                border-bottom: #eae8e4 solid 1px !important;

                background-color: rgba(255, 255, 255, .74) !important;

                .item {
                    color: black;
                }

                .brand {
                    filter: brightness(1) invert(0);
                }
            } 

            .brand {

                filter: brightness(0) invert(1);

                img {
                    padding-top: 5px;
                }
            }

            .item {
                color: white;
                padding: 0 10px;

                &.current {
                    color: #0081a7 !important;
                }
            }
        }*/

    }
@media (max-width: 600px) {
    .toolbarcta button {
    max-width: 250px;
    }
}
</style>
