<template>
  <div>
    <div id="blackContent" @click="hideModal"></div>
    <VideoSection id="videoSection"/>
    <MissionSection id="missionSection"/>
    <ProductSection id="productSection"/>
    <WePlantTreeMap id="mapTreeSection"/>
    <StudioSection id="studioSection"/>
    <PlantForm/>
    <NuxtLink :to="localePath('/blog')">Blog page</NuxtLink>
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
