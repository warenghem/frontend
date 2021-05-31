<template dark>
  <div>
    <div v-if="this.productDescription.custom">
      <v-container>
        <v-row align="center" justify="center" class="py-5" style="max-width: 900px;">
          <v-col cols="4">
            <div class="img-fluid position-relative">
              <img
                  data-sizes="auto"
                  :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-640/Products/'+ productItem.image[0].src+' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-380,fo-bottom,c-maintain_ratio/Products/'+ productItem.image[0].src+' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-512,fo-bottom,c-maintain_ratio/Products/'+ productItem.image[0].src+' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-683,fo-bottom,c-maintain_ratio/Products/'+ productItem.image[0].src+' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-800,fo-bottom,c-maintain_ratio/Products/'+ productItem.image[0].src+' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-960,fo-bottom,c-maintain_ratio/Products/'+ productItem.image[0].src+' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-1500,fo-bottom,c-maintain_ratio/Products/'+ productItem.image[0].src+' 1500w'"
                  class="lazyload cover bg-white catalogue-item-background rounded-xl"
              />
            </div>
          </v-col>
          <v-col cols="8">
            <div class="sub-title">{{ productItem.brand }}</div>
            <div class="sub-title">{{ productItem.name }}</div>
            <div class="page-details pl-0" v-html="productItem.description"></div>
          </v-col>
          <v-col cols="12">
            <div class=""><span>BATCH ID : </span><span>{{ productId }}</span></div>
            <div class=""><span>LIMITED NUMBER : </span><span>{{ this.productIndex }} / {{ manufacturer.quantity }}</span></div>
            <div class=""><span>KM : </span><span>{{ (Object.values(this.productDescription.custom.transits || []).filter(x => x.lenght).map(x => x.lenght).reduce((a, b)=> a + b,0)/1000).toFixed(1)}}</span></div>
            <div class=""><span>CO2 : </span><span>{{ Object.values(this.productDescription.custom.transits || []).filter(x => x.co2).map(x => x.co2).reduce((a, b)=> a + b,0) }}</span></div>
            <!--<div class=""><span>PRODUCED : </span><span>{{ formatDistance(new Date(manufacturer.date), new Date(), {locale, addSuffix: true}) }}</span></div>-->
          </v-col>
        </v-row>
        <v-row>
          <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card rounded="xl" class="overflow-hidden">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      LOCATIONS
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product's supply chain includes {{ this.productDescription.custom.providers.filter(x => x.location).map(x => x.location).length }} locations
                    </div>
                    <div class="position-relative">
                      <client-only placeholder="Loading...">
                        <LazyNewmap :polylines="polylines.routes[0].sections[0].polyline" v-if="polylines && polylines.routes" :providersItem="providersItem" :markers="productDescription.custom.providers" />
                      </client-only>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card rounded="xl">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      PROVIDERS
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product's supply chain includes {{ (this.productDescription.custom.providers || []).length }} providers
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card rounded="xl">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      MATERIALS
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product's supply chain includes {{ this.productDescription.custom.providers.filter(y => y.type.includes('Material')).length }} materials
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card rounded="xl">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      CERTIFICATES
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product's supply chain includes {{ certificate.length }} certificates
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card rounded="xl">
                    <div class="teradeli-medium text-center py-3 pt-8">
                      KM
                    </div>
                    <div class="text-center py-3 pb-8">
                      This product has made <span>{{ (Object.values(this.productDescription.custom.transits || []).filter(x => x.lenght).map(x => x.lenght).reduce((a, b)=> a + b,0)/1000).toFixed(1) }}</span> km
                    </div>
                  </v-card>
                </v-col>
              </v-row>
          </v-container>
          <v-container style="max-width:600px" class="timeline-container mx-auto">
              <v-timeline dense clipped>
                <div v-for="(actor, index) in orderedTransits" :key="index">
                  <v-timeline-item
                      fill-dot
                      large
                      color="lightbugattiblue"
                  >
                      <v-card
                          class="rounded-xl"
                          @click="openModal(actor.from)"
                      >
                          <v-card-subtitle class="pb-0">{{ formatDistance(new Date(actor.departure), new Date(), {locale, addSuffix: true}) }}</v-card-subtitle>
                          <v-card-title class="pt-0">{{actor.from}}</v-card-title>
                          <v-card-subtitle v-for="(product, index) in actor.goods" :key="index" class="time">{{product.quantity}} {{product.units}} de {{product.name}}</v-card-subtitle>
                          <!--<div class="time"><span>{{productDescription.custom.providersactor.brand}}</span> <span>{{actor.product}}</span></div>-->
                      </v-card>
                  </v-timeline-item>
                  <v-timeline-item
                      small
                      color="lightbugattiblue"
                  >
                      <div class="time">Envoyé {{  format(new Date(actor.departure), 'PPPPp', {locale}) }} via {{actor.carrier}}</div>
                      <div class="time">Tracking number : {{actor.tracking}}</div>
                      <div class="time">CO2 : {{actor.co2}}</div>
                      <div class="time">Km : {{(actor.lenght/1000).toFixed(1)}}</div>
                      <div class="time">Time : {{(actor.duration/3600).toFixed(1)}} hours</div>
                      <div class="time">Recu {{  format(new Date(actor.arrival), 'PPPPp', {locale}) }} par {{actor.to}}</div>
                  </v-timeline-item>
                </div>
              </v-timeline>
          </v-container>
        <SideModalMap :is-modal="currentModal" v-on:closeModal="currentModal=false" :provider="provider" :current="currentModal"/>
        </v-row>
      </v-container>
    </div>
    <Appbottombar/>
  </div>
