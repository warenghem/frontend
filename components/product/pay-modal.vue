<template>
  <div>
    <v-dialog
      v-model="$store.state.product.productPayModal"
      width="500"
      @click:outside="$store.commit('product/CLOSE_PAY_MODAL')"
      content-class="bg-white"
    >
      <v-card>
        <v-card-title>
          <div class="d-flex justify-space-between align-center w-100">
            <h5>PRODUIT(S) AJOUTÉ(S) À VOTRE PANIER</h5>
            <span>
              <v-icon @click="$store.commit('product/CLOSE_PAY_MODAL')">mdi-close</v-icon>
            </span>

          </div>

        </v-card-title>

        <v-card-text>
          <div class="d-flex align-center">
            <v-card class="grey lighten-2">
              <v-img :src="product.images[0]" width="150px"></v-img>
            </v-card>
            <div class="pa-4">
              <div>SAC À DOS TRIO</div>
              <div> M45538</div>
              <div>Couleurs : ECLIPSE</div>
              <span>2 600,00€</span>
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            outlined
            tile
            @click="$store.commit('product/CLOSE_PAY_MODAL')"
          >
            Continuer mes achats
          </v-btn>
          <v-btn
            dark
            tile
            @click="$store.commit('product/CLOSE_PAY_MODAL')"
          >
            Voir votre panier
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
    export default {
        name: "pay-modal",
        props: {
            product: {
                type: Object,
                default: () => {
                }
            }
        }
    }
</script>

<style scoped>

</style>
