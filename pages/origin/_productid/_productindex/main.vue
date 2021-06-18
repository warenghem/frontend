<template dark>
  <div>
    <div class="">
        <!--<v-card rounded="xl">
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
          <div class="text-center py-3 pb-8">
            <v-avatar size="90" class="mx-3" left  v-for="(product, index) in products.filter(y => y.type.includes('Material'))" :key="index">
              <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ product.image">
            </v-avatar>
          </div>
        </v-card>-->
        <div v-for="(slider, index) in sliders" :key="index">
          <div class="text-center py-3 pb-5">
            {{ slider.data.length }} {{ slider.title }} were involved in creating this products
          </div>
          <SmallSlider :cards="slider.data"/>
        </div>
        <div >
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
    </div>
    <!--<div class="teradeli-medium text-center py-3 pt-8">
      CERTIFICATES
    </div>
    <div class="text-center py-3 pb-8">
      This product's supply chain includes {{ certificates.length }} certificates
    </div>
    <VueSlickCarousel class="ma-1r" v-bind="settings">
      <SmallVerticalCard v-for="(certificate, index) in certificates" :key="index" :image="getDescription(certificate.id, certificatesItem).image" :name="getDescription(certificate.id, certificatesItem).name" />
    </VueSlickCarousel>-->
  </div>
</template>

<script>

  import getDescription from "~/mixins/getDescription";
  import locale from "~/mixins/localesI18n";
  import { format, formatDistance } from 'date-fns'

  export default {
    layout: 'app',
    name: 'main',
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
            sliders: [
                {
                    title: 'Providers',
                    data: this.suppliersDetails
                },
                {
                    title: 'Materials',
                    data: this.materialsDetails
                },
                {
                    title: 'Certificates',
                    data: this.certificatesDetails
                }
            ],
        };
    },
    props: {
        suppliersDetails: {
            type: Array,
            default: () => {
            }
        },
        materialsDetails: {
            type: Array,
            default: () => {
            }
        },
        products: {
            type: Array,
            default: () => {
            }
        },
        certificatesDetails: {
            type: Array,
            default: () => {
            }
        }
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
    methods: {
        openModal(modalName) {
            this.currentModal = true
            this.provider = this.providersItem.find(y => y.slug.includes(modalName))
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