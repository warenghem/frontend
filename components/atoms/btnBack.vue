<template>
  <v-btn tile elevation="0" class="border-right-2 d-inline-flex justify-center align-center border-bottom-2 h-100" @click="$router.go(-1)">
    <v-icon class="m-2">{{ svgPath }}</v-icon>
  </v-btn>
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