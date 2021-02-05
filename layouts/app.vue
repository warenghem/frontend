<template>
  <v-app dark>
    <div>
        <appmain-toolbar/>
        <nuxt/>
        <appbottombar/>
    </div>
  </v-app>
</template>

<script>
export default {
  transition: {
    name: 'slide-fade',
    mode: 'out-in'
  }
}
</script>