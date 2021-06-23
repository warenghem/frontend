<template>
  <div class="h-100">
    <div class="pa-0 w-100 h-100">
      <l-map
        class="treemap h-100"
        ref="map"
        @ready="onReady"
        :maxZoom="zoom"
        :center="center"
        zoomSnap="0.1"
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
                  :lat-lng="[marker.from.location.latitude, marker.from.location.longitude]"
                  @click="openMainModal(marker.from.id)"
                  >
          <l-icon
            :icon-size="[45, 45]"
            className="mapClass hand"
            icon-class="e"
          >
            <div class="card position-absolute">
              <v-avatar size="45" class="blob rounded-max">
                <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,dpr-2/'+ getDescription(marker.from.id, providersItem).image" alt="" width="35" height="35">
              </v-avatar>

            </div>
          </l-icon>
        </l-marker>
        <l-marker 
                  :lat-lng="[lastMarker.to.location.latitude, lastMarker.to.location.longitude]"
                  @click="openMainModal(lastMarker.to.id)"
                  >
          <l-icon
            :icon-size="[45, 45]"
            className="mapClass hand"
            icon-class="e"
          >
            <div class="card position-absolute">
              <v-avatar size="45" class="blob rounded-max">
                <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,dpr-2/'+ getDescription(lastMarker.to.id, providersItem).image" alt="" width="35" height="35">
              </v-avatar>
            </div>
          </l-icon>
        </l-marker>
        <l-marker 
                  :lat-lng="[treesItem.location.latitude, treesItem.location.longitude]"
                  @click="openMainModal(treesItem.id)"
                  name="trees"
                  >
          <l-icon
            :icon-size="[45, 45]"
            className="mapClass hand"
            icon-class="e"
          >
            <div class="card position-absolute">
              <v-badge
                bordered
                color="lightbugattiblue"
                :content="treeDescription.quantity"
                offset-x="15"
                offset-y="15"
              >
                <v-avatar size="45" class="blob rounded-max">
                  <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1,dpr-2/'+ treesItem.image" alt="" width="35" height="35">
                </v-avatar>
              </v-badge>
            </div>
          </l-icon>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>
<script>
    import getDescription from "~/mixins/getDescription";
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
                default: () => []
            },
            lastMarker: {
                type: Array,
                default: () => []
            },
            providersItem: {
                type: Array,
                default: () => []
            },
            transits: {
                type: Object,
                default: () => {
                }
            },
            treesItem: {
                type: Object,
                default: () => {
                }
            },
            treeDescription: {
                type: Object,
                default: () => {
                }
            }
        },
        mixins: [getDescription],
        data() {
            return {
                svgPath: mdiClose,
                maxZoom: 0,
                /*url: 'https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/jpeg&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}',*/
                url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
                /*url: 'https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/reduced.night/{z}/{x}/{y}/512/png8?apiKey=kTJNv0hR0_ZCrZilVZB6iVHa1FtOo2F9t7OIsytl4kc&ppi=320',*/
                showParagraph: false,
                showMap: true,
                markers: [],
                currentModal: false,
                geojson: null,
                trees: false,
            };
        },
        mounted() {
          // Instead of calling the method we emit an event
          this.$emit('click', this.value);
        },
        computed:  {
          styleFunction() {
              return {
                weight: 2,
                color: this.$vuetify.theme.themes.light.lightbugattiblue,
                opacity: 1,
              }
            }
        },
        methods: {
            onReady() {
              if (this.markers.length) {
                let loc = this.markers.map(m => { return [m.from.location.latitude, m.from.location.longitude] })
                let lastLoc = [this.lastMarker.to.location.latitude, this.lastMarker.to.location.longitude]
                let mergeLoc = loc.concat([lastLoc]) 
                this.$nextTick(() => {
                  this.$refs.map.mapObject.fitBounds(mergeLoc, {paddingBottomRight: [0, 90],paddingTopLeft: [0, 10]})
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
            decode(str){
              let lines = H.decode(str);
              return {
                  "type": "Feature",
                  "geometry": {
                      "type": "LineString",
                      "coordinates": lines.polyline
                  }
              };
            },
            focus(x, y) {
                this.$refs.map.mapObject.flyToBounds(x, y)
            }
        }
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
