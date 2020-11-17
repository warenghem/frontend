<template>
  <v-app>
    <div>
      <sticky-toolbar class="stickyBar"/>
      <nuxt/>
      <app-footer/>
    </div>
  </v-app>
</template>


<script>
    export default {
        name: "headless"
    }
</script>

