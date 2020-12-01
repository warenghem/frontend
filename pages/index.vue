<template>
  <div>
    <sticky-toolbar class="stickyBar"/>
    <div id="blackContent" @click="hideModal"></div>
    <VideoSection id="videoSection"/>
    <MissionSection id="missionSection"/>
    <ProductSection id="productSection"/>
    <v-container fluid class="ma-0 pa-0 fill-height border-top-2">
      <v-row no-gutters>
        <v-col
          cols="12"
          md="6"
          style="border-right:#eae8e4 solid 1px"
        >
          <WePlantTreeMap id="mapTreeSection"/>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <StudioSection id="studioSection"/>
        </v-col>
      </v-row>
    </v-container>
    <References/>
    <Instagram/>
    <PlantForm/>
  </div>
</template>

<script>

    export default {
        name: 'default',
        methods: {
            hideModal() {
                document.querySelector('.indianforest').classList.remove('active');
                document.querySelector('.mgforest').classList.remove('active');
                document.getElementById('blackContent').classList.remove('overlay');
                const el = document.body;
                el.classList.remove('modal-open');
                document.documentElement.style.overflowY = 'auto'
            }
        },
        head() {
            return {
                bodyAttrs: {
                    class: 'BgTransparent'
                }
            }
        }
    }

</script>
<style>
  .appBar {
    background: transparent !important;
  }
</style>
