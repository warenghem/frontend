<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <!--Vue slick doesn't support Nuxt auto-import component-->
      <smallVerticalCard :borderColor="$vuetify.theme.currentTheme.systemGray" :buttonColor="$vuetify.theme.currentTheme.systemGray2" :ripple="true" v-for="(card, index) in cards" :icon="icon" :key="index" :cardColor="$vuetify.theme.currentTheme.systemGray2" :image="card.image" :name="card.name">
        <div class="d-flex align-center">
          <v-icon small right class="mr-1">
            {{check}}
          </v-icon>
          <v-card-subtitle class="font-italic text-hide pa-0 pr-1">{{$t('origin.verified')}}</v-card-subtitle>
        </div>
      </smallVerticalCard>
    </VueSlickCarousel>
  </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import smallVerticalCard from '@/components/origin/smallVerticalCard'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  
  export default {
    data () {
      return {
        settings: {
          "focusOnSelect": true,
          "slidesToShow": 1.1,
          "slidesToScroll": 1,
          "infinite": false,
          "arrows": false,
          "dots": false,
          "swipeToSlide": true,
          "responsive": [
              {
                  "breakpoint": 768,
                  "settings": {
                      "slidesToShow": 2.2,
                      "slidesToScroll": 2,
                  }
              },
              {
                  "breakpoint": 480,
                  "settings": {
                      "slidesToShow": 1.1,
                      "slidesToScroll": 1,
                  }
              }
          ]
        }
      }
    },
    props: {
        cards: {
            type: Array,
            default: () => []
        },
        icon: {
            type: String,
            default: ''
        },
        check: {
            type: String,
            default: ''
        }
    },
    components: {
        VueSlickCarousel,
        smallVerticalCard
    }
  }
</script>
<style scoped>
  ::v-deep .slick-slide {
      padding-right: 8px !important;
  }
</style>