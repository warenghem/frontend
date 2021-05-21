<template dark>
  <div>
    <div v-if="this.productDescription.custom">
      <v-container>
        <v-row align="center" justify="center" class="py-5" style="max-width: 900px;">
          <v-col cols="4">
            <div class="img-fluid gradientoverlay position-relative">
              <img
                  data-sizes="auto"
                  data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 1500w"
                  src="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-300,fo-bottom/AdobeStock_50352719.jpeg"
                  class="gradientoverlay rounded-xl lazyload cover bg-white catalogue-item-background elevation-3"
              />
            </div>
          </v-col>
          <v-col cols="8">
            <div class="sub-title">{{ productItem.brand }}</div>
            <div class="sub-title">{{ productItem.name }}</div>
            <div class="page-details pl-0" v-html="productItem.description"></div>
          </v-col>
          <v-col cols="12">
            <div class=""><span>BATCH ID : </span><span>{{ productId }}</span></div>
            <div class=""><span>LIMITED NUMBER : </span><span>{{ this.productIndex }} / {{ this.productDescription.custom.providers[0].quantity }}</span></div>
            <div class=""><span>PRODUCED : </span><span>{{ produced }}</span></div>
          </v-col>
        </v-row>
        <v-row>
          <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card rounded="xl">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      LOCATIONS
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product's supply chain includes {{ this.productDescription.custom.providers.filter(x => x.location).map(x => x.location).length +1 }} locations
                    </div>
                    <!--<client-only>
                    <l-map
                      style="width: 100%"
                      class="treemap pt-5"
                      :zoom="zoom"
                      :center="center"
                      :options="{zoomControl: false,attributionControl: false,scrollWheelZoom: false,tap: false,boxZoom: false, doubleClickZoom: false, touchZoom: false, dragging: false, draggable: false}"
                    >
                      <l-tile-layer
                        :url="url"
                      />
                      <l-marker :lat-lng="[marker.latitude, marker.longitude]"
                                @click="innerClick(marker.modal)"
                                v-for="(marker,m_idx) in markers"
                                :key="'map_'+m_idx">
                        <l-icon
                          :icon-size="[50, 50]"
                          :icon-url="marker.image"
                          className="mapClass hand"
                                      icon-class="e"

                        >
                          <div style="transform: translateY(-20px);" class="card">
                            <div class="card-header name hand">
                              {{marker.text}}
                              <div style="font-size: 16px" class="subtitlesmall">En savoir plus</div>
                            </div>
                            <div>
                              <div class="blob white rounded-circle" style="width:45px; height:45px">
                                <img :src="marker.image" alt="" width="45" height="45">
                              </div>
                            </div>
                          </div>
                        </l-icon>
                      </l-marker>
                    </l-map>
                    </client-only>-->
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card rounded="xl">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      PROVIDERS
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product's supply chain includes {{ (this.productDescription.custom.providers || []).length }} providers
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card rounded="xl">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      MATERIALS
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product's supply chain includes {{ this.productDescription.custom.providers.filter(y => y.type.includes('Material')).length }} materials
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card rounded="xl">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      CERTIFICATES
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product's supply chain includes {{ certificate }} certificates
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card rounded="xl">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      KM
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product has made xxx km
                    </div>
                  </v-card>
                </v-col>
              </v-row>
          </v-container>
        </v-row>
      </v-container>
      <div v-for="(actor, index) in actors.filter(x => x.date).sort((a, b) => a.date > b.date ? 1:-1)" :key="index">
        {{actor.date}} - <span class="green--text">{{actor.name}}</span> - <span class="blue--text">{{actor.brand}}</span>
      </div>
    </div>
    <v-row align="center" justify="center" class="py-5 mb-10" v-else style="height: 100vh">
      {{ this.productId }} {{this.productDescription.error}}
    </v-row>
    <appbottombar/>
  </div>
</template>

<script>
  export default {
    layout: 'app',
    // page component definitions
    name: 'journey',
    head () {
      return {
        meta: [
          { hid: 'robots', name: 'robots', content: 'noindex' }
        ]
      }
    },
    async asyncData(context) {
      const {$content, params, app} = context;

      const productId = params.productid
      const productIndex = params.productindex
      const productDescription = await fetch(
        'http://15.188.65.163:40080/api/products/'+productId
      ).then((res) => res.json())  

      const api = productDescription.name

      const lang_path = app.i18n.locale.split('-')[0] === 'en' ? 'en-us' : 'fr-fr';
      const productItem = await $content(`router/${lang_path}/shop/`+api).fetch();

      return { productId, productIndex, productDescription, productItem }

    },

    computed: {
       actors() {
         return Object.values(this.productDescription.custom).filter(x => Array.isArray(x)).reduce((a,x) => a.concat(...x), []);
       },
       produced() {
              var produced = this.productDescription.custom.providers.filter(y => y.type.includes('Finished product'))
              return produced
           },
    },

    data() {
        return {
            zoom: 3,
            center: [3.770449, 64.38911],
            url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
            showParagraph: false,
            showMap: true,
            intersectionOptions: {
                root: null,
                rootMargin: '0px 0px 0px 0px',
                threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
            },
            treeData: {
                treeCount: 0,
                co2: 0,
                reforest: 0
            },
            markers: [
                {
                    id: "Trees_for_Tiger",
                    text: "India - Trees for Tiger",
                    latitude: 22.003975,
                    longitude: 86.06648,
                    image: "https://ik.imagekit.io/g1noocuou2/tr:q-80,w-85,fo-auto,r-max,dpr-2/Capture_d_e_cran_2020-11-20_a__18.57.19.png",
                    modal: ".indianforest",
                },
                {
                    id: "Eden_Projet",
                    text: "Madagascar - Eden Project",
                    latitude: -16.270975,
                    longitude: 44.445852,
                    image: "https://ik.imagekit.io/g1noocuou2/tr:q-80,w-85,fo-auto,r-max,dpr-2/Capture_d_e_cran_2020-11-20_a__18.56.41.png",
                    modal: ".mgforest",
                },
            ]

        };
    },

    methods: {      
    }
  }
</script>
