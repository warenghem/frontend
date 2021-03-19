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
        <picture class="gradientoverlay blackoverlay">
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
			<div >	
				<div>
					<template>
					<v-card class="bgcard">
						<div class="home-title teradeli-medium pb-10 bgcard">
							{{$t('shipping.subtitle')}}
						</div>
						<v-expansion-panels focusable inset flat>
							<v-expansion-panel
								v-for="(tab,m_idx) in $t('tab.sections3')"
								:key="'tab_'+m_idx"
							>
								<v-expansion-panel-header ripple class="border-bottom-2 py-0 py-md-6" :expand-icon="svgPath3">
								{{tab.title}}
								</v-expansion-panel-header>
								<v-expansion-panel-content eager>
									<div class="pa-3 ma-1" style="font-size:0.9375rem" v-html="tab.text"></div>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card>
					</template>
				</div>
			</div>
		</v-col>
		<v-col col="12" md="4" class="pvw bg-white">
			<CustomerServicesLayout/>
		</v-col>
	</v-row>
  </div>
</template>

<script>
    import { mdiChevronRight, mdiChevronLeft, mdiChevronDown, mdiPlus } from '@mdi/js'
    export default {
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
            }
        }
    }

</script>

<i18n>
{
	"en": {
		"shipping": {
			"subtitle": "Partnership, Press, Reseller"
		},
		"tab": {
			"menu": "",
			"sections3": [
				{
					"text": "<p>If you are a brand or a reseller you can contact us at the address: <a href=\"mailto:administration@warenghem.com\">administration@warenghem.com</a></p><p>If you are a photographer, model or influencer you can contact us at the same address</p><div>Remember to tell us a bit about who you are, specify your universe, the address of your premises, and provide links to your social networks (Instagram, Facebook ...)</div><p>Our teams will then come back , quickly to you!</p></p></p>",
					"title": "What if we partnered together?"
				},
				{
					"text": "<div><p>Contact us at: <a href=\"mailto:administration@warenghem.com\">administration@warenghem.com</a></p><div>Remember to tell us a little about who you are, specify your universe of your newspaper / blog or other, the address of your local, and provide links to your social networks (Instagram, Facebook ...)</div> Our teams will then get back to you quickly!</p></p></p></div>",
					"title": "Do you want to communicate about us?"
				},
				{
					"text": "<div><p>Nothing could be simpler!</p><p><span> Write to us at </span><a href=\"mailto:administration@warenghem.com\">administration@warenghem.com</a> </span></p><div>Remember to tell us a little about who you are, to specify your universe of brand, the address of your store, attach one or two photos if you have any, and provide links to your social networks (Instagram, Facebook ...)</div> Our teams will then come back to you quickly!</p></p></p></div>",
					"title": "Become a Reseller"
				}
			]
		},
		"title": "Partnership, Press"
	},
	"fr": {
		"shipping": {
			"subtitle": "Partenariat, Presse, Revendeur"
		},
		"tab": {
			"menu": "",
			"sections3": [
				{
					"text": "<p>Si vous êtes une marque ou un revendeur vous pouvez nous contacter à l’adresse : <a href=\"mailto:administration@warenghem.com\">administration@warenghem.com</a></p><p>Si vous êtes photographe, mannequin ou influenceur vous pouvez nous contacter à la même adresse</p><div>Pensez à nous raconter un peu qui vous êtes, préciser votre univers, l'adresse de vos locaux, et donner des liens vers vos réseaux sociaux (Instagram, Facebook...)</div><p>Nos équipes reviendront ensuite, rapidement vers vous !</p></p></p>",
					"title": "Et si nous réalisions un partenariat ensemble ?"
				},
				{
					"text": "<div><p>Contactez nous à l’adresse : <a href=\"mailto:administration@warenghem.com\">administration@warenghem.com</a></p><div>Pensez à nous raconter un peu qui vous êtes, préciser votre univers de votre journal/blog ou autres, l'adresse de vos locaux, et donner des liens vers vos réseaux sociaux (Instagram, Facebook...)</div> Nos équipes reviendront ensuite, rapidement vers vous !</p></p></p></div>",
					"title": "Vous souhaitez communiquer sur nous ?"
				},
				{
					"text": "<div><p>Rien de plus simple !</p><p><span> Ecrivez-nous à </span><a href=\"mailto:administration@warenghem.com\">administration@warenghem.com</a> </span></p><div>Pensez à nous raconter un peu qui vous êtes, préciser votre univers de marque, l'adresse de votre boutique, joindre une ou deux photos si vous en avez, et donner des liens vers vos réseaux sociaux (Instagram, Facebook...)</div> Nos équipes reviendront ensuite, rapidement vers vous !</p></p></p></div>",
					"title": "Devenir Revendeur"
				}
			]
		},
		"title": "Partenariat, Presse"
	}
}
</i18n>