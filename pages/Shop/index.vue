<template>
  <div>
    <filter-bar class="stickyFilterBar" :products="products.length"
                :categories="categories"
                :colors="colors"
                :collections="collections"
                :category-name="null"
                :materials="materials">
    </filter-bar>
    <v-container class="px-lg-7" fluid>
      <v-row>
        <v-col lg="4" md="6" v-for="(product,idx) in products" :key="'product_'+idx">
          <product-item :product="product"></product-item>
        </v-col>
      </v-row>
      <div v-intersect="infiniteScrolling" style="height: 100px;width: 100%"></div>
    </v-container>
  </div>

</template>

<script>
    import ProductItem from "../../components/product/product-item";
    import FilterBar from "../../components/product/filter-bar";
    import product from "../../store/product";

    export default {
        name: 'shop',
        components: {FilterBar, ProductItem},
        async asyncData(context) {
            const {$content, app} = context;
            const productsItem = await $content(`${app.i18n.locale}/Shop`).fetch();
            return {
                productsItem,
            }
        },
        computed: {
            products() {
                if (this.$store.state.product.exchange_rate.length > 0) {
                    this.productsItem.map(product => {
                        var exchange_rate={};
                        exchange_rate=this.$store.state.product.exchange_rate.find(rate => {
                            if (rate.from === product.offers.priceCurrency) {
                               return rate;
                            }
                        });
                        exchange_rate.exchange_r.some((curr, idx) => {
                            if (curr.currency === this.$store.state.product.currency_default) {
                                product.price = (product.offers.price * curr.rate).toFixed(2)
                            }
                        })

                    });
                    return this.productsItem;
                } else {
                    return this.productsItem;
                }

            }

        },

        created() {
            this.$store.commit('langs/RESET_LANG');
            this.$store.dispatch('product/getAllExchangeRate');
        },
        data() {
            return {
                productCount: 15,
                categories: [
                    'lorem 1',
                    'lorem 2',
                    'lorem 3 sdfsfdsf',
                    'lorem 4 dfdsf',
                    'lorem 5',
                    'lorem 6',
                    'lorem 7',
                ],
                colors: [
                    'red',
                    'green',
                    'black',
                    'white',
                    'pink'
                ],
                materials: [
                    {
                        name: 'cuires',
                        items: [
                            {id: 1, name: 'materia 1', image: 'https://www.louisvuitton.com/images/AEL-LG-C01_taiga'},
                            {
                                id: 2,
                                name: 'materia 2',
                                image: 'https://www.louisvuitton.com/images/MKG-LG-Monogram-Shadow'
                            },
                        ]
                    },
                    {
                        name: 'toils',
                        items: [
                            {id: 3, name: 'materia 1', image: 'https://www.louisvuitton.com/images/AEL-LG-C01_taiga'},
                            {
                                id: 4,
                                name: 'materia 2',
                                image: 'https://www.louisvuitton.com/images/MKG-LG-Monogram-Shadow'
                            },
                        ]
                    },
                    {
                        name: 'meterial 2',
                        items: [
                            {id: 5, name: 'materia 1', image: 'https://www.louisvuitton.com/images/AEL-LG-C01_taiga'},
                            {
                                id: 6,
                                name: 'materia 2',
                                image: 'https://www.louisvuitton.com/images/MKG-LG-Monogram-Shadow'
                            },
                        ]
                    }
                ],
                collections: [
                    'defile autum 2020',
                    'defile autum 2021',
                ]
            }
        },
        methods: {
            infiniteScrolling() {
                this.productCount = this.productCount + 10;
            }
        }

    }

</script>
