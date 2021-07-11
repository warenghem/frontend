<template>
  <div>
    <VueSlickCarousel class="hand" v-bind="settingsSingle" v-if="product.image">
        <NuxtLink 
          v-for="(img,i_dx) in product.image"
          :key="'image_'+i_dx"
          :to="product.slug +'/'"
        >
          <AtomsImageSquared class="wa-product-image systemGray" :ratio="'ar-1-1'" :image="img.src" />
          <!--<div class="position-absolute px-3 realisation">{{$t('3drender')}}</div>-->
        </NuxtLink>
    </VueSlickCarousel>
    <div class="pt-6">
      <div class="titlesmall teradeli-medium">{{product.name}}</div>
      <ProductPrice style="line-height: 1rem;" :price="product.price" v-if="product.price"/>
      <!--<div>
        <img v-for="(item,idx) in product.colors"
                :key="'color'+item.id"
                :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,r-8/Materials/'+item.icon"
                class="color-button d-none"
                @click="currentItem=item.id"
        >
      </div>-->
    </div>
  </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: "product-item",
        components: { VueSlickCarousel },
        data() {
            return {
                /*currentItem: 1,*/
                settingsSingle: {
                    "draggable":true,
                    "swipe":true,
                    "touchMove":true,
                    "dots": true,
                    "arrow": false,
                    "infinite": false,
                    "slidesToShow": 1,
                    "slidesToScroll": 1
                }
            }
        },
        computed: {
            product() {
                let currency = this.productItem.currency?this.productItem.currency.find(currency => {
                    return currency.name === this.$i18n.localeProperties.currency
                }):{};
                if (currency) {
                    this.productItem.price = currency.price;
                } else {
                    this.productItem.price = 'Houston, we have a problem'/*this.productItem.offers.price*/;
                }

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
    width: 20px;
    height: 20px;
    margin: 2px;
  }
</style>
