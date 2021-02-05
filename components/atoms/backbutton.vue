<template>
  <div class="d-flex align-center title bg-white border-right-2 border-bottom-2">
    <div class="border-left-2 d-flex align-center">
      <v-btn ripple class="elevation-0 rounded-0 d-inline-flex justify-center align-center backbutton cursor-pointer" @click="$router.go(-1)">
        <v-icon class="m-2">{{ svgPath }}</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
  import { mdiArrowLeft } from '@mdi/js';
  export default {
    name: 'backbutton',
    data() {
          return {
              svgPath: mdiArrowLeft,
          };
    },
  }
</script>
<style scoped lang="scss">
  .backbutton {
    background: none!important;
    height: 50px!important;
    width: 64px!important;
    @media screen and (min-width: 48rem){
      height: 50px!important;
      width: 56px!important;
    }
  }
</style>
