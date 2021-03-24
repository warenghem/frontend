<template>
  <div>
	<v-toolbar dense class="menubar pa-0 w-100 elevation-0">
		<Backbutton class="border-bottom-2 h-100"/>
		<div class="px-5 border-bottom-2 bg-theme d-flex w-100 h-100">
			<img width="100px" class="icon lazyload pb-1" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Origin_black_1_.svg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Logos/Origin_black_1_.svg 512w'">
		</div>
		<v-spacer></v-spacer>
	</v-toolbar>
	<div class="mediabox wa-smart-picture square-ratio h-100 d-block d-md-none pb-5">
		<img width="100%" class="icon lazyload mediabox-img" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Environments/Techsolo3small.png 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/Environments/Techsolo3small.png 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/Environments/Techsolo3small.png 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/Environments/Techsolo3small.png 1500w'">
	</div>
	<div class="position-relative first">
		<div style="z-index:3;bottom:80px" class="firsttext w-100 text-center">
			<img width="200px" class="icon lazyload pb-3 d-none d-md-block ma-auto" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Origin_black_1_.svg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Origin_black_1_.svg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Logos/Origin_black_1_.svg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Logos/Origin_black_1_.svg 683w'">
			<div data-aos="fadeup" style="max-width:900px" class="page-title ma-auto teradeli-medium lbbgradienttext">{{$t('pagetitle')}}</div>
			<div data-aos="fadeup" data-aos-delay="300" style="max-width:900px;color:#888" class="page-subtitle teradeli-medium mx-auto" v-html="$t('pagesubtitle')"></div>
		</div>
		<div class="mediabox wa-smart-picture wa-panoramic-picture square-ratio h-100 d-none d-md-block">
			<img style="object-fit:contain" width="100%" class="icon lazyload mediabox-img" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Environments/Techsolo3.png 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/Environments/Techsolo3.png 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/Environments/Techsolo3.png 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/Environments/Techsolo3.png 1500w'">
		</div>
	</div>
	<div class="text-center page-title2 spacing" v-html="$t('title1')"></div>
	<v-container class="timeline-container bgcard rounded-xl">
		<v-timeline class="pt-0" align-top :dense="$vuetify.breakpoint.smAndDown">
			<v-timeline-item
					fill-dot
					v-for="(item,i) in $t('calendarSection.steps')"
					:key="'time_'+i"
					class="my-10"
					:class="classid[i]"
					large
			>
				<template v-slot:icon>
					<div data-aos="zoom-in" class="mediabox dot rounded-circle">
						<picture>
							<img :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,r-max'+ images[i] + ' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-600,r-max'+ images[i] + ' 300w'" alt="timeline-icon" class="mediabox-img position-relative">
						</picture>
					</div>
				</template>
				<v-card
						color="white"
						class="pa-4 rounded-xl text-left" data-aos="fadeup"
				>
					<v-card-subtitle class="pb-3">{{item.tag}}</v-card-subtitle>
					<h4 class="page-subtitle2 teradeli-medium lbbgradienttext pb-3">{{item.title}}</h4>
					<div class="item-details" v-html="item.subtitle">
					</div>
				</v-card>
			</v-timeline-item>
		</v-timeline>
	</v-container>
	<div class="text-center page-title2 spacing" v-html="$t('title2')"></div>
	<v-container fluid class="pa-0 pb-10">
		<v-row class="ma-0">
		<v-col 
			v-for="(origin,o_idx) in origins"
			:key="o_idx"
			height= "100%"
			cols="12" md="4"
		>
			<v-row>
				<v-col cols="12">
					<img data-aos="fade" data-aos-delay="300" style="max-width:500px" class="icon lazyload w-100 d-flex ma-auto" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ originicon[o_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ originicon[o_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ originicon[o_idx] +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ originicon[o_idx] +' 683w'">
				</v-col>
				<v-col data-aos="fadeup" data-aos-delay="300" cols="12" style="max-width:600px" class="page-subtitle2 text-center teradeli-medium lbbgradienttext ma-auto pvw" v-html="origin.summary"></v-col>
			</v-row>
		</v-col>
		</v-row>
	</v-container>
	<div style="max-width:1000px" class="text-center page-title2 spacing ma-auto" v-html="$t('title3')"></div>
	<div class="position-relative" style="height:70vh">
		<div data-aos="fade" style="z-index:3;bottom:80px" class="position-absolute w-100 text-center">
			<img data-aos="fade" data-aos-delay="300" style="width:500px; max-width:100%;z-index: 2;position: relative;" class="icon lazyload pb-3" :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/16__blue.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Environments/16__blue.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Environments/16__blue.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Environments/16__blue.png 683w'">
			<div data-aos="fade" data-aos-delay="300" style="font-size:24px!important;max-width: 800px !important" class="app-title teradeli-medium lbbgradienttext ma-auto">est le taux de tracabilité moyen des marques de mode en 2020 selon fashionrevolution.org</div>
		</div>
	</div>
  </div>
</template>

<script>
    export default {
        name: 'origin',
        data() {
            return {
                tab: "subscribe",
				origins: this.$t('origins'),
				originicon: [
					"/Environments/Narrative.png",
					"/Environments/translucid_" + this.$i18n.localeProperties.language + ".png",
					"/Environments/eternal_" + this.$i18n.localeProperties.language + ".png"
                ],
                images: [
                    "/Environments/blockchain_lock.jpeg",
                    "/Environments/supplier.jpeg",
                    "/Environments/AdobeStock_213093083-scaled.jpeg",
                    "/Environments/logo.154.jpg",
                    "/madagascar_river.jpg",
                    "/Environments/tech_deep.jpeg",
					"/Environments/recycle.jpeg",
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
	"en": {
		"calendarSection": {
			"steps": [
				{
					"subtitle": "This is a smart IT contract developed by Warenghem, containing and verifying information provided by manufacturers and suppliers. This safe follows us throughout the manufacturing process and legally binds each actor. This information is stored on a shared, public database available online and cannot be modified. Each of your products has a label with a bar code. You just need to scan it to find out the story of your item",
					"tag": "Step 1",
					"title": "Creation of an inviolable safe"
				},
				{
					"subtitle": "Suppliers enter their information on our application (product name, quantity sold, date, official certification and quality test documents, etc.).<br>Our application geolocates them automatically in order to avoid false addresses. <br>They scan the materials using a QR code and send it to the manufacturers",
					"tag": "2nd step",
					"title": "Entrance of our suppliers"
				},
				{
					"subtitle": "Manufacturers also enter their information.<br> After receiving the goods, they check their authenticity as well as their quality and manufacture your products.<br>A QR code tag is sewn inside so you can scan it and find out the story of your item.",
					"tag": "Step 3",
					"title": "Our manufacturers are strengthening the field"
				},
				{
					"subtitle": "The manufacturer ships your product to our warehouses, then it will be shipped to you. For our part, we audit all the information submitted.",
					"tag": "Step 4",
					"title": "We check everything with a fine tooth comb"
				},
				{
					"subtitle": "To compensate for using this technology, manufacturing and transporting your product, we are planting trees in one of our reforestation projects. <br>These trees will have a certificate of authenticity which will be deposited in the Blockchain.",
					"tag": "STEP 5",
					"title": "We offset CO2 emissions"
				},
				{
					"subtitle": "Upon receipt of your product, you can scan the QR code on its label using our ORIGIN application to discover its history.",
					"tag": "Step 6",
					"title": "You discover the story of your product"
				},
				{
					"subtitle": "We collect your old product for full recycling. <br>We scan his QR code to obtain the identity of his buyer in order to send him a discount voucher valid on a future purchase.",
					"tag": "Step 7",
					"title": "We come full circle"
				}
			]
		},
		"origins": [
			{
				"summary": "Its intuitive interface consists of a chronology of manufacturing steps and a map detailing their location. You will have access to a dedicated page for each manufacturer and supplier, bringing together their history, detailed certifications and address."
			},
			{
				"summary": "All data is stored on the Ethereum blockchain, which is available online to everyone. This information is recorded throughout the production chain and distributed over a global network of computers. <br>Each actor signs the information entered and makes a personal commitment to its reliability."
			},
			{
				"summary": "Once entered in the blockchain, no modification or deletion is possible, preventing the risk of a posteriori fraud on the data. It is secured by a worldwide network of computers. As such, no computer will be able to face this network to falsify the data."
			}
		],
		"pagesubtitle": "Because each of our products has a story, we have chosen to highlight it with an intuitive application. It lets you learn more about the journey and impact behind each item in a secure, reliable and accessible way.<br>We use technology as a force for good.",
		"pagetitle": "From raw material to delivery ... Nothing escapes him.",
		"products": [
			{
				"summary": "the low average traceability transparency score of fashion brands in 2020 (fashionrevolution.org)"
			},
			{
				"summary": "<div>of the crops are not found in a bottle (grape marc)</div>"
			}
		],
		"title1": "<div data-aos='fadeup' style='color: #acacac;'>She checks all stages of production.</div><div data-aos='fadeup' data-aos-delay='300'>Without exception. </ Div",
		"title2": "<div style='color: #acacac;' data-aos='fadeup'>A safe</div><div data-aos='fadeup' data-aos-delay='300'>Inviolable</div>",
		"title3": "<div style='color: #acacac;' data-aos='fadeup'>An innovative solution</div><div data-aos='fadeup' data-aos-delay='300'>Faced with improved transparency still in 2021</div>"
	},
	"fr": {
		"calendarSection": {
			"steps": [
				{
					"subtitle": "Il s’agit d’un contrat informatique intelligent développé par Warenghem, contenant et vérifiant des informations renseignées par les fabriquants et fournisseurs. Ce coffre fort nous suit tout au long de la fabrication et engage chaque acteur légalement. Ces informationss sont stockées sur une base de données partagée, publique et disponible en ligne et ne peuvent pas être modifiées. Chacun de vos produits dispose d’une étiquette avec un code barre. Il vous suffit de le scanner afin de découvrir l’histoire de votre article",
					"tag": "Etape 1",
					"title": "Création d’un coffre fort inviolable"
				},
				{
					"subtitle": "Les fournisseurs entrent leurs informations sur notre application (nom du produit, quantité vendue, date, documents officels de certifications et tests qualité...).<br>Notre application les géolocalise automatiquement afin d'éviter les fausses adresses. <br>Ils scannent les matières grâce à un QR code et l'envoient aux fabriquants",
					"tag": "Etape 2",
					"title": "Entrée en piste de nos fournisseurs"
				},
				{
					"subtitle": "Les fabriquants entrent également leurs informations.<br> Après réception de la marchandise, ils en vérifient l'authenticité ainsi que leur qualité et fabriquent vos produits.<br>Une étiquette QR code est cousue à l'intérieur afin que vous puissiez la scanner et découvrir l'histoire de votre article.",
					"tag": "Etape 3",
					"title": "Nos fabriquants renforcent le terrain"
				},
				{
					"subtitle": "Le fabriquant expédie votre produit dans nos entrepôts, puis sera acheminé chez vous. De notre côté, nous auditons toutes les informations déposées.",
					"tag": "Etape 4",
					"title": "Nous vérifions tout au peigne fin"
				},
				{
					"subtitle": "Pour compenser l'utilisation de cette technologie, la fabrication et le transport de votre produit, nous plantons des arbres dans un de nos projets de reforestation. <br>Ces arbres disposeront d'un certificat d'authenticité qui sera déposé dans la Blockchain.",
					"tag": "Etape 5",
					"title": "Nous compensons les émissions de CO2"
				},
				{
					"subtitle": "A la récéption de votre produit, vous pourrez scanner le QR code sur son étiquette grâce à notre application ORIGIN afin de découvrir son histoire.",
					"tag": "Etape 6",
					"title": "Vous découvrez l'histoire de votre produit"
				},
				{
					"subtitle": "Nous récupérons votre ancien produit pour le recycler complètement. <br>Nous scannons son QR code pour obtenir l'identité de son acheteur afin de lui envoyer un bon de réduction valable sur un prochain achat.",
					"tag": "Etape 7",
					"title": "Nous bouclons la boucle"
				}
			]
		},
		"origins": [
			{
				"summary": "Son interface intuitive se compose d'une chronologie des étapes de fabrication et d'une carte détaillant leur localisation. Vous aurez accès à une page dédiée pour chaque fabriquant et fournisseur regroupant son histoire, ses certifications détaillées et son adresse."
			},
			{
				"summary": "Toutes les données sont stockées sur la blockchain Ethereum, disponible en ligne par tous. Ces informations sont inscrites tout au long de la chaîne de production et distribuées sur un réseau mondial d'ordinateurs. <br>Chaque acteur signe les informations inscrites et s’engage personnellement sur leur fiabilité."
			},
			{
				"summary": "Une fois renseignée dans la blockchain aucune modification ni suppression n'est possible, empêchant les risques de fraude a posteriori sur les données. Elle est sécurisée par un réseau mondial d'ordinateur. A ce titre aucun ordinateur ne pourra faire face à ce réseau pour falsifier les données."
			}
		],
		"pagesubtitle": "Parce que chacun de nos produits a une histoire, nous avons choisi de la mettre en valeur avec une application intuitive. Elle vous permet d'en savoir plus sur le parcours et l'impact derrière chaque article d'une manière sécurisée, fiable et accessible.<br>Nous utilisons la technologie comme une force pour le bien.",
		"pagetitle": "De la matière première à la livraison... Rien ne lui échappe.",
		"products": [
			{
				"summary": "le bas score de transparence de tracabilité moyen des marques de mode en 2020 (fashionrevolution.org)"
			},
			{
				"summary": "<div>des récoltes ne se retrouvent pas dans une bouteille (marc de raisin)</div>"
			}
		],
		"title1": "<div data-aos='fadeup' style='color: #acacac;'>Elle vérifie toutes les étapes de la production.</div><div data-aos='fadeup' data-aos-delay='300'>Sans exception.</div",
		"title2": "<div style='color: #acacac;' data-aos='fadeup'>Un coffre fort</div><div data-aos='fadeup' data-aos-delay='300'>Inviolable</div>",
		"title3": "<div style='color: #acacac;' data-aos='fadeup'>Une solution innovante</div><div data-aos='fadeup' data-aos-delay='300'>Face à une transparence perfectible encore en 2021</div>"
	}
}
</i18n>

<style scoped lang="scss">

	.first {
	@media (min-width: 960px) {
		height: 90vh;
	}
	.firsttext {
	@media (min-width: 960px) {
		position: absolute
	}
	}
	}
	.card {
	height: 25rem!important;
	@media (min-width: 960px) {
		height: 40rem!important;
	}
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
	@media (min-width: 960px) {
	/* Move the dot css to .dot*/
		::v-deep .v-timeline-item__dot{
			height: unset!important;
			width: unset!important;
		}
		.dot {
			height: 152px!important;
			width: 152px!important;
		}
	/* END Move the dot css to .dot*/
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
	/* Move the dot css to .dot*/
	.dot {
		box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
		border: 2px solid var(--v-lightbugattiblue-base);
	}
	::v-deep .v-timeline-item__dot {
		box-shadow: none!important;
	}
	::v-deep .v-timeline-item__inner-dot.primary {
		background-color: unset!important;
	}
	::v-deep .v-timeline-item__inner-dot {
		border: none!important;
	}
	::v-deep .v-timeline-item__dot {
		background: none!important;
	}
	/* END Move the dot css to .dot*/
	::v-deep .theme--dark.v-sheet, .theme--dark .appBar {
		border-color: rgb(21, 21, 21) !important;
	}
	::v-deep .v-timeline:before {
		width: 5px!important;
		border-radius: 5px!important;
	}
	::v-deep .v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before {
		left: calc(50% - 5px)!important;
	}
	::v-deep .theme--light.v-timeline .v-timeline-item .v-card::before {
		border-right-color: white!important;
	}
	::v-deep .v-timeline--align-top .v-timeline-item__body > .v-card:before {
		top: calc(0% + 30px + 2px)!important;
	}
	::v-deep .v-timeline--align-top .v-timeline-item__body > .v-card:after {
		top: calc(0% + 30px)!important;
	}

</style>