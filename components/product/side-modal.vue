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
          <h4>{{currentModal.modalTitle}}</h4>
          <span>
              <v-icon @click="closeModal">mdi-close</v-icon>
            </span>

        </div>

      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-4" v-if="current === 'productCare'">
        <div v-html="product.additionalProperty[1].care">
        </div>
      </v-card-text>
      <v-card-text class="pa-4" v-if="current === 'colorSide'">
        <v-row>
          <v-col lg="6" v-for="item in product.colors"
                 :key="item.id">
            <input type="radio" hidden :id="'color_'+item.id" :value="item.id"
                    class="radioSelect"
                    @input="$emit('colorSelect',$event.target.value)"
                   name="colorSelect"
            >
            <label :for="'color_'+item.id">
              <v-card
                class="mx-auto"
                max-width="344"

              >
                <v-img
                  :src="product.image.find(img => img.color === item.id).src"
                  height="200px"
                  class="mx-2 bg-light"
                  style="top:7px"
                ></v-img>

                <v-card-subtitle class="pt-4 pb-1">
                  {{item.name}}
                </v-card-subtitle>
                <v-card-subtitle class="pb-2 pt-0">
                  <v-icon x-small :class="{'available':product.offers.availability}">mdi-circle</v-icon>

                  {{product.offers.availability?$t('product.stock'):$t('product.notInStock')}}
                </v-card-subtitle>
              </v-card>
            </label>

          </v-col>

        </v-row>
      </v-card-text>
      <v-card-text class="pa-4" v-if="current === 'materialSide'">
        <v-row>
          <v-col lg="4" v-for="item in product.material"
                 :key="item.id">
             <input type="radio"
                   hidden
                   :id="'mat_'+item.id"
                   :value="item.id"
                   class="radioSelect"
                     name="matSelect"
                    @input="$emit('materialSelect',$event.target.value)"
                   >
            <label :for="'mat_'+item.id">
              <v-card
                class="mx-auto"
                max-width="344"

              >
                <v-img
                  :src="item.icon"
                  height="100px"
                  class="mx-2 bg-light"
                  style="top:7px"
                ></v-img>

                <v-card-subtitle class="pt-4 pb-1">
                  {{item.name}}
                </v-card-subtitle>
              </v-card>
            </label>

          </v-col>

        </v-row>
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
            },
        },
        data() {
            return {
                currentModal: {
                    modalTitle: '',
                    modalContent: ''
                },
            }
        },
        i18n: {
            messages: {
                en: {},
                fr: {}
            }
        },
        updated() {
            if (this.current === 'productCare') {
                this.currentModal.modalTitle = this.$t('product.materialTitle');
            } else if (this.current === 'colorSide') {
                this.currentModal.modalTitle = this.$t('product.color');
            } else if (this.current === 'materialSide') {
                this.currentModal.modalTitle = this.$t('product.material');
            }
        },

    }
</script>

<style lang="scss">

.radioSelect:checked + label {
  .v-card{
    border: 2px solid #2c3338;
  }

}
</style>

