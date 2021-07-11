<template>
  <div>
    <HomecardsVideoSection id="videoSection"/>
    <HomecardsProductSection class="pt-2 pt-md-4 px-0 px-sm-4" id="productSection"/>
    <HomecardsMissionSection class="pb-0 py-2 py-sm-4 px-0 px-sm-4" id="missionSection"/>
    <v-container fluid class="homegrid py-0">
      <v-card class=" homecard item2">
        <HomecardsMapSection id="mapTreeSection"/>
      </v-card>
      <v-theme-provider dark>
        <OrganismsCardMain 
          :type="'bgImage'"
          :btnText="$t('btnSubscribe')"
          :subtitle="$t('subtitle')"
          :title="$t('title')"
          :textColor="'white--text'"
          :btnColor="'white--text'"
          @click-native="$store.state.newsletterModal=true"
          :image="'/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg'" 
          />
      </v-theme-provider>
    </v-container>
    <OrganismsShopIcon class="py-10"/>
  </div>
</template>

<script>

  export default {
      name: 'default',
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
<i18n>
{
	"en": {
		"subtitle": "Discover our history and the incredible objects that bring nature and humans together<br/>1 or 2 posts per month - Unsubscribe in one click",
		"title": "Join the vegetable and mineral revolution"
	},
	"fr": {
		"subtitle": "Une à deux fois par mois, découvrez notre histoire et les incroyables objets qui rapprochent la nature et l'humain",
		"title": "Rejoignez la révolution végétale et minérale"
	}
}
</i18n>
