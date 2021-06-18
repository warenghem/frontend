<template dark>
  <div>
    <div v-if="this.productDescription.custom">
      <v-container fluid>
        <v-row class="position-fixed h-100">
          <v-col style="overflow:auto" class="pa-0 h-100" cols="12" md="12">
            <v-card
              rounded="xl"
              class="ma-1r"
              @click="openModal(productItem.slug)"
            >
              <div class="d-flex flex-no-wrap justify-space-between align-center">
                <v-avatar
                  class="ma-3 img-fluid position-relative"
                  size="100"
                  tile
                >
                  <img
                      data-sizes="auto"
                      :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-640/Products/'+ productItem.image[0].src+' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-380,fo-bottom,c-maintain_ratio/Products/'+ productItem.image[0].src+' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-512,fo-bottom,c-maintain_ratio/Products/'+ productItem.image[0].src+' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-683,fo-bottom,c-maintain_ratio/Products/'+ productItem.image[0].src+' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-800,fo-bottom,c-maintain_ratio/Products/'+ productItem.image[0].src+' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-960,fo-bottom,c-maintain_ratio/Products/'+ productItem.image[0].src+' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-1500,fo-bottom,c-maintain_ratio/Products/'+ productItem.image[0].src+' 1500w'"
                      class="lazyload cover bg-white catalogue-item-background rounded-xl"
                  />
                </v-avatar>
                <div class="w-100">
                  <v-card-title
                    class="text-h5 pt-0"
                    v-text="productItem.name"
                  ></v-card-title>
                  <v-card-subtitle class="text-hide py-0">Limited : {{ productIndex }} / {{ (this.productDescription.custom.transits.find(y => y.to.id.includes('warenghem')).goods).find(y => y.id.includes(productItem.slug)).quantity }}</v-card-subtitle>
                  <v-card-subtitle class="text-hide py-0">Fabriqué {{ formatDistance(new Date(this.productDescription.custom.transits.find(y => y.to.id.includes('warenghem')).to.date), new Date(), {locale, addSuffix: true}) }}</v-card-subtitle>
                  <!--<div class=""><span>Pas propre, voir une fonction qui cherche goods.name="slug" PRODUCED : </span><span>{{ this.productDescription.custom.transits.find(y => y.to.id.includes('warenghem')).departure }}</span></div>-->
                  <!--<div class="sub-title">{{ productItem.brand }}</div>
                  <div class="page-details pl-0" v-html="productItem.description"></div>
                  <div class="text-hide"><span>BATCH ID : </span><span>{{ productId }}</span></div>-->
                </div>
                <v-btn class="mr-n3 buttonCard" fab x-small>
                  <v-icon>{{mdiChevronRight}}</v-icon>
                </v-btn>
              </div>
            </v-card>
            <v-card height="50vh" rounded="xl" class="overflow-hidden position-relative mb-0 ma-1r">
              <div class="position-relative h-100">
                <div class="mx-auto pa-3 pt-0 position-absolute text-center" style="z-index:2; left:0; right:0" >
                  <v-btn class="mt-n3 buttonCard" elevation="0" rounded v-if="trees===false" @click="treeFocus(), trees=true">Focus on tree</v-btn>
                  <v-btn class="mt-n3 buttonCard" elevation="0" v-if="trees===true" @click="actorsFocus(), trees=false">Focus on actors</v-btn>
                </div>
                <client-only>
                  <LazyNewmap :treesItem="treesItem" :treeDescription="productDescription.custom.trees" :transits="transitsItem" v-if="transitsItem" :providersItem="providersItem" :markers="productDescription.custom.transits" />
                  <v-skeleton-loader
                    v-bind="attrs"
                    type="card-avatar, article, actions"
                  ></v-skeleton-loader>
                </client-only>
              </div>
              <v-row justify="center" class="treeMapHeader pb-5 pt-10 text-center position-absolute w-100 ma-0">
                <div class="px-3 "><div class="text-h5 yellow--text">{{ (providersDetails || []).length }}</div><div class="text-caption">locations</div></div>
                <div class="px-3"><div class="text-h5 yellow--text">{{ (Object.values(this.productDescription.custom.transits || []).filter(x => x.length).map(x => x.length).reduce((a, b)=> a + b,0)/1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}}</div><div class="text-caption">km parcourus</div></div>
                <div class="px-3 "><div class="text-h5 yellow--text">{{ Object.values(this.productDescription.custom.transits || []).filter(x => x.co2).map(x => x.co2).reduce((a, b)=> a + b,0).toFixed(0) }}</div><div class="text-caption">kg de CO2</div></div>
              </v-row>
            </v-card>
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