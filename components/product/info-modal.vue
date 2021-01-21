<template>
  <v-dialog
    v-model="isModal"
    max-width="1200px"
    @click:outside="closeModal"
    content-class="bg-white"
    style='z-index:300001;'
    scrollable
  >
    <v-card>
      <div style="height: 50px;" class="d-flex justify-space-between align-center border-bottom-2">
          <div class="text-center sub-title pl-3">{{currentModal.modalTitle}}</div>
          <v-btn
              text
              color="black"
              style="font-size: 26px"
              class="px-0 h-100 border-left-2 rounded-0"
          >
              <v-icon @click="closeModal">{{ svgPath }}</v-icon>
          </v-btn>
      </div>
      <v-card-text class="pvw">
        <div v-html="currentModal.modalContent" class="modalContent"></div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
    import { mdiClose } from '@mdi/js'
    export default {
        name: "info-modal",
        data() {
            return {
                svgPath: mdiClose,
                currentModal: {
                    modalTitle: '',
                    modalContent: ''
                }
            }
        },
        props: {
            isModal: {
                type: Boolean,
                default: false
            },
            current: {
                type: String,
                default: 'paymentInfoModal'
            }
        },
        methods: {
            closeModal() {
                this.$emit('closeModal')
            }
        },
        updated() {
            if (this.current === 'paymentInfoModal') {
                this.currentModal.modalTitle = this.$t('paymentInfoModal.modalTitle');
                this.currentModal.modalContent = this.$t('paymentInfoModal.modalContent')
            }else if(this.current === 'shippingModal'){
                this.currentModal.modalTitle = this.$t('shippingModal.modalTitle');
                this.currentModal.modalContent = this.$t('shippingModal.modalContent')
            }else if(this.current === 'returnModal'){
                this.currentModal.modalTitle = this.$t('returnModal.modalTitle');
                this.currentModal.modalContent = this.$t('returnModal.modalContent')
            }else if(this.current === 'packageModal'){
                this.currentModal.modalTitle = this.$t('packageModal.modalTitle');
                this.currentModal.modalContent = this.$t('packageModal.modalContent')
            }
        }
    }
