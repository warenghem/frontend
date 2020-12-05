<template dark>
  <div>
    <v-container style="height: calc(100vh - 112px);">
      <v-row align="center" justify="center" dense class="h-100 text-center">
          <v-card
            dark
            rounded="xl"
            class="pa-10 my-5"
          >
            <div class="py-5">
                <img src="https://ik.imagekit.io/g1noocuou2/tr:q-65,dpr-2,w-72/Logos/WA_short_w_vf.svg" width="72"><span class="teradeli-light pl-2" style="font-size:40px">ORIGIN</span>
            </div>
            <div class="py-5">
                <img src="https://ik.imagekit.io/g1noocuou2/tr:q-65,dpr-2,w-300/AdobeStock_276055312__1_.png" class="w-100">
            </div>
            <div class="py-5">
              <div class="page-title teradeli-medium">
                Let's start
              </div>
              <v-card-text>Scan your QR code and track the origin of your product</v-card-text>
            </div>
            <v-card-actions>
                  <v-btn
                      rounded="lg"
                      large
                      class="btn-theme mx-auto"
                      >
                      SCAN
                  </v-btn>
            </v-card-actions>
          </v-card>
      </v-row>
    </v-container>
  </div>

</template>

<script>
  export default {
    layout: 'app'
    // page component definitions
  }
</script>

<style scoped>

</style>