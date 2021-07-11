<template>
  <div>
    <ProductFilterBar 
        class="stickyFilterBar" 
        :products="filteredProducts.length"
        ref="filter"
    >
    </ProductFilterBar>
    <v-container class="pa-lg-7" fluid>
      <v-row>
        <v-col cols="12" lg="4" md="6" v-for="(product,idx) in filteredProducts" :key="'product_'+idx">
          <ProductItem :productItem="product"></ProductItem>
        </v-col>
      </v-row>
      <!--<div v-intersect="infiniteScrolling" style="height: 100px;width: 100%"></div>-->
    </v-container>
    <OrganismsShopIcon class="pb-10"/>
  </div>
</template>

<script>

    export default {
        name: 'shop',
        async asyncData(context) {
            const {$content, app} = context;
            const lang_path = app.i18n.locale.split('-')[0] === 'en' ? 'en-us' : 'fr-fr';
            const productsItem = await $content(`router/${lang_path}/shop`).only(['name','image','currency','slug','colors']).fetch();
            const filter = await $content(`/filter`, 'type').fetch();
            return {
                productsItem,
                filter: {
                    colors: filter.colors,
                    materials: filter.materials
                }
            }
        },
        data() {
            return {
                filterChecked: {
                    material: null,
                    color: null
                }
            }
        },
        /*created(){
            this.$gtm.push({ 
                event: "impressions", 
                eventCategory: "Ecommerce", 
                eventAction: "Impression",
                eventLabel: this.$route.path,
                ecommerce: 
                    {
                        impressions: 
                                    [{
                                        name: this.productItem.name,       
                                        id: this.product.id,
                                        price: this.product.price,
                                        brand: this.product.brand,
                                        category: this.product.category.name,
                                        position: 1
                                    },
                                    {
                                        name: this.productItem.name,
                                        id: this.product.id,
                                        price: this.product.price,
                                        brand: this.product.brand,
                                        category: this.product.category.name,
                                        position: 2
                                    }]
                }
            })
        },*/
        computed: {
            filteredProducts() {
                if (this.filterChecked.material || this.filterChecked.color) {
                    var items = this.productsItem
                    if (this.filterChecked.material) {
                        items = items.filter(item => {
                            return item.material.some(mat => mat.id === this.filterChecked.material.id)
                        })
                    }
                    if (this.filterChecked.color) {
                        items = items.filter(item => {
                            return item.colors.some(col => col.id === this.filterChecked.color.id)
                        })
                    }
                    return items;
                } else {
                    return this.productsItem
                }

            }
        }
    }
</script>

