<template>
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
</template>  

<script>
    import { mdiChevronRight, mdiChevronLeft, mdiChevronDown } from '@mdi/js'
    export default {
        name: 'shipping',
        data() {
            return {
				svgPath1: mdiChevronRight,
				svgPath2: mdiChevronLeft,
				svgPath3: mdiChevronDown,
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
    }

</script>

<i18n>
{
	"en": {
		"tab": {
			"menu": "",
			"sections3": [
				{
					"text": "<div> <p> Orders are prepared and shipped within 48 hours of placing your order (excluding end of year holidays and weekends and public holidays) </p> <p> Your parcel is shipped the day of the order if it is placed before 12 noon (excluding weekends and holidays). In periods of high activity, the preparation of the order can take up to 48 / 72h. </ p > <p> You will be notified by e-mail as soon as your package has been shipped and you will receive the tracking number of your order to be kept informed of the proper delivery of your package. &nbsp; </p> <h3 class = ' text-center pb-3 '> Free delivery in France from € 100 excluding express delivery </h3> <p> Delivery to a relay point via Mondial Relay in 4/5 working days (Mainland France excluding Corsica): 4.50 € TTC, free for purchases over € 100. From 8/12 to 25/12, delivery via Mondial Relay is no longer offered to avoid delivery delays. </p> <p> Home delivery via Colissimo, without signature, in 48 / 72h (Metropolitan France except Corsica): &nbsp; 6 € TTC, free from 100 € of purchase. </p> <p> Delivery &nbsp; via DHL in 48 hours (Metropolitan France except Corsica, working days only): 9.90 € TTC <br> Delivery is against signature. You will receive an e-mail from DHL if you wish to change the delivery day or if you prefer to have it dropped off at a relay point. <br> It will be carried out between 8 a.m. and 10 p.m. in Paris and Ile-de-France and between 8 a.m. and 8 p.m. in the rest of the country. &nbsp; </p> <h3 class = 'text-center pb-3'> Delivery to Germany, Austria, Belgium, the Netherlands, Luxembourg, the united kingdom, italy, spain, ireland and portugal free from 100 € excluding express delivery </h3> <p> Delivery in relay point in 4 to 7 working days (only for Belgium and Luxembourg): 4.50 € TTC, free from 100 € of purchase </p> <p> Home delivery in 4 to 7 working days: 6.00 € TTC, free from 100 € of purchase </p> <p> Express home delivery via DHL: 9.90 € TTC </p> <h3 class = 'text-center pb-3'> Free delivery to other countries of the European Union from 100 € excluding express delivery </h3> <p> Home delivery in 4 to 7 working days depending on the destination: € 9.60 including tax, free from 100 € of purchase </p> <p> Express home delivery via DHL: 9.90 € TTC &nbsp; </p> <h3 class = 'text-center pb-3'> Delivery to the rest of the world and dom tom offered from 150 € </h3> <p> Home delivery within 4 to 10 working days depending on the destination: 20 € HT, free from 150 € of purchase </p> <p> For delivery outside the European Union, customs fees may be applied and are the responsibility of the customer, the products being invoiced excluding tax. Except in Switzerland, for this country, the customs fees are fully covered by Warenghem! </p> </div> ",
					"title": "What are the costs and delivery times?"
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
					"text": "<div class='d-block'>If you are not happy with your Warenghem products, no problem! You have 14 days to return your products to us. Send an email to <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social networks, specifying your order number and we will send you the procedure to print your return slip. The refund is made within 15 days and will be made automatically on the account associated with the credit card used during the purchase or on the Paypal account used for payment. <br><br>\nOur refund conditions apply only to individuals. For businesses, products are not returned or exchanged if they have been washed or used.</div>",
					"title": "What is Warenghem's return policy?"
				},
				{
					"text": "Did you get the wrong size or did the color not suit you? We accept exchanges of unwashed and unused products within 14 days of your purchase. Of course, we take care of the delivery costs. Send an email to <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social networks. specifying your order number and we will send you the procedure to print your return slip.",
					"title": "What is Warenghem's trading policy?"
				},
				{
					"text": "<p>To remedy this, I therefore invite you to perform the classic return procedure previously inserted",
					"title": "What can I do, my product is defective? (Order placed within 14 days)"
				},
				{
					"text": "<div><p>You placed an order more than a month ago and your item has a defect.</p><p>As a first step, we invite you to send us an email to the address <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> with one or more photo (s) of your item, your order number as well as the maintenance conditions (washing / drying) used for the product?</p><p>If the defect is confirmed by our teams, a Colissimo voucher will be sent to you and you&nbsp;will allow you to return the product to us at our expense.&nbsp;</p><p>Please attach the delivery slip, if you still have it in your possession, indicating the defect encountered on the article. Otherwise, please indicate, on plain paper, your order number and the defect encountered on the item.</p><p>Upon receipt, we will send you the same product (subject to availability), brand new, beautiful</p></div>",
					"title": "What can I do, my product is defective? (Order outside the 14-day deadline)"
				},
				{
					"text": "If the products have not been used or washed, we simply put them back into stock. Otherwise, products that cannot be put back for sale are repackaged by our logistics teams and / or recycled.",
					"title": "What happens to the products that are returned to you?"
				},
				{
					"text": "<p>The subject is serious and divides our clients. You should already know that our packaging has been designed to be recyclable (see compostable) and low consumption of. Most of you like boxes. And some, including you, find the packaging to be too much. We are actively working on this subject. We are considering in particular the possibility of choosing to have a product packaged or not, with returnable packaging.</p>",
					"title": "What if I do not want to receive boxes when ordering?"
				},
				{
					"text": "Your products are shipped the day after your order (excluding weekends and public holidays). You will therefore receive within 48 hours of your order a shipment confirmation email containing a delivery tracking link. do not receive this confirmation email within 72 hours, we invite you to contact us at <a href=\"mailto:hello@warenghem.com\"> hello@warenghem.com </a> or on social networks. <p> We cross France and the world to come to you thanks to three delivery methods: Colissimo, Mondial Relay and DHL. <br> To find out where your order is, nothing could be simpler, you just need to click on the link below corresponding to your chosen delivery method and enter the order tracking number (indicated on your dispatch email) to find out where the delivery is. <br> <br> Colissimo (section follow my Parcel): &nbsp; <a href='http://www.colissimo.fr/particuliers/home.jsp'> http://www.colissimo.fr/particuliers/home.jsp </a> <br > M ondial Relay: &nbsp; <a href='http://www.mondialrelay.fr/suivi-de-colis/'> http://www.mondialrelay.fr/suivi-de-colis/ </a> <br > DHL: &nbsp; <a href='https://www.dhl.fr/exp-fr/dhl_express/suivi_expedition.html'> https://www.dhl.fr/exp-fr/dhl_express/suivi_expedition.html </a> </p> ",
					"title": "Where is my order ?"
				},
				{
					"text": "<div><p>It happens!</p>send us a quick email at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social media. We will cancel your order if it has not already been shipped.<p>For a size or product error, you can request a return, free of charge (for France and most of the European Union) once it has been received, from your customer account</p></div>",
					"title": "I made the wrong address, model, size when ordering, what should I do?"
				},
				{
					"text": "<div class='d-block'>Did you get the wrong size or just changed your mind? No problem, send us a quick email at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social media. We will cancel your order if it has not already been shipped. If it is already with the postman, you will have 14 days to return it to us free of charge.</div>",
					"title": "How can I cancel my order?"
				}
			]
		}
	},
	"fr": {
		"tab": {
			"menu": "",
			"sections3": [
				{
					"text": "<div><p>Les Commandes sont préparées et expédiées dans les 48H suivant votre commande (hors période de fêtes de fin d'année et hors week-end et jours fériés)</p><p>Votre colis est expédié le jour de la commande si celle-ci est passée avant 12h (hors week-end et jours fériés). Dans les périodes de forte activité, la préparation de la commande peut prendre jusqu'à 48/72h.</p><p>Vous serez prévenu par e-mail dès l’expédition de votre colis et vous recevrez le numéro de suivi de votre commande pour être tenu informé du bon acheminement de votre colis.&nbsp;</p><h3 class='text-center pb-3'>Livraison en france offerte à partir de 100€ hors livraison express</h3><p>Livraison en point relais via Mondial Relay en 4/5 jours ouvrés (France Métropolitaine hors Corse) : 4,50€ TTC, offert à partir de 100€ d'achat. Du 8/12 au 25/12, la livraison via Mondial Relay n'est plus proposée pour&nbsp;éviter les retards de livraison.</p><p>Livraison à domicile via Colissimo, sans signature, en 48/72h (France Métropolitaine hors Corse) :&nbsp;6€ TTC, offert à partir de 100€ d’achat.</p><p>Livraison&nbsp;via DHL en 48h (France Métropolitaine hors Corse, jours ouvrés uniquement) : 9.90€ TTC<br>La livraison se fait contre signature. Vous recevrez un e-mail de la part de DHL si vous souhaitez modifier le jour de livraison ou si vous préférez le faire déposer dans un point relais.<br>Elle sera effectuée entre 8h et 22h à Paris et Ile-de-France et entre 8h et 20h sur le reste du territoire.&nbsp;</p><h3 class='text-center pb-3'>Livraison vers l'allemagne, l'autriche, la belgique, les pays-bas, le luxembourg, le royaume-uni, l'italie, l'espagne, l'irlande et le portugal offerte à partir de 100€ hors livraison express</h3><p>Livraison en point relais en 4 à 7 jours ouvrés (uniquement pour Belgique et Luxembourg): 4.50€ TTC, offert à partir de 100€ d'achat</p><p>Livraison à domicile en 4 à 7 jours ouvrés : 6.00€ TTC, offert à partir de 100€ d’achat</p><p>Livraison express à domicile via DHL: 9.90€ TTC</p><h3 class='text-center pb-3'>Livraison vers les autres pays de l'union européenne offerte à partir de 100€ hors livraison express</h3><p>Livraison à domicile en 4 à 7 jours ouvrés selon la destination: 9,60€ TTC, offert à partir de 100€ d’achat</p><p>Livraison express à domicile via DHL : 9.90€ TTC&nbsp;</p><h3 class='text-center pb-3'>Livraison dans le reste du monde et les dom tom offerte à partir de 150€</h3><p>Livraison à domicile sous 4 à 10 jours ouvrés selon la destination: 20€ HT, offert à partir de 150€ d’achat</p><p>Pour la livraison hors de l'Union Européenne, des frais de douanes peuvent être appliqués et sont à la charge du client, les produits étant facturés hors taxe. Sauf en Suisse, pour ce pays, les frais de douane sont entièrement pris en charge par Warenghem !</p></div>",
					"title": "Quels sont les coûts et délais de livraison ?"
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
					"text": "<p>Pour y remédier, je vous invite donc à effectuer la procédure retour classique insiqué précédemment",
					"title": "Comment faire, mon produit est défectueux ? (Commande passée sous 14 jours)"
				},
				{
					"text": "<div><p>Vous avez passé commande il y a plus d'un mois et votre article présente un défaut.</p><p>Dans un premier temps, nous vous invitons à nous transmettre un mail à l'adresse <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> avec une ou plusieurs photo(s) de votre article, votre numéro de commande ainsi que les conditions d'entretien (lavage/séchage) utilisées pour le produit ?</p><p>Si le défaut est confirmé par nos équipes, un bon Colissimo vous sera transmis en retour et vous&nbsp;permettra de nous renvoyer le produit à nos frais.&nbsp;</p><p>Merci d'y joindre le bon de livraison, si vous l'avez encore en votre possession, en indiquant le défaut rencontré sur l'article. Sinon, merci d'indiquer, sur papier libre, votre numéro de commande et le défaut rencontré sur l'article.</p><p>Dès réception, nous vous renverrons le même produit (sous réserve de disponibilité) tout beau, tout neuf</p></div>",
					"title": "Comment faire, mon produit est défectueux ? (Commande hors délai des 14 jours)"
				},
				{
					"text": "Si les produits n'ont été ni utilisés ni lavés, nous les remettons tout simplement en stock. Dans le cas contraire, les produits qui ne peuvent être remis à la vente sont reconditionnés par nos équipes logistiques et/ou recyclés.",
					"title": "Que deviennent les produits qui vous sont retournés ?"
				},
				{
					"text": "<p>Le sujet est sérieux et divise nos clients. Sachez déjà que nos emballages ont été étudiés pour être recyclables (voir compostables) et peu consommateur de. La plupart d'entre vous apprécient les boîtes. Et certains, dont vous, trouvent que l'emballage est de trop. Nous travaillons activement sur ce sujet. Nous réfléchissons notamment à la possibilité de choisir d'avoir un produit emballé ou non, de packaging retournable.</p>",
					"title": "Comment faire si je ne veux pas recevoir de boites lors de ma commande ?"
				},
				{
					"text": "Vos produits sont expédiés le lendemain de votre commande (hors week-end et jours fériés). Vous recevrez donc dans les 48h suivant votre commande un mail de confirmation d’envoi contenant un lien de suivi de livraison. Si vous ne recevez pas ce mail de confirmation dans les 72 heures, nous vous invitons à nous contacter à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.<p>Nous traversons l’hexagone et le monde pour venir jusqu’à vous grâce à trois modes de livraison : Colissimo, Mondial Relay et DHL.<br>Pour savoir où se trouve votre commande rien de plus simple, il vous suffit de cliquer sur le lien ci-dessous correspondant à votre mode de livraison choisi et de rentrer le numéro de suivi (indiqué sur votre mail d’expédition) de commande pour savoir où en est l’acheminement.<br><br>Colissimo (rubrique suivre mon Colis) :&nbsp;<a href='http://www.colissimo.fr/particuliers/home.jsp'>http://www.colissimo.fr/particuliers/home.jsp</a><br>Mondial Relay :&nbsp;<a href='http://www.mondialrelay.fr/suivi-de-colis/'>http://www.mondialrelay.fr/suivi-de-colis/</a><br>DHL :&nbsp;<a href='https://www.dhl.fr/exp-fr/dhl_express/suivi_expedition.html'>https://www.dhl.fr/exp-fr/dhl_express/suivi_expedition.html</a></p>",
					"title": "Où en est ma commande ?"
				},
				{
					"text": "<div><p>Cela arrive !</p>envoyez-nous un mail rapidement à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.. Nous annulerons votre commande si celle-ci n’a pas déjà été expédiée.<p>Pour une erreur de taille ou de produit, vous pourrez demander un retour, gratuitement (pour la France et la majeure partie de l'Union Européenne) une fois celle-ci reçue, depuis votre compte client</p></div>",
					"title": "Je me suis trompé(e) d’adresse, de modèle, de taille lors de ma commande, que faire ?"
				},
				{
					"text": "<div class='d-block'>Vous vous êtes trompés dans la taille ou avez tout simplement changé d’avis ? Aucun problème, envoyez-nous un mail rapidement à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.. Nous annulerons votre commande si celle-ci n’a pas déjà été expédiée. Si jamais elle est déjà chez le facteur, vous aurez 14 jours pour nous la retourner gratuitement.</div>",
					"title": "Comment puis-je annuler ma commande ?"
				}
			]
		}
	}
}
</i18n>