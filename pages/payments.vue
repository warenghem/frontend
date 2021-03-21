<template>
  <div class="bgcard h-100">
	<v-toolbar-bar class="menubar d-flex pa-0 filter-bar">
		<Backbutton class="border-bottom-2"/>
		<div class="px-5 d-flex border-bottom-2 bg-white w-100">
			<div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
			{{$t('title')}}
			</div>
		</div>
		<v-spacer></v-spacer>
	</v-toolbar-bar>
    <article class="wa-magazine">
      <div class="wa-smart-picture wa-panoramic-picture square-ratio skeletton">
        <picture class="gradientoverlay">
          <source media="screen and (min-width: 64em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 2500w,'" 
          >
          <source media="screen and (min-width: 48em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-640,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-768,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1024,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1366,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1600,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1920,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-2500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 2500w,'" 
          >
          <source
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-640,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-768,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1024,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1366,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1600,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1920,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-2500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 2500w,'" 
          >
          <img class="lazyload mediabox-img" 
            :data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 2x'" 
            data-sizes="auto" />
        </picture>
      </div>
    </article>
    <v-row class="pa-0 ma-0">
      <v-col cols="12" md="8" class="bgcard pvw">
        <v-card class="bgcard">
          <div class="home-title teradeli-medium pb-10 bgcard">
            {{$t('payment.subtitle')}}
          </div>
          <Payments/>
        </v-card>
      </v-col>
      <v-col col="12" md="4" class="pvw bg-white">
        <CustomerServicesLayout/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
    import { mdiChevronRight, mdiChevronLeft, mdiChevronDown, mdiPlus } from '@mdi/js'
import shipping from './shipping.vue';
    export default {
  components: { shipping },
        name: 'legale',
        data() {
            return {
				svgPath1: mdiChevronRight,
				svgPath2: mdiChevronLeft,
				svgPath3: mdiChevronDown,
				svgPath4: mdiPlus,
                tab: "subscribe"
            }
        },
		computed: {
			tabs() {
					return [
						{ tabs: this.$t('tabs'), },
					];
				}
		},
        head() {
            return {
            }
        }
    }

</script>

<i18n>
{
	"en": {
		"payment": {
			"subtitle": "Our 100% secure payment methods"
		},
		"title": "Secure payments"
	},
	"fr": {
		"payment": {
			"subtitle": "Nos moyens de paiement 100% sécurisés"
		},
		"title": "Paiements sécurisés"
	}
}
</i18n>