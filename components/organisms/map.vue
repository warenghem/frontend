<template>
    <client-only>
      <div class="pa-0 pa-sm-5 pt-5">
      <l-map
        style="width: 100%"
        class="treemap"
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
    </div>
    </client-only>
</template>
<script>
   export default {
        name: 'leaflet-map',
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
        },
    }
</script>
<style lang="scss" scoped>
.leaflet-container {
    font-family: "teradeli-book";
}
  .treemap {
    height:700px;
    border-radius: 4px;
    z-index: 1;
      @media only screen and (max-width: 600px) {
        height:400px;
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