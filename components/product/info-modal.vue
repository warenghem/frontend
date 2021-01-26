<template>
  <v-dialog
    v-model="isModal"
    transition="dialog-bottom-transition"
    @click:outside="closeModal"
    content-class="bg-white bottom-dialog rounded-0"
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
            }else if(this.current === 'packageModal'){
                this.currentModal.modalTitle = this.$t('packageModal.modalTitle');
                this.currentModal.modalContent = this.$t('packageModal.modalContent')
            }
        }
    }
</script>
<i18n>
{
   "fr":{
      "packageModal":{
         "modalContent":"<div><p>Toutes les commandes Warenghem sont livrées dans un <u>emballage écologique.</u></p></div>",
         "modalTitle":"Emballage écologique"
      },
      "paymentInfoModal":{
         "modalContent":"<div><p><b>Le paiement peut s'effectuer par carte bancaire ou Paypal avec une adresse de facturation et de livraison valide.</b></p><p><b>Carte bancaire</b>:</p><ul><li>Nous acceptons les cartes CB, Visa, Mastercard et American Express.</li> <li>Toutes les transactions effectuées sur notre site sont sécurisées, ces données faisant l'objet d'un cryptage SSL.</li> <li>En fonction de votre banque, votre paiement peut faire l'objet d'une vérification 3D Secure.</li></ul><br><p><b>Pour toute question, veuillez nous contacter par mail, chat, ou sur les réseaux sociaux.</b></p></br></div>",
         "modalTitle":"Informations sur le paiement"
      },
      "shippingModal":{
         "modalContent":"<div><b><p>Échange ou remboursement sous 14 jours à compter de la date de réception de votre commande.</p></b><ul><li>A l'occasion des fêtes de fin d'année, les commandes effectuées après le 31 novembre, seront échangeables ou remboursables jusqu'au 5 janvier 2021.</li><li>Aucun échange ni remboursement ne sera accepté sur les produits personnalisés, gravés ou sur-mesure.</li><li>Le remboursement est au bénéfice exclusif de l’acheteur initial sur le moyen de paiement utilisé pour l’achat initial. Le temps de traitement d’un remboursement peut prendre jusqu’à 14 jours à partir de la réception du produit retourné.</li><li>Livraison estimée dans un délai d’environ 2 à 3 jours ouvrés après votre commande effectuée à l’exception de la Corse livrée en 6 à 8 jours ouvrés.<br><br><p><b>Vos articles sont livrés partout en France, aux DOM-TOM et à la principauté de Monaco.</b></p></li></ul><b>« Livraison en semaine »</b><p>Livraison UPS du lundi au vendredi entre 8h et 18h, estimée dans un délai d’environ 2 à 3jours ouvrés après votre commande effectuée à l’exception de la Corse livrée en 6 à 8jours ouvrés.</p><b>« Livraison sur créneau »</b><p> Livraison sur créneau à Paris (75) et dans le département des Hauts-de-Seine (92) du lundi au samedi entre 10h00 et 21h00. Un coursier vous livrera votre commande sur le créneau de 2h de votre choix.<br>Ce service vous permet d’être livré en fonction de  l'horaire à laquelle vous avez passé votre commande : le jour même, le lendemain ou le jour d'après. Pour davantage de flexibilité, vous aurez aussi l’option d’être rappelé afin d’organiser une livraison dans les jours suivants.</p></div>",
         "modalTitle":"Informations sur la livraison et les retours"
      }
   }
}
</i18n>