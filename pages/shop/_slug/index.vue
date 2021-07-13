<template>
  <div v-click-outside="closeSideModal">
    <ProductToolbarSticky class="stickyBar" :stock="stockstatus.stock" :product="product"/>
    <v-container fluid class="pa-0">
      <AtomsBtnBack style="z-index:1; height:47px!important" class="position-absolute systemBackground"/>
      <v-row
        class="ma-0"
      >
        <v-col
          cols="12" 
          md="8"
          class="pa-0"
        >
          <v-row class="ma-0">
            <v-col :cols="12" class="pl-lg-0 pa-0 position-relative">
              <VueSlickCarousel class="" :arrows="false" :dots="false" ref="c1" :asNavFor="$refs.c2" :focusOnSelect="true" :key="selectedColor">
                <div
                  v-for="(img,i_dx) in productImages"
                  :key="'image_'+i_dx"
                  style="outline: none;"
                >

                  <AtomsImageSquared class="wa-product-image systemGray" :ratio="'ar-4-3'" :image="img.src" />
                </div>
              </VueSlickCarousel>
              <VueSlickCarousel class="mt-2" ref="c2" v-bind="settingsnav" :asNavFor="$refs.c1" :focusOnSelect="true" :key="selectedColor">
                <div
                  v-for="(img,i_dx) in productImages"
                  :key="'image_'+i_dx"
                  @click="$refs.c1.goTo(i_dx)"
                >
                  <AtomsImageSquared class="wa-product-image systemGray hand mx-1" :ratio="'ar-1-1'" :image="img.src" />
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
          <ProductTitle :title="product.name" />
          <div class="sub-title teradeli-medium secondary--text px-0 text-left pt-2">{{product.slogan}}</div>
          <v-row align="center" justify="center" class="py-5 pa-0 ma-0 text-center">
              <img v-for="(ad,i_dx) in product.award" :key="'award'+i_dx" style="height:60px" width="100%" class="mx-5 award-img h-100 contain" :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-120,dpr-2/Logos/'+ ad.image" alt="">
          </v-row>
          <!--<div style="height:50px" class="border-top-2 border-bottom-2 cursor-pointer d-flex align-center justify-space-between"
               @click="openSideModal('colorSide')"
          >
            <div>
              {{$t('product.color')}}
            </div>
            <div class="d-flex align-center justify-space-between">
              <span v-if="selectedColor">{{selectedColor.name}}</span>
              <img
                :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,r-8/Materials/'+ selectedColor.icon"
                alt=""
                v-if="selectedColor"
                width="40px"
                class="mx-3 rounded-lg">
              <v-icon class="float-right">{{ svgPath1 }}</v-icon>
            </div>

          </div>-->
          <v-row align="center" justify="space-between" class="my-5 mx-3">
            <ProductPrice :price="product.price" />
            <ProductStock :pieces="product.offers.pieces" :stock="stockstatus.stock"/>
          </v-row>
          <MoleculesBtnMain :text="$t('btnWaitforit')" :large="true" @click.native="$store.state.productModal=true" class="w-100" />
          <ProductBtnBuy :product="product" class="w-100 my-2 d-none" />
          <p class="text-center">{{$t('nopayment')}}</p>
          <div class="mt-5" v-html="product.description"></div>
          <v-subheader>{{$t('product.details')}}</v-subheader>
          <div class="mx-5">
            <v-row justify="center" class="mb-5 pa-0 ma-0 text-center materials">
              <div
                  v-for="(mtr,i_dx) in product.material"
                  :key="'material_'+i_dx"
                  width="110px"
                  class="px-2 py-3"
              >
                <img width="40px" class="rounded-lg" :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,r-8/'+ mtr.icon" alt="">
                <v-card-text class="pa-0">
                  {{mtr.name}}
                </v-card-text>
              </div>
            </v-row>
            <span class="pt-2">{{product.dimensions.length}} x {{product.dimensions.height}} x {{product.dimensions.width}} {{product.dimensions.unit}}</span>
            <span class="teradeli-light">{{$t('product.size')}}</span>
            <ProductChipFoldable  :chip="product.details"/>
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
    <OrganismsShopIcon class="py-10"/>
    <ProductInfoModal :is-modal="infoModal" v-on:closeModal="infoModal=false" :current="currentModal"/>
    <ProductSideModal :is-modal="sideModal" v-on:closeModal="closeSideModal" :current="currentSideItem"
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
    import { mdiChevronRight, mdiCreditCard, mdiContentCopy, mdiTruckDelivery, mdiPackageVariantClosed } from '@mdi/js'
    // import "viewerjs/dist/viewer.css";
    import getSiteMeta from '@/utils/getSiteMeta';

    export default {
        name: 'post',
        async asyncData(context) {
            const {$content, params, app, $axios} = context;
            const slug = params.slug;
            const lang_path = app.i18n.locale.split('-')[0] === 'en' ? 'en-us' : 'fr-fr';
            const productItem = await $content(`router/${lang_path}/shop`, slug).fetch();
            const productsItem = await $content(`router/${lang_path}/shop`).fetch();
            let data = 'ST_YzkxMzZiZWYtZDc2NC00NDk3LTgwOTMtZjExNWM5YjU4NDQ5NjM3NDAyNzAwMzYyMDQxNTAy';
            let secret = Buffer.from(data).toString('base64');
            const stockstatus = await $axios.$get('https://app.snipcart.com/api/products/'+productItem.sku, { 
              headers: {
                'Authorization': `Basic ${secret}`,
                'Accept': 'application/json'
                }})
            return {
                productsItem,
                productItem,
                stockstatus
            }
        },
        data() {
            return {
                svgPath1: mdiChevronRight,
                svgPath2: mdiCreditCard,
                svgPath3: mdiContentCopy,
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
                    "arrows": false,
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
                            }
                        },
                        {
                            "breakpoint": 480,
                            "settings": {
                                "centerMode": true,
                                "focusOnSelect": true,
                                "slidesToShow": 1,
                                "slidesToScroll": 1,
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
                mainImage: 'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1200,ar-1.91-1,dpr-2/'+ this.product.image[0].src
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
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      width: 25%;
     }
  }
.materials {
  height:204px;
  @media screen and (min-width: 1486px) {
      height:92px
  }
}
</style>
