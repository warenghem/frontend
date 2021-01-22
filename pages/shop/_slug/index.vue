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
              <VueSlickCarousel class="bgcard"
                                :arrows="false"
                                :dots="false"
                                ref="c1"
                                :asNavFor="$refs.c2"
                                :focusOnSelect="true"
                                v-if="productImages.length > 0"
              >
                <div
                  v-for="(img,i_dx) in productImages"
                  :key="'image_'+i_dx"
                  style="outline: none;"
                >
                  <div class="wa-smart-picture square-ratio skeletton wa-product-image">
                    <img

                      :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,ar-4-3/Products/'+ img.src +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,ar-4-3/Products/'+ img.src +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,ar-4-3/Products/'+ img.src +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,ar-4-3/Products/'+ img.src +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,ar-4-3/Products/'+ img.src +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,ar-4-3/Products/'+ img.src +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,ar-4-3/Products/'+ img.src +' 2500w,'"
                      :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-640,ar-4-3/Products/'+ img.src"
                      class="lazyload mediabox-img"
                      alt=""
                    >
                  </div>
                </div>
              </VueSlickCarousel>
              <VueSlickCarousel class="mt-3"
                                ref="c2"
                                :slidesToShow="4"
                                :asNavFor="$refs.c1"
                                :focusOnSelect="true"
                                v-if="productImages.length > 0">
                <div
                  v-for="(img,i_dx) in productImages"
                  :key="'image_'+i_dx"
             @click="$refs.c1.goTo(i_dx)"
                >
                  <div class="wa-smart-picture square-ratio skeletton wa-product-image hand mr-3">
                    <img
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
                <img width="40px" class="rounded-lg"
                     :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,r-8/Products/Materials/'+ mtr.icon"
                     alt="">
                <v-card-text class="pa-0">
                  {{mtr.name}}
                </v-card-text>
              </v-card>
            </v-row>
            <div>
            </div>
          </div>
          <div style="height:60px"
               class="border-top-2 border-bottom-2 cursor-pointer d-flex align-center justify-space-between"
               @click="openSideModal('colorSide')"
          >
            <div>
              {{$t('product.color')}}
            </div>
            <div class="d-flex align-center justify-space-between">
              <span v-if="selectedColor">{{selectedColor.name}}</span>
              <img
                :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,r-8/Products/Materials/'+ selectedColor.icon"
                alt=""
                v-if="selectedColor"
                width="40px"
                class="mx-3 rounded-lg">
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
      <v-row>
        <v-col cols="12">
          <div class="bold-title">{{$t('product.like')}}</div>
        </v-col>
        <v-col cols="12">
          <v-tabs
            :centered="true"
          >
            <v-tab
              href="#recentTab"
              v-if="recentProducts.length>0"
              class="pa-2"
            >
              {{$t('product.recent')}}

            </v-tab>
            <v-tab
              href="#recommendTab"
              v-if="recommendedProducts.length>0"
              class="pa-2"
            >
              {{$t('product.recommend')}}
            </v-tab>
            <v-tab-item
              value="recentTab"
              style="height: 700px"
              v-if="recentProducts.length>0"
            >
              <VueSlickCarousel v-bind="settings">
                <div v-for="(rc_productItem,i_dx) in recentProducts"
                     :key="'recent_'+i_dx"
                     class="text-center pa-2"
                >
                  <product-item :productItem="rc_productItem"></product-item>

                </div>
              </VueSlickCarousel>

            </v-tab-item>
            <v-tab-item
              value="recommendTab"
              style="height: 700px"
              v-if="recommendedProducts.length>0"
            >
              <VueSlickCarousel v-bind="settings">
                <div v-for="(productItem,i_dx) in recommendedProducts"
                     :key="'recommend'+i_dx"
                     class="pa-2"
                >
                  <product-item :productItem="productItem"></product-item>
                </div>
              </VueSlickCarousel>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>
    <InfoModal :is-modal="infoModal" v-on:closeModal="infoModal=false" :current="currentModal"></InfoModal>
    <SideModal :is-modal="sideModal" v-on:closeModal="closeSideModal" :current="currentSideItem"
               :product="product" @colorSelect="colorSelect"></SideModal>
  </div>

</template>

