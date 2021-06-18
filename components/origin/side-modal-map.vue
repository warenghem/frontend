<template>
  <v-dialog
    v-model="$store.state.modals.mainModal"
    max-width="500px"
    @click:outside="$store.state.modals.mainModal = false"
    content-class="border-left-2 custom-side-modal rounded-0"
    style='z-index:300002;'
    transition="slide-fade"
    scrollable
  >
    <v-card>
      <div style="height: 50px;" class="d-flex justify-space-between align-center border-bottom-2">
          <div class="text-center sub-title pl-3">{{provider.name}}</div>
          <v-btn
                text
                color="black"
                style="font-size: 26px"
                class="px-0 h-100 border-left-2 rounded-0"
                @click="$store.state.modals.mainModal = false"
          >
              <v-icon>{{ svgPath }}</v-icon>
          </v-btn>
      </div>
      <v-card-text class="pvw">
        <div v-html="provider.description">
        </div>
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
            }
        },
        props: {
            isModal: {
                type: Boolean,
                default: false
            },
            current: {
                type: Boolean,
                default: false
            },
            provider: {
                type: Object,
                default: () => ({}),
            }
        },
        methods: {
            closeModal() {
                this.$emit('closeModal')
            }
        },
    }
</script>