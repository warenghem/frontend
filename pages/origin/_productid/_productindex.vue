<template dark>
  <div>
    <div id="header" v-if="this.productDescription.custom">
      <OriginSmallHorizontalCard class="cardHeader" :borderColor="$vuetify.theme.currentTheme.systemBackground" :buttonColor="$vuetify.theme.currentTheme.systemGray1" :icon="mdiChevronRight" :title="productItem.name" :image="productItem.image[0].src" @clicked="openModal(productItem.slug)" >
        <template v-slot:content>
          <v-card-subtitle class="text-capitalize-first text-hide py-0">{{ $t('origin.limited') }} : {{ productIndex }} / {{ (productDescription.custom.transits.find(y => y.to.id.includes('warenghem')).goods).find(y => y.id.includes(productItem.slug)).quantity }}</v-card-subtitle>
          <v-card-subtitle class="text-capitalize-first text-hide py-0">{{ $t('origin.manufactured') }} {{ formatDistance(new Date(productDescription.custom.transits.find(y => y.to.id.includes('warenghem')).to.date), new Date(), {locale, addSuffix: true}) }}</v-card-subtitle>
        </template>
      </OriginSmallHorizontalCard>
      <OriginMapWrapper 
        :markers="markers"
        :counts="counts"
        :othersMarkers="treesMarkers"
        :startMarkers="actorsMarkers"
        :transits="transitsItem" 
        :polylines="transitsItem.polylines"
         />
    </div>
		<!--<button @click="open('named-10000')">Open Named Modal</button>-->
		<OriginNamedModal :id="10000"></OriginNamedModal>
    <OriginSideModalMap v-if="$store.state.modals.mainModal" :is-modal="currentModal" v-on:closeModal="currentModal=false" :provider="provider" :current="currentModal"/>
    <OriginAppBottomBar :treeIcon="treeIcon" :productItem="productItem" :productId="productId" :productIndex="productIndex"/>
    <NuxtChild @resize-markers="resizeMarkers" @focus-on-markers="focusOnMarkers" :actorsFocus="actorsFocus" :treesMarkers="treesMarkers" :treesFocus="treesFocus" :treesDetails="treesDetails" :certificatesDetails="certificatesDetails" :materialsDetails="materialsDetails" :suppliersDetails="suppliersDetails" :products="products" :certificates="certificates" v-bind="$data" />
  </div>
</template>

