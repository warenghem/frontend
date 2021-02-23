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
		<v-tabs
			v-model="tab"
			right
			center-active
			show-arrows
			:prev-icon="svgPath2"
			:next-icon="svgPath1"
			class="border-bottom-2 d-none d-md-block w-100"
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
	<v-row class="pa-0 ma-0">
		<v-col cols="12" md="8" class="bgcard pvw">
			<div class="d-none d-md-block">	
				<v-tabs-items v-model="tab">
					<v-tab-item
					:key="1" value="questions"
					>
					<div>
						<template>
							<v-card class="bgcard">
								<div class="page-title teradeli-medium pb-10">
									{{$t('questions.subtitle')}}
								</div>
								<v-expansion-panels focusable inset flat>
									<v-expansion-panel
										v-for="(tab,m_idx) in $t('tab.sections1')"
										:key="'tab_'+m_idx"
									>
										<v-expansion-panel-header class="border-bottom-2 py-6" :expand-icon="svgPath3">
										{{tab.title}}
										</v-expansion-panel-header>
										<v-expansion-panel-content eager class="ma-10" style="font-size:0.9375rem" v-html="tab.text">
										</v-expansion-panel-content>
									</v-expansion-panel>
								</v-expansion-panels>
							</v-card>
						</template>
					</div>
					</v-tab-item>
					<v-tab-item
					:key="2" value="material"
					>
					<div>
						<template>
						<v-card>
							<div class="page-title teradeli-medium pb-10 bgcard">
								{{$t('material.subtitle')}}
							</div>
							<v-expansion-panels focusable inset flat>
								<v-expansion-panel
									v-for="(tab,m_idx) in $t('tab.sections2')"
									:key="'tab_'+m_idx"
								>
									<v-expansion-panel-header class="border-bottom-2 py-6" :expand-icon="svgPath3">
									{{tab.title}}
									</v-expansion-panel-header>
									<v-expansion-panel-content eager class="ma-10" style="font-size:0.9375rem" v-html="tab.text">
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-card>
						</template>
					</div>
					</v-tab-item>
					<v-tab-item
					:key="3" value="shipping"
					>
					<div>
						<template>
						<v-card>
							<div class="page-title teradeli-medium pb-10 bgcard">
								{{$t('shipping.subtitle')}}
							</div>
							<v-expansion-panels focusable inset flat>
								<v-expansion-panel
									v-for="(tab,m_idx) in $t('tab.sections3')"
									:key="'tab_'+m_idx"
								>
									<v-expansion-panel-header class="border-bottom-2 py-6" :expand-icon="svgPath3">
									{{tab.title}}
									</v-expansion-panel-header>
									<v-expansion-panel-content eager class="ma-10" style="font-size:0.9375rem" v-html="tab.text">
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-card>
						</template>
					</div>
					</v-tab-item>
				</v-tabs-items>
			</div>
			<div class="d-block d-md-none">
				<v-expansion-panels flat class="pvw">
					<v-expansion-panel>
						<v-expansion-panel-header class="border-bottom-2" :expand-icon="svgPath3">
							<div class="d-block">
								<div class="teradeli-medium pb-1">
									{{$t('questions.menu')}}
								</div>
								<div class="teradeli-light">
									{{$t('questions.subtitle')}}
								</div>
							</div>
						</v-expansion-panel-header>
						<v-expansion-panel-content eager>
							<v-expansion-panels flat>
								<v-expansion-panel
									v-for="(tab,m_idx) in $t('tab.sections1')"
									:key="'tab_'+m_idx"
								>
									<v-expansion-panel-header class="border-bottom-2" :expand-icon="svgPath4">
									{{tab.title}}
									</v-expansion-panel-header>
									<v-expansion-panel-content eager class="bgcard pa-3" style="font-size:0.9375rem" v-html="tab.text">
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-expansion-panel-content>
					</v-expansion-panel>
					<!--fait chier*/-->
					<v-expansion-panel>
						<v-expansion-panel-header class="border-bottom-2" :expand-icon="svgPath3">
							<div class="d-block">
								<div class="teradeli-medium pb-1">
									{{$t('material.menu')}}
								</div>
								<div class="teradeli-light">
									{{$t('material.subtitle')}}
								</div>
							</div>
						</v-expansion-panel-header>
						<v-expansion-panel-content eager>
							<v-expansion-panels flat>
								<v-expansion-panel
									v-for="(tab,m_idx) in $t('tab.sections2')"
									:key="'tab_'+m_idx"
								>
									<v-expansion-panel-header class="border-bottom-2" :expand-icon="svgPath4">
									{{tab.title}}
									</v-expansion-panel-header>
									<v-expansion-panel-content eager class="bgcard pa-3" style="font-size:0.9375rem" v-html="tab.text">
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-expansion-panel-content>
					</v-expansion-panel>
					<!--fait chier*/-->
					<v-expansion-panel>
						<v-expansion-panel-header class="border-bottom-2" :expand-icon="svgPath3">
							<div class="d-block">
								<div class="teradeli-medium pb-1">
									{{$t('shipping.menu')}}
								</div>
								<div class="teradeli-light">
									{{$t('shipping.subtitle')}}
								</div>
							</div>
						</v-expansion-panel-header>
						<v-expansion-panel-content eager>
							<v-expansion-panels flat>
								<v-expansion-panel
									v-for="(tab,m_idx) in $t('tab.sections3')"
									:key="'tab_'+m_idx"
								>
									<v-expansion-panel-header class="border-bottom-2" :expand-icon="svgPath4">
									{{tab.title}}
									</v-expansion-panel-header>
									<v-expansion-panel-content eager class="bgcard pa-3" style="font-size:0.9375rem" v-html="tab.text">
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</div>
		</v-col>
		<v-col col="12" md="4" class="pvw bg-white">
			<CustomerServices/>
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
		"material": {
			"menu": "Materials and maintenance",
			"subtitle": "Discover our natural materials and preserve the beauty of your item"
		},
		"questions": {
			"menu": "Products",
			"subtitle": "Learn more about us and our products"
		},
		"shipping": {
			"menu": "Delivery, return, order",
			"subtitle": "Your order made easy"
		},
		"tab": {
			"menu": "",
			"sections1": [
				{
					"text": "Yes, all our products are entirely made in France. This is our policy and our values.<br><br>To have more visibility on French traceability, you can use the ORIGIN application which will give you all the details of our products.<br><br>",
					"title": "Are Warenghem products entirely made in France?"
				},
				{
					"text": "Dionysos wine leather bags and leather goods are made at Ateliers Saint Germain near Angers, specializing in fine leather goods.<br>We have selected them because they also work with the largest houses in France, in order to provide a high-end finish.<br><br>\nThe belt buckles are made to measure at Les Ateliers de Mars near Romans sur Isère and are in certified natural pewter, infinitely recyclable. Why did we select it? For his experience and his achievements for big names.<br><br>\nThe shoes are made in the French shoe capital in Romans sur Isère at In-Soft. Our project was selected by the local economic development program and the \"Romans Cuir\" association for the creation of Dionysos boots.<br><br>\nIn these various workshops, the choice of noble natural materials and plants, the work of experienced craftsmen and the extreme care taken in each phase of the process of creating our products reinforce our tradition of excellence and refinement.",
					"title": "Where are your manufacturing workshops located?"
				},
				{
					"text": "Yes, all our products are certified by the vegan organization PETA, and therefore do not contain any animal matter. <br><br>\nOur linens are GOTS and OEKO-TEX® certified, which means that they are free from toxic products for the body and the environment. GOTS is the \"organic farming\" certification and OEKO-TEX® is the first label aimed at guaranteeing the human-ecological qualities of textiles.<br><br>\nOur linen is grown and woven in France.<br><br>\nOur products are audited to be certified of guaranteed French origin. But the process is unfortunately long and expensive. We will keep you posted on the progress of this project. In the meantime, use the ORIGIN application which traces the entire production from the raw material ...",
					"title": "Does Warenghem have vegan and ecological certifications?"
				},
				{
					"text": "Warenghem does not offer discounts or promo codes. Our concept is to eliminate all expensive intermediaries in order to offer you the best quality at the best price. Most fashion players artificially inflate prices in order to finance one-off or continuous promotional operations.",
					"title": "Does Warenghem offer promo codes or discounts?"
				},
				{
					"text": "Click on the Materials and Maintenance link on the product sheets for all maintenance recommendations.",
					"title": "How to maintain Warenghem products?"
				},
				{
					"text": "You can discover all the additional information on our collections on our website www.warenghem.com. Go to the product pages to discover all the information.<br>",
					"title": "Where can I find additional information on Warenghem products?"
				},
				{
					"text": "By subscribing to the Warenghem Newsletter, you will be among the first to be informed of new products, events and news from the House.<br><br>You can also click on the News section to find out about Warenghem news.",
					"title": "How to be informed of Warenghem news?"
				}
			],
			"sections2": [
				{
					"text": "<div><p><strong>Unlike animal leather, it does not require maintenance.</strong></p><p>But to preserve the beauty of this item over the years, we recommend that you:</p><ul><li><p>Be careful not to scratch or rub your item against abrasive surfaces, especially leather finishes.</p></li><li><p>Protect your item from excessive moisture and keep it away from direct sources of heat.</p></li><li><p>Gently clean the canvas with a soft cloth dampened with slightly soapy water.</p></li></ul><p>For any questions regarding your article, please contact us at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social media.</p></div>",
					"title": "How to take care of leather goods from Dionysus wine?"
				},
				{
					"text": "No maintenance is required for this material.<br><br>\nWe have used a heavy weight used for furniture, which gives it more resistance.<br><br>\nIn addition, the linen used is organic, cultivated and woven in France.<br><br>\nUnlike other brands, Warenghem uses a natural linen (not polyester) lining. Its raw appearance contrasts with the modern look of the products. Flax does not contain any chemicals.",
					"title": "How is the linen lining taken care of?"
				},
				{
					"text": "<div><p>Our Dionysos® wine leather is produced using an innovative process that transforms the fibers of the grape into an ecological material.</p><p>It has been extensively tested so that it has the same characteristics as a traditional leather:</p><ul><li><p>Mechanical: high resistance and total waterproofness</p></li><li><p>Aesthetics: fine and harmonious grain</p></li><li><p>Sensory: soft and pleasant to the touch, odorless</p></li></ul></div>",
					"title": "Is Dionysus wine leather strong and durable?"
				}
			],
			"sections3": [
				{
					"text": "Delivery in metropolitan France is free from 100 € of purchase. Below this amount, delivery is € 5.90 via Colissimo and € 4.50 via Mondial Relay.<br><br>\nWe also offer express delivery via Chronopost. The delivery will then be 10 € whatever the amount of your order.<br><br>\nFor Belgium, delivery is free from 100 € of purchase. Below this amount, Mondial Relay shipping is € 5.90 for home delivery, and € 4.50 for delivery to a relay point. Express delivery is provided by DHL at € 15, regardless of the amount of the order.<br><br>\nFor the countries of the European Union and the French overseas departments and territories, the delivery is 10 €. The delivery time is 4 to 6 working days after shipment.",
					"title": "How much is shipping ?"
				},
				{
					"text": "Your orders are prepared and shipped within 24 hours after your order (excluding weekends and holidays). <br><br>\nYou will be delivered within 2-3 working days after shipment of your order for delivery in France via Colissimo, in 3 to 5 days for delivery to relay points, and in 24 to 48 hours for express delivery via Chronopost.",
					"title": "WHAT ARE THE DELIVERY TIMES ?"
				},
				{
					"text": "What delivery methods do you offer?<br>All Warenghem products can be shipped by post via Colissimo, express delivery via Chronopost or delivered to relay points via Mondial Relay.",
					"title": "What delivery methods do you offer?"
				},
				{
					"text": "Don't panic, it happens to everyone! Contact us quickly at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social media, so that we can do what is necessary. If your order has not yet been shipped, we will do our best to accommodate your request!",
					"title": "I made the wrong delivery address, product or size when ordering."
				},
				{
					"text": "Yes, we deliver to countries in the European Union within 4 to 6 working days after the order has been shipped. The delivery costs are 10 €, whatever the amount of your order.<br><br>\nFor Belgium, delivery is free from 100 € of purchase. Below this amount, Mondial Relay shipping is € 5.90 for home delivery, and € 4.50 for delivery to a relay point. Express delivery is provided by DHL at € 15, regardless of the amount of the order.",
					"title": "Can I have it delivered abroad?"
				},
				{
					"text": "If you are not happy with your Warenghem products, no problem! You have 14 days to return your products to us. Send an email to <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social networks, specifying your order number and we will send you the procedure to print your return slip. The refund is made within 15 days and will be made automatically on the account associated with the credit card used during the purchase or on the Paypal account used for payment. <br><br>\nOur reimbursement conditions only apply to individuals. For businesses, products are not returned or exchanged if they have been washed or used.",
					"title": "What is Warenghem's return policy?"
				},
				{
					"text": "Did you get the wrong size or did the color not suit you? We accept exchanges of unwashed and unused products within 14 days of your purchase. Of course, we take care of the delivery costs. Send an email to <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social networks. specifying your order number and we will send you the procedure to print your return slip.",
					"title": "What is Warenghem's trading policy?"
				},
				{
					"text": "If the products have not been used or washed, we simply put them back into stock. Otherwise, products that cannot be put back for sale are repackaged by our logistics teams and / or recycled.",
					"title": "What happens to the products that are returned to you?"
				},
				{
					"text": "Your products are shipped the day after your order (excluding weekends and holidays). You will therefore receive within 48 hours of your order a shipment confirmation email containing a delivery tracking link. If you do not receive this confirmation email within 72 hours, we invite you to contact us at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social networks.",
					"title": "What is the status of my order?"
				},
				{
					"text": "Did you get the wrong size or just changed your mind? No problem, send us a quick email at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social media. We will cancel your order if it has not already been shipped. If it is already with the postman, you will have 14 days to return it to us free of charge.",
					"title": "How can I cancel my order?"
				},
				{
					"text": "We accept payment by credit card and Paypal. You can also pay for your order in 3x from 100 €.",
					"title": "What payment methods do you offer?"
				},
				{
					"text": "After choosing your products and validating your basket, you will simply have to click on Pay in 3 times in the payment step, then click on \"Validate payment\".",
					"title": "How can I benefit from the payment in 3 installments?"
				},
				{
					"text": "All transactions are secure. The Warenghem site is equipped with an SSL encryption system to protect personal data and payment data.<br><br>Warenghem undertakes not to keep your credit card details.",
					"title": "Payment security"
				},
				{
					"text": "Warenghem has implemented very strict security measures on its site www.warenghem.com in order to guarantee the protection of your personal data.<br><br>The Warenghem site is therefore equipped with an SSL encryption system aimed at protecting personal and payment data.<br><br>Warenghem undertakes not to keep your credit card number.",
					"title": "Is the www.warenghem.com site secure / reliable?"
				}
			]
		},
		"title": "Your questions"
	},
	"fr": {
		"material": {
			"menu": "Matières et entretien",
			"subtitle": "Découvrez nos matières naturelles et préserver la beauté de votre article"
		},
		"questions": {
			"menu": "Produits",
			"subtitle": "En savoir plus sur nous et nos produits"
		},
		"shipping": {
			"menu": "Livraison, retour, commande",
			"subtitle": "Votre commande en toute simplicité"
		},
		"tab": {
			"menu": "",
			"sections1": [
				{
					"text": "Oui, tous nos produits sont entièrement fabriqués en France. C'est notre politique et nos valeurs.<br><br>\nPour avoir plus de visibilité sur la tracabilité francaise, vous pouvez utiliser l'application ORIGIN qui vous donnera tous les détails de nos produits.<br><br>",
					"title": "Les produits Warenghem sont-ils entierement fabriqués en France ?"
				},
				{
					"text": "Les sacs et la maroquinerie en cuir de vin Dionysos sont confectionnés aux Ateliers Saint Germain vers Angers, spécialisés en haute maroquinerie.<br>\nNous les avons sélectionné car ils travaillent également avec les plus grandes maisons en France, afin de fournir une finition haut de gamme.<br><br>\n\nLes boucles de ceinture sont réalisées sur mesure chez Les Ateliers de Mars proche de Romans sur Isère et sont en étain naturel certifié, recyclable à l'infini. Pourquoi nous l'avons sélectionné ? Pour son expérience et ses réalisations pour de grands noms.<br><br>\n\nLes souliers sont confectionnés au sein de la capitale francaise de la chaussure à Romans sur Isère chez In-Soft. Notre projet a été selectionné par le programme de développement économique local et l'association \"Romans Cuir\" pour la création des bottines Dionysos.<br><br>\n\nDans ces différents ateliers, le choix de matériaux naturels nobles et végétaux, l’œuvre d’artisans expérimentés et le soin extrême apporté à chacune des phases du processus de création de nos produits renforcent notre tradition de l’excellence et du raffinement.",
					"title": "Où se situent vos ateliers de fabrication ?"
				},
				{
					"text": "Oui, tous nos produits sont certifiés par l'organisme végane PETA, et ne contiennent donc aucune matière animale. <br><br>\n\nNos lins sont certifiés GOTS et OEKO-TEX®, ce qui signifie qu’ils sont exempts de produits toxiques pour le corps et l’environnement. GOTS est la certification \"agriculture biologique\" et OEKO-TEX® est le premier label visant à garantir les qualités humano-écologiques des textiles.<br><br>\n\nNos lin sont cultivés et tissés en France.<br><br>\n\nNos produits sont en audit pour être certifié origine France garantie. Mais le processus et malheuresement long et couteux. Nous vous tiendrons au courant de l'anancée de ce projet. En attendant, utilisez l'application ORIGIN qui trace l'intégralité de la fabrication depuis la matière première...",
					"title": "Est-ce que Warenghem possède des certifications véganes et écologiques ?"
				},
				{
					"text": "Warenghem ne propose pas de réductions ni de codes promo. Notre concept est de supprimer tous les intermédiaires couteux afin de vous proposer la meilleure qualité au meilleur prix. La plupart des acteurs de la mode gonflent artificiellement les prix afin de financer les opérations de promotions ponctuelles ou continues.",
					"title": "Est-ce que Warenghem proposent des codes promo ou des remises ?"
				},
				{
					"text": "Cliquez sur le lien Matières et Entretien des fiches produits pour obtenir l’ensemble des recommandations d’entretien.",
					"title": "Comment entretenir les produits Warenghem ?"
				},
				{
					"text": "Vous pourrez découvrir toutes les informations complémentaires sur nos collections sur notre site internet www.warenghem.com. Rendez-vous dans les pages produits pour découvrir l’ensemble des informations.<br>",
					"title": "Où trouver des informations complémentaires sur les produits Warenghem ?"
				},
				{
					"text": "En vous inscrivant à la Newsletter Warenghem, vous serez parmi les premiers à être informés des nouveautés produits, des événements et des actualités de la Maison.<br><br>\nVous pouvez également cliquer sur la section News afin de découvrir l’actualité de Warenghem.",
					"title": "Comment être informé(e) des actualités Warenghem ?"
				}
			],
			"sections2": [
				{
					"text": "<div><p><strong>Contrairement au cuir animal, il ne demande pas d'entretien.</strong></p><p>Mais pour préserver au fil des ans la beauté de cet article, nous vous recommandons :</p><ul><li><p>De veillez à ne pas érafler ou frotter votre article contre des surfaces abrasives, en particulier les finitions en cuir.</p></li><li><p>De protéger votre article de l’humidité excessive et de le maintenir à l’abri des sources directes de chaleur.</p></li><li><p>De nettoyer délicatement la toile avec un chiffon doux imbibé d’eau légèrement savonneuse.</p></li></ul><p>Pour toute question relative à votre article, veuillez prendre contact avec nous à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.</p></div>",
					"title": "Comment prendre soin des articles en cuir de vin Dionysos ?"
				},
				{
					"text": "Aucun entretien n'est requis pour cette matière.<br><br>\n\nNous avons utilisé un grammage élevé utilisé pour l'ameublement, ce qui lui confère plus de résistance.<br><br>\n\nDe plus, le lin utilisé est bio, cultivé, et tissé en France.<br><br>\n\nContrairement aux autres marques, Warenghem utilise une doublure en lin naturel (et non en polyester). Son aspect brut contraste avec l'allure moderne des produits. Le lin ne contient aucun produit chimique.",
					"title": "Comment s'entretient la doublure en lin ? "
				},
				{
					"text": "<div><p>Notre cuir de vin Dionysos® est produit grâce à un procédé innovant qui transforme les fibres du raisin en une matière écologique.</p><p>Il a été longuement testé afin qu'il ait les mêmes caractéristiques qu'un cuir traditionnel :</p><ul><li><p>Mécaniques : forte résistance et imperméabilité totale</p></li><li><p>Esthétiques : grain fin et harmonieux</p></li><li><p>Sensorielles : touché doux et agréable, sans odeur</p></li></ul></div>",
					"title": "Le cuir de vin Dionysos est-il résistant et durable ?"
				}
			],
			"sections3": [
				{
					"text": "La livraison en France métropolitaine est offerte à partir de 100€ d'achat. En-dessous de ce montant, la livraison est de 5,90€ via Colissimo et de 4,50€ via Mondial Relay.<br><br>\n\nNous proposons également une livraison express via Chronopost. La livraison sera alors de 10€ quel que soit le montant de votre commande.<br><br>\n\nPour la Belgique, la livraison est offerte dès 100€ d'achat. En-dessous de ce montant, l’expédition Mondial Relay est de 5,90€ pour une livraison à domicile, et de 4,50€ pour une livraison en point relais. La livraison express est assurée par DHL à 15€, quel que soit le montant de la commande.<br><br>\n\nPour les pays de l’Union européenne et les DOM-TOM, la livraison est de 10€. Le délai de livraison est de 4 à 6 jours ouvrés après expédition.",
					"title": "Combien coûte la livraison ?"
				},
				{
					"text": "Vos commandes sont préparées et expédiées dans les 24 heures après votre commande (hors week-end et jours fériés). <br><br>\n\nVous serez livrés en 2-3 jours ouvrés après expédition de votre commande pour une livraison en France via Colissimo, en 3 à 5 jours pour une livraison en points relais, et en 24h à 48h pour une livraison express via Chronopost.",
					"title": "Quels sont les délais de livraison ?"
				},
				{
					"text": "Quels modes de livraison proposez-vous ?<br>\nTous les produits Warenghem peuvent être expédiés par la Poste via Colissimo, en livraison express via Chronopost ou livrés en points relais via Mondial Relay.",
					"title": "Quels modes de livraison proposez-vous ?"
				},
				{
					"text": "Pas de panique, cela arrive à tout le monde ! Contactez-nous rapidement à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux, pour que nous puissions faire le nécessaire. Si votre commande n’a pas encore été expédiée, nous ferons le maximum pour répondre à votre demande !",
					"title": "Je me suis trompé d’adresse de livraison, de produit ou de taille lors de ma commande."
				},
				{
					"text": "Oui, nous livrons vers les pays de l’Union européenne en 4 à 6 jours ouvrés après expédition de la commande. Les frais de livraison sont de 10€, quel que soit le montant de votre commande.<br><br>\n\nPour la Belgique, la livraison est offerte dès 100€ d'achat. En-dessous de ce montant, l’expédition Mondial Relay est de 5,90€ pour une livraison à domicile, et de 4,50€ pour une livraison en point relais. La livraison express est assurée par DHL à 15€, quel que soit le montant de la commande.",
					"title": "Puis-je me faire livrer à l’étranger ?"
				},
				{
					"text": "Si vous n’êtes pas satisfait de vos produits Warenghem, aucun problème ! Vous avez 14 jours pour nous renvoyer vos produits. Envoyez un mail à à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux, en précisant votre numéro de commande et nous vous enverrons la procédure pour imprimer votre bon de retour. Le remboursement s’effectue dans un délai de 15 jours et s’effectuera automatiquement sur le compte associé à la carte bancaire utilisée lors de l’achat ou sur le compte Paypal ayant servi au paiement. <br><br>\n\nNos conditions de remboursement ne s’appliquent qu’aux particuliers. Pour les entreprises, les produits ne sont ni repris ni échangés s’ils ont été lavés ou utilisés.",
					"title": "Quelle est la politique de retours de Warenghem ?"
				},
				{
					"text": "Vous vous êtes trompés de taille ou la couleur ne vous convient pas ? Nous acceptons les échanges de produits non lavés et non utilisés dans la limite des 14 jours suivant votre achat. Bien sûr, nous prenons en charge les frais de livraison. Envoyez un mail à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux. en précisant votre numéro de commande et nous vous enverrons la procédure pour imprimer votre bon de retour.",
					"title": "Quelle est la politique d’échanges de Warenghem ?"
				},
				{
					"text": "Si les produits n'ont été ni utilisés ni lavés, nous les remettons tout simplement en stock. Dans le cas contraire, les produits qui ne peuvent être remis à la vente sont reconditionnés par nos équipes logistiques et/ou recyclés.",
					"title": "Que deviennent les produits qui vous sont retournés ?"
				},
				{
					"text": "Vos produits sont expédiés le lendemain de votre commande (hors week-end et jours fériés). Vous recevrez donc dans les 48h suivant votre commande un mail de confirmation d’envoi contenant un lien de suivi de livraison. Si vous ne recevez pas ce mail de confirmation dans les 72 heures, nous vous invitons à nous contacter à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.",
					"title": "Quel est le statut de ma commande ?"
				},
				{
					"text": "Vous vous êtes trompés dans la taille ou avez tout simplement changé d’avis ? Aucun problème, envoyez-nous un mail rapidement à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.. Nous annulerons votre commande si celle-ci n’a pas déjà été expédiée. Si jamais elle déjà chez le facteur, vous aurez 14 jours pour nous la retourner gratuitement.",
					"title": "Comment puis-je annuler ma commande ?"
				},
				{
					"text": "Nous acceptons les paiements par carte bancaire et Paypal. Vous pouvez également payer votre commande en 3x dès 100€.",
					"title": "Quelles méthodes de paiement proposez-vous ?"
				},
				{
					"text": "Après avoir choisi vos produits et validé votre panier, vous aurez simplement à cliquer sur Payez en 3 fois dans l’étape du paiement, puis à cliquer sur \"Valider le paiement\".",
					"title": "Comment puis-je bénéficier du paiement en 3 fois ?"
				},
				{
					"text": "Toutes les transactions sont sécurisées. Le site Warenghem est pourvu d’un système de cryptage SSL visant à protéger les données personnelles et les données de paiement.<br><br>\nWarenghem s’engage à ne pas conserver vos coordonnées de carte bancaire.",
					"title": "Sécurité des paiements"
				},
				{
					"text": "Warenghem a mis en place des mesures de sécurité très strictes sur son site www.warenghem.com afin de garantir la protection de vos données personnelles.<br><br>\nLe site Warenghem est ainsi pourvu d’un système de cryptage SSL visant à protéger les données personnelles et de paiement.<br><br>\nWarenghem s’engage à ne pas conserver votre numéro de carte bancaire.",
					"title": "Le site www.warenghem.com est-il sécurisé / fiable ?"
				}
			]
		},
		"title": "Vos questions"
	}
}
</i18n>