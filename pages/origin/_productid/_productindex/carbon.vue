<template dark>
  <div>
    <div v-if="this.productDescription.custom">
      <v-container fluid>
        <v-row class="position-fixed h-100">
          <v-col style="overflow:auto" class="pa-0 h-100" cols="12" md="6">
            <v-card
            rounded="xl"
            class="ma-1r"
            @click="openModal(ProductItem.slug)"
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
                  <v-card-subtitle class="text-hide py-0">Limited : {{ this.productIndex }} / {{ (this.productDescription.custom.transits.find(y => y.to.id.includes('warenghem')).goods).find(y => y.id.includes(productItem.slug)).quantity }}</v-card-subtitle>
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
                <client-only>
                  <LazyNewmap :treesItem="treesItem" :treeDescription="productDescription.custom.trees" :transits="transitsItem" v-if="transitsItem" :providersItem="providersItem" :markers="productDescription.custom.transits" />
                  <v-skeleton-loader
                    v-bind="attrs"
                    type="card-avatar, article, actions"
                  ></v-skeleton-loader>
                </client-only>
              </div>
              <v-row justify="center" class="treeMapHeader pb-5 pt-10 text-center position-absolute w-100 ma-0">
                <div class="px-3 "><div class="text-h5 yellow--text">{{ (providers || []).length }}</div><div class="text-caption">locations</div></div>
                <div class="px-3"><div class="text-h5 yellow--text">{{ (Object.values(this.productDescription.custom.transits || []).filter(x => x.length).map(x => x.length).reduce((a, b)=> a + b,0)/1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}}</div><div class="text-caption">km parcourus</div></div>
                <div class="px-3 "><div class="text-h5 yellow--text">{{ Object.values(this.productDescription.custom.transits || []).filter(x => x.co2).map(x => x.co2).reduce((a, b)=> a + b,0).toFixed(0) }}</div><div class="text-caption">kg de CO2 consommés</div></div>
              </v-row>
            </v-card>
            <div class="twogrid">
                <v-card rounded="xl">
                  <div class="teradeli-medium text-center py-3 pt-8">
                    PROVIDERS
                  </div>
                  <div class="text-center py-3 pb-5">
                    {{ (providers.filter(y => !y.type.includes('Brand')) || []).length }} providers were involved in creating this products
                  </div>
                  <div class="text-center py-3 pb-8">
                    <v-avatar size="90" class="mx-3" left  v-for="(provider, index) in providers.filter(y => !y.type.includes('Brand'))" :key="index">
                      <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ provider.image">
                    </v-avatar>
                  </div>
                </v-card>
                <v-card rounded="xl">
                  <div class="teradeli-medium text-center py-3 pt-8">
                    MATERIALS
                  </div>
                  <div class="text-center py-3 pb-5">
                    This product's supply chain includes {{ products.filter(y => y.type.includes('Material')).length }} materials
                  </div>
            <VueSlickCarousel v-bind="settings">
                  <div class="text-center py-3 pb-8">
                    <v-avatar size="90" class="mx-3" left  v-for="(product, index) in products.filter(y => y.type.includes('Material'))" :key="index">
                      <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ product.image">
                    </v-avatar>
                  </div>
            </VueSlickCarousel>

                </v-card>
            </div>
            <div class="teradeli-medium text-center py-3 pt-8">
              CERTIFICATES
            </div>
            <div class="text-center py-3 pb-8">
              This product's supply chain includes {{ certificates.length }} certificates
            </div>
            <VueSlickCarousel class="ma-1r" v-bind="settings">
              <v-card
              rounded="xl"
              v-for="(certificate, index) in certificates" :key="index"
              class="mb-5"
              >
                <div class="d-flex flex-column justify-center align-center text-center">
                  <v-avatar
                    class="ma-3 img-fluid position-relative"
                    size="100"
                  >
                    <img
                        data-sizes="auto"
                        :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-640/API/'+ getCertificateDescription(certificate.id).image +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-380,fo-bottom,c-maintain_ratio/API/'+ getCertificateDescription(certificate.id).image +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-512,fo-bottom,c-maintain_ratio/API/'+ getCertificateDescription(certificate.id).image +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-683,fo-bottom,c-maintain_ratio/API/'+ getCertificateDescription(certificate.id).image +' 683w'"
                        class="lazyload cover bg-white catalogue-item-background"
                    />
                  </v-avatar>
                  <div class="w-100">
                    <v-card-subtitle class="text-hide py-0">{{getCertificateDescription(certificate.id).name}}</v-card-subtitle>
                  </div>
                  <div class="d-flex align-center">
                    <v-icon small right >
                      {{check}}
                    </v-icon>
                    <v-card-subtitle class="font-italic text-hide ml-1 pa-0">Verified</v-card-subtitle>
                  </div>
                  <v-btn class="buttonCard mb-n3" fab x-small>
                    <v-icon>{{mdiChevronRight}}</v-icon>
                  </v-btn>
                </div>
              </v-card>
            </VueSlickCarousel>
    <div>Plante : {{ treesItem.name }}</div>
    <v-avatar
      class="ma-3 img-fluid position-relative"
      size="100"
      tile
    >
      <img
          data-sizes="auto"
          :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-640/API/'+ treesItem.image +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-380,fo-bottom,c-maintain_ratio/API/'+ treesItem.image +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-512,fo-bottom,c-maintain_ratio/API/'+ treesItem.image +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-683,fo-bottom,c-maintain_ratio/API/'+ treesItem.image +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-800,fo-bottom,c-maintain_ratio/API/'+ treesItem.image +' 800w'"
          class="lazyload cover bg-white catalogue-item-background rounded-xl"
      />
    </v-avatar>
    <div>CO2 par plante : {{ treesItem.lifeTimeCO2 }} kg</div>
    <div>Number planted : {{ productDescription.custom.trees.quantity }}</div>
    <div>Total CO2 : {{ productDescription.custom.trees.quantity * treesItem.lifeTimeCO2 }} kg</div>
    <div>Energy of this transaction 1 kWh = 0,45 kg CO2 (average in Europe)</div>
    <div>kWh of this transaction = 50 kWh (average for Ethereum)</div>
    <div>CO2 : {{ 50 * 0.45 }} kg</div>
          </v-col>
          <v-col style="overflow:auto" class="pa-0 h-100" cols="12" md="6">
            <v-container style="max-width:600px" class="pl-0 timeline-container mx-auto">
                <v-timeline dense clipped>
                  <div v-for="(actor, index) in orderedTransactions" :key="index">
                    <v-timeline-item
                        fill-dot
                        color="lightbugattiblue"
                        :icon="transactionIcon(actor.type)"
                    >
                        <v-card
                            class="rounded-xl pa-3"
                            @click="openModal(actor.id)"
                        >
                        <template v-if="actor.type === 'transit'">
                          <v-card-subtitle class="pa-0 pb-3">{{ formatDistance(new Date(actor.date), new Date(), {locale, addSuffix: true}) }}</v-card-subtitle>
                          <v-row class="pb-3 ma-0" align="center" v-for="(product, index) in actor.goods" :key="index">
                              <div class="time">{{getProductDescription(product.id).name}}</div>
                              <v-card-subtitle class="time pa-0">{{product.quantity}} {{product.units}}</v-card-subtitle>
                          </v-row>
                          <v-row align="center" class="ma-0 py-3">
                              <v-col class="pa-0" cols="12">TRANSFERRED TO {{getProviderDescription(actor.to.id).name}}</v-col>
                              <v-avatar left>
                                <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ getProviderDescription(actor.from.id).image">
                              </v-avatar>
                              <v-icon class="mx-3">{{arrowRightIcon}}</v-icon>
                              <v-avatar left>
                                <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ getProviderDescription(actor.to.id).image">
                              </v-avatar>
                              <!--<div class="time"><span>{{productDescription.custom.providersactor.brand}}</span> <span>{{actor.product}}</span></div>-->
                          </v-row>
                          <div >Envoyé {{ format(new Date(actor.from.date), 'PPPPp', {locale}) }} via {{actor.carrier}}</div>
                          <div >Tracking number : <a class="text-white" :href="'https://www.ship24.com/tracking?p='+actor.tracking" target="_blank">{{actor.tracking}}</a></div>
                          <div >CO2 : {{actor.co2}}</div>
                          <div >Km : {{(actor.length/1000).toFixed(1)}}</div>
                          <div >Recu {{  format(new Date(actor.to.date), 'PPPPp', {locale}) }} par {{getProviderDescription(actor.to.id).name}}</div>
                          <v-row
                            align="center"
                            class="ma-0"
                          >
                            <v-icon small class="mr-3">
                              {{flagIcon}}
                            </v-icon>
                            <v-card-subtitle class="pa-0">{{ actor.from.location.city }}, {{ actor.from.location.country }}</v-card-subtitle>
                          </v-row>
                        </template>
                        <template v-if="actor.type === 'product'">
                          <v-card-subtitle class="pa-0 pb-3">{{ formatDistance(new Date(actor.date), new Date(), {locale, addSuffix: true}) }}</v-card-subtitle>
                          <v-row class="pb-3" align="center">
                            <v-col
                              cols="3"
                            >
                              <div class="rounded-lg wa-smart-picture square-ratio skeletton wa-product-image">
                                <img class="lazyload bg-white mediabox-img" :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ getProductDescription(actor.id).image">
                              </div>
                            </v-col>
                            <v-col
                              cols="9"
                            > 
                              <div class="time text-uppercase">{{getProductDescription(actor.id).type}}</div>
                              <div class="time">{{getProductDescription(actor.id).name}}</div>
                              <v-row align="center" class="ma-0 pb-3">
                                  <v-chip v-for="(certificate, index) in actor.certificates" :key="index" class="mr-3" left>
                                    {{getCertificateDescription(certificate.id).name}}
                                    <v-icon small right>
                                      {{check}}
                                    </v-icon>
                                  </v-chip>
                              </v-row>
                            </v-col>
                          </v-row>
                          <v-row align="center" class="ma-0 pb-3">
                              <v-avatar class="mr-3" left>
                                <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ getProviderDescription(actor.registered).image">
                              </v-avatar>
                              <div>
                                <div>Made by</div>
                                <div class="pt-0">{{getProviderDescription(actor.registered).name}}</div>
                              </div>
                              <!--<div class="time"><span>{{productDescription.custom.providersactor.brand}}</span> <span>{{actor.product}}</span></div>-->
                          </v-row>
                          <div v-if="actor.rawMaterials.length > 0">
                            <div>Made with</div>
                            <v-row v-for="(rawMaterial, index) in actor.rawMaterials" :key="index" align="center" class="ma-0 pb-3">
                                <v-avatar class="mr-3" left>
                                  <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ getProductDescription(rawMaterial.id).image">
                                </v-avatar>
                                <div class="pt-0">{{getProductDescription(rawMaterial.id).name}}</div>
                            </v-row>
                          </div>
                          <v-row
                            align="center"
                            class="ma-0"
                          >
                            <v-icon small class="mr-3">
                              {{flagIcon}}
                            </v-icon>
                            <v-card-subtitle class="pa-0">{{ getProviderDescription(actor.registered).location.city }}, {{ getProviderDescription(actor.registered).location.country }}</v-card-subtitle>
                          </v-row>
                        </template>
                        <template v-if="actor.type === 'tree'">
                          <v-card-subtitle class="pa-0 pb-3">{{ formatDistance(new Date(actor.date), new Date(), {locale, addSuffix: true}) }}</v-card-subtitle>
                          <v-row class="pb-3" align="center">
                            <v-col
                              cols="3"
                            >
                              <div class="rounded-lg wa-smart-picture square-ratio skeletton wa-product-image">
                                <img class="lazyload bg-white mediabox-img" :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ treesItem.image">
                              </div>
                            </v-col>
                            <v-col
                              cols="9"
                            > 
                              <div class="time text-uppercase">{{treesItem.name}}</div>
                              <div class="time">{{treesItem.family}}</div>
                              <div class="time">Quantity : {{actor.quantity}}</div>
                            </v-col>
                          </v-row>
                          <v-row
                            align="center"
                            class="ma-0"
                          >
                            <v-icon small class="mr-3">
                              {{flagIcon}}
                            </v-icon>
                            <v-card-subtitle class="pa-0">{{ treesItem.location.country }}</v-card-subtitle>
                          </v-row>
                        </template>
                      </v-card>
                    </v-timeline-item>
                  </div>
                </v-timeline>
            </v-container>
          <SideModalMap :is-modal="currentModal" v-on:closeModal="currentModal=false" :provider="provider" :current="currentModal"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <Appbottombar/>
  </div>
</template>

<script>

  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import { mdiTree, mdiChevronRight, mdiShieldCheck, mdiShieldLock, mdiSwapHorizontal, mdiArrowRight, mdiFlagVariant } from '@mdi/js';
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
            flagIcon: mdiFlagVariant,
            arrowRightIcon: mdiArrowRight,
            mdiChevronRight: mdiChevronRight,
            transfert : mdiSwapHorizontal,
            lock : mdiShieldLock,
            check : mdiShieldCheck,
            tree : mdiTree,
            settings: {
              "centerMode": true,
              "focusOnSelect": true,
              "infinite": false,
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "arrows": false,
              "dots": false,
              "swipeToSlide": true,
              "touchMove": true,
              "responsive": [
                  {
                      "breakpoint": 768,
                      "settings": {
                          "centerMode": true,
                          "focusOnSelect": true,
                          "slidesToShow": 2,
                          "slidesToScroll": 2,
                      }
                  },
                  {
                      "breakpoint": 480,
                      "settings": {
                          "centerMode": true,
                          "focusOnSelect": true,
                          "slidesToShow": 1,
                          "slidesToScroll": 1,
                      }
                  }
              ]
            },
        };
    },
    components: {
        VueSlickCarousel
    },
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
       providers() {
         return Object.values(this.productDescription.custom.transits || []).reduce((a,x) => a.concat([ this.getProviderDescription(x.from.id),  this.getProviderDescription(x.to.id)]), []).filter((el, index, a) => index === a.indexOf(el)) /*filter speeder than reduce)*/
       },
       products() {
         return Object.values(this.productDescription.custom.transits || []).filter(x => x.goods).map(x => x.goods).reduce(function(a, b) {return a.concat(b)}).filter(x => x.id).map(x => x.id).map(x => this.getProductDescription(x))
       },
       certificates() {
         return Object.values(this.productDescription.custom.providers.concat(this.productDescription.custom.products) || []).filter(x => x.certificates).map(x => x.certificates).reduce(function(a, b) {return a.concat(b)})
       },
       orderedTransactions() {
         let transactions = this.productDescription.custom.transits.concat(this.productDescription.custom.products)
         let transactions2 = transactions.concat(this.productDescription.custom.trees)
         let orderedTransactions = transactions2.filter(x => x.date).sort((a, b) => a.date > b.date ? 1:-1) /*A regler, normalement date ou from.date et non date*/
         return orderedTransactions
       },
       orderedTransactions2() {
         let transactions = Object.values(this.productDescription.custom).reduce(((r, c) => Object.assign(r, c)), {})
         return transactions
       },
        locale() {
          let locale;
          let lang = this.$i18n.localeProperties.iso.split('-', 1)[0];
          if (lang == 'fr') {
            locale = fr;
          } else {
            locale = enUS;
          }
          return locale;
        }
    },
    methods: {
        getProviderDescription(id) {
            let p = (this.providersItem || []).find(x => x.id == id);
            return p || {};
        }, 
        getProductDescription(id) {
            let p = (this.productsItem || []).find(x => x.id == id);
            return p || {};
        },
        getCertificateDescription(id) {
            let p = (this.certificatesItem || []).find(x => x.id == id);
            return p || {};
        },
        openModal(modalName) {
            this.currentModal = true
            this.provider = this.providersItem.find(y => y.slug.includes(modalName))
        },
        transactionIcon(type) {
            if (type === 'transit') {
              return this.transfert
            } 
           if (type === 'product') {
              return this.lock
            }
           if (type === 'tree') {
              return this.tree
            }
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
.buttonCard {
  border: 3px solid black;
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