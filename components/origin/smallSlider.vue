<template>
  <div>
    <VueSlickCarousel class="ma-1r" v-bind="settings">
      <SmallVerticalCard v-for="(card, index) in cards" :icon="icon" :key="index" :image="card.image" :name="card.name">
        <div class="d-flex align-center">
          <v-icon small right class="mr-1">
            {{check}}
          </v-icon>
          <v-card-subtitle class="font-italic text-hide pa-0">{{$t('origin.verified')}}</v-card-subtitle>
        </div>
      </SmallVerticalCard>
    </VueSlickCarousel>
  </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  
  export default {
    data () {
      return {
        settings: {
          "focusOnSelect": true,
          "slidesToShow": 3.2,
          "slidesToScroll": 3,
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
        VueSlickCarousel
    }
  }
</script>
