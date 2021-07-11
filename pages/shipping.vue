<template>
  <div class=" h-100">
	<v-toolbar dense class="menubar pa-0 w-100 elevation-0">
		<AtomsBtnBack class="h-100"/>
		<div class="px-5 d-flex border-bottom-2 bg-white w-100 h-100">
			<div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
			{{$t('title')}}
			</div>
		</div>
		<v-spacer></v-spacer>
	</v-toolbar>
    <article class="wa-magazine position-relative">
		<h2 style="bottom:0" class="white--text page-title2 w-100 text-center pvw position-absolute z-2">{{$t('shipping.subtitle')}}</h2>
		<div class="wa-smart-picture wa-panoramic-picture large-ratio">
			<picture class="gradientoverlay">
			<source media="screen and (min-width: 64em)"
				:data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 2500w,'" 
			>
			<source media="screen and (min-width: 48em)"
				:data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-640,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-768,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1024,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1366,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1600,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1920,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-2500,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 2500w,'" 
			>
			<source
				:data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-640,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-768,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1024,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1366,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1600,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1920,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-2500,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 2500w,'" 
			>
			<img class="lazyload mediabox-img" 
				:data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 2x'" 
				data-sizes="auto" />
			</picture>
      </div>
    </article>
	<v-row class="pa-0 ma-0">
		<v-col cols="12" md="8" class=" pvw">
			<v-card class="">
				<LayoutShipping/>
			</v-card>
		</v-col>
		<v-col col="12" md="4" class="pvw bg-white">
			<LayoutCustomerServicesLayout/>
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
		computed: {
			tabs() {
					return [
						{ 
							href: "#questions",
							id: "questions",
							menu: this.$i18n.t('questions.menu'),
							subtitle: this.$i18n.t('questions.subtitle'),
						},
						{ 
							href: "#material",
							id: "material",
							menu: this.$i18n.t('material.menu'),
							subtitle: this.$i18n.t('material.subtitle'),
						},
						{ 
							href: "#shipping",
							id: "shipping",
							menu: this.$i18n.t('shipping.menu'),
							subtitle: this.$i18n.t('shipping.subtitle'),
						}
					];
				}
		},
        head() {
            return {
				title: this.$t('title'),
				meta: [ 
					{
						hid: 'description',
						name: 'description',
						content: this.$t('description')
					},
					{
					hid: "og:title",
					property: "og:title",
					content: this.$t('title'),
					},
					{
					hid: "og:description",
					property: "og:description",
					content: this.$t('description')
					},
					{
					hid: "og:url",
					property: "og:url",
					content: 'https://www.warenghem.com' + this.$nuxt.$route.path,
					},
				]
            }
        }
    }

</script>

<i18n>
{
	"en": {
		"title":"Delivery and returns – Warenghem Help Center",
		"description":"Delivery and returns – Warenghem Help Center",
		"shipping": {
			"subtitle": "Delivery and returns"
		},
		"title": "Delivery and returns"
	},
	"fr": {
		"title":"Livraison et retours – Warenghem Centre d'aide",
		"description":"Livraison et retours – Warenghem Centre d'aide",
		"shipping": {
			"subtitle": "Livraison et retours"
		},
		"title": "Livraison et retours"
	}
}
</i18n>