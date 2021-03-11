<template>
  <div style="background:black">
    <div>
      <v-toolbar-bar class="menubar d-flex pa-0 filter-bar">
        <Backbutton class="border-bottom-2"/>
        <div class="px-5 border-bottom-2 bg-theme d-none d-md-flex">
          <div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
            {{$t('title')}}
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-tabs
            v-model="tab"
            right
			center-active
			:prev-icon="svgPath2"
			:next-icon="svgPath1"
            class="border-bottom-2 toolbartabs"
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
          :key="1" value="dionysos"
        >
				<div class="position-relative" style="height:90vh;background:black">
					<div style="z-index:3;bottom:80px" class="position-absolute w-100 text-center">
						<img width="200px" class="icon lazyload pb-3" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Dionysos.svg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Dionysos.svg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Logos/Dionysos.svg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Logos/Dionysos.svg 683w'">
						<div style="font-size:60px!important" class="app-title teradeli-medium lbbgradienttext">Le végétal anobli.</div>
						<div style="max-width:900px;color:#a1a1a6" class="sub-title teradeli-medium mx-auto">Faites du végétal un élément noble et omniprésent dans votre vie. Tel est la mission que nous nous sommes fixés au lancement de ce projet. Le vin est apparu comme la figure absolue de l'élégance à la Francaise. Voici l'histoire de la naissance de Dionysos en chiffres et en lettres.</div>
					</div>
					<div class="mediabox wa-smart-picture wa-panoramic-picture square-ratio fullgradientoverlay blackoverlay2 h-100">
						<img width="100%" class="icon lazyload mediabox-img" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/home_gCAPosI9qrtpP.jpg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/home_gCAPosI9qrtpP.jpg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/home_gCAPosI9qrtpP.jpg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/home_gCAPosI9qrtpP.jpg 1500w'">
					</div>
				</div>
				<div style="margin-top:200px;margin-bottom:100px" class="text-center app-title">La genese de l'idée : deux constats</div>
                <v-container fluid class="grid-container pa-0">
                    <v-card 
                        v-for="(product,p_idx) in products"
                        :key="p_idx"
                        height= "100%"
                        lazy
                        class="bgcard card rounded-xl"
						:class="grid[p_idx]"
                    >
                            <div class="h-100 img-fluid theme--light skeletton">
								<div style="z-index:2" class="text-uppercase text-center position-absolute d-flex justify-center h-100 w-100 pt-5">
									{{product.subtitle}}
								</div>
                                <div style="z-index:2" class="text-center position-absolute d-flex justify-center align-center h-100 w-100">
									<div class="text pvw">
										<div>
											<img width="200px" class="icon lazyload" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ icon[p_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ icon[p_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ icon[p_idx] +' 512w'">
										</div>
										<div
											class="text-center text-uppercase text-white app-title d-block" style="max-width:500px!important;font-weight: bold;"
											>
											{{product.title}}
										</div>
										<div style="max-width:600px;margin-top: -20px;" class="text-center page-subtitle" v-html="product.summary"></div>
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
                                        <img class="lazyload mediabox-img rounded-xl"
                                            :data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500'+ backgroundImages[p_idx] +' 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500'+ backgroundImages[p_idx] +' 2x'" 
                                            data-sizes="auto" />
                                    </picture>
                                </div>
                            </div>
                    </v-card>
                </v-container>
				<v-container id="text" fluid class="text-center pa-0 my-10">
					<div style="color:black;max-width: 500px !important; font-weight: bold;" class="text-uppercase app-title ma-auto py-5">{{$t('title2')}}</div>
					<img style="max-width:800px" class="lazyload" data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/dionysos_timelines.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/dionysos_timelines.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Environments/dionysos_timelines.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Environments/dionysos_timelines.png 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/Environments/dionysos_timelines.png 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/Environments/dionysos_timelines.png 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/Environments/dionysos_timelines.png 1500w">
				</v-container>
        </v-tab-item>
		<v-tab-item>
		</v-tab-item>
        <v-tab-item
          :key="3" value="origin"
        >
                <v-container fluid class="grid-container pa-0">
                    <v-card 
                        v-for="(origin,o_idx) in origins"
                        :key="o_idx"
                        height= "100%"
                        lazy
                        class="bgcard card"
						:class="origingrid[o_idx]"
                    >
                            <div class="h-100 img-fluid theme--light skeletton">
								<div style="z-index:2" class="text-uppercase text-center position-absolute d-flex justify-center h-100 w-100 pt-5">
									{{origin.subtitle}}
								</div>
                                <div style="z-index:2" class="text-center position-absolute d-flex justify-center align-center h-100 w-100">
									<div class="text pvw">
										<div>
											<img width="200px" class="icon lazyload" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ originicon[o_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ originicon[o_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ originicon[o_idx] +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ originicon[o_idx] +' 683w'">
										</div>
										<div
											class="text-center text-uppercase text-white app-title d-block" style="max-width:500px!important;font-weight: bold;"
											>
											{{origin.title}}
										</div>
										<div style="max-width:600px;margin-top: -20px;" class="text-center page-subtitle" v-html="origin.summary"></div>
									</div>
                                </div>
                                <div class="mediabox">
                                    <picture>
                                        <source media="screen and (min-width: 64em)"
                                            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ originbackgroundImages[o_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ originbackgroundImages[o_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ originbackgroundImages[o_idx] +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ originbackgroundImages[o_idx] +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800'+ originbackgroundImages[o_idx] +' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960'+ originbackgroundImages[o_idx] +' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500'+ originbackgroundImages[o_idx] +' 1500w,'" 
                                        >
                                        <source media="screen and (min-width: 48em)"
                                            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ originbackgroundImages[o_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ originbackgroundImages[o_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ originbackgroundImages[o_idx] +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ originbackgroundImages[o_idx] +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800'+ originbackgroundImages[o_idx] +' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960'+ originbackgroundImages[o_idx] +' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500'+ originbackgroundImages[o_idx] +' 1500w,'" 
                                        >
                                        <source
                                            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ originbackgroundImages[o_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ originbackgroundImages[o_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ originbackgroundImages[o_idx] +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ originbackgroundImages[o_idx] +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800'+ originbackgroundImages[o_idx] +' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960'+ originbackgroundImages[o_idx] +' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500'+ originbackgroundImages[o_idx] +' 1500w,'" 
                                        >
                                        <img class="lazyload mediabox-img"
                                            :data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500'+ originbackgroundImages[o_idx] +' 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500'+ originbackgroundImages[p_idx] +' 2x'" 
                                            data-sizes="auto" />
                                    </picture>
                                </div>
                            </div>
                    </v-card>
                </v-container>
				<v-container id="text" fluid class="text-center pa-0 my-10">
					<div style="color:black;max-width: 500px !important; font-weight: bold;" class="text-uppercase app-title ma-auto py-5">{{$t('title2')}}</div>
					<img style="max-width:800px" class="lazyload" data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/dionysos_timelines.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/dionysos_timelines.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Environments/dionysos_timelines.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Environments/dionysos_timelines.png 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/Environments/dionysos_timelines.png 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/Environments/dionysos_timelines.png 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/Environments/dionysos_timelines.png 1500w">
				</v-container>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
    import { mdiChevronRight, mdiChevronLeft, mdiChevronDown, mdiPlus } from '@mdi/js'
    export default {
        name: 'informations',
        data() {
            return {
				svgPath1: mdiChevronRight,
				svgPath2: mdiChevronLeft,
				svgPath3: mdiChevronDown,
				svgPath4: mdiPlus,
                tab: "subscribe",
                backgroundImages: [
                    "/Environments/dionysos_suisse.jpg",
                    "/Environments/dionysos_grappes.PNG",
                    "/home_gCAPosI9qrtpP.jpg",
					"/Environments/darkbugattiblue.png",
                    "/Environments/Capture5.PNG",
					"/Environments/17458143_1482974415066944_8248030493854566515_n.jpg"
                ],
                originbackgroundImages: [
                    "/tech_mx5bGeVoG3pm.jpg",
                    "/Environments/dionysos_suisse.jpg",
                    "/Environments/dionysos_grappes.PNG",
                    "/home_gCAPosI9qrtpP.jpg",
					"/Environments/darkbugattiblue.png",
                    "/Environments/Capture5.PNG",
					"/Environments/17458143_1482974415066944_8248030493854566515_n.jpg"
                ],
                icon: [
                    "/Environments/dionysos_27b.png",
                    "/Environments/dionysos_25_2.png",
                    "/Environments/dionysos_2.7b.png",
					"/Environments/strong2.png",
					"/Environments/ecologic4.png",
					"/Environments/recyclable4.png"
                ],
                originicon: [
                    "/Logos/Origin.svg",
                    "/Environments/dionysos_27b.png",
                    "/Environments/dionysos_25_2.png",
                    "/Environments/dionysos_2.7b.png",
					"/Environments/strong2.png",
					"/Environments/ecologic4.png",
					"/Environments/recyclable4.png"
                ],
                grid: [
                    "div2 blueoverlay",
                    "div3",
                    "div4",
					"div5",
					"div6",
					"div7"
                ],
                origingrid: [
                    "div1 blackoverlay2 invgradientoverlay",
                    "div2 blueoverlay",
                    "div3",
                    "div4",
					"div5",
					"div6",
					"div7"
                ],
                products: this.$t('products'),
				origins: this.$t('origins'),
            }
        },
		beforeCreate () {
			this.$vuetify.theme.dark = true
		},
		computed: {
			tabs() {
					return [
						{ 
							href: "#dionysos",
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
							href: "#origin",
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
	"fr": {
		"conditions": {
			"menu": "Nos ateliers",
			"subtitle": "Version 1.0"
		},
		"mentions": {
			"menu": "Notre application Origin",
			"subtitle": "Version 1.0"
		},
		"origins": [
			{
				"subtitle": "",
				"summary": "",
				"title": "L'application qui revolutionne la transparence"
			},
			{
				"subtitle": "Le premier constat",
				"summary": "Milliards de litres de vin sont produits chaque année dans le monde",
				"title": ""
			},
			{
				"subtitle": "Le second constat",
				"summary": "<div>le bas score de transparence de tracabilité moyen des marques de mode en 2020 (fashionrevolution.org)</div>",
				"title": ""
			},
			{
				"subtitle": "La solution innovante",
				"summary": "Milliards de m2 de cuir de vin que l'on pourrait produire chaque année, rien qu'en valorisant ces «déchets» de production",
				"title": ""
			},
			{
				"subtitle": "",
				"summary": "<ul class='text-left text-white'><li><span >Notre cuir de vin a &eacute;t&eacute; longuement test&eacute;</span></li><li><span >M&ecirc;mes caract&eacute;ristiques m&eacute;caniques, esth&eacute;tiques et sensorielles qu'un cuir traditionnel</span></li><li><span >A contrario - ne demande que peu d'entretien</span></li></ul>",
				"title": ""
			},
			{
				"subtitle": "",
				"summary": "<ul class='text-left'><li><span >Sans souffrance animale</span></li><li><span >Faible impact environnemental</span></li><li><span >Mati&egrave;re premi&egrave;re renouvelable</span></li></ul>",
				"title": ""
			},
			{
				"subtitle": "",
				"summary": "<ul class='text-left text-white'><li><span >Nous r&eacute;cup&eacute;rons vos anciens produits en &eacute;change d'un bon de r&eacute;duction de 10% &agrave; valoir sur un prochain achat</span></li><li><span >Nous recyclerons la mati&egrave;re pour cr&eacute;er de nouveaux produits</span></li></ul>",
				"title": ""
			}
		],
		"productTitle": "Les objets en création",
		"products": [
			{
				"subtitle": "Le premier constat",
				"summary": "milliards de litres de vin sont produits chaque année dans le monde",
				"title": ""
			},
			{
				"subtitle": "Le second constat",
				"summary": "<div>des récoltes ne se retrouvent pas dans une bouteille (marc de raisin)</div>",
				"title": ""
			},
			{
				"subtitle": "La solution innovante",
				"summary": "milliards de m2 de cuir de vin que l'on pourrait produire chaque année, rien qu'en valorisant ces «déchets» de production",
				"title": ""
			},
			{
				"subtitle": "",
				"summary": "<ul class='text-left text-white'><li><span >Notre cuir de vin a &eacute;t&eacute; longuement test&eacute;</span></li><li><span >M&ecirc;mes caract&eacute;ristiques m&eacute;caniques, esth&eacute;tiques et sensorielles qu'un cuir traditionnel</span></li><li><span >A contrario - ne demande que peu d'entretien</span></li></ul>",
				"title": ""
			},
			{
				"subtitle": "",
				"summary": "<ul class='text-left'><li><span >Sans souffrance animale</span></li><li><span >Faible impact environnemental</span></li><li><span >Mati&egrave;re premi&egrave;re renouvelable</span></li></ul>",
				"title": ""
			},
			{
				"subtitle": "",
				"summary": "<ul class='text-left text-white'><li><span >Nous r&eacute;cup&eacute;rons vos anciens produits en &eacute;change d'un bon de r&eacute;duction de 10% &agrave; valoir sur un prochain achat</span></li><li><span >Nous recyclerons la mati&egrave;re pour cr&eacute;er de nouveaux produits</span></li></ul>",
				"title": ""
			}
		],
		"protection": {
			"menu": "Nos cuirs Dionysos",
			"subtitle": "Mis à jour le 04/01/2021"
		},
		"title": "Informations",
		"title2": "Des vendanges au cuir de vin"
	}
}
</i18n>

<style scoped lang="scss">
.grid-container {
  display: grid;
  padding: 1rem!important;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "div2 div2 div2 div3 div3 div3"
    "div4 div4 div4 div4 div4 div4"
    "div5 div5 div6 div6 div7 div7";
  @media (max-width: 48em) {
  grid-template-areas:
    "div2 div2 div2 div2 div2 div2"
    "div3 div3 div3 div3 div3 div3"
    "div4 div4 div4 div4 div4 div4"
	"div5 div5 div5 div5 div5 div5"
    "div6 div6 div6 div6 div6 div6"
    "div7 div7 div7 div7 div7 div7";
    grid-gap: 0.5rem;
	padding: 0!important;
  }
}
.card {
  height: 25rem!important;
  @media (min-width: 48em) {
    height: 25rem!important;
  }
}
.div1 { 
	grid-area: div1; 

	.icon {
		padding-bottom: 20px;
	}
}
.div2, .div4 { 
	grid-area: div2; 
	color: white;
	.text {
		margin: auto;
	}
}
.div5, .div6, .div7 { 
	.icon {
		width: 80%;
		margin-bottom: 20px;
	}
}
.div3 { grid-area: div3; }
.div4 { grid-area: div4; }
.div5 { grid-area: div5; }
.div6 { grid-area: div6; }
.div7 { grid-area: div7; }

</style>