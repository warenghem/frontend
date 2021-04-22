<template>
  <div class="bgcard h-100">
	<v-toolbar dense class="menubar pa-0 w-100 elevation-0">
		<Backbutton class="h-100"/>
		<div class="px-5 d-flex border-bottom-2 bg-white w-100 h-100">
			<div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
			{{$t('title')}}
			</div>
		</div>
		<v-spacer></v-spacer>
	</v-toolbar>
    <article class="wa-magazine position-relative">
		<h2 style="bottom:0" class="text-white page-title2 w-100 text-center pvw position-absolute z-2">{{$t('payment.subtitle')}}</h2>
		<div class="wa-smart-picture wa-panoramic-picture large-ratio skeletton">
			<picture class="">
			<source media="screen and (min-width: 64em)"
				:data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,c-maintain_ratio/Environments/logo.155.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,c-maintain_ratio/Environments/logo.155.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,c-maintain_ratio/Environments/logo.155.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,c-maintain_ratio/Environments/logo.155.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,c-maintain_ratio/Environments/logo.155.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,c-maintain_ratio/Environments/logo.155.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,c-maintain_ratio/Environments/logo.155.jpg 2500w,'" 
			>
			<source media="screen and (min-width: 48em)"
				:data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-640,c-maintain_ratio/Environments/logo.155.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-768,c-maintain_ratio/Environments/logo.155.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1024,c-maintain_ratio/Environments/logo.155.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1366,c-maintain_ratio/Environments/logo.155.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1600,c-maintain_ratio/Environments/logo.155.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1920,c-maintain_ratio/Environments/logo.155.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-2500,c-maintain_ratio/Environments/logo.155.jpg 2500w,'" 
			>
			<source
				:data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-5-5,w-640,c-maintain_ratio/Environments/logo.155.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-5-5,w-768,c-maintain_ratio/Environments/logo.155.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-5-5,w-1024,c-maintain_ratio/Environments/logo.155.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-5-5,w-1366,c-maintain_ratio/Environments/logo.155.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-5-5,w-1600,c-maintain_ratio/Environments/logo.155.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-5-5,w-1920,c-maintain_ratio/Environments/logo.155.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-5-5,w-2500,c-maintain_ratio/Environments/logo.155.jpg 2500w,'" 
			>
			<img class="lazyload mediabox-img" 
				:data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,c-maintain_ratio/Environments/logo.155.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,c-maintain_ratio/Environments/logo.155.jpg 2x'" 
				data-sizes="auto" />
			</picture>
      </div>
    </article>
    <v-row class="pa-0 ma-0">
      <v-col cols="12" md="8" class="bgcard pvw">
        <v-card class="bgcard">
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
    export default {
        name: 'legale',
        data() {
            return {
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