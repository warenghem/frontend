<template>
  <div>
    <sticky-toolbar class="stickyBar"/>
    <div id="blackContent" @click="hideModal"></div>
    <VideoSection id="videoSection"/>
    <MissionSection id="missionSection"/>
    <v-container fluid class="homegrid py-4">
      <v-card class="item1">
        <ProductSection id="productSection"/>
      </v-card>
      <v-card class="bgcard item2">
        <MapSection id="mapTreeSection"/>
      </v-card>
      <v-card class="bgcard item3 d-none d-sm-block">
        <StudioSection id="studioSection"/>
      </v-card>
      <v-card dark color="darkbugattiblue" class="item4">
        <References/>
      </v-card>
      <v-card dark class="item5">
        <SocialSection/>
      </v-card>
    </v-container>
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
        created() {
            this.$store.commit('langs/RESET_LANG');
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