<script>
    import "viewerjs/dist/viewer.css";
    // import Viewer from "v-viewer";
    import Vue from "vue";

    // Vue.use(Viewer, {
    //     defaultOptions: {
    //         zIndex: 300002
    //     }
    // });
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import VueFoldable from 'vue-foldable'
    import 'vue-foldable/dist/vue-foldable.css'
    import {
        mdiChevronRight,
        mdiCreditCard,
        mdiContentCopy,
        mdiCircle,
        mdiTruckDelivery,
        mdiSync,
        mdiPackageVariantClosed
    } from '@mdi/js'
    import "viewerjs/dist/viewer.css";

    Vue.component('foldable', VueFoldable);

    export default {
        name: 'post',
        async asyncData(context) {
            const {$content, params, app} = context;
            const slug = params.slug;
            console.log(app.i18n.locale)
            const productItem = await $content(`${app.i18n.locale.split('-')[0]}/shop`, slug).fetch();
            const productsItem = await $content(`${app.i18n.locale.split('-')[0]}/shop`).fetch();
            return {
                productsItem,
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
                selectedColor: null,
                settings: {
                    "dots": false,
                    "infinite": false,
                    "arrow": false,
                    "speed": 500,
                    "slidesToShow": 3,
                    "slidesToScroll": 3,
                    "initialSlide": 0,
                    "responsive": [
                        {
                            "breakpoint": 1024,
                            "settings": {
                                "slidesToShow": 3,
                                "slidesToScroll": 3,
                                "infinite": true,
                                "dots": true
                            }
                        },
                        {
                            "breakpoint": 768,
                            "settings": {
                                "slidesToShow": 2,
                                "slidesToScroll": 2,
                                "initialSlide": 2
                            }
                        },
                        {
                            "breakpoint": 480,
                            "settings": {
                                "slidesToShow": 1,
                                "slidesToScroll": 1
                            }
                        }
                    ]
                },
                settingsSingle: {
                    "dots": true,
                    "infinite": false,
                    "speed": 500,
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                },
            }
        },
        components: {
            VueSlickCarousel
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
            productImages() {
                if (this.selectedColor) {
                    return this.productItem.image.filter(img => {
                        if (img.color === parseInt(this.selectedColor.id)) {
                            return img
                        }
                    });
                } else {
                    return this.productItem.image
                }
            },
            recommendedProducts() {
                var tags = this.productItem.tags.map(tag => {
                    return tag.name
                });
                var r_products = [];
                this.productsItem.forEach(product => {
                    if (product.tags.filter(value => tags.includes(value.name)).length > 0 && product.id !== this.product.id) {
                        r_products.push(product)
                    }
                });
                return r_products;
            },
            recentProducts() {
                var rc_products = [];
                var recent_products = this.$store.state.product.recent_products;
                if (recent_products.length > 0) {
                    recent_products.forEach(p_id => {
                        if (p_id !== this.product.id) {
                            rc_products.push(this.productsItem.find(p => p.id === p_id))
                        }
                    });
                }
                return rc_products;
            },
        }
        ,
        beforeCreate() {
            let rc_products = this.$cookies.get('recent_products');
            if (rc_products.length > 0) {
                this.$store.commit('product/initRecentProduct', rc_products);
            }
        }
        ,
        created() {
            this.$store.dispatch('product/setRecentProducts', this.product.id);
        }
        ,
        mounted() {
            this.colorSelect()
        }
        ,
        methods: {
            openModal(modalName) {
                this.currentModal = modalName;
                this.infoModal = true
            }
            ,
            openSideModal(modalName) {
                this.currentSideItem = modalName;
                this.sideModal = true;
                const el = document.body;
                el.classList.add("modal-open");
                document.documentElement.style.overflowY = 'hidden';
            }
            ,
            closeSideModal() {
                this.sideModal = false;
                const el = document.body;
                el.classList.remove("modal-open");
                document.documentElement.style.overflowY = 'auto';
            }
            ,
            colorSelect(val) {
                if (val) {
                    this.selectedColor = this.product.colors.find(color => color.id === parseInt(val));
                } else {
                    this.selectedColor = null
                }
            }
            ,
        }
        ,
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
        }
        ,
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

  .bold-title {
    font-size: 2.125rem;
    line-height: 2.125rem;
    color: inherit;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
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
