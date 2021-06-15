<template dark>
  <div>
    <div v-if="this.productDescription.custom">

    </div>
  </div>
</template>

<script>

  export default {
    layout: 'app',
    name: 'carbon',
    head () {
      return {
        meta: [
          { hid: 'robots', name: 'robots', content: 'noindex' }
        ]
      }
    },
    data() {
        return {
        };
    },
  }
</script>
