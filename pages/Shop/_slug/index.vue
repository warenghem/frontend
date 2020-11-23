<template>
  <v-container fluid>
    <v-row
      class="mb-6"
    >
      <v-col
        lg="8"

      >
        <viewer :images="images" class="viewer" ref="viewer" @inited="inited">
          <img v-for="src in images" :src="src" :key="src" class="image d-none">
        </viewer>
        <v-row>
          <v-col :cols="idx===0?12:6" class="pl-0 py-2" v-for="(image,idx) in images" :key="image">
            <div class="grey lighten-5" align="center" @click="show(idx)">
              <v-img
                :src="image"
                width="350px">
              </v-img>
            </div>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px">
              <path fill="black"
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
            </svg>
          </div>
        </div>
        <div class="bold-title text-left pt-2 pb-7">SAC À DOS TRIO</div>
        <div class="d-flex justify-space-between align-items-center">
          <h3 style="font-weight: 900">2 600,00€</h3>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10px" fill="green">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/>
            </svg>
            Disponible
          </div>
        </div>
        <v-btn large block tile color="black" class="py-3 my-3" dark height="50px">
          Ajouter au panier
        </v-btn>
        <div>
          Cette année, les Fêtes sont en avance ! Passez commande dès à présent, livraison à domicile offerte sous 2 à 3
          jours ouvrés.
        </div>
        <v-btn large block tile outlined color="black" class="py-3 my-3" height="50px">
          Trouver un magasin
        </v-btn>
        <div>
          Ce nouveau sac à dos Trio est un modèle avant-gardiste qui mêle tradition et modernité. Confectionné en toile
          Monogram Éclipse classique de Louis Vuitton, il est orné de détails originaux emblématiques du créateur Virgil
          Abloh. Pensé pour le confort et la fonctionnalité, il offre une texture souple qui s'adapte au corps, un
          système de fermeture aimantée sécurisée et de multiples poches intérieures et extérieures.
        </div>
        <div>
          Détails
          60 x 72 x 19 cm
          (Longueur x Hauteur x Largeur)
          Toile Monogram Éclipse
          Garniture en cuir de veau
          Doublure en textile
          Finitions métalliques noires
          Bretelles ajustables
          Fermeture aimantée sécurisée
          Poche plate intérieure
          Deux poches doubles intérieures
          Trois poches extérieures avec fermeture à glissière
          Ce modèle peut être confectionné en France, en Espagne, en Italie ou aux États-Unis
          Poignée: Simple
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
              <div v-for="(img,i_dx) in images"
                   :key="i_dx"
                   class="text-center pa-2"
              >
                <div class="grey lighten-5 d-flex justify-content-center align-items-center">
                  <v-img :src="img"
                         class=""
                         alt="thumb image"
                  ></v-img>
                </div>

              </div>
            </VueSlickCarousel>

          </v-tab-item>
          <v-tab-item
            value="recommendTab"
          >
            <VueSlickCarousel v-bind="settings">
              <div v-for="(img,i_dx) in images"
                   :key="'recommend'+i_dx"
                   class="text-center pa-2"
              >
                <div class="grey lighten-5 d-flex justify-content-center  align-items-center">
                  <v-img :src="img"
                         alt="thumb image"
                  ></v-img>
                </div>

              </div>
            </VueSlickCarousel>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>

  </v-container>
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

    export default {
        name: 'post',
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
                images: [
                    'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                    'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                    'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                    'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                    'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png',
                ],
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

</style>
