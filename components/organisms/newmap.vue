<template>
  <div class="h-100">
    <div style="height: 500px; width: 100%" class="pa-0">
      <l-map
        class="treemap h-100"
        ref="map"
        @ready="onReady"
        :maxZoom="zoom"
        :center="center"
        :options="{zoomControl: false,attributionControl: false,scrollWheelZoom: false,tap: false,boxZoom: false, doubleClickZoom: false, touchZoom: false, dragging: false, draggable: false}"
      >
        <l-tile-layer
          :url="url"
        />
        <l-geo-json
                class="h-100"
                v-for="(transit, index) in transits.polylines" :key="index"
                :options-style="styleFunction"
                :geojson="decode(transit.polyline)"
                />
        <l-marker v-for="(marker, index) in markers" :key="index"
                  :lat-lng="[getProviderDescription(marker.from).location.latitude, getProviderDescription(marker.from).location.longitude]"
                  @click="openModal(marker.from)"
                  >
          <l-icon
            :icon-size="[45, 45]"
            className="mapClass hand"
            icon-class="e"
          >
            <div class="card position-absolute">
              <v-avatar size="45" class="blob rounded-max">
                <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,dpr-2/API/'+ getProviderDescription(marker.from).image" alt="" width="35" height="35">
              </v-avatar>
              <!--<div class="card-header name hand">
               {{marker.name}}
              </div>-->
            </div>
          </l-icon>
        </l-marker>
        <l-marker 
                  :lat-lng="[getProviderDescription(lastMarker.to).location.latitude, getProviderDescription(lastMarker.to).location.longitude]"
                  @click="openModal(lastMarker.to)"
                  >
          <l-icon
            :icon-size="[45, 45]"
            className="mapClass hand"
            icon-class="e"
          >
            <div class="card position-absolute">
              <v-avatar size="45" class="blob rounded-max">
                <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,dpr-2/API/'+ getProviderDescription(lastMarker.to).image" alt="" width="35" height="35">
              </v-avatar>
              <!--<div class="card-header name hand">
               {{marker.name}}
              </div>-->
            </div>
          </l-icon>
        </l-marker>
      </l-map>
    </div>
    <SideModalMap :is-modal="currentModal" v-on:closeModal="currentModal=false" :provider="provider" :current="currentModal"/>
  </div>
</template>
<script>
    import { LMap, LTileLayer, LMarker, LIcon, LGeoJson } from 'vue2-leaflet';
    import 'leaflet/dist/leaflet.css';
    import { mdiClose } from '@mdi/js';
    import L from 'leaflet';
    import H from '~/utils/flexiblepolyline.js'
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });

    export default {
        name: 'origin-map',
        components: {
              LMap,
              LTileLayer,
              LMarker,
              LIcon,
              LGeoJson
        },
        props: {
            markers: {
                type: Array,
                default: () => {
                }
            },
            providersItem: {
                type: Array,
                default: () => {
                }
            },
            transits: {
                type: Array,
                default: () => {
                }
            }
        },
        data() {
            return {
                svgPath: mdiClose,
                maxZoom: 0,
                url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
                showParagraph: false,
                showMap: true,
                markers: [],
                currentModal: false,
                geojson: null
            };
        },
        computed:  {
          styleFunction() {
              return {
                weight: 2,
                color: this.$vuetify.theme.themes.light.lightbugattiblue,
                opacity: 1,
              }
            },
          lastMarker() {
           return this.markers[this.markers.length - 1]
          }
        },
        methods: {
            onReady() {
              if (this.markers.length) {
                let loc = this.markers.map(m => { return [m.lattitudeDeparture, m.longitudeDeparture] })
                let lastLoc = [this.lastMarker.lattitudeArrival, this.lastMarker.longitudeArrival]
                let mergeLoc = loc.concat([lastLoc]) 
                this.$nextTick(() => {
                  this.$refs.map.mapObject.fitBounds(mergeLoc, {padding: [40, 40]})
                })
              }
            },
            DarkMode() {
              if ($vuetify.theme.dark) {
                  this.mapstyle = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
              } else {
                  this.mapstyle = 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png';
              }
            },
            zoomUpdate(zoom) {
                this.currentZoom = zoom;
            },
            centerUpdate(center) {
                this.currentCenter = center;
            },
            openModal(modalName) {
                this.provider = this.providersItem.find(y => y.slug.includes(modalName))
                this.currentModal = true
            },
            getProviderDescription(id) {
                let p = (this.providersItem || []).find(x => x.id == id);
                return p || {};
            }, 
            decode(str){
              let lines = H.decode(str);
              return {
                  "type": "Feature",
                  "geometry": {
                      "type": "LineString",
                      "coordinates": lines.polyline
                  }
              };
            }
        },
    }
</script>

<style lang="scss" scoped>
  .leaflet-container {
      font-family: "teradeli-book";
  }
  .treemap {
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    }

  .slideArea {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    z-index: 100000 !important;
    background: white;
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

  .leaflet-marker-icon img {
    border-radius: 50%;
  }
  .blobs-container {
    display: flex;
  }
  .blob {
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
    box-shadow: 0 0 0 10px rgba(0, 129, 167, 0);
    }

    100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(0, 129, 167, 0);
    }
  }
</style>
