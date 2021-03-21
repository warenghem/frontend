<template>
  <v-dialog
    v-model="isModal"
    transition="dialog-bottom-transition"
    @click:outside="closeModal"
    content-class="bg-white bottom-dialog"
    style='z-index:300001;'
    scrollable
  >
    <v-card style="max-width:inherit">
      <div style="height: 50px;" class="d-flex justify-space-between align-center border-bottom-2 bar-fixed rounded-t-lg">
          <div class="sub-title pl-3">{{currentModal.modalTitle}}</div>
          <v-btn
              text
              color="black"
              style="font-size: 26px"
              class="px-0 h-100 border-left-2 rounded-0"
               @click="closeModal"
          >
              <v-icon>{{ svgPath }}</v-icon>
          </v-btn>
      </div>
      <div style="transform: translateY(50px);">
        <Payments class="pvw bgcard" v-if="current === 'paymentInfoModal'"/>
        <Shipping class="pvw bgcard" v-if="current === 'shippingModal'"/>
        <div v-if="current === 'packageModal'">
            <div class="pvw bgcard">
                <div v-html="currentModal.modalContent" class="modalContent"></div>
            </div>
        </div>
        <div class="pvw">
            <CustomerServicesLayout :closeModal="closeModal"/>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
    import { mdiClose } from '@mdi/js'
    export default {
        name: "info-modal",
        props: ['closeModal'],
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
            if (this.current === 'packageModal') {
                this.currentModal.modalTitle = this.$t('packageModal.modalTitle');
                this.currentModal.modalContent = this.$t('packageModal.modalContent')
            }else if(this.current === 'shippingModal'){
                this.currentModal.modalTitle = this.$t('shippingModal.modalTitle');
            }else if(this.current === 'paymentInfoModal'){
                this.currentModal.modalTitle = this.$t('paymentInfoModal.modalTitle');
            }
        }
    }
</script>
<i18n>
{
	"en": {
		"packageModal": {
			"modalContent": "<div><p>All Warenghem orders are delivered in <u>ecological packaging.</u></p></div>",
			"modalTitle": "Eco-friendly packaging"
		},
		"paymentInfoModal": {
			"modalTitle": "100% secure payment "
		},
		"question": "A question?",
		"shippingModal": {
			"modalTitle": "Shipping and returns"
		}
	},
	"fr": {
		"packageModal": {
			"modalContent": "<div><p>Toutes les commandes Warenghem sont livrées dans un <u>emballage écologique.</u></p></div>",
			"modalTitle": "Emballage écologique"
		},
		"paymentInfoModal": {
			"modalTitle": "Paiement 100% sécurisés"
		},
		"question": "Une question?",
		"shippingModal": {
			"modalTitle": "Livraison et retours"
		}
	}
}
</i18n>