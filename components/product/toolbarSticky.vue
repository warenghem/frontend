<template>
  <section v-bind:class="{ 'active': fixedOnScroll}">
    <v-app-bar class="menu-bar pr-1" flat height="48px">
      <div class="d-flex align-center ml-1">
        <AtomsImageSquared style="width:40px" class="wa-product-image mx-2" :image="product.image[0].src" />
        <ProductTitle style="font-size:22px" :title="product.name" />
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <div class="smalltext mr-3">
          <ProductStock :pieces="product.offers.pieces" :stock="stock"/>
          <ProductPrice :price="product.price" />
        </div>
        <div class="mr-3">
          <MoleculesBtnMain :text="$t('btnWaitforit')" @click.native="$store.state.productModal=true" style="width:260px" class="w-100" />
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
            },
              stock: {
                type: String,
                default: ''
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
  .menu-bar {
    border-bottom: #eae8e4 solid 1px !important;
  }
</style>
