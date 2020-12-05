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
          <h4>{{$t('modalTitle')}}</h4>
          <span>
              <v-icon @click="closeModal">mdi-close</v-icon>
            </span>

        </div>

      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-4">
        <div v-html="$t('modalContent')" class="modalContent"></div>
      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>
    export default {
        name: "shipping-modal",
        props: {
            isModal: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            closeModal() {
                this.$emit('closeModal')
            }
        },
        i18n: {
            messages: {
                en: {

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
                fr: {
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
                }
            }
        }
    }
</script>
