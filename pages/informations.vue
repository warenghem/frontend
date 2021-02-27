<template>
  <div class="bgcard">
    <div class="d-none d-md-block">
      <v-toolbar-bar class="menubar d-flex pa-0 filter-bar">
        <Backbutton class="border-bottom-2"/>
        <div class="px-5 d-flex border-bottom-2 bg-white">
          <div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
            {{$t('title')}}
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-tabs
            v-model="tab"
            right
			center-active
			show-arrows
			:prev-icon="svgPath2"
			:next-icon="svgPath1"
            class="border-bottom-2"
          >
              <v-tabs-slider color="#0081a7"></v-tabs-slider>
              <v-tab 
                  v-for="(tab,t_idx) in tabs"
                  :key="t_idx"
                  :href="tab.href"
                  class="border-left-2"
				  :id="tab.id"
              >
                {{ tab.menu }}
              </v-tab>
          </v-tabs>
      </v-toolbar-bar>
      <v-tabs-items v-model="tab">
        <v-tab-item
          :key="1" value="protection"
        >
                <v-container fluid class="grid-container pa-0">
                    <v-card 
                        v-for="(product,p_idx) in products"
                        :key="p_idx"
                        height= "100%"
                        lazy
                        class="bgcard homecard"
						:class="grid[p_idx]"
                    >
                            <div class="h-100 img-fluid theme--light skeletton">
                                <div style="z-index:2" class="text-center position-absolute d-flex justify-center align-center h-100 w-100">
									<div class="text pvw">
										<div>
											<img width="200px" class="icon lazyload" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ icon[p_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ icon[p_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ icon[p_idx] +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ icon[p_idx] +' 683w'">
										</div>
										<div
											class="text-center text-uppercase text-white app-title d-block" style="width:300px!important;font-weight: bold;"
											>
											{{product.title}}
										</div>
										<div class="text-center" v-html="product.summary"></div>
									</div>
                                </div>
                                <div class="mediabox">
                                    <picture>
                                        <source media="screen and (min-width: 64em)"
                                            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ backgroundImages[p_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ backgroundImages[p_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ backgroundImages[p_idx] +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ backgroundImages[p_idx] +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800'+ backgroundImages[p_idx] +' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960'+ backgroundImages[p_idx] +' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500'+ backgroundImages[p_idx] +' 1500w,'" 
                                        >
                                        <source media="screen and (min-width: 48em)"
                                            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ backgroundImages[p_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ backgroundImages[p_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ backgroundImages[p_idx] +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ backgroundImages[p_idx] +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800'+ backgroundImages[p_idx] +' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960'+ backgroundImages[p_idx] +' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500'+ backgroundImages[p_idx] +' 1500w,'" 
                                        >
                                        <source
                                            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ backgroundImages[p_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ backgroundImages[p_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ backgroundImages[p_idx] +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ backgroundImages[p_idx] +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800'+ backgroundImages[p_idx] +' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960'+ backgroundImages[p_idx] +' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500'+ backgroundImages[p_idx] +' 1500w,'" 
                                        >
                                        <img class="lazyload mediabox-img"
                                            :data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500'+ backgroundImages[p_idx] +' 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500'+ backgroundImages[p_idx] +' 2x'" 
                                            data-sizes="auto" />
                                    </picture>
                                </div>
                            </div>
                    </v-card>
                </v-container>
        </v-tab-item>

      </v-tabs-items>
    </div>
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
                tab: "subscribe",
                backgroundImages: [
                    "/Products/bag-blackblue-deepest.png",
                    "/Environments/dionysos_suisse.jpg",
                    "/Environments/dionysos_grappes.PNG",
                    "/home_gCAPosI9qrtpP.jpg"
                ],
                icon: [
                    "/Logos/Dionysos.svg",
                    "",
                    "/Environments/dionysos_25_2.png",
                    ""
                ],
                link: [
                    "/shop/bag-dionysos-48h-black-lightbluebugatti/",
                    "/shop/belt-dionysos/",
                    "/shop/wallet-dionysos/",
                    ""
                ],
                grid: [
                    "div1",
                    "div2 blueoverlay",
                    "div3",
                    "div4"
                ],
                products: this.$t('products'),
            }
        },
		computed: {
			tabs() {
					return [
						{ 
							href: "#protection",
							id: "protection",
							menu: this.$i18n.t('protection.menu'),
							subtitle: this.$i18n.t('protection.subtitle'),
						},
						{ 
							href: "#conditions",
							id: "conditions",
							menu: this.$i18n.t('conditions.menu'),
							subtitle: this.$i18n.t('conditions.subtitle'),
						},
						{ 
							href: "#mentions",
							id: "mentions",
							menu: this.$i18n.t('mentions.menu'),
							subtitle: this.$i18n.t('mentions.subtitle'),
						},
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
		"conditions": {
			"menu": "Terms and conditions",
			"subtitle": "Version 1.0"
		},
		"mentions": {
			"menu": "Legal Notice",
			"subtitle": "Version 1.0"
		},
		"protection": {
			"menu": "Data protection policy",
			"subtitle": "Updated on 01/04/2021"
		},
		"title": "Informations",
		"productTitle": "Objects in creation",
		"products": [
			{
				"desc": "The largest of the bags. Composed of grapes and a French linen lining. Indispensable for weekends, sports, or short stays. This is the centerpiece, which sets the tone for the collection.",
				"summary": "Vines and flax. Such is his destiny.",
				"tag": "Available soon - 30 pieces",
				"title": "Dionysos 48H"
			},
			{
				"desc": "Large and thick, with saddle finish, it fits just as well with a suit as with jeans.",
				"summary": "She won't let you down.",
				"tag": "Available soon - 30 pieces",
				"title": "Dionysos Belt"
			},
			{
				"desc": "Ally of your daily life, it is designed around oblique lines representing the emblematic W of the brand. Each of them has space for your cards.",
				"summary": "Vegetal like its leaves.",
				"tag": "Available soon - 30 pieces",
				"title": "Dionysos Wallet"
			},
			{
				"desc": "Ally of your daily life, it is designed around oblique lines representing the emblematic W of the brand. Each of them has space for your cards.",
				"summary": "Vegetal like its leaves.",
				"tag": "Available soon - 30 pieces",
				"title": "Dionysos Wallet"
			}
		]
	},
	"fr": {
		"conditions": {
			"menu": "Nos ateliers",
			"subtitle": "Version 1.0"
		},
		"mentions": {
			"menu": "Notre application Origin",
			"subtitle": "Version 1.0"
		},
		"protection": {
			"menu": "Nos cuirs Dionysos",
			"subtitle": "Mis à jour le 04/01/2021"
		},
		"title": "Informations",
		"productTitle": "Les objets en création",
		"products": [
			{
				"title": "Des chiffres et des lettres",
				"summary": ""
			},
			{
				"title": "",
				"summary": "Milliards de litres de vin produits dans le monde chaque année"
			},
			{
				"title": "",
				"summary": "<div>de matières qui ne se retrouvent pas dans une bouteille</div>"
			},
			{
				"title": "",
				"summary": "Milliards de m2 de cuir de vin que l'on peux produire chaque année, rien qu'en valorisant des déchets de production"
			}
		]
	}
}
</i18n>

<style scoped lang="scss">
.grid-container {
  display: grid;
  padding: 1rem!important;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "div1 div1 div1 div1"
    "div2 div2 div3 div3"
    "div4 div4 div4 div4";
}
.div1 { 
	grid-area: div1; 
	.text {
		right: 0;
		top: 20px;
		color: white!important;
		position: absolute;
	}
	.icon {
		padding-bottom: 20px;
	}
}
.div2 { 
	grid-area: div2; 
	.text {
		color: white;
		margin: auto;
	}
}
.div3 { grid-area: div3; }
.div4 { grid-area: div4; }

</style>