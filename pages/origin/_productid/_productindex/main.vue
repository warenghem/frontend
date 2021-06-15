<template dark>
  <div>
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
                        :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-640/API/'+ getDescription(certificate.id, certificatesItem).image +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-380,fo-bottom,c-maintain_ratio/API/'+ getDescription(certificate.id, certificatesItem).image +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-512,fo-bottom,c-maintain_ratio/API/'+ getDescription(certificate.id, certificatesItem).image +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-683,fo-bottom,c-maintain_ratio/API/'+ getDescription(certificate.id, certificatesItem).image +' 683w'"
                        class="lazyload cover bg-white catalogue-item-background"
                    />
                  </v-avatar>
                  <div class="w-100">
                    <v-card-subtitle class="text-hide py-0">{{getDescription(certificate.id, certificatesItem).name}}</v-card-subtitle>
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
  </div>
</template>

<script>

  import getDescription from "~/mixins/getDescription";
  import locale from "~/mixins/localesI18n";
  import { format, formatDistance } from 'date-fns'

  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import { mdiTree, mdiChevronRight, mdiShieldCheck, mdiShieldLock, mdiSwapHorizontal, mdiArrowRight, mdiFlagVariant } from '@mdi/js';

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
    mixins: [getDescription, locale],
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