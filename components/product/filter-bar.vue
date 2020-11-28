<template>
  <section class="appBar" v-bind:class="{ 'active': fixedOnScroll}">

    <v-app-bar class="menu-bar d-md-block pr-4 d-none" flat height="70px">

      <v-app-bar-nav-icon @click="sidebar = !sidebar" class="d-md-none ml-3">
      </v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <div class="ma-2 grey">
          <ik-image
            path="/Products/PFsolomoutain_V__6TkALbMDj.jpg"
            :transformation="[{quality: 80, width:55}]"
            width="55"
          ></ik-image>
        </div>
        <div class="sub-title pa-2">SAC À DOS TRIO</div>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <div class="pa-2">
          <div>

            <v-icon small>mdi-circle</v-icon>

            Disponible
          </div>
          <h3  class="teradeli-light">2 600,00€</h3>
        </div>
        <div class="pa-2">
          <button class="btn-theme">À VOTRE PANIER</button>
        </div>

      </div>
    </v-app-bar>
  </section>
</template>

<script>
    export default {
        name: 'filter-toolbar',
        data: function () {
            return {
                fixedOnScroll: false,
                sidebar: false,
            }
        },
        methods: {
            handleScroll() {
                if (window.scrollY >= 200) {
                    this.fixedOnScroll = true
                } else {
                    this.fixedOnScroll = false
                }
            }
        },
        created() {
            if (process.browser) {
                window.addEventListener('scroll', this.handleScroll)
            }
        },
        beforeUpdate() {
            if (process.browser) {
                window.addEventListener('scroll', this.handleScroll)
            }
        }
    }
</script>

<style scoped lang="scss">
  .appBar {

    .topBar {
      background: white;
      padding: 7px;
      font-size: 12px;
    }

    .menu-bar {
      border-bottom: #eae8e4 solid 1px !important;
    }

  }
</style>
