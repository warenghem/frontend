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
        <v-col lg="4" md="6" v-for="i in productCount" :key="i">
          <nuxt-link :to="{path:'/en/shop/hello'}">
            <product-item></product-item>
          </nuxt-link>

        </v-col>
      </v-row>
      <div v-intersect="infiniteScrolling" style="height: 100px;width: 100%"></div>
    </v-container>
  </div>

</template>

<script>
    import ProductItem from "../../components/product/product-item";
    import FilterBar from "../../components/product/filter-bar";

    export default {
        name: 'shop',
        components: {FilterBar, ProductItem},
        // async asyncData(context) {
        //     const {$content, app} = context;
        //     const defaultLocale = app.i18n.locale;
        //     const posts = await $content(`${app.i18n.locale}/shop'`).fetch();
        //     return {
        //         posts: posts.map(post => ({
        //             ...post,
        //             path: post.path.replace(`/${defaultLocale}`, ''),
        //         })),
        //     };
        // },
        data() {
            return {
                productCount:15,
                products: {
                    "totalItems": 29,
                    "offset": 0,
                    "limit": 50,
                    "items": [
                        {
                            "mode": "Test",
                            "userDefinedId": "HGW",
                            "url": "/snipcart-jekyll-integration",
                            "price": 20.99,
                            "name": "How Google Works",
                            "description": "",
                            "image": "http://d.gr-assets.com/books/1422538855l/23158207.jpg",
                            "archived": false,
                            "statistics": {
                                "numberOfSales": 29,
                                "totalSales": 608.71
                            },
                            "customFields": [],
                            "metadata": {
                                "votes": 95,
                                "score": 336
                            },
                            "id": "325bfaef-d665-4c9a-a965-f5bd6ab46934",
                            "creationDate": "2016-05-25T21:21:27.213Z",
                            "modificationDate": "2016-11-01T16:20:44.377Z"
                        },
                        {
                            "mode": "Test",
                            "userDefinedId": "AP1",
                            "url": "/product-examples.html",
                            "price": 299.99,
                            "name": "Android Phone",
                            "description": "",
                            "image": "",
                            "archived": false,
                            "inventoryManagementMethod": "Variant",
                            "stock": 1,
                            "totalStock": 11,
                            "allowOutOfStockPurchases": false,
                            "statistics": {
                                "numberOfSales": 0,
                                "totalSales": 0
                            },
                            "customFields": [
                                {
                                    "name": "Size",
                                    "operation": "+200.00",
                                    "type": "dropdown",
                                    "options": "16GB|32GB[+50.00]|128GB[+200.00]",
                                    "required": false,
                                    "value": "128GB",
                                    "optionsArray": [
                                        "16GB",
                                        "32GB",
                                        "128GB"
                                    ]
                                },
                                {
                                    "name": "Color",
                                    "operation": "",
                                    "type": "dropdown",
                                    "options": "Black|Blue|Red|White",
                                    "required": false,
                                    "value": "Blue",
                                    "optionsArray": [
                                        "Black",
                                        "Blue",
                                        "Red",
                                        "White"
                                    ]
                                }
                            ],
                            "variants": [
                                {
                                    "stock": 10,
                                    "variation": [
                                        {
                                            "name": "Size",
                                            "option": "16GB"
                                        },
                                        {
                                            "name": "Color",
                                            "option": "Black"
                                        }
                                    ],
                                    "allowOutOfStockPurchases": true
                                },
                                {
                                    "stock": 1,
                                    "variation": [
                                        {
                                            "name": "Size",
                                            "option": "32GB"
                                        },
                                        {
                                            "name": "Color",
                                            "option": "Red"
                                        }
                                    ],
                                    "allowOutOfStockPurchases": false
                                }
                            ],
                            "metadata": {
                                "meta": true
                            },
                            "id": "3932ecd1-6508-4209-a7c6-8da4cc75590d",
                            "creationDate": "2016-11-03T12:51:04.297Z",
                            "modificationDate": "2016-11-03T12:51:28.873Z"
                        }
                    ]
                },
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
                                id:6,
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
        methods:{
            infiniteScrolling(){
                this.productCount=this.productCount+10;
            }
        }

    }

</script>
