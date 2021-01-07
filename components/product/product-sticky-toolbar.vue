<template>
  <section class="appBar" v-bind:class="{ 'active': fixedOnScroll}">

    <v-app-bar class="menu-bar d-md-block pr-4 d-none" flat height="70px">

      <v-app-bar-nav-icon @click="sidebar = !sidebar" class="d-md-none ml-3">
      </v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <div class="ma-2 grey">
          <img :src="product.image[0].src"
               :lazy-src="require('../../assets/images/image-loader.gif')"
               class="lazyload"
               alt=""
               height="55px"
          >

        </div>
        <div class="sub-title pa-2">{{product.name}}</div>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <div class="pa-2">
          <div>

            <v-icon small :class="{'available':product.offers.availability}">mdi-circle</v-icon>

            {{product.offers.availability?$t('product.stock'):$t('product.notInStock')}}
          </div>
          <h3 class="teradeli-light priceHide" >{{product.price}} {{$store.state.langs.currentLang.sign}}</h3>
        </div>
        <div class="pa-2">
          <v-btn tile large dark @click="$store.commit('product/OPEN_PAY_MODAL')">
            {{$t('product.cartBtn')}}
          </v-btn>
        </div>

      </div>
    </v-app-bar>
  </section>
</template>

<script>
    export default {
        name: 'product-sticky-toolbar',
        data: function () {
            return {
                fixedOnScroll: false,
                sidebar: false,
            }
        },
        props: {
            product: {
                type: Object,
                default: () => {
                }
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
