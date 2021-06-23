<template dark>
  <div>
    <div v-if="this.productDescription.custom">
      <v-container fluid>
        <v-row class="position-fixed h-100">
          <v-col style="overflow:auto" class="pa-0 h-100" cols="12" md="12">
            <SmallHorizontalCard :icon="mdiChevronRight" :title="productItem.name" :image="productItem.image[0].src" @clicked="openModal(productItem.slug)" >
              <template v-slot:content>
                <v-card-subtitle class="text-capitalize-first text-hide py-0">{{ $t('limited') }} : {{ productIndex }} / {{ (productDescription.custom.transits.find(y => y.to.id.includes('warenghem')).goods).find(y => y.id.includes(productItem.slug)).quantity }}</v-card-subtitle>
                <v-card-subtitle class="text-capitalize-first text-hide py-0">{{ $t('manufactured') }} {{ formatDistance(new Date(productDescription.custom.transits.find(y => y.to.id.includes('warenghem')).to.date), new Date(), {locale, addSuffix: true}) }}</v-card-subtitle>
                <!--<div class=""><span>Pas propre, voir une fonction qui cherche goods.name="slug" PRODUCED : </span><span>{{ this.productDescription.custom.transits.find(y => y.to.id.includes('warenghem')).departure }}</span></div>-->
                <!--<div class="sub-title">{{ productItem.brand }}</div>
                <div class="page-details pl-0" v-html="productItem.description"></div>
                <div class="text-hide"><span>BATCH ID : </span><span>{{ productId }}</span></div>-->
              </template>
            </SmallHorizontalCard>
            <div class="rounded-xl position-relative text-center">
              <v-card height="50vh" rounded="xl" style="overflow:hidden" class="position-relative mb-0 ma-1r">
                <div class="position-relative h-100">
                  <client-only>
                    <LazyNewmap ref="originMap" :treesItem="treesItem" :treeDescription="productDescription.custom.trees" :transits="transitsItem" v-if="transitsItem" :providersItem="providersItem" :lastMarker="lastTransit" :markers="productDescription.custom.transits" />
                    <v-skeleton-loader
                      v-bind="attrs"
                      type="card-avatar, article, actions"
                    ></v-skeleton-loader>
                  </client-only>
                </div>
                <MapCount :counts="counts" />
              </v-card>
              <v-btn class="mx-auto text-center buttonCard text-uppercase" style="z-index:2; margin-top: -35px;" elevation="0" rounded v-if="trees===false" @click="$refs.originMap.focus(treesFocus, {padding: [40, 40], maxZoom: 4}), trees=true">{{$t('focusTrees')}}</v-btn>
              <v-btn class="mx-auto pt-0 text-center buttonCard text-uppercase" style="z-index:2; margin-top: -35px;" elevation="0" rounded v-if="trees===true" @click="$refs.originMap.focus(actorsFocus, {padding: [0, 50]}), trees=false">{{$t('focusActors')}}</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
			<button @click="open('named-10000')">Open Named Modal</button>
		<NamedModal :id="10000"></NamedModal>
    <SideModalMap v-if="$store.state.modals.mainModal" :is-modal="currentModal" v-on:closeModal="currentModal=false" :provider="provider" :current="currentModal"/>
    <Appbottombar :productId="productId" :productIndex="productIndex"/>
    <NuxtChild :certificatesDetails="certificatesDetails" :materialsDetails="materialsDetails" :suppliersDetails="suppliersDetails" :products="products" :certificates="certificates" v-bind="$data" />
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
            polylines: [],
            flagIcon: mdiFlagVariant,
            arrowRightIcon: mdiArrowRight,
            mdiChevronRight: mdiChevronRight,
            transfert : mdiSwapHorizontal,
            lock : mdiShieldLock,
            check : mdiShieldCheck,
            tree : mdiTree,
            trees: false
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
      const tree = productDescription.custom.trees.id

      const lang_path = app.i18n.locale.split('-')[0] === 'en' ? 'en-us' : 'fr-fr';
      const productItem = await $content(`router/${lang_path}/shop/`+api).fetch();
      const providersItem = await $content(`api/${lang_path}/providers`).fetch();
      const productsItem = await $content(`api/${lang_path}/products`).fetch();
      const transitsItem = await $content(`api/transits/`+api).fetch();
      const certificatesItem = await $content(`api/${lang_path}/certificates`).fetch();
      const treesItem = await $content(`api/${lang_path}/trees/`+tree).fetch();

      return { productId, productIndex, certificatesItem, productDescription, treesItem, productItem, providersItem, transitsItem, productsItem }

    },
    /*async fetch() {
      this.polylines = await fetch('https://router.hereapi.com/v8/routes?transportMode=car&apiKey=sJxvIvQjWZuvxGBtUHZ7b1cjjmuB5IhIj5Dd47MLEMM&origin=45.698572,9.6719618&destination=47.4595,-0.7948&return=polyline').then(res =>
        res.json()
      )
    },*/
    computed: {
       /*actors() {
         return Object.values(this.productDescription.custom).filter(x => Array.isArray(x)).reduce((a,x) => a.concat(...x), []);
       },
       providers() {
         return Object.values(this.productDescription.custom.transits || []).map(({ from, to }) => [from, to]).reduce(function(a, b) {return a.concat(b)}).filter((el, index, a) => index === a.indexOf(el)).map(x => getProviderDescription(x)) /*filter speeder than reduce)
       },*/
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
       },
      lastTransit() {
        let last  = this.productDescription.custom.transits.filter(x => x.date).sort((a, b) => a.date > b.date ? 1:-1)
        return last[last.length - 1]
      },
      treesFocus() {
          return [[this.treesItem.location.latitude, this.treesItem.location.longitude]]
      },
      actorsFocus() {
          let loc = this.productDescription.custom.transits.map(m => { return [m.from.location.latitude, m.from.location.longitude] })
          let lastLoc = [this.lastTransit.to.location.latitude, this.lastTransit.to.location.longitude]
          return loc.concat([lastLoc]) 
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
			}
    }
  }
</script>

<style scoped lang="scss">
::v-deep .slick-slide {
    border: 5px solid black;
}
::v-deep .slick-list {
    padding: 0!important;
}
::v-deep .v-timeline--dense .v-timeline-item__body {
    max-width: calc(100% - 56px)!important;
}
::v-deep .v-timeline--dense:before {
    left: calc(30px - 1px)!important;
}
::v-deep .v-timeline-item__divider {
    min-width: 60px!important;
}
.treeMapHeader {
    z-index: 2;
    bottom: 0;
    background: #1E1E1E;
    background: linear-gradient(180deg,#1E1E1E,rgba(30,30,30,0) 0%, rgba(30,30,30,.7693452381) 50%,rgba(30,30,30,.9234068627) 78%);
}
.twogrid {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  padding: 1rem!important;
  grid-gap: 1rem;
  @media (max-width: 64em) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 48em) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>

<i18n>
{
	"en": {
		"limited":"number",
    "manufactured":"manufactured",
    "focusTrees":"focus on trees",
    "focusActors":"focus on actors"
	},
	"fr": {
		"limited":"numéro",
    "manufactured":"fabriqué",
    "focusTrees":"voir les arbres",
    "focusActors":"voir les acteurs"
	}
}
</i18n>