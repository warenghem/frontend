<template>
  <v-dialog
    v-model="isModal"
    max-width="500px"
    @click:outside="closeModal"
    content-class="bg-white custom-side-modal"
    style='z-index:300002;'
    transition="slide-fade"
    scrollable
  >
    <v-card>
      <v-card-title>
        <div class="d-flex justify-space-between align-center w-100">
          <h4>{{$t('product.materialTitle')}}</h4>
          <span>
              <v-icon @click="closeModal">mdi-close</v-icon>
            </span>

        </div>

      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-4">
        <div>
          <div><p>Pour préserver au fil des ans la beauté de cet article en toile Monogram Éclipse, nous
            vous recommandons de suivre ces conseils d’entretien&nbsp;:</p>
            <ul>
              <li>Veillez à ne pas érafler ou frotter votre article contre des surfaces abrasives, en particulier les
                finitions en cuir.
              </li>
              <li>Nous vous conseillons de protéger votre article de l’humidité et de le maintenir à l’abri des sources
                directes de chaleur, comme les radiateurs et l’habitacle des voitures en été.
              </li>
              <li>Évitez de mettre votre article en contact avec des liquides, de la crème et du désinfectant pour les
                mains,
                du maquillage et du parfum.
              </li>
              <li>Pour nettoyer votre article, essuyez délicatement la toile enduite avec un chiffon doux imbibé d’eau
                légèrement savonneuse et les finitions en cuir noir avec un chiffon doux et sec.
              </li>
              <li>La surface adhérente, constituée de ventouses microscopiques, peut être réactivée. À l’usage, la
                surface
                peut naturellement perdre son adhérence. Il est possible d’y remédier en nettoyant doucement la surface
                avec
                un chiffon humidifié d’eau et en la laissant sécher intégralement pendant 10&nbsp;minutes avant de
                replacer le
                téléphone portable. L’étui a retrouvé son adhérence et le contact avec votre téléphone sera à nouveau
                parfait.
              </li>
              <li>Quand vous ne vous en servez pas, rangez l’article dans la feutrine fournie lors de l’achat. Nous vous
                conseillons de le conserver à l’abri des températures élevées, de l’humidité excessive ou des zones non
                ventilées.
              </li>
            </ul>
            <p><br>
              <br>
              Pour toute question relative à votre article, veuillez prendre contact avec un magasin Louis Vuitton.</p>
          </div>
        </div>
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
                default: 'productCare'
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
                en: {},
                fr: {}
            }
        },
        updated() {

        }
    }
</script>

<style scoped>

</style>

