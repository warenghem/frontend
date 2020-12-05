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
        <div v-html="$t('modalContent')"></div>
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
        },
        methods:{
            closeModal(){
                this.$emit('closeModal')
            }
        },
         i18n: {
            messages: {
                en: {
                    modalTitle:"Payment information",
                    modalContent: "<div> <p> Payment can be made by credit card, bank transfer,"+
                       "Paypal or ApplePay with a valid billing and shipping address. </p>" +
                       "<p> <b> Bank card </b>: </p> <ul>" +
                        "<li> we accept CB, Visa, Mastercard and American Express cards. </li>" +
                        "<li> All transactions made on our site are secure, this data is SSL encrypted. </li>" +
                        "<li> Depending on your bank, your payment may be subject to 3D Secure verification. </li> </ul>" +
                        "<p> For any questions, contact Customer Service on 09 77 40 40 77. </p> </div>"
                },
                fr: {
                    modalTitle:"Informations sur le paiement",
                    modalContent:"<div><p>Le paiement peut s'effectuer par carte bancaire, virement bancaire, " +
                        "Paypal ou ApplePay avec une adresse de facturation et de livraison valide.</p>" +
                        "<p><b>Carte bancaire</b>:</p><ul>" +
                        "<li>nous acceptons les cartes CB, Visa, Mastercard et American Express.</li>" +
                        "<li>Toutes les transactions effectuées sur notre site sont sécurisées, ces données faisant l'objet d'un cryptage SSL.</li>" +
                        "<li>En fonction de votre banque, votre paiement peut faire l'objet d'une vérification 3D Secure.</li></ul>" +
                        "<p>Pour toute question, contactez le Service Clients au 09 77 40 40 77.</p></div>",
                }
            }
        }
    }
</script>

<style scoped>

</style>
