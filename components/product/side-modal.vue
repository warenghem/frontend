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
        <div v-html="product.additionalProperty[1].care">
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
            },
            product: {
                type: Object,
                default: () => {
                }
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

