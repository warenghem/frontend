<template>
  <div v-click-outside="closeSideModal">
    <ProductStickyToolbar class="stickyBar" :product="product"/>
    <v-container fluid class="pa-0">
      <v-row
        class="ma-0"
      >
        <v-col
          cols="12"
          md="8"
          class="pa-0"
        >
          <v-row class="ma-0">
            <div style="z-index:2" class="position-absolute">
              <Backbutton/>
            </div>
            <v-col :cols="12" class="pl-lg-0 pa-0 position-relative">
              <VueSlickCarousel class="bgcard" :arrows="false" :dots="false" ref="c1" :asNavFor="$refs.c2" :focusOnSelect="true" :key="selectedColor">
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
              <VueSlickCarousel class="mt-3" ref="c2" :slidesToShow="4" :asNavFor="$refs.c1" :focusOnSelect="true" :key="selectedColor">
                <div
                  v-for="(img,i_dx) in product.image"
                  :key="'image_'+i_dx"
                  @click="$refs.c1.goTo(i_dx)"
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
          md="4"
          class="pvw"
        >
          <div style="margin-top: -10px;" class="d-flex justify-space-between mt-5 mt-lg-0">
            <div>{{product.sku}}</div>
          </div>
          <div class="page-title px-0 text-left">{{product.name}}</div>
          <div class="sub-title teradeli-medium secondary--text px-0 text-left pt-2">{{product.slogan}}</div>
          <div class="py-5 d-flex align-center justify-space-between">
            <v-row style="" justify="center" class="pa-0 ma-0 text-center">
              <v-card
                  v-for="(ad,i_dx) in product.award"
                  :key="'award'+i_dx"
                  width="120px"
                  class="mx-5"
               >
               <div style="height:60px">
                <img width="120" class="h-100 contain" :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-120,dpr-2/Logos/'+ ad.image" alt="">
               </div>
              </v-card>
            </v-row>
          </div>
          <div style="height:50px" class="border-top-2 border-bottom-2 cursor-pointer d-flex align-center justify-space-between"
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
          <div class="d-flex justify-space-between align-center my-5">
            <h3 class="teradeli-book">{{ $n(product.price, 'currency') }}</h3>
            <div class="smalltext">
              <v-icon style="bottom: 1px;" x-small :class="{'available':product.offers.availability}">{{ svgPath4 }}</v-icon>
              {{product.offers.availability?$t('product.stock'):$t('product.notInStock')}}
            </div>
          </div>
          <Buybutton/>
          <div class="mt-5" v-html="product.description">
          </div>
          <v-subheader>{{$t('product.details')}}</v-subheader>
          <div class="py-5 d-flex align-center justify-space-between">
            <v-row style="height:92px" justify="center" class="pa-0 ma-0 text-center">
              <v-card
                  v-for="(mtr,i_dx) in product.material"
                  :key="'material_'+i_dx"
                  width="110px"
                  class="mx-1"
              >
              <img width="40px" class="rounded-lg" :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,r-8/Products/Materials/'+ mtr.icon" alt="">
              <v-card-text class="pa-0">
                {{mtr.name}}
              </v-card-text>
              </v-card>
            </v-row>
          </div>
          <div class="mb-5">
            <foldable height="%70">
              <span class="pt-2">{{product.dimensions.length}} x {{product.dimensions.height}} x {{product.dimensions.width}} {{product.dimensions.unit}}</span>
              <span class="teradeli-light">{{$t('product.size')}}</span>
              <div class="py-4">
                <v-chip-group
                  active-class="primary--text"
                  column
                >
                  <v-chip
                    v-for="(det,i_dx) in product.details"
                    :key="'award'+i_dx"
                  >
                    {{ det.dot }}
                  </v-chip>
                </v-chip-group>
              </div>
              <p align="center" class="my-foldable hand"
                 slot="view-more" slot-scope="{ toggle, collapsed }" @click="toggle">
                {{ collapsed ? $t('product.readMore') : $t('product.readLess') }}
              </p>
            </foldable>
          </div>
          <div class="mb-7">
            <div style="height:50px" class="border-top-2 border-bottom-2 cursor-pointer d-flex align-center justify-space-between"
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
      <v-row class="border-top-2 ma-0 px-0 pvw">
        <v-col cols="12" class="pa-0">
          <div class="sub-title text-center pb-10">{{$t('product.like')}}</div>
        </v-col>
        <v-col cols="12" class="pa-0 mx-n2">
          <v-tabs
            centered
            class="pb-5"
            fixed-tabs
          >
            <v-tab
              href="#recentTab"
              v-if="recentProducts.length>0"
              class="border-top-2 border-bottom-2"
              style="height:50px"
            >
              {{$t('product.recent')}}
            </v-tab>
            <v-tab
              href="#recommendTab"
              v-if="recommendedProducts.length>0"
              class="border-top-2 border-bottom-2"
              style="height:50px"
            >
              {{$t('product.recommend')}}
            </v-tab>
            <v-tab-item
              value="recentTab"
              class="mt-5"
              v-if="recentProducts.length>0"
            >
              <VueSlickCarousel v-bind="settings">
                <div v-for="(rc_productItem,i_dx) in recentProducts"
                     :key="'recent_'+i_dx"
                     class="text-center px-2"
                >
                  <product-item :productItem="rc_productItem"></product-item>

                </div>
              </VueSlickCarousel>

            </v-tab-item>
            <v-tab-item
              value="recommendTab"
              class="mt-5"
              v-if="recommendedProducts.length>0"
            >
              <VueSlickCarousel v-bind="settings">
                <div v-for="(productItem,i_dx) in recommendedProducts"
                     :key="'recommend'+i_dx"
                     class="text-center px-2"
                >
                  <product-item :productItem="productItem"></product-item>
                </div>
              </VueSlickCarousel>
            </v-tab-item>
          </v-tabs>
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
            const lang_path = app.i18n.locale.split('-')[0] === 'en' ? 'en-us' : 'fr-fr';
            const productItem = await $content(`${lang_path}/shop`, slug).fetch();
            const productsItem = await $content(`${lang_path}/shop`).fetch();
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
                productColor: {
                    name: null,
                    image: null
                },
                productImages: [],
                selectedColor: null,
                settings: {
                    "dots": false,
                    "row": 1,
                    "infinite": false,
                    "arrow": false,
                    "slidesToShow": 3,
                    "slidesToScroll": 3,
                    "initialSlide": 0,
                    "draggable": true,
                    "responsive": [
                        {
                            "breakpoint": 1024,
                            "settings": {
                                "slidesToShow": 3,
                                "slidesToScroll": 3,
                                "infinite": true,
                                "dots": true,
                            }
                        },
                        {
                            "breakpoint": 768,
                            "settings": {
                                "centerMode": true,
                                "focusOnSelect": true,
                                "slidesToShow": 2,
                                "slidesToScroll": 2,
                                "centerMode": true
                            }
                        },
                        {
                            "breakpoint": 480,
                            "settings": {
                                "centerMode": true,
                                "focusOnSelect": true,
                                "slidesToShow": 1,
                                "slidesToScroll": 1,
                                "centerMode": true,
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
                }
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
        },
        beforeCreate() {
            let rc_products = this.$cookies.get('recent_products');
            if (rc_products.length > 0) {
                this.$store.commit('product/initRecentProduct', rc_products);
            }
        },
        created() {
            this.$store.dispatch('product/setRecentProducts', this.product.id);
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
button.slick-arrow.slick-next {
    display: none!important;
}
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
  .slick-list {
    padding-left: 0!important;
}
</style>