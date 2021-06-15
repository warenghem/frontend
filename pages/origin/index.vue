<template dark>
  <div>
    <v-container style="height: calc(100vh - 112px);">
      <v-row align="center" justify="center" dense class="h-100 text-center">
          <v-card
            rounded="xl"
            class="pa-10 my-5"
          >
            <v-card-text>Powered by</v-card-text>
            <div class="py-5">
                <span class="teradeli-light pl-2" style="font-size:40px">ORIGIN</span>
            </div>
            <!--<div class="py-5">
                <img src="https://ik.imagekit.io/g1noocuou2/tr:q-65,dpr-2,w-300/AdobeStock_276055312__1_.png" class="w-100">
            </div>-->
            <div class="py-5">
              <div class="page-title teradeli-medium">
                Let's start
              </div>
              
              <!--<video class="d-none" autoplay="1" muted="1" loop="1" playsinline="1" data-uuid="cc06cc2e-8815-443b-b5a8-cd9ea348eec1" data-desktop="/sites/g/files/odxslz211/files/hero-banner-video/2019-09/home_video_teaser_desktop%20%281%29.mp4" data-tablet="" data-mobile="/sites/g/files/odxslz211/files/hero-banner-video/2019-09/DP_Animation_Mobile%20%283%29.mp4"><source src="/sites/g/files/odxslz211/files/hero-banner-video/2019-09/home_video_teaser_desktop%20%281%29.mp4" type="video/mp4"> Your browser does not support the video tag. </video>-->
              <v-card-text>Scan your QR code or NFC tag and track the origin of your product from raw material to finished garment</v-card-text>
              <v-card-text>Unable to scan? click here</v-card-text>
              <v-btn
                rounded
                dark
                small
                elevation="0"
                color="lightbugattiblue"
                class="mx-auto"
                @click="NoScan=true"
                v-if="NoScan===false"
                >
                ENTER PRODUCT ID
            </v-btn>
              <v-btn
                rounded
                dark
                small
                elevation="0"
                color="lightbugattiblue"
                class="mx-auto"
                @click="NoScan=false"
                v-if="NoScan===true"
                >
                RETURN TO THE SCAN
            </v-btn>
            <v-expand-transition>
              <v-form v-if="NoScan">
                <v-text-field
                  type="text"
                  label="Product ID"
                  v-model="id"
                  required
                ></v-text-field>
                <v-text-field
                  type="text"
                  label="Number of your product"
                  v-model="number"
                  required
                ></v-text-field>
              </v-form>
            </v-expand-transition>
            </div>
            <client-only v-if="Scan" placeholder="Loading...">
              <LazyQrcodereader/>
            </client-only>
            <v-card-actions v-if="NoScan===false">
                  <v-btn
                      rounded
                      dark
                      large
                      elevation="0"
                      color="lightbugattiblue"
                      class="mx-auto"
                      @click="Scan=true"
                      >
                      SCAN
                  </v-btn>
            </v-card-actions>
            <v-card-actions v-if="NoScan===true">
                  <v-btn
                      rounded
                      dark
                      large
                      elevation="0"
                      color="lightbugattiblue"
                      class="mx-auto"
                      @click="$router.push('/origin/'+id+'/'+number+'/main/')"
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
    layout: 'app',
    data() {
        return {
            Scan: false,
            NoScan: false,
            number: '',
            id: '',
        }
    }
  }
</script>

<style scoped>

</style>