<template>
  <NuxtLink :to="localePath('/')" tag="span" class="brand hand">
    <div style="width:160px" class="mx-auto" v-html="Logo" />
  </NuxtLink>
</template>
<script>
  import Logo from "~/assets/images/WA-mif-g-vf.svg?raw"
  export default {
    name: 'logo',
    data() {
          return {
              Logo
          }
    },
  }
</script>
