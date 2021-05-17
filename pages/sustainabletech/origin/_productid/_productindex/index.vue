<template dark>
  <div class="py-5 mb-10">
    <div v-if="this.productDescription.custom">
      <h1>{{ this.productDescription.description }}</h1>
      <div>
      Product Index: {{ this.productIndex }} / {{ this.productDescription.custom.manufacturers[0].quantity }}<br/>
      Suppliers count: {{ (this.productDescription.custom.suppliers || []).length }}
      {{ this.actors.filter(x => x.location).map(x => x.location) }}<br/>
      </div>
      <div v-for="(actor, index) in actors.filter(x => x.date).sort((a, b) => a.date > b.date ? 1:-1)" :key="index">
        {{actor.date}} - <span class="green--text">{{actor.name}}</span> - <span class="blue--text">{{actor.brand}}</span>
      </div>
    </div>
    <div v-else style="background-color: lightblue">
    {{ this.productId }} {{this.productDescription.error}}
    </div>
    
  </div>
</template>

<script>
  export default {
    layout: 'app',
    // page component definitions
    name: 'journey',
    head () {
      return {
        meta: [
          { hid: 'robots', name: 'robots', content: 'noindex' }
        ]
      }
    },
    async asyncData({ params }) {
      const productId = params.productid
      const productIndex = params.productindex

      const productDescription = await fetch(
        'http://15.188.65.163:40080/api/products/'+productId
      ).then((res) => res.json())      

      return { productId, productIndex, productDescription }
    },    
    /*
    async asyncData(context) {
        const {$content, params, app} = context;
        const slug = params.slug;
        const lang_path = app.i18n.locale.split('-')[0] === 'en' ? 'en-us' : 'fr-fr';
        const productItem = await $content(`router/${lang_path}/shop`, slug).fetch();
        const productsItem = await $content(`router/${lang_path}/shop`).fetch();
        return {
            productsItem,
            productItem,
        }
    },*/

    computed: {
       actors() {
         return Object.values(this.productDescription.custom).filter(x => Array.isArray(x)).reduce((a,x) => a.concat(...x), []);
       },
    },

    data() {
        return {
            zoom: 3,
            center: [3.770449, 64.38911],
            url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
            showParagraph: false,
            showMap: true,
            intersectionOptions: {
                root: null,
                rootMargin: '0px 0px 0px 0px',
                threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
            },
            treeData: {
                treeCount: 0,
                co2: 0,
                reforest: 0
            },
            markers: [
                {
                    id: "Trees_for_Tiger",
                    text: "India - Trees for Tiger",
                    latitude: 22.003975,
                    longitude: 86.06648,
                    image: "https://ik.imagekit.io/g1noocuou2/tr:q-80,w-85,fo-auto,r-max,dpr-2/Capture_d_e_cran_2020-11-20_a__18.57.19.png",
                    modal: ".indianforest",
                },
                {
                    id: "Eden_Projet",
                    text: "Madagascar - Eden Project",
                    latitude: -16.270975,
                    longitude: 44.445852,
                    image: "https://ik.imagekit.io/g1noocuou2/tr:q-80,w-85,fo-auto,r-max,dpr-2/Capture_d_e_cran_2020-11-20_a__18.56.41.png",
                    modal: ".mgforest",
                },
            ]

        };
    },

    methods: {      
    }
  }
</script>
