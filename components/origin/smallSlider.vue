<template>
<div>
  <VueSlickCarousel class="ma-1r" v-bind="settings">
    <SmallVerticalCard v-for="(card, index) in cards" :key="index" :image="card.image" :name="card.name" />
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
          "centerMode": true,
          "focusOnSelect": true,
          "infinite": false,
          "slidesToShow": 3,
          "slidesToScroll": 3,
          "arrows": false,
          "dots": false,
          "swipeToSlide": true,
          "touchMove": true,
          "responsive": [
              {
                  "breakpoint": 768,
                  "settings": {
                      "slidesToShow": 2,
                      "slidesToScroll": 2,
                  }
              },
              {
                  "breakpoint": 480,
                  "settings": {
                      "slidesToShow": 1,
                      "slidesToScroll": 1,
                  }
              }
          ]
        },
      }
    },
    props: {
        cards: {
            type: Array,
            default: () => {
            },
        }
    },
    components: {
        VueSlickCarousel
    },
  }
</script>
<style scoped lang="scss">
</style>
