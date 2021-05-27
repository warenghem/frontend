<template>
  <v-dialog
    v-model="isModal"
    max-width="500px"
    @click:outside="closeModal"
    content-class="border-left-2 bg-white custom-side-modal rounded-0"
    style='z-index:300002;'
    transition="slide-fade"
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
      <v-card-text class="pvw" v-if="current === 'productCare'">
        <div v-html="product.care">
        </div>
      </v-card-text>
      <v-card-text class="pvw" v-if="current === 'colorSide'">
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
                v-if="product.image.length>0"
              >
                <img
                  :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,ar-4-3/Products/'+ product.image.find(img => img.color === item.id).src +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,ar-4-3/Products/'+ product.image.find(img => img.color === item.id).src +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,ar-4-3/Products/'+ product.image.find(img => img.color === item.id).src +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,ar-4-3/Products/'+ product.image.find(img => img.color === item.id).src +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,ar-4-3/Products/'+ product.image.find(img => img.color === item.id).src +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,ar-4-3/Products/'+ product.image.find(img => img.color === item.id).src +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,ar-4-3/Products/'+ product.image.find(img => img.color === item.id).src +' 2500w,'"
                  :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-640,ar-4-3/Products/'+ product.image.find(img => img.color === item.id).src"
                  class="lazyload mx-2 bg-light w-100"
                  alt=""
                 >
                <div>
                  <v-card-subtitle class="pt-4 pb-1">
                  {{item.name}}
                </v-card-subtitle>
                <v-card-subtitle class="pb-2 pt-0">
                  <v-icon x-small :class="{'available':product.offers.availability}">mdi-circle</v-icon>

                  {{product.offers.availability?$t('product.stock'):$t('product.notInStock')}}
                </v-card-subtitle>
                </div>
              </v-card>
            </label>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text class="pvw" v-if="current === 'materialSide'">
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
    import { mdiClose } from '@mdi/js'
    export default {
        name: "info-modal",
        data() {
            return {
                svgPath: mdiClose,
                currentModal: {
                    modalTitle: '',
                    modalContent: ''
                },
                }
        },
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
    .v-card {
      border: 2px solid #2c3338;
    }
  }
</style>
