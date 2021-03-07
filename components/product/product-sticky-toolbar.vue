<template>
  <section class="appBar" v-bind:class="{ 'active': fixedOnScroll}">

    <v-app-bar class="menu-bar pr-1" flat height="48px">
      <div class="d-flex align-center ml-1">
        <div style="width:40px" class="wa-smart-picture square-ratio skeletton wa-product-image bgcard">
          <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1/Products/'+ product.image[0].src"
               class="lazyload mediabox-img"
               alt=""
          >
        </div>
        <div style="font-weight:600" class="sub-title text-uppercase pa-2 d-none d-md-block">{{product.name}}</div>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <div class="smalltext mr-3">
          <div class="d-none">
            <v-icon style="bottom: 1px;" x-small :class="{'available':product.offers.availability}">{{ svgPath1 }}</v-icon>
            {{product.offers.availability?$t('product.stock'):$t('product.notInStock')}}
          </div>
          <h3 class="teradeli-book">
            {{product.price}} {{$i18n.localeProperties.currencySign}}</h3>
        </div>
        <div class="mr-3">
          <Reservebutton class="w-100" />
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
        },
        destroyed () {
          if (process.browser) {
            window.removeEventListener('scroll', this.handleSCroll);
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