</template>

<script>

  import { format, formatDistance } from 'date-fns'
  import { enUS, fr } from 'date-fns/locale'

  // by providing a default string of 'PP' or any of its variants for `formatStr`
  // it will format dates in whichever way is appropriate to the locale


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
        };
    },
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

      return { productId, productIndex, productDescription, productItem, providersItem }

    },
    async fetch() {
      this.polylines = await fetch('https://router.hereapi.com/v8/routes?transportMode=car&apiKey=sJxvIvQjWZuvxGBtUHZ7b1cjjmuB5IhIj5Dd47MLEMM&origin=45.698572,9.6719618&destination=47.4595,-0.7948&return=polyline').then(res =>
        res.json()
      )
    },
    /*async fetch() {
      let first = this.productDescription.custom.transits.filter(x => x.awards && x.awards.verifiedClaims).map(x => x.awards.verifiedClaims).reduce(function(a, b) {return a.concat(b)})
      let last = this.productDescription.custom.transits.filter(x => x.awards && x.awards.verifiedClaims).map(x => x.awards.verifiedClaims).reduce(function(a, b) {return a.concat(b)})
      let loc = this.productDescription.custom.transits.filter(x => x.awards && x.awards.verifiedClaims).map(x => x.awards.verifiedClaims).reduce(function(a, b) {return a.concat(b)})

      this.polylines = await fetch('https://router.hereapi.com/v8/routes?transportMode=car&apiKey=sJxvIvQjWZuvxGBtUHZ7b1cjjmuB5IhIj5Dd47MLEMM&origin='+first+'&destination='+last+'&via='+loc+'&return=polyline').then(res =>
        res.json()
      )
    },*/
    computed: {
       /*actors() {
         return Object.values(this.productDescription.custom).filter(x => Array.isArray(x)).reduce((a,x) => a.concat(...x), []);
       },*/
       manufacturer() {
              var manufacturer = this.productDescription.custom.providers.find(y => y.type.includes('Finished product'))
              return manufacturer
        },
       certificate() {
         return Object.values(this.productDescription.custom.providers || []).filter(x => x.awards && x.awards.verifiedClaims).map(x => x.awards.verifiedClaims).reduce(function(a, b) {return a.concat(b)})
       },
       totalTransits() {
         return Object.values(this.productDescription.custom.transits || []).filter(x => x.lenght).map(x => x.lenght).reduce((a, b)=> a + b,0);
       },
       orderedTransits() {
         return this.productDescription.custom.transits.filter(x => x.departure).sort((a, b) => a.departure > b.departure ? 1:-1)
       },
        locale() {
          let locale;
          if (this.$i18n.localeProperties.iso == 'fr-FR' || 'fr-CA' || 'fr-CH') {
            locale = fr;
          } else {
            locale = enUS;
          }
          return locale;
        }
    },
    methods: {
        openModal(modalName) {
            this.currentModal = true
            this.provider = this.providersItem.find(y => y.slug.includes(modalName))
        }
    }
  }
</script>
