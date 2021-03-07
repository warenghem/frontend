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
									<v-expansion-panel-content eager>
										<div class="bgcard pa-3" style="font-size:0.9375rem" v-html="tab.text"></div>
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
		"shipping": {
			"subtitle": "Our 100% secure payment methods"
		},
		"tab": {
			"menu": "",
			"sections3": [
				{
					"text": "We accept payments by credit card and Paypal (no need to create an account and no fees). You can also pay for your order in 3x from 100 €.",
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
					"text": "All transactions are secure. The Warenghem site is equipped with an SSL encryption system to protect personal data and payment data.<br><br>Warenghem undertakes not to keep your credit card details.",
					"title": "Payment security"
				},
				{
					"text": "Warenghem has implemented very strict security measures on its site www.warenghem.com in order to guarantee the protection of your personal data.<br><br>The Warenghem site is therefore equipped with an SSL encryption system aimed at protecting personal and payment data.<br><br>Warenghem undertakes not to keep your credit card number.",
					"title": "Is the www.warenghem.com site secure / reliable?"
				}
			]
		},
		"title": "Secure payments"
	},
	"fr": {
		"shipping": {
			"subtitle": "Nos moyens de paiement 100% sécurisés"
		},
		"tab": {
			"menu": "",
			"sections3": [
				{
					"text": "Nous acceptons les paiements par carte bancaire et Paypal (sans avoir besoin de créer un compte et sans frais). Vous pouvez également payer votre commande en 3x dès 100€.",
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
					"text": "Toutes les transactions sont sécurisées. Le site Warenghem est pourvu d’un système de cryptage SSL visant à protéger les données personnelles et les données de paiement.<br><br>\nWarenghem s’engage à ne pas conserver vos coordonnées de carte bancaire.",
					"title": "Sécurité des paiements"
				},
				{
					"text": "Warenghem a mis en place des mesures de sécurité très strictes sur son site www.warenghem.com afin de garantir la protection de vos données personnelles.<br><br>\nLe site Warenghem est ainsi pourvu d’un système de cryptage SSL visant à protéger les données personnelles et de paiement.<br><br>\nWarenghem s’engage à ne pas conserver votre numéro de carte bancaire.",
					"title": "Le site www.warenghem.com est-il sécurisé / fiable ?"
				}
			]
		},
		"title": "Paiements sécurisés"
	}
}
</i18n>