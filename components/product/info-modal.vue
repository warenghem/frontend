<template>
  <v-dialog
    v-model="isModal"
    width="700"
    @click:outside="closeModal"
     content-class="bg-white"
  >
    <v-card>
      <v-card-title>
        <div class="d-flex justify-space-between align-center w-100">
          <h5>Here Is Modal Title</h5>
          <span>
              <v-icon @click="closeModal">mdi-close</v-icon>
            </span>

        </div>

      </v-card-title>

      <v-card-text>
        <div v-html="content">

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
            content:{
                type: String
            }
        },
        methods:{
            closeModal(){
                this.$emit('closeModal')
            }
        }
    }
</script>

<style scoped>

</style>
