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
        name: 'payment',
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
					"text": "We accept payments by credit card (Visa, Mastercard, American Express) and Paypal (no need to create an account and no fees). You can also pay for your order in 3x from 100 €.",
					"title": "What payment methods do you offer?"
				},
				{
					"text": "Payments by credit card are provided by our partner Stripe, an organization approved by the Prudential Control Authority and member of the GIE bank card. At no time is Warenghem in possession of your bank details thanks to the SSL encryption process. <br> <br> Paypal is the leading electronic wallet system, recognized worldwide for its reliability.",
					"title": "Are your payment systems regulated?"
				},
				{
					"text": "After choosing your products and validating your basket, you will simply have to click on Pay in 3 times in the payment step, then click on \"Validate payment\".",
					"title": "How can I benefit from the payment in 3 installments?"
				},
				{
					"text": "<div> <p> Your order appears as a \"payment error\" on our site. </p> <p> This is because it has not been registered and you have not been charged. </p> <p> This is due to a problem with the payment method you use to pay for your order. </p> <ul> <li> the card numbers have been entered incorrectly </ li > </ul> <ul> <li> the validity of the card has expired </li> </ul> <ul> <li> A payment limit has been reached on your account </li> </ul> <ul> <li> The code received by your bank has expired </li> </ul> <ul> <li> your banking organization refuses or suspects a fraudulent payment </li> </ul> <p> We do not can, unfortunately, invite you to try with another means of payment, or another bank card, or contact your banking organization to see what is blocking. </p> <p> </p> <p> For information , </p> <p> 3 payment methods are available to pay for your order: </p> <p> </p> <p> - Payment by credit card (Visa, Master Card) </p> <p></p> <p> - Payment by Paypal </p> </ div> ",
					"title": "Your order is in Payment Error"
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
		}
	},
	"fr": {
		"tab": {
			"menu": "",
			"sections3": [
				{
					"text": "Nous acceptons les paiements par carte bancaire (Visa, Mastercard, American Express) et Paypal (sans avoir besoin de créer un compte et sans frais). Vous pouvez également payer votre commande en 3x dès 100€.",
					"title": "Quelles méthodes de paiement proposez-vous ?"
				},
				{
					"text": "Les paiements par carte bancaire sont assurés par notre partenaire Stripe, organisme agréé par l'Autorité de Contrôle Prudentiel et membre du GIE carte bancaire. A aucun moment, Warenghem n'est en possession de vos coordonnées bancaires grâce au processus de cryptage SSL.<br><br>Paypal est le système leader de porte-monnaie électronique, reconnu dans le monde entier pour sa fiabilité.",
					"title": "Vos systèmes de paiement sont ils reglementés ?"
				},
				{
					"text": "Après avoir choisi vos produits et validé votre panier, vous aurez simplement à cliquer sur Payez en 3 fois dans l’étape du paiement, puis à cliquer sur \"Valider le paiement\".",
					"title": "Comment puis-je bénéficier du paiement en 3 fois ?"
				},
				{
					"text": "<div><p>Votre commande apparaît en \"erreur de paiement\" sur notre site.</p><p>C'est que celle-ci n'a pas été enregistrée et vous n'avez pas été débité.</p><p>Cela provient d'un problème avec le moyen de paiement que vous utilisez pour régler votre commande .</p><p><ul><li>les numéros de cartes ont été mal rentrés</li></ul><ul><li>la validité de la carte a expiré</li></ul><ul><li>Un plafond de paiement a été atteint sur votre compte</li></ul><ul><li>Le code reçu par votre banque a expiré</li></ul><ul><li>votre organisme bancaire refuse ou suspecte un paiement frauduleux</li></ul></p><p>Nous ne pouvons, malheureusement, que vous inviter à essayer avec un autre moyen de paiement, ou une autre carte bancaire, ou contacter votre organisme bancaire afin de voir ce qui bloque.</p><p></p><p>Pour information, 3 moyens de paiement vous sont proposés pour régler votre commande :</p><p></p><p>- Le paiement par carte bancaire (Visa, Master Card)</p><p></p><p>- Le paiement par Paypal</p></div>",
					"title": "Votre commande est en Erreur de Paiement"
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
		}
	}
}
</i18n>