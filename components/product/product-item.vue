<template>
  <div>

    <VueSlickCarousel v-bind="settingsSingle" v-if="product.image">

      <div
        class="pa-2 img-wrapper"
        v-for="(img,i_dx) in product.image"
        :key="'image_'+i_dx"

      >
        <img
          :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,ar-1-1/Products/'+ img.src +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,ar-1-1/Products/'+ img.src +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,ar-1-1/Products/'+ img.src +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,ar-1-1/Products/'+ img.src +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,ar-1-1/Products/'+ img.src +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,ar-1-1/Products/'+ img.src +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,ar-1-1/Products/'+ img.src +' 2500w,'"
          class="lazyload"
          alt=""
          @click="$router.push({path:product.path})"
        >
      </div>
    </VueSlickCarousel>
    <div class="pt-3 pb-2 d-flex justify-space-between align-center titlesmall teradeli-medium">
      <strong>{{product.name}}</strong>
      <div>
        <img v-for="(item,idx) in product.colors"
                :key="'color'+item.id"
                :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,r-8/Products/Materials/'+item.icon"
                class="color-button"
                @click="currentItem=item.id"
        >
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
                return this.productItem;
            },
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
    width: 20px;
    height: 20px;
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
