<template>
  <div style="background:black">
    <div>
		<v-toolbar-bar class="menubar d-flex pa-0 filter-bar w-100">
			<Backbutton class="border-bottom-2"/>
			<div class="px-5 border-bottom-2 bg-theme d-none d-md-flex w-100">
				<div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
					{{$t('title')}}
				</div>
			</div>
			<v-spacer></v-spacer>
		</v-toolbar-bar>
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
		<div style="margin-top:120px;margin-bottom:60px" class="text-center app-title">La genese de l'idée : deux constats</div>
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
						<div style="z-index:2" class="background text-center position-absolute d-flex justify-center align-center h-100 w-100">
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
		<div style="margin-top:200px;margin-bottom:80px" class="text-center app-title">Nous ne nous y attendions pas... Et pourtant</div>
		<div class="position-relative" style="height:70vh;background:black">
			<div style="z-index:3;bottom:80px" class="position-absolute w-100 text-center">
				<img width="500px" class="icon lazyload pb-3" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/dionysos_2.7b.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/dionysos_2.7b.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Environments/dionysos_2.7b.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Environments/dionysos_2.7b.png 683w'">
				<div style="font-size:24px!important;max-width: 800px !important" class="app-title teradeli-medium lbbgradienttext ma-auto">milliards de m2 de cuir de vin que l'on pourrait produire chaque année, rien qu'en valorisant ces «déchets» de production. C'est plus que la production annuelle de cuir animal (environs 1,8 million) dont 80% sont traités chimiquements.</div>
			</div>
		</div>
		<v-container id="text" fluid class="text-center pa-0">
			<div style="margin-top:200px;margin-bottom:100px" class="text-center text-white app-title">{{$t('title2')}}</div>
			<img style="max-width:800px" class="lazyload d-none" data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/dionysos_timelines.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/dionysos_timelines.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Environments/dionysos_timelines.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Environments/dionysos_timelines.png 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/Environments/dionysos_timelines.png 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/Environments/dionysos_timelines.png 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/Environments/dionysos_timelines.png 1500w">
		</v-container>
		<v-container class="timeline-container">
			<v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
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
						<div class="mediabox">
							<picture>
								<img :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,r-max'+ images[i] + ' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-600,r-max'+ images[i] + ' 300w'" alt="timeline-icon" class="mediabox-img position-relative">
							</picture>
						</div>
					</template>
					<div slot="opposite" v-if="i===0">
						<div class="d-flex align-center">
							<img src="../assets/images/Arrowleftwhite.svg" class="d-none d-md-block" alt="fanel"
								width="26px">
							<span class="time pl-3 mb-0"
								style="color: #888!important;">{{$t('calendarSection.tag')}}</span>
						</div>
					</div>
					<v-card
							:color="'#151515'"
							dark
							class="pa-4"
					>

						<div class="time">{{item.tag}}</div>
						<h4 class="smalltitle">{{item.title}}</h4>
						<div class="item-details" v-html="item.subtitle">
						</div>
					</v-card>
				</v-timeline-item>
				<v-timeline-item
						color="lightbugattiblue"
						fill-dot
						small
				>
					<template v-slot:icon>
						<img :src="images[4]" alt="timeline-icon" width="16px">
					</template>
				</v-timeline-item>
			</v-timeline>
		</v-container>
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
                    "/Environments/dionysos_grappes.PNG"
                ],
                icon: [
                    "/Environments/dionysos_27b.png",
                    "/Environments/dionysos_25_2.png"
                ],
                grid: [
                    "div2 blueoverlay",
                    "div3"
                ],
                products: this.$t('products'),
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
                ]
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
			}
		],
		"protection": {
			"menu": "Nos cuirs Dionysos",
			"subtitle": "Mis à jour le 04/01/2021"
		},
		"title": "Dionysos",
		"title2": "Des vendanges au cuir de vin",
		"calendarSection": {
			"title": "Le calendrier avant le lancement de chaque objet",
			"subtitle": "Pour suivre le déroulement du projet. Il s’affinera au fil du temps. Inscrivez vous à la Newsletter et suivez nous sur Instagram et Facebook pour en être notifié.",
			"tag": "Nous en sommes ici",
			"steps": [{
				"tag": "Etape 1",
				"title": "Foulage",
				"subtitle": "La peau du raisin est percée pour en libérer le jus à l'aide d'une machine appelée le fouloir"
			}, {
				"tag": "Etape 2",
				"title": "Fermantation alcoolique",
				"subtitle": "Des levures transforment le sucre en alcool.<br>Le tanin dans la peau des grains lui donnent sa couleur rouge"
			}, {
				"tag": "Etape 3",
				"title": "Pressurage",
				"subtitle": "Le jus fermenté est extrait. Le marc qui reste dans la cuve est pressé donnant un jus plus dense et tannique"
			}, {
				"tag": "",
				"title": "",
				"subtitle": "<div class='text-right'><div><div>Partie solide</div><div>Le marc</div></div><div><div>Partie liquide</div><div>Le vin</div></div></div>"
			}, {
				"tag": "Etape 4",
				"title": "Recyclage du marc",
				"subtitle": "Le marc est séché. La bio-huile obtenue à partir des pépins est polymérisée"
			}, {
				"tag": "Etape 5",
				"title": "Fabrication du cuir",
				"subtitle": "La pâte obtenue est passée dans une presse imprimant le grain de cuir souhaité"
			}
		]
		}
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
	background: rgb(21,48,56);
	background: linear-gradient(90deg, rgba(21,48,56,1) 0%, rgba(114,47,48,1) 37%, rgba(114,47,55,1) 100%);
	border-radius: 20px !important; 
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

</style>