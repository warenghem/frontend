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
            <div style="z-index:1" class="position-absolute">
              <Backbutton/>
            </div>
            <v-col :cols="12" class="pl-lg-0 pa-0 position-relative">
              <VueSlickCarousel class="bgcard" :arrows="false" :dots="false" ref="c1" :asNavFor="$refs.c2" :focusOnSelect="true" :key="selectedColor">
                <div
                  v-for="(img,i_dx) in productImages"
                  :key="'image_'+i_dx"
                  style="outline: none;"
                >
                  
                  <div class="wa-smart-picture square-ratio skeletton wa-product-image">
                    <div class="position-absolute px-3 realisation">{{$t('3drender')}}</div>
                    <img
                      :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,ar-4-3/Products/'+ img.src +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,ar-4-3/Products/'+ img.src +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,ar-4-3/Products/'+ img.src +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,ar-4-3/Products/'+ img.src +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,ar-4-3/Products/'+ img.src +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,ar-4-3/Products/'+ img.src +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,ar-4-3/Products/'+ img.src +' 2500w,'"
                      :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-640,ar-4-3/Products/'+ img.src"
                      class="lazyload mediabox-img"
                      alt=""
                    >
                  </div>
                </div>
              </VueSlickCarousel>
              <VueSlickCarousel class="mt-2" ref="c2" v-bind="settingsnav" :asNavFor="$refs.c1" :focusOnSelect="true" :key="selectedColor">
                <div
                  v-for="(img,i_dx) in productImages"
                  :key="'image_'+i_dx"
                  @click="$refs.c1.goTo(i_dx)"
                >
                  <div class="wa-smart-picture square-ratio skeletton wa-product-image hand mx-1">
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
          <!--<div style="margin-top: -10px;" class="d-flex justify-space-between mt-5 mt-lg-0">
            <div>{{product.sku}}</div>
          </div>-->
          <div class="home-title px-0 text-left">{{product.name}}</div>
          <div class="sub-title teradeli-medium secondary--text px-0 text-left pt-2">{{product.slogan}}</div>
          <div class="py-5 d-flex align-center justify-space-between">
            <v-row style="" justify="center" class="pa-0 ma-0 text-center">
              <v-card
                  v-for="(ad,i_dx) in product.award"
                  :key="'award'+i_dx"
                  class="mx-5 award-img"
               >
               <div style="height:60px">
                <img width="100%" class="h-100 contain" :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-120,dpr-2/Logos/'+ ad.image" alt="">
               </div>
              </v-card>
            </v-row>
          </div>
          <!--<div style="height:50px" class="border-top-2 border-bottom-2 cursor-pointer d-flex align-center justify-space-between"
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

          </div>-->
          <div class="d-flex justify-space-between align-center my-5 mx-3">
            <h3 class="teradeli-book">{{ $n(product.price, 'currency') }}</h3>
            <div class="smalltext d-none">
              <v-icon style="bottom: 1px;display:none" x-small :class="{'available':product.offers.availability !== 'out of stock'}">{{ svgPath4 }}</v-icon>
              {{product.offers.availability !== 'out of stock'?$t('product.stock'):$t('product.notInStock')}}
            </div>
            <div class="smalltext">
              <v-icon style="bottom: 1px;" x-small :class="{'available':product.offers.availability}">{{ svgPath4 }}</v-icon>
              {{product.offers.pieces}}
            </div>
          </div>
          <Reservebutton class="w-100" />
          <Buybutton :product="product" class="w-100" />
          <p class="text-center">{{$t('nopayment')}}</p>
          <div class="mt-5" v-html="product.description">
          </div>
          <v-subheader>{{$t('product.details')}}</v-subheader>
          <div class="mx-5">
            <div class="py-5 d-flex align-center justify-space-between">
              <v-row style="height:92px" justify="center" class="pa-0 ma-0 text-center">
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
            </div>
            <div class="mb-5">
              <foldable class="baidu-foldable" height="%50">
                <slot>
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
                        {{ det }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                </slot>
                <template slot="view-more" slot-scope="{ toggle, collapsed }">
                  <div @click="toggle"
                      class="baidu-view-more"
                      :class="{ 'collapsed': collapsed }">
                    <svg class="baidu-view-more-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20"
                        height="20" fill="#3596ff">
                      <path
                        d="M512 0c-281.6 0-512 230.4-512 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z m0 938.666667c-234.666667 0-426.666667-192-426.666667-426.666667s192-426.666667 426.666667-426.666667 426.666667 192 426.666667 426.666667-192 426.666667-426.666667 426.666667z"
                        p-id="3018"></path>
                      <path
                        d="M793.6 396.8c-17.066667-17.066667-42.666667-17.066667-59.733333 0l-221.866667 221.866667-221.866667-221.866667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333l251.733333 251.733334c17.066667 17.066667 42.666667 17.066667 59.733334 0l251.733333-251.733334c17.066667-12.8 17.066667-42.666667 0-59.733333z"
                        p-id="3019"></path>
                    </svg>
                    <span class="baidu-view-more-text">{{ collapsed ? $t('product.readMore') : $t('product.readLess') }}</span>
                  </div>
                </template>        
              </foldable>
            </div>
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
      <!--<v-row class="border-top-2 ma-0 px-0 pvw d-none">
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
      </v-row>-->
    </v-container>
    <ShopIcon class="py-10"/>
    <InfoModal :is-modal="infoModal" v-on:closeModal="infoModal=false" :current="currentModal"/>
    <SideModal :is-modal="sideModal" v-on:closeModal="closeSideModal" :current="currentSideItem"
                :product="product" @colorSelect="colorSelect" />
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
    import { mdiChevronRight, mdiCreditCard, mdiContentCopy, mdiCircle, mdiTruckDelivery, mdiPackageVariantClosed } from '@mdi/js'
    // import "viewerjs/dist/viewer.css";
    Vue.component('foldable', VueFoldable);
    import getSiteMeta from '@/utils/getSiteMeta';

    export default {
        name: 'post',
        async asyncData(context) {
            const {$content, params, app} = context;
            const slug = params.slug;
            const lang_path = app.i18n.locale.split('-')[0] === 'en' ? 'en-us' : 'fr-fr';
            const productItem = await $content(`router/${lang_path}/shop`, slug).fetch();
            const productsItem = await $content(`router/${lang_path}/shop`).fetch();
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
                svgPath7: mdiPackageVariantClosed,
                read_more: true,
                infoModal: false,
                currentModal: 'paymentInfoModal',
                sideModal: false,
                currentSideItem: 'productCare',
                selectedColor: null,
                settingsnav: {
                    "slidesToShow": 3,
                    "rows": 2,
                    "slidesPerRow": 1,
                    "responsive": [
                        {
                            "breakpoint": 1450,
                            "settings": {
                                "slidesToShow": 2,
                                "rows": 3,
                            }
                        },
                        {
                            "breakpoint": 768,
                            "settings": {
                              "centerMode": true,
                              "infinite": true,
                              "slidesToShow": 2,
                              "slidesToScroll": 2,
                              "rows": 1,
                              "initialSlide": 2,
                            }
                        },
                    ]
                },
                settings: {
                    "dots": false,
                    "row": 1,
                    "infinite": false,
                    "arrow": false,
                    "slidesToShow": 3,
                    "slidesToScroll": 3,
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
                    this.productItem.price = 'Houston, we have a problem'/*this.productItem.offers.price*/;
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
            /*recommendedProducts() {
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
            },*/
            meta() {
              const metaData = {
                type: "product",
                id: this.product.sku,
                title: this.product.name,
                description: this.product.description,
                url: 'https://www.warenghem.com' + this.localePath('shop') + this.$route.params.slug,
                mainImage: 'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1200,ar-1.91-1,dpr-2/Products/'+ this.product.image[0].src
              };
              return getSiteMeta(metaData);
            }
        },
        /*beforeCreate() {
            let rc_products = this.$cookies.get('recent_products');
            if (rc_products.length > 0) {
                this.$store.commit('product/initRecentProduct', rc_products);
            }
        },
        created() {
            this.$store.dispatch('product/setRecentProducts', this.product.id);
        },*/
        mounted() {
            this.colorSelect()
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
                if (val) {
                    this.selectedColor = this.product.colors.find(color => color.id === parseInt(val));
                } else {
                    this.selectedColor = null
                }
            }
        },
        head() {
          return {
            title: this.product.name,
            meta: [
              ...this.meta,
              {
                property: "product:published_time",
                content: this.product.createdAt,
              },
              {
                property: "product:modified_time",
                content: this.product.updatedAt,
              },
              {
                property: "product:tag",
                content: this.product.tags ? this.product.tags.toString() : "",
              },
              {
                property: "product:google_product_category",
                content: this.product.categories[0].google
              },
              {
                property: "product:product_type",
                content: this.product.categories[0].name
              },
              {
                property: "product:retailer_item_id",
                content: this.product.sku,
              },
              {
                property: "product:price:amount",
                content: this.product.price,
              },
              {
                property: "product:price:currency",
                content: this.$i18n.localeProperties.currency,
              },
              {
                property: "product:availability",
                content: this.product.offers.availability,
              },
              {
                property: "product:link",
                content: 'https://www.warenghem.com' + this.localePath('shop') + this.$route.params.slug,
              },
              {
                name: "twitter:data2",
                content: this.product.tags ? this.product.tags.toString() : "",
              },
            ],
            /*link: [
              {
                hid: "canonical",
                rel: "canonical",
                href: 'https://www.warenghem.com' + this.localePath('shop') + this.$route.params.slug,
              },
            ],*/
          };
        }
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
.award-img {
    width: 35%;
    @media (min-width:48em) {
      width: 25%;
     }
  }
/* purgecss start ignore */
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
.vue-foldable .vue-foldable-container {
    overflow: hidden;
}
.vue-foldable {
    position: relative;
}
.vue-foldable .vue-foldable-mask.collapsed {
    opacity: 1;
    background: linear-gradient(to bottom, rgba(55,55,55,0), #fff);
}
.vue-foldable .vue-foldable-mask:not(.collapsed) {
    opacity: 0;
}
.vue-foldable .vue-foldable-mask {
    position: absolute;
    bottom: 30px;
    height: 80px;
    width: 100%;
    background: transparent;
    pointer-events: none;
}
.vue-foldable.baidu-foldable
{
  .vue-foldable-container {
    transition: max-height 0.3s;
  }
  .vue-foldable-mask {
    transition: opacity 3s;
    bottom: 34px;
  }
  .v-slide-group__wrapper {
    touch-action: unset!important;
}
  .baidu-view-more {
    background-color: #fff;
    transition: background-color .1s ease-in-out;
    color: #3D8EBE;
    padding: 0 8px;
    font-size: 14px;
    border-radius: 4px;
    text-align: center;
    height: 34px;
    line-height: 32px;
    min-width: 72px;
    cursor: pointer;
    .baidu-view-more-icon {
      vertical-align: middle;
    }
    .baidu-view-more-text {
      vertical-align: middle;
    }
    &:not(.collapsed) {
      .baidu-view-more-icon {
        transform: scaleY(-1);
      }
    }
  }
}
/* purgecss end ignore */

</style>