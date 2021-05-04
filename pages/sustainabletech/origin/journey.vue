<template dark>
  <div class="py-5 mb-10">
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
          <div class="sub-title">Warenghem</div>
          <div class="sub-title text-gray">Ceinture WAC01</div>
          <div class="page-details pl-0">It is a product description. Made from... Why...</div>
        </v-col>
        <v-col cols="12">
          <div class=""><span>BATCH ID : </span><span>preSS18KN1001</span></div>
          <div class=""><span>QUANTITY : </span><span>1</span></div>
          <div class=""><span>PRODUCED : </span><span>8 days ago</span></div>
        </v-col>
      </v-row>
    </v-container>
      <v-tabs
        v-model="tab"
        centered
        dark
        grow
        icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1">
          Informations
          <v-icon>mdi-information-outline</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
          Timeline
          <v-icon>mdi-timeline-outline</v-icon>
        </v-tab>

      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-1" lazy style="background-color:black"
        >
          <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card rounded="xl">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      LOCATIONS
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product's supply chain includes 2 locations
                    </div>
                    <client-only>
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
                    </client-only>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card rounded="xl">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      SUPPLIERS
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product's supply chain includes 5 suppliers
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card rounded="xl">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      MATERIALS
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product's supply chain includes 5 materials
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card rounded="xl">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      CERTIFICATES
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product's supply chain includes 5 certificates
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
        </v-tab-item>
        <v-tab-item value="tab-2" lazy
        >
        <v-container class="timeline-container">
            <v-timeline align-top>
                <v-timeline-item
                        fill-dot

                >
                    <template >
                        <img alt="timeline-icon" width="16px">
                    </template>
                    <div>
                        <div class="d-flex align-center">
                            <span class="time pl-3 mb-0"
                                  style="color: #888!important;">calendarSection.tag</span>
                        </div>
                    </div>
                    <v-card
                            dark
                            class="pa-4"
                    >

                        <div class="time">tag</div>
                        <h4 class="smalltitle">title</h4>
                        <div class="item-details">
                            details
                        </div>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item
                        fill-dot
                >
                    <template v-slot:icon>
                        <img alt="timeline-icon" width="16px">
                    </template>
                </v-timeline-item>
            </v-timeline>
        </v-container>
        </v-tab-item>
      </v-tabs-items>
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
        const slug = params.slug;
        const lang_path = app.i18n.locale.split('-')[0] === 'en' ? 'en-us' : 'fr-fr';
        const productItem = await $content(`router/${lang_path}/shop`, slug).fetch();
        const productsItem = await $content(`router/${lang_path}/shop`).fetch();
        return {
            productsItem,
            productItem,
        }
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
        zoomUpdate(zoom) {
            this.currentZoom = zoom;
        },
        centerUpdate(center) {
            this.currentCenter = center;
        },
        showLongText() {
            this.showParagraph = !this.showParagraph;
        },
        closeSlide() {
            document.querySelector('.indianforest').classList.remove('active');
            document.querySelector('.mgforest').classList.remove('active');
            document.getElementById('blackContent').classList.remove('overlay');
            const el = document.body;
            el.classList.remove('modal-open');
            document.documentElement.style.overflowY = 'auto'
        },
        closeSlideUp() {
            document.querySelector('.indianforest').classList.remove('active');
            document.querySelector('.mgforest').classList.remove('active');
            document.getElementById('blackContent').classList.remove('overlay');
            const el = document.body;
            el.classList.remove('modal-open');
            document.documentElement.style.overflowY = 'auto';
            // this.$scrollToElement('formSection')
        },
        innerClick(modalClass) {
            document.querySelector(modalClass).classList.add('active');
            document.getElementById('blackContent').classList.add('overlay');
            const el = document.body;
            el.classList.add("modal-open");
            document.documentElement.style.overflowY = 'hidden'
        },
        mapIntersect() {
            this.treeData.treeCount = this.$store.state.tree_count;
            this.treeData.co2 = parseFloat(this.$store.state.co2_compensated);
            this.treeData.reforest = parseFloat(this.$store.state.reforest)
        }
    },
  }
</script>

<style lang="scss" scoped>
.leaflet-container {
    font-family: "teradeli-book";
}
  .treemap {
    height:500px;
    border-radius: 4px;
    z-index: 1;
      @media only screen and (max-width: 600px) {
        height:300px;
      }
    }

  .slideArea {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    z-index: 100000 !important;
    background: rgba(255, 255, 255, 0.9);
    max-height: 100%;
    overflow-y: scroll;
    transition: right 0.4s;

    .card-header {
      position: fixed;
      z-index: 1;
      background: white;
    }

    @media only screen and (min-width: 1291px) {
      width: 50vw !important;
      right: -50vw !important;
      .card-header {
        width: 49vw !important;
      }
    }

    @media only screen and (max-width: 1290px) {
      width: 70vw !important;
      right: -70vw;
      .card-header {
        width: 69vw !important;
      }
    }
    @media only screen and (max-width: 48em) {
      width: 100vw !important;
      right: -100vw;
      .card-header {
        width: 99vw !important;
      }
    }

    &.active {
      right: 0 !important;
      visibility: visible !important;
    }

  }

  .map-modal {
    .para-title {
      font-weight: 700;
      margin-bottom: 5px;
      color: #888;
      font-size: 16px;
    }

    .para-subtitle {
      font-size: 18px;
      font-family: 'teradeli-medium', sans-serif;
      line-height: 1rem;
      color: #153038;
      margin: 0;
    }

    .para-subtitle-small {
      font-size: 15px;
      font-family: 'teradeli-medium', sans-serif;
      line-height: 1rem;
      color: #153038;
      margin: 0;
    }

    .para-img {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }

    .para-text {
      color: #888;
      font-size: 14px;
    }

  }
  .leaflet-marker-icon img {
    border-radius: 50%;
  }
  .blobs-container {
    display: flex;
  }
  .blob.white {
    background: white;
    box-shadow: 0 0 0 0 rgba(0, 129, 167,0.8);
    animation: pulse-white 2s infinite;
  }
  @keyframes pulse-white {
    0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(0, 129, 167, 0.6);
    }

    70% {
    transform: scale(1);
    box-shadow: 0 0 0 20px rgba(0, 129, 167, 0);
    }

    100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(0, 129, 167, 0);
    }
  }
</style>
