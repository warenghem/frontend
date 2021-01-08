<template>
  <div v-click-outside="closeSideModal">
    <product-sticky-toolbar class="stickyBar" :product="product"/>
    <v-container fluid>
      <v-row
        class="mb-6"
      >
        <v-col
          lg="8"

        >
          <v-row>

            <v-col :cols="12" class="pl-lg-0 py-2 position-relative">
              <v-btn :to="{path:'/en/shop/'}" type="dark" class="backButton" tile>
                <v-icon>mdi-keyboard-backspace</v-icon>
              </v-btn>
              <VueSlickCarousel v-bind="settingsSingle" v-viewer>
                <div
                  class="pa-2 img-wrapper"
                  v-for="(img,i_dx) in product.image"
                  :key="'image_'+i_dx"

                >
                  <img
                    :src="img.src"
                    :lazy-src="require('../../../assets/images/image-loader.gif')"
                    class="lazyload"
                    alt=""
                  >

                </div>
              </VueSlickCarousel>

            </v-col>
          </v-row>
        </v-col>
        <v-col
          lg="4"
          class="pa-7"
        >
          <div class="d-flex justify-space-between">
            <div>{{product.sku}}</div>
            <div>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="bold-title text-left pt-2 pb-7">{{product.name}}</div>
          <div class="border-top-1 border-bottom-1 cursor-pointer py-5 d-flex align-center justify-space-between"
               @click="openSideModal('colorSide')"
               v-if="productColor.name"
          >
            <div>
              {{$t('product.color')}}
            </div>
            <div class="d-flex align-center justify-space-between">
              {{productColor.name}}
              <img :src="productColor.image.icon" alt="" v-if="productColor.image" width="40px" class="mx-3">
              <v-icon class="float-right">mdi-chevron-right</v-icon>
            </div>

          </div>
          <div class="border-top-1 border-bottom-1 cursor-pointer py-5 d-flex align-center justify-space-between"
               @click="openSideModal('materialSide')"
               v-if="productMaterialChoice.name"
          >
            <div>
              {{$t('product.material')}}
            </div>
            <div class="d-flex align-center justify-space-between">
              {{productMaterialChoice.name}}
              <img :src="productMaterialChoice.image" alt="" v-if="productMaterialChoice.image" width="40px"
                   class="mx-3">
              <v-icon class="float-right">mdi-chevron-right</v-icon>
            </div>

          </div>
          <div class="d-flex justify-space-between align-center mt-3">
            <v-progress-circular
              indeterminate
              color="primary"
              :size="20"
              v-show="$store.state.product.loading"
            ></v-progress-circular>
            <h3 style="font-weight: 900" class="priceHide" v-show="!$store.state.product.loading">{{product.price}}
              {{$store.state.langs.currentLang.sign}}</h3>
            <div>

              <v-icon small :class="{'available':product.offers.availability}">mdi-circle</v-icon>

              {{product.offers.availability?$t('product.stock'):$t('product.notInStock')}}
            </div>
          </div>
          <v-btn large block tile color="black" class="py-3 my-3" dark height="50px"
                 @click="$store.commit('product/OPEN_PAY_MODAL')">
            {{$t('product.cartBtn')}}
          </v-btn>
          <div>
            Cette année, les Fêtes sont en avance ! Passez commande dès à présent, livraison à domicile offerte sous 2 à
            3
            jours ouvrés.
          </div>
          <v-btn large block tile outlined color="black" class="py-3 my-3" height="50px">
            {{$t('product.findStore')}}
          </v-btn>
          <div>
            <foldable :minHeight="200" height="50%">
              <div v-html="product.additionalProperty[0].details"
              ></div>
              <p align="center" class="my-foldable"
                 slot="view-more" slot-scope="{ toggle, collapsed }" @click="toggle">
                {{ collapsed ? $t('product.readMore') : $t('product.readLess') }}
              </p>
            </foldable>
          </div>
          <div class="mb-7">
            <div class="border-top-1 border-bottom-1 cursor-pointer py-5"
                 @click="openSideModal('productCare')"
            >
              {{$t('product.materialTitle')}}
              <v-icon class="float-right">mdi-chevron-right</v-icon>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between py-5 border-bottom-1 cursor-pointer"
               @click="openModal('paymentInfoModal')">
            <div class="d-flex align-center">
              <v-icon class="pr-5 right-icon">mdi-credit-card</v-icon>
              <div>
                <div class="right-title">{{$t('product.payInfoBtn.title')}}</div>
                <span class="teradeli-light">{{$t('product.payInfoBtn.desc')}}</span>
              </div>
            </div>

            <div>
              <v-icon>mdi-content-copy</v-icon>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between py-5 border-bottom-1 cursor-pointer"
               @click="openModal('shippingModal')">
            <div class="d-flex align-center">
              <v-icon class="pr-5 right-icon">mdi-truck-delivery</v-icon>
              <div>
                <div class="right-title">{{$t('product.shipBtn.title')}}</div>
                <span class="teradeli-light">{{$t('product.shipBtn.desc')}}</span>
              </div>
            </div>

            <div>
              <v-icon>mdi-content-copy</v-icon>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between py-5 border-bottom-1 cursor-pointer"
               @click="openModal('returnModal')">
            <div class="d-flex align-center">
              <v-icon class="pr-5 right-icon">mdi-sync</v-icon>
              <div>
                <div class="right-title">{{$t('product.returnBtn.title')}}</div>
                <span class="teradeli-light">{{$t('product.returnBtn.desc')}}</span>
              </div>
            </div>

            <div>
              <v-icon>mdi-content-copy</v-icon>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between py-5 cursor-pointer" @click="openModal('packageModal')">
            <div class="d-flex align-center">
              <v-icon class="pr-5 right-icon">mdi-package-variant-closed</v-icon>
              <div>
                <div class="right-title">{{$t('product.packageBtn.title')}}</div>
                <span class="teradeli-light">{{$t('product.packageBtn.desc')}}</span>
              </div>
            </div>

            <div>
              <v-icon>mdi-content-copy</v-icon>
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
            >
              {{$t('product.recent')}}

            </v-tab>
            <v-tab
              href="#recommendTab"
              v-if="recommendedProducts.length>0"
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
    <pay-modal :product="product"></pay-modal>
    <info-modal :is-modal="infoModal" v-on:closeModal="infoModal=false" :current="currentModal"></info-modal>
    <side-modal :is-modal="sideModal" v-on:closeModal="closeSideModal" :current="currentSideItem"
                :product="product">
    </side-modal>
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
    import {format} from 'date-fns';
    import ProductItem from "../../../components/product/product-item";
    import ProductStickyToolbar from "../../../components/product/product-sticky-toolbar";
    import PayModal from "../../../components/product/pay-modal";
    import InfoModal from "../../../components/product/info-modal";
    import SideModal from "../../../components/product/side-modal";
    import VueFoldable from 'vue-foldable'
    import 'vue-foldable/dist/vue-foldable.css'

    Vue.component('foldable', VueFoldable);
    export default {
        name: 'post',
        components: {
            SideModal, InfoModal, PayModal, ProductStickyToolbar, ProductItem
        },
        async asyncData(context) {
            const {$content, params, app, route, redirect} = context;
            const slug = params.slug;
            const productItem = await $content(`${app.i18n.locale}/Shop`, slug).fetch();
            const productsItem = await $content(`${app.i18n.locale}/Shop`).fetch();
            context.store.commit('langs/SET_LANG_NAV', productItem.Languages || []);
            return {
                productItem, productsItem
            }
        },
        computed: {
            product() {
                let currency = this.productItem.currency.find(currency => {
                    return currency.name === this.$store.state.langs.currentLang.currency
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
            Languages() {
                return this.productItem.Languages || []
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

        },
        mounted() {
            var name = this.product.default_attributes.find(p => p.name === 'Color').option;
            this.productColor = {
                name: name,
                image: this.product.attributes.find(p => p.name === 'Color').options.find(op => op.name === name)
            };
            this.productMaterialChoice = this.product.material[0]

        },
        data() {
            return {
                read_more: true,
                infoModal: false,
                currentModal: 'paymentInfoModal',
                sideModal: false,
                currentSideItem: 'productCare',
                productColor: {
                    name: null,
                    image: null
                },
                productMaterialChoice: {
                    name: null,
                    image: null
                },
                productMaterial: null,
                content: "Pour préserver au fil des ans la beauté de cet article en toile Monogram Éclipse, nous vous recommandons de suivre ces conseils d’entretien :\n" +
                    "\n" +
                    "Veillez à ne pas érafler ou frotter votre article contre des surfaces abrasives, en particulier les finitions en cuir.\n" +
                    "Nous vous conseillons de protéger votre article de l’humidité et de le maintenir à l’abri des sources directes de chaleur, comme les radiateurs et l’habitacle des voitures en été.\n" +
                    "Évitez de mettre votre article en contact avec des liquides, de la crème et du désinfectant pour les mains, du maquillage et du parfum.\n" +
                    "Pour nettoyer votre article, essuyez délicatement la toile enduite avec un chiffon doux imbibé d’eau légèrement savonneuse et les finitions en cuir noir avec un chiffon doux et sec.\n" +
                    "La surface adhérente, constituée de ventouses microscopiques, peut être réactivée. À l’usage, la surface peut naturellement perdre son adhérence. Il est possible d’y remédier en nettoyant doucement la surface avec un chiffon humidifié d’eau et en la laissant sécher intégralement pendant 10 minutes avant de replacer le téléphone portable. L’étui a retrouvé son adhérence et le contact avec votre téléphone sera à nouveau parfait.\n" +
                    "Quand vous ne vous en servez pas, rangez l’article dans la feutrine fournie lors de l’achat. Nous vous conseillons de le conserver à l’abri des températures élevées, de l’humidité excessive ou des zones non ventilées.\n" +
                    "\n" +
                    "\n" +
                    "Pour toute question relative à votre article, veuillez prendre contact avec un magasin Louis Vuitton.",
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
                }
            }
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
            }

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
  .bold-title {
    font-size: 2.125rem;
    line-height: 2.125rem;
    color: inherit;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
  }

  .backButton {
    position: absolute;
    left: 5px;
    top: 8px;
    z-index: 1;
  }

  .border-bottom-1 {
    border-bottom: solid 1px #cbcbcb99 !important;
  }

  .border-top-1 {
    border-top: solid 1px #cbcbcb99 !important;
  }

  .right-icon {
    font-size: 35px !important;
  }

  .right-title {
    font-size: 18px;
    font-weight: 500;

  }

  span.teradeli-light {
    font-size: 14px;
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

  .vue-foldable-container {
    transition: max-height 0.7s;
  }

  .vue-foldable-mask {
    transition: opacity 3s;
    bottom: 24px;
  }
</style>
