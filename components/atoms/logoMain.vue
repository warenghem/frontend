<template>
  <NuxtLink :to="localePath('/')" tag="span" class="brand hand">
    <div style="width:150px" v-html="Logo" />
  </NuxtLink>
</template>
<script>
  import Logo from "~/assets/images/Warenghem-w-noparis-vf.svg?raw"
  export default {
    name: 'logo',
    data() {
          return {
              Logo
          }
    },
  }
</script>
