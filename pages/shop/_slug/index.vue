<template>
  <div v-click-outside="closeSideModal">
    <ProductStickyToolbar class="stickyBar" :product="product"/>
    <v-container fluid class="pa-0">
      <v-row
        class="ma-0"
      >
        <v-col
          cols="12"
          lg="8"
          class="pa-0"
        >
          <v-row class="ma-0">
            <div style="z-index:2" class="position-absolute">
              <Backbutton/>
            </div>
            <v-col :cols="12" class="pl-lg-0 pa-0 position-relative">
              <VueSlickCarousel class="bgcard" :arrows="false" :dots="false" ref="c1" :asNavFor="$refs.c2" :focusOnSelect="true">
                <div
                  v-for="(img,i_dx) in product.image"
                  :key="'image_'+i_dx"
                  style="outline: none;"
                  v-viewer
                >
                  <div class="wa-smart-picture square-ratio skeletton wa-product-image">
                    <img
                      v-if="productImages.length > 0" 
                      :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,ar-4-3/Products/'+ img.src +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,ar-4-3/Products/'+ img.src +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,ar-4-3/Products/'+ img.src +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,ar-4-3/Products/'+ img.src +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,ar-4-3/Products/'+ img.src +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,ar-4-3/Products/'+ img.src +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,ar-4-3/Products/'+ img.src +' 2500w,'" 
                      :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-640,ar-4-3/Products/'+ img.src"
                      class="lazyload mediabox-img"
                      alt=""
                    >
                  </div>
                </div>
              </VueSlickCarousel>
              <VueSlickCarousel class="mt-3" ref="c2" :slidesToShow="4" :asNavFor="$refs.c1" :focusOnSelect="true">
                <div
                  v-for="(img,i_dx) in product.image"
                  :key="'image_'+i_dx"
                >
                  <div class="wa-smart-picture square-ratio skeletton wa-product-image hand mr-3">
                    <img
                      v-if="productImages.length > 0" 
                      :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,ar-1-1/Products/'+ img.src +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,ar-1-1/Products/'+ img.src +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,ar-1-1/Products/'+ img.src +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,ar-1-1/Products/'+ img.src +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,ar-1-1/Products/'+ img.src +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,ar-1-1/Products/'+ img.src +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,ar-1-1/Products/'+ img.src +' 2500w,'" 
                      :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-640,ar-1-1/Products/'+ img.src"
                      class="bgcard lazyload mediabox-img"
                      alt=""
                    >
                  </div>
                </div>
              </VueSlickCarousel>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          lg="4"
          class="pvw"
        >
          <div style="margin-top: -10px;" class="d-flex justify-space-between mt-5 mt-lg-0">
            <div>{{product.sku}}</div>
          </div>
          <div class="page-title px-0 text-left">{{product.name}}</div>
          <div class="sub-title teradeli-medium secondary--text px-0 text-left pt-2">{{product.description}}</div>
          <div class="py-5 d-flex align-center justify-space-between">
            <v-row style="height:92px" justify="center" class="pa-0 text-center">
              <v-card
                  v-for="(mtr,i_dx) in product.material"
                  :key="'material_'+i_dx"
                  width="110px"
               >
               <img width="40px" class="rounded-lg" :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,r-8/Products/Materials/'+ mtr.icon" alt="">
               <v-card-text class="pa-0">
                 {{mtr.name}}
               </v-card-text>
              </v-card>
            </v-row>
            <div>
            </div>
          </div>
          <div style="height:60px" class="border-top-2 border-bottom-2 cursor-pointer d-flex align-center justify-space-between"
               @click="openSideModal('colorSide')"
          >
            <div>
              {{$t('product.color')}}
            </div>
            <div class="d-flex align-center justify-space-between" v-if="productColor.name">
              {{productColor.name}}
              <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,r-8/Products/Materials/'+ productColor.icon" alt="" v-if="productColor.icon" width="40px" class="mx-3 rounded-lg">
              <v-icon class="float-right">{{ svgPath1 }}</v-icon>
            </div>

          </div>
          <div class="d-flex justify-space-between align-center mt-3">
            <h3 class="teradeli-book">{{product.price}}
              {{$i18n.localeProperties.currencySign}}</h3>
            <div class="smalltext">
              <v-icon x-small :class="{'available':product.offers.availability}">{{ svgPath4 }}</v-icon>
              {{product.offers.availability?$t('product.stock'):$t('product.notInStock')}}
            </div>
          </div>
          <Buybutton/>
          <div class="my-5">
            <foldable>
              <div v-html="product.additionalProperty[0].details"
              >
              </div>
              <p align="center" class="my-foldable hand"
                 slot="view-more" slot-scope="{ toggle, collapsed }" @click="toggle">
                {{ collapsed ? $t('product.readMore') : $t('product.readLess') }}
              </p>
            </foldable>
          </div>
          <div class="mb-7">
            <div class="border-top-2 border-bottom-2 cursor-pointer py-3"
                 @click="openSideModal('productCare')"
            >
              {{$t('product.materialTitle')}}
              <v-icon class="float-right">{{ svgPath1 }}</v-icon>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between py-3 border-bottom-2 cursor-pointer"
               @click="openModal('paymentInfoModal')">
            <div class="d-flex align-center">
              <v-icon class="pr-5 right-icon">{{ svgPath2 }}</v-icon>
              <div>
                <div class="right-title">{{$t('product.payInfoBtn.title')}}</div>
                <span class="teradeli-light">{{$t('product.payInfoBtn.desc')}}</span>
              </div>
            </div>

            <div>
              <v-icon>{{ svgPath3 }}</v-icon>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between py-3 border-bottom-2 cursor-pointer"
               @click="openModal('shippingModal')">
            <div class="d-flex align-center">
              <v-icon class="pr-5 right-icon">{{ svgPath5 }}</v-icon>
              <div>
                <div class="right-title">{{$t('product.shipBtn.title')}}</div>
                <span class="teradeli-light">{{$t('product.shipBtn.desc')}}</span>
              </div>
            </div>

            <div>
              <v-icon>{{ svgPath3 }}</v-icon>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between py-3 border-bottom-2 cursor-pointer"
               @click="openModal('returnModal')">
            <div class="d-flex align-center">
              <v-icon class="pr-5 right-icon">{{ svgPath6 }}</v-icon>
              <div>
                <div class="right-title">{{$t('product.returnBtn.title')}}</div>
                <span class="teradeli-light">{{$t('product.returnBtn.desc')}}</span>
              </div>
            </div>

            <div>
              <v-icon>{{ svgPath3 }}</v-icon>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between py-3 cursor-pointer" @click="openModal('packageModal')">
            <div class="d-flex align-center">
              <v-icon class="pr-5 right-icon">{{ svgPath7 }}</v-icon>
              <div>
                <div class="right-title">{{$t('product.packageBtn.title')}}</div>
                <span class="teradeli-light">{{$t('product.packageBtn.desc')}}</span>
              </div>
            </div>

            <div>
              <v-icon>{{ svgPath3 }}</v-icon>
            </div>
          </div>

        </v-col>
      </v-row>
    </v-container>
    <InfoModal :is-modal="infoModal" v-on:closeModal="infoModal=false" :current="currentModal"/>
    <SideModal :is-modal="sideModal" v-on:closeModal="closeSideModal" :current="currentSideItem"
                :product="product" @colorSelect="colorSelect" />
  </div>