<script>
  import getDescription from "~/mixins/getDescription";
  import locale from "~/mixins/localesI18n";
  import { mdiTree, mdiChevronRight, mdiShieldCheck, mdiShieldLock, mdiSwapHorizontal, mdiArrowRight, mdiFlagVariant } from '@mdi/js';
  import { format, formatDistance } from 'date-fns'

  export default {
    layout: 'app',
    name: 'journey',
    head () {
      return {
        meta: [
          { hid: 'robots', name: 'robots', content: 'noindex' }
        ]
      }
    },
    data() {
        return {
            currentModal: false,
            format, formatDistance,
            flagIcon: mdiFlagVariant,
            arrowRightIcon: mdiArrowRight,
            mdiChevronRight: mdiChevronRight,
            transfert : mdiSwapHorizontal,
            lock : mdiShieldLock,
            check : mdiShieldCheck,
            treeIcon : mdiTree,
        };
    },
    mixins: [getDescription, locale],
    async asyncData(context) {
      const {$content, params, app} = context;

      const productId = params.productid
      const productIndex = params.productindex
      const productDescription = await fetch(
        'http://15.188.65.163:40080/api/products/'+productId
      ).then((res) => res.json())  

      const api = productDescription.name

      const lang_path = app.i18n.locale.split('-')[0] === 'en' ? 'en-us' : 'fr-fr';
      const productItem = await $content(`router/${lang_path}/shop/`+api).fetch();
      const providersItem = await $content(`api/${lang_path}/providers`).fetch();
      const productsItem = await $content(`api/${lang_path}/products`).fetch();
      const carriersItem = await $content(`api/${lang_path}/carriers`).fetch();
      const transitsItem = await $content(`api/transits/`+api).fetch();
      const certificatesItem = await $content(`api/${lang_path}/certificates`).fetch();
      const treesItem = await $content(`api/${lang_path}/trees`).fetch();

      return { productId, carriersItem, productIndex, certificatesItem, productDescription, treesItem, productItem, providersItem, transitsItem, productsItem }

    },
    /*async fetch() {
      this.polylines = await fetch('https://router.hereapi.com/v8/routes?transportMode=car&apiKey=sJxvIvQjWZuvxGBtUHZ7b1cjjmuB5IhIj5Dd47MLEMM&origin=45.698572,9.6719618&destination=47.4595,-0.7948&return=polyline').then(res =>
        res.json()
      )
    },*/
    computed: {
       providersDetails() {
         return Object.values(this.productDescription.custom.transits || []).reduce((a,x) => a.concat([ this.getDescription(x.from.id, this.providersItem),  this.getDescription(x.to.id, this.providersItem)]), []).filter((el, index, a) => index === a.indexOf(el)) /*filter speeder than reduce)*/
       },
       suppliersDetails() {
         return this.providersDetails.filter(y => !y.type.includes('Brand')) || []
       },
       products() {
         return Object.values(this.productDescription.custom.transits || []).map(x => x.goods).reduce(function(a, b) {return a.concat(b)}).filter(x => x.id).map(x => x.id)
       },
       materialsDetails() {
         return this.products.map(x => this.getDescription(x, this.productsItem)).filter(y => !y.type.includes('Finished product')) || []
       },
       certificates() {
         return Object.values(this.productDescription.custom.providers.concat(this.productDescription.custom.products) || []).filter(x => x.certificates).map(x => x.certificates).reduce(function(a, b) {return a.concat(b)})
       },
       certificatesDetails() {
         return this.certificates.map(x => this.getDescription(x.id, this.certificatesItem))
       },
       trees() {
         return this.productDescription.custom.trees || []
       },
       treesDetails() {
         return this.trees.map(x => this.getDescription(x.id, this.treesItem))
       },
        lastTransit() {
          let last  = this.productDescription.custom.transits.filter(x => x.date).sort((a, b) => a.date > b.date ? 1:-1)
          return last[last.length - 1]
        },
        actorsMarkers() {
          let loc = this.productDescription.custom.transits.map(m => { return {"id":m.from.id,"image":this.getDescription(m.from.id, this.providersItem).image,"location":{"latitude": m.from.location.latitude, "longitude":m.from.location.longitude}} })
          let lastLoc = {"id":this.lastTransit.to.id,"image":this.getDescription(this.lastTransit.from.id, this.providersItem).image,"location":{"latitude":this.lastTransit.to.location.latitude, "longitude":this.lastTransit.to.location.longitude}}
          return loc.concat([lastLoc])
        },
        treesMarkers() {
          return this.trees.map(m => { return {"id":m.id,"image":this.getDescription(m.id, this.treesItem).image,"location":{"latitude": this.getDescription(m.id, this.treesItem).location.latitude, "longitude":this.getDescription(m.id, this.treesItem).location.longitude}} }) 
        },
        markers() {
          return this.actorsMarkers.concat(this.treesMarkers)
        },
        counts() {
          let location = (this.providersDetails || []).length
          let km = (Object.values(this.productDescription.custom.transits || []).filter(x => x.length).map(x => x.length).reduce((a, b)=> a + b,0)/1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          let co2 = Object.values(this.productDescription.custom.transits || []).filter(x => x.co2).map(x => x.co2).reduce((a, b)=> a + b,0).toFixed(0)
          return [
                {
                  number: location,
                  text: this.$tc('map.counts.location', location)
                },
                {
                  number: km,
                  text: this.$tc('map.counts.km', km)
                },
                {
                  number: co2,
                  text: this.$tc('map.counts.co2', co2)
                }
              ]
        }
    },
                                                /*Est ce que je retourne que des id pour faire des getDescription ?*/
    methods: {
      openModal(modalName) {
          this.currentModal = true
          this.provider = this.providersItem.find(y => y.slug.includes(modalName))
      },
			open(name) {
				this.$store.dispatch("modals/open", name)
			},
      resizeMarkers() {
        if (this.$refs.originMap) {
          setTimeout(() => {
              this.$refs.originMap.resize();
          }, 50)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .treeMapHeader {
      z-index: 2;
      bottom: 0;
      background: #1E1E1E;
      background: linear-gradient(180deg,#1E1E1E,rgba(193,201,205,0) 0%, rgba(193,201,205,.7693452381) 50%,rgba(193,201,205,.9234068627) 78%);
  }
  .theme--dark .treeMapHeader {
      background: linear-gradient(180deg,#1E1E1E,rgba(34,34,34,0) 0%, rgba(34,34,34,.7693452381) 50%,rgba(34,34,34,.9234068627) 78%)!important;
  }
</style>