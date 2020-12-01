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
              <v-btn :to="{path:'/en/shop/'}" type="dark" class="backButton" tile>Back</v-btn>
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

              Disponible
            </div>
          </div>
          <v-btn large block tile color="black" class="py-3 my-3" dark height="50px">
            Ajouter au panier
          </v-btn>
          <div>
            Cette année, les Fêtes sont en avance ! Passez commande dès à présent, livraison à domicile offerte sous 2 à
            3
            jours ouvrés.
          </div>
          <v-btn large block tile outlined color="black" class="py-3 my-3" height="50px">
            Trouver un magasin
          </v-btn>
          <div class="custom-collapse">
            <div v-html="product.description"
                 class="box"
                 :class="{'shadow-btn':read_more}"
            >
            </div>
            <div @click="read_more=false" v-if="read_more" class="py-3">
              <u>Voir plus</u>
            </div>
            <div @click="read_more=true" class="py-3" v-else>
              <u>Voir moins</u>
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

    export default {
        name: 'post',
        components: {ProductStickyToolbar, ProductItem},
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
                product: {
                    name: '',
                    price: '',
                    id: '',
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
                            name: '',
                            color: 'black',
                            images: [],
                        },
                        {
                            name: '',
                            color: 'blue',
                            images: [],
                        },
                        {
                            name: '',
                            color: 'red',
                            images: [],
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
</style>
