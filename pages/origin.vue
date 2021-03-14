<template>
  <div style="background:white">
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
				<img width="200px" class="icon lazyload pb-3" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Origin_black_1_.svg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Origin_black_1_.svg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Logos/Origin_black_1_.svg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Logos/Origin_black_1_.svg 683w'">
				<div style="max-width:900px;font-size:60px!important" class="app-title ma-auto teradeli-medium lbbwhitegradienttext">De la matière première à la livraison... Rien ne lui échappe.</div>
				<div style="max-width:900px;color:#a1a1a6" class="sub-title teradeli-medium mx-auto">"Parce que chacun de nos produits à une histoire, nous la racontons grâce à notre application. Cette histoire commence avec l'origine de nos produit, continue avec la transparence tout au long de leur fabrication et se termine chez vous. impact de nos produits. Il vous suffit de donner info sur aplication...Powered by blockchain and open data, our application gathers and shares key product information and journeys in a way that’s secure, trustworthy and accessible. Vous avez maintenant toutes les raisons d'être certain de votre impact sur l'environnement.</div>
			</div>
			<div class="mediabox wa-smart-picture wa-panoramic-picture square-ratio fullwhitegradientoverlay whiteoverlay2 h-100">
				<img width="100%" class="icon lazyload mediabox-img" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/home_gCAPosI9qrtpP.jpg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/home_gCAPosI9qrtpP.jpg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/home_gCAPosI9qrtpP.jpg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/home_gCAPosI9qrtpP.jpg 1500w'">
			</div>
		</div>
		<div style="margin-top:120px;margin-bottom:60px;color:black" class="text-center app-title">Une solution radicale. Face à une transparence quasi-nulle encore en 2020</div>
		<div class="position-relative" style="height:70vh">
			<div style="z-index:3;bottom:80px" class="position-absolute w-100 text-center">
				<img width="500px" class="icon lazyload pb-3" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/16__blue.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/16__blue.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Environments/16__blue.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Environments/16__blue.png 683w'">
				<div style="font-size:24px!important;max-width: 800px !important" class="app-title teradeli-medium lbbwhitegradienttext ma-auto">est le taux de tracabilité moyen des marques de mode en 2020 selon fashionrevolution.org</div>
			</div>
		</div>
		<div style="margin-top:200px;margin-bottom:80px;color:black" class="text-center app-title">Elle track et vérifie toute les étapes de la production. Sans exception.</div>
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
		<div style="margin-top:120px;margin-bottom:60px;color:black" class="text-center app-title">Une base de donnée publique, partagée, transparente et limpide</div>
			<div style="z-index:3;bottom:80px" class="w-100 text-center">
				<div style="font-size:24px!important;max-width: 800px !important" class="app-title teradeli-medium lbbwhitegradienttext ma-auto">Toutes les données sont stocké sur la blockchain Ethereum, disponible en ligne par tous et distribué sur un réseau mondial d'ordinateurs. Ensuite, les informations sont inscrites tout au long de la chaîne de production et chaque acteur s’engage personnellement, en signant les informations inscrites, sur leur fiabilité. Suivez les liens fournis sur notre application pour vérifier l'autenthicité des informations.</div>
			</div>
		<div style="margin-top:120px;margin-bottom:60px;color:black" class="text-center app-title">Une base de donnée infalsifiable et sécurisé. la sécurité du système, qui est assuré par le fait que la validation est effectuée par un ensemble d’utilisateurs différents, qui ne se connaissent pas. Cela permet de se prémunir du risque de malveillance ou de détournement, puisque les nœuds surveillent le système et se contrôlent mutuellement</div>
			<div style="z-index:3;bottom:80px" class="w-100 text-center">
				<div style="font-size:24px!important;max-width: 800px !important" class="app-title teradeli-medium lbbwhitegradienttext ma-auto">Les risques de fraude a posteriori sur les données sont supprimés puisque les données ne peuvent être modifiées. Elle est sécurisé par un réseau mondial d'ordinateur. A ce titre aucun ordinateur ne pourra faire face à ce réseau pour falsifier les données</div>
			</div>
		<div style="margin-top:120px;margin-bottom:60px;color:black" class="text-center app-title">Eternelle</div>
			<div style="z-index:3;bottom:80px" class="w-100 text-center">
				<div style="font-size:24px!important;max-width: 800px !important" class="app-title teradeli-medium lbbwhitegradienttext ma-auto">Une fois renseigné dans la blockchain, aucune modification n'est possible, par qui que ce soit.Tout ce qui y est écrit est impossible à effacer et indestructible.</div>
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
				"title": "Création d'un Smart Contract sur la Blockchain Ethereum",
				"subtitle": "Un contrat sous la forme d'un code informatique intélligent entre nous, fabriquants et fournisseurs qui scellera toutes nos informations. Chaque acteur s'engage légalement sur les données qu'il fournit. Il est distribué et stocké sur une base de données publique et disponible en ligne (la Blockchain Ethereum) et ne peux pas être modifiés. Chaqun de vos produits disposeront d'un QR code unique sur votre étiquette regroupant toutes ces infos"
			}, {
				"tag": "Etape 2",
				"title": "Les fournisseurs",
				"subtitle": "Les fournisseurs entrent leurs informations sur notre application (nom du produit, quantité vendue, date, documents officels de certifications et tests qualité...).<br>Notre application les géolocalise automatiquement 'fausse adresse'. <br>Ils scannent les matières grâce à un QR code et l'envoient aux fabriquants"
			}, {
				"tag": "Etape 3",
				"title": "Les fabriquants",
				"subtitle": "Les fabriquants entrent également leurs informations.<br> Après récéption de la marchandise, ils en vérifient l'authenticité ainsi que leur qualité et fabriquent vos produits.<br>Une étiquette QR code est cousue à l'intérieur afin que vous puissiez la scanner et découvrir l'histoire de votre article."
			}, {
				"tag": "Etape 4",
				"title": "Expédition du produit",
				"subtitle": "Le fabriquant expédie votre produit dans nos entrepots qui l'éxpédiera chez vous lors de votre commande."
			}, {
				"tag": "Etape 5",
				"title": "Compensation des émissions de CO2",
				"subtitle": "Pour compenser les émissions de CO2 liées à l'utilisation de cette technologie, la fabrication de votre produit et de son transport jusqu'a chez vous, nous plantons un arbre dans un de nos projet de reforestation. Cet arbre disposera d'un certificat d'autenticité qui sera déposé dans la Blockchain, disponible publiquement."
			}, {
				"tag": "Etape 6",
				"title": "Vous recevez votre produit",
				"subtitle": "A la récéption de votre produit, vous pourrez scanner le QR code sur son étiquette avec notre application ORIGIN. Vous y découvrirez son histoire, celle des fabriquants et fournisseurs ayant participé à sa fabrication, ainsi que tous les documents officiels le prouvant."
			}, {
				"tag": "Etape 7",
				"title": "Fin de vie du produit et recyclage",
				"subtitle": "Nous récupérons votre ancien produit pour le recycler complètement, en échange d'un bon de réduction. Nous tagons son QR code afin de récupérer son identité et nous renvoyons les matières à recycler. La boucle est bouclé."
			}, {
				"tag": "Etape ?",
				"title": "Votre intervention",
				"subtitle": "Dernière innovation : les utilisateurs peuvent, via un onglet spécifique, communiquer leurs remarques ou même signaler un problème."
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