</template>

<script>
    import "viewerjs/dist/viewer.css";
    import Viewer from "v-viewer";
    import Vue from "vue";
    Vue.use(Viewer, {
        defaultOptions: {
            zIndex: 300002
        }
    });
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import VueFoldable from 'vue-foldable'
    import 'vue-foldable/dist/vue-foldable.css'
    import { mdiChevronRight, mdiCreditCard, mdiContentCopy, mdiCircle, mdiTruckDelivery, mdiSync, mdiPackageVariantClosed } from '@mdi/js'
    import "viewerjs/dist/viewer.css";
    Vue.component('foldable', VueFoldable);

    export default {
        name: 'post',
        async asyncData(context) {
            const {$content, params, app} = context;
            const slug = params.slug;
            const productItem = await $content(`${app.i18n.locale}/shop`, slug).fetch();
            return {
                productItem,
            }
        },
        data() {
            return {
                svgPath1: mdiChevronRight,
                svgPath2: mdiCreditCard,
                svgPath3: mdiContentCopy,
                svgPath4: mdiCircle,
                svgPath5: mdiTruckDelivery,
                svgPath6: mdiSync,
                svgPath7: mdiPackageVariantClosed,
                read_more: true,
                infoModal: false,
                currentModal: 'paymentInfoModal',
                sideModal: false,
                currentSideItem: 'productCare',
                productColor: {
                    name: null,
                    image: null
                },
                productImages: [],
                selectedColor: null,
            }
        },
        components: {
            VueSlickCarousel
        },
        computed: {
            product() {
                let currency = this.productItem.currency.find(currency => {
                    return currency.name === this.$i18n.localeProperties.currencySign
                });
                if (currency) {
                    this.productItem.price = currency.price;
                } else {
                    this.productItem.price = this.productItem.offers.price;
                }
                return this.productItem;
            },
        },
        created() {
            this.productColor = this.product.colors[0];
        },
        mounted() {
            this.productImages = this.product.image
        },
        methods: {
            openModal(modalName) {
                this.currentModal = modalName;
                this.infoModal = true
            },
            openSideModal(modalName) {
                this.currentSideItem = modalName;
                this.sideModal = true;
                const el = document.body;
                el.classList.add("modal-open");
                document.documentElement.style.overflowY = 'hidden';
            },
            closeSideModal() {
                this.sideModal = false;
                const el = document.body;
                el.classList.remove("modal-open");
                document.documentElement.style.overflowY = 'auto';
            },
            colorSelect(val) {
                this.selectedColor = val;
                this.productImages = this.product.image.filter(img => {
                    if (img.color === parseInt(this.selectedColor)) {
                        return img
                    }
                });
            },
        },
        head() {
            return {
                htmlAttrs: {
                    lang: this.$i18n.locale,
                },
                meta: [
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: this.product.description,
                    },
                    {
                        property: 'og:title',
                        hid: 'og:title',
                        content: this.product.name,
                    },
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: this.product.image,
                    },
                ],
            };
        },
    }
</script>
<style lang="scss">

  .right-icon {
    font-size: 35px !important;
  }
  .slick-slide > div > div {
      outline: none;
  }
  .right-title {
    font-size: 18px;
    font-weight: 500;

  }

  span.teradeli-light {
    font-size: 14px;
  }

  .vue-foldable-container {
    transition: max-height 0.7s;
  }

  .vue-foldable-mask {
    transition: opacity 3s;
    bottom: 24px;
  }
</style>