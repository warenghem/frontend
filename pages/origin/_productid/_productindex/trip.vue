<template dark>
  <v-container style="max-width:600px" class="pl-0 timeline-container mx-auto">
      <OriginTimeline :treesItem="$attrs.treesItem" :productsItem="$attrs.productsItem" :certificatesItem="$attrs.certificatesItem" :providersItem="$attrs.providersItem" :originTimelines="orderedTransactions"/>
  </v-container>
</template>

<script>

  export default {
    layout: 'app',
    name: 'trip',
    head () {
      return {
        meta: [
          { hid: 'robots', name: 'robots', content: 'noindex' }
        ]
      }
    },
    props: {
        orderedTransactions: {
            type: Array,
            default: () => {
            }
        }
    },
  }
</script>