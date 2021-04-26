<template>
  <div style="background:black" class="pb-10">
	<v-toolbar dense dark class="menubar pa-0 w-100">
		<Backbutton class="border-bottom-2 h-100"/>
		<div class="px-5 border-bottom-2 bg-theme d-flex w-100 h-100">
			<img width="110px" class="icon lazyload pb-1" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Dionysos.svg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Logos/Dionysos.svg 512w'">
		</div>
		<v-spacer></v-spacer>
	</v-toolbar>
	<div class="position-relative" style="height:90vh;background:black">
		<div style="z-index:3;bottom:80px" class="position-absolute w-100 text-center pvw">
			<img width="200px" class="icon lazyload pb-3 d-none d-md-block ma-auto" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Dionysos.svg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Dionysos.svg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Logos/Dionysos.svg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Logos/Dionysos.svg 683w'">
			<div data-aos="fadeup" class="page-title teradeli-medium lbbgradienttext">{{$t('pagetitle')}}</div>
			<div data-aos="fadeup" data-aos-delay="300" style="max-width:900px;color:#a1a1a6" class="page-subtitle teradeli-medium mx-auto">{{$t('pagesubtitle')}}</div>
		</div>
		<div class="mediabox wa-smart-picture square-ratio wa-panoramic-picture fullgradientoverlay  h-100">
			<img width="100%" class="icon lazyload mediabox-img" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Environments/dionysos.png 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/Environments/dionysos.png 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/Environments/dionysos.png 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/Environments/dionysos.png 1500w'">
		</div>
	</div>
	<div class="text-center text-white page-title2 spacing" v-html="$t('title1')"></div>
	<v-container fluid class="grid-container pa-0">
		<v-card 
			v-for="(product,p_idx) in products"
			:key="p_idx"
			height= "100%"
			lazy
			class="bgcard card rounded-xl mx-2 mx-md-0"
			:class="grid[p_idx]"
			data-aos="fadeup" data-aos-delay="300"
		>
				<div class="h-100 img-fluid theme--light skeletton w-100 d-flex justify-center align-center">
					<div :style="grid2[p_idx]" style="z-index:2" class="background text-center position-absolute d-flex justify-center align-center h-100 w-100">
						<img width="200" class="icon lazyload" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ icon[p_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ icon[p_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ icon[p_idx] +' 512w'">
					</div>
					<div
						style="z-index:2;max-width:600px;margin-top: 250px!important" 
						class="text-center position-absolute d-flex justify-center align-center h-100 w-100 text pvw d-block ma-auto page-subtitle2 teradeli-medium text-white"
						v-html="product.summary"
					>
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
	<v-container fluid class="position-relative pa-0 spacing">
		<div style="z-index:2" class="text-center text-white page-title2 position-relative" v-html="$t('title2')"></div>
		<div class="position-relative mediabox" style="background:black">
			<div style="z-index:3;min-height: 70vh;" class="position-relative w-100 text-center specialgradientoverlay d-flex align-center justify-center pa-5">
				<img data-aos="fade" data-aos-delay="300" style="width:500px; max-width:100%;z-index: 2;position: relative;" class="icon lazyload pb-3" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/dionysos_2.7b.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/dionysos_2.7b.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Environments/dionysos_2.7b.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Environments/dionysos_2.7b.png 683w'">
				<img width="100%" class="icon lazyload mediabox-img" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Environments/bottle_black.jpeg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/Environments/bottle_black.jpeg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/Environments/bottle_black.jpeg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/Environments/bottle_black.jpeg 1500w'">
			</div>
			<div data-aos="fade" style="max-width: 1000px !important" class="page-subtitle2 text-center teradeli-medium lbbgradienttext ma-auto pvw">{{$t('subtitle2')}}</div>
		</div>
	</v-container>
	<v-container id="text" fluid class="text-center pa-1">
		<div class="text-center text-white page-title2 spacing" v-html="$t('title3')"></div>
		<img data-aos="fadeup" data-aos-delay="300" style="max-width:800px;background: #f6f5f3;" class="lazyload rounded-xl w-100" data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/dionysos_timelines.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/dionysos_timelines.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Environments/dionysos_timelines.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Environments/dionysos_timelines.png 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/Environments/dionysos_timelines.png 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/Environments/dionysos_timelines.png 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/Environments/dionysos_timelines.png 1500w">
	</v-container>
	<!--<v-container fluid class="timeline-container">
		<v-timeline class="pt-0" align-top :dense="$vuetify.breakpoint.smAndDown">
			<v-timeline-item
					color="lightbugattiblue"
					fill-dot
					v-for="(item,i) in $t('calendarSection.steps')"
					:key="'time_'+i"
					small
					class="my-10"
					:class="classid[i]"
			>
				<template v-slot:icon>
					<div data-aos="zoom-in" class="mediabox">
						<picture>
							<img :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,r-max'+ images[i] + ' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-600,r-max'+ images[i] + ' 300w'" alt="timeline-icon" class="mediabox-img position-relative">
						</picture>
					</div>
				</template>
				<v-card
						:color="'#151515'"
						dark
						class="pa-4"
						data-aos="fade-left"
				>
					<div class="time">{{item.tag}}</div>
					<h4 class="smalltitle">{{item.title}}</h4>
					<div class="item-details" v-html="item.subtitle">
					</div>
				</v-card>
			</v-timeline-item>
		</v-timeline>
	</v-container>-->
	<!--<v-container fluid class="grid-container2 pa-0">
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
								class="text-center text-uppercase text-white page-title d-block" style="max-width:500px!important;font-weight: bold;"
								>
								{{origin.title}}
							</div>
							<div style="max-width:600px;margin-top: -20px;" class="text-center page-subtitle" v-html="origin.summary"></div>
						</div>
					</div>
				</div>
		</v-card>
	</v-container>-->
	<div class="text-center text-white page-title2 spacing" v-html="$t('title4')"></div>
	<v-container fluid class="pa-0">
		<v-row class="ma-0">
		<v-col 
			v-for="(origin,o_idx) in origins"
			:key="o_idx"
			height= "100%"
			cols="12" md="4"
		>
			<v-row>
				<v-col cols="12">
					<img data-aos="fade" style="max-width:500px" class="icon lazyload w-100 d-flex ma-auto" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ originicon[o_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ originicon[o_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ originicon[o_idx] +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ originicon[o_idx] +' 683w'">
				</v-col>
				<v-col data-aos="fadeup" cols="12" style="max-width:600px" class="page-subtitle2 text-center teradeli-medium lbbgradienttext ma-auto pvw" v-html="origin.summary"></v-col>
			</v-row>
		</v-col>
		</v-row>
	</v-container>
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
                    "/Environments/wine.jpeg"
                ],
                icon: [
                    "/Environments/dionysos_27b.png",
                    "/Environments/25_.png"
                ],
                originicon: [
					"/Environments/strong_" + this.$i18n.localeProperties.language + ".png",
					"/Environments/ecologic_" + this.$i18n.localeProperties.language + ".png",
					"/Environments/recyclable4.png"
                ],
                grid: [
                    "div2 blueoverlay",
                    "div3 "
                ],
                grid2: [
                    "div2 blueoverlay",
                    "background: radial-gradient(circle, rgba(2,0,36,0) 0%, rgba(9,9,121,0) 50%, rgba(0,0,0,1) 100%);"
                ],
                products: this.$t('products'),
				origins: this.$t('origins'),
                images: [
                    "/Materials/Explications/dionysos_step1.jpg",
                    "/Materials/Explications/dionysos_step2.jpg",
                    "/Materials/Explications/dionysos_step3.jpg",
                    "/transparent.png",
                    "/Materials/Explications/dionysos_step4.jpg",
                    "/Materials/Explications/dionysos_step5.jpg",
                ],
                classid: [
                    "dot1",
                    "dot2",
                    "dot3",
                    "dot4",
                    "dot5",
                    "dot6",
                ],
                origingrid: [
                    "div1",
                    "div2 ",
                    "div3",
                ],
            }
        },
		/*mounted() {
			this.$vuetify.theme.dark = true
		},*/
		head() {
          return {
              bodyAttrs: {
                  class: 'theme--dark'
              }
          }
      },
        head() {
          return {
			bodyAttrs: {
				class: 'theme--dark'
			},
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
		"calendarSection": {
			"subtitle": "To follow the progress of the project. It will refine over time. Subscribe to the Newsletter and follow us on Instagram and Facebook to be notified.",
			"tag": "We are here",
			"title": "The schedule before the launch of each object"
		},
		"description": "Discover our latest innovation: our solid, vegan, perfect grain leathers. Wine appeared to us as the absolute figure of French elegance.",
		"origins": [
			{
				"summary": "<p> Our wine leather has been extensively tested </p> <p> Same mechanical, aesthetic and sensory characteristics as traditional leather </p> <p> Conversely - requires little maintenance </p>"
			},
			{
				"summary": "<p>Without animal suffering</p><p >Low environmental impact</p><p >Renewable raw material&egrave;&egrave;re</p>"
			},
			{
				"summary": "<p> We will collect your old products in exchange for a 10% discount voucher. worth on a future purchase </p> <p> We will recycle the material to create new products </p>"
			}
		],
		"pagesubtitle": "Make plants a noble and ubiquitous element in your life. This is the mission that we set ourselves at the launch of this project. Wine has emerged as the absolute figure of French elegance. Here is the story of Dionysus' birth in numbers and letters.",
		"pagetitle": "The ennobled plant.",
		"products": [
			{
				"summary": "billion liters of wine are produced each year in the world"
			},
			{
				"summary": "<div>of the crops are not found in a bottle (grape marc)</div>"
			}
		],
		"subtitle2": "billion m2 of wine leather that could be produced each year, just by recovering this production “waste”. This is more than the annual production of animal leather (around 1.8 million), 80% of which is chemically treated.",
		"title": "Our vegan Dionysos wine leathers",
		"title1": "<div data-aos='fadeup'>The genesis of the idea</div><div data-aos='fadeup' data-aos-delay='300'>Two observations</div>",
		"title2": "<div data-aos='fadeup'>We didn't expect it ...</div><div data-aos='fadeup' data-aos-delay='300'>And yet</div>",
		"title3": "<div data-aos='fadeup'>Harvests</div><div data-aos='fadeup' data-aos-delay='300'>With wine leather</div>",
		"title4": "<div data-aos='fadeup'>And the icing on the cake </div>"
	},
	"fr": {
		"calendarSection": {
			"subtitle": "Pour suivre le déroulement du projet. Il s’affinera au fil du temps. Inscrivez vous à la Newsletter et suivez nous sur Instagram et Facebook pour en être notifié.",
			"tag": "Nous en sommes ici",
			"title": "Le calendrier avant le lancement de chaque objet"
		},
		"description": "Découvrez notre dernière innovation : nos cuirs solides, vegan, au grain parfait. Le vin nous est apparu comme la figure absolue de l'élégance à la Francaise.",
		"origins": [
			{
				"summary": "<p>Notre cuir de vin a &eacute;t&eacute; longuement test&eacute;</p><p >M&ecirc;mes caract&eacute;ristiques m&eacute;caniques, esth&eacute;tiques et sensorielles qu'un cuir traditionnel</p><p >A contrario - ne demande que peu d'entretien</p>"
			},
			{
				"summary": "<p>Sans souffrance animale</p><p >Faible impact environnemental</p><p >Mati&egrave;re premi&egrave;re renouvelable</p>"
			},
			{
				"summary": "<p>Nous r&eacute;cup&eacute;rons vos anciens produits en &eacute;change d'un bon de r&eacute;duction de 10% &agrave; valoir sur un prochain achat</p><p >Nous recyclerons la mati&egrave;re pour cr&eacute;er de nouveaux produits</p>"
			}
		],
		"pagesubtitle": "Faites du végétal un élément noble et omniprésent dans votre vie. Tel est la mission que nous nous sommes fixés au lancement de ce projet. Le vin est apparu comme la figure absolue de l'élégance à la Francaise. Voici l'histoire de la naissance de Dionysos en chiffres et en lettres.",
		"pagetitle": "Le végétal anobli.",
		"products": [
			{
				"summary": "milliards de litres de vin sont produits chaque année dans le monde"
			},
			{
				"summary": "<div>des récoltes ne se retrouvent pas dans une bouteille (marc de raisin)</div>"
			}
		],
		"subtitle2": "milliards de m2 de cuir de vin que l'on pourrait produire chaque année, rien qu'en valorisant ces «déchets» de production. C'est plus que la production annuelle de cuir animal (environ 1,8 million) dont 80% sont traités chimiquements.",
		"title": "Dionysos : Nos cuirs végétaux de vin",
		"title1": "<div data-aos='fadeup'>La genese de l'idée</div><div data-aos='fadeup' data-aos-delay='300'>Deux constats</div>",
		"title2": "<div data-aos='fadeup'>Nous ne nous y attendions pas...</div><div data-aos='fadeup' data-aos-delay='300'>Et pourtant</div>",
		"title3": "<div data-aos='fadeup'>Des vendanges</div><div data-aos='fadeup' data-aos-delay='300'>Au cuir de vin</div>",
		"title4": "<div data-aos='fadeup'>Et la cerise sur le gâteau</div>"
	}
}
</i18n>

<style scoped lang="scss">
.grid-container {
  display: grid;
  padding: 1rem!important;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    "div2 div2 div2 div3 div3 div3";
  @media (max-width: 48em) {
  grid-template-areas:
    "div2 div2 div2 div2 div2 div2"
    "div3 div3 div3 div3 div3 div3"
	"div5 div5 div5 div5 div5 div5";
    grid-gap: 0.5rem;
	padding: 0!important;
  }
}
.grid-container2 {
  display: grid;
  padding: 1rem!important;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "div1 div1 div1 div2 div2 div2 div3 div3 div3";
  @media (max-width: 48em) {
  	grid-template-areas:
		"div1 div1 div1 div1 div1 div1"
		"div2 div2 div2 div2 div2 div2"
		"div3 div3 div3 div3 div3 div3";
    grid-gap: 0.5rem;
	padding: 0!important;
  }
}
.card {
  height: 25rem!important;
  @media (min-width: 48em) {
    height: 40rem!important;
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
.blueoverlay::before {
border-radius: 20px !important; }

.div3 .background { 
	border-radius: 20px !important; 
 }
 .div3 .icon { 
	width: 280px !important; 
 }

     .calender {
        border-top: solid 1px rgba(255, 255, 255, 0.5);
        background: #1a1a1a;
        background: radial-gradient(circle at 50% 45%, #292929 0%, #0a0a0a 100%);
        color: #fff;
        padding-bottom: 90px;

        .subtitle {
            font-size: 13px;
            padding-left: 20px;
            max-width: 400px;
            line-height: 1rem !important;
        }

    }

    .timeline-container {
        position: relative;
        max-width: 1260px;
        margin: 0 auto;
        padding-bottom: 30px;
    }

    .timeline-item {
        position: relative;
        margin-bottom: 130px;
    }

    .timeline-content {
        border-radius: 15px;
    }

    .time {
        font-weight: 700;
        margin-bottom: 5px;
        color: #0081a7;
        font-size: 16px;
    }

    .smalltitle {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 18px;
        color: #fff;
        font-family: 'teradeli-medium', sans-serif;
        line-height: 1rem !important;
        font-weight: 100;
    }

    .item-details {
        margin-bottom: 15px;
        color: #86868b;
        text-align: left;
        font-size: 13px;
        line-height: 1.47059;
        font-weight: 900;
        letter-spacing: -.022em;
        font-family: 'teradeli-light', sans-serif;
    }

    .v-timeline::before {
        background: #0081a7 !important;
    }
	::v-deep .v-timeline-item__inner-dot {
		border: 2px solid white;
	}
@media (min-width: 48em) {
	::v-deep .dot1 .v-timeline-item__dot, ::v-deep .dot1 .v-timeline-item__dot, ::v-deep .dot2 .v-timeline-item__dot, ::v-deep .dot3 .v-timeline-item__dot, ::v-deep .dot5 .v-timeline-item__dot, ::v-deep .dot6 .v-timeline-item__dot {
		height: 152px!important;
		width: 152px!important;
	}
	::v-deep .v-timeline-item__divider {
		min-width: 152px!important;
	}
	::v-deep .v-timeline-item__body {
		max-width: calc(50% - 75px)!important;
	}
	::v-deep .v-timeline-item__body {
		padding-right: 30px!important;
		padding-left: 30px!important;
	}
}
::v-deep .dot4 .v-card {
    background-color: unset!important;
	&::after {
		display: none;
	}
}
::v-deep .theme--dark.v-sheet, .theme--dark .appBar {
    border-color: rgb(21, 21, 21) !important;
}
.specialgradientoverlay::after {
    background: linear-gradient(
180deg
, #000000 0%, transparent 20%);
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    opacity: 1 !important;
}
</style>