</script>
<i18n>
{
	"fr": {
		"packageModal": {
			"modalContent": "<div><p>Toutes les commandes Louis Vuitton sont livrées dans un <u>emballage cadeau.</u><br>L'emballage cadeau Louis Vuitton se décline dans une couleur baptisée « Safran Impérial » qui est relevé de bleu, couleur complémentaire historique déjà utilisée pour les premières personnalisations dès 1854 mais aussi depuis de nombreuses années pour les rubans de la Maison. Cette association de teintes révèle une signature à la fois contemporaine et intemporelle comme un écho à l’âge d’or du voyage.<br>Issues de forêts durables certifiées FSC et comprenant 40% de fibres recyclées, nos boîtes livrées à plat permettent d’optimiser un engagement de développement durable de la part de la Maison, en réduisant considérablement leur empreinte carbone.</p></div>",
			"modalTitle": "EMBALLAGE CADEAU"
		},
		"paymentInfoModal": {
			"modalContent": "<div><p>Le paiement peut s'effectuer par carte bancaire, virement bancaire, Paypal ou ApplePay avec une adresse de facturation et de livraison valide.</p> <p><b>Carte bancaire</b>:</p><ul> <li>nous acceptons les cartes CB, Visa, Mastercard et American Express.</li> <li>Toutes les transactions effectuées sur notre site sont sécurisées, ces données faisant l'objet d'un cryptage SSL.</li> <li>En fonction de votre banque, votre paiement peut faire l'objet d'une vérification 3D Secure.</li></ul><p>Pour toute question, contactez le Service Clients au 09 77 40 40 77.</p></div>",
			"modalTitle": "Informations sur le paiement"
		},
		"returnModal": {
			"modalContent": "<div><ul><li>- Échange ou remboursement offert sous 30 jours à compter de la date de réception de votre commande.</li><li>- A l'occasion des fêtes de fin d'année, les commandes effectuées après le 22 octobre, seront échangeables ou remboursables jusqu'au 31 janvier 2021. </li></ul><h2> Pour retourner votre produit, vous avez trois options :</h2><ul><li>- Rendez-vous dans l’un des magasins Louis Vuitton en France métropolitaine, échange uniquement. (momentanément indisponible)</li><li>- Connectez-vous à votre compte My LV sur notre site, activez l’étiquette de retour de notre transporteur prépayée incluse dans votre colis et remettez votre colis au transporteur:</li><ul><li>1)Chronopost: déposez votre colis dans le bureau de Poste, l’agence ou le point de relais Chronopost de votre choix.</li><li>2) UPS: Déposer votre colis en point relais UPS</li></ul><li>- Appelez notre Service Clients : le transporteur collectera votre colis à la date, l’heure et sur le lieu de votre choix.</li></ul><h2>ÉCHANGES ET RETOURS</h2><ul><li>- A l'occasion des fêtes de fin d'année, les commandes effectuées après le 22 octobre, seront échangeables ou remboursables jusqu'au 31 janvier 2021.</li></ul><h2> Conditions d’échanges et remboursements :</h2><ul><li>- Aucun échange ni remboursement ne sera accepté sur les produits personnalisés, gravés ou sur-mesure.</li><li>- Le remboursement est au bénéfice exclusif de l’acheteur initial sur le moyen de paiement utilisé pour l’achat initial. Le temps de traitement d’un remboursement peut prendre jusqu’à 14 jours à partir de la réception du produit retourné.</li></ul></div>",
			"modalTitle": "Informations sur les retours"
		},
		"shippingModal": {
			"modalContent": "<div><p><b> En raison des circonstances sanitaires actuelles, veuillez exceptionnellement compter un délai de livraison supplémentaire.</b> Livraison offerte estimée dans un délai d’environ 2 à 3 jours ouvrés après votre commande effectuée à l’exception de la Corse livrée en 6 à 8 jours ouvrés.<br><br> Vos articles sont livrés partout en France, à l’exception des DOM-TOM et de la principauté de Monaco.<br>Les parfums sont livrés partout en France, à l’exception de la Corse, des DOM-TOM et de la principauté de Monaco (pour toute livraison à Monaco, veuillez commander sur le site de Monaco (EN)).<br><a href=''>Pour toute livraison à Monaco, veuillez commander sur le site de <u>Monaco (EN)</u></a></p><h2>« Livraison en semaine »</h2><p>Livraison UPS offerte du lundi au vendredi entre 8h et 18h, estimée dans un délai d’environ 2 à 3jours ouvrés après votre commande effectuée à l’exception de la Corse livrée en 6 à 8jours ouvrés.<br> Si votre commande comprend plusieurs produits, la livraison est susceptiblede vous parvenir en plusieurs envois et numéros de transport.Vous recevrez donc plusieurs factures correspondant à chacun des envois.</p><h2>« Livraison sur créneau »</h2><p> Livraison sur créneau offerte à Paris (75) et dans le département des Hauts-de-Seine (92)du lundi au samedi entre 10h00 et 21h00. Un coursier vous livrera votre commande surle créneau de 2h de votre choix.<br>Ce service vous permet d’être livré en fonction de  l'horaire à laquelle vous avez passé votre commande :le jour même, le lendemain ou le jour d'après. Pour davantage de flexibilité, vous aurez aussil’option d’être rappelé afin d’organiser une livraison dans les jours suivants.</p><h2>« Click &amp; Collect »</h2><p>Ce service est offert et disponible dans : la Maison des Champs-Elysées (accueil au 60 rue de Bassano, 75008, du lundi au samedi de 10h à 20h et le dimanche de 11h à 19h) ainsi que les magasinsde Montaigne, Le Bon Marché et Saint-Germain-des-Prés.</p><br>Livraison offerte, estimée dans un délai d'environ 3 jours ouvrés après votre commande effectuée. La date de mise à disposition dans nos magasins est indiquée à l’étape « Livraison » de votre commande.<p></p><p><b>Lors du retrait de l’article :</b></p><ul><li> Présentez l’email ou le SMS ainsi qu’une pièce d’identité en cours de validité.</li><li> Le magasin se réserve le droit de vérifier la carte de paiement utilisée pour le paiement de la commande.</li><li> L’article acheté sera remis au client contre signature d’un bon de retrait.</li></ul><p><b>Une personne de votre choix peut venir retirer l’article à votre place.<br>Il lui sera demandé de se munir de :</b></p><ul><li> Sa propre pièce d’identité,</li><li> Votre pièce d’identité,</li><li> Votre lettre signée par vos soins autorisant cette personne à venir retirer le bien en votre nom et pour votre compte</li><li> L’email ou le SMS de mise à disposition de l’article en magasin que vous aurez reçu</li></ul><p> Le magasin pourra effectuer des copies de l’ensemble de ces pièces afin d’assurer votre sécuritéet de prévenir toute utilisation frauduleuse de votre identité et/ou de vos moyens de paiement.<br>Si vous récupérez une commande de prêt-à-porter en magasin, veuillez vérifier <b><a href='https://fr.louisvuitton.com/fra-fr/rechercher/frane#stores'>ici</a></b> que celui-ci dispose de l’offre prêt-à-porter afin de pouvoir essayer les pièces commandées dans les salons d’essayage.</p><p>Si votre commande comprend des produits de différentes catégories, la commande est susceptible d’être préparée en différé. Nous vous recommandons de venir récupérer votre commande une fois celle-ci préparée dans son ensemble.<br><b>Votre commande</b><br><br>Quelle que soit la méthode de livraison choisie, Louis Vuitton vous informera de l’avancement de votre commande par email et depuis votre espace My LV. Vous pouvez également contacter nos conseillers +33 9 77 40 40 77<br>Notre livreur est susceptible de controler votre identité et ou de vous demander une signature contre remise. Merci de préparer à cet effet une pièce d'identité avec photo, et nous vous encourageons à préparer votre propre stylo pour la signature lors de la réception de votre produit.<br>Le délai indicatif de livraison des produits personnalisés est de 8 semaines à 12 semaines. Exemples : « My LV Heritage », « My LV World Tour », « Now Yours Prêt-à-porter », « Now Yours Souliers ».</p><ul><li> - Les produits « My LV Heritage » et « My LV World Tour » sont fabriqués sur commande, en commandant aujourd'hui, votre commande arrivera après les fêtes de fin d'année.</li><li>- Les sneakers Runaway personnalisés en cuir de veau sont fabriqués sur commande, en commandant aujourd'hui, votre commande arrivera après les fêtes de fin d'année.</li><li>- Les sneakers Runaway personnalisés en alligator sont fabriqués sur commande, en commandant aujourd'hui, votre commande arrivera après les fêtes de fin d'année.</li><li>- Les produits de prêt-à-porter personnalisés « My LV Heritage » et « My LV World Tour » sont fabriqués sur commande, votre commande arrivera après les fêtes de fin d'année.</li> </ul><p>Pour une seule et même commande de plusieurs articles, vous avez la possibilité de faire livrer à plusieurs adresses. Il vous suffit de cocher « oui » à l’étape « Livraison » après validation du panier.<br>Tous nos produits sont envoyés dans un coffret cadeau, à l’exception des recharges d’agenda.</p> </div>",
			"modalTitle": "INFORMATIONS SUR LA LIVRAISON"
		}
	},
	"en": {
		"packageModal": {
			"modalContent": "<div><p>All Louis Vuitton orders are delivered in <u>gift packaging.</u><br>Louis Vuitton gift wrapping is available in a color called \"Safran Impérial\" which is enhanced with blue, a historic complementary color already used for the first personalizations from 1854 but also for many years for the ribbons of the House. This combination of shades reveals a signature that is both contemporary and timeless, echoing the golden age of travel.<br>Produced from FSC-certified sustainable forests and comprising 40% recycled fibers, our boxes delivered flat make it possible to optimize the Maison’s commitment to sustainable development, by considerably reducing their carbon footprint.</p></div>",
			"modalTitle": "GIFT WRAP"
		},
		"paymentInfoModal": {
			"modalContent": "<div><p>Payment can be made by credit card, wire transfer, Paypal or ApplePay with a valid billing and delivery address.</p> <p><b>Bank card</b>:</p><ul> <li>we accept CB, Visa, Mastercard and American Express cards.</li> <li>All transactions made on our site are secure, this data being SSL encrypted.</li> <li>Depending on your bank, your payment may be subject to 3D Secure verification.</li></ul><p>For any questions, contact Customer Service on 09 77 40 40 77.</p></div>",
			"modalTitle": "Payment Information"
		},
		"returnModal": {
			"modalContent": "<div><ul><li>- Exchange or refund offered within 30 days from the date of receipt of your order.</li><li>- For the holiday season, orders placed after October 22 will be exchangeable or refundable until January 31, 2021. </li></ul><h2> To return your product, you have three options:</h2><ul><li>- Go to one of the Louis Vuitton stores in mainland France, exchange only. (temporarily unavailable)</li><li>- Connect to your My LV account on our site, activate the return label from our prepaid carrier included in your package and hand your package to the carrier:</li><ul><li>1) Chronopost: drop off your package at the post office, branch or Chronopost point of your choice.</li><li>2) UPS: Drop off your package at a UPS relay point</li></ul><li>- Call our Customer Service: the carrier will collect your package on the date, time and location of your choice.</li></ul><h2>EXCHANGES AND RETURNS</h2><ul><li>- For the holiday season, orders made after October 22, will be exchangeable or refundable until October 31 January 2021.</li></ul><h2> Exchange and refund conditions:</h2><ul><li>- No exchange or refund will be accepted on personalized, engraved or made-to-measure products.</li><li>- The refund is for the exclusive benefit of the initial purchaser on the means of payment used for the initial purchase. It may take up to 14 days to process a refund from receipt of the returned product.</li></ul></div>",
			"modalTitle": "Returns Information"
		},
		"shippingModal": {
			"modalContent": "",
			"modalTitle": "Delivery information"
		}
	}
}
</i18n>
