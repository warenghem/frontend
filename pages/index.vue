<template>
  <div>
    <!--<sticky-toolbar class="stickyBar"/>-->
    <VideoSection id="videoSection"/>
    <MissionSection class="pt-2 pt-md-4 px-0 px-md-4" id="missionSection"/>
    <v-container fluid class="homegrid py-4">
      <v-card class="item1">
        <ProductSection id="productSection"/>
      </v-card>
      <v-card class="bgcard homecard item2">
        <MapSection id="mapTreeSection"/>
      </v-card>
      <v-card class="bgcard item3 homecard" @scroll="handleSCroll">
        <HistoriesSection/>
      </v-card>
      <v-card dark color="darkbugattiblue" class="item4">
        <References/>
      </v-card>
      <v-card dark class="item5" min-height="250">
        <SocialSection/>
      </v-card>
    </v-container>
    <ShopIcon class="py-16"/>
  </div>
</template>

<script>

  export default {
      name: 'default',
      /*transition(to, from) {
        if (!from) {
          return 'slide-left'  don't work
        }
        return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left' slide-right don't work
      },
      transition: {
        beforeEnter() {
          this.$i18n.finalizePendingLocaleChange()
        }
      }*/
      head() {
          return {
              bodyAttrs: {
                  class: 'BgTransparent'
              }
          }
      },
      methods:{
          handleSCroll (event) {
            let header = document.body;
            if (window.scrollY > 100 && header.className.includes('BgTransparent')) {
            header.classList.remove('BgTransparent');
            } else if (window.scrollY < 100) {
              document.body.classList.add('BgTransparent');
            }
          }
        },
        created () {
          if (process.browser) {
            window.addEventListener('scroll', this.handleSCroll);
          }
        },
        destroyed () {
          if (process.browser) {
            window.removeEventListener('scroll', this.handleSCroll);
           }
        }
  }

</script>
