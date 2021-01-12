<template>
  <section class="appBar" v-bind:class="{ 'active': fixedOnScroll}">

    <v-app-bar class="menu-bar pr-4" flat height="48px">
      <div class="d-flex align-center">
        <div class="ma-2 grey">
          <img :src="product.image[0].src"
               :lazy-src="require('../../assets/images/image-loader.gif')"
               class="lazyload"
               alt=""
               height="40px"
               width="40px"
          >
        </div>
        <div style="font-weight:600" class="sub-title text-uppercase pa-2 d-none d-md-block">{{product.name}}</div>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <div class="pa-2">
          <div>

            <v-icon small :class="{'available':product.offers.availability}">{{ svgPath1 }}</v-icon>

            {{product.offers.availability?$t('product.stock'):$t('product.notInStock')}}
          </div>
          <v-progress-circular
            indeterminate
            color="primary"
            :size="20"
            v-show="$store.state.product.loading"
          ></v-progress-circular>
          <h3 class="teradeli-light priceHide" v-show="!$store.state.product.loading">
            {{product.price}} {{$store.state.langs.currentLang.sign}}</h3>
        </div>
        <div class="pa-2">
          <Buybutton/>
        </div>

      </div>
    </v-app-bar>
  </section>
</template>

<script>
    import { mdiCircle } from '@mdi/js'
    export default {
        name: 'product-sticky-toolbar',
        data: function () {
            return {
                svgPath1: mdiCircle,
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
