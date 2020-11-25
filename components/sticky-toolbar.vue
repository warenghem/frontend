<template>
    <section class="appBar" v-bind:class="{ 'active': fixedOnScroll}">
        <v-navigation-drawer v-model="sidebar" dark app class="d-md-none" v-bind:width="304">
          <v-toolbar-title class="text-center py-10">
              <router-link to="/" tag="span" style="cursor: pointer" class="brand">
                <ik-image
                    path="/Logos/WA_mif_wg_vf.svg"
                    :transformation="[{quality: 80, width:170}]"
                    width="170"
                />
              </router-link>
          </v-toolbar-title>         
            <v-list>
                <v-list-item
                        v-for="(link,l_idx) in $store.state.link.links"
                        :class="{'current':$root.currentId===link.elId}"
                        :to="'/'+$i18n.locale+link.elId"
                        :key="'slink_'+l_idx"
                >
                    <v-list-item-content>
                        {{$t(link.name)}}
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar class="menu-bar" flat height="50px"
                   :class="{'whiteBack':$root.currentId==='mapTreeSection'||$root.currentId==='studioSection'}">

            <v-app-bar-nav-icon @click="sidebar = !sidebar" class="d-md-none ml-3">
            </v-app-bar-nav-icon>
            <v-toolbar-title class="d-md-block pr-4 d-none">
                <router-link to="/" tag="span" style="cursor: pointer" class="brand">
                  <ik-image
                      path="/Logos/WA_short_w_vf.svg"
                      :transformation="[{quality: 80, width:35}]"
                      width="35"
                  />
                </router-link>
            </v-toolbar-title>
            <v-toolbar-items class="d-none d-md-block" v-for="(link,l_idx) in $store.state.link.links"
                             :key="'slink_btn_l_'+l_idx">
                <v-btn text class="text-uppercase item"
                       :class="{'current':$root.currentId===link.elId}"
                      :to="'/'+$i18n.locale+link.elId"
                >
                    {{$t(link.name)}}
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-spacer style="flex-grow: 1.8!important;" class="d-none d-md-block"></v-spacer>
            <v-spacer class="d-md-none"></v-spacer>
            <v-toolbar-items class="py-1 mr-3">
                <v-btn
                  elevation="2"
                  rounded
                  @click="$store.state.plantModal=true"
                  class="btn-theme"
                  style="border-radius: 28px;"
                >
                  {{$t('btnTitle')}}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </section>
</template>

<script>
export default {
  name: 'sticky-toolbar',
  data: function () {
    return {
      fixedOnScroll: false,
      sidebar: false,
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

        .menu-bar {
            border-bottom: none !important;
            backdrop-filter: saturate(180%) blur(20px);
            background: #1d1d1fb3 !important;

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
        }

    }
</style>
