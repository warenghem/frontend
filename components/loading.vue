<template lang="html">
  <div class="loading-page" v-if="$store.state.product.loading">
    <v-progress-circular
      indeterminate
      color="primary"
      style="top:50%;"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.loading-page {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right:0;
  width: 100%;
  height: 100%;
  background: transparent;
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 30000001
}
</style>
