<template>
      <div class="rounded-xl position-relative text-center h-100">
        <v-card id="map" height="50vh" rounded="xl" style="overflow:hidden" class="position-relative mb-0 ma-1r">
          <div class="position-relative h-100">
            <client-only>
              <LazyOrganismsNewmap ref="originMap" 
                :polylines="polylines" 
                :markers="markers" 
                :markersLocation="markersLocation" 
                :startMarkers="startMarkers" 
                />
              <v-skeleton-loader
                type="image"
                class="h-100"
              ></v-skeleton-loader>
            </client-only>
          </div>
          <MoleculesMapCount id="mapCount" :counts="counts" />
        </v-card>
        <div id="btnCard">
          <MoleculesBtnCard :text="$t('origin.focusTrees')" v-if="othersMarkersButton===false" @click.native="focusOnMarkers(othersMarkers, true, 4)" />
          <MoleculesBtnCard :text="$t('origin.focusActors')" v-if="othersMarkersButton===true" @click.native="focusOnMarkers(startMarkers, false)" />
        </div>
      </div>
</template>
<script>
    export default {
        name: 'origin-map-wrapper',
        data() {
            return {
              othersMarkersButton: false
            };
        },
        props: {
            startMarkers: {
                type: Array,
                default: () => []
            },
            othersMarkers: {
                type: Array,
                default: () => []
            },
            markers: {
                type: Array,
                default: () => []
            },
            counts: {
                type: Array,
                default: () => []
            },
            polylines: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            focusOnMarkers(x, button, zoom) {
              /*Because of the Nuxt LazyComponent, we have to make a if(this.$refs.originMap)*/
              if (this.$refs.originMap) {
                this.$refs.originMap.focus(this.markersLocation(x), {paddingBottomRight: [0, 90],paddingTopLeft: [0, 10], maxZoom: zoom})
                this.treesMarkers = button
              }
            },
            markersLocation(x) {
              return x.map(m => { return [m.location.latitude, m.location.longitude] })
            }
        }
    }
</script>