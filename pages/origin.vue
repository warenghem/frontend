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
		<div class="position-relative" style="height:90vh">
			<div style="z-index:3;bottom:80px" class="position-absolute w-100 text-center">
				<img width="200px" class="icon lazyload pb-3" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Origin.svg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Origin.svg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Logos/Origin.svg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Logos/Origin.svg 683w'">
				<div style="max-width:900px;font-size:60px!important" class="app-title ma-auto teradeli-medium lbbgradienttext">De la matière première à la livraison... Rien ne lui échappe.</div>
				<div style="max-width:900px;color:#a1a1a6" class="sub-title teradeli-medium mx-auto">Par ce que chacun de nos produits a une histoire, nous avons choisi de la mettre en valeur avec une application intuitive.<br>Propulsée par la blockchain publique Ethereum, notre application rassemble et partage les informations clés sur nos produits d'une manière sécurisée, fiable et accessible.</div>
			</div>
			<div class="mediabox wa-smart-picture wa-panoramic-picture square-ratio fullgradientoverlay whiteoverlay2 h-100">
				<img width="100%" class="icon lazyload mediabox-img" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/home_gCAPosI9qrtpP.jpg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/home_gCAPosI9qrtpP.jpg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/home_gCAPosI9qrtpP.jpg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/home_gCAPosI9qrtpP.jpg 1500w'">
			</div>
		</div>
		<div style="margin-top:200px;margin-bottom:80px;color:white" class="text-center app-title">Elle track et vérifie toute les étapes de la production. Sans exception.</div>
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
			</v-timeline>
		</v-container>
		<div style="margin-top:120px;margin-bottom:60px;color:white" class="text-center app-title">Une application narative</div>
			<div style="z-index:3;bottom:80px" class="w-100 text-center">
				<div style="font-size:24px!important;max-width: 800px !important" class="app-title teradeli-medium lbbgradienttext ma-auto">Elle vous racontera l'histoire de vos produits. Les .</div>
			</div>
		<div style="margin-top:120px;margin-bottom:60px;color:white" class="text-center app-title">Une base de donnée publique, partagée et limpide</div>
			<div style="z-index:3;bottom:80px" class="w-100 text-center">
				<div style="font-size:24px!important;max-width: 800px !important" class="app-title teradeli-medium lbbgradienttext ma-auto">Toutes les données sont stockées sur la blockchain Ethereum, disponible en ligne par tous. Ces informations sont inscrites tout au long de la chaîne de production et distribuées sur un réseau mondial d'ordinateurs. <br>Chaque acteur signe les informations inscrites et s’engage personnellement sur leur fiabilité.</div>
			</div>
		<div style="margin-top:120px;margin-bottom:60px;color:white" class="text-center app-title">Une base de donnée infalsifiable et sécurisée.</div>
			<div style="z-index:3;bottom:80px" class="w-100 text-center">
				<div style="font-size:24px!important;max-width: 800px !important" class="app-title teradeli-medium lbbgradienttext ma-auto">Les risques de fraude a posteriori sur les données sont supprimés puisque les données ne peuvent être modifiées. Elle est sécurisé par un réseau mondial d'ordinateur. A ce titre aucun ordinateur ne pourra faire face à ce réseau pour falsifier les données.  la sécurité du système, qui est assuré par le fait que la validation est effectuée par un ensemble d’utilisateurs différents, qui ne se connaissent pas. Cela permet de se prémunir du risque de malveillance ou de détournement, puisque les nœuds surveillent le système et se contrôlent mutuellement</div>
			</div>
		<div style="margin-top:120px;margin-bottom:60px;color:white" class="text-center app-title">Eternelle</div>
			<div style="z-index:3;bottom:80px" class="w-100 text-center">
				<div style="font-size:24px!important;max-width: 800px !important" class="app-title teradeli-medium lbbgradienttext ma-auto">Une fois renseignée dans la blockchain, aucune modification n'est possible. Tout ce qui y est écrit est indestructible et non effaçable.</div>
			</div>
		<div style="margin-top:120px;margin-bottom:60px;color:white" class="text-center app-title">Une solution radicale. Face à une transparence quasi-nulle encore en 2020</div>
		<div class="position-relative" style="height:70vh">
			<div style="z-index:3;bottom:80px" class="position-absolute w-100 text-center">
				<img width="500px" class="icon lazyload pb-3" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/16__blue.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/16__blue.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Environments/16__blue.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Environments/16__blue.png 683w'">
				<div style="font-size:24px!important;max-width: 800px !important" class="app-title teradeli-medium lbbgradienttext ma-auto">est le taux de tracabilité moyen des marques de mode en 2020 selon fashionrevolution.org</div>
			</div>
		</div>
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
				"summary": "le bas score de transparence de tracabilité moyen des marques de mode en 2020 (fashionrevolution.org)",
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
		"title": "Origin",
		"title2": "Des vendanges au cuir de vin",
		"calendarSection": {
			"steps": [{
				"tag": "Etape 1",
				"title": "Création d’un coffre fort inviolable",
				"subtitle": " Il s’agit d’un contrat informatique intelligent développé par W, contenant et vérifiant des infos renseignées par les fab et fournisseurs. Ce coffre fort nous suit tout au long de la fabrication du produit et engage chaque acteur légalement. Ces infos sont stockées sur une base de données partagée, publique et disponible en ligne (BE) et ne peuvent pas être modifiées. Chacun de vos produits dispose d’une étiquette avec un code barre. Il vous suffit de le scanner afin de découvrir l’histoire de votre article"
			}, {
				"tag": "Etape 2",
				"title": "Entrée en piste de nos fournisseurs",
				"subtitle": "Les fournisseurs entrent leurs informations sur notre application (nom du produit, quantité vendue, date, documents officels de certifications et tests qualité...).<br>Notre application les géolocalise automatiquement 'fausse adresse'. <br>Ils scannent les matières grâce à un QR code et l'envoient aux fabriquants"
			}, {
				"tag": "Etape 3",
				"title": "Nos fabriquants renforcent le terrain",
				"subtitle": "Les fabriquants entrent également leurs informations.<br> Après réception de la marchandise, ils en vérifient l'authenticité ainsi que leur qualité et fabriquent vos produits.<br>Une étiquette QR code est cousue à l'intérieur afin que vous puissiez la scanner et découvrir l'histoire de votre article."
			}, {
				"tag": "Etape 4",
				"title": "Nous vérifions tout au peigne fin",
				"subtitle": "Le fabriquant expédie votre produit dans nos entrepôts, puis sera acheminé chez vous. De notre côté, nous auditons toutes les informations déposés."
			}, {
				"tag": "Etape 5",
				"title": "Compensation des émissions de CO2",
				"subtitle": "Pour compenser l'utilisation de cette technologie, la fabrication et le transport de votre produit, nous plantons des arbres dans un de nos projets de reforestation. <br>Ces arbres disposeront d'un certificat d'authenticité qui sera déposé dans la Blockchain."
			}, {
				"tag": "Etape 6",
				"title": "Vous découvrez l'histoire de votre produit",
				"subtitle": "A la récéption de votre produit, vous pourrez scanner le QR code sur son étiquette grâce à notre application ORIGIN afin de découvrir son histoire."
			}, {
				"tag": "Etape 7",
				"title": "Nous bouclons la boucle",
				"subtitle": "Nous récupérons votre ancien produit pour le recycler complètement. <br>Nous scannons son QR code pour récupérer l'identité de son acheteur afin de lui envoyer un bon de réduction valable sur un prochain achat."
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