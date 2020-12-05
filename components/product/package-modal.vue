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
        name: "package-modal",
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
                },
                fr: {
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
    }
</script>
