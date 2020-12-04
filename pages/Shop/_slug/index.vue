<template>
  <div>
    <product-sticky-toolbar class="stickyBar"/>
    <v-container fluid>
      <v-row
        class="mb-6"
      >
        <v-col
          lg="8"

        >
          <viewer :images="product.images" class="viewer" ref="viewer" @inited="inited">
            <img v-for="src in product.images" :src="src" :key="src" class="image d-none">
          </viewer>
          <v-row>

            <v-col :cols="12" class="pl-lg-0 py-2 position-relative">
              <v-btn :to="{path:'/en/shop/'}" type="dark" class="backButton" tile>
                <v-icon>mdi-keyboard-backspace</v-icon>
              </v-btn>
              <v-carousel
                :cycle="false"
                hide-delimiter-background
                show-arrows-on-hover
                class="grey lighten-5"
                height="70vh"
              >
                <v-carousel-item
                  v-for="(image,idx) in product.images" :key="image"
                  @click="show(idx)"
                  class="text-center"
                >
                  <img :src="image"
                       :lazy-src="require('../../../assets/images/image-loader.gif')"
                       height="100%"
                       class="lazyload"
                       alt=""
                  >
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          lg="4"
          class="pa-7"
        >
          <div class="d-flex justify-space-between">
            <div>M45538</div>
            <div>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="bold-title text-left pt-2 pb-7">SAC À DOS TRIO</div>
          <div class="d-flex justify-space-between align-center">
            <h3 style="font-weight: 900">2 600,00€</h3>
            <div>

              <v-icon small>mdi-circle</v-icon>

             {{$t('product.stock')}}
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
          <div class="custom-collapse">
            <div v-html="product.description"
                 class="box"
                 :class="{'shadow-btn':read_more}"
            >
            </div>
            <div @click="read_more=false" v-if="read_more" class="py-3">
              <u>{{$t('product.readMore')}}</u>
            </div>
            <div @click="read_more=true" class="py-3" v-else>
              <u>{{$t('product.readLess')}}</u>
            </div>
          </div>
          <div class="mb-7">
            <div class="border-top-1 border-bottom-1 cursor-pointer py-5"
                 @click="productCare=true"
            >
              {{$t('product.careBtn')}}
              <v-icon class="float-right">mdi-chevron-right</v-icon>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between py-5 border-bottom-1 cursor-pointer"
               @click="isModal=true">
            <div class="d-flex align-center">
              <v-icon class="pr-3 right-icon">mdi-credit-card</v-icon>
              <div>
                <div class="right-title">Information about payment</div>
                <span class="teradeli-light">paymant cart paypal</span>
              </div>
            </div>

            <div>
              <v-icon>mdi-content-copy</v-icon>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between py-5 border-bottom-1 cursor-pointer"
               @click="isModal=true">
            <div class="d-flex align-center">
              <v-icon class="pr-3 right-icon">mdi-credit-card</v-icon>
              <div>
                <div class="right-title">Information about payment</div>
                <span class="teradeli-light">paymant cart paypal</span>
              </div>
            </div>

            <div>
              <v-icon>mdi-content-copy</v-icon>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between py-5 border-bottom-1 cursor-pointer">
            <div class="d-flex align-center">
              <v-icon class="pr-3 right-icon">mdi-credit-card</v-icon>
              <div>
                <div class="right-title">Information about payment</div>
                <span class="teradeli-light">paymant cart paypal</span>
              </div>
            </div>

            <div>
              <v-icon>mdi-content-copy</v-icon>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between py-5 border-bottom-1 cursor-pointer">
            <div class="d-flex align-center">
              <v-icon class="pr-3 right-icon">mdi-credit-card</v-icon>
              <div>
                <div class="right-title">Information about payment</div>
                <span class="teradeli-light">paymant cart paypal</span>
              </div>
            </div>

            <div>
              <v-icon>mdi-content-copy</v-icon>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between py-5 cursor-pointer">
            <div class="d-flex align-center">
              <v-icon class="pr-3 right-icon">mdi-credit-card</v-icon>
              <div>
                <div class="right-title">Information about payment</div>
                <span class="teradeli-light">paymant cart paypal</span>
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
          <div class="bold-title">A DÉCOUVRIR ÉGALEMENT</div>
        </v-col>
        <v-col cols="12">
          <v-tabs
            :centered="true"
          >
            <v-tab
              href="#recentTab"
            >
              Consultés récemment

            </v-tab>
            <v-tab
              href="#recommendTab"
            >
              Recommandé
            </v-tab>
            <v-tab-item
              value="recentTab"
            >
              <VueSlickCarousel v-bind="settings">
                <div v-for="(img,i_dx) in product.images"
                     :key="i_dx"
                     class="text-center pa-2"
                >
                  <product-item></product-item>

                </div>
              </VueSlickCarousel>

            </v-tab-item>
            <v-tab-item
              value="recommendTab"
            >
              <VueSlickCarousel v-bind="settings">
                <div v-for="(img,i_dx) in product.images"
                     :key="'recommend'+i_dx"
                     class="pa-2"
                >
                  <product-item></product-item>
                </div>
              </VueSlickCarousel>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>
    <pay-modal :product="product"></pay-modal>
    <info-modal :content="content" :is-modal="isModal" v-on:closeModal="closeModal"></info-modal>
    <v-navigation-drawer
      v-model="productCare"
      absolute
      temporary
      right
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="colorModal"
      absolute
      temporary
      right
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
    </v-navigation-drawer>
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

    export default {
        name: 'post',
        components: {InfoModal, PayModal, ProductStickyToolbar, ProductItem},
        async asyncData(context) {
            const {$content, params, app, route, redirect} = context;
            const slug = params.slug;
            const post = await $content(`${app.i18n.locale}/blog`, slug).fetch();
            const computed = {
                getDate() {
                    return format(new Date(this.post.createdAt), 'dd/MM');
                },
            };
            return {
                post,
            }
        },
        data() {
            return {
                read_more: true,
                isModal: false,
                productCare: false,
                colorModal: false,

                product: {
                    name: 'SAC À DOS TRIO',
                    price: '26000',
                    id: '2',
                    in_stock: true,
                    images: [
                        'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                        'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                        'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                        'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                        'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                    ],
                    variants: [
                        {
                            name: 'SAC À DOS Black',
                            color: 'black',
                            images: ['https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                                'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                                'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',],
                        },
                        {
                            name: 'SAC À DOS blue',
                            color: 'blue',
                            images: ['https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                                'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                                'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',],
                        },
                        {
                            name: 'SAC À DOS red',
                            color: 'red',
                            images: ['https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                                'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                                'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',],
                        },
                    ],
                    description: "Ce nouveau sac à dos Trio est un modèle avant-gardiste qui mêle tradition et modernité. Confectionné en toile" +
                        "            Monogram Éclipse classique de Louis Vuitton, il est orné de détails originaux emblématiques du créateur" +
                        "            Virgil Abloh. Pensé pour le confort et la fonctionnalité, il offre une texture souple qui s'adapte au corps, un" +
                        "            système de fermeture aimantée sécurisée et de multiples poches intérieures et extérieures.Détails" +
                        "            60 x 72 x 19 cm (Longueur x Hauteur x Largeur) Toile Monogram Éclipse" +
                        "            Garniture en cuir de veau Doublure en textile\n" +
                        "            Finitions métalliques noires\n" +
                        "            Bretelles ajustables\n" +
                        "            Fermeture aimantée sécurisée\n" +
                        "            Poche plate intérieure\n" +
                        "            Deux poches doubles intérieures\n" +
                        "            Trois poches extérieures avec fermeture à glissière\n" +
                        "            Ce modèle peut être confectionné en France, en Espagne, en Italie ou aux États-Unis\n" +
                        "            Poignée: Simple"
                },
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
                }
            }
        },
        methods: {
            inited(viewer) {
                this.$viewer = viewer;
            },
            show(idx) {
                this.$viewer.view(idx);
            },
            closeModal() {
                this.isModal = false
            }
        },
        head() {
            return {
                title: this.post.title,
                htmlAttrs: {
                    lang: this.$i18n.locale,
                },
                meta: [
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: this.post.description,
                    },
                    {
                        property: 'og:title',
                        hid: 'og:title',
                        content: this.post.title,
                    },
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: this.post.media,
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
    font-size: 40px !important;
  }

  .right-title {
    font-size: 20px;
    font-weight: 500;

  }
</style>
