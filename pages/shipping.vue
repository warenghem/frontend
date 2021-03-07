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
			<div class="d-none d-md-block">	
				<div>
					<template>
					<v-card class="bgcard">
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
								<v-expansion-panel-content eager>
									<div class="ma-10" style="font-size:0.9375rem" v-html="tab.text"></div>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card>
					</template>
				</div>
			</div>
			<div class="d-block d-md-none">
				<v-expansion-panels flat class="pvw">
					<v-expansion-panel
						v-for="(tab,m_idx) in $t('tab.sections3')"
						:key="'tab_'+m_idx"
					>
						<v-expansion-panel-header class="border-bottom-2" :expand-icon="svgPath4">
						{{tab.title}}
						</v-expansion-panel-header>
						<v-expansion-panel-content eager>
							<div class="bgcard pa-3" style="font-size:0.9375rem" v-html="tab.text"></div>
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
		"shipping": {
			"subtitle": "Delivery and returns"
		},
		"tab": {
			"menu": "",
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
					"text": "<div class='d-block'>Don't panic, it happens to everyone! Contact us quickly at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social media, so that we can do what is necessary. If your order has not yet been shipped, we will do our best to accommodate your request!</div>",
					"title": "I made the wrong delivery address, product or size when ordering."
				},
				{
					"text": "Yes, we deliver to countries in the European Union within 4 to 6 working days after the order has been shipped. The delivery costs are 10 €, whatever the amount of your order.<br><br>\nFor Belgium, delivery is free from 100 € of purchase. Below this amount, Mondial Relay shipping is € 5.90 for home delivery, and € 4.50 for delivery to a relay point. Express delivery is provided by DHL at € 15, regardless of the amount of the order.",
					"title": "Can I have it delivered abroad?"
				},
				{
					"text": "<div class='d-block'>If you are not happy with your Warenghem products, no problem! You have 14 days to return your products to us. Send an email to <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social networks, specifying your order number and we will send you the procedure to print your return slip. The refund is made within 15 days and will be made automatically on the account associated with the credit card used during the purchase or on the Paypal account used for payment. <br><br>\nOur reimbursement conditions only apply to individuals. For businesses, products are not returned or exchanged if they have been washed or used.</div>",
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
					"text": "<div class='d-block'>Your products are shipped the day after your order (excluding weekends and holidays). You will therefore receive within 48 hours of your order a shipment confirmation email containing a delivery tracking link. If you do not receive this confirmation email within 72 hours, we invite you to contact us at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social networks.</div>",
					"title": "What is the status of my order?"
				},
				{
					"text": "<div class='d-block'>Did you get the wrong size or just changed your mind? No problem, send us a quick email at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social media. We will cancel your order if it has not already been shipped. If it is already with the postman, you will have 14 days to return it to us free of charge.</div>",
					"title": "How can I cancel my order?"
				}
			]
		},
		"title": "Delivery and returns"
	},
	"fr": {
		"shipping": {
			"subtitle": "Livraison et retours"
		},
		"tab": {
			"menu": "",
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
					"text": "<div class='d-block'>Pas de panique, cela arrive à tout le monde ! Contactez-nous rapidement à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux, pour que nous puissions faire le nécessaire. Si votre commande n’a pas encore été expédiée, nous ferons le maximum pour répondre à votre demande !</div>",
					"title": "Je me suis trompé d’adresse de livraison, de produit ou de taille lors de ma commande."
				},
				{
					"text": "Oui, nous livrons vers les pays de l’Union européenne en 4 à 6 jours ouvrés après expédition de la commande. Les frais de livraison sont de 10€, quel que soit le montant de votre commande.<br><br>\n\nPour la Belgique, la livraison est offerte dès 100€ d'achat. En-dessous de ce montant, l’expédition Mondial Relay est de 5,90€ pour une livraison à domicile, et de 4,50€ pour une livraison en point relais. La livraison express est assurée par DHL à 15€, quel que soit le montant de la commande.",
					"title": "Puis-je me faire livrer à l’étranger ?"
				},
				{
					"text": "<div class='d-block'>Si vous n’êtes pas satisfait de vos produits Warenghem, aucun problème ! Vous avez 14 jours pour nous renvoyer vos produits. Envoyez un mail à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux, en précisant votre numéro de commande et nous vous enverrons la procédure pour imprimer votre bon de retour. Le remboursement s’effectue dans un délai de 15 jours et s’effectuera automatiquement sur le compte associé à la carte bancaire utilisée lors de l’achat ou sur le compte Paypal ayant servi au paiement. <br><br>\n\nNos conditions de remboursement ne s’appliquent qu’aux particuliers. Pour les entreprises, les produits ne sont ni repris ni échangés s’ils ont été lavés ou utilisés.</div>",
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
					"text": "<div class='d-block'>Vous vous êtes trompés dans la taille ou avez tout simplement changé d’avis ? Aucun problème, envoyez-nous un mail rapidement à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.. Nous annulerons votre commande si celle-ci n’a pas déjà été expédiée. Si jamais elle déjà chez le facteur, vous aurez 14 jours pour nous la retourner gratuitement.</div>",
					"title": "Comment puis-je annuler ma commande ?"
				}
			]
		},
		"title": "Livraison et retours"
	}
}
</i18n>