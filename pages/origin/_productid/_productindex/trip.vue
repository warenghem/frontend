<template dark>
<div>
  <OriginSwiper  :key="index" :originTimeline="originTimeline" :treesItem="$attrs.treesItem" :carriersItem="$attrs.carriersItem" :productsItem="$attrs.productsItem" :certificatesItem="$attrs.certificatesItem" :providersItem="$attrs.providersItem" :originTimelines="orderedTransactions" />
  <!--<v-container class="pl-0 timeline-container mx-auto">
      <OriginTimeline style="max-width:600px" :treesItem="$attrs.treesItem" :productsItem="$attrs.productsItem" :certificatesItem="$attrs.certificatesItem" :providersItem="$attrs.providersItem" :originTimelines="orderedTransactions"/>
  </v-container>-->
</div>
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
    data () {
      return {

      }
    },
    computed: {
       orderedTransactions() {
         let transactions = this.$attrs.productDescription.custom.transits.concat(this.$attrs.productDescription.custom.products, this.$attrs.productDescription.custom.trees)
         let orderedTransactions = transactions.filter(x => x.date).sort((a, b) => a.date > b.date ? 1:-1) /*A regler, normalement date ou from.date et non date*/
         return orderedTransactions
       },
    },
  }
</script>