<template>
  <div>
    <VideoSection id="videoSection"/>
    <MissionSection id="missionSection"/>
    <ProductSection id="productSection"/>
    <WePlantTreeMap id="mapTreeSection"/>
    <StudioSection id="studioSection"/>
    <PlantForm/>
    <NuxtLink to="/blog">Blog page</NuxtLink>
  </div>
</template>

<script>

export default {
  name:'default',
  }

</script>

<style lang="scss">
    @import '~/assets/scss/home.scss';

</style>
