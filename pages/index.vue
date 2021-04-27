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
        <div class="wa-smart-picture wa-panoramic-picture square-ratio skeletton">
          <picture class="">
            <source
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,ar-5-3,c-maintain_ratio/Environments/WA_spray_abstract_graye_.png 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,ar-5-3,c-maintain_ratio/Environments/WA_spray_abstract_graye_.png 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,ar-5-3,c-maintain_ratio/Environments/WA_spray_abstract_graye_.png 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,ar-5-3,c-maintain_ratio/Environments/WA_spray_abstract_graye_.png 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,ar-5-3,c-maintain_ratio/Environments/WA_spray_abstract_graye_.png 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,ar-5-3,c-maintain_ratio/Environments/WA_spray_abstract_graye_.png 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,ar-5-3,c-maintain_ratio/Environments/WA_spray_abstract_graye_.png 2500w,'" 
            >
            <img class="lazyload mediabox-img" 
            :data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,ar-5-3,c-maintain_ratio/Environments/WA_spray_abstract_graye_.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,ar-5-3,c-maintain_ratio/Environments/WA_spray_abstract_graye_.png 2x'" 
            data-sizes="auto" />
          </picture>
        </div>
      </v-card>
      <v-card dark class="item5" min-height="250">
        <SocialSection/>
      </v-card>
    </v-container>
    <ShopIcon class="py-10"/>
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
