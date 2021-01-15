<template>
  <div>

    <VueSlickCarousel v-bind="settingsSingle" v-if="product.image">

      <div
        class="pa-2 img-wrapper"
        v-for="(img,i_dx) in product.image"
        :key="'image_'+i_dx"

      >
        <img
          :src="img.src"
          :lazy-src="require('../../assets/images/image-loader.gif')"
          class="lazyload"
          alt=""
          @click="$router.push({path:product.path})"
        >

      </div>
    </VueSlickCarousel>
    <div class="pt-3 pb-2 d-flex justify-space-between align-center titlesmall teradeli-medium">
      <strong>{{product.name}}</strong>
      <div>
        <button v-for="(item,idx) in colors"
                :key="'color'+item"
                :style="'background-color:'+item"
                class="color-button"
                @click="currentItem=idx"
        >
        </button>
      </div>
    </div>
    <v-progress-circular
      indeterminate
      color="primary"
      :size="20"
      v-show="$store.state.product.loading"
    ></v-progress-circular>
    <div class="subtitlesmall teradeli-light text-left" v-if="product.price" v-show="!$store.state.product.loading">
      {{product.price}}
      {{$i18n.localeProperties.currencySign}}
    </div>
  </div>
</template>

<script>
    import product from "../../store/product"
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: "product-item",
        components: { VueSlickCarousel },
        data() {
            return {
                colors: ['red', 'green'],
                currentItem: 1,
                settingsSingle: {
                    "dots": true,
                    "arrow": true,
                    "infinite": false,
                    "speed": 500,
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                }
            }
        },
        computed: {
            product() {
                let currency = this.productItem.currency.find(currency => {
                    return currency.name === this.$i18n.localeProperties.currency
                });
                if (currency) {
                    this.productItem.price = currency.price;
                } else {
                    this.productItem.price = this.productItem.offers.price;
                }
                console.log(this.productItem)
                return this.productItem;
            }
        },
        props: {
            productItem: {
                type: Object,
                default: () => {
                }
            }
        }
    }
</script>


<style lang="scss">
  .color-button {
    width: 15px;
    height: 15px;
    margin: 2px;
  }

  .img-wrapper {
    img {
      max-height: 84vh;
      max-width: 100%;
      margin: auto;
    }

    &:focus {
      outline: none !important;
    }
  }
</style>
