<template>
  <section class="appBar w-100">
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
  </section>
</template>

<script>
    import Logo from "~/assets/images/Warenghem-w-noparis-vf.svg?raw"
    import LogoSm from "~/assets/images/WA-mif-g-vf.svg?raw"
    export default {
        name: "main-toolbar",
        data() {
            return {
                Logo,LogoSm,
                sidebar: false,
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
