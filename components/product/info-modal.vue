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
      <v-card-title>
        <div class="d-flex justify-space-between align-center w-100">
          <h4>{{currentModal.modalTitle}}</h4>
          <span>
              <v-icon @click="closeModal">mdi-close</v-icon>
            </span>

        </div>

      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-4">
        <div v-html="currentModal.modalContent" class="modalContent"></div>
      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>
    export default {
        name: "info-modal",
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
        data() {
            return {
                currentModal: {
                    modalTitle: '',
                    modalContent: ''
                }
            }
        },
        i18n: {
            messages: {
                en: {
                    paymentInfoModal: {
                        modalTitle: "Payment information",
                        modalContent: "<div> <p> Payment can be made by credit card, bank transfer," +
                            "Paypal or ApplePay with a valid billing and shipping address. </p>" +
                            "<p> <b> Bank card </b>: </p> <ul>" +
                            "<li> we accept CB, Visa, Mastercard and American Express cards. </li>" +
                            "<li> All transactions made on our site are secure, this data is SSL encrypted. </li>" +
                            "<li> Depending on your bank, your payment may be subject to 3D Secure verification. </li> </ul>" +
                            "<p> For any questions, contact Customer Service on 09 77 40 40 77. </p> </div>"
                    },
                    shippingModal: {
                        modalTitle: "DELIVERY INFORMATION",
                        modalContent: "<div> <p> <b> Due to current health circumstances, please" +
                            "exceptionally allow an additional delivery time. </b> Estimated free delivery" +
                            "within approximately 2 to 3 working days after your order has been placed, except for the" +
                            "Corsica delivered in 6 to 8 working days. <br> <br> Your articles are delivered everywhere in France," +
                            "With the exception of the French overseas departments and territories and the Principality of Monaco. <br> Perfumes are delivered everywhere" +
                            "in France, with the exception of Corsica, DOM-TOM and the Principality of Monaco" +
                            "(for any delivery to Monaco, please order on the Monaco website (EN)). <br>" +
                            "<a href=''> For any delivery to Monaco, please order on the <u> Monaco (EN) </u> </a> website" +
                            "</p> <h2> Delivery during the week </h2> <p>" +
                            "UPS delivery available Monday to Friday between 8 a.m. and 6 p.m., estimated to take around 2 to 3" +
                            "working days after your order made with the exception of Corsica delivered in 6 to 8" +
                            "working days. <br> If your order includes several products, delivery is likely" +
                            "to reach you in several shipments and transport numbers." +
                            "You will therefore receive several invoices corresponding to each shipment. </p>" +
                            "<h2> Time slot delivery </h2>" +
                            "<p> Free time slot delivery in Paris (75) and in the Hauts-de-Seine (92)" +
                            "from Monday to Saturday between 10h00 and 21h00. A courier will deliver your order to you on" +
                            "the 2 hour slot of your choice. <br>" +
                            "This service allows you to be delivered according to the time at which you placed your order:" +
                            "the same day, the next day or the day after. For more flexibility, you will also have" +
                            "the option of being called back to arrange a delivery in the following days." +
                            "</p> <h2> Click & amp; Collect </h2>" +
                            "<p> This service is offered and available in: the Maison des Champs-Elysées (reception at 60 rue de Bassano," +
                            "75008, Monday to Saturday from 10 a.m. to 8 p.m. and Sunday from 11 a.m. to 7 p.m.) as well as the shops" +
                            "from Montaigne, Le Bon Marché and Saint-Germain-des-Prés. </p> <br>" +
                            "Free delivery, estimated within approximately 3 working days after your order has been placed." +
                            "The date of availability in our stores is indicated in the Delivery step of your order." +
                            "<p> </p> <p> <b> When checking out the item: </b> </p>" +
                            "<ul> <li> Present email or text message and a valid ID. </li>" +
                            "<li> The store reserves the right to verify the payment card used for the payment of the order. </li>" +
                            "<li> The purchased item will be returned to the customer against signature of a withdrawal slip. </li> </ul>" +
                            "<p> <b> A person of your choice can come and collect the item for you. <br>" +
                            "He will be asked to bring: </b> </p>" +
                            "<ul> <li> His own ID, </li> <li> Your ID, </li>" +
                            "<li> Your letter signed by you authorizing this person to come and collect the goods in your name and on your behalf </li>" +
                            "<li> The email or text message that you received in store for the item </li>" +
                            "</ul> <p> The store may make copies of all of these parts to ensure your safety" +
                            "and to prevent any fraudulent use of your identity and / or your means of payment." +
                            "<br> If you pick up a ready-to-wear order in store, please check <b>" +
                            "<a href='https://fr.louisvuitton.com/fra-fr/rechercher/frane#stores'> here </a>" +
                            "</b> that he has the ready-to-wear offer so that he can try out" +
                            "items ordered in fitting rooms. </p>" +
                            "<p> If your order includes products from different categories, the order is likely to be" +
                            "prepared offline. We recommend that you come and collect your order once" +
                            "this one prepared as a whole. <br> <b> Your order </b> <br>" +
                            "<br> Whatever delivery method you choose, Louis Vuitton will inform you" +
                            "the progress of your order by email and from your My LV space." +
                            "You can also contact our advisers +33 9 77 40 40 77" +
                            "<br> Our delivery man is likely to check your identity and / or you" +
                            "request a signature against delivery. Please prepare a document for this purpose" +
                            "photo ID, and we encourage you to prepare your own pen" +
                            "for the signature upon receipt of your product. <br> The indicative delivery time" +
                            "Custom products is 8 weeks to 12 weeks." +
                            "Examples: My LV Heritage , My LV World Tour , Now Yours Prêt-à-porter , Now Yours Souliers . </p>" +
                            "<ul> <li> - The 'My LV Heritage' and 'My LV World Tour' products are made to order," +
                            "by ordering today, your order will arrive after the holiday season. </li>" +
                            "<li> - Runaway custom calfskin sneakers are made to order," +
                            "by ordering today, your order will arrive after the holiday season. </li>" +
                            "<li> - Runaway custom alligator sneakers are made to order," +
                            "by ordering today, your order will arrive after the holiday season. </li>" +
                            "<li> - The personalized ready-to-wear products My LV Heritage and My LV World Tour " +
                            "are made to order, your order will arrive after the holiday season. </li>" +
                            "</ul> <p> For one and the same order of several items," +
                            "you have the possibility of having it delivered to several addresses." +
                            "You just need to check yes in the Delivery step after validation of the basket. <br>" +
                            "All our products are sent in a gift box, except for diary refills. </p> </div>",
                    },
                    returnModal: {
                        modalTitle: "Information on returns",
                        modalContent: "<div> <ul> <li> - Exchange or refund offered within 30 days from the" +
                            "date of receipt of your order. </li> <li> - On the occasion of the end of year celebrations, the" +
                            "orders made after October 22, will be exchangeable or refundable until" +
                            "January 31, 2021. </li></ul> <h2> To return your product, you have three options: </h2> <ul>" +
                            "<li> - Visit one of the Louis Vuitton stores in mainland France, exchange only." +
                            "(temporarily unavailable) </li> <li> - Log into your My LV account on our site, activate" +
                            "the return label from our prepaid carrier included in your package and hand over your package" +
                            "to the carrier: </li> <ul> <li> 1) Chronopost: drop off your package at the post office," +
                            "the agency or the Chronopost relay point of your choice. </li>" +
                            "<li> 2) UPS: Drop off your package at a UPS relay point </li> </ul>" +
                            "<li> - Call our Customer Service: the carrier will collect your package on the date," +
                            "The time and place of your choice. </li> </ul> <h2> EXCHANGES AND RETURNS </h2> <ul>" +
                            "<li> - For the holiday season, orders made after October 22," +
                            "will be exchangeable or refundable until January 31, 2021. </li> </ul>" +
                            "<h2> Exchange and refund conditions: </h2> <ul>" +
                            "<li> - No exchange or refund will be accepted on personalized products," +
                            "engraved or custom-made. </li> <li> - The refund is for the exclusive benefit of the buyer" +
                            "initial on the payment method used for the initial purchase. Processing time" +
                            "A refund may take up to 14 days from receipt of the returned product. </li>" +
                            "</ul> </div>",
                    },
                    packageModal: {
                        modalTitle: "GIFT PACKAGING",
                        modalContent: "<div> <p> All Louis Vuitton orders are delivered in a" +
                            "<u> gift wrapping. </u> <br> Louis Vuitton gift wrapping is available in one color" +
                            "baptized Safran Impérial which is highlighted in blue, a historical complementary color" +
                            "already used for the first customizations from 1854 but also since" +
                            "many years for the Maison's ribbons. This combination of colors reveals" +
                            "a signature that is both contemporary and timeless, echoing the golden age of" +
                            "travel. <br> From sustainable forests certified FSC and comprising 40% recycled fibers," +
                            "our boxes delivered flat make it possible to optimize a development commitment" +
                            "sustainable on the part of the Maison, by considerably reducing their carbon footprint. </p> </div>",
                    }

                },
                fr: {

                    paymentInfoModal: {
                        modalTitle: "Informations sur le paiement",
                        modalContent: "<div><p>Le paiement peut s'effectuer par carte bancaire, virement bancaire, " +
                            "Paypal ou ApplePay avec une adresse de facturation et de livraison valide.</p>" +
                            "<p><b>Carte bancaire</b>:</p><ul>" +
                            "<li>nous acceptons les cartes CB, Visa, Mastercard et American Express.</li>" +
                            "<li>Toutes les transactions effectuées sur notre site sont sécurisées, ces données faisant l'objet d'un cryptage SSL.</li>" +
                            "<li>En fonction de votre banque, votre paiement peut faire l'objet d'une vérification 3D Secure.</li></ul>" +
                            "<p>Pour toute question, contactez le Service Clients au 09 77 40 40 77.</p></div>",
                    },
                    shippingModal: {
                        modalTitle: "INFORMATIONS SUR LA LIVRAISON",
                        modalContent: "<div><p><b> En raison des circonstances sanitaires actuelles, veuillez " +
                            "exceptionnellement compter un délai de livraison supplémentaire.</b> Livraison offerte estimée" +
                            "dans un délai d’environ 2 à 3 jours ouvrés après votre commande effectuée à l’exception de la" +
                            "Corse livrée en 6 à 8 jours ouvrés.<br><br> Vos articles sont livrés partout en France," +
                            "à l’exception des DOM-TOM et de la principauté de Monaco.<br>Les parfums sont livrés partout" +
                            "en France, à l’exception de la Corse, des DOM-TOM et de la principauté de Monaco " +
                            "(pour toute livraison à Monaco, veuillez commander sur le site de Monaco (EN)).<br>" +
                            "<a href=''>Pour toute livraison à Monaco, veuillez commander sur le site de <u>Monaco (EN)</u></a>" +
                            "</p><h2>« Livraison en semaine »</h2><p>" +
                            "Livraison UPS offerte du lundi au vendredi entre 8h et 18h, estimée dans un délai d’environ 2 à 3" +
                            "jours ouvrés après votre commande effectuée à l’exception de la Corse livrée en 6 à 8" +
                            "jours ouvrés.<br> Si votre commande comprend plusieurs produits, la livraison est susceptible" +
                            "de vous parvenir en plusieurs envois et numéros de transport." +
                            "Vous recevrez donc plusieurs factures correspondant à chacun des envois.</p>" +
                            "<h2>« Livraison sur créneau »</h2>" +
                            "<p> Livraison sur créneau offerte à Paris (75) et dans le département des Hauts-de-Seine (92)" +
                            "du lundi au samedi entre 10h00 et 21h00. Un coursier vous livrera votre commande sur" +
                            "le créneau de 2h de votre choix.<br>" +
                            "Ce service vous permet d’être livré en fonction de  l'horaire à laquelle vous avez passé votre commande :" +
                            "le jour même, le lendemain ou le jour d'après. Pour davantage de flexibilité, vous aurez aussi" +
                            "l’option d’être rappelé afin d’organiser une livraison dans les jours suivants." +
                            "</p><h2>« Click &amp; Collect »</h2>" +
                            "<p>Ce service est offert et disponible dans : la Maison des Champs-Elysées (accueil au 60 rue de Bassano, " +
                            "75008, du lundi au samedi de 10h à 20h et le dimanche de 11h à 19h) ainsi que les magasins" +
                            "de Montaigne, Le Bon Marché et Saint-Germain-des-Prés.</p><br>" +
                            "Livraison offerte, estimée dans un délai d'environ 3 jours ouvrés après votre commande effectuée. " +
                            "La date de mise à disposition dans nos magasins est indiquée à l’étape « Livraison » de votre commande." +
                            "<p></p><p><b>Lors du retrait de l’article :</b></p>" +
                            "<ul><li> Présentez l’email ou le SMS ainsi qu’une pièce d’identité en cours de validité.</li>" +
                            "<li> Le magasin se réserve le droit de vérifier la carte de paiement utilisée pour le paiement de la commande.</li>" +
                            "<li> L’article acheté sera remis au client contre signature d’un bon de retrait.</li></ul>" +
                            "<p><b>Une personne de votre choix peut venir retirer l’article à votre place.<br>" +
                            "Il lui sera demandé de se munir de :</b></p>" +
                            "<ul><li> Sa propre pièce d’identité,</li><li> Votre pièce d’identité,</li>" +
                            "<li> Votre lettre signée par vos soins autorisant cette personne à venir retirer le bien en votre nom et pour votre compte</li>" +
                            "<li> L’email ou le SMS de mise à disposition de l’article en magasin que vous aurez reçu</li>" +
                            "</ul><p> Le magasin pourra effectuer des copies de l’ensemble de ces pièces afin d’assurer votre sécurité" +
                            "et de prévenir toute utilisation frauduleuse de votre identité et/ou de vos moyens de paiement." +
                            "<br>Si vous récupérez une commande de prêt-à-porter en magasin, veuillez vérifier <b>" +
                            "<a href='https://fr.louisvuitton.com/fra-fr/rechercher/frane#stores'>ici</a>" +
                            "</b> que celui-ci dispose de l’offre prêt-à-porter afin de pouvoir essayer " +
                            "les pièces commandées dans les salons d’essayage.</p>" +
                            "<p>Si votre commande comprend des produits de différentes catégories, la commande est susceptible d’être " +
                            "préparée en différé. Nous vous recommandons de venir récupérer votre commande une fois " +
                            "celle-ci préparée dans son ensemble.<br><b>Votre commande</b><br>" +
                            "<br>Quelle que soit la méthode de livraison choisie, Louis Vuitton vous informera " +
                            "de l’avancement de votre commande par email et depuis votre espace My LV. " +
                            "Vous pouvez également contacter nos conseillers +33 9 77 40 40 77" +
                            "<br>Notre livreur est susceptible de controler votre identité et ou de vous " +
                            "demander une signature contre remise. Merci de préparer à cet effet une pièce " +
                            "d'identité avec photo, et nous vous encourageons à préparer votre propre stylo " +
                            "pour la signature lors de la réception de votre produit.<br>Le délai indicatif de livraison " +
                            "des produits personnalisés est de 8 semaines à 12 semaines. " +
                            "Exemples : « My LV Heritage », « My LV World Tour », « Now Yours Prêt-à-porter », « Now Yours Souliers ».</p>" +
                            "<ul><li> - Les produits « My LV Heritage » et « My LV World Tour » sont fabriqués sur commande, " +
                            "en commandant aujourd'hui, votre commande arrivera après les fêtes de fin d'année.</li>" +
                            "<li>- Les sneakers Runaway personnalisés en cuir de veau sont fabriqués sur commande, " +
                            "en commandant aujourd'hui, votre commande arrivera après les fêtes de fin d'année.</li>" +
                            "<li>- Les sneakers Runaway personnalisés en alligator sont fabriqués sur commande, " +
                            "en commandant aujourd'hui, votre commande arrivera après les fêtes de fin d'année.</li>" +
                            "<li>- Les produits de prêt-à-porter personnalisés « My LV Heritage » et « My LV World Tour » " +
                            "sont fabriqués sur commande, votre commande arrivera après les fêtes de fin d'année.</li> " +
                            "</ul><p>Pour une seule et même commande de plusieurs articles, " +
                            "vous avez la possibilité de faire livrer à plusieurs adresses. " +
                            "Il vous suffit de cocher « oui » à l’étape « Livraison » après validation du panier.<br>" +
                            "Tous nos produits sont envoyés dans un coffret cadeau, à l’exception des recharges d’agenda.</p> </div>",
                    },
                    returnModal: {
                        modalTitle: "Informations sur les retours",
                        modalContent: "<div><ul><li>- Échange ou remboursement offert sous 30 jours à compter de la " +
                            "date de réception de votre commande.</li><li>- A l'occasion des fêtes de fin d'année, les " +
                            "commandes effectuées après le 22 octobre, seront échangeables ou remboursables jusqu'au " +
                            "31 janvier 2021. </li></ul><h2> Pour retourner votre produit, vous avez trois options :</h2><ul>" +
                            "<li>- Rendez-vous dans l’un des magasins Louis Vuitton en France métropolitaine, échange uniquement. " +
                            "(momentanément indisponible)</li><li>- Connectez-vous à votre compte My LV sur notre site, activez " +
                            "l’étiquette de retour de notre transporteur prépayée incluse dans votre colis et remettez votre colis " +
                            "au transporteur:</li><ul><li>1)Chronopost: déposez votre colis dans le bureau de Poste," +
                            " l’agence ou le point de relais Chronopost de votre choix.</li>" +
                            "<li>2) UPS: Déposer votre colis en point relais UPS</li></ul>" +
                            "<li>- Appelez notre Service Clients : le transporteur collectera votre colis à la date," +
                            " l’heure et sur le lieu de votre choix.</li></ul><h2>ÉCHANGES ET RETOURS</h2><ul>" +
                            "<li>- A l'occasion des fêtes de fin d'année, les commandes effectuées après le 22 octobre, " +
                            "seront échangeables ou remboursables jusqu'au 31 janvier 2021.</li></ul>" +
                            "<h2> Conditions d’échanges et remboursements :</h2><ul>" +
                            "<li>- Aucun échange ni remboursement ne sera accepté sur les produits personnalisés, " +
                            "gravés ou sur-mesure.</li><li>- Le remboursement est au bénéfice exclusif de l’acheteur " +
                            "initial sur le moyen de paiement utilisé pour l’achat initial. Le temps de traitement " +
                            "d’un remboursement peut prendre jusqu’à 14 jours à partir de la réception du produit retourné.</li>" +
                            "</ul></div>",
                    },
                    packageModal: {
                        modalTitle: "EMBALLAGE CADEAU",
                        modalContent: "<div><p>Toutes les commandes Louis Vuitton sont livrées dans un " +
                            "<u>emballage cadeau.</u><br>L'emballage cadeau Louis Vuitton se décline dans une couleur " +
                            "baptisée « Safran Impérial » qui est relevé de bleu, couleur complémentaire historique " +
                            "déjà utilisée pour les premières personnalisations dès 1854 mais aussi depuis de " +
                            "nombreuses années pour les rubans de la Maison. Cette association de teintes révèle " +
                            "une signature à la fois contemporaine et intemporelle comme un écho à l’âge d’or du " +
                            "voyage.<br>Issues de forêts durables certifiées FSC et comprenant 40% de fibres recyclées, " +
                            "nos boîtes livrées à plat permettent d’optimiser un engagement de développement " +
                            "durable de la part de la Maison, en réduisant considérablement leur empreinte carbone.</p></div>",
                    }
                }
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

<style scoped>

</style>
