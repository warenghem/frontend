<template>
  <v-app>
    <div>
        <appmain-toolbar />
        <v-main>
          <v-container fluid class="pa-0">
          <nuxt keep-alive/>
          </v-container>
        </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  transition: {
    name: 'slide-fade',
    mode: 'out-in'
  },
  beforeCreate () {
        this.$vuetify.theme.dark = true;
    },
}

</script>