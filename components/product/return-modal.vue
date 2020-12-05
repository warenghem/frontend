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
        name: "return-modal",
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
                fr: {
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
                }
            }
        }
    }
</script>

<style scoped>

</style>
