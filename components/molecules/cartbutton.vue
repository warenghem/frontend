<template>
  <div class="snipcart-checkout">
    <v-icon>{{ svgPath1 }}</v-icon>
    <span class="snipcart-items-count">
    </span>
  </div>
</template>

<script>
import { mdiCartVariant } from '@mdi/js'
export default {
  data(){
    return {
      svgPath1: mdiCartVariant,
    }
  },
}
</script>
<style scoped>
  ::v-deep svg.v-icon__svg {
    height: 20px!important;
    width: 20px!important;
}
</style>