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
    <div class="subtitlesmall teradeli-light text-left" v-if="product.offers">
      {{product.price}}
      {{$store.state.product.currency_default}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "product-item",
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
                this.productItem.price = (this.productItem.offers.price * this.$store.state.product.exchange_rate).toFixed(2);
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
