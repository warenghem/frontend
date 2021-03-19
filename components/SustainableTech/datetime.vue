<template>
  <v-row align="center">
    <v-date-picker
      v-model="picker"
      landscape="landscape"
      full-width
      year-icon="mdi-calendar-blank"
      elevation="15"
      @input="$emit('input',picker)"
    ></v-date-picker>
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 7),
      }
    },
  }
</script>
<style scoped lang="scss">
</style>
