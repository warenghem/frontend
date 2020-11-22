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
      >
        dsfdsfds
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
            <carousel :perPageCustom="[[769, 3],[475,2],[0,1]]"
                      :navigationEnabled="false"
                      :paginationEnabled="false"
                      class="thumb-container my-5"
                      v-if="images.length"
                      :centerMode="true"
            >
              <slide v-for="(img,i_dx) in images"
                     :key="i_dx"
                     class="text-center pa-2"
              >
                <div class="grey lighten-5">
                  <img :src="img"
                       class="thumb"
                       alt="thumb image"
                  >
                </div>

              </slide>
            </carousel>

          </v-tab-item>
          <v-tab-item
            value="recommendTab"
          >
            <carousel :perPageCustom="[[769, 3],[475,2],[0,1]]"
                      :navigationEnabled="false"
                      :paginationEnabled="false"
                      class="thumb-container my-5"
                      v-if="images.length"
                      :centerMode="true"
            >
              <slide v-for="(img,i_dx) in images"
                     :key="i_dx"
                     class="text-center pa-2"
              >
                <div class="grey lighten-5">
                  <img :src="img"
                       class="thumb"
                       alt="thumb image"
                  >
                </div>

              </slide>
            </carousel>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>

  </v-container>
  <!--  <div class="container mx-auto pt-6">-->
  <!--    <article v-if="post">-->
  <!--      <header class="grid grid-cols-2 gap-4 mb-12 rounded shadow-lg p-4">-->
  <!--        <img :src="post.media" alt="post.title" />-->
  <!--        <div class="">-->
  <!--          <h2 class="text-lg font-bold text-gray-800 mb-2">{{ post.title }}</h2>-->
  <!--          <p class="text-sm text-gray-700">-->
  <!--            {{ $t('published-at') }} {{ getDate }}-->
  <!--            <nuxt-link-->
  <!--              class="uppercase text-teal-600 hover:text-teal-800"-->
  <!--              v-for="lang in otherLanguages"-->
  <!--              :key="lang.locale"-->
  <!--              :to="lang.path"-->
  <!--            >-->
  <!--              {{ lang.locale }}-->
  <!--            </nuxt-link>-->
  <!--          </p>-->
  <!--        </div>-->
  <!--      </header>-->
  <!--      <nuxt-content class="text-gray-800" :document="post" />-->
  <!--    </article>-->
  <!--  </div>-->
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
                ]
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

  .thumb {
    padding: 12px;
    max-width: 100%;
    max-height: 450px;
    @media(max-width: 767px) {
      max-height: 235px;
    }
    @media(max-width: 425px) {
      max-height: 175px;
    }
  }
</style>
