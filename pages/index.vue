<template>
  <div>
    <sticky-toolbar class="stickyBar"/>
    <div id="blackContent" @click="hideModal"></div>
    <VideoSection id="videoSection"/>
    <MissionSection class="pt-4 px-0 px-md-4" id="missionSection"/>
    <v-container fluid class="homegrid py-4">
      <v-card class="item1">
        <ProductSection id="productSection"/>
      </v-card>
      <v-card class="bgcard homecard item2">
        <MapSection id="mapTreeSection"/>
      </v-card>

      <v-card class="bgcard item3 homecard">
        <HistoriesSection/>
      </v-card>
      <v-card dark color="darkbugattiblue" class="item4">
        <References/>
      </v-card>
      <v-card dark class="item5">
        <SocialSection/>
      </v-card>
    </v-container>
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
      methods: {
          hideModal() {
              document.querySelector('.indianforest').classList.remove('active');
              document.querySelector('.mgforest').classList.remove('active');
              document.getElementById('blackContent').classList.remove('overlay');
              const el = document.body;
              el.classList.remove('modal-open');
              document.documentElement.style.overflowY = 'auto'
          }
      },
      head() {
          return {
              bodyAttrs: {
                  class: 'BgTransparent'
              }
          }
      }
  }

</script>
